'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sliders, Check, RotateCcw } from 'lucide-react';

export interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  viewport?: string;
  onViewportChange?: (vp: string) => void;
  isolateSticky?: boolean;
  onIsolateStickyChange?: (val: boolean) => void;
  imageFormat?: 'png' | 'webp';
  onImageFormatChange?: (fmt: 'png' | 'webp') => void;
  throttleRate?: string;
  onThrottleRateChange?: (rate: string) => void;
}

export function MenuOverlay({
  isOpen,
  onClose,
  viewport = '1440px',
  onViewportChange,
  isolateSticky = true,
  onIsolateStickyChange,
  imageFormat = 'png',
  onImageFormatChange,
  throttleRate = '1.0s',
  onThrottleRateChange,
}: MenuOverlayProps) {
  const [localVp, setLocalVp] = useState(viewport);
  const [localSticky, setLocalSticky] = useState(isolateSticky);
  const [localFormat, setLocalFormat] = useState(imageFormat);
  const [localThrottle, setLocalThrottle] = useState(throttleRate);

  // Sync external props
  useEffect(() => {
    setLocalVp(viewport);
  }, [viewport]);

  // Lock body scroll when open and listen for Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  const handleResetDefaults = () => {
    setLocalVp('1440px');
    setLocalSticky(true);
    setLocalFormat('png');
    setLocalThrottle('1.0s');
    onViewportChange?.('1440px');
    onIsolateStickyChange?.(true);
    onImageFormatChange?.('png');
    onThrottleRateChange?.('1.0s');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-sm md:max-w-md h-full bg-white border-l border-gray-200 shadow-2xl flex flex-col justify-between z-10 select-none"
            role="dialog"
            aria-modal="true"
            aria-label="Extraction Settings"
          >
            {/* Drawer Header */}
            <div className="h-16 px-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#EA4335] border border-red-100 flex items-center justify-center">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-[#111827]">
                    Extraction Settings
                  </h3>
                  <span className="font-mono text-[10px] text-gray-400">
                    Engine parameters
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close settings drawer"
                className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Drawer Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Option 1: Viewport Selection */}
              <div className="space-y-2.5">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-800">
                  1. Capture Viewport
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { id: '1440px', label: 'Desktop (1440 x 900)', desc: 'Standard widescreen view' },
                    { id: '768px', label: 'Tablet (768 x 1024)', desc: 'Medium portrait orientation' },
                    { id: '390px', label: 'Mobile (390 x 844)', desc: 'Handheld smartphone viewport' },
                  ].map((vp) => (
                    <button
                      key={vp.id}
                      type="button"
                      onClick={() => {
                        setLocalVp(vp.id);
                        onViewportChange?.(vp.id);
                      }}
                      className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        localVp === vp.id
                          ? 'border-[#EA4335] bg-red-50/40 text-[#111827] shadow-2xs'
                          : 'border-gray-200 hover:border-gray-300 bg-white text-gray-600'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold font-mono">{vp.label}</div>
                        <div className="text-[11px] text-gray-400 font-sans mt-0.5">{vp.desc}</div>
                      </div>
                      {localVp === vp.id && (
                        <div className="w-5 h-5 rounded-full bg-[#EA4335] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Sticky Header Isolation */}
              <div className="space-y-2.5">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-800">
                  2. Sticky Navigation Isolation
                </label>
                <div
                  onClick={() => {
                    const next = !localSticky;
                    setLocalSticky(next);
                    onIsolateStickyChange?.(next);
                  }}
                  className="p-3.5 rounded-xl border border-gray-200 hover:border-gray-300 bg-white flex items-center justify-between cursor-pointer transition-colors"
                >
                  <div className="pr-4">
                    <span className="text-xs font-semibold text-gray-900 block font-sans">
                      Isolate Sticky Header (Recommended)
                    </span>
                    <span className="text-[11px] text-gray-400 font-sans mt-0.5 block">
                      Detects and crops sticky navbars as distinct 01-navbar.png files.
                    </span>
                  </div>
                  <div
                    className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-200 shrink-0 ${
                      localSticky ? 'bg-[#EA4335]' : 'bg-gray-200'
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${
                        localSticky ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Option 3: Image Format */}
              <div className="space-y-2.5">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-800">
                  3. Image Output Format
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'png', title: 'PNG', subtitle: 'Lossless quality' },
                    { id: 'webp', title: 'WebP', subtitle: 'Compressed fast' },
                  ].map((fmt) => (
                    <button
                      key={fmt.id}
                      type="button"
                      onClick={() => {
                        setLocalFormat(fmt.id as 'png' | 'webp');
                        onImageFormatChange?.(fmt.id as 'png' | 'webp');
                      }}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        localFormat === fmt.id
                          ? 'border-[#EA4335] bg-red-50/50 text-[#111827] font-semibold'
                          : 'border-gray-200 hover:border-gray-300 text-gray-600'
                      }`}
                    >
                      <div className="text-xs font-mono font-bold">{fmt.title}</div>
                      <div className="text-[10px] text-gray-400 font-sans mt-0.5">{fmt.subtitle}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 4: Throttling Delay */}
              <div className="space-y-2.5">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-800">
                  4. Crawl Delay &amp; Throttling
                </label>
                <div className="flex items-center gap-2">
                  {['0.5s', '1.0s', '2.0s'].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => {
                        setLocalThrottle(rate);
                        onThrottleRateChange?.(rate);
                      }}
                      className={`flex-1 py-2 text-xs font-mono rounded-lg border transition-all ${
                        localThrottle === rate
                          ? 'border-[#EA4335] bg-red-50 text-[#EA4335] font-semibold'
                          : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {rate}
                    </button>
                  ))}
                </div>
                <span className="text-[10px] text-gray-400 font-sans block">
                  Calm delay between section viewport snapshots to allow CSS transitions to settle.
                </span>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 px-6 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
              <button
                type="button"
                onClick={handleResetDefaults}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-500 hover:text-gray-800 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="h-9 px-4 rounded-lg bg-[#111827] hover:bg-black text-white text-xs font-semibold font-sans transition-colors"
              >
                Done
              </button>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
