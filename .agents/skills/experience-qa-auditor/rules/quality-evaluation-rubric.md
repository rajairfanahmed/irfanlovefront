# UI/UX Quality Evaluation Rubric & Pre-Flight Standards
**Domain:** Frontend QA, Accessibility & Technical SEO (Stage 4)  
**Philosophy:** Zero em-dashes. Zero AI tells. Strict mechanical Pre-Flight verification.

---

## 1. The 11-Axis Independent Quality Evaluation

Execute this critique pass on source code and layout structure before sign-off:

| Axis | Evaluation Focus | Evaluation Criteria | Revision Trigger |
|---|---|---|---|
| **1. Intent Fit** | Problem solving & brief fidelity | Solves user request, target audience needs, and explicit constraints. | Core user task or brief requirement failed. |
| **2. Visual Thesis** | Conceptual coherence | Coherent design concept clearly reflected in layout and typography. | Layout looks like an unconsidered default template. |
| **3. Hierarchy** | Scannability & visual priority | Primary visual anchor, clear secondary actions, logical reading flow. | Competing focal points; primary action obscured. |
| **4. Composition** | Balance, alignment & rhythm | Deliberate proportions, vertical pacing, whitespace, container usage. | Incoherent alignment; empty card proliferation. |
| **5. Specificity** | Product authenticity | Design arises from genuine content, real assets, authentic brand identity. | Generic layout that could belong to any unrelated product. |
| **6. Restraint** | Elimination of noise | Every visible element serves functional purpose; no gratuitous props. | Decorative props, floating blur blobs, fake telemetry. |
| **7. Consistency** | Systemic coherence | Semantic tokens, typography scales, icon styles, navigation aligned. | Fragmented tokens; conflicting styles across pages. |
| **8. Novelty** | Fingerprint differentiation | Avoids repeating identical fingerprints across projects. | Macrostructure or palette formula copied from previous output. |
| **9. Accessibility** | Inclusivity & compliance | WCAG AA contrast (4.5:1), visible keyboard focus, screen reflow. | Contrast failure, missing keyboard accessibility. |
| **10. Execution** | Viewport fidelity | Output holds across 320px to 1440px viewports without overflow. | Horizontal scroll overflow; broken layouts. |
| **11. Integrity** | Code & architecture | Framework conventions, SEO metadata, Core Web Vitals, zero dead links. | Dead buttons, broken routes, unhandled CLS or LCP. |

---

## 2. Testing Policy (User Self-Tests on Localhost)

- Agents NEVER run `npm run dev` or launch browser subagents to test.
- The USER tests on localhost themselves.
- The agent verifies code correctness through strict static analysis, TypeScript compliance, and code inspection.

---

## 3. Section 14 Pre-Flight Check Matrix

Before signing off on Stage 4, verify that every item in Section 14 of `tasteskill` has passed:
- Zero em-dashes and en-dashes anywhere in user-facing content.
- Hero viewport cap enforced (headline <= 2 lines, subtext <= 20 words, top padding <= `pt-24`, max 4 text elements).
- Eyebrow count <= ceil(sectionCount / 3) and zero section-numbering eyebrows (`01 //` banned).
- Button contrast >= 4.5:1 and CTA label fits on one line at desktop.
- Single-intent CTA labels enforced across the whole page.
- Motion motivated in one sentence; canonical GSAP skeletons implemented with reduced-motion safety.
- Viewport stability with `min-h-[100dvh]`, never `h-screen`.
- Branded 404 (`not-found.tsx`) and resilient error boundary (`error.tsx`) in place.
