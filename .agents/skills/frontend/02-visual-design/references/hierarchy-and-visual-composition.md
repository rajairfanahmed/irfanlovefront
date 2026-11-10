# Hierarchy and Visual Composition

Purpose: how color, type, surfaces, and imagery combine into a coherent visual read, within the page structure Structural Layout has already defined. This file owns visual treatment and emphasis, not section order or page composition; coordinate with Structural Layout rather than redeciding its territory here.

## Visual hierarchy within a page or component

Establish what should be noticed first, second, and last, and make sure the visual weight (size, contrast, color intensity, position) actually matches that intended order. Check this by squinting at or quickly glancing away from a mockup: whatever stands out in that first instant should be what's actually most important.

## Salience and emphasis

Reserve the strongest visual treatment (highest contrast, boldest color, largest size) for what genuinely deserves it. If every element uses the same strong treatment, none of them are salient anymore, emphasis is relative, not absolute.

## Contrast between primary and secondary information

Secondary information (metadata, timestamps, helper text, disabled actions) should read as clearly secondary through reduced contrast, smaller size, or a quieter color, not just by being physically smaller. If it still competes visually with primary content, the hierarchy hasn't actually been established.

## Whitespace and grouping

Related elements should sit closer together than unrelated ones (proximity implies relationship, without needing a border to state it explicitly). Whitespace is also a tool for pacing: more space around a section signals a bigger transition, tighter space signals a tighter relationship. Use spacing values from the token system defined in `color-systems-and-theming.md`'s companion typography and token work rather than ad hoc numbers.

## Alignment and consistency

Elements should align to a consistent grid or baseline, not to whatever position looked fine for that one instance. A page where text, icons, and controls all align to a shared edge reads as considered; one where they're each off by a few pixels reads as sloppy even if a viewer can't say exactly why.

## Surface contrast and depth

Decide how many distinct surface levels the product actually needs (page background, card, raised element, overlay) and give each a clear, consistent way of reading as "above" or "below" its neighbor, whether through subtle color difference, a shadow, a border, or a combination. Don't add a depth cue a project doesn't need; a flat design with no shadows can be just as legible as one with five elevation levels, as long as it's applied consistently.

## Borders, shadows, gradients, and textures

Each of these is a tool for a specific job: a border separates adjacent elements with similar surface color, a shadow indicates elevation or focus, a gradient can indicate direction or add visual interest to an otherwise flat surface, a texture can reinforce a brand's character. Use the smallest set of these the project needs, and apply each one the same way everywhere it appears, so "a shadow" means something consistent across the interface instead of being reinvented per component.

## Iconography and imagery

Icons need a single consistent style (stroke width, corner treatment, fill vs. outline) across the whole product, pulled from one source rather than mixed from different icon sets. Photography and illustration need a consistent treatment too (color grading, cropping style, subject framing) so they read as part of one product rather than stock assets dropped in independently.

## Image crop, aspect ratio, and treatment

Define expected aspect ratios per image role (avatar, thumbnail, hero, card image) so layouts don't break when real content arrives, and decide how images are treated when the source doesn't match the target ratio (crop, letterbox, a defined focal point). Unaddressed, this is a common source of layout breakage once placeholder images are replaced with real ones.

## Component-level composition

Apply the same hierarchy and spacing logic inside each component that's applied at the page level: within a card, what's the primary element, what's secondary, how are they spaced and aligned. A component that's internally inconsistent undermines the page-level hierarchy around it.

## Visual states

Interactive and status states (hover, focus, selected, disabled, loading, error, success, empty) need to be visually distinguishable from each other and from the default state, using the color and surface vocabulary already established, not a one-off treatment invented for that single state.

## Cross-page visual consistency

The same kind of content (a card, a data table, a form, an empty state) should look the same wherever it appears across the product. Check this across pages explicitly; it's easy for consistency within a single page to hold while drift accumulates across the product as a whole.

## Visual clutter and unnecessary decoration

If removing a border, a shadow, an icon, or a background pattern wouldn't change how a user understands the content, it's a candidate for removal. Decoration earns its place by supporting comprehension or reinforcing the product's character, not by filling space.

## Review criteria

Design-time checks (can be done from a mockup or spec, without a rendered page):

- Hierarchy matches intended importance at a glance.
- Primary and secondary information are visually distinguishable.
- Spacing and alignment are consistent with the token system.
- Depth, border, and shadow usage is consistent and purposeful.
- Icon and image treatment is consistent across the set shown.
- No decorative element lacks a clear purpose.

Checks that require a rendered page, browser inspection, or automated tooling:

- Actual contrast ratios for real color and text-size combinations.
- Visual consistency across the live, running set of pages and components, not just the ones mocked up.
- Behavior of images and icons with real content, not placeholders.
- Any regression against a previous version of the interface.

Only report the second group as checked if a rendered page or tool was actually used to check it.