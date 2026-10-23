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
  size = 160,
  className = '',
}: CircularProgressProps) {
  const radius = 64;
  const circumference = 2 * Math.PI * radius; // ~402.12
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
        viewBox="0 0 160 160"
        aria-hidden="true"
      >
        {/* Base Red Thin Track */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#EA4335"
          strokeWidth="3"
          fill="none"
          opacity="0.25"
        />

        {/* Active Ring */}
        {indeterminate ? (
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#111827"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${circumference * 0.25} ${circumference * 0.75}`}
          />
        ) : (
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke={isComplete ? '#10B981' : '#111827'}
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeOffset}
            className="transition-[stroke-dashoffset,stroke] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
          />
        )}
      </svg>

      {/* Centered Large Metric or Complete Checkmark */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
        {isComplete ? (
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#10B981] flex items-center justify-center">
            <Check className="w-7 h-7 stroke-[2.5]" />
          </div>
        ) : indeterminate ? (
          <span className="font-mono text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Wait
          </span>
        ) : (
          <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#111827] tabular-nums tracking-tight">
            {Math.round(clampedPercent)}%
          </span>
        )}
      </div>
    </div>
  );
}
