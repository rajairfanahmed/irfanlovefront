'use client';

import React from 'react';
import { Camera, Loader2 } from 'lucide-react';

export interface CaptureButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  label?: string;
}

export function CaptureButton({
  onClick,
  disabled = false,
  loading = false,
  className = '',
  label = 'Capture',
}: CaptureButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      aria-label="Capture target website design"
      className={`h-12 px-6 rounded-xl border-[1.5px] border-[#EA4335] bg-[#FFFFFF] hover:bg-[#EA4335] text-[#EA4335] hover:text-[#FFFFFF] font-semibold text-sm font-sans transition-all duration-200 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA4335] focus-visible:ring-offset-2 flex items-center justify-center gap-2 shadow-2xs select-none shrink-0 ${className}`}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        <>
          <Camera className="w-4 h-4 stroke-[2.2]" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
