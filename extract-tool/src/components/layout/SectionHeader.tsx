'use client';

import React from 'react';

export interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col items-center text-center space-y-2 mb-8 ${className}`}>
      {tag && (
        <span className="inline-flex items-center px-3 py-1 rounded-full border border-red-200 bg-red-50 text-xs font-mono font-semibold tracking-wide uppercase text-[#EA4335]">
          {tag}
        </span>
      )}
      <h2 className="text-xl md:text-2xl font-bold font-display tracking-tight text-[#111827]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm font-sans text-gray-500 max-w-[48ch] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
