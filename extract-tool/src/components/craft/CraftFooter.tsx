'use client';

import React from 'react';
import { ArrowUp, Globe } from 'lucide-react';

export function CraftFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-24 pb-16 px-4 sm:px-8 bg-[#08090a] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Top Grid: Coordinates & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#D4FF00]" />
              <span className="font-mono text-sm font-bold uppercase tracking-widest text-[#f5f4f0]">
                ATELIER // VORTEX
              </span>
            </div>
            <p className="text-sm text-[#9c9b97] font-sans max-w-sm leading-relaxed">
              Global independent design engineering practice. We craft hardware-accelerated digital identities for pioneers and visionaries.
            </p>
            <div className="pt-2 font-mono text-xs text-[#71717a] flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-[#D4FF00]" />
              <span>TOKYO · LONDON · NEW YORK</span>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 font-mono text-xs">
            <div className="space-y-3">
              <p className="uppercase tracking-widest text-[#71717a]">Navigation</p>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-[#9c9b97] hover:text-[#D4FF00] transition-colors">00 // Origin</a></li>
                <li><a href="#works" className="text-[#9c9b97] hover:text-[#D4FF00] transition-colors">01 // Works</a></li>
                <li><a href="#manifesto" className="text-[#9c9b97] hover:text-[#D4FF00] transition-colors">02 // Manifesto</a></li>
                <li><a href="#capabilities" className="text-[#9c9b97] hover:text-[#D4FF00] transition-colors">03 // Competencies</a></li>
                <li><a href="#inquiry" className="text-[#9c9b97] hover:text-[#D4FF00] transition-colors">04 // Commissions</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="uppercase tracking-widest text-[#71717a]">Recognition</p>
              <ul className="space-y-2 text-[#9c9b97]">
                <li>Awwwards SOTD (34x)</li>
                <li>FWA of the Day (12x)</li>
                <li>Red Dot Best of the Best</li>
                <li>Type Directors Club</li>
                <li>Webby Award Nominee</li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="uppercase tracking-widest text-[#71717a]">Channels</p>
              <ul className="space-y-2">
                <li><a href="https://github.com/rajairfanahmed/irfanlovefront" target="_blank" rel="noopener noreferrer" className="text-[#9c9b97] hover:text-[#f5f4f0] transition-colors">GitHub Engine</a></li>
                <li><a href="https://awwwards.com" target="_blank" rel="noopener noreferrer" className="text-[#9c9b97] hover:text-[#f5f4f0] transition-colors">Awwwards Directory</a></li>
                <li><a href="#inquiry" className="text-[#9c9b97] hover:text-[#f5f4f0] transition-colors">Direct Telegram</a></li>
                <li><a href="#inquiry" className="text-[#9c9b97] hover:text-[#f5f4f0] transition-colors">Encrypted Signal</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Giant Interactive Hover Watermark */}
        <div className="pt-16 pb-12 select-none group">
          <div className="font-extrabold text-[clamp(2.5rem,13vw,11rem)] uppercase tracking-[-0.05em] leading-none text-white/[0.04] group-hover:text-white/[0.09] transition-colors duration-700 text-center">
            ATELIER
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#71717a]">
          <p>© 2026 ATELIER VORTEX. Crafted with pure code and zero AI slop.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#D4FF00] transition-colors uppercase tracking-widest group"
          >
            <span>Ascend to Top</span>
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#D4FF00] group-hover:-translate-y-0.5 transition-all">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
