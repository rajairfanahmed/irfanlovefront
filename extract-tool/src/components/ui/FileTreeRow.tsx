'use client';

import React from 'react';
import { Camera, Check, Loader2 } from 'lucide-react';

export interface FileTreeRowProps {
  filename: string;
  dimensions: string;
  size?: string;
  status: 'pending' | 'capturing' | 'saved';
  onPreview?: () => void;
  className?: string;
}

export function FileTreeRow({
  filename,
  dimensions,
  size,
  status,
  onPreview,
  className = '',
}: FileTreeRowProps) {
  return (
    <div
      onClick={onPreview}
      className={`group flex items-center justify-between p-2.5 rounded-lg border border-transparent hover:border-gray-200 hover:bg-gray-50/80 transition-all duration-150 cursor-pointer ${className}`}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <Camera className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-700 transition-colors shrink-0" />
        <span className="font-mono text-xs font-medium text-gray-800 truncate">
          {filename}
        </span>
        <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 shrink-0">
          {dimensions}
        </span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {size && (
          <span className="font-mono text-[10px] text-gray-400">
            {size}
          </span>
        )}
        {status === 'saved' && (
          <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
            <Check className="w-3 h-3" />
            <span>Saved</span>
          </span>
        )}
        {status === 'capturing' && (
          <span className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-[#EA4335] bg-red-50 px-2 py-0.5 rounded-md border border-red-100">
            <Loader2 className="w-3 h-3 animate-spin" />
            <span>Snapping...</span>
          </span>
        )}
        {status === 'pending' && (
          <span className="font-mono text-[11px] text-gray-400 px-2 py-0.5">
            Pending
          </span>
        )}
      </div>
    </div>
  );
}
