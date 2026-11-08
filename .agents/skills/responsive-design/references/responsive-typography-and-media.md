# Responsive Typography and Media

Purpose: how text and media scale and adapt across the supported viewport range. Typeface, scale, and type roles themselves belong to Visual Design's typography work, this file owns how those sizes behave as the viewport changes, and how images and other media hold up across the same range.

## Fluid versus stepped type scaling

Decide whether a text role's size should scale smoothly with the viewport (fluid, typically `clamp()`) or step between fixed values at defined breakpoints (discrete). Fluid scaling tends to suit marketing and editorial headings, where a continuously varying size looks natural and intentional. Discrete steps tend to suit dense UI text, where predictable, testable sizes matter more than smooth scaling. Use the breakpoints already established in `fluid-layouts-and-breakpoints.md` for the discrete case rather than introducing separate type-specific breakpoints.

## Setting clamp() bounds for type

When using `clamp()` for text, set the minimum and maximum bounds to real limits, the smallest size where the content is still comfortably legible, and the largest size where it stops looking intentional and starts looking like it's just filling space, not arbitrary round numbers. Check the bounds at the actual smallest and largest viewports in the supported range, not just in the middle where fluid scaling usually looks fine by construction.

## Line length and readability across sizes

Keep body text within a comfortable reading measure at every viewport, roughly 45 to 75 characters per line for long-form content. On a wide viewport this usually means constraining the text column rather than letting it stretch full width; on a narrow one it usually resolves naturally as the viewport itself limits line length. Headings and labels need checking too, confirm they still wrap sensibly or truncate deliberately at the narrowest supported width rather than discovering the problem only with real content.

## Text expansion and localized content

Translated or localized text can run significantly longer or shorter than the source language, and this interacts directly with responsive behavior, a heading that fits comfortably in English can overflow or wrap awkwardly in a language that runs longer, especially at narrower viewports where there's less room to absorb the difference. Check layouts intended to support multiple languages against realistic translated lengths, not just the source text, at the narrower end of the supported range where the problem is most likely to surface.

## Images and media across viewport sizes

Define how images and media behave as their available space changes, maintaining their aspect ratio by default, with an explicit decision for how they crop or reposition if the available aspect ratio changes significantly between viewport sizes (a wide banner on desktop that needs a taller, narrower treatment on mobile, for instance). Use responsive image techniques (appropriately sized sources per viewport, not just CSS scaling a single large image down) so a small viewport isn't paying the download cost of a desktop-sized asset, coordinate specific delivery and format choices with Performance Optimization.

## Reserving space to prevent layout shift

Reserve the correct aspect-ratio space for an image, video, or embed before it loads, at every viewport, so the layout doesn't shift once it arrives. This applies across the whole responsive range, not just the primary viewport a design was checked against, an aspect ratio reserved correctly at one breakpoint and not another will still shift layout at the one that was missed.

## Media that changes meaningfully with orientation or size

Some media genuinely needs a different treatment, not just a different size, depending on available space, a data visualization that shows full detail on a wide viewport and a simplified summary on a narrow one, or a video that's primary content on desktop and a secondary thumbnail on mobile. Decide this deliberately per case rather than assuming the same media treatment scales acceptably across the whole range; if it doesn't, that's a content-priority decision, coordinate with `mobile-first-design.md`.

## Icon and graphic scaling

Icons and simple graphics usually scale cleanly as vector assets across the whole range and rarely need their own breakpoint-specific treatment, unless their legibility genuinely degrades at a particular size, in which case treat that the same way any other content-driven breakpoint decision is made, not as a typography or media default.
