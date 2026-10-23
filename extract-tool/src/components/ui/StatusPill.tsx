'use client';

import React from 'react';

export interface StatusPillProps {
  status: 'idle' | 'running' | 'completed';
  label?: string;
  className?: string;
}

export function StatusPill({
  status,
  label,
  className = '',
}: StatusPillProps) {
  const getDotStyle = () => {
    switch (status) {
      case 'running':
        return 'bg-[#EA4335] shadow-[0_0_8px_rgba(234,67,53,0.5)]';
      case 'completed':
        return 'bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)]';
      case 'idle':
      default:
        return 'bg-gray-400';
    }
  };

  const getDefaultLabel = () => {
    switch (status) {
      case 'running':
        return 'ENGINE ACTIVE';
      case 'completed':
        return 'READY FOR DOWNLOAD';
      case 'idle':
      default:
        return 'ENGINE IDLE';
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-mono font-medium text-gray-700 shadow-sm ${className}`}
    >
      <span className={`w-2 h-2 rounded-full transition-colors duration-300 ${getDotStyle()}`} />
      <span>{label || getDefaultLabel()}</span>
    </div>
  );
}
