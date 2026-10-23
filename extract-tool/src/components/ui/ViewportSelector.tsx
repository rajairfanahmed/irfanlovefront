'use client';

import React from 'react';
import { Check, Monitor, Tablet, Smartphone, Layers } from 'lucide-react';

export interface ViewportSelectorProps {
  selected: string[];
  onChange: (viewports: string[]) => void;
  className?: string;
}

const ALL_VIEWPORTS = ['desktop', 'tablet', 'mobile'];

export function ViewportSelector({
  selected,
  onChange,
  className = '',
}: ViewportSelectorProps) {
  const isAllSelected = ALL_VIEWPORTS.every((vp) => selected.includes(vp));
  const count = selected.length;

  const handleToggleAll = () => {
    if (isAllSelected) {
      // Clicking it when all are selected clears them
      onChange([]);
    } else {
      onChange([...ALL_VIEWPORTS]);
    }
  };

  const handleToggleViewport = (vpId: string) => {
    if (selected.includes(vpId)) {
      onChange(selected.filter((v) => v !== vpId));
    } else {
      onChange([...selected, vpId]);
    }
  };

  return (
    <div className={`space-y-2 text-left ${className}`}>
      <div className="flex items-center justify-between">
        <label className="text-xs font-mono font-semibold uppercase tracking-wider text-gray-700">
          Target Viewports
        </label>
        <span
          className={`text-[11px] font-mono transition-colors ${
            count === 0 ? 'text-[#EA4335] font-semibold' : 'text-gray-400'
          }`}
        >
          {count === 0 ? 'Select at least one viewport' : `${count} of 3 selected`}
        </span>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {/* Select All Chip */}
        <button
          type="button"
          onClick={handleToggleAll}
          aria-pressed={isAllSelected}
          className={`h-9 px-3 rounded-xl border text-xs font-mono font-semibold flex items-center gap-1.5 transition-all duration-150 select-none ${
            isAllSelected
              ? 'border-[#EA4335] bg-red-50 text-[#EA4335] shadow-2xs'
              : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Select All</span>
          {isAllSelected && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
        </button>

        {/* Desktop (1920px) */}
        <button
          type="button"
          onClick={() => handleToggleViewport('desktop')}
          aria-pressed={selected.includes('desktop')}
          className={`h-9 px-3 rounded-xl border text-xs font-mono font-medium flex items-center gap-1.5 transition-all duration-150 select-none ${
            selected.includes('desktop')
              ? 'border-[#111827] bg-[#111827] text-white shadow-2xs'
              : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
          }`}
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Desktop (1920px)</span>
          {selected.includes('desktop') && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
        </button>

        {/* Tablet (768px) */}
        <button
          type="button"
          onClick={() => handleToggleViewport('tablet')}
          aria-pressed={selected.includes('tablet')}
          className={`h-9 px-3 rounded-xl border text-xs font-mono font-medium flex items-center gap-1.5 transition-all duration-150 select-none ${
            selected.includes('tablet')
              ? 'border-[#111827] bg-[#111827] text-white shadow-2xs'
              : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
          }`}
        >
          <Tablet className="w-3.5 h-3.5" />
          <span>Tablet (768px)</span>
          {selected.includes('tablet') && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
        </button>

        {/* Mobile (390px) */}
        <button
          type="button"
          onClick={() => handleToggleViewport('mobile')}
          aria-pressed={selected.includes('mobile')}
          className={`h-9 px-3 rounded-xl border text-xs font-mono font-medium flex items-center gap-1.5 transition-all duration-150 select-none ${
            selected.includes('mobile')
              ? 'border-[#111827] bg-[#111827] text-white shadow-2xs'
              : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Mobile (390px)</span>
          {selected.includes('mobile') && <Check className="w-3.5 h-3.5 stroke-[2.5]" />}
        </button>
      </div>
    </div>
  );
}
