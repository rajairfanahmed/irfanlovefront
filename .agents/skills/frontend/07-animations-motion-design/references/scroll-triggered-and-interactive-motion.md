# Scroll-Triggered and Interactive Motion

## Scroll-triggered behavior

Use scroll triggers for narrative emphasis or staged content only when they help users understand the page. Keep content available without requiring a precise scroll gesture. Do not pin large sections for long periods without a clear reason.

## Scroll control

Native scrolling is the default. Smooth-scroll libraries can change keyboard, anchor, browser-history, reduced-motion, and touch behavior. Add one only after testing that the product gains enough value to justify the added complexity.

## Interactive motion

Tie animation to clear state changes such as open, close, selected, expanded, dragged, or completed. Ensure interruption and reversal are handled. Avoid hover-only motion for essential information.

## Cleanup

Register and clean up observers, timelines, listeners, and animation contexts when components mount and unmount. Avoid stale references and animations that continue after navigation.

## Verification

Test trackpads, mouse wheels, touch scrolling, keyboard navigation, anchor links, reduced motion, and browser back navigation.
