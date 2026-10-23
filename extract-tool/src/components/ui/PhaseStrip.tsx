'use client';

import React from 'react';
import { Check } from 'lucide-react';

export type CapturePhase = 'discovering' | 'capturing' | 'packaging' | 'done';

export interface PhaseStripProps {
  phase: CapturePhase;
  className?: string;
}

export function PhaseStrip({ phase, className = '' }: PhaseStripProps) {
  const phases = [
    { id: 'discovering', label: 'Finding pages' },
    { id: 'capturing', label: 'Capturing' },
    { id: 'packaging', label: 'Packaging' },
  ];

  const getStepStatus = (stepId: string) => {
    if (phase === 'done') return 'completed';
    if (stepId === 'discovering') {
      if (phase === 'discovering') return 'current';
      return 'completed';
    }
    if (stepId === 'capturing') {
      if (phase === 'discovering') return 'pending';
      if (phase === 'capturing') return 'current';
      return 'completed';
    }
    if (stepId === 'packaging') {
      if (phase === 'packaging') return 'current';
      return 'pending';
    }
    return 'pending';
  };

  return (
    <div
      role="navigation"
      aria-label="Extraction phases"
      className={`flex items-center justify-center gap-1.5 sm:gap-3 text-xs font-mono select-none ${className}`}
    >
      {phases.map((step, idx) => {
        const status = getStepStatus(step.id);
        const isCurrent = status === 'current';
        const isCompleted = status === 'completed';

        return (
          <React.Fragment key={step.id}>
            {idx > 0 && (
              <span className="text-gray-300 font-sans text-xs">/</span>
            )}
            <div
              className={`flex items-center gap-1.5 transition-colors ${
                isCurrent
                  ? 'text-[#111827] font-bold'
                  : isCompleted
                  ? 'text-gray-700 font-medium'
                  : 'text-gray-400 opacity-60'
              }`}
            >
              {isCompleted ? (
                <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                </div>
              ) : (
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    isCurrent ? 'bg-[#EA4335]' : 'bg-gray-300'
                  }`}
                />
              )}
              <span>{step.label}</span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
