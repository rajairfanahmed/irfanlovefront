# Fluid Layouts and Breakpoints

Purpose: how to decide where a layout needs to change shape, and when it's better not to pick a fixed point at all and let sizing scale continuously instead. None of the values below are a starting palette to apply by default, every breakpoint should be traceable to a specific point where this project's content or layout actually needed one.

## Content-driven breakpoints, not device-driven ones

Resize the actual layout (or reason through the actual content) and note the width where it genuinely starts to look wrong, text lines get uncomfortably long or short, a multi-column layout runs out of room, a navigation bar starts wrapping badly. That width is a real breakpoint candidate. A width chosen because it matches a commonly cited phone or tablet size is not, device catalogs change constantly and a huge range of real devices and browser windows fall between and outside the common reference sizes. Content-driven breakpoints stay correct regardless of what devices exist next year; device-driven ones go stale.

## How many breakpoints a project actually needs

Most projects need fewer breakpoints than a default framework ships with. Start with none, let the content run fluidly, and add a breakpoint only where something genuinely needs to restructure, not just resize. A project with a few genuinely different layout needs (a collapsed single column, a two-column view, a full multi-column view) might need two or three breakpoints; a highly structured dashboard might need more. A marketing page with naturally fluid content might need very few, if any.

## Viewport range

Support viewports from roughly 320px up through large desktop and ultrawide displays, unless the project has a specific, stated reason to narrow that range (a known, controlled device fleet, an embedded context with a fixed viewport). Don't narrow the supported range by default just because it simplifies the work, that's a cost pushed onto whichever real user falls outside the assumed range.

## Discrete steps versus fluid, continuous scaling

A discrete breakpoint (a layout that changes shape at a specific width) suits a genuine structural change, a sidebar that needs to become a bottom sheet, a three-column grid that needs to become one column. Fluid, continuous scaling (typically via `clamp()` for spacing or dimensions) suits a value that should grow or shrink smoothly with the viewport without the layout actually restructuring, like the padding around a section or a container's width. Using discrete steps for something that should scale smoothly produces visible jumps at each breakpoint; using fluid scaling for something that actually needs to restructure (like column count) doesn't solve the real problem. Match the technique to whether the change is structural or purely a matter of scale. Fluid type scaling specifically, including `clamp()` bounds for text, belongs in `responsive-typography-and-media.md`.

## Breakpoints as a shared contract

Once a project's breakpoints are set, treat them as a shared value other specialist domains reference (Visual Design's fluid typography, UI Components' internal responsive behavior, Structural Layout's grid column counts), not something each domain picks independently. A breakpoint redefined differently in three places is a guaranteed source of layouts that almost, but don't quite, line up with each other.

## Orientation as a distinct axis from width

A viewport's width alone doesn't capture everything relevant, a tablet in portrait and the same tablet in landscape can need genuinely different layouts at a similar width-to-height ratio as a different device entirely. Decide explicitly whether orientation changes need their own handling (a layout that restructures on rotation) or whether the existing width-based breakpoints already cover it adequately for this project. Verifying that a rotation mid-session doesn't break the layout belongs to `cross-device-testing.md`.

## Container queries versus viewport media queries

Use a viewport media query when the decision genuinely depends on the overall screen or window size (the page's own layout, navigation structure). Use a container query when a component's internal layout should respond to the size of its own container rather than the viewport, the same card component rendering differently in a wide main column than in a narrow sidebar, regardless of the overall viewport. Reaching for a viewport breakpoint when the real dependency is a component's container produces a component that looks right in isolation but wrong wherever it's actually placed.

## Data-dense layouts and tables across breakpoints

Tables and other data-dense layouts are usually the hardest content to restructure well at a breakpoint. Options include horizontal scroll with a frozen key column so the user retains context, transforming each row into a stacked card at small sizes, or hiding lower-priority columns and offering a way to reveal them. Choose based on what the data actually needs: a table meant for quick scanning across many columns loses that purpose if collapsed into cards; a table with a few important columns and many secondary ones might work well with progressive column hiding. Which columns or content actually matter most is a priority decision made in `mobile-first-design.md`; this is about which restructuring technique implements that priority at a given breakpoint.

## Revisiting breakpoints over time

Breakpoints chosen for a project's content at one point aren't permanent, if the content, layout, or component library changes substantially, the breakpoints that made sense before may no longer match where things actually break. Treat an established breakpoint as a decision to preserve by default, not a value to leave unexamined forever once circumstances that justified it have genuinely changed.
