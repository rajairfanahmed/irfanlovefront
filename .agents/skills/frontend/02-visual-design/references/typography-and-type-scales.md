# Typography and Type Scales

Purpose: how to choose and apply typography for a specific project. Nothing here is a default typeface or scale; derive both from the project's evidence.

## Typeface selection criteria

Choose based on what the product needs to communicate (technical and precise, warm and approachable, editorial, playful), the brand if one exists, the content's reading demands (long-form text needs different qualities than a dashboard of short labels), and the supported languages and scripts. A typeface decision made for a landing page headline does not automatically suit a data-dense admin panel; check the fit against the actual content, not just the brand.

## Licensing and availability

Confirm a typeface is actually licensed for the intended use (web embedding, commercial use, the number of weights needed) before specifying it. If licensing is unknown or unconfirmed, say so rather than assuming a commonly-seen font is free to use; many are not. A freely available alternative with a similar character is a reasonable fallback to suggest.

## Text roles

Define roles by function: display (large, infrequent, often a headline or hero), heading (section titles, several levels), body (the primary reading text), label (UI text, form labels, buttons, short and frequent), and utility (captions, metadata, timestamps). Not every project needs every role at every level, use what the content actually requires.

## Type hierarchy

Hierarchy should come from a combination of size, weight, and sometimes color or letter spacing, not size alone. Two adjacent heading levels need to be distinguishable even to someone not consciously comparing them. If a project's content only has two or three real levels of importance, don't invent a six-level scale to fill out a system; match the scale to the content.

## Scale, weight, line height, letter spacing

Build the size scale with a consistent ratio (a defined progression, not ad hoc numbers chosen to look right per instance) so new sizes can be added predictably. Line height generally needs to loosen as text gets smaller and tighten as it gets larger, in the range of roughly 1.2 for large display text up to 1.5-1.6 for small body text, adjusted for the specific typeface's natural metrics. Letter spacing is usually left at the typeface's default for body text and only tightened or loosened deliberately for display sizes or all-caps labels.

## Line length and readability

Keep body text at a comfortable reading measure, roughly 45-75 characters per line for long-form content. Wider or narrower measures can be the right call for specific UI contexts (a narrow sidebar label, a wide data table), but check that long-form reading content in particular isn't left to stretch across an unconstrained container.

## Text wrapping and overflow

Decide explicitly how each text role handles content longer than expected: wrap, truncate with ellipsis, or scroll. Undefined overflow behavior is a common source of broken-looking interfaces once real (longer, shorter, translated) content replaces placeholder text.

## Fluid and responsive typography

Decide whether sizes scale smoothly between viewport widths (fluid, usually via `clamp()` or an equivalent) or step between a fixed set of values at defined breakpoints (discrete). Fluid typography tends to suit marketing and editorial content; discrete steps tend to suit dense UI where predictable, testable sizes matter more. Coordinate the actual breakpoints with Responsive Design rather than defining a separate set here.

## Font loading and fallback

Specify a fallback stack that approximates the chosen typeface's metrics closely enough to limit layout shift while the real font loads, and specify the loading strategy (e.g. swap, optional) if the project's rendering approach makes that relevant. This is a design-time decision about what's acceptable; the implementation detail belongs to Frontend Architecture and Performance Optimization.

## Variable fonts

If a variable font is in use, define which axes the project actually uses (typically weight, sometimes width or optical size) and treat intermediate values as available, rather than only using the handful of weights a static font family would ship. Don't specify axis values the chosen font doesn't actually support.

## Multilingual and localization

If the product supports more than one language or script, confirm the chosen typeface (or its fallback stack) actually covers the required character sets, and check that the type scale and line height still work for scripts with different vertical metrics or average character width. A scale tuned only for Latin text can break for Arabic, Chinese, or Devanagari content.

## Consistency across pages

The same text role should use the same size, weight, and line height everywhere it appears, unless there's a specific functional reason for a page to differ. Drift here is usually a sign the scale wasn't actually being referenced during implementation.

## Accessibility and legibility

Body text should generally not go below roughly 16px equivalent for comfortable reading, and users need to be able to resize text without the layout breaking. Avoid relying on color or weight alone at small sizes where contrast is already marginal; check actual contrast for the specific color and size combination in use, not just the nominal palette value.

## Validation and common failures

Common failures: specifying a typeface without checking licensing, building a hierarchy that only reads correctly at one viewport size, leaving overflow behavior undefined, and letting body text drop below a comfortable reading size on mobile. Where tooling allows, check rendered text against the approved scale and the project's real content, not lorem ipsum, since real content lengths are what actually expose wrapping and hierarchy problems.