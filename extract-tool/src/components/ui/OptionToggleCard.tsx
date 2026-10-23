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
      className={`group flex items-center justify-between p-3.5 md:p-4 rounded-2xl border transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA4335] ${
        checked
          ? 'bg-white border-gray-300 shadow-2xs'
          : 'bg-gray-50/70 border-gray-200 hover:bg-white hover:border-gray-300'
      } ${className}`}
    >
      <div className="pr-3 text-left">
        <span className="font-sans text-xs md:text-sm font-semibold text-[#111827] block">
          {title}
        </span>
        <span className="font-sans text-[11px] md:text-xs text-gray-500 mt-0.5 block leading-tight">
          {description}
        </span>
      </div>

      {/* Pill Toggle Switch (Matches user screenshot: black pill when active, white round knob) */}
      <div
        className={`w-11 h-6 flex items-center rounded-full p-0.5 transition-colors duration-200 shrink-0 ${
          checked ? 'bg-[#111827]' : 'bg-gray-200'
        }`}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-sm transform transition-transform duration-200 ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </div>
    </div>
  );
}
