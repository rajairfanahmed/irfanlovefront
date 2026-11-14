# Motion Performance and Accessibility

## Rendering cost

Prefer transforms and opacity when they can express the movement. Avoid animating layout-heavy properties across many elements. Use browser performance tools to diagnose long tasks, paint cost, dropped frames, and scroll jank.

## Reduced motion

Read the user's `prefers-reduced-motion` preference. Remove or substantially reduce nonessential movement, parallax, scroll smoothing, large zooming, and repeated motion. Keep status and focus feedback understandable.

## Interaction safety

Motion must not block input, delay a critical action, cause content to disappear before it can be read, or create unexpected focus movement. Ensure animation can be interrupted when the user navigates away.

## Third-party libraries

Use the dependency already present where practical. Evaluate package size, tree-shaking, lifecycle cleanup, SSR compatibility, license, and maintenance status before adding a new library.

## Verification

Test reduced motion, a low-powered device profile, keyboard use, touch input, and route changes. Measure rather than assuming an animation is inexpensive.
