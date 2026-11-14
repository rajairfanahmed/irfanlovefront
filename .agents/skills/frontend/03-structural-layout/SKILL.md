---
name: structural-layout
description: Builds application shells, navigation placement, page containers, content grids, and page-specific section composition using the approved visual system and mobile-first layout constraints.
---

# Structural Layout

## Objective

Give every page a clear structure and reading order that reflects its content and user task.

## Before implementation

Read `structural-layout.md`, `DESIGN_BRIEF.md`, `visual-design.md`, `frontend-architecture.md`, route definitions, and current page source.

Also inspect repository instructions, the actual implementation, installed library versions, and relevant tests. Do not rely on a specification when the code or framework version shows that it is outdated. Record material gaps rather than silently inventing missing requirements.

## Reference library

Read the references that apply to the task before making domain decisions. The complete set is listed here so the specialist can load the right guidance without guessing file names.

- [`composition-and-hierarchy.md`](references/composition-and-hierarchy.md)
- [`layout-patterns-catalog.md`](references/layout-patterns-catalog.md)
- [`spatial-rhythm-and-alignment.md`](references/spatial-rhythm-and-alignment.md)
- [`layout-selection-and-tradeoffs.md`](references/layout-selection-and-tradeoffs.md)

## Work sequence

1. Inspect actual routes, content types, role differences, and existing layout shells before adding new structures.
2. Define shared app shells for public, authenticated, editorial, or operational areas only where the product requires distinct structures.
3. Build page containers, grid primitives, section spacing, alignment rules, sticky regions, and navigation placement using design tokens.
4. Compose each page according to its information hierarchy. Use different compositions when content and tasks differ rather than forcing every route into the same card grid.
5. Define content widths and reflow behavior from the start. Keep mobile reading and task order valid before enhancing wider layouts.
6. Ensure that layout structure supports semantic landmarks, heading hierarchy, focus order, and stable reserved space for media or asynchronous content.
7. Keep page-specific composition separate from reusable component internals and interaction orchestration.

## Required outputs

Global layout shells, navigation placement, page-level structures, responsive container rules, and a clear route-to-layout map.

## Ownership boundaries

Do not change design-token values, redesign component internals, implement backend calls, or duplicate page content to achieve responsive behavior unless a real content-order requirement exists.

## Review before handoff

- Every route uses the intended shell, page hierarchy is obvious, content widths support reading, layouts adapt without horizontal overflow, and the structure works with keyboard and assistive technology.
- Review the diff for unrelated changes, unused code, debug output, or accidental dependency additions.
- Run the relevant available checks and report their actual outcome.
- Record open issues with impact and owner.

## Handoff

Identify the files changed, decisions made, routes or components affected, tests run, and any dependency on another specialist. Do not claim completion for work that was not verified.
