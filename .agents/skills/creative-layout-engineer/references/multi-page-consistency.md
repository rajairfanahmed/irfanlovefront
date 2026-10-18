# Multi-Page Spatial Consistency & Route Rhythm

**Scope:** Cross-Route Spatial Rhythms, Shared Page Shells & Route Distinctiveness  
**Owner:** `creative-layout-engineer`  
**Load Condition:** Loaded during Step 6 & 10 of Stage 2 when engineering multi-page applications  

---

## 1. Purpose & Problem Solved
Multi-page websites built by AI often suffer from two extremes: either every single page uses the exact same template with different headings (boring monotony), or every page looks like it belongs to a completely different website with jumping headers and conflicting margins (disorienting chaos). This reference defines the balance: shared spatial framing with distinct content layouts.

---

## 2. When to Load This Reference
- Loaded when transitioning from the homepage (`/`) to sub-routes (`/about`, `/pricing`, `/features`, `/contact`).
- Loaded to verify spatial continuity across route transitions.

---

## 3. The 3 Immutable Anchors of Shared Identity

Within any individual multi-page web application, all routes must share three foundational anchors:

1. **The Standardized Page Shell:**
   - The navigation bar (`Navbar.tsx`) and persistent footer frame every single sub-page identically.
   - The global `--canvas` substrate remains consistent across all routes.
2. **The Constant Y-Axis Vertical Baseline:**
   - On every sub-page, the breadcrumb trail or page title must sit at the exact same vertical Y-axis position as the homepage header.
   - Navigating between `/about` and `/pricing` must NEVER cause the header or page title to jump up or down.
3. **Standardized Margin Boundaries:**
   - All pages share the same maximum layout container (e.g. `max-w-6xl` or `max-w-7xl mx-auto px-6 lg:px-8`).
   - Gutter margins and horizontal paddings must not arbitrarily widen or narrow between routes.

---

## 4. Distinct Compositions for Distinct Route Intents

While the framing is shared, the internal page composition must be tailored directly to that page's specific operational purpose:

- **Homepage (`/`):** Attention anchor, rapid conversion pathways, multi-dimensional proof, high-impact hero.
- **Features / Product (`/features`):** Detailed interactive viewports, side-by-side technical diagrams, deep architectural specifications.
- **Pricing (`/pricing`):** High-clarity comparative matrices, toggleable billing terms, unambiguous feature tiers, FAQ accordion.
- **About / Team (`/about`):** Editorial narrative layout, founder thesis, high-resolution portrait masonry, company milestones timeline.
- **Contact (`/contact`):** Focused single-column form with zero extraneous distractions, direct communication channels, and clear response SLA.

---

## 5. Output Artifact
- Documents route-by-route layout plan in `frontend/PLAN.md`.

---

## 6. Validation Criteria
- Route transitions maintain zero layout shift on navigation and header baselines.
- Sub-pages feature distinct, purpose-driven internal compositions rather than cloning the homepage.
