# 03 · Hero Section & Navigation Engineering
**Domain:** Creative Layout Engineering · Stage 2 Macro-Layout  
**Philosophy:** Distinct First Impression. Eliminate the ubiquitous centered AI hero template. Anchor the interface with deliberate navigation and bespoke display typography.

---

## 1. Bespoke Navigation Archetypes

Select an intentional navigation archetype based on the project's art direction. Never build the exact same pill navbar on every project.

### Archetype 1: The Hairline Fixed Header (Minimalist & Architectural)
- **Geometry:** Full-width fixed header with delicate hairline bottom border (`border-b border-[var(--border-hairline)]`).
- **Layout:** Three-zone alignment:
  - Left: `BrandLogo` (vector mark + wordmark).
  - Center: Semantic nav links with understated hover state (opacity shift or 1.5px sliding indicator, not heavy pill bubbles).
  - Right: Contextual status badge (e.g. `● Available for Q4 contracts`) and primary action link.

```tsx
// frontend/src/components/layout/Navbar.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[var(--bg-primary)]/85 backdrop-blur-md border-b border-[var(--border-hairline)] py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <BrandLogo />
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
          <Link href="#work" className="hover:text-[var(--text-primary)] transition-colors">Selected Work</Link>
          <Link href="#architecture" className="hover:text-[var(--text-primary)] transition-colors">Engineering</Link>
          <Link href="#about" className="hover:text-[var(--text-primary)] transition-colors">Philosophy</Link>
          <Link href="#contact" className="hover:text-[var(--text-primary)] transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-surface)] px-2.5 py-1 rounded-full border border-[var(--border-hairline)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>SYSTEMS NOMINAL</span>
          </div>
          <Link
            href="#contact"
            className="text-xs uppercase tracking-wider font-mono font-semibold px-4 py-2 rounded-md bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--border-focus)]"
          >
            Initiate Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
```

### Archetype 2: The Split-Rail Side Navigation (High-End Technical / Showcase)
- Positioned vertically on the left or right margin (`sticky top-24`).
- Shows section progress dots or roman numerals (`01 / ARCHITECTURE`, `02 / WORK`).
- Keeps the central viewport entirely open for dynamic asymmetric content.

### Archetype 3: The Floating Capsule Dock
- Use only when requested or when crafting experimental/creative apps.
- Bounded width (`max-w-fit`), centered bottom or top dock.
- Clean 1px border, subtle frosted glass effect.

---

## 2. Bespoke Hero Section Blueprints

BANNED FORMULA:
❌ Center-aligned `New Feature v2.0 →` badge.
❌ Giant centered purple gradient headline `Empowering the Future of Web`.
❌ Generic 2-line centered body text.
❌ Pair of rounded pill buttons with glowing drop shadows.
❌ Row of 3 fake stats cards underneath (`10k+ Users`, `99.9% Uptime`, `4.9 Stars`).

### Permitted Hero Archetypes:

#### 1. The Asymmetric Editorial Hero:
- **Left Column:**
  - Category label in wide tracking monospace (`01 // PRINCIPAL FRONTEND SYSTEM`).
  - Asymmetric headline with mixed typography (e.g., Bold Serif + Light Sans, or Giant Display + Monospace sub-clause).
  - Short, confident manifesto paragraph.
  - Direct action trigger (e.g. "Explore Flagship Systems ↓" link with smooth scroll).
- **Right Column:**
  - Real, interactive artifact: code sandbox preview, live SVG interactive model, or high-fidelity project preview.
  - No fake metrics or empty cards.

#### 2. The Architectural Typographic Statement:
- Full-bleed display typography that fills the screen width (`clamp(3rem, 10vw, 8rem)`).
- Hairline grid overlay with coordinates or technical labels.
- Minimalist metadata bar anchored to the bottom edge of the hero viewport.

#### 3. The Tabular Split Hero:
- Hero headline anchored in top-left, paired directly with an interactive index of current active projects or systems.

---

## 3. Macro-Layout Acceptance Checklist:
- [ ] Navigation matches one of the 3 intentional archetypes, not a generic floating blob.
- [ ] Mobile navigation drawer/menu is fully responsive, keyboard navigable (`Escape` to close), and traps focus.
- [ ] Hero section does not follow the banned AI template formula.
- [ ] Lenis smooth scroll connects seamlessly with section anchors.
- [ ] Layout transitions fluidly across 320px, 768px, 1024px, and 1440px.
