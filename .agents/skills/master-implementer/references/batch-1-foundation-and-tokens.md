# Batch 1: Foundation, Tech Stack, Fonts & CSS Token Architecture

Read this file at the start of **Batch 1** after reading `MASTER_PROMPT.md`. Do not read Batch 2, 3, or 4 files yet.

## 1. Codebase & Stack Inspection
Before writing code, inspect `package.json`, existing folders (`src/app`, `src/components`, `public/`), and Tailwind configuration:
1. **If Empty Directory / New Build**: Initialize or scaffold the framework specified in Block 1 of `MASTER_PROMPT.md` (defaulting to Next.js App Router + TypeScript + Tailwind CSS or React + Vite + Tailwind CSS).
2. **If Existing Project**: Respect the existing framework, router, and preserved routes listed in Block 1 of `MASTER_PROMPT.md`.
3. **Install Required Motion & Icon Packages**:
   - Install `lucide-react` for clean architectural icons.
   - If Block 6 of `MASTER_PROMPT.md` includes smooth scrolling, scroll reveals, split-text, or pinned sections, ensure `lenis` (or `@studio-freight/lenis`), `gsap`, and/or `framer-motion` (`motion`) are installed in `package.json` instead of falling back to plain CSS `scroll-behavior: smooth`.
4. **Asset Verification**:
   - List all files inside `public/` and `src/assets/`. Match every image path in Block 3 of `MASTER_PROMPT.md` to an actual file on disk (or create clean SVG/styled placeholders for items explicitly marked as Suggested Assets).

## 2. Typography Loading (`next/font/google` or `@import`)
Load the exact font families specified in Block 2 of `MASTER_PROMPT.md`:
- **Tall Condensed Display** (e.g., `Anton`, `Bebas Neue`, `Oswald`): Load weights `400`/`700` and bind to `--font-display`.
- **Geometric / Humanist Sans** (e.g., `Plus Jakarta Sans`, `Inter`, `Geist`, `Space Grotesk`, `Syne`): Bind to `--font-sans`.
- **Editorial Serif** (e.g., `Instrument Serif`, `Playfair Display`, `Newsreader`): Bind to `--font-serif`.
- **Technical Monospace** (e.g., `JetBrains Mono`, `Geist Mono`): Bind to `--font-mono`.

Expose these font variables on the `<html>` or `<body>` element so every component can reference `font-[family-name:var(--font-display)]`, `font-sans`, and `font-mono`.

## 3. Global CSS Variables & Keyframes (`globals.css` / `index.css`)
Translate Block 2 of `MASTER_PROMPT.md` directly into `:root` CSS custom properties and utility keyframes. Never hardcode random Tailwind slate/gray colors when exact hex tokens are specified:

```css
:root {
  --bg-canvas: /* exact hex from Block 2, e.g. #000000 */;
  --bg-surface: /* exact hex from Block 2, e.g. #0D0D0F */;
  --bg-elevated: /* exact hex from Block 2, e.g. #141418 */;
  --text-primary: /* exact hex from Block 2, e.g. #FFFFFF */;
  --text-secondary: /* exact hex from Block 2, e.g. #A1A1AA */;
  --accent-primary: /* exact hex from Block 2, e.g. #ED7A36 */;
  --border-subtle: /* exact rgba/hex from Block 2, e.g. rgba(255,255,255,0.10) */;
  --border-accent: /* exact rgba/hex from Block 2, e.g. rgba(237,122,54,0.45) */;
  --glow-atmosphere: /* exact radial-gradient from Block 2 */;
}

html, body {
  background-color: var(--bg-canvas);
  color: var(--text-primary);
  font-family: var(--font-sans), sans-serif;
  overflow-x: hidden;
}

/* Mandatory Seamless Infinite Marquee Keyframes */
@keyframes marquee-left {
  0% { transform: translate3d(0%, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

.animate-marquee-infinite {
  display: flex;
  width: max-content;
  animation: marquee-left 26s linear infinite;
  will-change: transform;
}

.animate-marquee-infinite:hover {
  animation-play-state: paused;
}
```

## 4. Smooth Scroll Provider Initialization
If `MASTER_PROMPT.md` requests smooth scrolling (`Lenis`):
- Create a dedicated client component `SmoothScrollProvider.tsx` that initializes `Lenis` inside a `useEffect` loop with `requestAnimationFrame` (or syncs `Lenis` with `GSAP ScrollTrigger` via `lenis.on('scroll', ScrollTrigger.update)`).
- Wrap the application layout inside `SmoothScrollProvider` while respecting `prefers-reduced-motion: reduce`.

## 5. Batch 1 Completion Check
Confirm that fonts, `:root` color/glow tokens, `@keyframes marquee-left`, and smooth scroll provider compile without errors before loading `references/batch-2-navigation-and-hero.md`.
