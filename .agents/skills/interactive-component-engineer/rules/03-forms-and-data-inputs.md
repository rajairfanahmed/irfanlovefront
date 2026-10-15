# 03 · Forms, Data Inputs & State Feedback
**Domain:** Interactive Component Engineering · Stage 3 Components & Motion  
**Philosophy:** Frictionless Interaction. Form controls must guide users effortlessly, provide crystal-clear error messages, and never cause cognitive or visual fatigue.

---

## 1. Professional Input Architecture

BANNED:
❌ Inputs relying exclusively on placeholder text instead of persistent `<label>`.
❌ Inputs under 44px height that are difficult to tap on mobile.
❌ Red border error states without explanatory text.
❌ Cryptic error messages like "Invalid format".

### Production Input Component (`frontend/src/components/ui/Input.tsx`):

```tsx
'use client';
import React, { InputHTMLAttributes, forwardRef, useId } from 'react';
import { AlertCircle } from 'lucide-react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', disabled, ...props }, ref) => {
    const inputId = useId();
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className="w-full space-y-1.5">
        <label
          htmlFor={inputId}
          className="block text-xs font-mono uppercase tracking-wider font-semibold text-[var(--text-secondary)]"
        >
          {label}
        </label>

        <div className="relative">
          <input
            id={inputId}
            ref={ref}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : helperText ? helperId : undefined}
            className={`w-full min-h-[44px] px-3.5 py-2.5 text-sm rounded-md bg-[var(--bg-surface)] text-[var(--text-primary)] border transition-all duration-150 outline-none placeholder:text-[var(--text-muted)] disabled:opacity-50 disabled:cursor-not-allowed ${
              error
                ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                : 'border-[var(--border-hairline)] focus:border-[var(--border-focus)] focus:ring-1 focus:ring-[var(--border-focus)]'
            } ${className}`}
            {...props}
          />

          {error && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-500 pointer-events-none">
              <AlertCircle className="w-4 h-4" />
            </div>
          )}
        </div>

        {error && (
          <p id={errorId} className="text-xs text-rose-500 flex items-center gap-1 font-medium mt-1">
            <span>{error}</span>
          </p>
        )}

        {!error && helperText && (
          <p id={helperId} className="text-xs text-[var(--text-muted)] mt-1">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
```

---

## 2. Form & Feedback Checklist:
- [ ] Every input has a visible `<label>` tied via `htmlFor` and `id`.
- [ ] Inputs have minimum 44px height for mobile touch ergonomics.
- [ ] Error messages are tied via `aria-describedby` and `aria-invalid="true"`.
- [ ] Submitting forms displays loading spinners and disables the button to prevent duplicate submissions.
- [ ] Success state delivers a polite confirmation message or notification.
