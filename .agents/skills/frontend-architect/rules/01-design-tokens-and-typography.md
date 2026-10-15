# 01 · Design Tokens & Fluid Typography Architecture
**Domain:** Frontend Architecture · Stage 1 Foundation  
**Philosophy:** Mathematical Precision & Aesthetic Personality. Zero arbitrary magic numbers. Zero raw hex codes scattered across components.

---

## 🚨 MANDATORY TAILWIND CSS DIRECTIVES (CRITICAL)

When creating or editing `frontend/src/app/globals.css`, you **MUST** ensure the Tailwind CSS directives are at the absolute top of the file! 

Never overwrite `globals.css` with only CSS variables, as this strips Tailwind completely and breaks all styling!

### For Tailwind CSS v3:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### For Tailwind CSS v4:
```css
@import "tailwindcss";
```

Verify that `frontend/tailwind.config.ts` includes the correct `content` paths:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-primary)",
        surface: "var(--bg-surface)",
        elevated: "var(--bg-elevated)",
        foreground: "var(--text-primary)",
        muted: "var(--text-secondary)",
        accent: {
          DEFAULT: "var(--accent-primary)",
          hover: "var(--accent-secondary)",
          glow: "var(--accent-glow)",
        },
        border: "var(--border-hairline)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
```

---

## 1. Architectural Token System (CSS Variables)

Directly following the Tailwind directives in `frontend/src/app/globals.css`:

```css
:root {
  /* Surface Layers */
  --bg-primary: #0B0F17;
  --bg-surface: #151B26;
  --bg-elevated: #1E2636;
  --bg-subtle: rgba(255, 255, 255, 0.03);
  
  /* Text & Foreground */
  --text-primary: #F8FAFC;
  --text-secondary: #94A3B8;
  --text-muted: #64748B;
  
  /* Brand Accent & Accoutrements (Used surgically: <5% of viewport) */
  --accent-primary: #F59E0B;
  --accent-secondary: #D97706;
  --accent-glow: rgba(245, 158, 11, 0.15);
  
  /* Hairline Borders (1px subtle rules, no harsh dark borders) */
  --border-hairline: rgba(148, 163, 184, 0.12);
  --border-focus: #F59E0B;
  
  /* Radii Tokens (Consistent geometry across the app) */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 9999px;
  
  /* Spacing Rhythm (8pt baseline system) */
  --space-xs: 0.25rem;  /* 4px */
  --space-sm: 0.5rem;   /* 8px */
  --space-md: 1rem;     /* 16px */
  --space-lg: 1.5rem;   /* 24px */
  --space-xl: 2.5rem;   /* 40px */
  --space-2xl: 4rem;    /* 64px */
  --space-3xl: 6rem;    /* 96px */
}

/* Sticky Tap-Highlight Permanent Fix */
* {
  -webkit-tap-highlight-color: transparent;
}

button:focus:not(:focus-visible),
a:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}

button:focus-visible,
a:focus-visible {
  outline: 2px solid var(--border-focus, currentColor);
  outline-offset: 2px;
}
```

---

## 2. Six Production-Grade Curated Palettes

Select one intentional archetype for the project, or derive an intentional variation based on user input:

1. **Swiss Monochromatic + Crimson/Cobalt Accent:** Pure `#FFFFFF` or `#09090B`, steel grey secondary, vibrant `#E11D48` or `#2563EB` accent.
2. **Deep Obsidian Slate + Electric Amber:** Background `#0B0F17` (never pure flat `#000`), `#151B26` surface, `#F59E0B` amber accent.
3. **Warm Architectural Cream + Terracotta:** `#FBF9F5` alabaster background, `#F3EFEA` oat surface, `#18181B` charcoal text, `#C2410C` terracotta accent.
4. **Editorial Monospace & Deep Ink:** `#111216` deep ink background, `#ECEFF4` Nordic white, `#38BDF8` muted cyan accent (<5%).
5. **Botanical Sage & Warm Sand:** `#F7F7F2` sand, `#1C2826` forest ink, `#2D5A46` deep botanical green.
6. **Luxury Ivory & Dark Espresso:** `#F9F6F0` ivory silk, `#2B231D` dark espresso, `#9E7A4A` antique gold/bronze.

---

## 3. Mathematical Fluid Typography with CSS `clamp()`

Never use rigid pixel sizes (e.g. `font-size: 72px`) that break on small mobile viewports. Every scale must adapt continuously across viewports from 320px to 1920px.

```css
:root {
  /* Fluid Typography Scale */
  --font-hero: clamp(2.75rem, 6vw + 1rem, 5.5rem);
  --font-h1: clamp(2.25rem, 4.5vw + 0.75rem, 4rem);
  --font-h2: clamp(1.75rem, 3vw + 0.5rem, 2.75rem);
  --font-h3: clamp(1.35rem, 1.8vw + 0.4rem, 2rem);
  --font-h4: clamp(1.15rem, 1vw + 0.3rem, 1.5rem);
  --font-body: clamp(0.95rem, 0.35vw + 0.85rem, 1.125rem);
  --font-small: clamp(0.8rem, 0.2vw + 0.75rem, 0.875rem);
  --font-mono: clamp(0.75rem, 0.2vw + 0.7rem, 0.85rem);

  /* Line Heights */
  --leading-tight: 1.05;
  --leading-heading: 1.2;
  --leading-body: 1.6;
  
  /* Letter Spacing */
  --tracking-tight: -0.03em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;
  --tracking-mono: 0.08em;
}
```

---

## 4. Curated Font Pairings (via `next/font/google`)

Avoid defaulting to Inter for every build. Select a pairing that infuses distinct identity:

```typescript
// frontend/src/app/layout.tsx
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';

export const displayFont = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700', '800'],
  display: 'swap',
});

export const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
});
```
