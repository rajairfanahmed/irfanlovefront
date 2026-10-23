'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { DownloadButton } from './DownloadButton';

export interface DownloadCardProps {
  domain: string;
  totalSections: number;
  onDownload: () => void;
  onReset: () => void;
  className?: string;
}

export function DownloadCard({
  domain,
  totalSections,
  onDownload,
  onReset,
  className = '',
}: DownloadCardProps) {
  return (
    <div
      className={`w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col items-center text-center space-y-5 animate-fade-scale ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
        <CheckCircle2 className="w-6 h-6" />
      </div>

      <div className="space-y-1">
        <h3 className="text-xl font-bold text-gray-900 font-display">
          Website design extracted successfully.
        </h3>
        <p className="text-xs text-gray-500 font-sans max-w-xs mx-auto">
          {totalSections} sections captured across all pages for <span className="font-semibold text-gray-700">{domain}</span>. Archive is assembled and ready.
        </p>
      </div>

      <div className="w-full pt-1">
        <DownloadButton
          onClick={onDownload}
          label="Download zip file"
          className="w-full justify-center"
        />
      </div>

      <button
        type="button"
        onClick={onReset}
        className="text-xs text-gray-400 hover:text-gray-700 font-sans transition-colors underline pt-1"
      >
        Extract another website
      </button>
    </div>
  );
}
