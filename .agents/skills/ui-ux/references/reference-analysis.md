# Design Reference Analysis, Visual Reverse Engineering, and Study Workflows

## Purpose
Establish an actionable framework for examining existing websites, applications, screenshots, and visual references. Extract underlying design principles, spatial grammars, and typographic relationships without copying protected pixels, proprietary assets, or unique content.

---

## 1. The 4-Step Reference Study Path

When analyzing references, separate observation from interpretation and adaptation:

```
[Step 1: Observed Evidence] → What is directly visible (measurements, colors, alignment, type scales)
           ↓
[Step 2: Design Interpretation] → Inferred rationale (why this structure solves the user/brand problem)
           ↓
[Step 3: Transferable Principles] → Structural grammar (grid logic, pacing, contrast, typographic roles)
           ↓
[Step 4: Implementation Adaptation] → Applying principles to user content, brand tokens, and tech stack
```

### Step 1: Observed Evidence (Facts Only)
Describe what is directly visible without guessing:
- Grid structure: number of columns, gutter sizes, fluid vs fixed widths.
- Typography: relative scale between headings and body, estimated line heights, font classifications (serif, sans, mono, display).
- Color and surfaces: background lightness, dominant hue family, accent placement, border hairlines, shadows, elevation.
- Layout flow: left-aligned vs centered, asymmetric splits, white space distribution.
- Component anatomy: navigation position, button shapes, container treatments.

### Step 2: Design Interpretation (Plausible Rationale)
Infer why these decisions were made:
- What creates the primary visual focus?
- How does the layout guide the eye through content priorities?
- How does whitespace support comprehension and brand perception?

### Step 3: Transferable Design Principles
Extract generalizable techniques that can inform original work:
- Section pacing rhythm (e.g. dense data table followed by expansive narrative statement).
- Contrast relationships (e.g. low-contrast neutral surfaces paired with high-contrast sharp typography).
- Modular alignment rules (e.g. all section headers locked to a 3-column left gutter).

### Step 4: Implementation Adaptation
Translate the extracted principles into the user's specific context:
- Map principles onto the user's authentic content, brand identity, and design tokens.
- Never duplicate unique branding, logos, proprietary illustrations, or copyright copy.
- Adapt the structure to the user's required tech stack (Next.js, Tailwind, React, etc.).

---

## 2. Distinguishing Reference Operations

Ensure the task scope governs execution:

- **Reference Study:** Extract principles, layout grammar, and visual ideas. Emit design rationale or adapt to an original proposal. Do not clone pixels.
- **Visual Audit:** Inspect an existing interface or reference, identify flaws and strengths, and provide a prioritized diagnosis with zero code changes.
- **Redesign:** Preserve existing product intent, information architecture, routes, and business logic while applying fresh, improved visual principles.

---

## 3. Web and URL Inspection Honesty

When examining live URLs:
- Use web/browser tools only when accessible and permitted.
- If a URL is inaccessible, JavaScript-rendered without readable text, password-protected, or blocked by firewalls, request a screenshot from the user or evaluate available public evidence.
- Explicitly state any inspection limitations. Never fabricate visual observations or pretend to have inspected a live page when tools failed.
