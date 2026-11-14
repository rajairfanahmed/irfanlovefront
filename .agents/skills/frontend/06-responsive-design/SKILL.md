---
name: responsive-design
description: Validates and refines layout, typography, navigation, component behavior, and content priority across viewport sizes, orientations, zoom levels, and touch, keyboard, and pointer input.
---

# Responsive Design

## Objective

Deliver the same core task capability across supported viewports without treating mobile as a compressed desktop layout.

## Before implementation

Read `responsive-design.md`, `DESIGN_BRIEF.md`, `structural-layout.md`, `visual-design.md`, `ui-components.md`, and live routes at representative viewports.

Also inspect repository instructions, the actual implementation, installed library versions, and relevant tests. Do not rely on a specification when the code or framework version shows that it is outdated. Record material gaps rather than silently inventing missing requirements.

## Reference library

Read the references that apply to the task before making domain decisions. The complete set is listed here so the specialist can load the right guidance without guessing file names.

- [`fluid-layouts-and-breakpoints.md`](references/fluid-layouts-and-breakpoints.md)
- [`mobile-first-design.md`](references/mobile-first-design.md)
- [`responsive-typography-and-media.md`](references/responsive-typography-and-media.md)
- [`cross-device-testing.md`](references/cross-device-testing.md)

## Work sequence

1. Inspect the actual layout at narrow, intermediate, and wide widths. Choose test widths based on content failures, not only popular device presets.
2. Identify the point where each layout stops working and use content-driven breakpoints to adapt it.
3. Use fluid grids, flexible containers, `minmax`, `clamp`, intrinsic sizing, and wrapping where appropriate to the stack.
4. Reorder content only when the task hierarchy requires it. Keep DOM order, visual order, and focus order understandable.
5. Adapt navigation, tables, charts, dialogs, filters, sidebars, forms, and dense actions to small screens without hiding essential capability.
6. Check text zoom, browser zoom, orientation, long strings, localization expansion, keyboard access, and touch input.
7. Remove unintended horizontal overflow and prevent clipped focus rings, menus, popovers, and sticky elements.
8. Fix root causes in the owning layout or component rather than layering device-specific patches.

## Required outputs

Verified responsive behavior, documented breakpoints and content constraints, corrected overflow or reflow issues, and evidence from the tested viewport matrix.

## Ownership boundaries

Do not redesign brand tokens or user journeys without raising the issue to the owning specialist. Do not create a second mobile-only implementation when a single responsive structure is feasible.

## Review before handoff

- Primary tasks remain available at supported widths, content order is sensible, text remains readable, controls are operable, and no unintended clipping or overflow remains.
- Review the diff for unrelated changes, unused code, debug output, or accidental dependency additions.
- Run the relevant available checks and report their actual outcome.
- Record open issues with impact and owner.

## Handoff

Identify the files changed, decisions made, routes or components affected, tests run, and any dependency on another specialist. Do not claim completion for work that was not verified.
