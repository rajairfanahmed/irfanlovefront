# Scroll-Triggered and Interactive Motion

Purpose: motion that's tied to a continuous user input, scrolling, dragging, or another gesture, rather than a single discrete trigger. This category needs extra care because the user is actively in control of the input driving it, and the animation has to respect that control rather than fight or override it.

## Scroll-triggered reveal

An element animates in (typically a fade, a slight rise, or both) as it enters the viewport while scrolling. This is justified when it genuinely helps pace a long page or draw attention to content the user might otherwise skim past too quickly, and it becomes a problem when it's applied uniformly to every section of a page, which just makes the page feel slower to read without adding any real communicative value. If every section fades in identically, the pattern stops meaning anything and starts just delaying content the user already scrolled down to see.

## Deciding whether a reveal earns its place

Ask whether the content genuinely benefits from a deliberate introduction, a key statement, a significant visual, a section transition that's meaningfully different from what came before, versus content that's just the next item in a list the user is actively scrolling through to read. Apply reveal animation selectively to the former; let the latter appear immediately so reading flow isn't interrupted.

## Parallax

Layered elements moving at different rates during scroll, typically to create a sense of depth. Parallax carries a real performance cost (multiple layers recalculating position continuously during scroll) and a real risk of vestibular discomfort for sensitive users, mismatched visual motion relative to actual scroll input is one of the more commonly reported triggers. Use it only where the product's character specifically calls for an immersive, expressive feel and the performance and accessibility costs have been accounted for, never as a default hero-section treatment. Always provide a reduced-motion fallback that removes the differential movement entirely, not just a reduced version of it.

## Scroll-jacking

Overriding the browser's native scroll behavior (changing its speed, redirecting it, or hijacking it to drive a custom animation sequence instead of normal scrolling) takes control away from the user and is one of the most reliable ways to make a page feel broken rather than polished, it also tends to break badly with trackpads, touch scrolling, and assistive technology. Avoid it. If a scroll-driven narrative sequence is genuinely the right call for a specific, deliberate experience, it needs an exceptionally strong justification and a carefully built escape hatch (a way to skip or scroll normally), not just smooth-feeling custom scroll physics.

## Sticky and pinned elements with scroll-linked animation

A sticky header that gains a shadow or changes size once the user scrolls past a point, or a pinned element whose internal content changes as the user scrolls through an associated section, are more restrained, generally safer uses of scroll-linked motion than parallax or full scroll-jacking. Confirm the sticky or pinned element's own transition is still subject to reduced-motion preferences, and confirm it doesn't start covering content the user is trying to read once it becomes sticky.

## Drag interactions

When an element can be dragged (reordering a list, resizing a panel, swiping to dismiss), the motion during the drag should track the pointer or touch input directly and immediately, with no added easing delay while the user is actively dragging, easing belongs to the settle animation after release, not to the drag itself. Provide clear visual feedback for what will happen if the drag is released at its current position before the user commits to it.

## Gesture-driven motion

A swipe to reveal an action, a pull to refresh, and similar gesture patterns need a motion response that makes the gesture's progress and threshold clear, the user should be able to see, as they're mid-gesture, roughly how far they need to go before the action commits, and be able to cancel by reversing the gesture before that threshold. Always provide a non-gesture alternative (a visible button, a menu item) for the same action, a gesture should never be the only way to accomplish something, both for accessibility and because gestures are easy to trigger accidentally or fail to discover at all.

## Hover-triggered motion

A hover-revealed or hover-animated element has no direct equivalent on touch, see the responsive-design skill's input-adaptation guidance for the general requirement; the motion-specific concern here is that a hover transition's timing should feel responsive (short duration, quick ease-out) since it's tied to a lightweight, exploratory interaction, not treated with the same weight as a deliberate click or tap.

## Intersection-based triggering

The common technique for scroll-triggered reveals is observing when an element enters the viewport and triggering its animation at that point, rather than calculating animation state continuously from the scroll position on every scroll event, which is both a performance improvement and generally produces a cleaner, less jittery result. Prefer this over continuous scroll-position calculation unless the effect genuinely needs to track scroll position smoothly and continuously, as parallax does.

## Interrupting scroll-linked motion

If a user scrolls quickly past an element mid-animation, let the animation either complete quickly or cut to its final state rather than continuing to play out at its original pace while the user has already moved on and is looking at something further down the page. An animation that's still playing for content the user can no longer see is wasted motion and wasted performance cost.

## Reduced motion for scroll and gesture-driven effects specifically

Every pattern in this file needs an explicit reduced-motion behavior, and for this category that usually means removing the effect's motion entirely rather than offering a toned-down version of it, content should simply appear or update directly, parallax differential movement should flatten to a single layer moving at scroll speed, scroll-jacking should not be implemented at all when reduced motion is requested. This category carries a disproportionate share of real vestibular triggers, treat the reduced-motion requirement here as stricter than for a simple fade or scale transition elsewhere in the product.
