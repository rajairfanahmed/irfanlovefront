# Motion Performance and Accessibility

Purpose: keeping animation smooth and safe. These aren't a final pass applied after motion is designed, they're part of deciding whether and how a given animation ships at all. Coordinate specific frame-rate and bundle-size budgets with Performance Optimization and detailed conformance criteria with the accessibility skill; this file is what the animations-motion-design skill itself is responsible for getting right.

## Animate cheap properties

Animate `transform` and `opacity` wherever possible, these can run on the compositor without triggering layout recalculation or repaint of surrounding content. Animating properties like `width`, `height`, `top`, `left`, or anything that affects document flow forces the browser to recalculate layout on every frame, which is a common and avoidable source of visible jank, especially on lower-powered devices. When a layout-affecting property genuinely needs to change, look for a transform-based equivalent first (scaling instead of resizing, translating instead of repositioning) before accepting the performance cost.

## Avoiding jank under real conditions

Smooth on a high-end development machine doesn't guarantee smooth on the actual range of devices real users have, test or at least reason about behavior on a mid-range or lower-powered device, not just the device the work is being done on. Avoid animating many elements simultaneously and independently when a single, shared animation (animating a parent, or using a staggered but coordinated sequence) would produce a similar visual effect at a fraction of the cost.

## GPU acceleration and its limits

Promoting an element to its own compositing layer (which transform and opacity animations often do automatically) can improve performance, but promoting too many elements has its own memory and performance cost. Don't apply acceleration hints to elements that aren't actually animating, and don't assume every animation benefits equally, measure rather than applying a blanket optimization.

## Measuring instead of assuming

Where tooling allows, check actual frame rate during an animation rather than judging smoothness by eye alone, a slightly uneven animation can be hard to perceive consciously while still being measurably below a smooth frame rate. State plainly whether an animation's performance was actually measured or only reasoned about.

## Respecting reduced motion by default

Every animation needs a defined behavior under the user's reduced-motion preference (`prefers-reduced-motion`), not just the large or obviously heavy ones. For most decorative and transitional motion, the reduced-motion version should remove the movement entirely (an instant state change, a simple opacity crossfade at most), not merely a shorter or smaller version of the same motion, reduced motion is about removing vestibular triggers, not just making them brief.

## What reduced motion should not remove

Reduced motion affects movement, not functionality or feedback. A loading indicator that communicates real, necessary information should still communicate it, just without extra decorative flourish layered onto it. A state change should still be visually apparent, through a non-motion cue like color or opacity if the transition itself is removed. Never let a reduced-motion preference result in a less informative or less usable interface, only a calmer one.

## Vestibular disorders and motion sickness

Certain kinds of motion are disproportionately likely to cause genuine physical discomfort for vestibular-sensitive users: large-scale movement across the viewport, parallax and other scroll-linked effects where visual motion doesn't match the user's actual scroll input, simulated 3D rotation or zoom, and rapid or repeated motion. Treat these categories with extra caution regardless of the reduced-motion setting, and make sure their reduced-motion alternative genuinely removes the triggering movement rather than just softening it.

## Seizure and flashing-content risk

Avoid any flashing or rapidly alternating high-contrast content, general guidance is no more than three flashes within any one-second period, and ideally well under that for anything covering a significant portion of the viewport. This is a hard safety constraint, not a stylistic judgment call, when in doubt, don't include rapid flashing content at all rather than trying to stay just under a threshold.

## Providing control over auto-playing motion

Any motion that plays automatically and continues for more than a few seconds (an auto-advancing carousel, a looping background animation, an auto-playing video with motion) needs a way for the user to pause, stop, or hide it. This is a baseline usability and accessibility requirement, not an optional enhancement, coordinate the specific conformance criteria with the accessibility skill.

## Don't convey information through motion alone

If an animation is the only way a piece of information is communicated (an item is new because it slides in, a value is increasing because a number animates upward with no other indication), make sure a user with motion disabled, or anyone who simply missed the animation because it happened quickly, still gets that information some other way, a label, an icon, a static visual difference.

## Interruption and user control

Motion should be interruptible by further user input rather than forcing the user to wait for it to finish, clicking through a transition should feel responsive, not blocked. Scroll and gesture-driven motion especially should never override or lag behind the user's actual input, see `scroll-triggered-and-interactive-motion.md` for the specific failure modes to avoid there.

## Verifying motion accessibility and performance

What can be checked from code: whether a reduced-motion branch exists for a given animation, whether the animated properties are the cheap, compositor-friendly ones, whether an auto-playing animation has a pause control in the markup. What needs an actual render or device to confirm: real frame rate under load, whether the reduced-motion version actually feels calmer in practice and not just technically present, and whether an interruption genuinely feels responsive. State plainly which of these was actually checked, and don't report a motion feature as accessible or performant without having verified the category that claim depends on.
