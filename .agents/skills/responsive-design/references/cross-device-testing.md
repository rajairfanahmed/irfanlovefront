# Cross-Device Testing

Purpose: how to actually check that responsive decisions hold up, and how to be honest about the difference between what was reasoned through and what was actually observed. Responsive bugs are disproportionately found in the space between breakpoints and at the extremes of the supported range, not at the exact widths a design was checked against, testing needs to cover that space deliberately.

## What can be checked from code and reasoning alone

Whether breakpoints are defined consistently and referenced from a shared source rather than redefined per component, whether touch targets meet the stated minimum size in the markup and styles, whether images and media have defined aspect-ratio handling, whether a layout's CSS uses techniques (flexible units, `clamp()`, intrinsic sizing) that should hold across a range rather than fixed values that will only work at one width. This is useful, real verification, but it confirms the implementation matches the intent, not that the intent actually produces a usable result.

## What needs a rendered viewport, real or emulated

Whether a layout actually looks and reads correctly at a given width needs the page rendered at that width, through a browser's device emulation at minimum, ideally a real device for anything load-bearing. Check at the defined breakpoints, but just as importantly at the widths between and around them, a layout that looks fine exactly at a breakpoint and immediately before the next one can still have an awkward middle range nobody checked.

## Checking the actual extremes

Test at the narrowest width the project claims to support (around 320px unless a different floor was explicitly set) and at a large or ultrawide width, not just a common mid-range size. Content that looks comfortable at a typical laptop width can overflow, clip, or look sparse and unintentional at the real extremes of the supported range.

## Real content, not placeholder content

Verify with the actual length and variability of real content wherever possible, a short placeholder heading and a long, real one behave very differently in a responsive layout, and the gap between them is exactly where truncation, wrapping, and overflow bugs hide. A responsive check performed only against tidy placeholder content has not actually verified the responsive behavior the real product will show. This matters especially for translated or localized content, see `responsive-typography-and-media.md`.

## Touch and input testing

Confirm touch target sizing and hover-dependent interactions from `mobile-first-design.md` on an actual touch device or a faithful touch simulation, not just by reading the CSS, a target that measures correctly in the stylesheet can still fail in practice if a sibling element's stacking or padding eats into it unexpectedly. Confirm virtual keyboard behavior on an actual mobile device or device emulator with the keyboard genuinely invoked, this is difficult to verify from code alone.

## Zoom and text-resize testing

Check the product at an increased browser zoom level and at an increased OS or browser text-size setting, both are real, common ways users adjust the page, and bugs here often don't show up at default zoom even across every breakpoint. This is a specific, checkable test, not a theoretical concern, run it rather than assuming fluid or relative units automatically handle it correctly. Never treat a disabled zoom or resize behavior as an acceptable fix, that removes functionality the platform already provides.

## Orientation testing

Where orientation handling matters for this project (see `fluid-layouts-and-breakpoints.md`), verify by actually rotating a device or emulator mid-session, not just by checking portrait and landscape as two independent static states. A layout that renders correctly in each orientation on its own can still lose state or break visually during the transition between them.

## Separating what was checked from what wasn't

State plainly which of the above was actually performed (a real device, a browser's device emulation, a specific zoom or text-size test) and which responsive requirements are stated but unverified due to tooling limits. A claim that a layout "works responsively" without saying what was actually checked is not a verified result, and reporting it as one misleads whoever relies on that assessment next.

## Regression checks after a responsive change

When changing responsive behavior for one part of the product, check neighboring or related areas that share the same breakpoints, tokens, or components, a change intended to fix one layout's mobile behavior can quietly shift another layout that depended on the same breakpoint value or shared component behaving a specific way.
