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

### E. The Standalone Shape Rule (Anti-Box Mandate)
- **NEVER enclose the logo in shapes:** Absolutely NO surrounding boxes, squares, circles, badges, or rounded tiles unless explicitly demanded by the user.
- **Let the logo stand alone:** The glyph or monogram must breathe as a pure, unconstrained vector silhouette. Clipart-in-a-box is strictly banned.

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
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  return (
    <Link 
      href="/" 
      className={`inline-flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
      aria-label="Home"
    >
      {/* Pure Standalone Vector Mark (Zero enclosing boxes, zero badges) */}
      <svg 
        viewBox="0 0 512 512" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSizes[size]} transition-transform group-hover:scale-105`}
      >
        <g id="icon">
          {/* Example: Integrated Monoline / Negative Space Glyph */}
          <path 
            d="M128 128H256C326.69 128 384 185.31 384 256C384 326.69 326.69 384 256 384H128V128Z" 
            stroke="currentColor" 
            strokeWidth="48" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M256 220V320M220 284L256 320L292 284" 
            stroke="#00F5A0" 
            strokeWidth="40" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </g>
      </svg>

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

## 5. Guided Logo Exploration Workflow & 4-Pillar Design System

When engineering a brand mark, monogram, or logo, follow this mandatory 4-pillar blueprint:

### Pillar 1: Define the Core Metaphor (The "Why")
Before drafting SVG coordinates, identify the 2 or 3 distinct concepts you are merging:
- **The Creator / Entity:** The primary initial, letterform, or brand identifier (e.g. Creator "Irfan" letter `i`).
- **The Output / Substrate:** The format, medium, or deliverable (e.g. `md` or Markdown format).
- **The Core Action:** The functional verb or motion (e.g. Extracting/Fetching represented by a downward arrow `↓`).

### Pillar 2: Negative Space & Clever Shape Merging
To prevent the logo from looking like clipart or a fragmented collage, force integrated blending of shapes:
- **Mandatory Creative Directives:**
  - `"Negative space"`: Carve secondary letterforms out of the negative space of primary shapes (e.g. *Make the 'i' out of the negative space of the 'd'*).
  - `"Continuous line"` or `"Monoline"`: Form adjacent letterforms with a unified continuous vector stroke (e.g. *Draw the 'm' and 'd' with a single continuous stroke*).
  - `"Cleverly combined"` or `"Integrated"`: Synthesize actions directly into letter stems (e.g. *Integrate a downward arrow into the stem of the 'i'*).
  - `"Standalone shape"` / `"No background/containment"`: Standalone geometry with zero artificial enclosures.

### Pillar 3: Specify Color Psychology Explicitly
Never assign arbitrary colors. Define the psychological and functional rationale for every hue:
- e.g. *"Make the action arrow vibrant emerald (#00F5A0) to represent 'Successful Extraction/Fetch', while the structural letterform uses minimal crisp ink (#FFFFFF)."*
- e.g. *"If the letter 'i' features a tittle/dot, make the dot a subtle orange (#FF7A00) to represent creativity, while the body uses technical carbon."*

### Pillar 4: Layout & Style Constraints (Zero-Box Mandate)
- **Aesthetic Descriptors:** `"Minimalist"`, `"Sleek"`, `"Modern"`, `"Flat design"`, `"Vector style"`.
- **The Anti-Containment Rule:** Explicitly enforce: **"Do NOT enclose the logo in any shapes like circles, squares, rounded rectangles, or badges. Let the logo stand alone."**

### Exploration & Locking Workflow:
1. **Explore 3 Distinct Concepts:**
   - Concept A: Monoline Negative Space Fusion (Letter + Negative Space Secondary Concept).
   - Concept B: Continuous Geometric Glyph with Integrated Action.
   - Concept C: High-Precision Minimalist Monogram.
2. **Side-by-Side Surface Verification:**
   - Verify on both dark (`#09090B`) and light (`#FFFFFF`) canvases.
   - Include a 64px, 32px, and 16px size check strip to guarantee favicon legibility.
3. **Refine & Lock:**
   - Extract the locked standalone `#icon` group for `BrandLogo.tsx`, `icon.tsx`, and `public/icon.svg`.
