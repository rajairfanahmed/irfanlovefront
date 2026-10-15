# 05 · Production Code & Performance Standards
**Status:** Mandatory Frontend Engineering Rule  
**Enforcement:** Must be satisfied by all generated frontend code

A great UI/UX design is worthless if the code is slow, janky, or broken on mobile. These standards bridge visual aesthetics and production-grade engineering.

---

## 1. Zero Layout Shift (CLS < 0.05)

Cumulative Layout Shift (CLS) ruins user experience. Prevent it with strict frontend engineering practices:
1. **Explicit Dimensions on All Media:**
   - Always specify `width`, `height`, or `aspect-ratio` on `<img>`, `<video>`, and SVG containers.
   - Example: `<img src="..." width="800" height="500" style={{ aspectRatio: '16/9', objectFit: 'cover' }} />`
2. **Font Loading Strategy:**
   - Use `font-display: swap` in Google Fonts links or `@next/font` with `display: 'swap'` to avoid layout jumps when fonts load.
3. **Skeleton Placeholders:**
   - If content loads asynchronously, reserve exact height boxes with a subtle pulse animation (`animation: pulse 1.5s ease-in-out infinite`).

---

## 2. Fluid Responsive Breakpoints & Mobile-First CSS

Build mobile-first from 320px upwards:

| Viewport | Device Class | Layout Adaptation |
|---|---|---|
| **320px–480px** | Mobile Portrait | Single column, touch targets ≥ 44px, fluid typography via `clamp()`, zero horizontal scroll. |
| **481px–768px** | Mobile Landscape / Tablet | 2-column grids where appropriate, collapsible navigation. |
| **769px–1024px** | Tablet Landscape / Small Laptop | Asymmetric split layouts activate, sidebars collapse to icons or top rails. |
| **1025px–1440px** | Standard Desktop | Full multi-column editorial layouts, sticky sidebars, high whitespace. |
| **1441px+** | Wide Desktop | Max-width constraints (`max-width: 1440px; margin: 0 auto;`) to prevent awkward line stretching. |

```css
/* Zero Horizontal Scroll Guarantee */
html, body {
  max-width: 100vw;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}
```

---

## 3. Semantic CSS Custom Properties Architecture

Never scatter hardcoded hex values or arbitrary pixel numbers across component files. Declare all design tokens in `:root`:

```css
:root {
  /* Surfaces */
  --color-background: #FBF9F5;
  --color-surface: #F3EFEA;
  --color-surface-elevated: #FFFFFF;
  
  /* Text */
  --color-foreground: #18181B;
  --color-foreground-muted: #71717A;
  --color-foreground-subtle: #A1A1AA;
  
  /* Brand Accent */
  --color-accent: #C2410C;
  --color-accent-contrast: #FFFFFF;
  
  /* Borders & Focus */
  --color-border: rgba(24, 24, 27, 0.08);
  --color-border-subtle: rgba(24, 24, 27, 0.04);
  --color-focus: #C2410C;
  
  /* Radii */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  
  /* Container Widths */
  --container-reading: 720px;
  --container-standard: 1200px;
  --container-wide: 1400px;
}
```

---

## 4. Modern Technical SEO & Social Metadata

Every page route must include complete semantic metadata:
- **Title Tag:** Descriptive, unique per route: `<title>Muhammad Zain | Senior Frontend Engineer & Distributed Systems</title>`
- **Meta Description:** Compelling, concise (140–160 characters).
- **Canonical Link:** `<link rel="canonical" href="https://domain.com/path" />`
- **OpenGraph & Twitter:** `og:title`, `og:description`, `og:image`, `twitter:card`.
- **Structured Data:** JSON-LD schema (e.g. `Person` or `WebSite`) embedded in `<head>`.

---

## 5. Motion Performance & Accessibility

1. **Hardware-Accelerated Transitions Only:** Animate strictly `transform` and `opacity`. NEVER animate `height`, `width`, `top`, `left`, or `margin` (causes costly browser reflows!).
2. **Transition Curves:** Use `cubic-bezier(0.16, 1, 0.3, 1)` (out-expo) for snappy, professional UI response (150ms–300ms).
3. **Respect Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
