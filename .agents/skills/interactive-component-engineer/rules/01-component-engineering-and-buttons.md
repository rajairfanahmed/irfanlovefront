# 01: Component Engineering, Buttons & Accessible UI Primitives
**Domain:** Interactive Component Engineering (Stage 3)  
**Philosophy:** Tactile feedback, rigorous accessibility, and visual discipline. Zero em-dashes.

---

## 1. Button Geometry & Strict Directives

### The Banned Button Failures:
1. **Button Text Wrapping:** Button labels wrapping to 2 or 3 lines at desktop are broken. Fix by shortening the label (3 words max) or widening the button.
2. **Button Contrast Failure:** White button + white text, transparent button with no border, or low-contrast text (< 4.5:1) are banned.
3. **Duplicate CTA Intent:** Two CTAs with the same intent on one page is a Pre-Flight Fail. Pick ONE label per intent ("Initiate Contact" everywhere, never mixing with "Get in touch" or "Let's talk").
4. **Sticky Tap-Highlight:** Permanent fix must be present in `globals.css`:
   ```css
   * { -webkit-tap-highlight-color: transparent; }
   button:focus:not(:focus-visible), a:focus:not(:focus-visible) { outline: none; box-shadow: none; }
   button:focus-visible, a:focus-visible { outline: 2px solid var(--border-focus, currentColor); outline-offset: 2px; }
   ```

### Production Button Primitive:
```tsx
// frontend/src/components/ui/Button.tsx
'use client';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 whitespace-nowrap active:scale-[0.98] active:-translate-y-[1px] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2';
  
  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 h-8 gap-1.5 rounded-md',
    md: 'text-sm px-5 py-2.5 h-11 gap-2 rounded-lg',
    lg: 'text-base px-6 py-3 h-13 gap-2.5 rounded-xl',
  };

  const variantStyles = {
    primary: 'bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90',
    secondary: 'bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-hairline)] hover:bg-[var(--bg-surface)]',
    outline: 'bg-transparent text-[var(--text-primary)] border border-[var(--border-hairline)] hover:border-[var(--text-secondary)]',
    ghost: 'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]',
  };

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = 'Button';
```

---

## 2. Card Containers & Shape Consistency Lock

1. **Cards Only When Elevation Communicates Real Hierarchy:** Otherwise group with `border-t`, `divide-y`, or negative space.
2. **Tinted Shadows:** Tint shadows to background hue. No pure-black drop shadows on light backgrounds.
3. **Shape Consistency Lock:** Pick ONE corner radius scale (all-sharp, all-soft 12-16px, or all-pill for interactive). Mixed systems are allowed only when there is a documented systemic rule followed everywhere.
