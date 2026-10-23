'use client';

import React, { useState } from 'react';
import { siteData } from '../../data/siteData';
import { WorkflowStage } from '../../types/extractor';
import { CheckCircle2, Download, ExternalLink, Sparkles } from 'lucide-react';

export function FoundationPreviewCard() {
  const [activeStage, setActiveStage] = useState<WorkflowStage>('idle');
  const [url, setUrl] = useState(siteData.defaultUrl);
  const [percent, setPercent] = useState(15);

  const circumference = 2 * Math.PI * 96; // 603.185
  const strokeOffset = circumference * (1 - percent / 100);

  return (
    <div className="relative w-full text-[#111827] flex flex-col items-center justify-center">
      
      {/* Top Banner Chip */}
      <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono font-medium text-gray-700 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#EA4335] animate-pulse"></span>
        <span>01 · PHASE 1 FOUNDATION PREVIEW</span>
      </div>

      {/* Main Big Foundation Card */}
      <div className="relative z-10 w-full max-w-4xl rounded-2xl bg-white border border-gray-200 shadow-xl p-6 md:p-10 space-y-10">

        {/* Header Section & Typography Specimen */}
        <div className="space-y-3 pb-6 border-b border-gray-100">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#EA4335]">
                {siteData.theme}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#111827] font-display mt-1">
                {siteData.name}
              </h1>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 rounded-lg bg-red-50 text-[#EA4335] border border-red-100 text-xs font-semibold">
                Google Calm Aesthetics
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-sm md:text-base font-sans max-w-2xl leading-relaxed">
            {siteData.subtitle}. Testing color contrast math, font loading, SVG stroke geometry, and verbatim data store before component synthesis.
          </p>
        </div>

        {/* Section C: Wireframe Live Interactive Specimen (The 3 States from user sketch) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-gray-900">
              Wireframe Flow & Stage Demonstration
            </h2>
            <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-lg text-xs font-medium">
              <button
                onClick={() => setActiveStage('idle')}
                className={`px-3 py-1 rounded-md transition-all ${activeStage === 'idle' ? 'bg-white shadow-sm text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
              >
                1. Input Box
              </button>
              <button
                onClick={() => setActiveStage('progress')}
                className={`px-3 py-1 rounded-md transition-all ${activeStage === 'progress' ? 'bg-white shadow-sm text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
              >
                2. Progress Only (15%)
              </button>
              <button
                onClick={() => setActiveStage('completed')}
                className={`px-3 py-1 rounded-md transition-all ${activeStage === 'completed' ? 'bg-white shadow-sm text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
              >
                3. Download ZIP
              </button>
            </div>
          </div>

          <div className="p-8 md:p-12 rounded-xl bg-gray-50 border border-gray-200 flex flex-col items-center justify-center min-h-[300px] transition-all">
            
            {/* State 1: Input Row (User Sketch Match) */}
            {activeStage === 'idle' && (
              <div className="w-full flex flex-col items-center space-y-4 animate-fade-scale">
                <div className="text-xs font-mono text-gray-400 mb-1">State 1 · Idle Entry View</div>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg justify-center">
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="Enter url: e.g. https://robinsweb.net"
                      className="w-full h-12 px-4 rounded-xl border-[1.5px] border-[#EA4335] bg-white text-gray-900 text-sm font-sans placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500/15"
                    />
                  </div>
                  <button
                    onClick={() => setActiveStage('progress')}
                    className="h-12 px-6 rounded-xl border-[1.5px] border-[#EA4335] bg-white hover:bg-[#EA4335] text-[#EA4335] hover:text-white font-semibold text-sm transition-all duration-200 active:scale-95 shadow-sm whitespace-nowrap"
                  >
                    submit
                  </button>
                </div>
                <div className="text-xs text-gray-500 font-sans">
                  Click <span className="font-semibold text-[#EA4335]">submit</span> to see State 2 (Progress Only).
                </div>
              </div>
            )}

            {/* State 2: Progress Only (User Sketch Match: 15% Black Arc on Red Outline) */}
            {activeStage === 'progress' && (
              <div className="flex flex-col items-center space-y-4 animate-fade-scale">
                <div className="text-xs font-mono text-gray-400">State 2 · After Submit (Progress Display Only)</div>
                
                {/* Mathematical SVG Circular Progress Component */}
                <div className="relative w-[240px] h-[240px] flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 240 240">
                    {/* Base Red Outline Track */}
                    <circle
                      cx="120"
                      cy="120"
                      r="96"
                      stroke="#EA4335"
                      strokeWidth="3"
                      fill="none"
                    />
                    {/* Active Black Progress Arc */}
                    <circle
                      cx="120"
                      cy="120"
                      r="96"
                      stroke="#111827"
                      strokeWidth="10"
                      strokeLinecap="round"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeOffset}
                      className="transition-[stroke-dashoffset] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                    />
                  </svg>

                  {/* Centered Large Metric */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-5xl font-extrabold text-[#111827] font-display tabular-nums">
                      {Math.round(percent)}%
                    </span>
                    <span className="text-[11px] font-mono font-medium tracking-wider text-gray-500 uppercase mt-1">
                      CRAWLING ROUTES
                    </span>
                  </div>
                </div>

                {/* Progress Control Strip for Testing */}
                <div className="flex items-center gap-2 pt-2">
                  {[15, 30, 60, 85, 100].map((p) => (
                    <button
                      key={p}
                      onClick={() => {
                        setPercent(p);
                        if (p === 100) setTimeout(() => setActiveStage('completed'), 600);
                      }}
                      className={`px-2.5 py-1 text-xs font-mono rounded ${percent === p ? 'bg-[#111827] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                      {p}%
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* State 3: Download ZIP (User Sketch Match) */}
            {activeStage === 'completed' && (
              <div className="flex flex-col items-center space-y-4 text-center animate-fade-scale">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 font-display">
                    Design Extracted Successfully
                  </h3>
                  <p className="text-xs text-gray-500 font-sans mt-0.5">
                    9 sections captured across 2 pages ({siteData.domain})
                  </p>
                </div>
                <button
                  onClick={() => alert(`Downloading archive: ${siteData.domain}-design.zip`)}
                  className="h-12 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center gap-2 shadow-sm transition-all duration-200 active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Download zip file</span>
                </button>
                <button
                  onClick={() => {
                    setActiveStage('idle');
                    setPercent(15);
                  }}
                  className="text-xs text-gray-400 hover:text-gray-700 font-sans underline"
                >
                  Extract another website
                </button>
              </div>
            )}

          </div>
        </div>

        {/* Section B: Color Token Swatches Grid */}
        <div className="space-y-3">
          <h2 className="text-sm font-mono font-semibold uppercase tracking-wider text-gray-900">
            Design Tokens Palette Swatches
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {[
              { name: 'Pure White', hex: '#FFFFFF', border: true, role: '--bg-canvas' },
              { name: 'Surface Gray', hex: '#F8F9FA', border: true, role: '--bg-surface' },
              { name: 'Google Red', hex: '#EA4335', textWhite: true, role: '--accent-red' },
              { name: 'Neutral Black', hex: '#111827', textWhite: true, role: '--accent-black' },
              { name: 'Emerald Green', hex: '#10B981', textWhite: true, role: '--accent-success' },
            ].map((swatch) => (
              <div
                key={swatch.role}
                className={`p-3 rounded-xl flex flex-col justify-between h-20 ${swatch.border ? 'border border-gray-200' : ''}`}
                style={{ backgroundColor: swatch.hex }}
              >
                <span className={`text-[11px] font-mono font-semibold ${swatch.textWhite ? 'text-white' : 'text-gray-900'}`}>
                  {swatch.name}
                </span>
                <div>
                  <span className={`text-[10px] font-mono block opacity-80 ${swatch.textWhite ? 'text-white' : 'text-gray-600'}`}>
                    {swatch.hex}
                  </span>
                  <span className={`text-[9px] font-mono block opacity-60 ${swatch.textWhite ? 'text-white' : 'text-gray-500'}`}>
                    {swatch.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section D: Verbatim Data Store Verification */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between flex-wrap gap-3 text-xs font-mono text-gray-500">
          <div className="flex items-center gap-4 flex-wrap">
            <span>Domain: <strong className="text-gray-800">{siteData.domain}</strong></span>
            <span>Pages: <strong className="text-gray-800">{siteData.pages.length}</strong></span>
            <span>Sections: <strong className="text-gray-800">{siteData.totalSections}</strong></span>
            <span>Archive: <strong className="text-gray-800">{siteData.totalSize}</strong></span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Zero AI Words Verified</span>
          </div>
        </div>

      </div>

    </div>
  );
}
