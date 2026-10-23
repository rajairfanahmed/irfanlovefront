'use client';

import React from 'react';

export interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  ariaLabel?: string;
  className?: string;
}

export function SectionContainer({
  children,
  id,
  ariaLabel,
  className = '',
}: SectionContainerProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`w-full flex flex-col items-center justify-center px-4 md:px-8 py-12 md:py-20 ${className}`}
    >
      <div className="max-w-3xl w-full mx-auto flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}
