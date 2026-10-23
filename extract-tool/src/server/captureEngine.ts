import { chromium, Browser, BrowserContext, Page } from 'playwright';
import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';
import { DiscoveredPage } from './pageDiscovery';
import { waitUntilReady, isChallengePage, ReadinessResult } from './readinessGate';
import { SectionNameResolver, NameSource } from './sectionNamer';
import { detectSiteProfiles, SiteProfile } from './siteProfileDetector';
import { inspectImageQuality } from './qualityGate';

export interface ViewportDefinition {
  id: string; // 'desktop' | 'tablet' | 'mobile'
  label: string;
  width: number;
  height: number;
  scale: number;
  isMobile?: boolean;
  hasTouch?: boolean;
}

export const VIEWPORT_SPECS: Record<string, ViewportDefinition> = {
  desktop: {
    id: 'desktop',
    label: 'Desktop (1920px)',
    width: 1920,
    height: 1080,
    scale: 1, // 1920 x 1080 Full HD output
  },
  tablet: {
    id: 'tablet',
    label: 'Tablet (768px)',
    width: 768,
    height: 1024,
    scale: 2, // 1536 x 2048 Full HD output
  },
  mobile: {
    id: 'mobile',
    label: 'Mobile (390px)',
    width: 390,
    height: 844,
    scale: 2, // 780 x 1688 Full HD output
    isMobile: true,
    hasTouch: true,
  },
};

export interface RawSectionElement {
  id?: string;
  dataAttributes: Record<string, string>;
  ariaLabel?: string;
  ariaLabelledByText?: string;
  classNames: string[];
  tagName: string;
  headingText?: string;
  isHeaderOrNav: boolean;
  isFooter: boolean;
  selector: string;
  x: number;
  y: number;
  width: number;
  height: number;
  isSpacer: boolean;
  isPinned: boolean;
}

export interface SectionResult {
  filename: string;
  cleanName: string;
  nameSource: NameSource;
  selector: string;
  headingText: string;
  width: number;
  height: number;
  pixelDimensions: string;
  sizeBytes: number;
  sizeFormatted: string;
  flagged: boolean;
  flagReason?: string;
  stillLoading?: boolean;
}

export interface PageCaptureResult {
  url: string;
  folderName: string;
  viewport: string;
  status: 'ok' | 'flagged' | 'failed' | 'skipped';
  reason?: string;
  siteProfiles: SiteProfile[];
  settled: boolean;
  readinessResult?: ReadinessResult;
  sections: SectionResult[];
  error?: string;
}

export interface CaptureProgressUpdate {
  percent: number;
  stage: string;
  pagesDone: number;
  pagesTotal: number;
  imagesDone: number;
  failedPages: number;
}

export interface RunCaptureOptions {
  jobId: string;
  domain: string;
  pages: DiscoveredPage[];
  viewports: string[];
  options: {
    animatedSite: boolean;
    hideOverlays: boolean;
    flattenSticky: boolean;
  };
  jobDir: string;
  onProgress: (update: CaptureProgressUpdate) => void;
  shouldAbort: () => boolean;
}

// Locate local Google Chrome or Microsoft Edge on Windows
function getBrowserExecutablePath(): string | undefined {
  const possiblePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  return undefined;
}

// Consistent User-Agent across all contexts of a job (Section 1.3)
const UNIFIED_USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

// Restricted Sticky Nav Flattening (Section 3)
async function applyRestrictedFlattenSticky(page: Page) {
  await page.evaluate(() => {
    const vHeight = window.innerHeight;
    const candidates = Array.from(
      document.querySelectorAll('header, nav, [style*="position: fixed"], [style*="position: sticky"], .sticky, .fixed')
    );

    candidates.forEach((el) => {
      const htmlEl = el as HTMLElement;
      const rect = htmlEl.getBoundingClientRect();
      const area = rect.width * rect.height;
      const vArea = window.innerWidth * vHeight;

      // RULE: Never flatten an element covering > 80% viewport, containing canvas, or background layer
      if (area >= vArea * 0.8) return;
      if (htmlEl.querySelector('canvas') !== null) return;
      if (htmlEl.tagName === 'CANVAS') return;

      // Only flatten elements behaving like a bar (small share of viewport height < 200px, attached to top or bottom)
      const isTopOrBottom = rect.top <= 20 || Math.abs(rect.bottom - vHeight) <= 20;
      if (isTopOrBottom && rect.height <= 220) {
        htmlEl.style.setProperty('position', 'static', 'important');
        htmlEl.style.setProperty('top', 'auto', 'important');
      }
    });
  });
}

// Hide Overlays with custom cursors and noise layers (Section 3)
async function applyHideOverlays(page: Page) {
  await page.evaluate(() => {
    const knownSelectors = [
      '#onetrust-consent-sdk',
      '#cookie-notice',
      '.cookie-banner',
      '.cookie-consent',
      '.cookie-modal',
      '.cky-consent-container',
      '#hs-eu-cookie-confirmation',
      '[id*="cookie"]',
      '[class*="cookie"]',
      '[id*="consent"]',
      '[class*="consent"]',
      '[id*="modal-backdrop"]',
      '.modal-backdrop',
      '[role="dialog"][aria-modal="true"]',
      '#intercom-container',
      '#hubspot-messages-iframe-container',
      '.crisp-client',
      '.drift-frame-controller',
      // Custom cursors
      '[class*="cursor-dot"]',
      '[class*="custom-cursor"]',
      '#custom-cursor',
      '.pointer-events-none[class*="cursor"]',
    ];

    knownSelectors.forEach((sel) => {
      try {
        document.querySelectorAll(sel).forEach((el) => {
          const htmlEl = el as HTMLElement;
          htmlEl.style.setProperty('display', 'none', 'important');
          htmlEl.style.setProperty('opacity', '0', 'important');
          htmlEl.style.setProperty('pointer-events', 'none', 'important');
        });
      } catch {
        // ignore selector error
      }
    });

    // Remove scroll locks
    document.documentElement.style.setProperty('overflow', 'auto', 'important');
    document.body.style.setProperty('overflow', 'auto', 'important');
  });
}

// Animated site treatments (Section 3)
async function applyAnimatedSiteTreatment(page: Page, isSmoothScroll: boolean) {
  if (isSmoothScroll) {
    // Scroll with mouse wheel events
    await page.evaluate(async () => {
      await new Promise<void>((resolve) => {
        let currentY = 0;
        const maxScroll = Math.max(document.body.scrollHeight, 3000);
        const timer = setInterval(() => {
          window.dispatchEvent(new WheelEvent('wheel', { deltaY: 400 }));
          window.scrollBy(0, 400);
          currentY += 400;
          if (currentY >= maxScroll + 500) {
            clearInterval(timer);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 80);
      });
    });
  } else {
    // Normal scroll pass
    await page.evaluate(async () => {
      await new Promise<void>((resolve) => {
        let currentY = 0;
        const step = window.innerHeight * 0.8;
        const maxScroll = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        const interval = setInterval(() => {
          window.scrollBy(0, step);
          currentY += step;
          if (currentY >= maxScroll + 500) {
            clearInterval(interval);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 100);
      });
    });
  }

  // Settle Web Animations and neutralize CSS transitions
  await page.evaluate(() => {
    try {
      if ('getAnimations' in document) {
        document.getAnimations().forEach((anim) => {
          try {
            if (anim.playState === 'running') anim.finish();
          } catch {
            // ignore infinite animation finish
          }
        });
      }
    } catch {
      // fallback
    }

    const style = document.createElement('style');
    style.innerHTML = `
      *, *::before, *::after {
        transition-property: none !important;
        animation-duration: 0.001s !important;
      }
    `;
    document.head.appendChild(style);
  });

  await page.waitForTimeout(400);
}

// Section Detection Ladder (Section 3 & 2)
async function collectSectionElements(page: Page): Promise<RawSectionElement[]> {
  return await page.evaluate(() => {
    const rawList: RawSectionElement[] = [];

    const isVisible = (el: Element): boolean => {
      const style = window.getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
        return false;
      }
      const rect = el.getBoundingClientRect();
      return rect.height >= 40 && rect.width >= 100;
    };

    const extractDataAttributes = (el: Element): Record<string, string> => {
      const attrs: Record<string, string> = {};
      const targetKeys = [
        'data-framer-name',
        'data-section-name',
        'data-section',
        'data-name',
        'data-component',
        'data-block-name',
        'data-scroll-section',
      ];
      for (const k of targetKeys) {
        const v = el.getAttribute(k);
        if (v) attrs[k] = v;
      }
      return attrs;
    };

    const extractClassList = (el: Element): string[] => {
      if (typeof el.className === 'string') {
        return el.className.split(/\s+/).filter(Boolean);
      }
      return [];
    };

    // 1. Header / Navbar
    const navEl = document.querySelector('header, nav, [role="banner"]');
    if (navEl && isVisible(navEl)) {
      const rect = navEl.getBoundingClientRect();
      rawList.push({
        id: navEl.id || undefined,
        dataAttributes: extractDataAttributes(navEl),
        ariaLabel: navEl.getAttribute('aria-label') || undefined,
        classNames: extractClassList(navEl),
        tagName: navEl.tagName,
        headingText: navEl.querySelector('h1, h2, h3')?.textContent?.trim() || undefined,
        isHeaderOrNav: true,
        isFooter: false,
        selector: 'header, nav',
        x: rect.x + window.scrollX,
        y: rect.y + window.scrollY,
        width: rect.width,
        height: rect.height,
        isSpacer: false,
        isPinned: false,
      });
    }

    // 2. Direct children of main or semantic sections
    const candidates: Element[] = [];
    const mainEl = document.querySelector('main');
    if (mainEl && mainEl.children.length > 0) {
      Array.from(mainEl.children).forEach((child) => {
        if (isVisible(child)) candidates.push(child);
      });
    }

    if (candidates.length <= 1) {
      const sectionTags = Array.from(document.querySelectorAll('section, article, [data-scroll-section], [data-section]'));
      sectionTags.forEach((s) => {
        if (isVisible(s) && !candidates.includes(s)) {
          const isNested = candidates.some((parent) => parent.contains(s));
          if (!isNested) candidates.push(s);
        }
      });
    }

    candidates.forEach((el) => {
      if (el.tagName === 'HEADER' || el.tagName === 'NAV' || el.tagName === 'FOOTER') return;

      const rect = el.getBoundingClientRect();
      if (rect.height < 40) return;

      const isPinSpacer = el.classList.contains('pin-spacer');
      let effectiveHeight = rect.height;
      if (isPinSpacer) {
        // For pinned sections, capture at 1 viewport height, not the huge spacer height!
        effectiveHeight = Math.min(window.innerHeight, rect.height);
      }

      rawList.push({
        id: el.id || undefined,
        dataAttributes: extractDataAttributes(el),
        ariaLabel: el.getAttribute('aria-label') || undefined,
        ariaLabelledByText: el.getAttribute('aria-labelledby')
          ? document.getElementById(el.getAttribute('aria-labelledby')!)?.textContent?.trim()
          : undefined,
        classNames: extractClassList(el),
        tagName: el.tagName,
        headingText: el.querySelector('h1, h2, h3, h4')?.textContent?.trim() || undefined,
        isHeaderOrNav: false,
        isFooter: false,
        selector: el.id ? `#${el.id}` : el.tagName.toLowerCase(),
        x: rect.x + window.scrollX,
        y: rect.y + window.scrollY,
        width: rect.width,
        height: effectiveHeight,
        isSpacer: rect.height < 120 && (el.textContent || '').trim().length === 0,
        isPinned: isPinSpacer,
      });
    });

    // 3. Footer
    const footerEl = document.querySelector('footer, [role="contentinfo"]');
    if (footerEl && isVisible(footerEl)) {
      const rect = footerEl.getBoundingClientRect();
      rawList.push({
        id: footerEl.id || undefined,
        dataAttributes: extractDataAttributes(footerEl),
        ariaLabel: footerEl.getAttribute('aria-label') || undefined,
        classNames: extractClassList(footerEl),
        tagName: footerEl.tagName,
        headingText: footerEl.querySelector('h1, h2, h3')?.textContent?.trim() || undefined,
        isHeaderOrNav: false,
        isFooter: true,
        selector: 'footer',
        x: rect.x + window.scrollX,
        y: rect.y + window.scrollY,
        width: rect.width,
        height: rect.height,
        isSpacer: false,
        isPinned: false,
      });
    }

    // Step 4 in ladder: Fallback viewport slices if <= 1 section found
    if (rawList.length <= 1) {
      rawList.length = 0;
      const scrollHeight = Math.max(document.body.scrollHeight, 1200);
      const sliceHeight = 900;
      const sliceCount = Math.min(Math.ceil(scrollHeight / sliceHeight), 8);

      for (let i = 0; i < sliceCount; i++) {
        const isFirst = i === 0;
        const isLast = i === sliceCount - 1;
        rawList.push({
          dataAttributes: {},
          classNames: [],
          tagName: 'DIV',
          isHeaderOrNav: isFirst,
          isFooter: isLast,
          selector: `frame-0${i + 1}`,
          x: 0,
          y: i * sliceHeight,
          width: window.innerWidth,
          height: Math.min(sliceHeight, scrollHeight - i * sliceHeight),
          isSpacer: false,
          isPinned: false,
        });
      }
    }

    return rawList;
  });
}

export async function runCapturePipeline(options: RunCaptureOptions): Promise<{
  zipPath: string;
  totalImages: number;
  totalSize: number;
  totalPages: number;
  failedPages: number;
  flaggedPages: number;
  manifest: Record<string, unknown>;
}> {
  const {
    domain,
    pages,
    viewports,
    options: toolOptions,
    jobDir,
    onProgress,
    shouldAbort,
  } = options;

  let currentPercent = 5;
  const updateMonotonicProgress = (
    targetPercent: number,
    stageText: string,
    pagesDone: number,
    imagesDone: number,
    failedPages: number
  ) => {
    currentPercent = Math.max(currentPercent, Math.min(97, targetPercent));
    onProgress({
      percent: Math.round(currentPercent),
      stage: stageText,
      pagesDone,
      pagesTotal: pages.length,
      imagesDone,
      failedPages,
    });
  };

  // Launch Chromium with Software GL & Background throttling disabled (Section 3 & 4)
  const executablePath = getBrowserExecutablePath();
  const browser: Browser = await chromium.launch({
    executablePath,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--enable-webgl',
      '--ignore-gpu-blocklist',
      '--use-gl=angle',
      '--use-angle=swiftshader',
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-renderer-backgrounding',
      '--no-first-run',
    ],
  });

  const zip = new JSZip();
  const siteRootZip = zip.folder(domain) || zip;

  const results: PageCaptureResult[] = [];
  let totalImagesCaptured = 0;
  let totalBytesSaved = 0;
  let completedPagesCount = 0;
  let failedPagesCount = 0;
  let flaggedPagesCount = 0;
  let recoveryNeededCount = 0;

  // Stored state for clearance reuse across viewports (Section 1.3)
  let savedStorageState: Record<string, unknown> | undefined = undefined;

  const activeViewports = viewports.map((vp) => VIEWPORT_SPECS[vp]).filter(Boolean);
  const totalUnits = pages.length * activeViewports.length;
  let currentUnit = 0;

  try {
    for (const vp of activeViewports) {
      if (shouldAbort()) break;

      const vpZipFolder = siteRootZip.folder(vp.id) || siteRootZip;

      // Create context with unified User-Agent and reused clearance state
      const contextOptions: Parameters<Browser['newContext']>[0] = {
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: vp.scale,
        isMobile: vp.isMobile || false,
        hasTouch: vp.hasTouch || false,
        userAgent: UNIFIED_USER_AGENT,
      };

      if (savedStorageState) {
        contextOptions.storageState = savedStorageState as any;
      }

      const context: BrowserContext = await browser.newContext(contextOptions);

      // Fulfill analytics with empty 200 responses so scripts don't hang (Section 4)
      await context.route('**/*', (route) => {
        const reqUrl = route.request().url().toLowerCase();
        if (
          reqUrl.includes('google-analytics') ||
          reqUrl.includes('googletagmanager') ||
          reqUrl.includes('facebook.net') ||
          reqUrl.includes('doubleclick') ||
          reqUrl.includes('analytics.js') ||
          reqUrl.includes('gtag/js')
        ) {
          route.fulfill({
            status: 200,
            contentType: 'application/javascript',
            body: '/* analytics stub */',
          });
        } else {
          route.continue();
        }
      });

      try {
        for (const pg of pages) {
          if (shouldAbort()) break;

          currentUnit++;
          const unitBasePercent = 5 + (currentUnit - 1) * (92 / totalUnits);
          const stageName = `Capturing ${pg.folderName}, ${vp.id}...`;
          updateMonotonicProgress(
            unitBasePercent,
            stageName,
            completedPagesCount,
            totalImagesCaptured,
            failedPagesCount
          );

          const page = await context.newPage();

          try {
            // Navigate to page
            await page.goto(pg.url, {
              waitUntil: 'domcontentloaded',
              timeout: 35000,
            });

            // 1. Unified Readiness Gate: never capture challenge or loading screens (Step 2)
            const readiness = await waitUntilReady(page, context, {
              maxTimeoutMs: 30000,
              stabilityWindowMs: 800,
              onProgress: (stage) => {
                updateMonotonicProgress(
                  unitBasePercent,
                  stage,
                  completedPagesCount,
                  totalImagesCaptured,
                  failedPagesCount
                );
              },
            });

            if (readiness.skipButtonClicked || readiness.reducedMotionUsed) {
              recoveryNeededCount++;
            }

            // If challenge page or loader timeout: fail page honestly (NEVER save bad screenshot)
            if (!readiness.ready) {
              failedPagesCount++;
              results.push({
                url: pg.url,
                folderName: pg.folderName,
                viewport: vp.id,
                status: 'failed',
                reason: readiness.reason || 'LOADING_TIMEOUT',
                siteProfiles: [],
                settled: false,
                readinessResult: readiness,
                sections: [],
                error: readiness.reason,
              });

              // If home page failed with BOT_PROTECTION, throw to end job honestly
              if (pg.path === '/' && readiness.reason === 'BOT_PROTECTION') {
                throw new Error('BOT_PROTECTION');
              }
              continue;
            }

            // Save clearance state after first successful clearance
            if (!savedStorageState) {
              try {
                savedStorageState = await context.storageState();
              } catch {
                // ignore
              }
            }

            // 2. Detect site profiles
            const siteProfiles = await detectSiteProfiles(page);
            const isSmoothScroll = siteProfiles.includes('smooth-scroll');

            // 3. Preparations in exact order
            if (toolOptions.animatedSite) {
              await applyAnimatedSiteTreatment(page, isSmoothScroll);
            }

            if (toolOptions.hideOverlays) {
              await applyHideOverlays(page);
            }

            if (toolOptions.flattenSticky) {
              await applyRestrictedFlattenSticky(page);
            }

            // 4. Collect section candidates
            const rawSections = await collectSectionElements(page);
            const namer = new SectionNameResolver();

            const pageFolderDisk = path.join(jobDir, domain, vp.id, pg.folderName);
            fs.mkdirSync(pageFolderDisk, { recursive: true });

            const pageZipFolder = vpZipFolder.folder(pg.folderName) || vpZipFolder;
            const capturedSections: SectionResult[] = [];
            let pageHasFlag = false;

            // 5. Capture each section with SectionNameResolver and Quality Gate
            for (let sIdx = 0; sIdx < rawSections.length; sIdx++) {
              if (shouldAbort()) break;

              const rawSec = rawSections[sIdx];
              const resolvedName = namer.resolve(rawSec, sIdx + 1);

              const secProgressPercent =
                unitBasePercent + ((sIdx + 1) / rawSections.length) * (92 / totalUnits);
              const secStage = `Capturing ${pg.folderName}, ${vp.id}, section ${sIdx + 1} of ${rawSections.length}`;
              updateMonotonicProgress(
                secProgressPercent,
                secStage,
                completedPagesCount,
                totalImagesCaptured,
                failedPagesCount
              );

              // Scroll to section
              await page.evaluate((y) => window.scrollTo(0, y), Math.max(0, rawSec.y));
              await page.waitForTimeout(150);

              const clipY = Math.max(0, rawSec.y);
              const clipHeight = Math.min(Math.max(40, rawSec.height), 12000);

              let buffer: Buffer;
              try {
                buffer = await page.screenshot({
                  type: 'png',
                  clip: {
                    x: 0,
                    y: clipY,
                    width: vp.width,
                    height: clipHeight,
                  },
                });
              } catch {
                buffer = await page.screenshot({ type: 'png' });
              }

              // Quality Gate inspection (Section 4 & 6)
              let qResult = inspectImageQuality(buffer, vp.width, clipHeight, rawSec.isSpacer);
              let sectionFlagged = false;
              let flagReason: string | undefined = undefined;

              if (qResult.rejected) {
                // Retry once after short pause
                await page.waitForTimeout(400);
                try {
                  buffer = await page.screenshot({
                    type: 'png',
                    clip: { x: 0, y: clipY, width: vp.width, height: clipHeight },
                  });
                } catch {
                  // ignore
                }
                qResult = inspectImageQuality(buffer, vp.width, clipHeight, rawSec.isSpacer);
                if (qResult.rejected) {
                  sectionFlagged = true;
                  flagReason = qResult.reason;
                  pageHasFlag = true;
                  flaggedPagesCount++;
                }
              }

              // Verification Gate: Never save challenge page
              const midCheck = await isChallengePage(page);
              if (midCheck.isChallenge) {
                continue; // Discard challenge screenshot
              }

              // Save screenshot to disk and ZIP
              const filepath = path.join(pageFolderDisk, resolvedName.filename);
              fs.writeFileSync(filepath, buffer);
              pageZipFolder.file(resolvedName.filename, buffer);

              totalBytesSaved += buffer.length;
              totalImagesCaptured++;

              const pixelWidth = Math.round(vp.width * vp.scale);
              const pixelHeight = Math.round(clipHeight * vp.scale);

              capturedSections.push({
                filename: resolvedName.filename,
                cleanName: resolvedName.cleanName,
                nameSource: resolvedName.nameSource,
                selector: rawSec.selector,
                headingText: resolvedName.headingText,
                width: pixelWidth,
                height: pixelHeight,
                pixelDimensions: `${pixelWidth} x ${pixelHeight}`,
                sizeBytes: buffer.length,
                sizeFormatted: `${(buffer.length / 1024).toFixed(1)} KB`,
                flagged: sectionFlagged,
                flagReason,
                stillLoading: false,
              });
            }

            results.push({
              url: pg.url,
              folderName: pg.folderName,
              viewport: vp.id,
              status: pageHasFlag ? 'flagged' : 'ok',
              siteProfiles,
              settled: readiness.settled,
              readinessResult: readiness,
              sections: capturedSections,
            });

            completedPagesCount++;
          } catch (pageErr: unknown) {
            const msg = pageErr instanceof Error ? pageErr.message : String(pageErr);
            if (msg === 'BOT_PROTECTION') {
              throw pageErr; // Re-throw to end job with BOT_PROTECTION
            }
            failedPagesCount++;
            results.push({
              url: pg.url,
              folderName: pg.folderName,
              viewport: vp.id,
              status: 'failed',
              reason: msg,
              siteProfiles: [],
              settled: false,
              sections: [],
              error: msg,
            });
          } finally {
            await page.close();
          }
        }
      } finally {
        await context.close();
      }
    }

    // Step 5: Packaging & Enhanced Manifest additions
    onProgress({
      percent: 98,
      stage: 'Packaging Full HD ZIP archive...',
      pagesDone: completedPagesCount,
      pagesTotal: pages.length,
      imagesDone: totalImagesCaptured,
      failedPages: failedPagesCount,
    });

    const okPagesCount = results.filter((r) => r.status === 'ok').length;

    const manifest = {
      domain,
      capturedAt: new Date().toISOString(),
      viewports: viewports,
      summary: {
        pagesTotal: pages.length,
        pagesOk: okPagesCount,
        pagesFlagged: flaggedPagesCount,
        pagesFailed: failedPagesCount,
        pagesSkipped: 0,
        pagesNeedingRecovery: recoveryNeededCount,
        totalImages: totalImagesCaptured,
        totalSize: `${(totalBytesSaved / (1024 * 1024)).toFixed(1)} MB`,
      },
      options: toolOptions,
      pages: results,
    };

    const manifestJson = JSON.stringify(manifest, null, 2);
    fs.writeFileSync(path.join(jobDir, domain, 'manifest.json'), manifestJson);
    siteRootZip.file('manifest.json', manifestJson);

    const zipPath = path.join(jobDir, `${domain}.zip`);
    const zipBuffer = await zip.generateAsync({
      type: 'nodebuffer',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 },
    });
    fs.writeFileSync(zipPath, zipBuffer);

    return {
      zipPath,
      totalImages: totalImagesCaptured,
      totalSize: totalBytesSaved,
      totalPages: completedPagesCount,
      failedPages: failedPagesCount,
      flaggedPages: flaggedPagesCount,
      manifest,
    };
  } finally {
    await browser.close();
  }
}
