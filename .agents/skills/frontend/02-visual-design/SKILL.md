---
name: visual-design
description: Defines and implements the product visual language through semantic design tokens, color roles, typography, spacing, surfaces, themes, and asset direction using the approved design brief and current project system.
---

# Visual Design

## Objective

Translate the approved design direction into a consistent, accessible, reusable visual system without changing page architecture or user-flow logic.

## Before implementation

Read `visual-design.md`, `DESIGN_BRIEF.md`, `frontend-architecture.md`, existing token files, brand assets, and relevant reference analysis.

Also inspect repository instructions, the actual implementation, installed library versions, and relevant tests. Do not rely on a specification when the code or framework version shows that it is outdated. Record material gaps rather than silently inventing missing requirements.

## Reference library

Read the references that apply to the task before making domain decisions. The complete set is listed here so the specialist can load the right guidance without guessing file names.

- [`visual-design-principles.md`](references/visual-design-principles.md)
- [`color-systems-and-theming.md`](references/color-systems-and-theming.md)
- [`typography-and-type-scales.md`](references/typography-and-type-scales.md)
- [`hierarchy-and-visual-composition.md`](references/hierarchy-and-visual-composition.md)

## Work sequence

1. Review the current visual system and identify what should be retained, refined, or replaced. Do not assume an existing token is unused before searching the codebase.
2. Define semantic token roles for text, surfaces, borders, interactive states, feedback states, overlays, focus, and data visualization where required.
3. Implement color roles and theme mapping, including light and dark modes only when the product requires them.
4. Implement a deliberate typography system with families, weights, fluid sizes, line heights, tracking, and readable text measures.
5. Implement spacing, radii, borders, shadows, elevation, and motion-related visual tokens with clear naming and restrained scales.
6. Select icons and media treatment that match the product and preserve consistent sizing, stroke weight, alignment, and meaning.
7. Check foreground and non-text contrast for relevant states. Do not rely on color alone to communicate status or selection.
8. Publish token usage guidance and replace duplicated literal values where safe.

## Required outputs

A documented semantic token system, theme values where applicable, font and asset configuration, and visual-system examples that can be used consistently by layout and component specialists.

## Ownership boundaries

Do not decide new page structures, rewrite route architecture, invent interactions, or implement full components. Do not add a visual effect simply because it is fashionable.

## Review before handoff

- Tokens are semantic and reusable, theme pairs remain legible, typography hierarchy is consistent, contrast is checked, unused or duplicate tokens are minimized, and existing pages remain visually coherent.
- Review the diff for unrelated changes, unused code, debug output, or accidental dependency additions.
- Run the relevant available checks and report their actual outcome.
- Record open issues with impact and owner.

## Handoff

Identify the files changed, decisions made, routes or components affected, tests run, and any dependency on another specialist. Do not claim completion for work that was not verified.
