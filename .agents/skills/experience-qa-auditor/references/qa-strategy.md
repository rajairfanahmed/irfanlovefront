# QA Strategy and Acceptance Criteria

Test what matters based on user risk, technical architecture, and design specifications. A quality audit is an evidence-backed verification process, not a mechanical rubber-stamping checklist.

---

## 1. Risk-Based Testing Framework

Allocate verification effort proportionally to user impact and system failure severity:

| Priority Tier | Target Systems | Verification Rigor | Tooling and Method |
|---|---|---|---|
| **Tier 1: Mission-Critical** | Primary conversion funnels, CTA flows, checkout, contact forms, navigation, responsive shell | 100% path coverage, boundary input tests, keyboard and mobile checks | Browser interactions, manual tab traversal, network payload inspection |
| **Tier 2: Core UX** | Hero display, layout hierarchy, editorial grids, sub-page routes, theme consistency | Visual regression check, viewport resizing (320px to 1440px), contrast ratio math | Viewport inspection, computed style analysis, DOM element count |
| **Tier 3: Edge and Auxiliary** | 404 routes, error boundaries, empty states, tooltip delays, decorative animations | Functional fault injection, reduced-motion toggle, console error inspection | Forced exception triggers, media query emulation, console log audits |
| **Tier 4: Background Assets** | Metadata, OpenGraph cards, JSON-LD schemas, sitemap, llms.txt, robots.txt | Static schema validation, link reachability checks, crawler tag audits | Schema linter, headless fetch validation, curl inspection |

---

## 2. Deriving Acceptance Criteria

Do not invent arbitrary acceptance tests. Derive concrete criteria directly from project artifacts:
1. **Design Intent:** Extract expected palette, typography rules, and tonal characteristics from `frontend/DESIGN_ENGINEERING_BRIEF.md`.
2. **Layout Blueprint:** Extract grid columns, responsive breakpoints, and section order from `/creative-layout-engineer` specifications.
3. **Component Behavior:** Extract expected state transitions, keyboard controls, and form handling from `/interactive-component-engineer` references.
4. **Project Roadmaps:** Track completion targets and milestone blockers against `frontend/PLAN.md`.

---

## 3. Test Coverage Taxonomy

Every audit item must fall into an explicit testing modality. Never conflate code inspection with rendered behavior:

| Modality | What It Proves | What It Cannot Prove |
|---|---|---|
| **Static Inspection (`tsc`, linters)** | Code syntax valid, types sound, imports resolved | Visual layout correctness, CSS specificity bugs, runtime state logic |
| **Build Validation (`npm run build`)** | Production bundling succeeds, routes statically generate | Layout responsiveness, real contrast ratios, working interactive animations |
| **DOM and Accessibility Audits** | Semantic elements present, ARIA tags well-formed, alt text set | Screen reader audio clarity, actual keyboard focus visibility, color readability |
| **Rendered Browser Verification** | True pixel alignment, layout reflow, hover/touch states, 60fps motion | Backend database durability under load, edge-case network partitions |
| **Defect Injection and Stress** | Error boundaries catch crashes, validation stops bad inputs | Flawless UX across legacy browsers without manual cross-device testing |

---

## 4. Adapting Rigor to Change Scope

Do not run a heavyweight full release audit on every single line edit:
- **Micro Polish (Single component styling or copy fix):** Run static checks, inspect the specific rendered component across 320px and desktop, verify zero new console errors.
- **Feature Addition (New section or interactive widget):** Audit responsive reflow, functional interactions, state coverage (loading, error, empty), and keyboard navigation.
- **Full Release Sign-off (Milestone completion):** Execute the complete multi-tier audit across all routes, build verification, accessibility matrix, performance audit, and SEO metadata.
