# Assets, Font Architecture & Standalone Vector Brand Identity

**Scope:** Zero-Blocking Fonts, 4-Pillar Vector Logo System, Favicons & Social Assets  
**Owner:** `frontend-architect`  
**Load Condition:** Loaded during Step 2 of Stage 1 to create logo components, fonts, and favicons  

---

## 1. Purpose & Problem Solved
AI logos usually look like clip-art stuck inside a rounded rectangle box, and font imports often block the initial page render, causing layout shifts and 800ms+ FCP delays. This reference establishes zero-blocking font loading and the mandatory 4-Pillar Standalone Logo System.

---

## 2. When to Load This Reference
- Loaded when configuring `next/font` in `layout.tsx`.
- Loaded when crafting `BrandLogo.tsx`, `icon.tsx`, and OG metadata images.

---

## 3. Inputs & Prerequisites
- Brand name, metaphor, and visual tokens from `frontend/DESIGN_ENGINEERING_BRIEF.md`.
- Substrate and foreground colors from `references/design-system-foundation.md`.

---

## 4. Zero Render-Blocking Font Architecture

External CSS `@import url(...)` font calls block the rendering pipeline. The architect must use Next.js native font optimization exclusively:

```typescript
// frontend/src/app/layout.tsx
import { Inter, JetBrains_Mono } from "next/font/google";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});
```

- Fonts are self-hosted automatically by Next.js at build time. Zero external requests at runtime.
- Always specify `display: 'swap'` to guarantee immediate text visibility.

---

## 5. The 4-Pillar Standalone Logo System (`BrandLogo.tsx`)

Every vector logo created by the architect must follow four mandatory engineering pillars:

### Pillar 1: Core Metaphor Formulation
The logo combines two or three distinct concepts into a single cohesive symbol:
- Concept A: The Creator / Organization identity (e.g. initials or core letterform).
- Concept B: The Primary Product / Output (e.g. Code, Data, Architecture, Media).
- Concept C: The Dynamic Action (e.g. Convergence, Flow, Extraction, Precision).

### Pillar 2: Negative Space & Monoline Geometry
- Avoid clip-art pasted next to text.
- Merge forms intentionally using negative space cutouts or continuous monoline strokes.
- Use clean mathematical vector paths (`viewBox="0 0 512 512"`).

### Pillar 3: Explicit Color Discipline
- Default to `fill="currentColor"` so the logo adapts dynamically to light and dark themes.
- Limit the mark to a single dominant brand color with an optional accent pop.

### Pillar 4: The Anti-Box Mandate (Zero Enclosing Badges)
- **STRICT PROHIBITION:** Never place the logo inside a rounded rectangle, squircle, shield, badge, or enclosure box unless explicitly requested by the user.
- **Let the logo stand alone:** The silhouette must breathe freely as an unconstrained vector mark on the canvas.

---

## 6. Component Implementation (`frontend/src/components/ui/BrandLogo.tsx`)

```tsx
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function BrandLogo({ className = "", showWordmark = true }: BrandLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 text-current ${className}`}>
      <svg viewBox="0 0 512 512" className="w-8 h-8 fill-current" aria-label="Brand Icon">
        {/* Bespoke standalone vector path here */}
      </svg>
      {showWordmark && (
        <span className="font-semibold text-lg tracking-tight font-sans">
          BrandName
        </span>
      )}
    </Link>
  );
}
```

- **Container Constraint Law:** `BrandLogo` must always reside inside a structural container (such as `Navbar` or page wrapper). Never position with floating `fixed` or unconstrained `absolute`.

---

## 7. Multi-Scale Favicon & Social Preview
- **Dynamic Favicon (`frontend/src/app/icon.tsx`):** Renders the standalone `#icon` mark at 32x32px using Next.js `ImageResponse` for crisp display in all browser tabs.
- **OpenGraph Card (`frontend/src/app/opengraph-image.tsx`):** 1200x630px social card displaying standalone brand mark, title, and substrate background.

---

## 8. Output Artifact
- Implements `frontend/src/components/ui/BrandLogo.tsx`.
- Implements `frontend/src/app/icon.tsx`.
- Injects font variables into `frontend/src/app/layout.tsx`.

---

## 9. Validation Criteria
- Zero `@import` font calls in `globals.css`.
- Logo passes small-size test at 32px resolution.
- Anti-box mandate respected (zero enclosing background squares).
