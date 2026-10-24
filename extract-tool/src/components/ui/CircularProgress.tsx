'use client';

import React from 'react';
import { Check } from 'lucide-react';

export interface CircularProgressProps {
  percent: number;
  statusText?: string;
  indeterminate?: boolean;
  isComplete?: boolean;
  size?: number;
  className?: string;
}

export function CircularProgress({
  percent,
  indeterminate = false,
  isComplete = false,
  size = 180,
  className = '',
}: CircularProgressProps) {
  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const clampedPercent = Math.min(100, Math.max(0, percent));
  const strokeOffset = circumference * (1 - clampedPercent / 100);

  return (
    <div
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : Math.round(clampedPercent)}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{ width: size, height: size }}
      className={`relative flex flex-col items-center justify-center select-none ${className}`}
    >
      <svg
        className={`w-full h-full ${indeterminate ? 'animate-spin-smooth' : '-rotate-90'}`}
        viewBox="0 0 180 180"
        aria-hidden="true"
      >
        {/* Background track */}
        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="3"
          fill="none"
        />

        {/* Accent track (very subtle) */}
        <circle
          cx="90"
          cy="90"
          r={radius}
          stroke="rgba(239,68,68,0.08)"
          strokeWidth="3"
          fill="none"
        />

        {/* Active ring */}
        {indeterminate ? (
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="#ef4444"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${circumference * 0.25} ${circumference * 0.75}`}
            style={{ filter: 'drop-shadow(0 0 6px rgba(239,68,68,0.3))' }}
          />
        ) : (
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke={isComplete ? '#10b981' : '#ef4444'}
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeOffset}
            className="transition-[stroke-dashoffset,stroke] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              filter: isComplete
                ? 'drop-shadow(0 0 8px rgba(16,185,129,0.3))'
                : 'drop-shadow(0 0 6px rgba(239,68,68,0.2))',
            }}
          />
        )}
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
        {isComplete ? (
          <div className="w-14 h-14 rounded-full bg-[#10b981]/10 text-[#10b981] flex items-center justify-center border border-[#10b981]/20">
            <Check className="w-7 h-7 stroke-[2.5]" />
          </div>
        ) : indeterminate ? (
          <div className="flex flex-col items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse-glow" />
            <span className="font-mono text-[10px] font-medium text-[#52525b] uppercase tracking-wider">
              Starting
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#f4f4f5] tabular-nums tracking-tight">
              {Math.round(clampedPercent)}
            </span>
            <span className="font-mono text-[10px] text-[#52525b] uppercase tracking-wider -mt-0.5">
              percent
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
