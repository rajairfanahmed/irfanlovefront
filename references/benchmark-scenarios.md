# UI/UX Regression Benchmark Scenarios

## Purpose
Provide a standardized suite of 18 representative design scenarios to test the creative direction, task routing, structural novelty, token compilation, and visual QA capabilities of the UI/UX design engine.

---

## The 18 Test Scenarios

### Scenario 1: Developer Portfolio (Unspecified Palette)
- **Brief:** Create a developer portfolio for an AI/systems engineer with no color constraints.
- **Expected Evaluation:** Distinctive design thesis (e.g. architectural clarity), left-aligned or asymmetric macrostructure, genuine project case studies, no fake terminals or pretend telemetry, no generic purple glow.

### Scenario 2: Unrelated Product (Craft Bakery / Hospitality)
- **Brief:** Design a local artisanal bakery website foregrounding daily sourdough rhythms.
- **Expected Evaluation:** Warm earthy palette (cream, flour, warm charcoal), tactile editorial typography, product-catalog macrostructure, zero SaaS feature cards or metric badges.

### Scenario 3: Consecutive Independent Builds (Novelty Test)
- **Brief:** Execute two consecutive landing page designs for tech startups in the same category.
- **Expected Evaluation:** Evaluates fingerprint differentiation; second design must select a different macrostructure, hero archetype, and typography pairing rather than repeating the first output's layout.

### Scenario 4: Multi-Page Branded Product (Consistency vs Variation)
- **Brief:** Design Home, Stack/Tech, Projects, and About routes for a single brand.
- **Expected Evaluation:** Shared design system token contract (colors, fonts, borders, nav shell); distinct role-specific compositions for each route (e.g. directory grid for Stack, narrative flow for About).

### Scenario 5: Locked Brand Palette
- **Brief:** Design an enterprise tool with strictly locked primary (#0052CC) and background tokens.
- **Expected Evaluation:** Preserves locked tokens without alteration; novelty is expressed through layout proportions, spacing rhythm, and typographic scale.

### Scenario 6: Existing Design System Pre-Flight
- **Brief:** Add a new route to an existing repository with established Tailwind configuration and custom button components.
- **Expected Evaluation:** Pre-flight inspection identifies existing tokens and components; reuses existing architecture rather than introducing conflicting classes.

### Scenario 7: High-Density Operations Dashboard
- **Brief:** Design a real-time cluster monitoring dashboard for DevOps engineers.
- **Expected Evaluation:** High information density, clear tabular hierarchies, status contrast (green/amber/red), zero ornamental glassmorphism or floating blur shapes.

### Scenario 8: Editorial Content-First Publication
- **Brief:** Design a technical publication and long-form essay reader.
- **Expected Evaluation:** High typographic legibility (65–75 character measure), generous vertical margins, footnotes/sidenotes, distraction-free reading canvas.

### Scenario 9: Single Component Scope
- **Brief:** Design and implement an accessible multi-select dropdown component.
- **Expected Evaluation:** Bypasses full-page rituals; focuses on keyboard navigation, ARIA states, focus rings, hover/active/disabled states, and design tokens.

### Scenario 10: Reference-Led Design Study (Mode C)
- **Brief:** Adapt visual inspiration from a supplied modern minimal portfolio URL or screenshot.
- **Expected Evaluation:** Executes 4-step reference study; extracts layout grammar and spacing rhythm; adapts to user's authentic content without copying proprietary assets or exact pixels.

### Scenario 11: Controlled Redesign Scope
- **Brief:** Redesign an existing web app's settings view.
- **Expected Evaluation:** Preserves existing routes, state management, form handlers, and data contracts; updates visual composition, labels, and spacing.

### Scenario 12: Visual Audit Scope
- **Brief:** "Audit my landing page for usability and visual hierarchy defects."
- **Expected Evaluation:** Provides prioritized findings (Blocker/High/Medium) using structured format; zero modifications made to source files.

### Scenario 13: Responsive Stress Test
- **Brief:** Stress test a dashboard with long localized strings, multi-tag arrays, and narrow viewports.
- **Expected Evaluation:** Zero horizontal layout overflow at 320px and 375px; clean chip wrapping; flexible grid collapsing.

### Scenario 14: Zero-Proof Brief (Anti-Fabrication Test)
- **Brief:** Early-stage stealth startup website with zero customers or revenue data.
- **Expected Evaluation:** Refuses to fabricate customer logos, fake statistics, or synthetic reviews; structures page around problem statement, product demonstration, and technical thesis.

### Scenario 15: Tooling-Limited Environment
- **Brief:** Implementation requested in an environment without browser or preview tools.
- **Expected Evaluation:** Runs static typechecks and build commands; explicitly states rendered visual verification could not be performed due to host tool limits.

### Scenario 16: Design-Only Request
- **Brief:** "Design a visual concept for a financial analytics tool. Design only."
- **Expected Evaluation:** Delivers structured screen specification or visual mockup directly; zero code emitted; zero forced discovery questionnaires.

### Scenario 17: Bare `/uiux` Invocation
- **Brief:** User enters bare `/uiux`.
- **Expected Evaluation:** Mode chooser (A, B, C) displayed; turn immediately ended; no file inspection, design generation, or code execution.

### Scenario 18: Explicit Mode Invocation
- **Brief:** User enters `/uiux Mode A: build a contact form`.
- **Expected Evaluation:** Bypasses chooser directly; executes Mode A workflow without asking the user to choose again.
