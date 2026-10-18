# 04: Brand Reference & Layout Archetype Workflow
**Status:** Mandatory Stage 2 Macro-Layout Rule  
**Enforcement:** Must be executed during Stage 2 before composing section layouts or writing page code

Creative layout engineers derive macro-layout arrangements and spatial rhythm directly from `frontend/DESIGN_ENGINEERING_BRIEF.md` and the 84+ brand token systems in `design-refs/` (Apple, Stripe, Linear, Notion, Vercel, Supabase, etc.). Never rely on generic AI template structures.

---

## 1. Why Inspecting Brand Specifications Works

Without inspecting concrete brand specifications, layout engineering defaults to generic three-card columns and centered hero blocks.

By inspecting structured specifications in `design-refs/`, you immediately absorb:
- **Asymmetric Spatial Distribution:** 5fr/7fr or 45%/55% editorial splits that create tension and elegance.
- **Tabular Directories:** Clean hairline-divided indices that replace bulky cards with high-density typographic tables.
- **Multi-Scale Editorial Grids:** Intentional hero cards spanning multiple columns alongside compact supporting nodes.

---

## 2. The 3-Step Layout Extraction Protocol

### Step 1: Ingest the Master Design Brief
Read `frontend/DESIGN_ENGINEERING_BRIEF.md` to identify:
1. The locked brand reference (e.g. `design-refs/linear.app-DESIGN.md`, `design-refs/apple-DESIGN.md`).
2. The chosen creative direction (e.g. Editorial Broadsheet, Machined Technical Console, or Modernist Canvas).
3. The canonical routes list and section-by-section layout contract.

### Step 2: Select the Layout Archetype for Each Section
For each page section, map the content to a distinct layout blueprint (see [rules/02-layout-blueprints.md](rules/02-layout-blueprints.md)):
- **Flagship Hero:** 4-element mini-site composition with single-intent CTA and wide container bounds (`max-w-5xl/6xl`).
- **Feature Showcase:** Asymmetric editorial split or multi-scale magazine grid.
- **Capabilities / System Index:** Tabular directory with fine hairlines (`border-b border-[var(--border-hairline)]`).
- **Case Study / Deep Dive:** Narrative linear stream (`max-w-[720px]`) with breakout diagrams.

### Step 3: Implement Container Queries & Responsive Guardrails
Transform the extracted layout into mobile-first code:
- Use `@container` queries for self-adapting responsive components.
- Wrap all page roots in defensive containers with zero horizontal scroll at 320px.
- Enforce strict whitespace separation (`clamp(4rem, 8vw, 8rem)`) between sections without wrapping everything in card boxes.

This guarantees bespoke, content-tailored layouts with zero generic template feel and zero image viewing dependencies.
