# Images, Fonts, and Assets

## Images

Use the right dimensions, responsive sources, modern formats supported by the project, and compression appropriate to the visual content. Avoid shipping a desktop original to a small thumbnail. Reserve dimensions to prevent layout shifts.

## Loading priority

Prioritize the likely largest content element when evidence supports it. Lazy-load below-the-fold media and defer nonessential embeds. Do not lazy-load the primary above-the-fold image by default.

## Fonts

Subset language ranges where safe, load only needed weights, use efficient formats, define reliable fallbacks, and avoid unnecessary preloads. Test text metrics while the font is loading.

## SVG and icons

Optimize SVGs, remove unused paths and metadata where safe, and use a consistent icon source. Avoid embedding a huge icon collection in every route when a tree-shakable approach is available.

## Third-party assets

Review external scripts, video embeds, trackers, widgets, and remote font hosts for cost, privacy, reliability, and consent implications. Load only what is necessary for the page and user intent.
