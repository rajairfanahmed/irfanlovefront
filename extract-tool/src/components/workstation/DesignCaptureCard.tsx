'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, AlertCircle, ArrowLeft, RefreshCw, X, Zap, ExternalLink } from 'lucide-react';
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
  initial: { opacity: 0, scale: 0.98, y: 8 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: -4,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

export function DesignCaptureCard() {
  const [url, setUrl] = useState('');
  const [viewports, setViewports] = useState<string[]>(['desktop', 'tablet', 'mobile']);
  const [animatedSite, setAnimatedSite] = useState(true);
  const [hideOverlays, setHideOverlays] = useState(true);
  const [flattenSticky, setFlattenSticky] = useState(true);

  const [state, setState] = useState<ToolState>('idle');
  const [inlineError, setInlineError] = useState<string | null>(null);
  const [cancelledNotice, setCancelledNotice] = useState(false);

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

  const [failureMessage, setFailureMessage] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Tab Title synchronization
  useEffect(() => {
    if (state === 'running' && currentDomain) {
      document.title = `${Math.round(percent)}% — Capturing ${currentDomain}`;
    } else if (state === 'done' && currentDomain) {
      document.title = `✓ Done — ${currentDomain}`;
    } else {
      document.title = 'SiteRip — Full HD Website Capture';
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

  // Session Storage Reconnection
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          if (data.download) setDownloadInfo(data.download);
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

            if (['capturing', 'discovering', 'packaging', 'queued'].includes(snap.state)) {
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

  const handleCapture = async () => {
    setInlineError(null);
    setCancelledNotice(false);

    let cleanUrl = url.trim();
    if (!cleanUrl) {
      setInlineError('Enter a full website address, for example https://example.com');
      return;
    }

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
          options: { animatedSite, hideOverlays, flattenSticky },
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

      setPercent(0);
      setStageText('Finding pages');
      setPagesDone(0);
      setPagesTotal(1);
      setImagesDone(0);
      setFailedPages(0);
      setElapsedSeconds(0);

      connectToJob(newJobId);
    } catch (err: unknown) {
      setState('idle');
      const msg = err instanceof Error ? err.message : String(err);
      setInlineError(msg || ERROR_MESSAGES.UNREACHABLE);
    }
  };

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

  const handleCaptureAnother = () => {
    setUrl('');
    setInlineError(null);
    setCancelledNotice(false);
    sessionStorage.removeItem('siterip_active_job_id');
    sessionStorage.removeItem('siterip_target_url');
    sessionStorage.removeItem('siterip_target_domain');
    setState('idle');
    setPercent(0);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleTryAgain = () => {
    setState('idle');
    setInlineError(null);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const isFormDisabled = !url.trim() || viewports.length === 0;

  return (
    <div className="glass-card w-full max-w-[760px] p-6 sm:p-8 md:p-10 min-h-[420px] flex flex-col justify-center transition-all duration-200">
      <AnimatePresence mode="wait">

        {/* ═══════════════════════════════════════════
            STATE: IDLE / SUBMITTING / CANCELLED
           ═══════════════════════════════════════════ */}
        {(state === 'idle' || state === 'submitting' || state === 'cancelled') && (
          <motion.div
            key="view-form"
            variants={crossfadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col space-y-6"
          >
            {/* Cancelled Notice */}
            {cancelledNotice && (
              <div
                role="status"
                className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-[#a1a1aa] flex items-center justify-between"
              >
                <span>Capture cancelled.</span>
                <button
                  type="button"
                  onClick={() => setCancelledNotice(false)}
                  className="text-[#52525b] hover:text-[#a1a1aa] transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* URL + Capture row */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full">
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

            {/* Inline Error */}
            {inlineError && (
              <div
                role="alert"
                aria-live="polite"
                className="flex items-center gap-2 text-xs font-sans text-[#ef4444] -mt-3"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{inlineError}</span>
              </div>
            )}

            {/* Example link */}
            <div className="flex items-center gap-2 text-[11px] text-[#52525b] font-sans -mt-3">
              <span>Try:</span>
              <button
                type="button"
                onClick={() => {
                  setUrl('https://robinsweb.net');
                  if (inlineError) setInlineError(null);
                  inputRef.current?.focus();
                }}
                className="font-mono text-[#ef4444]/70 hover:text-[#ef4444] transition-colors inline-flex items-center gap-1"
              >
                robinsweb.net
                <ExternalLink className="w-2.5 h-2.5" />
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.04]" />

            {/* Viewports */}
            <ViewportSelector selected={viewports} onChange={setViewports} />

            {/* Divider */}
            <div className="h-px bg-white/[0.04]" />

            {/* Options */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="w-3 h-3 text-[#52525b]" />
                <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.12em] text-[#a1a1aa]">
                  Extraction Options
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
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

        {/* ═══════════════════════════════════════════
            STATE: RUNNING
           ═══════════════════════════════════════════ */}
        {state === 'running' && (
          <motion.div
            key="view-running"
            variants={crossfadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col items-center text-center space-y-6"
          >
            {/* Top Summary Row */}
            <div className="w-full flex items-center justify-between gap-3 pb-4 border-b border-white/[0.04] flex-wrap">
              <span className="font-mono text-xs font-medium text-[#a1a1aa] truncate max-w-[280px] sm:max-w-md">
                {url}
              </span>
              <div className="flex items-center gap-1.5 shrink-0">
                {viewports.map((vp) => (
                  <span
                    key={vp}
                    className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-[#71717a] border border-white/[0.06] capitalize"
                  >
                    {vp}
                  </span>
                ))}
              </div>
            </div>

            {/* Progress Ring */}
            <div className="py-3">
              <CircularProgress
                percent={percent}
                indeterminate={percent === 0}
                size={180}
              />
            </div>

            {/* Stage Text */}
            <div className="space-y-2">
              <p
                role="status"
                aria-live="polite"
                className="font-mono text-sm font-semibold text-[#f4f4f5] tracking-wide"
              >
                {stageText}
              </p>

              {isReconnecting && (
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-400/80 bg-amber-400/[0.06] px-3 py-1 rounded-full border border-amber-400/10">
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>Reconnecting...</span>
                </div>
              )}
            </div>

            {/* Metrics */}
            <div className="text-xs font-mono text-[#52525b] flex items-center justify-center gap-4">
              <span>
                Pages <strong className="text-[#a1a1aa]">{pagesDone}</strong>
                <span className="text-[#3f3f46]">/{pagesTotal}</span>
              </span>
              <span className="text-[#27272a]">·</span>
              <span>
                Images <strong className="text-[#a1a1aa]">{imagesDone}</strong>
              </span>
              <span className="text-[#27272a]">·</span>
              <span>
                <strong className="text-[#a1a1aa] tabular-nums">{formatElapsed(elapsedSeconds)}</strong>
              </span>
            </div>

            {/* Phase Strip */}
            <div className="pt-1">
              <PhaseStrip phase={getPhaseFromJob(percent, stageText)} />
            </div>

            {/* Cancel */}
            <div className="pt-4 border-t border-white/[0.04] w-full flex justify-center">
              <button
                type="button"
                onClick={handleCancel}
                className="h-10 px-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] text-[#71717a] hover:text-[#a1a1aa] font-sans text-xs font-medium transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ef4444]/30"
              >
                Cancel capture
              </button>
            </div>
          </motion.div>
        )}

        {/* ═══════════════════════════════════════════
            STATE: DONE
           ═══════════════════════════════════════════ */}
        {state === 'done' && (
          <motion.div
            key="view-done"
            variants={crossfadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col items-center text-center space-y-6"
          >
            {/* Completed Ring */}
            <div className="py-3">
              <CircularProgress percent={100} isComplete={true} size={180} />
            </div>

            {/* Status */}
            <div className="space-y-2">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#f4f4f5]">
                Capture complete
              </h3>
              <p className="text-xs font-sans text-[#71717a]">
                Full HD section images for{' '}
                <span className="font-semibold text-[#a1a1aa]">{currentDomain}</span>
              </p>
            </div>

            {/* Download Button */}
            <div className="w-full max-w-sm pt-1">
              <a
                href={downloadInfo?.url || `/api/jobs/${jobId}/download`}
                download={downloadInfo?.filename || `${currentDomain}.zip`}
                className="group w-full h-12 px-6 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-semibold text-sm font-sans flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/50"
              >
                <Download className="w-4 h-4 stroke-[2.2]" />
                <span>
                  Download {downloadInfo?.filename || `${currentDomain}.zip`}
                  {downloadInfo?.sizeFormatted ? ` (${downloadInfo.sizeFormatted})` : ''}
                </span>
              </a>
            </div>

            {/* Summary */}
            <div className="text-xs font-mono text-[#52525b] space-y-1.5">
              <p>
                {downloadInfo?.pages ?? pagesDone} pages · {viewports.length} viewports ·{' '}
                {downloadInfo?.images ?? imagesDone} images
              </p>

              {((downloadInfo?.failedPages ?? failedPages) > 0 || (downloadInfo?.flaggedPages ?? 0) > 0) && (
                <p className="text-amber-400/60 italic text-[11px]">
                  {(downloadInfo?.failedPages ?? failedPages) + (downloadInfo?.flaggedPages ?? 0)} pages need review — see manifest.json
                </p>
              )}
            </div>

            {/* Capture Another */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleCaptureAnother}
                className="text-xs text-[#52525b] hover:text-[#a1a1aa] font-sans transition-colors underline underline-offset-2 decoration-white/10 hover:decoration-white/20"
              >
                Capture another site
              </button>
            </div>
          </motion.div>
        )}

        {/* ═══════════════════════════════════════════
            STATE: FAILED
           ═══════════════════════════════════════════ */}
        {state === 'failed' && (
          <motion.div
            key="view-failed"
            variants={crossfadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col items-center text-center space-y-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#ef4444]/8 text-[#ef4444] flex items-center justify-center border border-[#ef4444]/15">
              <AlertCircle className="w-7 h-7" />
            </div>

            <div className="space-y-2 max-w-md">
              <h3 className="font-display text-lg font-bold text-[#f4f4f5]">
                Extraction failed
              </h3>
              <p
                role="alert"
                aria-live="polite"
                className="font-sans text-xs text-[#71717a] leading-relaxed"
              >
                {failureMessage || ERROR_MESSAGES.UNREACHABLE}
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleTryAgain}
                className="group h-11 px-6 rounded-xl border border-[#ef4444]/20 bg-[#ef4444]/[0.04] hover:bg-[#ef4444]/[0.08] text-[#f87171] font-semibold text-xs font-sans transition-all duration-200 active:scale-[0.98] flex items-center gap-2"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                <span>Try again</span>
              </button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
