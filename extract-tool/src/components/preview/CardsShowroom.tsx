'use client';

import React, { useState } from 'react';
import { SectionPreviewCard } from '../cards/SectionPreviewCard';
import { FolderSummaryCard } from '../cards/FolderSummaryCard';
import { ExtractionStateCard } from '../cards/ExtractionStateCard';
import { siteData } from '../../data/siteData';

export function CardsShowroom() {
  const [activeStage, setActiveStage] = useState<'idle' | 'progress' | 'completed'>('idle');
  const [demoUrl, setDemoUrl] = useState(siteData.defaultUrl);

  return (
    <div className="w-full max-w-4xl rounded-2xl bg-white border border-gray-200 shadow-xl p-6 md:p-10 space-y-10 my-8">
      {/* Showroom Header */}
      <div className="border-b border-gray-100 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-200 bg-red-50 text-xs font-mono font-medium text-[#EA4335] mb-2">
          <span>03 · PHASE 3 CARDS &amp; LAYOUT SHOWROOM</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827] font-display">
          Stage Transitions &amp; Custom Card Archetypes
        </h2>
        <p className="text-gray-500 text-xs md:text-sm font-sans mt-1">
          Visual inspection of the 3-state wireframe workstation, section preview cards, and hierarchical folder summary tree.
        </p>
      </div>

      {/* Row 1: Direct State Switcher for Workstation Stage */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-800">
            1. Stage Transition Switcher (Instant State Jumps)
          </h3>
          <div className="flex items-center gap-1.5 p-1 bg-gray-100 rounded-lg text-xs font-medium">
            <button
              type="button"
              onClick={() => setActiveStage('idle')}
              className={`px-3 py-1 rounded-md transition-all ${
                activeStage === 'idle'
                  ? 'bg-white shadow-xs text-gray-900 font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              [1] Idle Input
            </button>
            <button
              type="button"
              onClick={() => setActiveStage('progress')}
              className={`px-3 py-1 rounded-md transition-all ${
                activeStage === 'progress'
                  ? 'bg-white shadow-xs text-gray-900 font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              [2] Progress Only (15%)
            </button>
            <button
              type="button"
              onClick={() => setActiveStage('completed')}
              className={`px-3 py-1 rounded-md transition-all ${
                activeStage === 'completed'
                  ? 'bg-white shadow-xs text-gray-900 font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              [3] Completed Download
            </button>
          </div>
        </div>

        <div className="p-8 rounded-xl bg-gray-50 border border-gray-200 flex flex-col items-center justify-center min-h-[300px]">
          <ExtractionStateCard
            stage={activeStage}
            url={demoUrl}
            percent={15}
            statusText="Crawling routes on robinsweb.net..."
            onUrlChange={setDemoUrl}
            onSubmit={() => setActiveStage('progress')}
            onDownload={() => alert(`Downloading archive for ${siteData.domain}`)}
            onReset={() => setActiveStage('idle')}
            showFolderSummary={false}
          />
        </div>
      </div>

      {/* Row 2: SectionPreviewCard Specimens */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-800">
            2. SectionPreviewCard Archetype (Individual Snapped Sections)
          </h3>
          <span className="text-[11px] font-mono text-gray-400">16:9 Aspect Ratio</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <SectionPreviewCard
            filename="01-navbar.png"
            dimensions="1440 × 80"
            size="124 KB"
            onDownloadSingle={() => alert('Download 01-navbar.png')}
          />
          <SectionPreviewCard
            filename="02-hero.png"
            dimensions="1440 × 820"
            size="842 KB"
            onDownloadSingle={() => alert('Download 02-hero.png')}
          />
          <SectionPreviewCard
            filename="03-services.png"
            dimensions="1440 × 640"
            size="512 KB"
            onDownloadSingle={() => alert('Download 03-services.png')}
          />
        </div>
      </div>

      {/* Row 3: FolderSummaryCard Component */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-800">
            3. Hierarchical FolderSummaryCard (Verbatim robinsweb.net Tree)
          </h3>
          <span className="text-[11px] font-mono text-gray-400">ZIP Output Structure</span>
        </div>
        <FolderSummaryCard
          domain={siteData.domain}
          pages={siteData.pages}
          totalSize={siteData.totalSize}
        />
      </div>
    </div>
  );
}
