# 03: Hero Section & Navigation Engineering
**Domain:** Creative Layout Engineering (Stage 2 Macro-Layout)  
**Philosophy:** Distinct First Impression. Eliminate the ubiquitous centered AI hero template. Anchor the interface with deliberate navigation and viewport-capped display typography. Zero em-dashes.

---

## 1. Navigation Engineering Directives

- **Single Line on Desktop:** Navigation items MUST render on a single line on desktop (`lg` 1024px+). If items do not fit, condense labels or use a drawer.
- **Height Cap:** Max 80px on desktop (default 64-72px).
- **No Unmotived Scroll Listeners:** Avoid raw `window.addEventListener('scroll')`. Use CSS sticky (`sticky top-0 z-50`) with backdrop blur or Motion `useScroll()`.
- **Tri-Zone Alignment:**
  - Left: Container-constrained `BrandLogo`.
  - Center: Semantic nav links (`/about`, `/projects`, `/skills`, `/contact`).
  - Right: Single-intent action CTA (e.g. `Initiate Contact`).
- **No Duplicate CTA Intent:** Do not put two buttons with the same intent in the nav or hero.

```tsx
// frontend/src/components/layout/Navbar.tsx
'use client';
import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';

export function Navbar() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/85 backdrop-blur-md border-b border-[var(--border-hairline)] h-16 md:h-18">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <BrandLogo />
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
          <Link href="/projects" className="hover:text-[var(--text-primary)] transition-colors">Projects</Link>
          <Link href="/skills" className="hover:text-[var(--text-primary)] transition-colors">Systems & Skills</Link>
          <Link href="/about" className="hover:text-[var(--text-primary)] transition-colors">About</Link>
          <Link href="/contact" className="hover:text-[var(--text-primary)] transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="text-xs uppercase tracking-wider font-mono font-semibold px-4 py-2 rounded-md bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Initiate Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
```

---

## 2. Bespoke Hero Section Directives

### Hard Constraints:
1. **Hero MUST fit in initial viewport:** Headline max 2 lines, subtext max **20 words** AND max 4 lines, CTAs visible without scroll.
2. **Hero top padding cap:** Max `pt-24` (approx 6rem) at desktop.
3. **Hero stack discipline (max 4 text elements total):**
   - Eyebrow OR brand strip (pick zero or one)
   - Headline (max 2 lines)
   - Subtext (max 20 words)
   - CTAs (1 primary + max 1 secondary)
4. **BANNED in Hero:**
   - Tiny tagline below CTAs
   - Trust micro-strip inside hero (logo wall lives UNDER the hero)
   - Section numbers (`01 //`)
   - Scroll cues (`Scroll`, `Scroll to explore`)
   - Decorative text strips across hero bottom (`BRAND. MOTION. SPATIAL.`)

### Permitted Hero Archetypes:

#### 1. The Asymmetric Split Hero:
- **Left Column:**
  - Plain language eyebrow (optional, e.g. `SYSTEM ARCHITECTURE`).
  - Asymmetric headline (max 2 lines, sans display default).
  - Short subtext (max 20 words).
  - Primary CTA button.
- **Right Column:**
  - Real asset: generated image, Picsum-seed descriptive photography, or live interactive preview.
  - Div-based fake screenshots are strictly banned.

#### 2. The Editorial Manifesto Hero:
- Large sans display headline, no asset, expansive whitespace, single CTA.

#### 3. The Scroll-Pinned Hero:
- Hero pins cleanly at `start: "top top"` while downstream content stacks.
