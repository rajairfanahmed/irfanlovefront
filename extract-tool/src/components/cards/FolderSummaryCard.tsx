'use client';

import React from 'react';
import { PageFolder } from '../../types/extractor';

export interface FolderSummaryCardProps {
  domain: string;
  pages: PageFolder[];
  totalSize: string;
  className?: string;
}

export function FolderSummaryCard({
  domain,
  pages,
  totalSize,
  className = '',
}: FolderSummaryCardProps) {
  return (
    <div className={`w-full bg-gray-50 border border-gray-200 rounded-xl p-5 font-mono text-xs ${className}`}>
      <div className="flex items-center justify-between font-semibold text-gray-900 pb-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-base">📁</span>
          <span className="text-sm">{domain}/</span>
        </div>
        <span className="text-gray-500 font-normal">{totalSize}</span>
      </div>
      <div className="mt-3 flex flex-col gap-3">
        {pages.map((p) => (
          <div key={p.id || p.name} className="pl-4 border-l-2 border-gray-200">
            <div className="text-gray-700 font-medium mb-1.5 flex items-center gap-1.5">
              <span>📁</span>
              <span>{p.name}/</span>
              <span className="text-gray-400 font-normal">({p.sections.length} sections)</span>
            </div>
            <div className="pl-4 text-gray-500 flex flex-col gap-1">
              {p.sections.map((s) => (
                <div key={s.id || s.name} className="flex items-center justify-between pr-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs">📸</span>
                    <span>{s.name}</span>
                    <span className="text-gray-400 text-[10px] font-normal">{s.dimensions}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-[10px]">{s.size}</span>
                    <span className="text-emerald-600 text-[10px] font-bold">✓</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-gray-200 text-gray-400 text-[11px] text-right">
        Ready for local extraction
      </div>
    </div>
  );
}
