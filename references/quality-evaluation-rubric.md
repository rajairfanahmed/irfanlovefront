# UI/UX Design Quality Evaluation Rubric

## 1. Purpose
Establish a consistent framework for evaluating visual designs, interface mockups, prototypes, and implemented websites or applications. Evaluate work according to its requested deliverable, intended purpose, explicitly stated requirements, relevant constraints, and available evidence. A static mockup, visual exploration, interactive prototype, and production implementation must not be judged as if they were interchangeable.

## 2. Establish the Evaluation Scope
Before applying the rubric, identify which dimensions can legitimately be evaluated. Possible scopes: visual concept, low-fidelity wireframe, high-fidelity mockup, desktop and mobile designs, interactive prototype, existing interface audit, frontend implementation, complete product experience. Use only applicable criteria. Mark genuinely inapplicable criteria as not applicable.

## 3. Rating Scale (0-4)
- **0: Missing or fundamentally broken.** A required quality is absent or fails consequentially.
- **1: Weak.** Major deficiencies substantially reduce quality.
- **2: Adequate.** Basic requirement met, but meaningful weaknesses remain.
- **3: Strong.** Requirement met well, with only limited noncritical weaknesses.
- **4: Exceptional.** Unusually strong execution supported by observable evidence.

A score of 4 does not require an unconventional visual style.

## 4. Evaluation Dimensions and Default Weights

| Dimension | Weight | Evaluates |
|---|---|---|
| A. Requirement and brief fidelity | 15 | Following the actual request: pages, components, style, platform, brand, format, constraints |
| B. Task clarity and usability | 15 | Purpose communication, discoverable actions, clear navigation, predictable behaviour, error recovery |
| C. Visual hierarchy and composition | 12 | Focal points, emphasis, grouping, balance, alignment, reading flow, whitespace, whole-page composition quality, section relationships |
| D. Typography, colour, and spacing | 10 | Readability, typographic hierarchy, font suitability, contrast, spacing consistency, visual density |
| E. Coherence and product-specific originality | 10 | Consistent visual language, product suitability, distinctive direction, design thesis, avoidance of template defaults, meaningful references |
| F. Interaction and state completeness | 10 | Hover/focus/selected/disabled states, loading/empty/success/failure, form behaviour, feedback, recovery, motion intentionality |
| G. Responsive quality | 8 | Content prioritization, layout adaptation, navigation adaptation, readability, overflow, touch interaction |
| H. Accessibility | 10 | Contrast, semantic structure, labels, focus visibility, keyboard operation, colour independence, reduced motion |
| I. Content quality and factual integrity | 5 | Specificity, clarity, terminology, credible content, absence of fabricated evidence, natural prose, no AI marketing language |
| J. Technical and implementation realism | 5 | Feasibility, reusable components, design tokens, realistic data, maintainability, existing asset reuse |

## 5. Weighted Score Calculation
Weighted points = (dimension rating / 4) x dimension weight. Normalize to 100-point scale.

## 6. Interpretation
- **90-100:** Strong candidate for delivery.
- **80-89:** Good, with targeted improvements.
- **70-79:** Material revision needed.
- **Below 70:** Substantial rework needed.

## 7. Non-Negotiable Quality Gates
Flag any issue that: violates an explicit essential requirement, prevents core task completion, creates a critical accessibility barrier, misrepresents product functionality, introduces serious privacy/security/trust concerns, breaks essential navigation or interaction, fails the requested output format, claims verification that did not occur, fabricates data presented as real, or uses a template default without contextual justification. Critical issues must be disclosed before delivery.

## 8. Separate Objective Defects From Subjective Judgments

### Objective or directly verifiable
A required component is missing, text is clipped, a button has the wrong label, a route is broken, a contrast ratio fails the criterion.

### Evidence-supported usability concern
A critical action is difficult to discover, related fields are disconnected, feedback does not communicate the result.

### Subjective or art-direction judgment
The typography feels too conservative, the composition lacks distinctiveness. Explain the visual evidence rather than presenting taste as fact.

## 9. Composition Quality Assessment
Beyond individual dimensions, evaluate the design as a whole composition:
- Does the page work as one visual experience rather than a stack of independent components?
- Does each page have a composition appropriate to its own content, or are all pages repeating the same layout?
- Does every container (card, panel, box) earn its place, or could hierarchy be established through typography, spacing, rules, or background changes?
- Are the relationships between text, imagery, open space, grid, scale, contrast, alignment, density, and movement intentional?
- Does the design have a coherent design thesis that connects layout, typographic character, visual hierarchy, image treatment, spatial rhythm, and component language?

## 10. Verification Honesty Assessment
- Was the rendered result visually inspected (when tools were available)?
- Were build, lint, type check, or test commands actually run?
- Are claims of responsiveness, accessibility, or production readiness supported by appropriate evidence?
- Is the distinction between designed, implemented, tested, and verified clearly maintained?

A successful build proves neither strong visual design nor good UX. A visually attractive screenshot proves neither functional correctness nor accessibility conformance.

## 11. Evidence and Confidence
- **Observed:** Directly visible or verified.
- **Inferred:** Plausible based on design evidence.
- **Untested:** Cannot be established without further inspection.
- **Verified:** Confirmed through an identified method.

## 12. Finding Format
- Finding ID, category, severity (cosmetic/minor/major/critical), evidence, impact, recommendation, verification, confidence.

## 13. Design-Only Evaluation Rules
Evaluate the requested visual deliverable directly. Do not penalize for omitting unrequested research, architecture, or implementation. Do not demand a user-research report before evaluating a visual concept.

## 14. Implementation Evaluation Rules
Inspect actual implementation, test interactions, examine viewport sizes, check keyboard navigation, inspect states, test forms and navigation, check realistic content, evaluate semantic structure, verify performance claims, check design-to-implementation consistency. Inspect the rendered output, not just the code.

## 15. Improvement Prioritization
1. Critical user harm, security, privacy, accessibility
2. Essential product requirements or core tasks
3. Major usability and interaction defects
4. Hierarchy, readability, responsiveness problems
5. Cross-page inconsistencies and maintainability
6. Lower-impact visual refinements

## 16. Re-Evaluation
After correction: reassess the original issue, verify the correction addresses its cause, check for regressions, revisit accessibility and responsive requirements, update finding status. Do not claim resolution without evidence.

## 17. Final Review Principle
Use the rubric to make quality judgments more consistent, transparent, and actionable. Do not optimize for an arbitrary score. Do not confuse a long prompt, a large component inventory, a successful build, or compliance with a checklist with excellent design.

**A strong design satisfies its intended requirements, communicates clearly, supports its relevant tasks, maintains visual coherence, respects users, and demonstrates quality through appropriate evidence.**
