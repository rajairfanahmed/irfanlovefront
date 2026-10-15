# 02 · Brand Identity, Monograms & Favicon Engineering
**Domain:** Frontend Architecture · Stage 1 Foundation  
**Philosophy:** Instant Brand Authority. Never use an empty `<h1>Acme Inc</h1>` text placeholder or emoji icon. Every project deserves a mathematically crafted SVG brand mark and a sharp favicon.

---

## 1. Bespoke Brand Mark Architecture

Every frontend must include a dedicated vector logo component at `frontend/src/components/ui/BrandLogo.tsx`.

### Archetypes of Human-Crafted Brand Marks:
1. **Geometric Monogram:** Interlocking initial letterforms with precision bezier curves or isometric angles.
2. **Abstract Tech Glyph:** Minimalist intersecting hairlines, aperture polygons, or kinetic prisms.
3. **Architectural Wordmark:** Precision-kerned display typography paired with a geometric punctuation mark or anchor symbol.

### Production BrandLogo Component Template:
```tsx
// frontend/src/components/ui/BrandLogo.tsx
import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function BrandLogo({ className = '', showWordmark = true }: BrandLogoProps) {
  return (
    <Link 
      href="/" 
      className={`group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${className}`}
      aria-label="Homepage"
    >
      {/* Precision Vector Glyph */}
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-hairline)] group-hover:border-[var(--accent-primary)] transition-colors duration-200">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-4 h-4 text-[var(--accent-primary)]"
          aria-hidden="true"
        >
          {/* Example: Precision Geometric Kinetic Monogram */}
          <path 
            d="M3 12L12 3L21 12L12 21L3 12Z" 
            stroke="currentColor" 
            strokeWidth="1.75" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M12 7V17M7 12H17" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
          />
        </svg>
      </div>

      {/* Crafted Wordmark */}
      {showWordmark && (
        <span className="font-display font-bold tracking-tight text-[var(--text-primary)] text-lg flex items-center gap-1.5">
          <span>NEXUS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />
        </span>
      )}
    </Link>
  );
}
```

---

## 2. Dynamic Next.js 15 Favicon & App Icon (`app/icon.tsx`)

Next.js 15 provides native support for generating programmatically crisp SVGs and favicons without external image files.

Create `frontend/src/app/icon.tsx`:
```tsx
import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B0F17',
          borderRadius: 8,
          border: '1px solid rgba(245, 158, 11, 0.4)',
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
```

In addition, provide `frontend/public/icon.svg` as a clean vector fallback:
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="8" fill="#0B0F17"/>
  <path d="M16 6L26 12V20L16 26L6 20V12L16 6Z" stroke="#F59E0B" stroke-width="2" stroke-linejoin="round"/>
</svg>
```

---

## 3. Brand Identity Quality Checklist:
- [ ] Brand glyph uses scalable, mathematical SVG geometry with explicit `viewBox`.
- [ ] No generic emoji icons used as brand logos.
- [ ] SVG handles both dark mode and light mode through `currentColor` or CSS tokens.
- [ ] Both Next.js dynamic `icon.tsx` and static `public/icon.svg` exist.
- [ ] Logo links to `/` with proper `aria-label` and visible focus ring for keyboard users.
