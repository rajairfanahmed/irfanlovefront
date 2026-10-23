'use client';

import React from 'react';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function TextInput({
  label,
  error,
  id,
  className = '',
  ...props
}: TextInputProps) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full flex flex-col space-y-1.5 text-left">
      {label && (
        <label
          htmlFor={inputId}
          className="font-sans text-xs font-semibold text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full h-11 px-3.5 rounded-xl border bg-white text-sm font-sans text-gray-900 placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-red-500/15 focus:border-[#EA4335] disabled:opacity-50 disabled:cursor-not-allowed ${
          error ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
        } ${className}`}
        {...props}
      />
      {error && (
        <span className="text-[11px] font-sans text-red-600 font-medium">
          {error}
        </span>
      )}
    </div>
  );
}

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function TextArea({
  label,
  error,
  id,
  className = '',
  rows = 3,
  ...props
}: TextAreaProps) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full flex flex-col space-y-1.5 text-left">
      {label && (
        <label
          htmlFor={inputId}
          className="font-sans text-xs font-semibold text-gray-700"
        >
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        rows={rows}
        className={`w-full p-3 rounded-xl border bg-white text-sm font-sans text-gray-900 placeholder:text-gray-400 transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-red-500/15 focus:border-[#EA4335] disabled:opacity-50 disabled:cursor-not-allowed resize-none ${
          error ? 'border-red-500' : 'border-gray-200 hover:border-gray-300'
        } ${className}`}
        {...props}
      />
      {error && (
        <span className="text-[11px] font-sans text-red-600 font-medium">
          {error}
        </span>
      )}
    </div>
  );
}
