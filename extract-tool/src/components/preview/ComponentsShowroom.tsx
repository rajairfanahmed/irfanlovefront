'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  UrlInput,
  SubmitButton,
  DownloadButton,
  CircularProgress,
  StatusPill,
  FileTreeRow,
  DownloadCard,
} from '../ui';
import { siteData } from '../../data/siteData';

export function ComponentsShowroom() {
  const [testUrl, setTestUrl] = useState('https://robinsweb.net');
  const [testPercent, setTestPercent] = useState(15);
  
  // Interactive Wireframe Simulation State
  const [flowState, setFlowState] = useState<'idle' | 'progress' | 'completed'>('idle');
  const [flowUrl, setFlowUrl] = useState('https://robinsweb.net');
  const [flowPercent, setFlowPercent] = useState(15);
  const [flowStatus, setFlowStatus] = useState('CRAWLING ROUTES');

  const handleFlowSubmit = () => {
    setFlowState('progress');
    setFlowPercent(15);
    setFlowStatus('CRAWLING ROUTES');
  };

  const handleSimulateProgress = (targetPercent: number) => {
    setFlowPercent(targetPercent);
    if (targetPercent <= 20) {
      setFlowStatus('CRAWLING ROUTES');
    } else if (targetPercent <= 50) {
      setFlowStatus('ISOLATING STICKY HEADER');
    } else if (targetPercent < 100) {
      setFlowStatus('SNAPPING SECTIONS');
    } else {
      setFlowStatus('EXTRACTION COMPLETE');
      setTimeout(() => {
        setFlowState('completed');
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 },
          });
        } catch {
          // ignore if canvas-confetti is not loaded in SSR
        }
      }, 500);
    }
  };

  const handleFlowReset = () => {
    setFlowState('idle');
    setFlowPercent(15);
    setFlowStatus('CRAWLING ROUTES');
  };

  return (
    <div className="w-full max-w-4xl rounded-2xl bg-white border border-gray-200 shadow-xl p-6 md:p-10 space-y-10 my-8">
      
      {/* Showroom Header */}
      <div className="border-b border-gray-100 pb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-200 bg-red-50 text-xs font-mono font-medium text-[#EA4335] mb-2">
          <span>02 · PHASE 2 ATOMIC COMPONENTS SHOWROOM</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827] font-display">
          Interactive UI Primitives Library
        </h2>
        <p className="text-gray-500 text-xs md:text-sm font-sans mt-1">
          Every atomic primitive built for the Day Theme (Red, Black, White). Test hover states, click feedback, and SVG progress math.
        </p>
      </div>

      {/* Section 1: Full Interactive Wireframe Simulation (User Hand-Sketched Flow) */}
      <div className="space-y-4 p-6 rounded-2xl bg-red-50/40 border border-red-100">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#111827]">
              Live Wireframe Flow Demonstration
            </h3>
            <p className="text-xs text-gray-500 font-sans mt-0.5">
              Exact 3-stage user wireframe flow: Input Box &gt; Submit &gt; Progress Only &gt; Download ZIP.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleFlowReset}
              className="text-xs font-mono px-3 py-1 rounded-md border border-gray-200 bg-white text-gray-600 hover:text-gray-900 transition-colors shadow-2xs"
            >
              Reset Flow
            </button>
          </div>
        </div>

        <div className="p-8 rounded-xl bg-white border border-gray-200 flex flex-col items-center justify-center min-h-[320px] transition-all">
          {/* Flow State 1: Input URL + Submit Button */}
          {flowState === 'idle' && (
            <div className="w-full flex flex-col items-center space-y-4">
              <div className="text-xs font-mono text-gray-400">
                State 1 · Idle URL Input
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg justify-center">
                <UrlInput
                  value={flowUrl}
                  onChange={setFlowUrl}
                  onSubmit={handleFlowSubmit}
                />
                <SubmitButton onClick={handleFlowSubmit} />
              </div>
              <p className="text-xs text-gray-400 font-sans">
                Type URL or click <span className="font-semibold text-[#EA4335]">submit</span> to trigger State 2.
              </p>
            </div>
          )}

          {/* Flow State 2: Progress Display Only (15% wireframe default) */}
          {flowState === 'progress' && (
            <div className="flex flex-col items-center space-y-5">
              <div className="text-xs font-mono text-gray-400">
                State 2 · After Submit (Progress Display Only)
              </div>
              <CircularProgress
                percent={flowPercent}
                statusText={flowStatus}
              />
              <div className="flex items-center gap-2 flex-wrap justify-center pt-2">
                <span className="text-xs font-mono text-gray-500">Simulate Progress:</span>
                {[15, 45, 80, 100].map((val) => (
                  <button
                    key={val}
                    onClick={() => handleSimulateProgress(val)}
                    className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                      flowPercent === val
                        ? 'bg-[#111827] text-white shadow-2xs'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {val}% {val === 15 ? '(Wireframe)' : ''}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Flow State 3: Download Card Completion */}
          {flowState === 'completed' && (
            <div className="w-full flex justify-center">
              <DownloadCard
                domain={siteData.domain}
                totalSections={siteData.totalSections}
                onDownload={() => alert(`Downloaded archive: ${siteData.domain}-design.zip`)}
                onReset={handleFlowReset}
              />
            </div>
          )}
        </div>
      </div>

      {/* Section 2: Individual UrlInput & SubmitButton Primitives */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-800">
            2. UrlInput &amp; SubmitButton Primitives
          </h3>
          <span className="text-[11px] font-mono text-gray-400">1.5px Red Border (#EA4335)</span>
        </div>
        <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-center gap-3">
          <UrlInput
            value={testUrl}
            onChange={setTestUrl}
            onSubmit={() => alert(`Submitted URL: ${testUrl}`)}
          />
          <SubmitButton onClick={() => alert(`Submitted URL: ${testUrl}`)} />
        </div>
      </div>

      {/* Section 3: CircularProgress Component with Multi-Percent Controls */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-800">
            3. Mathematical CircularProgress Component (240x240 SVG)
          </h3>
          <span className="text-[11px] font-mono text-gray-400">r=96 · Circumference=603.185px</span>
        </div>
        <div className="p-8 rounded-xl bg-gray-50 border border-gray-200 flex flex-col items-center justify-center space-y-5">
          <CircularProgress
            percent={testPercent}
            statusText={
              testPercent <= 15
                ? 'CRAWLING ROUTES'
                : testPercent <= 50
                ? 'ISOLATING STICKY HEADER'
                : testPercent < 100
                ? 'SNAPPING SECTIONS'
                : 'EXTRACTION COMPLETE'
            }
          />
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-xs font-mono text-gray-500 mr-2">Test Presets:</span>
            {[15, 30, 50, 75, 85, 100].map((p) => (
              <button
                key={p}
                onClick={() => setTestPercent(p)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all ${
                  testPercent === p
                    ? 'bg-[#111827] text-white shadow-2xs'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {p}% {p === 15 ? '(Wireframe)' : ''}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section 4: StatusPills & DownloadButton */}
      <div className="space-y-3">
        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-800">
          4. StatusPill &amp; Action Button Primitives
        </h3>
        <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-around flex-wrap gap-4">
          <StatusPill status="idle" label="ENGINE IDLE" />
          <StatusPill status="running" label="CRAWLING SECTIONS" />
          <StatusPill status="completed" label="ARCHIVE ASSEMBLED" />
          <DownloadButton
            onClick={() => alert('Download triggered!')}
            label="Download zip file"
          />
        </div>
      </div>

      {/* Section 5: Hierarchical FileTreeRow Primitives */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-800">
            5. Hierarchical FileTreeRow Primitives (Verbatim robinsweb.net)
          </h3>
          <span className="text-[11px] font-mono text-gray-400">Folder Tree Rows</span>
        </div>
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1.5">
          <FileTreeRow
            filename="01-navbar.png"
            dimensions="1440 × 80"
            size="124 KB"
            status="saved"
            onPreview={() => alert('Preview 01-navbar.png')}
          />
          <FileTreeRow
            filename="02-hero.png"
            dimensions="1440 × 820"
            size="842 KB"
            status="capturing"
            onPreview={() => alert('Capturing 02-hero.png')}
          />
          <FileTreeRow
            filename="03-services.png"
            dimensions="1440 × 640"
            status="pending"
            onPreview={() => alert('Pending 03-services.png')}
          />
        </div>
      </div>

      {/* Section 6: DownloadCard Component */}
      <div className="space-y-3">
        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-800">
          6. DownloadCard Completion Primitive
        </h3>
        <div className="p-6 rounded-xl bg-gray-50 border border-gray-200 flex justify-center">
          <DownloadCard
            domain={siteData.domain}
            totalSections={siteData.totalSections}
            onDownload={() => alert(`Downloading ${siteData.domain}-design.zip`)}
            onReset={() => alert('Reset triggered')}
          />
        </div>
      </div>

    </div>
  );
}
