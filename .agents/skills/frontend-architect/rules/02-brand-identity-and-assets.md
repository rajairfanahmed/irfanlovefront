# 02: Brand Identity, SVG Logo Architecture & Multi-Scale Assets
**Domain:** Frontend Architecture (Stage 1 Foundation)  
**Philosophy:** Structural Integrity, Vector Scalability & Small-Size Legibility. Zero floating unaligned brand marks. Zero external font dependencies in SVGs. Zero em-dashes.

---

## 1. SVG Logo Engineering Standards

All logos engineered in Stage 1 must follow strict SVG production guidelines:

### A. ViewBox & Dimensions
- **Icons & Monograms:** Always use `viewBox="0 0 512 512"` without fixed `width` or `height` attributes on the root `<svg>`. This guarantees responsive vector scaling.
- **Combination Marks (Icon + Wordmark):** Use `viewBox="0 0 1024 512"` or `viewBox="0 0 1024 256"`.
- **Self-Contained:** Absolutely no external font dependencies, external images, or external `<use>` hrefs. Convert custom letterforms to native `<path>` elements or use clean geometric primitives.

### B. Semantic Grouping & Component Architecture
Wrap logical sections in `<g>` elements with descriptive IDs:
- `<g id="icon">`: The standalone mark, monogram, or glyph.
- `<g id="wordmark">`: The typography and brand name.
- `<g id="tagline">`: Optional descriptor or category label.

This structure allows the application to dynamically extract the `#icon` group for the 16px-32px favicon and mobile headers, while rendering the full combination mark on desktop navigation.

### C. Small-Size Legibility Rule (Favicon Test: 16px / 32px)
Logos must maintain visual clarity at 16px and 32px favicon resolutions:
- Prefer solid geometric fills over delicate thin strokes.
- For 512x512 canvases, any stroke that must remain visible at 32px must have `strokeWidth="12"` or greater (minimum 2.5% of canvas width).
- Avoid intricate internal clockwork, micro-sparkles, or wispy lines that degrade into pixel mud at 16px.
- Test mentally or via preview at 64px, 32px, and 16px before locking the mark.

### D. Substrate Contrast & Color Discipline
- Default to solid, flat fills (`fill="currentColor"` or theme CSS variables).
- Gradient fills are allowed only when explicitly called for by the brand aesthetic.
- The logo must be legible on both light and dark backgrounds. Use `currentColor` with Tailwind utilities or provide automatic theme adaptation.

---

## 2. Structural BrandLogo Component (`frontend/src/components/ui/BrandLogo.tsx`)

### The Container-Constraint Mandate (Anti-Floating Bug Rule):
- `BrandLogo` MUST always be rendered as a structural child inside a bounded layout container (e.g. inside `Navbar` or inside a standard page container `max-w-7xl mx-auto px-6`).
- NEVER position `BrandLogo` with `absolute left-4 top-4` or `fixed` without container bounds.

### Production Component Implementation:
```tsx
// frontend/src/components/ui/BrandLogo.tsx
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({ 
  className = "", 
  showWordmark = true,
  size = "md" 
}: BrandLogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  return (
    <Link 
      href="/" 
      className={`inline-flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
      aria-label="Home"
    >
      {/* Container-Constrained Machined Icon Container */}
      <div className={`${iconSizes[size]} rounded-lg bg-surface border border-hairline flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm`}>
        <svg 
          viewBox="0 0 512 512" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-accent"
        >
          <g id="icon">
            <rect x="96" y="96" width="320" height="320" rx="64" stroke="currentColor" strokeWidth="36" />
            <path d="M192 320L256 192L320 320" stroke="currentColor" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="256" cy="272" r="16" fill="currentColor" />
          </g>
        </svg>
      </div>

      {/* Semantic Wordmark */}
      {showWordmark && (
        <span className="font-display font-bold tracking-tight text-foreground text-sm uppercase">
          Nexus<span className="text-accent">.</span>
        </span>
      )}
    </Link>
  );
}
```

---

## 3. Dynamic Retina Favicon (`frontend/src/app/icon.tsx`)

Next.js 15 App Router natively generates multi-resolution retina favicons using `ImageResponse`:

```tsx
// frontend/src/app/icon.tsx
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0F17",
          borderRadius: 8,
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "#38BDF8",
          fontSize: 18,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        N
      </div>
    ),
    { ...size }
  );
}
```

Provide the fallback standalone vector mark at `frontend/public/icon.svg` matching the `#icon` group geometry.

---

## 4. Multi-Scale Export Family Standards

When exporting production brand packages, generate assets at the standard digital display scale:
- `favicon.ico`: 48x48 (browser tabs)
- `icon-16.png`: 16x16 (dense browser tab view)
- `icon-32.png`: 32x32 (standard browser tab retina)
- `apple-touch-icon.png`: 180x180 (iOS home screen bookmark)
- `pwa-192.png`: 192x192 (Android app drawer & PWA splash)
- `pwa-512.png`: 512x512 (High-resolution PWA store asset)
- `og-preview.png`: 1200x630 (Social media card preview)

---

## 5. Guided Logo Exploration Workflow (When User Requests Logo Design)

When a brief requires logo conception or refinement:
1. **Explore 3 Distinct Concepts:**
   - Direction 1: Minimal Geometric Letterform / Monogram
   - Direction 2: Abstract Structural / Architectural Symbol
   - Direction 3: High-Tech Telemetry / Mechanical Glyph
2. **Side-by-Side Verification:**
   - Present concepts side-by-side on both dark (`#11141D`) and light (`#FFFFFF`) surfaces.
   - Include a 64px, 32px, and 16px size check strip to verify small-size legibility.
3. **Refine & Lock:**
   - Apply user feedback with incrementing revisions (`iteration-1.svg`, `iteration-2.svg`).
   - Extract the locked `#icon` group for `BrandLogo.tsx`, `icon.tsx`, and `public/icon.svg`.
