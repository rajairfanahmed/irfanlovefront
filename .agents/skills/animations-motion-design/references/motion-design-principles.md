# Motion Design Principles

Purpose: what motion is for, how much of it a given product should actually have, and the timing and easing vocabulary to build specific animations from. This is the reasoning layer; specific patterns live in `animation-patterns-catalog.md`.

## What motion is actually for

Good motion does one or more of: clarifies a relationship between two states (where did this element come from, where did it go), directs attention to something the user needs to notice, confirms that an action registered, or eases a transition that would otherwise feel abrupt enough to be disorienting. Motion that does none of these is decoration, which isn't automatically wrong, but it's held to a much lower priority than motion that's actually functional, and it's the first thing to cut under performance, accessibility, or time pressure.

## Restraint versus expressive motion

Both are legitimate, matched to the product the same way restraint and expressiveness are matched to visual design more broadly. A data-dense tool or a financial product usually earns more from restraint, quick, quiet, functional transitions that don't call attention to themselves. A brand-forward marketing site or a creative tool can earn more from expressive, characterful motion. State which direction this product calls for early, informed by the visual direction already established, so individual animation decisions can be checked against it instead of each being decided in isolation.

## Timing

Duration should match the size and significance of what's changing: a small UI transition (a hover state, a toggle) usually reads best in the range of 100 to 200 milliseconds; a larger transition (a panel opening, a page-level change) usually needs more, often 200 to 400 milliseconds, to feel smooth rather than abrupt, without dragging on long enough to feel slow. These ranges are a starting point to reason from, not a fixed rule, the right duration is whatever reads as natural for that specific change in this specific product, confirmed by actually seeing it, not just picking a number.

## Easing

Easing describes how an animation's speed changes over its duration, and it communicates something independent of duration. An ease-out curve (fast start, slow finish) generally suits something entering or responding to user input, it feels responsive. An ease-in curve (slow start, fast finish) generally suits something leaving. A linear curve (constant speed) rarely feels natural for UI motion, it tends to read as mechanical, and is usually reserved for continuous, non-eventful motion like a progress indicator. Pick a small, consistent set of easing curves for the whole product rather than tuning each animation's curve independently.

## Motion hierarchy

Not everything on screen should move with equal weight at the same time. The element most central to what just happened should carry the clearest motion; supporting elements should move more subtly or not at all. If several things animate simultaneously with equal prominence, none of them actually draws attention, the same principle that governs visual hierarchy applies to motion.

## Consistency of motion language

The same kind of transition (an element entering, a panel opening, a destructive action's feedback) should move the same way everywhere it happens in the product, same rough duration, same easing family, same directional logic. Inconsistent motion is harder to notice consciously than inconsistent color or type, but it still undermines the sense that the product is one coherent system rather than several components animated independently.

## When not to animate

Skip motion when it would slow down a frequent, repetitive action (an experienced user doing the same thing many times a day doesn't want a flourish on each repetition), when it would delay a user from seeing information they need immediately, when the honest justification is purely decorative and nothing in the product's character calls for that level of decoration, or when it would convey information through motion alone with no non-motion equivalent (see accessibility considerations in `motion-performance-and-accessibility.md`).

## Avoiding gratuitous or trend-following motion

Don't reach for a cursor-follow effect, a forced parallax section, a default page transition, or an entrance animation on every element as a starting point just because they're common in current web design. Each of these can be the right choice for a specific product, but only when the product's character and purpose actually call for it, not as a default applied regardless of context. A functional tool that gets an expressive marketing site's motion treatment usually ends up feeling slower and less trustworthy, not more polished.

## Common motion failures

Motion with no clear purpose beyond decoration, inconsistent timing and easing across similar transitions, animation that can't be interrupted and forces the user to wait it out, motion so frequent or prominent it becomes fatiguing on repeated use, and motion that's the only way a piece of information is communicated, with nothing for someone who has it disabled. Each of these is checked more specifically in `motion-performance-and-accessibility.md`, this is the conceptual list to watch for while the motion is still being designed, not just at the end.
