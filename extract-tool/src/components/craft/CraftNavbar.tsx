'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowUpRight } from 'lucide-react';

interface CraftNavbarProps {
  onOpenInquiry?: () => void;
}

export function CraftNavbar({ onOpenInquiry }: CraftNavbarProps) {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [timeTokyo, setTimeTokyo] = useState('');
  const [timeLondon, setTimeLondon] = useState('');

  useEffect(() => {
    function updateClocks() {
      const now = new Date();
      setTimeTokyo(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour12: false, hour: '2-digit', minute: '2-digit' }));
      setTimeLondon(now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour12: false, hour: '2-digit', minute: '2-digit' }));
    }
    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-5 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-xl bg-[#0c0d0e]/75 border border-white/10 rounded-full px-5 sm:px-7 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {/* Brand Mark */}
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#D4FF00] animate-pulse" />
          <a href="#hero" className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#f5f4f0] uppercase hover:text-[#D4FF00] transition-colors">
            ATELIER // VORTEX
          </a>
          <span className="hidden md:inline-block font-mono text-[11px] text-[#71717a] border-l border-white/10 pl-3">
            SOTD × 34 · FWA × 12
          </span>
        </div>

        {/* Global Studio Clocks */}
        <div className="hidden lg:flex items-center gap-6 font-mono text-[11px] text-[#9c9b97]">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>TYO:</span>
            <span className="text-[#f5f4f0] tabular-nums">{timeTokyo || '12:00'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>LDN:</span>
            <span className="text-[#f5f4f0] tabular-nums">{timeLondon || '03:00'}</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            aria-label={soundEnabled ? 'Mute spatial audio' : 'Enable spatial audio'}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-[#9c9b97] hover:text-[#f5f4f0] hover:border-white/20 hover:scale-105 active:scale-95 transition-all"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#D4FF00]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={onOpenInquiry}
            className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#D4FF00] text-[#0c0d0e] font-mono text-xs font-bold tracking-wide uppercase shadow-[0_0_24px_rgba(212,255,0,0.25)] hover:shadow-[0_0_32px_rgba(212,255,0,0.4)] hover:bg-[#e2ff42] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4FF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0d0e]"
          >
            <span>Initiate Brief</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </header>
  );
}
