'use client';

import React from 'react';

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
  placeholder = 'Enter url: e.g. https://robinsweb.net',
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
    <div className={`relative w-full ${className}`}>
      <label htmlFor="target-url-input" className="sr-only">
        Target Website Address
      </label>
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
        className={`w-full h-12 px-4 rounded-xl border-[1.5px] bg-[#FFFFFF] text-[#111827] text-sm font-sans placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500/15 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ${
          error ? 'border-[#EA4335]' : 'border-[#EA4335]'
        }`}
      />
    </div>
  );
}
