# Anti-Slop Standard and Verifiable Quality Gates

## Purpose
Establish an enforceable, evidence-based quality system that eliminates generic AI templates and unconsidered defaults. Distinguish hard correctness gates from context-sensitive craft heuristics and novelty checks, providing actionable remediation paths.

---

## 1. Quality Architecture: Three Distinct Tiers

Quality evaluation is structured across three distinct tiers:

```
[Tier 1: Hard Correctness Gates] → Non-negotiable blockers (accessibility, semantics, overflow, broken states)
           ↓
[Tier 2: Contextual Craft Heuristics] → High / Medium severity (composition rhythm, hierarchy, container justification)
           ↓
[Tier 3: Novelty & Fingerprint Checks] → Medium / Polish severity (repeated skeletons, default palettes, formula swapping)
```

---

## 2. Tier 1: Hard Correctness Gates (Blocker Severity)

These gates represent non-negotiable functional, accessibility, and structural requirements. Failure on any hard gate blocks delivery.

### 1.1 Semantic HTML Structure
- **Failure:** Using generic `<div>` or `<span>` elements for clickable actions or document landmarks; skipping heading levels (`h1` to `h4`).
- **Why it matters:** Breaks screen readers, search indexing, and keyboard accessibility.
- **Verification method:** Source code inspection and DOM validation.
- **Correction:** Replace with native `<button>`, `<a>`, `<header>`, `<nav>`, `<main>`, `<section>`, and sequential heading hierarchy.
- **Exceptions:** None.

### 1.2 Keyboard Operation and Focus Visibility
- **Failure:** Interactive elements lack keyboard event handlers; `:focus` outlines are suppressed with `outline: none` without an accessible alternative.
- **Why it matters:** Blocks keyboard-only and assistive technology users.
- **Verification method:** Tab navigation inspection and rendered CSS check (`:focus-visible`).
- **Correction:** Ensure all interactive elements are reachable via Tab/Shift+Tab and display a visible focus indicator with at least 3:1 contrast against the background.
- **Exceptions:** None.

### 1.3 Color Contrast Standards
- **Failure:** Text or icon contrast below WCAG AA thresholds (4.5:1 for body text, 3:1 for large text 18pt+/14pt bold, 3:1 for UI components).
- **Why it matters:** Causes severe readability barriers for low-vision users and under bright lighting conditions.
- **Verification method:** Rendered color inspection using automated contrast tools or color picker calculations.
- **Correction:** Adjust foreground lightness or background tone to meet or exceed 4.5:1.
- **Exceptions:** Inactive or disabled controls.

### 1.4 Responsive Layout Integrity and Zero Horizontal Overflow
- **Failure:** Horizontal scrollbar appears at standard viewports (320px, 375px, 768px, 1024px, 1440px); text or buttons clipped by containers.
- **Why it matters:** Destroys mobile usability and causes critical content loss.
- **Verification method:** Rendered viewport inspection (browser subagent or screenshots).
- **Correction:** Add `max-width: 100%`, flex-wrap, responsive grid templates, or fluid clamp sizing.
- **Exceptions:** Intentionally scrollable data tables or code blocks with visible scroll affordances.

### 1.5 Interactive Control Fidelity
- **Failure:** Advertised buttons, links, or toggle switches that look interactive but perform no action, or lead to broken `#` targets.
- **Why it matters:** Breaches user trust and creates dead ends.
- **Verification method:** Interaction testing in rendered preview or code review of event handlers.
- **Correction:** Connect controls to real event handlers, active routes, or explicitly mark as disabled.
- **Exceptions:** Clearly annotated static visual mockups in Design-Only mode.

### 1.6 Data Integrity and Anti-Fabrication
- **Failure:** Fabricating customer testimonials, metrics, conversion figures, partner logos, or fake functional telemetry (pretend terminals, latency gauges).
- **Why it matters:** Deceives users and stakeholders; destroys credibility.
- **Verification method:** Cross-reference against genuine project data sources (`src/data/` or user brief).
- **Correction:** Remove fabricated proof; replace with verified project data or honest descriptive content.
- **Exceptions:** Synthetic demo data explicitly labeled as "Demo Data" in prototype environments.

### 1.7 Reduced-Motion Compliance
- **Failure:** Uncontrollable animations, continuous looping motion, or parallax scrolling that ignores user system settings.
- **Why it matters:** Causes nausea, dizziness, and vestibular motion triggers.
- **Verification method:** CSS inspection for `@media (prefers-reduced-motion: reduce)`.
- **Correction:** Disable or reduce non-essential animations when the reduced-motion preference is active.
- **Exceptions:** None.

---

## 3. Tier 2: Contextual Craft Heuristics (High / Medium Severity)

These heuristics evaluate visual and compositional quality. Violations weaken the user experience and must be prioritized for correction.

### 2.1 Container Justification
- **Failure:** Wrapping every section, text block, or feature in a rounded card with borders and shadows.
- **Correction:** Use typography, scale, whitespace, hairline divider rules, or subtle background tinting to define hierarchy. Every container must earn its place.

### 2.2 Visual Focal Point and Rhythm
- **Failure:** Page lacks a clear primary anchor; all sections share identical visual density and vertical pacing.
- **Correction:** Establish an unmistakable focal point in the first viewport; alternate dense structured sections with expansive, quiet zones.

### 2.3 Authentic Product Specificity
- **Failure:** Interface uses interchangeable SaaS styling that could be applied to any product simply by swapping the logo.
- **Correction:** Derive composition, typography, and visual assets directly from the authentic product context, actual source data, and user brief.

### 2.4 Natural Prose Standard
- **Failure:** Authored copy uses generic AI marketing clichés ("empowering", "seamless", "next-gen") or em dashes (`-`) in ordinary user-facing prose.
- **Correction:** Rewrite copy in clear, natural language with concrete descriptions and standard punctuation.

---

## 4. Tier 3: Novelty and Fingerprint Checks (Medium / Polish Severity)

These checks prevent unconscious habit and formula repetition:

### 3.1 Template Default Stacking
- **Warning:** Centered hero headline + eyebrow badge + centered paragraph + cluster of 3 pill buttons + floating badge row + 3-card grid.
- **Remediation:** Evaluate alternative macrostructures (asymmetric split, left-aligned typographic statement, editorial multi-column). Centered heroes remain valid when deliberately chosen for focal impact, but must not be the automatic default.

### 3.2 Formula Swapping
- **Warning:** Automatically replacing cards with brutalist black borders, or forcing dark terminal styling onto every engineering project.
- **Remediation:** Match the aesthetic directly to the target user and brand requirements. Do not replace one rigid template with another.

### 3.3 Palette Repetition
- **Warning:** Using dark navy surfaces with neon purple, violet, or cyan accents on unrelated projects.
- **Remediation:** Select hues based on brand identity and content warmth (warm stone, olive, terracotta, deep slate, monochromatic).

### 3.4 Forced Motion and Framework Bloat
- **Warning:** Automatically installing or forcing GSAP, Lenis, bento grids, or heavy animation libraries onto projects without explicit user need or performance justification.
- **Remediation:** Decide strictly based on the user's explicit requirements, existing project architecture, web performance, and accessibility. Motion libraries are capabilities, not mandatory defaults. Use native scrolling and lightweight CSS transitions when adequate.

---

## 5. Summary Matrix of Gates and Verification Requirements

| Gate | Tier | Severity | Verification Requirement |
|---|---|---|---|
| Semantic HTML | Hard Gate | Blocker | Source Code / DOM Inspection |
| Keyboard Focus & Names | Hard Gate | Blocker | Code / Tab Navigation Test |
| WCAG AA Contrast | Hard Gate | Blocker | Rendered Color Calculation |
| Responsive Overflow | Hard Gate | Blocker | Rendered Multi-Viewport Screenshots |
| Interactive Control Fidelity | Hard Gate | Blocker | Event Handler / Functional Check |
| Data & Metric Authenticity | Hard Gate | Blocker | Project Data Cross-Reference |
| Reduced Motion Support | Hard Gate | Blocker | CSS Media Query Inspection |
| Container Justification | Craft Heuristic | High | Rendered Full-Page Visual Review |
| Visual Focal Point | Craft Heuristic | High | Rendered Screenshot Review |
| Product Specificity | Craft Heuristic | High | Thesis & Content Comparison |
| Natural Prose (No Em Dashes) | Craft Heuristic | Medium | Copy Text Review |
| Novelty & Anti-Template | Fingerprint Check | Medium | Structural Fingerprint Comparison |
| Framework & Motion Restraint | Craft Heuristic | High | Dependency & Stack Inspection |
