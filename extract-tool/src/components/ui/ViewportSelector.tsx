'use client';

import React from 'react';
import { Check, Monitor, Tablet, Smartphone, Layers } from 'lucide-react';

export interface ViewportSelectorProps {
  selected: string[];
  onChange: (viewports: string[]) => void;
  className?: string;
}

const ALL_VIEWPORTS = ['desktop', 'tablet', 'mobile'];

const VIEWPORT_CONFIG = [
  { id: 'desktop', label: 'Desktop', resolution: '1920px', icon: Monitor },
  { id: 'tablet', label: 'Tablet', resolution: '768px', icon: Tablet },
  { id: 'mobile', label: 'Mobile', resolution: '390px', icon: Smartphone },
] as const;

export function ViewportSelector({
  selected,
  onChange,
  className = '',
}: ViewportSelectorProps) {
  const isAllSelected = ALL_VIEWPORTS.every((vp) => selected.includes(vp));
  const count = selected.length;

  const handleToggleAll = () => {
    onChange(isAllSelected ? [] : [...ALL_VIEWPORTS]);
  };

  const handleToggleViewport = (vpId: string) => {
    onChange(
      selected.includes(vpId)
        ? selected.filter((v) => v !== vpId)
        : [...selected, vpId]
    );
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Label row */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.12em] text-[#a1a1aa]">
          Target Viewports
        </span>
        <span
          className={`text-[11px] font-mono transition-colors ${
            count === 0 ? 'text-[#ef4444] font-semibold' : 'text-[#52525b]'
          }`}
        >
          {count === 0 ? 'Select at least one' : `${count}/3`}
        </span>
      </div>

      {/* Chips row */}
      <div className="flex items-center gap-2 flex-wrap">
        {/* Select All pill */}
        <button
          type="button"
          onClick={handleToggleAll}
          aria-pressed={isAllSelected}
          className={`h-9 px-3.5 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all duration-200 select-none border ${
            isAllSelected
              ? 'bg-[#ef4444]/12 border-[#ef4444]/30 text-[#f87171] shadow-[0_0_12px_rgba(239,68,68,0.08)]'
              : 'bg-white/[0.03] border-white/[0.06] text-[#71717a] hover:border-white/[0.12] hover:text-[#a1a1aa]'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>All</span>
          {isAllSelected && <Check className="w-3 h-3 stroke-[2.5]" />}
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-white/[0.06]" />

        {/* Individual viewport chips */}
        {VIEWPORT_CONFIG.map(({ id, label, resolution, icon: Icon }) => {
          const isSelected = selected.includes(id);
          return (
            <button
              key={id}
              type="button"
              onClick={() => handleToggleViewport(id)}
              aria-pressed={isSelected}
              className={`h-9 px-3.5 rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all duration-200 select-none border ${
                isSelected
                  ? 'bg-white/[0.08] border-white/[0.15] text-[#f4f4f5] shadow-[0_0_12px_rgba(255,255,255,0.03)]'
                  : 'bg-white/[0.02] border-white/[0.06] text-[#52525b] hover:border-white/[0.1] hover:text-[#71717a]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{label}</span>
              <span className={`text-[10px] ${isSelected ? 'text-[#71717a]' : 'text-[#3f3f46]'}`}>
                {resolution}
              </span>
              {isSelected && <Check className="w-3 h-3 stroke-[2.5] text-[#10b981]" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
