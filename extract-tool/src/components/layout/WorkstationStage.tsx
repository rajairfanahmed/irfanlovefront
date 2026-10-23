'use client';

import React from 'react';

export interface WorkstationStageProps {
  children: React.ReactNode;
  className?: string;
}

export function WorkstationStage({
  children,
  className = '',
}: WorkstationStageProps) {
  return (
    <div
      className={`w-full max-w-[760px] bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_2px_16px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center min-h-[380px] transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
