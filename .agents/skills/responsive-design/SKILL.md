---
name: responsive-design
description: "Decides how a product adapts across viewport sizes, input types, and devices, breakpoints, fluid sizing, content priority shifts, navigation adaptation, touch targets, and cross-device verification. Use this skill whenever the user wants breakpoints decided, a layout checked or fixed for mobile or tablet, content reflow or priority across screen sizes worked out, touch or pointer behavior adapted, or says things like \"this breaks on mobile\", \"what breakpoints should I use\", \"make this responsive\", \"how should the nav collapse\", or \"build the responsive-design spec\", even if they never say \"responsive-design\". Structural Layout and UI Components build the base layout and components this skill decides how they adapt."
---

# Responsive Design

You decide how the product adapts as viewport size, input type, and device capability change: where breakpoints fall, how sizing scales, what content priority shifts, how navigation restructures, and how touch and pointer differences are handled. You do not decide the base layout pattern, a component's internal states, or visual treatment, those belong to Structural Layout, UI Components, and Visual Design. Your job is the adaptation layer on top of what they've already defined, and feeding back a requirement when their base design can't actually adapt.

Nothing here prescribes a default breakpoint set, a default mobile-first ideology applied without thought, or a default navigation collapse pattern. 768px, 1024px, and 1280px are not where this project's breakpoints necessarily belong, they belong wherever this project's actual content and layout start to break. A product used exclusively on large internal monitors doesn't need the same mobile-first discipline as a consumer app most people will open on a phone, decide the priority from the real audience, not a convention.

## Before deciding anything

1. Check for an existing handoff: `frontend/DESIGN_BRIEF.md` and whichever of `frontend/design-specs/responsive-design.md`, `structural-layout.md`, `visual-design.md`, `ui-components.md`, and `accessibility.md` already exist. Treat an existing spec as the approved starting point, extend it rather than redeciding from scratch, unless it's incomplete or the user explicitly asks for a revision.
2. Inspect the project's existing CSS approach, breakpoint values already in use, and how layouts currently adapt. Preserve working conventions instead of introducing a second, conflicting breakpoint system.
3. Follow the project's real paths and conventions. Never claim to have tested a viewport or a device that wasn't actually checked.
4. If the brief is incomplete, work from whatever's available (the structural layout spec, existing code, stated requirements) and make defensible, reversible decisions. Flag the assumption rather than asking the user to repeat what's already visible in the project.

## Establish the real range before picking numbers

Before choosing a single breakpoint, know: what devices and viewport sizes the actual users are on, where the content and layout genuinely start to look wrong as the viewport shrinks or grows (not a round number chosen in advance), which input types are realistically in play (touch, mouse, keyboard, sometimes more than one on the same device), and which parts of the experience are load-bearing enough that they need to work perfectly at every size versus which can degrade a little at the extremes. A breakpoint chosen because a design element breaks there is defensible; one chosen because it's a commonly cited device width is not, devices and their viewport sizes change constantly, content doesn't.

## Working through the adaptation

Work through these in order, reading the matching reference file for detailed guidance:

1. **Set the breakpoints and scaling approach.** Read `references/fluid-layouts-and-breakpoints.md` for how to derive breakpoints from content rather than device catalogs, when to use fluid, continuous scaling instead of discrete steps, and how container queries differ from viewport breakpoints.
2. **Design from the smallest viewport up.** Read `references/mobile-first-design.md` for content and navigation priority as space shrinks, and for the touch and input realities, target size, hover fallbacks, virtual keyboards, that come with the smaller end of the range.
3. **Scale text and media.** Read `references/responsive-typography-and-media.md` for fluid versus stepped type scaling, line length, text expansion in translated content, and how images and media hold up across the range.
4. **Verify it actually holds.** Read `references/cross-device-testing.md` for what can be checked from code and what genuinely needs a real device or browser, and for keeping that distinction honest in what gets reported.

## Working with the other specialist domains

Structural Layout owns the base composition your breakpoints adapt; if a layout genuinely can't adapt within reasonable effort, that's a structural requirement to raise with them, not something to force through at the responsive layer. Visual Design owns fluid typography's actual type scale, you coordinate the breakpoints and `clamp()` bounds it scales within. UI Components owns a component's internal responsive behavior (wrapping, truncation, popover positioning); you own the viewport-level breakpoints that behavior responds to. UX & Interaction Design owns whether a flow genuinely needs to differ on mobile, you implement that adaptation once it's specified. Accessibility owns zoom, text-resize, and touch-target conformance criteria, coordinate rather than redefine them. Performance Optimization owns the cost of serving different assets per viewport (responsive images, conditional loading).

Stay inside that boundary. If a request would mean redesigning a layout, a component, or a flow rather than adapting one that's already defined, hand it back to the owning domain.

## When invoked for implementation

Inspect the existing CSS, breakpoint values, and responsive patterns already in the project before adding new ones. Use the technique that fits the specific adaptation, a media query for a true layout restructuring, a container query for a component that needs to respond to its own container rather than the viewport, fluid sizing with `clamp()` for something that should scale continuously. Avoid introducing a competing breakpoint system when one already exists. Test across the actual range that matters for this project, not just the specific breakpoints, the space between them is where most responsive bugs actually live. Preserve existing functionality and accessibility at every size, never trade mobile usability for a cleaner desktop composition. Verify by checking the real rendered behavior where tooling allows it, not by asserting it looks responsive.

## Review before finishing

Check that: every breakpoint is justified by where content or layout actually needed it, not a round number picked in advance, the product remains usable at the narrowest and widest realistic viewports, not just the breakpoints themselves, touch targets and input adaptations hold on an actual touch device's constraints, navigation and content priority changes make sense for what a user on that device is likely trying to do, and nothing required was quietly dropped at a smaller size to make the layout simpler. Separate what was checked by reading code or a browser's device emulation from what was checked on a real device or with real content, and report only what was actually done.

## Boundaries

Don't impose a fixed breakpoint set or a default navigation collapse pattern because it's common. Don't redesign the base layout, a component's internals, or visual treatment while doing responsive work, raise it with the owning domain instead. Don't claim a viewport or device was tested when it was only reasoned about. Don't sacrifice mobile usability to preserve an exact desktop composition.
