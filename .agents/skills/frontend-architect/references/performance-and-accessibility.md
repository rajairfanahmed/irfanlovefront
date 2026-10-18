# Performance Engineering & Accessibility Defaults

**Scope:** Core Web Vitals, Image Optimization, Mobile Touch Resets & WCAG Standards  
**Owner:** `frontend-architect`  
**Load Condition:** Loaded during Step 2 of Stage 1 to establish baseline performance and accessibility  

---

## 1. Purpose & Problem Solved
Websites often fail Lighthouse audits due to cumulative layout shifts, unoptimized images, missing focus rings, or annoying 300ms mobile touch delays. This reference establishes baseline performance engineering and WCAG AA accessibility defaults directly in the foundation styles and configuration.

---

## 2. When to Load This Reference
- Loaded when writing global accessibility rules in `globals.css`.
- Loaded when configuring Next.js image optimization in `next.config.ts`.

---

## 3. Inputs & Prerequisites
- Design system tokens from `references/design-system-foundation.md`.
- Target device constraints from `DESIGN_ENGINEERING_BRIEF.md`.

---

## 4. Mobile Ergonomics & Global Reset Rules

Inject these critical accessibility resets directly into `frontend/src/app/globals.css`:

```css
/* Eliminate Mobile Tap Highlight Gray Flash */
html {
  -webkit-tap-highlight-color: transparent;
}

/* Remove 300ms Mobile Tap Delay & Prevent Unintended Double-Tap Zoom */
button,
a,
input,
select,
textarea {
  touch-action: manipulation;
}

/* Accessible High-Contrast Focus Visible Outline */
:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

/* Smooth Scrolling Respecting User Reduced Motion */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

/* Defensive Zero-Overflow Container Protection */
body {
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## 5. Core Web Vitals Engineering Thresholds

All architectural choices must respect strict Core Web Vitals budgets:
1. **Largest Contentful Paint (LCP < 1.2s):**
   - Zero render-blocking CSS `@import` fonts.
   - Hero media elements must prioritize loading with `priority` attribute.
2. **Cumulative Layout Shift (CLS = 0):**
   - Always declare explicit `width` and `height` or `aspect-ratio` on images, media containers, and SVG marks.
   - Use `next/font` with `display: 'swap'` to eliminate FOIT (Flash of Invisible Text).
3. **Interaction to Next Paint (INP < 100ms):**
   - Keep JavaScript bundles lean.
   - Respond to interactive pointer events on `pointerdown` without heavy main-thread work.

---

## 6. Image Optimization Architecture (`next/image`)

Configure modern image formats in `next.config.ts`:

```typescript
// frontend/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
```

---

## 7. WCAG AA / AAA Accessibility Defaults

1. **Minimum Touch Targets:** All interactive elements must maintain a minimum touch target bounding box of 44x44px on mobile viewports.
2. **Form Accessibility:** All form inputs must have associated `<label>` tags with matching `htmlFor` attributes or explicit `aria-label`.
3. **Color Contrast:**
   - Normal text must achieve at least 4.5:1 contrast against its background.
   - Large display text must achieve at least 3:1 contrast.
   - Never rely on color alone to convey error or success states (always pair color with an icon or descriptive text).

---

## 8. Output Artifact
- Injects accessibility resets into `frontend/src/app/globals.css`.
- Configures image formats in `frontend/next.config.ts`.

---

## 9. Validation Criteria
- Touch action and tap highlight resets verified in `globals.css`.
- Image optimization enabled for modern formats.
- High-visibility `:focus-visible` styling active.
