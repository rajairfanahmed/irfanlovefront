---
name: ui-components
description: Builds reusable interface primitives and compound components with typed APIs, semantic HTML, consistent variants, accessible states, and visual behavior defined by the design system.
---

# UI Components

## Objective

Create a component layer that makes the interface consistent and easy to extend without abstracting away meaningful product differences.

## Before implementation

Read `ui-components.md`, `visual-design.md`, `structural-layout.md`, `frontend-architecture.md`, the current component library, and existing form or interaction patterns.

Also inspect repository instructions, the actual implementation, installed library versions, and relevant tests. Do not rely on a specification when the code or framework version shows that it is outdated. Record material gaps rather than silently inventing missing requirements.

## Reference library

Read the references that apply to the task before making domain decisions. The complete set is listed here so the specialist can load the right guidance without guessing file names.

- [`component-design-principles.md`](references/component-design-principles.md)
- [`navigation-and-interactive-controls.md`](references/navigation-and-interactive-controls.md)
- [`component-states-and-behaviors.md`](references/component-states-and-behaviors.md)
- [`focus-scrolling-and-feedback.md`](references/focus-scrolling-and-feedback.md)

## Work sequence

1. Inventory existing primitives and shared components before creating new ones. Reuse or improve a component when that is safer than creating a parallel version.
2. Define component responsibilities, typed props, controlled and uncontrolled behavior where appropriate, variants, sizes, slots, and composition rules.
3. Build semantic buttons, links, fields, selects, checkboxes, radio groups, dialogs, menus, tabs, cards, tables, alerts, badges, and other required elements based on actual product needs.
4. Implement visual states including default, hover, focus-visible, pressed, selected, disabled, invalid, loading, and success where relevant.
5. Ensure components expose callbacks and data contracts rather than embedding page-specific API operations or workflow logic.
6. Use native elements where they provide the required behavior. Add custom behavior only when the product requirement justifies it.
7. Provide empty, skeleton, or status presentation primitives only where they improve reuse and do not encode product-specific business rules.
8. Document component usage and verify variants in representative route contexts.

## Required outputs

A cohesive reusable component set with documented props, variants, semantics, keyboard behavior, state styling, and usage examples.

## Ownership boundaries

Do not make network requests from generic components, duplicate form submission flows, own route-level state, or invent product data. UX Interaction owns orchestration and API-backed behavior.

## Review before handoff

- Component APIs are minimal and typed, semantics are correct, interactive states are visible, keyboard behavior is reliable, no native behavior is needlessly replaced, and components work at narrow and wide sizes.
- Review the diff for unrelated changes, unused code, debug output, or accidental dependency additions.
- Run the relevant available checks and report their actual outcome.
- Record open issues with impact and owner.

## Handoff

Identify the files changed, decisions made, routes or components affected, tests run, and any dependency on another specialist. Do not claim completion for work that was not verified.
