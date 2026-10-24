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
      className={`group relative h-13 px-7 rounded-xl font-semibold text-sm font-sans transition-all duration-200 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ef4444]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] flex items-center justify-center gap-2.5 select-none shrink-0 overflow-hidden ${
        disabled
          ? 'bg-[#1a1a20] text-[#52525b] border border-white/[0.06]'
          : 'bg-[#ef4444] hover:bg-[#f87171] text-white shadow-[0_0_20px_rgba(239,68,68,0.2)] hover:shadow-[0_0_30px_rgba(239,68,68,0.35)]'
      } ${className}`}
    >
      {/* Shine overlay on hover */}
      {!disabled && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out" />
      )}

      {loading ? (
        <Loader2 className="w-[18px] h-[18px] animate-spin text-current relative z-10" />
      ) : (
        <>
          <Camera className="w-[18px] h-[18px] stroke-[2] relative z-10" />
          <span className="relative z-10">{label}</span>
        </>
      )}
    </button>
  );
}
