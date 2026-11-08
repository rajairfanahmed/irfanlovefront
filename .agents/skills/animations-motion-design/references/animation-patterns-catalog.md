# Animation Patterns Catalog

Purpose: a working reference of established animation patterns and what each one is actually good for. This is a catalog to draw from, not a checklist to apply. Appearing here doesn't make a pattern appropriate for a given moment in a given product, check it against the principles in `motion-design-principles.md` first.

Each entry covers: what it communicates, typical timing, interruption behavior, and its reduced-motion alternative. Scroll-linked and gesture-driven variants of several of these are covered in more depth in `scroll-triggered-and-interactive-motion.md`.

## Entrance and exit transitions

Communicates: an element is appearing or leaving, and roughly where it's coming from or going to. Typical timing: short, 150 to 300 milliseconds, with exit usually a touch faster than entrance. Interruption: a rapid show-hide sequence (a tooltip flickering, a menu toggled quickly) should settle into the final correct state rather than stacking or visibly fighting itself. Reduced motion: a simple opacity crossfade or an instant appearance, drop the directional movement.

## State-change transitions

Communicates: a toggle, an expand or collapse, a value changing. Typical timing: 150 to 250 milliseconds for a simple toggle, slightly longer for an expand or collapse of a larger region since more visual area is changing. Interruption: toggling rapidly back and forth should track the current intended state, not queue up a sequence of past toggles. Reduced motion: an instant state change with no transition, or a brief opacity change in place of a directional reveal.

## Page and route transitions

Communicates: a navigation has occurred, and optionally a spatial or hierarchical relationship between the old and new view. Typical timing: 200 to 400 milliseconds, long enough to feel intentional, short enough not to delay the user from reading the new content. Interruption: a second navigation triggered before the first transition finishes should cancel cleanly to the new destination, not play both in sequence. Reduced motion: an instant swap or a simple crossfade, drop directional slides or spatial zooms. Only use a route transition when it actually clarifies something about the navigation's structure, not as a default added because the framework or library makes it available.

## Micro-interactions

Communicates: immediate acknowledgment that an interactive element registered input (a button press, a toggle flip, a like button filling in). Typical timing: very short, 100 to 150 milliseconds, these need to feel instantaneous, not deliberate. Interruption: rapid repeated interaction should never queue or stack, each new input should reset and restart the feedback. Reduced motion: keep the state change, drop any bounce, scale, or elastic flourish, a plain color or opacity change still confirms the input registered.

## Loading and progress indication

Communicates: the system is working, and where possible, how much longer. A spinner communicates indeterminate progress; a progress bar communicates determinate, measurable progress, use whichever actually matches what's known, don't show a progress bar with a fake or inaccurate fill just to seem more informative than a spinner. Typical timing: continuous for the duration of the wait, but only show a loading indicator at all if the wait exceeds roughly 300 to 500 milliseconds, anything shorter and the indicator itself becomes the dominant visual event. Interruption: a cancelable operation needs its loading state to disappear cleanly on cancellation. Reduced motion: a continuously spinning indicator is usually fine to keep (it conveys real, necessary information), but avoid additional decorative motion layered on top of it.

## Skeleton loading

Communicates: content is about to appear, and roughly what shape and layout it will take, reducing the perceived jump when real content replaces the placeholder. Typical timing: shown for the actual duration of the load, not a fixed decorative duration. Interruption: if the real content loads faster than the skeleton's own subtle shimmer animation completes a cycle, replace it immediately rather than waiting for the shimmer to finish. Reduced motion: keep the static skeleton shape, drop the shimmer or pulse animation.

## Attention-directing animation

Communicates: something changed that the user hasn't yet seen (a new notification, an updated value). Typical timing: brief and limited in repetition, a pulse or a short bounce that happens once or a small, bounded number of times, never an indefinite loop. Interruption: should stop immediately once the user has actually seen or interacted with the thing it was drawing attention to. Reduced motion: a static visual indicator (a badge, a color change) with no motion at all, since motion used purely to attract attention is exactly the category most likely to cause discomfort for a motion-sensitive user.

## List and collection changes

Communicates: an item was added, removed, or reordered within a visible list, helping the user track what changed rather than the list appearing to jump or shuffle unexplainably. Typical timing: 150 to 300 milliseconds depending on how much of the list is affected. Interruption: rapid successive changes (several items added or removed quickly) should settle to the final correct layout rather than animating every intermediate state in full. Reduced motion: an instant re-layout, or a brief opacity change on the specific item that changed, without animating every other item's position shift.

## Modal and overlay open and close

Communicates: a focus-managed overlay (see the ui-components skill's focus and feedback reference for the accessibility requirements that go with this) is entering or leaving the user's immediate context. Typical timing: 200 to 300 milliseconds, paired with any backdrop fade. Interruption: closing before the opening animation finishes should feel immediate, not forced to complete the opening sequence first. Reduced motion: an instant appearance or a simple crossfade, drop any scale or slide-in motion, and keep the focus-management behavior identical regardless of the reduced-motion setting, motion preference affects visual movement, not accessibility behavior.

## Empty-to-populated transitions

Communicates: a section that was showing an empty state now has real content, helping the change register rather than the content appearing to simply replace the empty state with no acknowledgment. Typical timing: a brief crossfade, 150 to 250 milliseconds. Reduced motion: an instant swap.

## Data visualization transitions

Communicates: how a chart or graph's values changed between states, helping a viewer track specific data points through the change rather than seeing two unrelated static images. Typical timing: 300 to 600 milliseconds depending on how much the data has changed, data transitions often benefit from being a bit longer than UI transitions since there's more for the eye to track. Reduced motion: an instant value update, since smooth transitions between large value changes can be a specific vestibular trigger for some users, treat this category with extra caution.

## Parallax and layered scroll effects

Covered in detail in `scroll-triggered-and-interactive-motion.md`. Note here only because it's one of the most overused patterns in current web design, the same caution from `motion-design-principles.md` about trend-following motion applies especially strongly to this one.

## Cursor-following and pointer-reactive effects

An element that moves, glows, or reacts continuously based on pointer position. This is rarely functional, it's almost always purely decorative, and it carries a real performance cost (continuous reflow or repaint tied to pointer movement) and a real accessibility cost (no equivalent for touch or keyboard users, and no meaningful way to express it under a reduced-motion preference). Treat this as something that needs an unusually strong, specific justification tied to the product's actual character, not something to reach for as an easy way to seem more interactive.
