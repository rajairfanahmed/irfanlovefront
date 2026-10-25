'use client';

import React from 'react';
import { ArrowDown, Sparkles, Award, Zap, Compass } from 'lucide-react';

interface CraftHeroProps {
  onScrollToWorks?: () => void;
  onOpenInquiry?: () => void;
}

export function CraftHero({ onScrollToWorks, onOpenInquiry }: CraftHeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-4 sm:px-8 overflow-hidden bg-[#0c0d0e]">
      {/* Background Ambient Kinetic Grid & Specular Noise */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#D4FF00]/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Top Metadata Header */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#D4FF00]">
          <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-ping" />
          <span className="tracking-widest uppercase">COMMISSIONS OPEN · Q3/Q4 2026</span>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs text-[#9c9b97]">
          <span className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#D4FF00]" />
            <span>GLOBAL INDEPENDENT ATELIER</span>
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline text-[#f5f4f0]">ZERO AI TEMPLATES</span>
        </div>
      </div>

      {/* Main Monumental Kinetic Headline */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12">
        <div className="space-y-4">
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-[#9c9b97]">
            [ DESIGN ENGINEERING & KINETIC SYSTEMS ]
          </p>

          <h1 className="text-[clamp(2.75rem,7.5vw,7rem)] font-extrabold uppercase tracking-[-0.04em] leading-[0.9] text-[#f5f4f0]">
            OBSESSIVE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] via-[#f5f4f0] to-[#9c9b97]">
              DIGITAL CRAFT
            </span> <br />
            AT 60FPS.
          </h1>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <p className="lg:col-span-7 text-base sm:text-lg md:text-xl text-[#9c9b97] font-sans leading-relaxed max-w-2xl">
            We architect bespoke web platforms, physics-driven interaction architectures, and hardware-accelerated interfaces for category-defining entities. Built with pure code, mathematical typography, and zero compromises.
          </p>

          <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center gap-4">
            <button
              type="button"
              onClick={onScrollToWorks}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#f5f4f0] text-[#0c0d0e] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#D4FF00] hover:scale-105 active:scale-95 transition-all shadow-[0_4px_24px_rgba(255,255,255,0.15)] focus-visible:ring-2 focus-visible:ring-[#D4FF00]"
            >
              Explore Works
            </button>
            <button
              type="button"
              onClick={onOpenInquiry}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/5 border border-white/15 text-[#f5f4f0] font-mono text-xs font-bold uppercase tracking-wider hover:bg-white/10 hover:border-white/30 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-white"
            >
              Request Ledger
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Floating Telemetry & Metric Strip */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="grid grid-cols-3 gap-6 sm:gap-12 w-full sm:w-auto">
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold text-[#f5f4f0] tabular-nums flex items-center gap-1">
              <span>34</span>
              <Award className="w-4 h-4 text-[#D4FF00]" />
            </div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#71717a] mt-0.5">Awwwards SOTD</p>
          </div>

          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold text-[#f5f4f0] tabular-nums flex items-center gap-1">
              <span>99.8%</span>
              <Zap className="w-4 h-4 text-[#D4FF00]" />
            </div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#71717a] mt-0.5">Core Web Vitals</p>
          </div>

          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold text-[#f5f4f0] tabular-nums flex items-center gap-1">
              <span>4.2M</span>
              <Sparkles className="w-4 h-4 text-[#D4FF00]" />
            </div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#71717a] mt-0.5">Monthly Interactions</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onScrollToWorks}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#9c9b97] hover:text-[#D4FF00] transition-colors group"
        >
          <span>Scroll to Inspect</span>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#D4FF00] group-hover:translate-y-1 transition-all">
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </button>
      </div>
    </section>
  );
}
