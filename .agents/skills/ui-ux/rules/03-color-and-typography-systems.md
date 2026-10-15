# 03 · Color Systems & Typography Guidelines
**Status:** Professional Best Practices & Systems  
**Philosophy:** Creative Freedom with Intentional Harmony. These 6 curated palettes and typographic pairings are battle-tested benchmarks, but you have full freedom to invent tailored color temperatures, gradients, and font pairings suited to each unique project.

---

## 1. Six Production-Grade Curated Palettes

Choose one palette that fits the project mood, or derive an intentional variation.

### Palette 1: Warm Architectural Minimal (High-End Agency, Architecture, Design)
- **Background:** `#FBF9F5` (Warm Cream / Alabaster)
- **Surface:** `#F3EFEA` (Subtle Oat)
- **Text Primary:** `#18181B` (Charcoal Black)
- **Text Secondary:** `#71717A` (Muted Zinc)
- **Accent:** `#C2410C` (Warm Terracotta / Ochre)
- **Border:** `rgba(24, 24, 27, 0.08)`

### Palette 2: Swiss Monochromatic with Crimson Accent (Engineering, Tech, Modernist)
- **Background:** `#FFFFFF` (Pure White)
- **Surface:** `#F4F4F5` (Cool Off-White)
- **Text Primary:** `#09090B` (Jet Black)
- **Text Secondary:** `#52525B` (Steel Grey)
- **Accent:** `#E11D48` (Vibrant Crimson) or `#2563EB` (Cobalt Blue)
- **Border:** `#E4E4E7` (Hairline Grey)

### Palette 3: Deep Slate & Electric Amber (Refined Dark Mode for Tech & Fintech)
- **Background:** `#0B0F17` (Deep Obsidian Slate — NOT flat #000)
- **Surface:** `#151B26` (Elevated Navy Slate)
- **Surface Elevated:** `#1E2636` (Card Surface)
- **Text Primary:** `#F8FAFC` (Off-White)
- **Text Secondary:** `#94A3B8` (Slate Text)
- **Accent:** `#F59E0B` (Electric Amber) or `#10B981` (Emerald Green)
- **Border:** `rgba(148, 163, 184, 0.12)`

### Palette 4: Botanical Deep Sage & Sand (Eco, Wellness, Creative, Lifestyle)
- **Background:** `#F7F7F2` (Warm Sand)
- **Surface:** `#EFEFE6` (Linen Surface)
- **Text Primary:** `#1C2826` (Forest Ink)
- **Text Secondary:** `#4D6A65` (Muted Moss)
- **Accent:** `#2D5A46` (Deep Botanical Green)
- **Border:** `rgba(28, 40, 38, 0.1)`

### Palette 5: Editorial Monospace & Ink (Developer Portfolio, Tooling, Docs)
- **Background:** `#111216` (Deep Ink)
- **Surface:** `#191B22` (Subtle Dark)
- **Text Primary:** `#ECEFF4` (Nordic White)
- **Text Secondary:** `#818B98` (Muted Terminal Grey)
- **Accent:** `#38BDF8` (Muted Sky Blue — used surgically, <5% of viewport)
- **Border:** `#262A35`

### Palette 6: Luxury Editorial Ivory & Espresso (Fashion, Luxury, Executive)
- **Background:** `#F9F6F0` (Ivory Silk)
- **Surface:** `#F0EAE1` (Warm Parchment)
- **Text Primary:** `#2B231D` (Dark Espresso)
- **Text Secondary:** `#786C62` (Warm Earth)
- **Accent:** `#9E7A4A` (Antique Gold / Bronze)
- **Border:** `rgba(43, 35, 29, 0.1)`

---

## 2. Typography Pairings & Fluid Type Scales

Do NOT default to Inter font for every single project. Use curated pairings that create distinct personality.

### Pairing Archetypes:

| Style | Heading (Display) | Body (Reading) | Accents / Meta | Mood |
|---|---|---|---|---|
| **Editorial Modern** | `Newsreader` or `Playfair Display` | `Plus Jakarta Sans` or `Inter` | `JetBrains Mono` | Sophisticated, literary, premium |
| **High-Tech Clean** | `Space Grotesk` or `Syne` | `Geist Sans` or `Plus Jakarta Sans` | `Space Mono` | Contemporary, developer, cutting-edge |
| **Swiss Functional** | `Epilogue` or `Cabinet Grotesk` | `General Sans` or `Switzer` | `IBM Plex Mono` | Modernist, clean, structured |
| **Warm Humanist** | `Fraunces` or `Recurso` | `Outfit` or `DM Sans` | `DM Mono` | Friendly, artisanal, trustworthy |
| **Architectural Sharp** | `Clash Display` or `Syncopate` | `Satoshi` or `Inter` | `Roboto Mono` | Bold, structural, industrial |

### Fluid Typography Scale with CSS `clamp()`:
Never use fixed `font-size: 72px` which overflows on mobile!

```css
:root {
  /* Fluid Typography Scale */
  --font-hero: clamp(2.75rem, 7vw + 1rem, 5.5rem);
  --font-h1: clamp(2.25rem, 5vw + 1rem, 4rem);
  --font-h2: clamp(1.75rem, 3.5vw + 0.5rem, 2.75rem);
  --font-h3: clamp(1.35rem, 2vw + 0.5rem, 2rem);
  --font-h4: clamp(1.15rem, 1.2vw + 0.3rem, 1.5rem);
  --font-body: clamp(0.95rem, 0.4vw + 0.85rem, 1.125rem);
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

## Typography Rules:
1. **Line Length:** Restrict reading paragraphs to `55` to `75` characters per line (`max-width: 65ch`).
2. **Display Contrast:** The heading font must visually contrast with the body font (e.g. Serif Display + Sans Body, or Geometric Display + Humanist Body).
3. **Weight Contrast:** Headings should be `600`–`800` weight with `-0.02em` letter-spacing; body text should be `400` weight with normal letter-spacing.
