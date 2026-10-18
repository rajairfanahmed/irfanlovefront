# Master Specification Contract: Structure, Route Blueprint & Code Mapping

**Scope:** Canonical Structure of `frontend/DESIGN_ENGINEERING_BRIEF.md` & Implementation Contracts  
**Owner:** `taste-design-engineer`  
**Load Condition:** Loaded during Step 2 of Stage 0 to compile and validate the final brief  

---

## 1. Purpose & Problem Solved
AI agents often emit vague summary bullet points or placeholder lists like `[insert copy here]`, leaving downstream coding agents to guess layout and copy. This reference defines the mandatory, contract-grade schema of `frontend/DESIGN_ENGINEERING_BRIEF.md`, ensuring it serves as an immutable, production-ready blueprint.

---

## 2. When to Load This Reference
- Loaded when assembling the final master specification file.
- Loaded to validate that all required sections contain implementation-ready details.

---

## 3. Inputs & Prerequisites
- Synthesized inputs from `discovery-protocol.md`, `design-reference-research.md`, `creative-direction.md`, `visual-system.md`, and `motion-and-interaction.md`.

---

## 4. The Mandatory Structural Layout Specification Law

`taste-design-engineer` **MUST explicitly describe the structural layout in `frontend/DESIGN_ENGINEERING_BRIEF.md` regardless of whether the user or reference provided one.**

Downstream agents (`frontend-architect` and `creative-layout-engineer`) are strictly forbidden from guessing page structure. The brief must explicitly detail:
1. **Desktop Grid Anatomy:** Exact column counts, asymmetric width ratios (e.g. 60/40, 70/30), gutter measurements, and container boundaries (`max-w-6xl` or `max-w-7xl`).
2. **Hero Section Architecture:**
   - 4-element mini-site: Headline (<= 2 lines), supporting context (<= 20 words), category proof at point of doubt, and high-contrast CTA.
   - Exact spatial placement: Sticky left rail vs right kinetic stack, or docked telemetry console.
3. **Card & Surface Topology:** Borderless card decks, recessed wells, or 1px hairline dividers.
4. **Mobile Reflow Blueprint:** How every desktop multi-column structure collapses at 320px, 375px, and 768px viewports.

---

## 5. Canonical Master Brief Markdown Schema

The output file `frontend/DESIGN_ENGINEERING_BRIEF.md` must follow this exact schema:

```markdown
# Design Engineering Master Specification

## 1. Product Understanding & Visual Thesis
- Product Mission & Problem Solved
- Target Audience & Emotional Tone
- Category & Domain Classification

## 2. Operational Reference Audit & Token Adoption
- Primary Reference Path (e.g. design-refs/linear.app-DESIGN.md)
- Secondary Reference Path (Optional)
- User Assets / Image References Audited
- Reference-to-Decision Mapping Table (Exact derivations)

## 3. Creative Direction Selection
- Three Materially Distinct Concepts (Evaluated)
- Winning Direction & Justified Trade-Off Rationale

## 4. Platform, Routes & Architecture Scope
- Target Form Factors (Desktop, Mobile, Tablet)
- Canonical Routes List (e.g. /, /about, /features, /pricing, /contact)
- Greenfield vs Existing Website Operational Mode

## 5. Visual System & Token Architecture
- Semantic Substrate Palette (--canvas, --surface-1, --border-subtle)
- Guaranteed Contrast Coupling (Foreground inheritance, icon visibility)
- Typographic Scale (Display clamp, Body clamp, Tabular micro)
- Spacing & Grid Increment (4px/8px base rhythm)

## 6. Structural Layout & Route-by-Route Blueprint
For each canonical route:
- Route Path & Page Shell
- Section ID & Composition Wireframe (Exact grid coordinates)
- Production-Ready Copy (Zero lorem ipsum)
- Component Anatomy & Tactile States
- Mobile 320px Transformation Mechanics

## 7. Context-Aware Proof & Conversion Directives
- Hero 4-Element Compliance
- Proof at Point of Doubt (Verified metrics, code diffs, architecture diagrams)
- Mobile Thumb Ergonomics (44x44px touch targets)

## 8. Motion & Fluid Physics Architecture
- Animation Table (Component, Trigger, Easing Curve, Duration)
- GSAP ScrollTrigger Timelines & Pinning Markers
- Reduced Motion Fallback Strategy

## 9. Downstream Engineering Contracts
- Contract for frontend-architect (Tokens, fonts, logo)
- Contract for creative-layout-engineer (Grid, sections, container queries)
- Contract for interactive-component-engineer (GSAP, physics, cards)
- Contract for experience-qa-auditor (Lighthouse, WCAG, error UX)
```

---

## 6. Output Artifact
- Generates the final, immutable `frontend/DESIGN_ENGINEERING_BRIEF.md`.
- Updates `frontend/uiux-progress.json` marking Stage 0 complete.

---

## 7. Validation Criteria
- Zero placeholder markers (`[TBD]`, `[insert copy]`, `[TODO]`).
- Complete draft of real production copy included for every route.
- Concrete structural layout documented for all canonical sections.

---

## 8. Downstream Dependencies
- Serves as the single source of truth for all downstream engineering agents (Stages 1 through 4).
