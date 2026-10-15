# 01: Design Tokens & Fluid Typography Architecture
**Domain:** Frontend Architecture (Stage 1 Foundation)  
**Philosophy:** Mathematical Precision & Aesthetic Personality. Zero arbitrary magic numbers. Zero raw hex codes scattered across components. Zero em-dashes.

---

## MANDATORY TAILWIND CSS DIRECTIVES (CRITICAL)

When creating or editing `frontend/src/app/globals.css`, you MUST ensure the Tailwind CSS directives are at the absolute top of the file! 

Never overwrite `globals.css` with only CSS variables, as this strips Tailwind completely and breaks all styling!

### For Tailwind CSS v4:
```css
@import "tailwindcss";
```

### For Tailwind CSS v3:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
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
  
  /* Brand Accent & Accoutrements (Used surgically: < 5% of viewport) */
  --accent-primary: #0EA5E9;
  --accent-secondary: #0284C7;
  --accent-glow: rgba(14, 165, 233, 0.15);
  
  /* Hairline Borders (1px subtle rules, no harsh dark borders) */
  --border-hairline: rgba(148, 163, 184, 0.12);
  --border-focus: #0EA5E9;
  
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

## 2. Palette Rotation & Banned Premium-Consumer Hexes

### The Banned Default Palette:
For premium-consumer briefs (wellness, cookware, artisan, luxury, DTC goods), the LLM default is warm beige/cream + brass/clay/oxblood/ochre + espresso text.
**Concretely banned hex families as default backgrounds and accents:**
- Backgrounds: `#f5f1ea`, `#f7f5f1`, `#fbf8f1`, `#efeae0`, `#ece6db`, `#faf7f1`, `#e8dfcb`
- Accents: `#b08947`, `#b6553a`, `#9a2436`, `#9c6e2a`, `#bc7c3a`, `#7d5621`
- Text: `#1a1714`, `#1a1814`, `#1b1814`

### Curated Alternatives (Rotate, Do Not Reuse):
1. **Cold Luxury:** Silver-grey (`#E2E8F0`) + chrome + smoke (`#0F172A`)
2. **Forest:** Deep forest green (`#0F291E`) + bone (`#F8FAF8`) + amber accent (`#D97706`)
3. **Black and Tan:** True off-black (`#0C0D0E`) + warm tan (`#C5A880`), sharp contrast, no beige
4. **Cobalt + Cream:** Saturated cobalt blue (`#1D4ED8`) against cool off-white (`#F8FAFC`)
5. **Terracotta + Slate:** Warm rust (`#C2410C`) against cool slate grey (`#1E293B`)
6. **Olive + Brick + Paper:** Muted olive (`#3D4A3E`) + brick-red accent (`#991B1B`)
7. **Pure Monochrome + Single Pop:** Off-white (`#FAFAFA`) + off-black (`#09090B`) + one vivid accent (Electric Blue `#0284C7` or Emerald `#059669`)

---

## 3. Serif Discipline & Typography Rules

1. **Sans Display Default:**
   - Default to clean sans-serif display: `Geist Display`, `Cabinet Grotesk`, `PP Neue Montreal`, `Satoshi`, `Outfit`.
   - Serif is very discouraged as default. "It feels creative" is NOT a reason to reach for serif.
2. **Banned Display Serifs as Defaults:**
   - `Fraunces` and `Instrument_Serif` are strictly banned as default display fonts.
3. **Emphasis Rule:**
   - When emphasizing a word within a headline, use italic or bold of the **SAME font family**.
   - NEVER inject a random serif word into a sans headline.
4. **Italic Descender Clearance:**
   - When italic is used in display type and contains `y g j p q`, `leading-[1]` or `leading-none` clips descenders.
   - Use `leading-[1.1]` minimum and add `pb-1` or `mb-1` reserve on the wrapping element.

---

## 4. Mathematical Fluid Typography with CSS `clamp()`

```css
:root {
  /* Fluid Typography Scale */
  --font-hero: clamp(2.5rem, 5vw + 1rem, 5rem);
  --font-h1: clamp(2rem, 3.5vw + 0.75rem, 3.5rem);
  --font-h2: clamp(1.5rem, 2.5vw + 0.5rem, 2.5rem);
  --font-h3: clamp(1.25rem, 1.5vw + 0.4rem, 1.75rem);
  --font-h4: clamp(1.1rem, 1vw + 0.3rem, 1.35rem);
  --font-body: clamp(0.95rem, 0.35vw + 0.85rem, 1.05rem);
  --font-small: clamp(0.8rem, 0.2vw + 0.75rem, 0.875rem);
  --font-mono: clamp(0.75rem, 0.2vw + 0.7rem, 0.85rem);

  /* Line Heights */
  --leading-tight: 1.05;
  --leading-heading: 1.15;
  --leading-body: 1.6;
  
  /* Letter Spacing */
  --tracking-tight: -0.03em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;
  --tracking-mono: 0.08em;
}
```
