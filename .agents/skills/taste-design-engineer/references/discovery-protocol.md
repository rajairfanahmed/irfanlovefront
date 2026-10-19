# Stage 0 Discovery Protocol: Inputs, Requirements & Scope Analysis

**Scope:** Pre-Architecture Discovery, Scope Triage & Requirements Formulation  
**Owner:** `taste-design-engineer`  
**Load Condition:** Loaded at Run 1 of Stage 0 or whenever assessing new user input  

---

## 1. Purpose & Problem Solved
AI models typically jump straight into writing code with zero understanding of the product problem, user psychology, or operational context. This reference governs how `taste-design-engineer` establishes the project mode and website category before any visual system or layout is synthesized.

---

## 2. When to Load This Reference
- Load during **Step 1 (Discovery & Triage)** when `/taste-design-engineer` is invoked.
- Load when evaluating whether user-provided context is sufficient to bypass redundant discovery questions.

---

## 3. Inputs & Prerequisites
- Raw user prompt (text, project description, goals).
- Optional existing source code (if improving an existing project).
- Optional user-provided reference assets (brand guidelines, URLs, sketches, images, `.md` files).
- Target platform constraints (desktop, mobile, PWA, tablet).

---

## 4. Operational Discovery Procedure

### Stage 1: Identify Project Mode & Category

#### A. Determine Project Mode
Establish whether the user wants to build greenfield or improve an existing project:
1. **New Website (Mode A):** Create brand new concept, information architecture, page structure, and design from scratch.
2. **Improve Existing Website (Mode B):** Inspect the existing codebase, routes, navigation, and components. Identify what to preserve, what to improve, and what to redesign without breaking existing features.

#### B. Establish Website Category
Classify the site into a concrete industry category:
- Developer Portfolio
- SaaS Platform
- E-Commerce & Retail
- Agency & Studio Showcase
- Fintech & Banking
- Healthcare & Wellness
- Education & Learning
- AI Product & Research Lab
- Data Console & Dashboard
- Editorial & Long-Form Publishing
- Custom Category (if the project falls outside standard categories)

#### C. Non-Redundant Rule
If the user already stated their project mode or website category in the prompt, **do not ask them to repeat it**. Immediately acknowledge the classified mode and category, record them in `frontend/DESIGN_ENGINEERING_BRIEF.md`, and advance directly to scanning `design-refs/`.

---

## 5. Output Artifact
- Generates or updates `frontend/DESIGN_ENGINEERING_BRIEF.md` with:
  - Section 1: Project Mode (New Website vs Improve Existing) and Website Category.
  - Section 4: Target Routes, Existing Assets, and Architecture Scope.

---

## 6. Validation Criteria
- Project Mode is explicitly locked (New Website or Improve Existing).
- Website Category is explicitly recorded.
- Requirements are classified as Explicit (user-stated) or Derived (category-inferred).
- Zero redundant questioning when user context is already provided.

---

## 7. Downstream Dependencies
- Feeds `references/design-reference-research.md` to guide recursive scanning and 3-4 file selection from `design-refs/`.
- Feeds `references/creative-direction.md` to establish visual thesis boundaries.
