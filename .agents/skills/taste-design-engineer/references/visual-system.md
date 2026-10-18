# Visual System Architecture: Substrates, Contrast Coupling & Structural Grids

**Scope:** CSS Variable Substrate, Typographic Scales, Contrast Law & Spatial Geometry  
**Owner:** `taste-design-engineer`  
**Load Condition:** Loaded during Step 2 of Stage 0 to formulate Section 5 of the master brief  

---

## 1. Purpose & Problem Solved
AI interfaces fail most frequently at surface boundaries: navigation bars generated in dark gray clash violently with light hero sections, and icons disappear because their colors lack contrast against ad-hoc backgrounds. This reference establishes a unified Semantic Substrate Hierarchy with guaranteed contrast coupling and concrete structural layout definitions.

---

## 2. When to Load This Reference
- Loaded when specifying colors, typography scales, layout grids, and component tokens.
- Loaded before `frontend-architect` generates `globals.css`.

---

## 3. Inputs & Prerequisites
- Winning creative direction from `references/creative-direction.md`.
- Adopted brand tokens from `references/design-reference-research.md`.

---

## 4. The Global Semantic Substrate Hierarchy

All downstream web application components must bind strictly to CSS custom properties defined on the root:

### The Canvas Law (`--canvas`)
- The base background of the application is locked globally on the `<body>` element.
- **Surface Continuity Mandate:** The Navigation Bar, Hero Section, and persistent app shell MUST share the same canvas substrate. Placing an uncoordinated gray navbar (`bg-zinc-900`) directly above a stark white hero (`bg-white`) is strictly forbidden.
- Light Canvas: `#FFFFFF` (pure white) or `#F7F6F3` (warm bone).
- Dark Canvas: `#08090A` (deep slate) or `#050505` (OLED black).

### Elevated Surface Tiers
- `--surface-1`: Floating cards, docked navigation pills, and interactive panels (+4% luminance adjustment).
- `--surface-recessed`: Input wells, code blocks, and embedded viewports (-3% luminance adjustment).
- `--border-subtle`: 1px physical hairline dividers (8% to 15% opacity).

---

## 5. Guaranteed Contrast Coupling (The Zero Invisible Icon Law)

Every foreground element is strictly coupled to its parent container's substrate token:
1. **Body Text Contrast:** Text on `--canvas` must use `--text-primary` with a minimum 7:1 contrast ratio for normal text and 4.5:1 for secondary copy (`--text-secondary`).
2. **Strict Icon Inheritance:**
   - Icons MUST inherit or explicitly use `--text-primary` or `--text-muted`.
   - Hardcoding raw Tailwind utility classes like `text-gray-400` or `text-zinc-500` inside dark or light cards is strictly banned.
   - Every icon must guarantee at least 4.5:1 visual contrast against its immediate container.
3. **Action Button Pop:** The primary CTA button uses a calibrated high-contrast accent pop (`--accent-primary`) that stands out vividly against the restrained substrate.

---

## 6. Structural Layout & Spatial Grid Geometry

`taste-design-engineer` must prescribe the exact geometric layout formula for downstream page engineering:

### Formula 1: Asymmetric 60/40 Split Canvas
- Left 60% Column: Sticky viewport-height container housing the brand anchor, fluid display headline, concise value proposition, and primary action.
- Right 40% Column: Kinetic vertical snap track housing variable-height interactive case study cards with physical hairline borders.

### Formula 2: Docked Telemetry Console
- Top Rail: Full-width docked status telemetry (system status, latency, live counters).
- Central Stage: Primary interactive viewport flanked by dual vertical navigation and property rails.
- Spacing: Rigid 1px grid dividers with zero floating cards.

### Formula 3: Architectural Editorial Broadsheet
- Multi-Column Layout: Asymmetric 3-column newspaper grid with 12-column responsive sub-tracks.
- Typography Anchor: Oversized serif headline spanning across columns, balanced by dense monospace micro-captions.

---

## 7. Typographic Scale & Fluid Math

Limit the entire platform to a maximum of two font families:
- **Display Scale:** Fluid clamp formula (`clamp(2.5rem, 5vw + 1rem, 5rem)`) with negative optical tracking.
- **Heading Scale:** Fluid clamp formula (`clamp(1.75rem, 3vw + 0.5rem, 3rem)`).
- **Body Scale:** Base 16px (`clamp(1rem, 0.95rem + 0.25vw, 1.125rem)`) with relaxed 1.6 line height.
- **Micro / Label Scale:** 11px to 13px uppercase with positive letter spacing (`+0.05em`) and tabular numerals (`tnum`).

---

## 8. Output Artifact
- Populates Section 5 (Visual System & Token Architecture) and Section 6 (Composition Contract) in `frontend/DESIGN_ENGINEERING_BRIEF.md`.

---

## 9. Validation Criteria
- Global `--canvas` substrate is explicitly defined and locked across adjacent sections.
- Zero raw uncoupled gray classes exist in icon or typography directives.
- Exact column ratios and grid math are documented for desktop and mobile viewports.

---

## 10. Downstream Dependencies
- Feeds `frontend-architect` for `globals.css` variable injection.
- Feeds `creative-layout-engineer` for responsive CSS Grid implementation.
