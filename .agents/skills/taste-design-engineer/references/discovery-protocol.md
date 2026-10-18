# Stage 0 Discovery Protocol: Inputs, Requirements & Scope Analysis

**Scope:** Pre-Architecture Discovery, Scope Triage & Requirements Formulation  
**Owner:** `taste-design-engineer`  
**Load Condition:** Loaded at Run 1 of Stage 0 or whenever assessing new user input  

---

## 1. Purpose & Problem Solved
AI models typically jump straight into writing code with zero understanding of the product problem, user psychology, or operational context. This reference governs how `taste-design-engineer` gathers, classifies, and verifies project requirements before any visual system or layout is synthesized.

---

## 2. When to Load This Reference
- Load during **Step 1 (Discovery & Triage)** when `/taste-design-engineer` is invoked.
- Load when evaluating whether user-provided context is sufficient to bypass discovery.

---

## 3. Inputs & Prerequisites
- Raw user prompt (text, project description, goals).
- Optional existing source code (if refactoring an existing project).
- Optional user-provided reference assets (brand guidelines, URLs, sketches, images, `.md` files).
- Target platform constraints (desktop, mobile, PWA, tablet).

---

## 4. Operational Discovery Procedure

### Rule 1: Non-Redundant Discovery (Zero Annoying Questionnaires)
If the user's initial prompt already contains sufficient, high-fidelity specifications:
- Target platform domain (e.g. SaaS CRM, Dev Portfolio, Awwwards Agency).
- Core color, aesthetic, or visual reference intent.
- Canonical routes and key components.
**DO NOT generate an empty question template and stop.** Immediately acknowledge the known inputs, populate known fields in `frontend/DESIGN_ENGINEERING_BRIEF.md`, and advance to reference matching.

### Rule 2: Greenfield vs Existing Website Classification
The agent must explicitly determine the operational lifecycle:
- **Greenfield Creation:** Clean project or empty `frontend/` directory. Full 5-stage lifecycle.
- **Existing Website Refactoring:** Existing project repository with active components. The discovery protocol must audit existing routes, theme structure, and identify only the specific components targeted for improvement.

### Rule 3: Platform Domain Taxonomy
Classify the project into one of five core domain archetypes:
1. **SaaS & Developer Tools:** High information density, live telemetry, clear ROI proof.
2. **High-Craft / Awwwards Showcase:** Asymmetric spatial layout, kinetic interaction, editorial polish.
3. **B2C & E-Commerce:** Product-first hierarchy, frictionless conversion, thumb accessibility.
4. **Editorial & High-Taste Content:** Typographic scale, readability, subtle paper substrates.
5. **Data & Infrastructure Console:** Monospace telemetry, modular rails, hardware-inspired controls.

---

## 5. Output Artifact
- Generates or updates `frontend/DESIGN_ENGINEERING_BRIEF.md` with:
  - Section 1: Product Understanding & Visual Thesis.
  - Section 4: Platform, Routes & Architecture Scope.

---

## 6. Validation Criteria
- Every requirement is labeled as either **Explicit** (user-specified) or **Derived** (inferred from domain).
- Assumptions are explicitly listed in the brief for user transparency.
- The project lifecycle (Greenfield vs In-Place Refactoring) is explicitly locked.

---

## 7. Downstream Dependencies
- Feeds `references/design-reference-research.md` to match category specifications.
- Feeds `references/creative-direction.md` to establish visual thesis boundaries.
