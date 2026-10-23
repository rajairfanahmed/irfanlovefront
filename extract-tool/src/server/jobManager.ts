import fs from 'fs';
import path from 'path';
import { chromium, Browser } from 'playwright';
import { validateTargetUrl } from './urlValidator';
import { discoverPages, DiscoveredPage } from './pageDiscovery';
import { runCapturePipeline } from './captureEngine';

export type JobState =
  | 'queued'
  | 'discovering'
  | 'capturing'
  | 'packaging'
  | 'done'
  | 'failed'
  | 'cancelled';

export interface JobDownloadInfo {
  url: string;
  filename: string;
  sizeBytes: number;
  sizeFormatted: string;
  images: number;
  pages: number;
  failedPages: number;
  flaggedPages?: number;
}

export interface JobErrorInfo {
  code: string;
  message: string;
}

export interface JobSnapshot {
  jobId: string;
  state: JobState;
  percent: number;
  stage: string;
  pagesDone: number;
  pagesTotal: number;
  imagesDone: number;
  failedPages: number;
  flaggedPages?: number;
  url: string;
  domain: string;
  viewports: string[];
  options: {
    animatedSite: boolean;
    hideOverlays: boolean;
    flattenSticky: boolean;
  };
  download?: JobDownloadInfo;
  error?: JobErrorInfo;
  createdAt: number;
}

export type JobEventListener = (snapshot: JobSnapshot) => void;

class JobManager {
  private jobs: Map<string, JobSnapshot> = new Map();
  private listeners: Map<string, Set<JobEventListener>> = new Map();
  private abortControllers: Map<string, AbortController> = new Map();
  private activeJobsCount: number = 0;
  private maxConcurrentJobs: number = 2;
  private baseStorageDir: string;

  constructor() {
    this.baseStorageDir = path.join(process.cwd(), '.jobs_data');
    if (!fs.existsSync(this.baseStorageDir)) {
      fs.mkdirSync(this.baseStorageDir, { recursive: true });
    }

    // Schedule cleanup every 15 minutes for jobs older than 60 minutes
    setInterval(() => {
      this.cleanupExpiredJobs(60 * 60 * 1000);
    }, 15 * 60 * 1000);
  }

  public getJob(jobId: string): JobSnapshot | undefined {
    return this.jobs.get(jobId);
  }

  public subscribe(jobId: string, listener: JobEventListener): () => void {
    if (!this.listeners.has(jobId)) {
      this.listeners.set(jobId, new Set());
    }
    const set = this.listeners.get(jobId)!;
    set.add(listener);

    // Send immediate snapshot if job exists
    const job = this.jobs.get(jobId);
    if (job) {
      listener(job);
    }

    return () => {
      set.delete(listener);
      if (set.size === 0) {
        this.listeners.delete(jobId);
      }
    };
  }

  private broadcast(jobId: string, update: Partial<JobSnapshot>) {
    const job = this.jobs.get(jobId);
    if (!job) return;

    // Ensure percent never decreases
    if (update.percent !== undefined) {
      update.percent = Math.max(job.percent, update.percent);
    }

    Object.assign(job, update);

    const set = this.listeners.get(jobId);
    if (set) {
      for (const listener of set) {
        try {
          listener(job);
        } catch (err) {
          console.error(`Listener error for job ${jobId}:`, err);
        }
      }
    }
  }

  public async createJob(params: {
    url: string;
    viewports: string[];
    options: {
      animatedSite?: boolean;
      hideOverlays?: boolean;
      flattenSticky?: boolean;
    };
  }): Promise<{ jobId: string } | { error: string; message: string; status: number }> {
    // Check concurrency
    if (this.activeJobsCount >= this.maxConcurrentJobs) {
      return {
        error: 'TOO_MANY_JOBS',
        message: 'The server is busy. Try again in a minute.',
        status: 429,
      };
    }

    // Validate viewports
    if (!params.viewports || params.viewports.length === 0) {
      return {
        error: 'NO_VIEWPORT',
        message: 'Select at least one viewport.',
        status: 400,
      };
    }

    // Validate URL safety
    const valResult = await validateTargetUrl(params.url);
    if (!valResult.valid) {
      return {
        error: valResult.error || 'INVALID_URL',
        message: valResult.message || 'Enter a full website address, for example https://example.com',
        status: 400,
      };
    }

    const jobId = `job_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const jobDir = path.join(this.baseStorageDir, jobId);
    fs.mkdirSync(jobDir, { recursive: true });

    const abortController = new AbortController();
    this.abortControllers.set(jobId, abortController);

    const snapshot: JobSnapshot = {
      jobId,
      state: 'queued',
      percent: 0,
      stage: 'Finding pages',
      pagesDone: 0,
      pagesTotal: 1,
      imagesDone: 0,
      failedPages: 0,
      url: valResult.normalizedUrl!,
      domain: valResult.domain!,
      viewports: params.viewports,
      options: {
        animatedSite: params.options.animatedSite !== false,
        hideOverlays: params.options.hideOverlays !== false,
        flattenSticky: params.options.flattenSticky !== false,
      },
      createdAt: Date.now(),
    };

    this.jobs.set(jobId, snapshot);

    // Launch worker asynchronously
    this.runWorker(jobId, jobDir, abortController).catch((err) => {
      console.error(`Worker error for job ${jobId}:`, err);
    });

    return { jobId };
  }

  private async runWorker(jobId: string, jobDir: string, abortController: AbortController) {
    this.activeJobsCount++;
    const job = this.jobs.get(jobId);
    if (!job) return;

    let browser: Browser | null = null;

    try {
      if (abortController.signal.aborted) return;

      // 1. Discovery phase (0 - 5%)
      this.broadcast(jobId, {
        state: 'discovering',
        percent: 2,
        stage: 'Finding pages',
      });

      browser = await chromium.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
      });

      const discoveryContext = await browser.newContext();
      const discoveryPage = await discoveryContext.newPage();

      let pages: DiscoveredPage[] = [];
      try {
        await discoveryPage.goto(job.url, { waitUntil: 'domcontentloaded', timeout: 25000 });
        pages = await discoverPages(job.url, discoveryPage, 20);
      } catch (discErr) {
        console.warn(`Discovery navigation warning:`, discErr);
        // Fallback to home page only
        pages = [{
          url: job.url,
          path: '/',
          folderName: 'home-page',
        }];
      } finally {
        await discoveryContext.close();
        await browser.close();
        browser = null;
      }

      if (abortController.signal.aborted) return;

      this.broadcast(jobId, {
        state: 'capturing',
        percent: 5,
        stage: `Discovered ${pages.length} pages. Starting capture...`,
        pagesTotal: pages.length,
      });

      // 2. Capture phase (5 - 97%)
      const captureResult = await runCapturePipeline({
        jobId,
        domain: job.domain,
        pages,
        viewports: job.viewports,
        options: job.options,
        jobDir,
        shouldAbort: () => abortController.signal.aborted,
        onProgress: (update) => {
          this.broadcast(jobId, {
            percent: update.percent,
            stage: update.stage,
            pagesDone: update.pagesDone,
            pagesTotal: update.pagesTotal,
            imagesDone: update.imagesDone,
            failedPages: update.failedPages,
          });
        },
      });

      if (abortController.signal.aborted) return;

      // 3. Packaging & Done phase (100%)
      const sizeMb = (captureResult.totalSize / (1024 * 1024)).toFixed(1);

      this.broadcast(jobId, {
        state: 'done',
        percent: 100,
        stage: 'Capture complete',
        pagesDone: captureResult.totalPages,
        pagesTotal: pages.length,
        imagesDone: captureResult.totalImages,
        failedPages: captureResult.failedPages,
        download: {
          url: `/api/jobs/${jobId}/download`,
          filename: `${job.domain}.zip`,
          sizeBytes: captureResult.totalSize,
          sizeFormatted: `${sizeMb} MB`,
          images: captureResult.totalImages,
          pages: captureResult.totalPages,
          failedPages: captureResult.failedPages,
          flaggedPages: captureResult.flaggedPages,
        },
      });
    } catch (err: unknown) {
      if (abortController.signal.aborted) return;

      const errorMessage = err instanceof Error ? err.message : String(err);
      console.error(`Job ${jobId} failed:`, errorMessage);

      let errorCode = 'UNREACHABLE';
      let errorMsg = "We couldn't open this website. Check the address and try again.";

      if (errorMessage === 'BOT_PROTECTION') {
        errorCode = 'BOT_PROTECTION';
        errorMsg = 'This website blocks automated browsers. Try another site, or allow this server in the site\'s firewall if you own it.';
      } else if (errorMessage === 'LOADING_TIMEOUT') {
        errorCode = 'LOADING_TIMEOUT';
        errorMsg = 'This page never finished loading, so it was skipped instead of saving empty images.';
      } else if (errorMessage === 'GATE') {
        errorCode = 'GATE';
        errorMsg = 'This page asks for a confirmation (such as age or consent) that the tool cannot answer.';
      }

      this.broadcast(jobId, {
        state: 'failed',
        stage: 'Capture failed',
        error: {
          code: errorCode,
          message: errorMsg,
        },
      });
    } finally {
      this.activeJobsCount = Math.max(0, this.activeJobsCount - 1);
      if (browser) {
        try {
          await browser.close();
        } catch {
          // ignore
        }
      }
      this.abortControllers.delete(jobId);
    }
  }

  public cancelJob(jobId: string): boolean {
    const job = this.jobs.get(jobId);
    if (!job) return false;

    const controller = this.abortControllers.get(jobId);
    if (controller) {
      controller.abort();
      this.abortControllers.delete(jobId);
    }

    this.broadcast(jobId, {
      state: 'cancelled',
      stage: 'Capture cancelled.',
    });

    // Clean up temporary files
    const jobDir = path.join(this.baseStorageDir, jobId);
    try {
      if (fs.existsSync(jobDir)) {
        fs.rmSync(jobDir, { recursive: true, force: true });
      }
    } catch (err) {
      console.error(`Error deleting files for cancelled job ${jobId}:`, err);
    }

    return true;
  }

  public getZipFilePath(jobId: string): string | null {
    const job = this.jobs.get(jobId);
    if (!job) return null;

    const zipPath = path.join(this.baseStorageDir, jobId, `${job.domain}.zip`);
    if (fs.existsSync(zipPath)) {
      return zipPath;
    }
    return null;
  }

  private cleanupExpiredJobs(maxAgeMs: number) {
    const now = Date.now();
    for (const [jobId, job] of this.jobs.entries()) {
      if (now - job.createdAt > maxAgeMs) {
        this.jobs.delete(jobId);
        this.listeners.delete(jobId);
        const jobDir = path.join(this.baseStorageDir, jobId);
        try {
          if (fs.existsSync(jobDir)) {
            fs.rmSync(jobDir, { recursive: true, force: true });
          }
        } catch {
          // ignore
        }
      }
    }
  }
}

// Global singleton instance across Next.js API Route invocations
const globalForJobManager = globalThis as unknown as { jobManager?: JobManager };
export const jobManager = globalForJobManager.jobManager ?? new JobManager();
if (process.env.NODE_ENV !== 'production') {
  globalForJobManager.jobManager = jobManager;
}
