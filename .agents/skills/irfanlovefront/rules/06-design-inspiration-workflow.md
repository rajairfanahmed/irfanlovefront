# 06 · Brand Token & Reference Architecture Workflow
**Status:** Mandatory Frontend Engineering Rule  
**Enforcement:** Must be executed in Phase 1 before proposing design plans or generating code

When designing a project, agents must draw inspiration directly from the **84+ authoritative brand specifications in `design-refs/`** (Apple, Stripe, Linear, Notion, Vercel, Supabase, Ferrari, etc.) and the master brief in `frontend/DESIGN_ENGINEERING_BRIEF.md`. Never guess, invent arbitrary colors, or rely on generic AI template weights.

---

## 1. Why Inspecting Brand Specifications Works

When you skip looking at structured design system references, neural weights default to generic GitHub code: obsidian dark slate `#0B0F17`, electric cyan glow, and centered card grids.

By actively inspecting battle-tested specifications in `design-refs/`, you immediately absorb:
- **Unconventional Hero Compositions:** High-impact editorial splits, asymmetric column ratios, and tabular indexes.
- **Sophisticated Section Pacing:** Intentional density contrast, generous whitespace (`clamp(4rem, 8vw, 8rem)`), and alternating macro-layouts.
- **Master Micro-Details:** 1px physical hairline dividers, monospace metadata tags, and tactile button depression physics.

---

## 2. The 3-Step Extraction Protocol

### Step 1: Identify 1 to 3 Category-Relevant Brand Specifications
Open and inspect the relevant `design-refs/<brand>-DESIGN.md` file based on the client's industry, audience, or desired aesthetic mood:
- **Developer Tools / Infrastructure / AI:** `design-refs/linear.app-DESIGN.md`, `design-refs/stripe-DESIGN.md`, `design-refs/supabase-DESIGN.md`, `design-refs/warp-DESIGN.md`.
- **Luxury / Architecture / Editorial:** `design-refs/apple-DESIGN.md`, `design-refs/ferrari-DESIGN.md`, `design-refs/monocle-DESIGN.md`.
- **Modern Minimal SaaS / Productivity:** `design-refs/notion-DESIGN.md`, `design-refs/vercel-DESIGN.md`, `design-refs/resend-DESIGN.md`.

### Step 2: Extract the 4 Core Architectural DNA Pillars
From the inspected brand markdown files, extract and log concrete design tokens:
1. **Macro-Layout Archetype:** How is space structured? (Asymmetric editorial split, tabular directory, multi-scale magazine grid, or linear narrative stream).
2. **Typographic Scale & Ratios:** What is the display headline scale? What is the size ratio between headline and body? What tracking values are specified?
3. **Substrate & Surface Palette:** What is the primary canvas background? How is accent color deployed? (Surgical and restrained, under 5% of total viewport area).
4. **Interaction Geometry:** How are button borders, corner radii, and elevation shadows engineered?

### Step 3: Synthesize into the Project Design Thesis
Document the adopted parameters into `frontend/DESIGN_ENGINEERING_BRIEF.md`:
- Example: *"Adopting Linear typography rhythm with negative tracking (`-2.5px` on display) and 1px hairline divider rules instead of boxed cards."*
- Example: *"Adopting Stripe substrate depth (`#0A2540` navy canvas with `#635BFF` primary accent) for technical authority."*
- Example: *"Adopting Apple fluid physics (`scale(0.97)` active depression, 160ms cubic-bezier easing) across all interactive primitives."*

This guarantees an authentic, human-grade frontend application with zero template slop and zero image viewing dependencies.
