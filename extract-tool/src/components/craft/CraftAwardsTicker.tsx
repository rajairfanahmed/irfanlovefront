'use client';

import React from 'react';
import { Award, Star } from 'lucide-react';

const AWARDS = [
  'AWWWARDS SITE OF THE DAY × 34',
  'FWA OF THE DAY × 12',
  'DEVELOPER OF THE YEAR NOMINEE',
  'RED DOT DESIGN AWARD 2025',
  'MOBILE EXCELLENCE AWARD × 18',
  'TYPE DIRECTORS CLUB CERTIFICATE',
  'WEBBY NOMINEE BEST VISUAL DESIGN',
  'AWWWARDS SITE OF THE MONTH NOMINEE',
];

export function CraftAwardsTicker() {
  return (
    <section className="relative py-8 bg-[#090a0b] border-y border-white/10 overflow-hidden">
      <div className="flex items-center gap-8 whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {/* Loop 1 */}
        {AWARDS.map((award, i) => (
          <div key={`a1-${i}`} className="inline-flex items-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-widest text-[#9c9b97]">
            <Award className="w-4 h-4 text-[#D4FF00]" />
            <span className="text-[#f5f4f0] font-bold">{award}</span>
            <span className="text-white/20 select-none">/</span>
          </div>
        ))}
        {/* Loop 2 for smooth loop */}
        {AWARDS.map((award, i) => (
          <div key={`a2-${i}`} className="inline-flex items-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-widest text-[#9c9b97]">
            <Award className="w-4 h-4 text-[#D4FF00]" />
            <span className="text-[#f5f4f0] font-bold">{award}</span>
            <span className="text-white/20 select-none">/</span>
          </div>
        ))}
      </div>
    </section>
  );
}
