'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, AlertCircle, ArrowLeft, RefreshCw, X } from 'lucide-react';
import {
  UrlInput,
  CaptureButton,
  CircularProgress,
  ViewportSelector,
  OptionToggleCard,
  PhaseStrip,
  CapturePhase,
} from '../ui';

export type ToolState = 'idle' | 'submitting' | 'running' | 'done' | 'failed' | 'cancelled';

export interface DownloadDetails {
  url: string;
  filename: string;
  sizeBytes: number;
  sizeFormatted: string;
  images: number;
  pages: number;
  failedPages: number;
  flaggedPages?: number;
}

const ERROR_MESSAGES: Record<string, string> = {
  INVALID_URL: 'Enter a full website address, for example https://example.com',
  NO_VIEWPORT: 'Select at least one viewport.',
  BLOCKED_TARGET: "This address can't be captured. Use a public website.",
  TOO_MANY_JOBS: 'The server is busy. Try again in a minute.',
  UNREACHABLE: "We couldn't open this website. Check the address and try again.",
  ALL_PAGES_FAILED: 'The site loaded but no pages could be captured. It may block automated browsers.',
  JOB_LOST: 'This capture is no longer available. Start a new one.',
  BOT_PROTECTION: "This website blocks automated browsers. Try another site, or allow this server in the site's firewall if you own it.",
  LOADING_TIMEOUT: 'This page never finished loading, so it was skipped instead of saving empty images.',
  GATE: 'This page asks for a confirmation (such as age or consent) that the tool cannot answer.',
};

const crossfadeVariants = {
  initial: { opacity: 0, scale: 0.99 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.15, ease: 'easeOut' as const },
  },
  exit: {
    opacity: 0,
    scale: 0.99,
    transition: { duration: 0.15, ease: 'easeIn' as const },
  },
};

export function DesignCaptureCard() {
  // Input form state (defaults right for most people: all 3 viewports and all 3 options start on)
  const [url, setUrl] = useState('');
  const [viewports, setViewports] = useState<string[]>(['desktop', 'tablet', 'mobile']);
  const [animatedSite, setAnimatedSite] = useState(true);
  const [hideOverlays, setHideOverlays] = useState(true);
  const [flattenSticky, setFlattenSticky] = useState(true);

  // Flow State
  const [state, setState] = useState<ToolState>('idle');
  const [inlineError, setInlineError] = useState<string | null>(null);
  const [cancelledNotice, setCancelledNotice] = useState(false);

  // Running State
  const [jobId, setJobId] = useState<string | null>(null);
  const [percent, setPercent] = useState<number>(0);
  const [stageText, setStageText] = useState<string>('Finding pages');
  const [pagesDone, setPagesDone] = useState<number>(0);
  const [pagesTotal, setPagesTotal] = useState<number>(1);
  const [imagesDone, setImagesDone] = useState<number>(0);
  const [failedPages, setFailedPages] = useState<number>(0);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isReconnecting, setIsReconnecting] = useState<boolean>(false);
  const [currentDomain, setCurrentDomain] = useState<string>('');
  const [downloadInfo, setDownloadInfo] = useState<DownloadDetails | null>(null);

  // Failed state message
  const [failureMessage, setFailureMessage] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Tab Title synchronization
  useEffect(() => {
    if (state === 'running' && currentDomain) {
      document.title = `${Math.round(percent)}% Capturing ${currentDomain}`;
    } else if (state === 'done' && currentDomain) {
      document.title = `Done ${currentDomain}`;
    } else {
      document.title = 'Website Design Capture - SiteRip';
    }
  }, [state, percent, currentDomain]);

  // Elapsed Time Counter
  useEffect(() => {
    if (state === 'running') {
      timerRef.current = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [state]);

  // Session Storage Reconnection (Section 5)
  useEffect(() => {
    const savedJobId = sessionStorage.getItem('siterip_active_job_id');
    const savedUrl = sessionStorage.getItem('siterip_target_url');
    const savedDomain = sessionStorage.getItem('siterip_target_domain');

    if (savedJobId) {
      setJobId(savedJobId);
      if (savedUrl) setUrl(savedUrl);
      if (savedDomain) setCurrentDomain(savedDomain);
      connectToJob(savedJobId);
    }
  }, []);

  const formatElapsed = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const getPhaseFromJob = (p: number, st: string): CapturePhase => {
    if (p >= 100) return 'done';
    if (p >= 97 || st.toLowerCase().includes('packaging')) return 'packaging';
    if (p >= 5 || st.toLowerCase().includes('capturing')) return 'capturing';
    return 'discovering';
  };

  // Connect to SSE events or fallback poll
  const connectToJob = (targetJobId: string) => {
    setState('running');
    setIsReconnecting(false);

    if (abortControllerRef.current) abortControllerRef.current.abort();
    abortControllerRef.current = new AbortController();

    const eventSource = new EventSource(`/api/jobs/${targetJobId}/events`);

    eventSource.onopen = () => {
      setIsReconnecting(false);
    };

    eventSource.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);

        // Never let percentage go backwards
        if (typeof data.percent === 'number') {
          setPercent((prev) => Math.max(prev, data.percent));
        }

        if (data.stage) setStageText(data.stage);
        if (typeof data.pagesDone === 'number') setPagesDone(data.pagesDone);
        if (typeof data.pagesTotal === 'number') setPagesTotal(data.pagesTotal);
        if (typeof data.imagesDone === 'number') setImagesDone(data.imagesDone);
        if (typeof data.failedPages === 'number') setFailedPages(data.failedPages);

        if (data.state === 'done') {
          eventSource.close();
          sessionStorage.removeItem('siterip_active_job_id');
          setPercent(100);
          setStageText('Capture complete');
          if (data.download) {
            setDownloadInfo(data.download);
          }
          setState('done');
        } else if (data.state === 'failed') {
          eventSource.close();
          sessionStorage.removeItem('siterip_active_job_id');
          const code = data.error?.code || 'UNREACHABLE';
          setFailureMessage(ERROR_MESSAGES[code] || data.error?.message || ERROR_MESSAGES.UNREACHABLE);
          setState('failed');
        } else if (data.state === 'cancelled') {
          eventSource.close();
          sessionStorage.removeItem('siterip_active_job_id');
          setCancelledNotice(true);
          setState('cancelled');
        }
      } catch (err) {
        console.error('SSE JSON error:', err);
      }
    };

    eventSource.onerror = () => {
      setIsReconnecting(true);
      eventSource.close();

      // Fallback polling every 2 seconds as specified in Section 5
      const pollInterval = setInterval(async () => {
        try {
          const res = await fetch(`/api/jobs/${targetJobId}`);
          if (res.status === 404) {
            clearInterval(pollInterval);
            sessionStorage.removeItem('siterip_active_job_id');
            setFailureMessage(ERROR_MESSAGES.JOB_LOST);
            setState('failed');
            return;
          }

          if (res.ok) {
            const snap = await res.json();
            setIsReconnecting(false);
            clearInterval(pollInterval);

            // Re-open SSE if still active
            if (snap.state === 'capturing' || snap.state === 'discovering' || snap.state === 'packaging' || snap.state === 'queued') {
              connectToJob(targetJobId);
            } else if (snap.state === 'done') {
              setPercent(100);
              setStageText('Capture complete');
              if (snap.download) setDownloadInfo(snap.download);
              sessionStorage.removeItem('siterip_active_job_id');
              setState('done');
            } else if (snap.state === 'failed') {
              sessionStorage.removeItem('siterip_active_job_id');
              const code = snap.error?.code || 'UNREACHABLE';
              setFailureMessage(ERROR_MESSAGES[code] || ERROR_MESSAGES.UNREACHABLE);
              setState('failed');
            }
          }
        } catch {
          // keep polling
        }
      }, 2000);
    };
  };

  // Step 5: Press Capture
  const handleCapture = async () => {
    setInlineError(null);
    setCancelledNotice(false);

    let cleanUrl = url.trim();
    if (!cleanUrl) {
      setInlineError('Enter a full website address, for example https://example.com');
      return;
    }

    // Auto-prepend https:// if no scheme
    if (!/^https?:\/\//i.test(cleanUrl)) {
      cleanUrl = 'https://' + cleanUrl;
      setUrl(cleanUrl);
    }

    if (viewports.length === 0) {
      setInlineError('Select at least one viewport.');
      return;
    }

    setState('submitting');

    try {
      let host = 'target';
      try {
        host = new URL(cleanUrl).hostname.replace(/^www\./, '');
      } catch {
        // fallback
      }
      setCurrentDomain(host);

      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: cleanUrl,
          viewports,
          options: {
            animatedSite,
            hideOverlays,
            flattenSticky,
          },
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setState('idle');
        const code = data.error || 'INVALID_URL';
        setInlineError(ERROR_MESSAGES[code] || data.message || ERROR_MESSAGES.INVALID_URL);
        return;
      }

      const newJobId = data.jobId;
      setJobId(newJobId);
      sessionStorage.setItem('siterip_active_job_id', newJobId);
      sessionStorage.setItem('siterip_target_url', cleanUrl);
      sessionStorage.setItem('siterip_target_domain', host);

      // Reset metrics
      setPercent(0);
      setStageText('Finding pages');
      setPagesDone(0);
      setPagesTotal(1);
      setImagesDone(0);
      setFailedPages(0);
      setElapsedSeconds(0);

      // Move to running state
      connectToJob(newJobId);
    } catch (err: unknown) {
      setState('idle');
      const msg = err instanceof Error ? err.message : String(err);
      setInlineError(msg || ERROR_MESSAGES.UNREACHABLE);
    }
  };

  // Cancel Job (Outlined style, immediate stop)
  const handleCancel = async () => {
    if (jobId) {
      try {
        await fetch(`/api/jobs/${jobId}`, { method: 'DELETE' });
      } catch {
        // ignore
      }
      sessionStorage.removeItem('siterip_active_job_id');
    }
    setCancelledNotice(true);
    setState('idle');
    setPercent(0);
  };

  // Reset to form to capture another site
  const handleCaptureAnother = () => {
    setUrl('');
    setInlineError(null);
    setCancelledNotice(false);
    sessionStorage.removeItem('siterip_active_job_id');
    sessionStorage.removeItem('siterip_target_url');
    sessionStorage.removeItem('siterip_target_domain');
    setState('idle');
    setPercent(0);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  // Retry from failed view
  const handleTryAgain = () => {
    setState('idle');
    setInlineError(null);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const isFormDisabled = !url.trim() || viewports.length === 0;

  return (
    <div className="w-full max-w-[720px] bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.04)] min-h-[400px] flex flex-col justify-center transition-all duration-150">
      <AnimatePresence mode="wait">

        {/* =========================================================================
            STATE: IDLE, SUBMITTING, CANCELLED (Form View)
           ========================================================================= */}
        {(state === 'idle' || state === 'submitting' || state === 'cancelled') && (
          <motion.div
            key="view-form"
            variants={crossfadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col space-y-6"
          >
            {/* Step 9: Cancelled Notice line */}
            {cancelledNotice && (
              <div
                role="status"
                className="w-full p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs font-mono text-gray-700 flex items-center justify-between"
              >
                <span>Capture cancelled.</span>
                <button
                  type="button"
                  onClick={() => setCancelledNotice(false)}
                  className="text-gray-400 hover:text-gray-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Primary Action Row: URL Input + Capture Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
              <UrlInput
                inputRef={inputRef}
                value={url}
                onChange={(val) => {
                  setUrl(val);
                  if (inlineError) setInlineError(null);
                }}
                onSubmit={handleCapture}
                disabled={state === 'submitting'}
                autoFocus={true}
                error={inlineError || undefined}
                className="flex-1"
              />
              <CaptureButton
                onClick={handleCapture}
                disabled={isFormDisabled}
                loading={state === 'submitting'}
                className="w-full sm:w-auto"
              />
            </div>

            {/* Inline Error Message (Section 3 Step 5) */}
            {inlineError && (
              <div
                role="alert"
                aria-live="polite"
                className="flex items-center gap-2 text-xs font-sans text-[#EA4335] -mt-3"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{inlineError}</span>
              </div>
            )}

            {/* Example Target Link (Step 2) */}
            <div className="flex items-center gap-2 text-xs text-gray-500 font-sans -mt-3">
              <span>Example target:</span>
              <button
                type="button"
                onClick={() => {
                  setUrl('https://robinsweb.net');
                  if (inlineError) setInlineError(null);
                  inputRef.current?.focus();
                }}
                className="font-mono text-[#EA4335] underline hover:text-[#D93025] transition-colors"
              >
                https://robinsweb.net
              </button>
            </div>

            {/* Step 3: Choose Viewports */}
            <div className="pt-2 border-t border-gray-100">
              <ViewportSelector
                selected={viewports}
                onChange={setViewports}
              />
            </div>

            {/* Step 4: Choose Options (Three Toggle Cards, clickable anywhere) */}
            <div className="space-y-2 text-left pt-2">
              <label className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-700 block">
                Extraction Options
              </label>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <OptionToggleCard
                  title="Animated site"
                  description="Fast-forward animations, wait for scroll-triggers"
                  checked={animatedSite}
                  onChange={setAnimatedSite}
                />

                <OptionToggleCard
                  title="Hide overlays"
                  description="Auto-hide cookie banners + consent modals"
                  checked={hideOverlays}
                  onChange={setHideOverlays}
                />

                <OptionToggleCard
                  title="Flatten sticky nav"
                  description="Convert fixed/sticky elements to static"
                  checked={flattenSticky}
                  onChange={setFlattenSticky}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* =========================================================================
            STATE: RUNNING (Step 6)
           ========================================================================= */}
        {state === 'running' && (
          <motion.div
            key="view-running"
            variants={crossfadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col items-center text-center space-y-6"
          >
            {/* Top Read-only Summary Row: URL + non-clickable viewport chips */}
            <div className="w-full flex items-center justify-between gap-3 pb-3 border-b border-gray-100 flex-wrap">
              <span className="font-mono text-xs font-semibold text-gray-800 truncate max-w-[280px] sm:max-w-md">
                {url}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                {viewports.map((vp) => (
                  <span
                    key={vp}
                    className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 font-medium capitalize"
                  >
                    {vp}
                  </span>
                ))}
              </div>
            </div>

            {/* Centre: Large Circular Progress Indicator (~160px) */}
            <div className="py-2">
              <CircularProgress
                percent={percent}
                indeterminate={percent === 0}
                size={160}
              />
            </div>

            {/* Under Circle: Live Stage Status Line */}
            <div className="space-y-1">
              <p
                role="status"
                aria-live="polite"
                className="font-mono text-xs sm:text-sm font-semibold text-gray-800 tracking-wide"
              >
                {stageText}
              </p>

              {/* Reconnecting Note (Section 5) */}
              {isReconnecting && (
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full mt-1">
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>Reconnecting to engine...</span>
                </div>
              )}
            </div>

            {/* Counters Line: Pages X of Y, Images Z, Elapsed MM:SS */}
            <div className="text-xs font-mono text-gray-500 flex items-center justify-center gap-3">
              <span>
                Pages <strong className="text-gray-800">{pagesDone}</strong> of {pagesTotal}
              </span>
              <span className="text-gray-300">·</span>
              <span>
                Images <strong className="text-gray-800">{imagesDone}</strong>
              </span>
              <span className="text-gray-300">·</span>
              <span>
                Elapsed <strong className="text-gray-800 tabular-nums">{formatElapsed(elapsedSeconds)}</strong>
              </span>
            </div>

            {/* Three Step Phase Strip */}
            <div className="pt-2">
              <PhaseStrip phase={getPhaseFromJob(percent, stageText)} />
            </div>

            {/* Bottom: Single Cancel Button in Outlined Style */}
            <div className="pt-4 border-t border-gray-100 w-full flex justify-center">
              <button
                type="button"
                onClick={handleCancel}
                className="h-10 px-6 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-sans text-xs font-medium transition-all duration-150 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA4335]"
              >
                Cancel capture
              </button>
            </div>
          </motion.div>
        )}

        {/* =========================================================================
            STATE: DONE (Step 7)
           ========================================================================= */}
        {state === 'done' && (
          <motion.div
            key="view-done"
            variants={crossfadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col items-center text-center space-y-6"
          >
            {/* Completed Circle with Check Mark */}
            <div className="py-2">
              <CircularProgress
                percent={100}
                isComplete={true}
                size={160}
              />
            </div>

            {/* Status Line */}
            <div className="space-y-1">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900">
                Capture complete
              </h3>
              <p className="text-xs font-sans text-gray-500">
                Full HD section images extracted and packaged for{' '}
                <span className="font-semibold text-gray-700">{currentDomain}</span>
              </p>
            </div>

            {/* Main Action: Large Download ZIP Button */}
            <div className="w-full max-w-md pt-2">
              <a
                href={downloadInfo?.url || `/api/jobs/${jobId}/download`}
                download={downloadInfo?.filename || `${currentDomain}.zip`}
                className="w-full h-12 px-6 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-semibold text-sm font-sans flex items-center justify-center gap-2.5 shadow-sm transition-all duration-150 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
              >
                <Download className="w-4 h-4 stroke-[2.2]" />
                <span>
                  Download {downloadInfo?.filename || `${currentDomain}.zip`}
                  {downloadInfo?.sizeFormatted ? ` (${downloadInfo.sizeFormatted})` : ''}
                </span>
              </a>
            </div>

            {/* Summary Line */}
            <div className="text-xs font-mono text-gray-600 space-y-2">
              <p>
                {downloadInfo?.pages ?? pagesDone} pages, {viewports.length} viewports,{' '}
                {downloadInfo?.images ?? imagesDone} images
              </p>

              {/* Quiet Warning Line if any page failed or is flagged */}
              {((downloadInfo?.failedPages ?? failedPages) > 0 || (downloadInfo?.flaggedPages ?? 0) > 0) && (
                <p className="text-gray-500 italic">
                  {(downloadInfo?.failedPages ?? failedPages) + (downloadInfo?.flaggedPages ?? 0)} pages need review. Details are in manifest.json.
                </p>
              )}
            </div>

            {/* Below: Text link to capture another site */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleCaptureAnother}
                className="text-xs text-gray-400 hover:text-gray-800 font-sans transition-colors underline"
              >
                Capture another site
              </button>
            </div>
          </motion.div>
        )}

        {/* =========================================================================
            STATE: FAILED (Step 8)
           ========================================================================= */}
        {state === 'failed' && (
          <motion.div
            key="view-failed"
            variants={crossfadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col items-center text-center space-y-6"
          >
            <div className="w-12 h-12 rounded-full bg-red-50 text-[#EA4335] flex items-center justify-center border border-red-100">
              <AlertCircle className="w-6 h-6" />
            </div>

            <div className="space-y-2 max-w-md">
              <h3 className="font-display text-lg font-bold text-gray-900">
                Extraction could not be completed
              </h3>
              <p
                role="alert"
                aria-live="polite"
                className="font-sans text-xs text-gray-600 leading-relaxed"
              >
                {failureMessage || ERROR_MESSAGES.UNREACHABLE}
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleTryAgain}
                className="h-11 px-6 rounded-xl border border-[#EA4335] bg-white hover:bg-[#EA4335] text-[#EA4335] hover:text-white font-semibold text-xs font-sans transition-all duration-150 active:scale-[0.98] flex items-center gap-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Try again</span>
              </button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
