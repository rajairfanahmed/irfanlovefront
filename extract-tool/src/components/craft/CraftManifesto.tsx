'use client';

import React from 'react';
import { Cpu, Eye, Gauge } from 'lucide-react';

export function CraftManifesto() {
  return (
    <section id="manifesto" className="relative py-28 px-4 sm:px-8 bg-[#090a0b] border-t border-white/10 overflow-hidden">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4FF00]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Tag */}
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#D4FF00]">
          [ 02 // STUDIO MANIFESTO ]
        </p>

        {/* Large Scale Editorial Quote */}
        <div className="my-12 max-w-5xl">
          <blockquote className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#f5f4f0] leading-[1.1]">
            &ldquo;WE REJECT THE HOMOGENEOUS SEA OF AI TEMPLATES. CODE IS A TACTILE MEDIUM. PERFORMANCE IS A MORAL IMPERATIVE.&rdquo;
          </blockquote>
          <p className="font-mono text-xs sm:text-sm text-[#71717a] uppercase tracking-widest mt-6">
            ATELIER VORTEX // PRINCIPLES OF DESIGN ENGINEERING
          </p>
        </div>

        {/* 3 Core Philosophy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
          <div className="space-y-4 p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#121316]/40">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4FF00]">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-base font-bold uppercase text-[#f5f4f0] tracking-wider">
              01 / Bespoke Visual Geometry
            </h3>
            <p className="text-sm text-[#9c9b97] leading-relaxed">
              Every typographic scale and color ladder is derived with mathematical harmony. We reject repetitive purple cards in favor of distinctive, brand-native visual identities.
            </p>
          </div>

          <div className="space-y-4 p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#121316]/40">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4FF00]">
              <Gauge className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-base font-bold uppercase text-[#f5f4f0] tracking-wider">
              02 / Locked 60fps Micro-Physics
            </h3>
            <p className="text-sm text-[#9c9b97] leading-relaxed">
              We animate exclusively on the compositor thread (`transform`, `opacity`). Zero layout thrashing, zero dropped frames, and zero main-thread lockups.
            </p>
          </div>

          <div className="space-y-4 p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#121316]/40">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4FF00]">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-mono text-base font-bold uppercase text-[#f5f4f0] tracking-wider">
              03 / Machine & Human Discoverability
            </h3>
            <p className="text-sm text-[#9c9b97] leading-relaxed">
              100% Agentic SEO score (5/5). Every build carries Schema.org Knowledge Graphs and dual `llms.txt` registries for discovery by both search engines and AI agents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
