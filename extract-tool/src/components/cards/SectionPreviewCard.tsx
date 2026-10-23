'use client';

import React from 'react';
import { Download } from 'lucide-react';

export interface SectionPreviewCardProps {
  id?: string;
  page?: string;
  filename: string;
  dimensions: string;
  size: string;
  thumbnailUrl?: string;
  onDownloadSingle?: () => void;
  className?: string;
}

export function SectionPreviewCard({
  filename,
  dimensions,
  size,
  onDownloadSingle,
  className = '',
}: SectionPreviewCardProps) {
  return (
    <div
      className={`w-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors shadow-2xs ${className}`}
    >
      <div className="aspect-[16/9] bg-gray-50 flex flex-col items-center justify-center border-b border-gray-100 p-4 text-center">
        <span className="text-2xl mb-1">📸</span>
        <span className="text-gray-400 font-mono text-xs">{filename} Preview</span>
        <span className="text-[10px] text-gray-400 font-mono mt-0.5">{dimensions} viewport</span>
      </div>
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold text-gray-900">{filename}</span>
          <span className="font-mono text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
            {dimensions}
          </span>
        </div>
        <button
          type="button"
          onClick={onDownloadSingle}
          aria-label={`Download ${filename}`}
          className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-900 text-xs font-mono px-2 py-1 rounded hover:bg-gray-100 transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          <span>{size}</span>
        </button>
      </div>
    </div>
  );
}
