# Layout Strategy: Product-First Architecture & Full-Site Composition

**Scope:** Macro-Layout Selection, Full-Site Inventory & Anti-Template Strategy  
**Owner:** `creative-layout-engineer`  
**Load Condition:** Loaded during Phase 1 & 2 of Stage 2 when scoping routes and determining layout architecture  

---

## 1. Purpose & Problem Solved
AI agents frequently produce a single polished hero section, declare the layout complete, and leave secondary routes, sub-pages, footers, and mobile reflows completely missing. This reference governs how `creative-layout-engineer` establishes a complete multi-route website inventory and selects bespoke compositions dictated by product category, rather than defaulting to generic SaaS formulas.

---

## 2. When to Load This Reference
- Loaded immediately after reading `frontend/DESIGN_ENGINEERING_BRIEF.md`.
- Loaded before drafting the section sequence or wireframes for any required route.

---

## 3. Full-Site Page Inventory Protocol

Every layout engagement must begin by scoping the complete set of required routes:

### A. Greenfield (New Website)
Derive the complete route inventory from requirements and brief (e.g. `/`, `/features`, `/case-studies`, `/pricing`, `/about`, `/contact`). Document each route purpose upfront before writing code.

### B. Existing Website Improvement
Inspect the existing codebase, routes, navigation menus, and sub-pages:
- **Audit Existing Inventory:** List all active routes and functional features.
- **Categorize Each Route:** Decide explicitly what to **Preserve**, what to **Improve**, what to **Replace**, and what to **Add**.
- **Scope Rule:** Polishing only the homepage does NOT constitute an existing website improvement unless the user explicitly requested a homepage-only scope.

---

## 4. Product-Driven Layout Options (No Universal Defaults)

Layout patterns must serve the specific content and category. Never force a single pattern universally:

| Product Category | Primary Layout Dynamics | Applicable Layout Options |
| :--- | :--- | :--- |
| **Developer Tools & Infra** | Operational density, architecture diagrams, live code diffs | Docked telemetry rail, split terminal console, modular telemetry grid |
| **High-Craft Portfolios** | Narrative flow, immersive project showcases, fluid pacing | Editorial asymmetric split, horizontal case-study reel, sticky column deck |
| **SaaS Platforms** | Clear value proof, feature validation, interactive workflows | Asymmetric 60/40 stage, tabbed product inspector, contextual proof row |
| **E-Commerce & Retail** | Product desire, visual clarity, instant conversion triggers | Editorial product masonry, high-impact showcase stage, sticky purchase triggers |
| **Editorial & Content** | Typographic pacing, long-form readability, high content density | Multi-column broadsheet, 1px physical hairline dividers, pull-quote callouts |

### Avoiding the AI Template Trap vs Contextual Appropriateness:
- The classic "centered H1 + two pill buttons" is an overused AI cliché when applied blindly across every project. However, where a clean, focused, single-action entry is genuinely the best design choice, it is allowed.
- Do not force 60/40 splits or telemetry rails where simple, elegant single-column hierarchies or clean broadsheet grids are more readable.

---

## 5. Route-by-Route Specification Requirements

For every required route in the inventory, the layout specification must define:
1. **Page Purpose:** The specific user need this route addresses.
2. **Section Sequence:** Complete top-to-bottom order from header to footer.
3. **Content Structure:** Information hierarchy and actual data fields.
4. **Required Components:** Navigation, cards, forms, galleries, data displays, CTAs.
5. **Interactive Behavior:** Clicks, drawers, tab switches, and state transitions.
6. **Visual Rhythm:** Composition, spacing multiples, proportions, and focal points.
7. **Responsive Adaptation:** Exact reflow for desktop, tablet, and 320px mobile.
8. **Page Endings:** Shared footer, next steps, and closing sections.
9. **Edge Cases:** Empty states, loading views, and error boundaries where applicable.

---

## 6. Output Artifact
- Establishes the Route Inventory and section sequence in `frontend/PLAN.md`.

---

## 7. Validation Criteria
- Every required route is accounted for with a defined top-to-bottom section sequence.
- Compositions match category context without forcing universal template splits.
- Existing features are preserved or deliberately upgraded rather than accidentally deleted.
