# Component Architecture

## Choose boundaries by responsibility

A reusable component should represent a meaningful interface concept, own a coherent behavior or visual responsibility, or prevent meaningful duplication. A component does not need to be extracted simply because markup appears twice once.

Useful layers may include:
- primitives: links, buttons, fields, icons, typography, and basic surfaces;
- compound components: dialogs, menus, tabs, data tables, and form groups;
- feature components: domain-specific views composed from primitives;
- route composition: page-specific orchestration and data selection.

The exact layers depend on product complexity and framework conventions.

## API design

- Keep props small, typed, and intentional.
- Prefer composition and slots over a large number of boolean flags.
- Model variants as named finite choices where possible.
- Use controlled state when the parent must coordinate behavior; allow internal state only for local, self-contained interaction.
- Make event callbacks describe outcomes, not DOM implementation details.
- Avoid passing large global objects where a narrow value or callback is enough.

## Avoid abstraction traps

Do not build a design-system package inside a single small project without a real sharing need. Do not force distinct domain components into one generic component with dozens of options. Extract abstractions after common behavior is understood, not before.

## Ownership

UI Components owns the reusable component contract. UX Interaction owns route and workflow coordination, API mutations, and cross-component state. Architecture owns application-level module and data boundaries.
