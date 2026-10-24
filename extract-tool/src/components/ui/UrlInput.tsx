'use client';

import React from 'react';
import { Globe } from 'lucide-react';

export interface UrlInputProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  error?: string;
  className?: string;
}

export function UrlInput({
  value,
  onChange,
  onSubmit,
  placeholder = 'https://example.com',
  disabled = false,
  autoFocus = true,
  inputRef,
  error,
  className = '',
}: UrlInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !disabled) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className={`relative w-full group ${className}`}>
      <label htmlFor="target-url-input" className="sr-only">
        Target Website Address
      </label>

      {/* Globe icon */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10">
        <Globe className={`w-[18px] h-[18px] transition-colors duration-200 ${
          value ? 'text-[#ef4444]' : 'text-[#52525b]'
        }`} />
      </div>

      <input
        id="target-url-input"
        ref={inputRef}
        type="url"
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        aria-label="Target website address input"
        aria-invalid={Boolean(error)}
        className={`w-full h-13 pl-11 pr-4 rounded-xl bg-[#1a1a20] text-[#f4f4f5] text-sm font-sans placeholder:text-[#52525b] border transition-all duration-200 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed ${
          error
            ? 'border-[#ef4444]/50 focus:border-[#ef4444] focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]'
            : 'border-white/[0.08] hover:border-white/[0.12] focus:border-[#ef4444]/40 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]'
        }`}
      />

      {/* Active glow line at bottom */}
      <div className={`absolute bottom-0 left-3 right-3 h-px transition-opacity duration-300 ${
        value ? 'opacity-100' : 'opacity-0'
      }`} style={{ background: 'linear-gradient(90deg, transparent, #ef4444, transparent)' }} />
    </div>
  );
}
