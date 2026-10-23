'use client';

import React, { useState } from 'react';
import { Sliders, Monitor, Layers } from 'lucide-react';
import { StatusPill } from '../ui/StatusPill';
import { MenuOverlay } from './MenuOverlay';

export interface NavbarProps {
  status?: 'idle' | 'running' | 'completed';
  statusLabel?: string;
  className?: string;
}

export function Navbar({
  status = 'idle',
  statusLabel,
  className = '',
}: NavbarProps) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeViewport, setActiveViewport] = useState('1440px');

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 h-14 md:h-16 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] transition-colors select-none ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">

          {/* Left Brand Mark */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2.5 group"
              aria-label="SiteRip Home"
            >
              <div className="w-7 h-7 rounded-lg bg-[#EA4335] text-white flex items-center justify-center font-bold text-xs shadow-2xs group-hover:scale-105 transition-transform">
                <Layers className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="font-display font-bold text-[15px] tracking-tight text-[#111827]">
                SiteRip
              </span>
            </a>
            <span className="font-mono text-[10px] text-gray-500 bg-gray-100 rounded px-1.5 py-0.5 border border-gray-200/60 hidden sm:inline-block">
              v1.0
            </span>
          </div>

          {/* Right Utility Group */}
          <div className="flex items-center gap-2.5 sm:gap-3">

            {/* Engine Status Indicator */}
            <div className="hidden sm:block">
              <StatusPill status={status} label={statusLabel} />
            </div>

            {/* Quick Viewport Indicator */}
            <button
              type="button"
              onClick={() => setIsSettingsOpen(true)}
              aria-label="Open Viewport Settings"
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-gray-200 hover:border-gray-300 bg-gray-50/70 text-xs font-mono text-gray-700 transition-colors"
            >
              <Monitor className="w-3.5 h-3.5 text-gray-400" />
              <span>{activeViewport}</span>
            </button>

            {/* Settings Trigger Icon Button */}
            <button
              type="button"
              onClick={() => setIsSettingsOpen(true)}
              aria-label="Extraction Settings"
              className="w-9 h-9 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Sliders className="w-4 h-4" />
            </button>

          </div>

        </div>
      </header>

      {/* Slide-In Settings Drawer */}
      <MenuOverlay
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        viewport={activeViewport}
        onViewportChange={setActiveViewport}
      />
    </>
  );
}
