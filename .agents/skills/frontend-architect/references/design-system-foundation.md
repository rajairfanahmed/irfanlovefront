# Design System Foundation: CSS Variables, Substrates & Breakpoints

**Scope:** Token Injection, Substrate Governance, Typographic Math & Responsive Breakpoints  
**Owner:** `frontend-architect`  
**Load Condition:** Loaded during Step 2 of Stage 1 to generate `globals.css` and token configuration  

---

## 1. Purpose & Problem Solved
AI generators often overwrite client design choices with their own favorite dark obsidian palettes or hardcoded Tailwind colors. This reference establishes the strict token implementation protocol: translating the approved visual thesis from `DESIGN_ENGINEERING_BRIEF.md` into CSS custom properties and Tailwind v4 themes, without imposing unwanted default styles.

---

## 2. When to Load This Reference
- Loaded when writing `frontend/src/app/globals.css`.
- Loaded when configuring theme tokens and responsive breakpoint scales.

---

## 3. Inputs & Prerequisites
- Section 5 (Visual System & Token Architecture) from `frontend/DESIGN_ENGINEERING_BRIEF.md`.
- Typography clamp scales and substrate hex codes approved by `taste-design-engineer`.

---

## 4. The Visual Thesis Respect Law (Zero Imposed Palettes)

**Crucial Architectural Boundary:**
The architect is an engineering implementer, not an art director.
- **NEVER impose a favorite dark theme, fixed seed preset, or predefined font stack** over the brief.
- If the brief specifies a warm editorial paper substrate (`#F7F6F3`), implement paper.
- If the brief specifies an ultra-modern white canvas with vivid cobalt accents, implement white and cobalt.
- Fixed seed presets, double-bezel cards, and CRT phosphor palettes are **strictly optional techniques** to be used ONLY when explicitly requested in the brief.

---

## 5. CSS Custom Property Substrate Hierarchy

Inject semantic variables into `frontend/src/app/globals.css`:

```css
@import "tailwindcss";

:root {
  /* Global Canvas Substrate */
  --canvas: #ffffff;
  --surface-1: #f8f9fa;
  --surface-recessed: #f1f3f5;
  --border-subtle: rgba(0, 0, 0, 0.08);
  --border-strong: rgba(0, 0, 0, 0.16);

  /* Typography Colors */
  --text-primary: #111827;
  --text-secondary: #4b5563;
  --text-muted: #6b7280;

  /* Primary Action Pop */
  --accent-primary: #2563eb;
  --accent-foreground: #ffffff;

  /* Spacing & Radii Foundation */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 9999px;

  /* Interaction Transitions */
  --ease-spring: cubic-bezier(0.23, 1, 0.32, 1);
  --duration-fast: 160ms;
}

[data-theme="dark"],
.dark {
  --canvas: #08090a;
  --surface-1: #121316;
  --surface-recessed: #040405;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.16);

  --text-primary: #f9fafb;
  --text-secondary: #9ca3af;
  --text-muted: #6b7280;

  --accent-primary: #38bdf8;
  --accent-foreground: #08090a;
}
```

*(Note: The exact hex codes above must be replaced with the verified values from `DESIGN_ENGINEERING_BRIEF.md`.)*

---

## 6. Guaranteed Surface Continuity (The Navbar/Hero Fix)

To prevent the defect where a dark navbar floats awkwardly over a light hero:
- Lock `--canvas` to the `<body>` element:
  ```css
  body {
    background-color: var(--canvas);
    color: var(--text-primary);
    min-height: 100vh;
  }
  ```
- **Continuity Mandate:** All root page sections (Navbar, Hero, Feature containers) must inherit `bg-[var(--canvas)]` or use intentional elevated tiers (`bg-[var(--surface-1)]`). Ad-hoc utility classes like `bg-zinc-900` or `bg-white` are strictly forbidden on container roots.

---

## 7. Responsive Breakpoints & Container Queries

- **Viewport Breakpoints:**
  - `sm`: 640px (large mobile/small tablet)
  - `md`: 768px (tablet portrait)
  - `lg`: 1024px (laptop/small desktop)
  - `xl`: 1280px (standard desktop)
  - `2xl`: 1536px (ultra-wide display)
- **Container Queries:** Enable native Tailwind `@container` wrapping on cards and dynamic widgets so components respond to their container width rather than the window viewport.

---

## 8. Output Artifact
- Implements `frontend/src/app/globals.css`.
- Documents active design tokens in `frontend/PLAN.md`.

---

## 9. Validation Criteria
- All CSS custom properties map 1:1 to values in `DESIGN_ENGINEERING_BRIEF.md`.
- No arbitrary unapproved palettes or fonts injected.
- Global surface continuity active on `<body>`.

---

## 10. Downstream Dependencies
- Feeds `references/assets-and-branding.md` for logo color coupling.
- Feeds `creative-layout-engineer` for layout spacing and container query grids.
