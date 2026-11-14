---
name: accessibility
description: Audits and improves semantic structure, keyboard operation, focus management, screen-reader output, contrast, forms, dialogs, motion, and responsive behavior against the selected accessibility target.
---

# Accessibility

## Objective

Remove barriers from complete pages and user journeys and provide test evidence for the scope reviewed.

## Before implementation

Read `accessibility.md`, `DESIGN_BRIEF.md`, route and component specifications, interactive flows, and the installed testing setup.

Also inspect repository instructions, the actual implementation, installed library versions, and relevant tests. Do not rely on a specification when the code or framework version shows that it is outdated. Record material gaps rather than silently inventing missing requirements.

## Reference library

Read the references that apply to the task before making domain decisions. The complete set is listed here so the specialist can load the right guidance without guessing file names.

- [`semantic-html-and-keyboard-navigation.md`](references/semantic-html-and-keyboard-navigation.md)
- [`wcag-and-accessibility-principles.md`](references/wcag-and-accessibility-principles.md)
- [`focus-forms-and-dialogs.md`](references/focus-forms-and-dialogs.md)
- [`assistive-technology-testing.md`](references/assistive-technology-testing.md)

## Work sequence

1. Use WCAG 2.2 Level AA as the default project target unless a different legal, contractual, or product requirement applies. Confirm the exact scope and do not make a broad conformance claim from an automated scan alone.
2. Inspect semantic landmarks, headings, lists, tables, accessible names, descriptions, relationships, and document language.
3. Test all interactions using keyboard only: tab order, activation, Escape behavior, arrow-key patterns where required, focus visibility, focus return, and no keyboard traps.
4. Check dialogs, drawers, menus, popovers, tabs, accordions, notifications, async status changes, and route transitions with assistive-technology semantics.
5. Check form labels, instructions, required state, error identification, error summaries, validation timing, and focus behavior after failure.
6. Check text and non-text contrast, focus indicators, status communication, target sizing, reflow, zoom, and content readability.
7. Respect reduced motion and avoid flashing, forced movement, time limits without extension, or auto-playing sound where not justified.
8. Use automated scans as one input, then perform manual keyboard and screen-reader checks on representative flows.
9. Record findings with severity, affected route/component, reproduction steps, expected behavior, actual behavior, and remediation.

## Required outputs

An accessibility audit, prioritized findings, resolved barriers in scope, and a test record naming the pages, flows, tools, and manual checks completed.

## Ownership boundaries

Do not claim full WCAG conformance from a single page or automated result. Do not hide a serious barrier behind a disclaimer. Accessibility is shared by all specialists, not delegated solely to this final audit.

## Review before handoff

- Critical paths work by keyboard, semantics and names are correct, focus is managed, form errors are understandable, visual contrast and reflow are checked, and remaining issues are disclosed.
- Review the diff for unrelated changes, unused code, debug output, or accidental dependency additions.
- Run the relevant available checks and report their actual outcome.
- Record open issues with impact and owner.

## Handoff

Identify the files changed, decisions made, routes or components affected, tests run, and any dependency on another specialist. Do not claim completion for work that was not verified.
