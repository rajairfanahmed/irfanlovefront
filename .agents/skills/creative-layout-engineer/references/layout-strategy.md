# Layout Strategy: Product-First Architecture & Composition Choice

**Scope:** Macro-Layout Selection, Content Alignment & Anti-Template Strategy  
**Owner:** `creative-layout-engineer`  
**Load Condition:** Loaded during Step 2 of Stage 2 when determining overall page strategy  

---

## 1. Purpose & Problem Solved
AI agents perpetually default to the exact same predictable sequence: sticky navbar, centered hero with two buttons, a 3-column card grid, generic testimonials, and a standard footer. This reference teaches the layout engineer how to select macro-layouts based on real product needs, audience psychology, and content models, rather than defaulting to generic SaaS landing page formulas.

---

## 2. When to Load This Reference
- Loaded immediately after reading `frontend/DESIGN_ENGINEERING_BRIEF.md`.
- Loaded before drafting the section sequence or wireframe for any page.

---

## 3. Product-Driven Layout Strategy Matrix

The layout structure must directly reflect the specific operational domain of the product:

### 1. Developer Tools, Infrastructure & Engineering Systems
- **Core Priority:** Immediate technical credibility, architecture clarity, and operational density.
- **Layout Mechanics:** Docked telemetry masthead, split terminal viewports, side-by-side code diffs, interactive sandboxes.
- **Banned:** Fluffy marketing copy with floating cards and illustrated abstract badges.

### 2. High-Craft Portfolios & Creative Studios
- **Core Priority:** Memorable visual pacing, distinctive spatial rhythm, and narrative immersion.
- **Layout Mechanics:** Asymmetric 60/40 splits, oversized fluid typography cutting across margins, kinetic vertical snap decks, horizontal pinned galleries.
- **Banned:** Generic 3-card feature grids with centered icons.

### 3. B2C & E-Commerce Flagships
- **Core Priority:** Immediate product desire, clear visual hierarchy, and frictionless conversion.
- **Layout Mechanics:** High-impact full-canvas stage, staggered editorial product masonry, sticky bottom quick-action triggers.
- **Banned:** Excessive textual explanations before the user sees the real product.

### 4. Editorial Portals & Long-Form Publishing
- **Core Priority:** Long-form readability, typographic scale, and structural pacing.
- **Layout Mechanics:** Multi-column broadsheet grids, 1px physical hairline dividers, pull-quote callouts, structured article feeds.
- **Banned:** Tech-style glassmorphism cards and neon glow borders.

---

## 4. Content-First vs Visual-First Composition

Never generate a layout and then cram random placeholder copy into it:
1. **Content-First Mode:** When high-fidelity copy or data exists (e.g. detailed case studies, pricing tiers, API parameters), the content dictates column widths, container heights, and reading flow.
2. **Visual-First Mode:** For experiential, brand-defining hero sections where emotional impact precedes technical details, the composition establishes the visual anchor and supporting copy conforms to the rhythm.

---

## 5. Breaking the Mandatory Section Sequence

There is NO universal section sequence:
- A portfolio does not need a "Features" section.
- A technical console does not need a "Testimonials" avatar carousel.
- An e-commerce page does not need an "About Us" paragraph before product categories.

Structure the section order strictly around the user's conversion pathway:
```text
[Attention Anchor] -> [Core Value Proof] -> [Interactive Exploration] -> [Primary Action]
```

---

## 6. Output Artifact
- Documents chosen layout strategy and section order in `frontend/PLAN.md`.

---

## 7. Validation Criteria
- Section sequence is tailored specifically to the product category.
- Standard 5-part AI boilerplate sequence is deliberately broken.
- Rationale for chosen layout strategy is recorded in the plan.
