# Design System Implementation

Purpose: how the color, typography, spacing, and other tokens Visual Design has already decided become real, consumable code, and how theming and token changes propagate through the project. The actual token values and the reasoning behind them belong to Visual Design, this file is about representing and consuming those values correctly in whatever styling approach this project already uses.

## One source of truth for token values

Every design token should be defined in exactly one place, a CSS custom properties file, a theme object, a Tailwind configuration, whatever format fits the project's existing styling approach, and every consumer should reference that single definition rather than a hardcoded copy of the value. A color or spacing value typed directly into a component's styles, duplicating what the token system already defines, is a maintenance liability the moment the design system updates that value and this one copy doesn't follow along.

## Matching the format to the project's existing approach

Don't introduce a new token format or a new styling technology because it's a common or modern choice, use whatever the project already has in place, CSS custom properties, a Tailwind configuration, a CSS-in-JS theme object, a design-tokens JSON file consumed by a build step. Introducing a second, parallel token system alongside an existing one creates exactly the duplication and drift this file exists to prevent. When a project genuinely has no established approach yet (a new project with no prior convention), choose the simplest format that fits the actual styling technology already in use elsewhere in the stack.

## Semantic tokens over raw values in component code

Components should reference tokens by their semantic role (a background-surface token, a text-muted token) rather than reaching for a raw palette value (a specific hex code, a specific pixel number) directly, even when that raw value happens to be correct today. This indirection is what lets Visual Design update the underlying value, or add a new theme, without touching every component that uses it.

## Implementing light and dark themes

When a project supports more than one theme, implement it so a single set of semantic token names resolves to different actual values per theme, rather than components branching their own logic based on which theme is active. The theme switch should happen once, at the token layer, not scattered through conditional logic in individual components. Confirm every token that's defined for one theme has an equivalent defined for every other supported theme, a token missing from one theme is a bug waiting to surface in whatever component uses it under that theme.

## Build-time versus runtime tokens

Some token systems resolve entirely at build time (a Tailwind configuration compiled into static utility classes) and some need to resolve at runtime (a value that depends on a user preference or a feature flag, or that needs to change without a full rebuild). Choose based on what the token actually needs: a static brand color can safely be build-time; something that varies per user or per session needs a runtime mechanism. Using a runtime mechanism for something that's genuinely static adds needless complexity and performance cost; forcing something genuinely dynamic into a build-time system usually doesn't actually work.

## Integrating with an existing component library

When the project already uses a component library or a UI kit (whether a full design system or a lower-level primitives library), implement this project's tokens by configuring or extending that library's own theming mechanism rather than overriding its output with ad hoc styles afterward. Fighting a library's own styling system with overrides tends to be fragile and breaks on the library's own updates; working through its intended extension points is more durable.

## Propagating a token change

When a token value changes, verify the change actually reaches every consumer, every component referencing that semantic token, not just the ones that happened to be checked. A token system that's supposed to provide single-source-of-truth updates but doesn't actually propagate correctly (because some components still use hardcoded values, or because a cache or build step is stale) gives a false sense of consistency.

## Versioning and migrating token changes

For a breaking change to an existing token (renaming it, changing what it represents, removing it), identify every place it's currently consumed before making the change, and prefer an additive change (a new token alongside the old one, with a deprecation path) over a breaking one when the project has many existing consumers. A design system that changes its own contract carelessly erodes the trust that makes consumers rely on tokens instead of hardcoding values in the first place.

## Spacing, sizing, and other non-color tokens

Treat spacing, border radius, shadow, and other non-color tokens with the same discipline as color, a single defined scale, referenced semantically, not reintroduced as ad hoc values per component. These are just as prone to drift as color tokens, and drift in spacing is often more visually damaging than drift in color because it undermines the rhythm Structural Layout and Visual Design have already established.

## Verifying the implementation

Check that components actually reference tokens rather than hardcoded values (a search across the codebase for raw hex codes or arbitrary pixel values outside the token definitions themselves is a quick, concrete check), and that every theme has complete token coverage. Where visual verification is possible, confirm a token change actually propagates to a rendered component rather than assuming the reference is correctly wired.