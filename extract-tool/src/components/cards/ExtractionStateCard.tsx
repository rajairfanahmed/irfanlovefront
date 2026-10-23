'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UrlInput,
  CaptureButton,
  CircularProgress,
  DownloadCard,
  OptionToggleCard,
  ViewportSelector,
} from '../ui';
import { FolderSummaryCard } from './FolderSummaryCard';
import { siteData } from '../../data/siteData';

export interface ExtractionStateCardProps {
  stage: 'idle' | 'progress' | 'completed';
  url: string;
  percent: number;
  statusText: string;
  viewports?: string[];
  animatedSite?: boolean;
  hideOverlays?: boolean;
  flattenStickyNav?: boolean;
  onUrlChange: (url: string) => void;
  onViewportsChange?: (vps: string[]) => void;
  onAnimatedSiteChange?: (val: boolean) => void;
  onHideOverlaysChange?: (val: boolean) => void;
  onFlattenStickyNavChange?: (val: boolean) => void;
  onCapture?: () => void;
  onSubmit?: () => void;
  onDownload: () => void;
  onReset: () => void;
  showFolderSummary?: boolean;
  className?: string;
}

export const stageVariants = {
  initial: { opacity: 0, scale: 0.97, y: 8 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: -8,
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

export function ExtractionStateCard({
  stage,
  url,
  percent,
  statusText,
  viewports = ['1440px', '768px', '390px'],
  animatedSite = true,
  hideOverlays = true,
  flattenStickyNav = true,
  onUrlChange,
  onViewportsChange,
  onAnimatedSiteChange,
  onHideOverlaysChange,
  onFlattenStickyNavChange,
  onCapture,
  onSubmit,
  onDownload,
  onReset,
  showFolderSummary = false,
  className = '',
}: ExtractionStateCardProps) {
  const handleAction = onCapture || onSubmit || (() => {});

  return (
    <div className={`w-full flex flex-col items-center justify-center ${className}`}>
      <AnimatePresence mode="wait">
        
        {/* State 1: Input URL, Capture Button & Settings Ordered by UX Flow */}
        {stage === 'idle' && (
          <motion.div
            key="stage-idle"
            variants={stageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col space-y-6"
          >
            {/* Primary Action Row: URL Input + Capture Button with Camera Icon */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
              <UrlInput
                value={url}
                onChange={onUrlChange}
                onSubmit={handleAction}
                className="max-w-none flex-1"
              />
              <CaptureButton onClick={handleAction} />
            </div>

            {/* Quick Example Target Hint */}
            <div className="flex items-center gap-2 text-xs text-gray-500 font-sans -mt-3">
              <span>Example target:</span>
              <button
                type="button"
                onClick={() => onUrlChange(siteData.defaultUrl)}
                className="font-mono text-[#EA4335] underline hover:text-[#D93025] transition-colors"
              >
                {siteData.defaultUrl}
              </button>
            </div>

            {/* Configuration Section 1: Viewport Selector with Select All */}
            {onViewportsChange && (
              <div className="pt-2 border-t border-gray-100">
                <ViewportSelector
                  selected={viewports}
                  onChange={onViewportsChange}
                />
              </div>
            )}

            {/* Configuration Section 2: Engine Switches from User Reference Image */}
            <div className="space-y-2 text-left pt-2">
              <label className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-700 block">
                Extraction Engine Options
              </label>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <OptionToggleCard
                  title="Animated site"
                  description="Fast-forward animations, wait for scroll-triggers"
                  checked={animatedSite}
                  onChange={onAnimatedSiteChange || (() => {})}
                />
                
                <OptionToggleCard
                  title="Hide overlays"
                  description="Auto-hide cookie banners + consent modals"
                  checked={hideOverlays}
                  onChange={onHideOverlaysChange || (() => {})}
                />
                
                <OptionToggleCard
                  title="Flatten sticky nav"
                  description="Convert fixed/sticky elements to static"
                  checked={flattenStickyNav}
                  onChange={onFlattenStickyNavChange || (() => {})}
                />
              </div>
            </div>

          </motion.div>
        )}

        {/* State 2: Progress Only (Input & Settings disappear completely) */}
        {stage === 'progress' && (
          <motion.div
            key="stage-progress"
            variants={stageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-center space-y-4 py-4"
          >
            <CircularProgress
              percent={percent}
              statusText={statusText}
            />
          </motion.div>
        )}

        {/* State 3: Download Card & Completion Presentation */}
        {stage === 'completed' && (
          <motion.div
            key="stage-completed"
            variants={stageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col items-center space-y-6"
          >
            <DownloadCard
              domain={siteData.domain}
              totalSections={siteData.totalSections}
              onDownload={onDownload}
              onReset={onReset}
            />

            {showFolderSummary && (
              <div className="w-full max-w-lg">
                <FolderSummaryCard
                  domain={siteData.domain}
                  pages={siteData.pages}
                  totalSize={siteData.totalSize}
                />
              </div>
            )}
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
