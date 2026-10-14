# UI/UX Quality Evaluation Rubric, Critique Framework, and Regression Benchmarks

## Purpose
Provide a repeatable, rigorous evaluation framework for independent self-critique, rendered output inspection, and regression testing. Ensure visual quality, structural integrity, and accessibility are verified with concrete evidence before delivery.

---

## 1. The 11-Axis Independent Self-Critique

Execute this critique pass on rendered output (or candidate mockups) before delivery:

| Axis | Evaluation Focus | Evaluation Criteria | Revision Trigger |
|---|---|---|---|
| **1. Intent Fit** | Problem solving & brief fidelity | Solves the user's specific request, target audience needs, and explicit constraints. | Core user task or explicit brief requirement failed. |
| **2. Visual Thesis** | Conceptual coherence | Coherent design concept clearly reflected in layout, typography, and spatial rhythm. | Layout looks like an unconsidered default template without a thesis. |
| **3. Hierarchy** | Scannability & visual priority | Primary visual anchor, clear secondary actions, and logical reading flow. | Competing focal points; primary action obscured or ambiguous. |
| **4. Composition** | Balance, alignment & rhythm | Deliberate proportions, vertical pacing, whitespace, and intentional container usage. | Incoherent alignment; empty card proliferation wrapping every item. |
| **5. Specificity** | Product-specific authenticity | Design arises from genuine content, real assets, and authentic brand identity. | Interchangeable generic layout that could belong to any unrelated product. |
| **6. Restraint** | Elimination of visual noise | Every visible element serves an explicit functional or visual purpose. | Gratuitous decorative props, floating blur blobs, or fake telemetry. |
| **7. Consistency** | Systemic coherence | Semantic tokens, typography scales, icon styles, and navigation shells aligned. | Fragmented tokens; conflicting component styles across pages. |
| **8. Novelty** | Fingerprint differentiation | Avoids repeating identical fingerprints across independent projects. | Exact macrostructure and palette formula copied from previous output. |
| **9. Usability & Accessibility** | Inclusivity & compliance | WCAG AA contrast (4.5:1), visible keyboard focus, semantic HTML, screen reflow. | Contrast failure, missing keyboard accessibility, broken navigation. |
| **10. Execution** | Viewport & state fidelity | Rendered output holds across 320px–1440px viewports without overflow or clipping. | Horizontal scroll overflow; broken layouts or clipped controls. |
| **11. Technical Integrity** | Code & architecture realism | Follows framework conventions, preserves working data flow, zero broken controls. | Dead buttons; broken routes; fabricated data presented as real. |

---

## 2. Structured Actionable Finding Format

When defects are discovered during critique or visual QA, log them using this standardized structure:

- **Location:** Route, section, component, and viewport width (e.g. `/projects` flagship card at 375px mobile viewport).
- **Observation:** Exact observable flaw (e.g. nested rounded cards create triple borders; title text overflows container).
- **Impact:** Why it harms the user experience (e.g. dilutes primary project CTA and creates visual clutter).
- **Priority:**
  - `Blocker`: Accessibility violation, broken route, horizontal overflow, non-functional button, fabricated data.
  - `High`: Confused hierarchy, unconsidered card proliferation, illegible text wrapping.
  - `Medium`: Minor alignment inconsistency, suboptimal whitespace padding, formulaic copy.
  - `Polish`: Fine-tuning transition timing, micro-spacing adjustments.
- **Correction:** Concrete code change required in source files.
- **Verification:** Method used to confirm the fix (re-render at viewport and inspect screenshot).

---

## 3. Rendered Visual Inspection Protocol

When browser, preview, or screenshot capabilities are available in the host environment:
1. **Render target routes:** Launch the dev server and open every requested route.
2. **Multi-viewport capture:** Capture and inspect screenshots at:
   - Mobile: 320px and 375px (checking narrow-screen wrapping, touch targets, and overflow).
   - Tablet/Fold: 768px and 1024px (checking column reduction and navigation collapse).
   - Desktop: 1280px (laptop fold line) and 1440px (widescreen balance).
3. **Full-page inspection:** Review both the hero viewport and the lower-page sections. Check container widths, section pacing, typography line lengths, image crops, and interaction states.
4. **Correct and re-inspect:** Modify source code, re-render, and verify that blockers and high-priority defects are resolved without regressions.
5. **Tooling limits:** If browser inspection tools are unavailable, explicitly disclose the limitation, run all available build/type checks, and never claim visual verification occurred.

---

## 4. Portfolio Regression Benchmark Case (Raja Irfan Ahmed Portfolio)

Use this benchmark to verify that the upgraded design engine produces distinctive, proof-led architecture rather than falling into generic AI defaults.

### Context and Brief
- **Target:** Personal developer portfolio for Raja Irfan Ahmed (Full-Stack Web Developer with AI/ML integration).
- **Stack:** Next.js App Router, TypeScript, Tailwind CSS, GSAP, Lenis, Lucide React, and official vector brand SVGs.
- **Required routes:**
  1. `/`: Home (hero statement, mission, flagship project spotlight, stack preview, verified proof/stats, contact CTA).
  2. `/projects`: Project showcase (truthful project stories, architecture details, live links, tech icons).
  3. `/stack`: Technology directory (curated categories, official brand SVGs from `src/data/stack.tsx`).
  4. `/about`: Biography, education, certifications, and engineering philosophy from source data.
  5. `/contact`: Contact interface using existing supported Web3Forms integration.
- **Source of truth:** `src/data/portfolio.ts`, `src/data/stack.tsx`, `public/logo.svg`, `src/app/icon.svg`, `public/Raja_Irfan_Ahmed.pdf`, and project previews in `public/`.

### Known Failure Patterns to Avoid
1. Centered hero with giant gradient headline and predictable generic tagline.
2. Clustered row of three pill buttons directly below the headline.
3. Floating row of technology badges floating under buttons.
4. Flagship project card nested inside another rounded card container.
5. Three-column technology tile grid repeated mechanically across sections.
6. Decorative engineering props: fake terminal windows, simulated live telemetry, pretend latency gauges, or fabricated system topology.

### Benchmark Passing Criteria
- [ ] **Authentic art direction:** Clear design thesis that feels specific to Raja Irfan Ahmed's engineering identity (e.g. architectural clarity, high typography refinement, proof-led presentation).
- [ ] **Role-specific composition:** Each route features a layout tailored to its unique content rather than repeating the home page structure.
- [ ] **Semantic token contract:** Shared colors, typography, and borders managed centrally through tokens.
- [ ] **Zero fabricated proof:** Uses genuine project data and official brand icons; no simulated metrics or dummy customer testimonials.
- [ ] **Visual inspection pass:** Rendered and visually inspected across desktop and mobile viewports with zero horizontal overflow and passing contrast.
