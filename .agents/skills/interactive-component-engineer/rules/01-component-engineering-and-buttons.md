# 01 · Component Engineering, Button Geometry & Sticky Highlight Prevention
**Domain:** Interactive Component Engineering · Stage 3 Components & Motion  
**Philosophy:** Tactile Craft & Interaction Integrity. Every interactive element must provide immediate, delightful feedback without visual glitches or sticky focus states.

---

## 1. The Sticky Button Highlight Bug (Permanent Prevention)

In modern browsers, clicking a `<button>` or `<a>` leaves it focused. If CSS applies styling to `:focus`, the button remains in an ugly highlighted state after the user clicks and moves the mouse away.

Every project component library **MUST** implement this exact CSS standard in `frontend/src/app/globals.css`:

```css
/* 1. Eliminate mobile tap highlight flash */
* {
  -webkit-tap-highlight-color: transparent;
}

/* 2. Remove focus rings on mouse click while preserving accessibility for keyboard users */
button:focus:not(:focus-visible),
a:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}

/* 3. Keyboard users get an intentional, high-contrast focus ring */
button:focus-visible,
a:focus-visible {
  outline: 2px solid var(--border-focus, currentColor);
  outline-offset: 2px;
}
```

---

## 2. Button Archetypes (No Generic Pill Slop)

BANNED:
❌ Generic rounded pill buttons (`rounded-full`) with glowing gradients and blurred drop-shadows on every section.
❌ Competing primary buttons in the same section.
❌ Click targets under 44px.

### Production Button Component (`frontend/src/components/ui/Button.tsx`):

```tsx
'use client';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'kinetic';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'right',
      isLoading = false,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    // Sharp Architectural Geometry
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]';

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 min-h-[36px] gap-1.5 rounded-md font-mono uppercase tracking-wider',
      md: 'text-sm px-5 py-2.5 min-h-[44px] gap-2 rounded-md',
      lg: 'text-base px-7 py-3.5 min-h-[52px] gap-2.5 rounded-lg font-semibold',
    };

    const variants = {
      // Solid Architectural
      primary:
        'bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 border border-transparent shadow-sm',
      // Hairline Ghost
      secondary:
        'bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-hairline)] hover:border-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]',
      // Minimal Ghost
      ghost:
        'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] border border-transparent',
      // Monospace Kinetic
      kinetic:
        'bg-transparent text-[var(--text-primary)] font-mono text-xs uppercase tracking-widest border-b border-current hover:opacity-75 !p-0 !min-h-0 rounded-none active:scale-100',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
        {...props}
      >
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
            <span>{children}</span>
            {Icon && iconPosition === 'right' && (
              <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

---

## 3. Borderless Cards & Single-Elevation Hierarchy

BANNED:
❌ Placing every piece of text inside a dark rounded card box with a glowing purple outline.
❌ Nesting cards inside cards inside cards.

### Correct Card Engineering Principles:
1. **The Borderless Whitespace Container:** Generous padding (`p-6` to `p-10`) and distinct typography. Clean whitespace creates visual grouping without heavy borders.
2. **Single Elevation Rule:** Pick ONE technique per card:
   - *Option A:* Subtle surface background (`bg-[var(--bg-surface)]`), NO border, NO shadow.
   - *Option B:* Crisp 1px hairline border (`border border-[var(--border-hairline)]`), transparent background, NO shadow.
   - *Option C:* Soft diffused shadow, light background, NO border.
   **NEVER combine a dark background, a thick border, AND a glowing drop-shadow!**
3. **Card Micro-Interaction:** Subtle lift on hover: `hover:-translate-y-1 transition-transform duration-200`.

---

## 4. Component Acceptance Checklist:
- [ ] Sticky highlight fix is active in `globals.css`.
- [ ] No button sticks in a focused state after mouse click.
- [ ] All interactive touch targets are ≥ 44px on mobile.
- [ ] Cards use single-elevation rules and no nested card clutter.
- [ ] Components live cleanly colocated in `frontend/src/components/ui/` and `sections/`.
