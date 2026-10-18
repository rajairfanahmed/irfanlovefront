# Defect Triage and Root Cause Analysis

Accurate defect reporting turns chaotic bug hunting into systematic engineering remediation. An effective QA finding isolates the true root cause from superficial symptoms, provides reproducible steps, and routes fixes to the responsible stage.

---

## 1. Severity Classification Matrix

Assign defect severity based on user impact, frequency, and business consequences:

| Severity Level | Priority | Definition & User Impact | Examples |
|---|---|---|---|
| **Blocker** | `P0` | System crash, build failure, white-screen of death, or blocked primary conversion funnel | `npm run build` fails, checkout button does not respond, route crashes with uncaught error |
| **Critical** | `P1` | Major feature broken, mobile layout completely unreadable, severe contrast failure | Horizontal scroll breaks mobile layout at 375px, primary navigation links dead, white text on yellow button |
| **Major** | `P2` | Secondary feature broken, unexpected visual shift, missing edge state | Form does not clear errors after valid input, modal scroll lock fails, missing empty state |
| **Minor** | `P3` | Visual defect or minor polish inconsistency that does not halt function | Eyebrow font size 2px smaller than spec, button hover transition slightly delayed, subtle alignment glitch |
| **Trivial** | `P4` | Cosmetic edge case, minor code comment typo, harmless warning | Deprecation notice in dev terminal, minor metadata formatting suggestion |

---

## 2. Standard Defect Report Format

Every recorded defect must include these structured fields:

```markdown
### DEFECT-[ID]: [Concise Title Describing Problem]

- **Severity:** P0 (Blocker) | P1 (Critical) | P2 (Major) | P3 (Minor) | P4 (Trivial)
- **Affected Route / Component:** e.g. `/case-studies` or `components/ui/ContactForm.tsx`
- **Environment / Viewport:** e.g. Mobile 375px width, Chrome 124, Light Theme
- **Steps to Reproduce:**
  1. Navigate to `/contact`
  2. Leave email field empty and click "Submit Message"
  3. Observe button and error display
- **Expected Behavior:** Inline error message displays beneath email field, submit button disables.
- **Actual Behavior:** Submit button executes, displays green "Success" banner, no validation error shown.
- **Evidence:** Browser console screenshot or log snippet: `[Console Warning: unhandled form submission]`.
- **Root Cause (Confirmed / Suspected):**
  - Confirmed: Form component lacks client validation schema check before firing submission event.
- **Responsible Stage:** `/interactive-component-engineer` (Stage 3)
- **Recommended Remediation:** Integrate Zod schema validation; enforce disabled state on invalid input.
- **Regression Criteria:** Retest with empty input, invalid format, and valid email. Confirm inline errors clear.
```

---

## 3. Isolating Root Causes from Symptoms

Do not propose speculative band-aids that mask underlying issues:
- **Symptom:** Content overflows the mobile screen horizontally.
  - *Speculative Patch:* Adding `overflow-x: hidden` to random card wrappers.
  - *True Root Cause:* A fixed width table or wide code element inside a child container lacks responsive max-width rules.
- **Symptom:** Text is unreadable in production.
  - *Speculative Patch:* Adding random arbitrary hex colors via inline styles.
  - *True Root Cause:* Design token substrate variable (`--text-muted`) lacks sufficient contrast against the active canvas background. Fix the token in `globals.css` via `/frontend-architect`.

---

## 4. Remediation Routing Across the Suite

Route identified defects to the appropriate specialist stage:
- **Stage 1 (`/frontend-architect`):** Token mismatches, font configuration bugs, routing defects, broken dependencies, build setup errors.
- **Stage 2 (`/creative-layout-engineer`):** Responsive grid collapse failures, section hierarchy issues, incorrect container geometry, missing whitespace.
- **Stage 3 (`/interactive-component-engineer`):** Broken button clicks, form validation errors, missing focus rings, janky animations, dead modal controls.
