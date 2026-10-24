'use client';

import React from 'react';
import { Check } from 'lucide-react';

export type CapturePhase = 'discovering' | 'capturing' | 'packaging' | 'done';

export interface PhaseStripProps {
  phase: CapturePhase;
  className?: string;
}

const PHASES = [
  { id: 'discovering', label: 'Discover', number: 1 },
  { id: 'capturing', label: 'Capture', number: 2 },
  { id: 'packaging', label: 'Package', number: 3 },
] as const;

export function PhaseStrip({ phase, className = '' }: PhaseStripProps) {
  const getStepStatus = (stepId: string) => {
    if (phase === 'done') return 'completed';
    if (stepId === 'discovering') {
      return phase === 'discovering' ? 'current' : 'completed';
    }
    if (stepId === 'capturing') {
      if (phase === 'discovering') return 'pending';
      return phase === 'capturing' ? 'current' : 'completed';
    }
    if (stepId === 'packaging') {
      return phase === 'packaging' ? 'current' : 'pending';
    }
    return 'pending';
  };

  return (
    <div
      role="navigation"
      aria-label="Extraction phases"
      className={`flex items-center justify-center gap-0 text-xs font-mono select-none ${className}`}
    >
      {PHASES.map((step, idx) => {
        const status = getStepStatus(step.id);
        const isCurrent = status === 'current';
        const isCompleted = status === 'completed';
        const isPending = status === 'pending';

        return (
          <React.Fragment key={step.id}>
            {/* Connector line */}
            {idx > 0 && (
              <div className={`w-8 h-px transition-colors duration-300 ${
                isCompleted || isCurrent ? 'bg-[#ef4444]/30' : 'bg-white/[0.06]'
              }`} />
            )}

            <div className="flex items-center gap-2">
              {/* Step indicator */}
              {isCompleted ? (
                <div className="w-5 h-5 rounded-full bg-[#10b981]/15 text-[#10b981] flex items-center justify-center border border-[#10b981]/20">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
              ) : (
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
                  isCurrent
                    ? 'bg-[#ef4444]/15 text-[#ef4444] border border-[#ef4444]/30 shadow-[0_0_8px_rgba(239,68,68,0.15)]'
                    : 'bg-white/[0.03] text-[#3f3f46] border border-white/[0.06]'
                }`}>
                  {step.number}
                </div>
              )}

              {/* Label */}
              <span className={`transition-colors duration-300 ${
                isCurrent
                  ? 'text-[#f4f4f5] font-semibold'
                  : isCompleted
                  ? 'text-[#a1a1aa]'
                  : 'text-[#3f3f46]'
              }`}>
                {step.label}
              </span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
