'use client';

import React from 'react';
import { Download } from 'lucide-react';

export interface DownloadButtonProps {
  onClick: () => void;
  label?: string;
  filename?: string;
  disabled?: boolean;
  className?: string;
}

export function DownloadButton({
  onClick,
  label = 'Download zip file',
  disabled = false,
  className = '',
}: DownloadButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label="Download extracted design zip file"
      className={`h-12 px-8 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-semibold text-sm font-sans flex items-center justify-center gap-2 shadow-sm transition-all duration-200 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 select-none ${className}`}
    >
      <Download className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
}
