# Deliverable Categories, Fidelity Standards, and Verification Claims

## Purpose
Establish precise boundaries for each design deliverable category. Define what can legitimately be evaluated and claimed at each fidelity level to prevent false claims of testing, responsiveness, or production readiness.

---

## 1. Deliverable Levels and Permitted Claims

| Deliverable Level | Permitted Verification Claims | Prohibited Claims (False Quality Signals) |
|---|---|---|
| **Level 1: Visual Concept / Moodboard** | Visual direction, typographic pairing, color harmonies, aesthetic tone, reference alignment. | Cannot claim working code, responsive reflow, interactive behavior, or accessibility conformance. |
| **Level 2: Wireframe (Low/Mid)** | Information architecture, content hierarchy, reading flow, component placement, navigation structure. | Cannot claim final visual polish, WCAG color contrast, or production readiness. |
| **Level 3: High-Fidelity Visual Mockup / Screen Spec** | Visual hierarchy, container justification, typographic scale, component layout, aesthetic polish. | Cannot claim working interactions, browser rendering, responsive adaptation, or tested accessibility. |
| **Level 4: Interactive / Coded Prototype** | Demonstration of state transitions, user flows, navigation models, and micro-interactions. | Cannot claim production reliability, complete error handling, edge-case coverage, or backend security. |
| **Level 5: Production Frontend Implementation** | Semantic HTML, modular component code, design token integration, framework conventions. | Cannot claim visual verification or responsive perfection unless rendered inspection actually occurred. |
| **Level 6: Rendered Visual Verification** | Viewport stability, zero overflow, visible focus indicators, screenshot inspection across viewports. | Requires real browser or preview screenshot inspection. Cannot claim without tool execution. |
| **Level 7: Tested & Audited Experience** | Automated build pass, static typecheck pass, lint pass, unit/integration test results. | Requires actual command execution and terminal output evidence. |

---

## 2. Core Integrity Rules for Deliverable Claims

1. **Never conflate code with rendered output:** Writing clean CSS or JSX does not prove the interface renders properly across viewports. Only rendered screenshots or live browser inspection prove visual quality.
2. **Never conflate build status with design quality:** A passing TypeScript build proves syntax and type correctness; it does not prove strong visual hierarchy, good spacing, or intuitive UX.
3. **Never claim WCAG compliance without evaluation:** Check actual contrast ratios, semantic landmarks, and keyboard focus before asserting accessibility conformance.
4. **State limitations plainly:** If host tools do not support launching a browser or capturing screenshots, state: *"Code implemented and type-checked; rendered visual inspection not performed due to environment limitations."*
