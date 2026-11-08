# Color Systems and Theming

Purpose: how to build a project-specific color system. Nothing here is a palette to apply by default; every section explains how to derive actual values from the project's own evidence.

## Deriving the palette

Start from what's already given: an existing brand color, a supplied reference image's palette, an explicit user preference, or the product's category and audience if nothing more specific exists. Build outward from there rather than starting from a favorite palette and looking for a reason it fits. If there is genuinely no evidence to work from, say so and present the choice as a recommendation, not a derived decision.

## Color roles

Define roles by function, not by name alone:

- **Brand** the color(s) that carry the product's identity.
- **Neutral** the grayscale or near-grayscale range used for most surfaces and text.
- **Surface** background colors for distinct layers (page background, card, modal, sunken areas).
- **Text** foreground colors for different emphasis levels (primary, secondary, disabled, inverse).
- **Border** separators and outlines, usually a subset of the neutral range.
- **Accent** color used to draw attention to a specific action or state, often but not always the brand color.

A role can map to one color or a small range (e.g. five neutral steps). Keep the number of roles to what the project actually uses; an unused role is a token nobody will maintain correctly.

## Semantic color roles

Separate the palette (the raw color values) from the roles that reference them (e.g. `surface.primary`, `text.muted`, `accent.action`). This indirection is what lets a theme change without touching every component. Name roles by what they mean, not by the color itself: `danger`, not `red`, because the actual hex value should be free to change.

## Contrast and readability

Every text and surface pairing that will actually appear in the product needs to meet the contrast requirement in `accessibility.md`'s scope (generally WCAG AA, 4.5:1 for normal text and 3:1 for large text and UI components, unless the project specifies otherwise). Check this while building the palette, not after; it's far cheaper to adjust a color before it's wired into forty components than after.

## Color relationships and palette development

A coherent palette usually has a small number of hues with a clear relationship to each other (monochrome with one accent, an analogous pair, a deliberate complementary contrast) rather than many unrelated hues chosen independently. Build each color as a range (several lightness/saturation steps) rather than a single value, so the same hue can serve a background, a border, and a text color without needing an unrelated color for each.

## Background and foreground combinations

Document which foreground colors are approved on which backgrounds, including both light and dark surfaces if the project uses both. This is what prevents a component built in isolation from accidentally producing a combination nobody checked.

## Component-level color states

Interactive elements need colors for their relevant states: default, hover, active/pressed, focus, disabled, and selected, where each state applies. Keep the relationship between states systematic (e.g. "hover is one step darker than default") rather than picking each state's color independently, so new components can derive their own states predictably.

## Status colors

Only define success, warning, error, and informational colors if the product actually uses status communication. Keep them distinguishable from each other and from the brand and accent colors, and make sure they still meet contrast requirements, status colors are often where accessibility gets overlooked because they feel self-explanatory.

## Light and dark themes

Do not assume a project needs both, or either. If it does, decide whether to invert values or maintain two independently tuned palettes (independent tuning usually reads better, since a straight inversion often produces muddy surfaces or harsh contrast in dark mode). Document how theme switching is detected and applied (system preference, explicit toggle, both) only if the project defines that behavior; otherwise leave it to Frontend Architecture.

## Theme token architecture

Structure tokens so a theme is a set of values bound to the same role names, not a parallel set of differently-named tokens. This is what makes adding a theme later, or supporting a user-selectable brand color, tractable instead of a rewrite.

## Theme consistency

Every role that's defined for one theme needs an equivalent for every other theme the project supports. A role present in light mode but undefined in dark mode is a bug waiting to surface in an un-reviewed component.

## Color in charts and data visualization

If the product shows data visualizations, define a sequential or categorical data palette separately from the UI palette, built for differentiation at a glance and for working alongside the UI's own colors without clashing. Confirm it remains distinguishable for common color vision deficiencies, this is a frequent failure point for chart palettes built only by eye.

## Limitations and accessibility considerations

Color should never be the only way information is conveyed (status, required fields, validation state); pair it with an icon, label, or pattern. Note this explicitly in the spec rather than assuming implementation will remember it.

## Validation methods

Check contrast ratios for every real pairing, not just a token's nominal value against white or black. Check the palette under both themes if more than one exists. Check that status colors remain distinguishable from each other in simulated color vision deficiency if the tooling is available. Where no automated tool is available, say so, and flag contrast and distinguishability as items for a follow-up check rather than asserting they pass.