# 04 · Component Engineering & Human Craft Guidelines
**Status:** Professional Frontend Best Practices  
**Philosophy:** Creative freedom governed by master craftsmanship. Components should feel bespoke, responsive, and alive.

Every component must exhibit tactile, intentional craftsmanship. Below are the professional engineering specifications for core component categories.

---

## 1. Buttons & Interactive Controls

### ❌ Banned Button Slop:
- Generic rounded pill buttons (`border-radius: 9999px`) on everything.
- Gradient fills with intense glowing drop-shadows (`box-shadow: 0 0 25px cyan`).
- Competing primary buttons in the same section.
- Tiny click targets under 44px.
- **The "Sticky Highlight" Bug:** Leaving a persistent focus background or ring after a mouse click.

### ✅ Elite Frontend Button Archetypes:

#### Archetype 1: Architectural Sharp Button (Modernist / Agency)
- `border-radius: 2px` to `6px` (never pills!)
- Solid high-contrast background with sharp hover state
- Clean active depression (`transform: scale(0.98)`)

```css
.btn-architectural {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: 4px;
  background-color: var(--color-foreground);
  color: var(--color-background);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  min-height: 44px;
  -webkit-tap-highlight-color: transparent;
}

.btn-architectural:hover {
  background-color: transparent;
  color: var(--color-foreground);
  border-color: var(--color-foreground);
  transform: translateY(-1px);
}

.btn-architectural:active {
  transform: scale(0.98);
}
```

#### Archetype 2: Hairline Ghost Button (Secondary / Technical)
- Subtle 1px border matching theme hairlines
- Inverts subtly on hover

```css
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  background: transparent;
  color: var(--color-foreground);
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;
  -webkit-tap-highlight-color: transparent;
}

.btn-ghost:hover {
  border-color: var(--color-foreground);
  background-color: var(--color-surface-subtle);
}

.btn-ghost:active {
  transform: scale(0.98);
}
```

#### Archetype 3: Monospace Kinetic Action Link (Editorial / Minimalist)
- Clean inline link with kinetic arrow rotation or underline slide
- Zero bulky button container!

```css
.btn-kinetic-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-foreground);
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
  -webkit-tap-highlight-color: transparent;
}

.btn-kinetic-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: currentColor;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-kinetic-link:hover::after {
  transform-origin: left;
  transform: scaleX(1);
}
```

### 1.1 Preventing Persistent Highlight / Color Bleed on Click:
In web browsers, clicking a button focuses it. If CSS uses `:focus`, the button **stays highlighted** until clicked elsewhere. Prevent this with standard professional CSS:

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

/* 3. Keyboard users get an intentional focus ring */
button:focus-visible,
a:focus-visible {
  outline: 2px solid var(--color-focus, currentColor);
  outline-offset: 2px;
}
```

---

## 2. Navigation Systems

### ❌ Banned Navbar Slop:
- The identical floating rounded pill navbar with `backdrop-filter: blur(12px)` centered at the top of every screen.
- 7+ cluttered links crammed together.
- Hamburger icon on 1440px desktop screens.

### ✅ Elite Frontend Navbar Archetypes:
- **Full-Width Hairline Header (Swiss):** Full bleed width with bottom hairline rule (`border-bottom: 1px solid var(--color-border)`).
- **Split Minimalist Navigation (Editorial):** Brand name left, minimal text links right with monospace index counters (`01 / Work`, `02 / About`).
- **Side Anchor Rail (Portfolios / Technical):** Fixed slim sidebar navigation rail on desktop viewports.

---

## 3. Custom Cards & Best UI/UX Practices

Cards should only be used when clear visual grouping is required.
1. **The Borderless Whitespace Container:** Generous internal padding (`padding: 2rem` to `2.5rem`) and distinct typographic hierarchy. No heavy border or dark shadow needed!
2. **Single Elevation Rule:** Choose **one** visual differentiator:
   - Method A: Subtle surface background (`background: var(--color-surface)`), NO border, NO shadow.
   - Method B: Crisp 1px hairline border (`border: 1px solid var(--color-border)`), transparent background, NO shadow.
   - Method C: Soft diffused shadow (`box-shadow: 0 4px 20px rgba(0,0,0,0.04)`), white background, NO border.
   **NEVER combine all three!**
3. **Card Micro-Interaction:** Subtle elevation on hover: `transform: translateY(-2px); transition: transform 0.25s ease;`.

---

## 4. Human-Crafted Brand Logo & Favicon Creation

Every project must have a **custom human-created brand logo and favicon** (never a generic text string or default Vercel triangle icon!).

### A. Logo Formats (Generate an SVG suited to the identity):
1. **Geometric Monogram (Personal / Studio):** Interlocking or stencil letterforms (e.g. `MZ` for Muhammad Zain) drawn with clean SVG vector geometry (`stroke-width="1.5"`, `stroke-linecap="round"`).
2. **Abstract Engineering Mark:** Architectural node, algorithmic vertex, or continuous topology line reflecting the project's domain.
3. **Typographic Wordmark:** Bespoke tracking, subtle glyph ligature, or contrasting font weight between first and last words.

### B. Custom Favicon:
- Always supply `icon.svg` or `favicon.ico` generated from the brand monogram or abstract mark.
- Include a high-contrast version that renders clearly at `16x16` and `32x32` pixels.

---

## 5. 404 & Resilient Error States

Never leave users stranded with default browser error screens. Every project must include custom crafted error experiences:

### A. The 404 "Not Found" Page (`not-found.tsx` / `404.html`):
- Branded minimal composition matching the site's typography and color palette.
- Large artistic display index (e.g. `404` rendered with delicate hairlines or a geometric broken-link icon).
- Friendly, witty, human-written explanation: *"The page you are seeking has been relocated, archived, or never existed in this dimension."*
- Primary CTA: Clear return button (*"Return to Index →"* or *"Back to Home"*).

### B. The Error Boundary (`error.tsx`):
- Graceful recovery component that catches runtime errors without crashing the shell.
- Reassuring message: *"An unexpected rendering exception occurred."*
- Actionable recovery: *"Reload Section"* button with `reset()` handler.
- Zero raw stack traces exposed to non-development users.

---

## 6. Forms & State Feedback

1. **Always-Visible Labels:** Labels placed above inputs with `font-size: 0.85rem` and `font-weight: 500`.
2. **Accessible Input Height:** Minimum `44px` height with generous padding (`0.75rem 1rem`).
3. **Contextual Validation:** Red outline alone is inaccessible. Provide an icon, clear explanatory text, and specific recovery instructions.
