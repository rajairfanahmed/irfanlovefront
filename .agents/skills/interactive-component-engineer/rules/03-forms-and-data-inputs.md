# 03: Accessible Forms, Inputs & Data Entry
**Domain:** Interactive Component Engineering (Stage 3)  
**Philosophy:** Form contrast compliance, explicit labeling, and error prevention. Zero em-dashes.

---

## 1. Form Layout & Contrast Guardrails

1. **Label ABOVE input:** Never use placeholder-as-label.
2. **Error text BELOW input:** Clear, inline error messages with semantic icons.
3. **Form Contrast Check (WCAG AA):**
   - Form inputs, placeholder text, focus rings, helper text, and error text all pass WCAG AA contrast (>= 4.5:1) against the section background.
   - Light placeholders on a near-white form or form labels grayer than 4.5:1 are banned.
4. **Standard Spacing:** Use `gap-2` for input blocks and `gap-6` between form rows.

---

## 2. Production Accessible Input Component

```tsx
// frontend/src/components/ui/Input.tsx
'use client';
import { type InputHTMLAttributes, forwardRef, useId } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  id,
  className = '',
  required,
  ...props
}, ref) => {
  const generatedId = useId();
  const inputId = id || generatedId;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;

  return (
    <div className="flex flex-col gap-2 w-full">
      <label 
        htmlFor={inputId}
        className="text-xs uppercase font-mono tracking-wider text-[var(--text-secondary)] font-medium flex items-center justify-between"
      >
        <span>{label}</span>
        {required && <span className="text-amber-500 text-[10px]">*REQUIRED</span>}
      </label>

      <input
        ref={ref}
        id={inputId}
        aria-describedby={error ? errorId : helperText ? helperId : undefined}
        aria-invalid={!!error}
        required={required}
        className={`w-full px-4 py-3 rounded-lg bg-[var(--bg-surface)] border text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
          error 
            ? 'border-rose-500 focus-visible:outline-rose-500' 
            : 'border-[var(--border-hairline)] focus-visible:outline-[var(--border-focus)]'
        } ${className}`}
        {...props}
      />

      {error ? (
        <p id={errorId} className="text-xs text-rose-400 font-mono mt-0.5">
          {error}
        </p>
      ) : helperText ? (
        <p id={helperId} className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
          {helperText}
        </p>
      ) : null}
    </div>
  );
});
Input.displayName = 'Input';
```
