'use client';

import React from 'react';

export interface OptionToggleCardProps {
  title: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export function OptionToggleCard({
  title,
  description,
  checked,
  onChange,
  className = '',
}: OptionToggleCardProps) {
  return (
    <div
      onClick={() => onChange(!checked)}
      role="switch"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onChange(!checked);
        }
      }}
      className={`group relative flex items-center justify-between p-4 rounded-xl border transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ef4444]/40 focus-visible:ring-offset-1 focus-visible:ring-offset-[#09090b] overflow-hidden ${
        checked
          ? 'bg-white/[0.05] border-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]'
          : 'bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.08]'
      } ${className}`}
    >
      {/* Subtle shine */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none rounded-xl" />

      <div className="pr-4 text-left relative z-10">
        <span className={`text-[13px] font-semibold block transition-colors ${
          checked ? 'text-[#f4f4f5]' : 'text-[#a1a1aa]'
        }`}>
          {title}
        </span>
        <span className="text-[11px] text-[#52525b] mt-0.5 block leading-snug">
          {description}
        </span>
      </div>

      {/* Toggle switch */}
      <div
        className={`relative w-10 h-[22px] flex items-center rounded-full p-[2px] transition-all duration-250 shrink-0 ${
          checked
            ? 'bg-[#ef4444] shadow-[0_0_10px_rgba(239,68,68,0.2)]'
            : 'bg-[#27272a]'
        }`}
      >
        <div
          className={`bg-white w-[18px] h-[18px] rounded-full shadow-sm transform transition-transform duration-250 ${
            checked ? 'translate-x-[18px]' : 'translate-x-0'
          }`}
        />
      </div>
    </div>
  );
}
