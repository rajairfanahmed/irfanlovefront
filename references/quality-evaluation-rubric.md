# UI/UX Design Quality Evaluation Rubric

## 1. Purpose
Establish a consistent, actionable framework for evaluating visual designs, interface mockups, prototypes, and implemented applications. Evaluate work according to its requested deliverable, intended purpose, explicitly stated requirements, relevant constraints, and observable evidence. A static mockup, visual exploration, interactive prototype, and production implementation must not be judged as if they were interchangeable.

---

## 2. Rating Scale (0-4)
- **0: Missing or fundamentally broken.** A required quality is absent or fails consequentially.
- **1: Weak.** Major deficiencies substantially reduce quality.
- **2: Adequate.** Basic requirement met, but meaningful weaknesses remain.
- **3: Strong.** Requirement met well, with only limited noncritical weaknesses.
- **4: Exceptional.** Unusually strong execution supported by observable evidence.

A score of 4 does not require an unconventional visual style.

---

## 3. Evaluation Dimensions and Weights

| Dimension | Weight | Evaluates |
|---|---|---|
| A. Requirement and brief fidelity | 15 | Following the actual request: pages, routes, components, style, platform, brand, format, constraints |
| B. Task clarity and usability | 15 | Purpose communication, discoverable actions, clear navigation, predictable behaviour, error recovery |
| C. Visual hierarchy and whole-page composition | 12 | Focal points, emphasis, grouping, balance, alignment, reading flow, container justification, section relationships |
| D. Typography, colour, and spacing | 10 | Readability, typographic hierarchy, font pairing, contrast, spacing consistency, visual density |
| E. Coherence and product-specific originality | 10 | Consistent visual language, product suitability, distinctive direction, design thesis execution, avoidance of template defaults |
| F. Interaction and state completeness | 10 | Hover/focus/selected/disabled states, loading/empty/success/failure, form behaviour, feedback, recovery, motion intentionality |
| G. Responsive quality | 8 | Content prioritization, layout adaptation, navigation adaptation, readability, overflow, touch interaction across viewports |
| H. Accessibility | 10 | Contrast, semantic structure, accessible names, focus visibility, keyboard operation, colour independence, reduced motion |
| I. Content quality and factual integrity | 5 | Specificity, clarity, terminology, credible content, absence of fabricated evidence, natural prose, no em dashes in copy |
| J. Technical and implementation realism | 5 | Feasibility, reusable components, design tokens, realistic data, maintainability, existing asset reuse |

**Score calculation:** Weighted points = (dimension rating / 4) x dimension weight. Normalized to 100-point scale.
- **90-100:** Strong candidate for delivery
- **80-89:** Good, targeted refinements recommended
- **70-79:** Material revision needed
- **Below 70:** Substantial rework needed

Do not optimize for an arbitrary score. Critical defects must not be obscured by high scores in other dimensions.

---

## 4. Non-Negotiable Quality Gates

Flag any issue that:
- Violates an explicit essential requirement from the user
- Prevents core task completion or breaks critical routes
- Introduces an accessibility barrier that blocks navigation or forms
- Misrepresents product functionality or fabricates customer proof/telemetry
- Uses an unconsidered template default without contextual justification
- Claims verification, testing, or responsive coverage that was not performed

---

## 5. Actionable Critique: Structured Finding Format

Every finding produced during evaluation or critic reviews must be specific and actionable. Use this structure:

1. **Target:** Specific route, section, component, viewport, or state (e.g. `/projects` flagship card at 375px mobile viewport).
2. **Defect:** Observed defect or clearly labeled inference (e.g. nested card containers create triple-nested borders; header text truncates awkwardly).
3. **Impact:** Why it weakens composition, usability, fidelity, accessibility, or implementation (e.g. adds visual noise and dilutes primary project action).
4. **Correction:** Concrete change to make in code or layout (e.g. remove inner card borders, use typographic hierarchy and spacing for metadata).
5. **Verification:** How the fix is verified (e.g. re-render at 375px and inspect for clean whitespace and single focal point).

### Distinguishing Objective Defects from Subjective Judgments
- **Directly observable defect:** Broken layout overflow, missing route, failed contrast ratio, untriggered interaction.
- **Evidence-supported usability concern:** Misaligned button hierarchy causing confusion, unannounced form errors.
- **Subjective art direction preference:** Explain the visual evidence (e.g. identical section compositions across routes, missing visual anchor) rather than presenting personal taste as objective fact.

---

## 6. Whole-Page Composition Quality Assessment

Beyond individual dimensions, evaluate the page as an integrated visual composition:
- Does the page feel like a unified experience rather than a stack of disconnected components?
- Does each route have a composition tailored to its content, or are all routes repeating the same layout?
- Does every container (card, panel, box) earn its place, or could hierarchy be established through typography, whitespace, rules, or background shifts?
- Does the rendered result visibly embody the stated design thesis?
- Would the interface remain clear and usable if all decorative styling were removed?

---

## 7. Verification Honesty Assessment

- Was the rendered application visually inspected in a browser or preview across routes and viewports?
- Were build, lint, type check, or test commands actually executed?
- Are responsive and accessibility claims backed by concrete evidence?
- If tools were unavailable, is the limitation explicitly disclosed without pretending verification occurred?

---

## 8. Portfolio Regression Test (Developer Portfolio Benchmark)

This regression test documents a concrete failure case and establishes clear criteria for passing. Treat it as a test benchmark, not as a universal aesthetic to be applied to every product.

### The Brief
Multi-page personal developer portfolio for Raja Irfan Ahmed:
- **Stack:** Next.js App Router, TypeScript, Tailwind CSS, GSAP, Lenis, Lucide React, and official vector brand SVGs.
- **Required routes:**
  1. `/`: Home (hero, mission, flagship project, stack preview, verified proof/stats, contact CTA)
  2. `/projects`: Project showcase (truthful project details, architecture content, real links, tech icons)
  3. `/stack`: Technology directory (curated categories, official brand SVGs from existing stack data)
  4. `/about`: Biography, education, certifications, engineering philosophy from source data
  5. `/contact`: Contact interface using existing supported Web3Forms integration
- **Mandatory preservation:** Existing data sources (`src/data/portfolio.ts`, `src/data/stack.tsx`), brand assets (`public/logo.svg`, `src/app/icon.svg`, `public/Raja_Irfan_Ahmed.pdf`, project previews), SEO metadata, structured data, sitemap, robots, semantic HTML, and accessibility.

### Known Failure Examples to Avoid
The previous failed implementation exhibited these template-default anti-patterns:
- Centered hero with generic gradient headline and predictable tagline
- Cluster of three pill buttons immediately under the hero text
- Centered technology badge row floating below hero buttons
- Rounded flagship project card containing additional nested cards inside
- Three-column technology tile grid repeated mechanically across sections
- Decorative props: fake terminal windows, simulated live telemetry, pretend latency gauges, or fabricated system topology

Do not reproduce these failure patterns. Conversely, do not simply apply a fixed opposite formula (such as forcing brutalism or eliminating all cards). Derive the composition directly from the authentic content and a chosen design thesis.

### What Counts as a Pass
1. **Functional and technical fidelity:** All five routes implemented, existing data sources and brand SVGs utilized, build and type checks pass.
2. **Distinctive visual direction:** Coherent design thesis that avoids generic SaaS formulas and feels specific to Raja Irfan Ahmed's engineering identity.
3. **Route-specific compositions:** Each page has a composition suited to its purpose while sharing a unified design language (typography, tokens, navigation, interaction rules).
4. **Authentic content:** Uses real projects, verified credentials, and genuine data without fabricated metrics or fake functional props.
5. **Rendered visual verification:** All requested routes rendered and inspected across desktop and mobile viewports. Material defects identified by the critic pass are corrected in source code.
