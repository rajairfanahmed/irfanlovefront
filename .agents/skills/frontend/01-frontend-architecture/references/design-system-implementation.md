# Design System Implementation

## Responsibility split

Frontend Architecture creates the infrastructure that allows design tokens and themes to be consumed. Visual Design owns the semantic token names and their actual design values. Structural Layout and UI Components consume those tokens. Do not let architecture select an unapproved palette or type scale.

## Token infrastructure

Use a single source of truth appropriate to the repository, such as CSS custom properties, theme objects, or a token build pipeline. Prefer semantic roles over component-specific literals:

- color roles for text, surfaces, borders, actions, focus, and status;
- typography roles for display, headings, body, labels, and code;
- spacing and sizing roles;
- radii, borders, shadows, and elevation;
- layering and overlay levels;
- motion timing and easing where a shared system is justified.

## Theme architecture

Support only the themes the product requires. A theme switch must update semantic roles consistently rather than maintaining separate component implementations. Decide where preference comes from, how it is persisted, whether system preference is followed, and how hydration avoids a theme flash.

## Implementation guardrails

- Do not duplicate token values in component styles when a semantic token exists.
- Do not build a token framework for a one-page site that has no need for one.
- Keep tokens discoverable and documented.
- Validate token references and avoid breaking existing consumers during migration.
- Ensure focus and status tokens remain visible in every theme.
