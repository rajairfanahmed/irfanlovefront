'use client';

import React from 'react';
import { Loader2 } from 'lucide-react';

export interface SubmitButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function SubmitButton({
  onClick,
  disabled = false,
  loading = false,
  className = '',
  children = 'submit',
}: SubmitButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      aria-label="Submit URL for design extraction"
      className={`h-12 px-6 rounded-xl border-[1.5px] border-[#EA4335] bg-[#FFFFFF] hover:bg-[#EA4335] text-[#EA4335] hover:text-[#FFFFFF] font-semibold text-sm font-sans transition-all duration-200 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA4335] focus-visible:ring-offset-2 flex items-center justify-center shadow-sm select-none ${className}`}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        children
      )}
    </button>
  );
}
