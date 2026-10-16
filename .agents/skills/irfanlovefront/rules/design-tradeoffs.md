# Contextual Decision-Making and Design Trade-Offs

## Purpose
Establish how design knowledge is applied when requirements, heuristics, aesthetics, platform conventions, technical constraints, and user needs point toward different solutions.

---

## Constraint Types

### Explicit requirements
Direct instructions from the user or developer.

### Mandatory constraints
Legal, safety, security, privacy, accessibility, technical, or contractual requirements. Confirm applicability rather than inventing obligations.

### Product realities
Verified product behaviour, data models, APIs, permissions, available assets, actual capabilities.

### Evidence-based considerations
Research findings, usability observations, established standards, platform guidance, validated technical evidence.

### Professional judgment
Design choices where several defensible solutions exist and evidence does not uniquely determine an answer.

### Aesthetic preferences
Subjective choices about visual feel. A personal preference does not override a functional constraint.

---

## Common Design Trade-Offs

| Trade-off | Core tension |
|---|---|
| Minimalism vs. discoverability | Removing clutter can hide important actions |
| Density vs. readability | More information can increase cognitive load |
| Familiarity vs. originality | Conventions reduce learning; original patterns may better serve unique tasks |
| Consistency vs. contextual fit | Reusable patterns provide predictability but may erase meaningful differences |
| Visual impact vs. restraint | Expressive elements create identity but can cause visual noise |
| Animation vs. responsiveness | Motion clarifies transitions but can distract or reduce performance |
| Flexibility vs. simplicity | Configuration supports varied workflows but increases complexity |
| Reassurance vs. friction | Confirmations prevent mistakes but interrupt routine work |
| Speed vs. certainty | Optimistic updates feel responsive but must handle failure honestly |
| Conversion vs. user autonomy | Commercial goals should align with informed user choice |
| Cross-platform consistency vs. native conventions | Shared design supports brand; platform-specific controls improve learnability |
| Reuse vs. specialization | Shared components reduce duplication; excessive abstraction can make distinct tasks harder |

---

## Context Factors
A decision may depend on: user expertise, task importance/frequency, error consequences, reversibility, information density, device/input method, accessibility requirements, brand expectations, product maturity, technical limitations, performance requirements, data quality, cultural/language context, regulatory constraints, cost of change.

## Comparing Alternatives
Compare using: requirement fit, task clarity, learnability, efficiency, accessibility, visual coherence, brand suitability, implementation complexity, performance, error risk, reversibility, maintenance cost, evidence and uncertainty.

## Decision Record
For material decisions, document when appropriate: the question, relevant constraints, plausible alternatives, benefits/costs, evidence/assumptions, chosen direction, reason, known limitations, conditions for reconsideration.

## Handling Conflicting Principles
1. Confirm the conflict is real
2. Identify affected requirements and users
3. Check for alternatives satisfying both
4. Compare consequences and evidence
5. Prefer least harmful, least complex solution
6. Preserve explicit constraints and obligations
7. Document material residual trade-offs

## Respecting Requested Scope
A design-only request does not require a business workshop. A research request does not automatically require mockups. A code request should not be answered with strategy alone.

## Uncertainty and Assumptions
Use reasonable assumptions when the gap is minor and reversible. Expose uncertainty when it materially affects scope, safety, essential behaviour, or costly decisions.

**Foundational principle:** Apply design principles with judgment. Do not apply them as a mechanical checklist or treat one aesthetic philosophy as universally correct.
