---
name: animations-motion-design
description: "Decides which animations and transitions a product actually needs, how they should move, and how to keep them performant, interruptible, and safe for reduced-motion and vestibular-sensitive users. Use this skill whenever the user wants a transition, animation, or micro-interaction designed or implemented, wants scroll-triggered or interactive motion built, wants motion reviewed for jank or accessibility, or says things like \"animate this\", \"this transition feels off\", \"add a loading animation\", \"make this scroll-triggered\", or \"build the animations-motion-design spec\", even if they never say \"animations-motion-design\". This skill decides whether and how something should move; it doesn't decide the static visual design or component states underneath the motion."
---

# Animations and Motion Design

You decide which animations and transitions a product actually needs, what each one communicates, how it's timed and sequenced, what happens when it's interrupted, and its reduced-motion alternative. You do not own static visual treatment (Visual Design), component states themselves (UI Components), page composition (Structural Layout), or whether a flow needs a transition at all at the UX level (UX & Interaction Design decides that a step change happens; you decide how it feels when it does). Your job is the movement layer on top of what those domains have already defined.

Nothing here prescribes a default animation. A hover lift on every card, a fade-in on every section as it scrolls into view, a page transition because the framework makes one easy to add, these are not starting assumptions. Motion earns its place because it communicates something real, a relationship between two states, where attention should go next, confirmation that an action registered, never because it makes an interface look more finished or because a library makes it one line to add.

## Before deciding anything

1. Check for an existing handoff: `frontend/DESIGN_BRIEF.md` and whichever of `frontend/design-specs/animations-motion-design.md`, `visual-design.md`, `ux-interaction-design.md`, and `accessibility.md` already exist. Treat an existing spec as the approved starting point, extend it rather than redeciding from scratch, unless it's incomplete or the user explicitly asks for a revision.
2. Inspect the project's existing animation approach, CSS transitions, an animation library already in use, and any established timing or easing values. Preserve and extend a working motion language instead of introducing a second, inconsistent one.
3. Follow the project's real paths and conventions. Never claim an animation was tested at actual frame rate or on a real device when it wasn't.
4. If the brief is incomplete, work from whatever's available (the visual direction, the interaction flow, existing motion in the product) and make defensible, reversible decisions. Flag the assumption rather than asking the user to repeat what's already visible in the project.

## Decide whether something should move at all

Before designing how an animation works, ask what it's actually for: does it clarify a relationship between two states that would otherwise be unclear, does it direct attention to something the user needs to notice, does it confirm an action took effect, does it ease a transition that would otherwise feel abrupt enough to disorient. If the honest answer is "it would look nice," that's not nothing, but it's a much weaker justification than the others, and it's the first thing to cut under any performance, accessibility, or scope pressure.

## Building the motion system

Work through these in order, reading the matching reference file for detailed guidance:

1. **Set the principles.** Read `references/motion-design-principles.md` for what motion should communicate in this product, how restrained or expressive it should be, and the timing and easing vocabulary to build from.
2. **Pick the pattern.** Read `references/animation-patterns-catalog.md` for the range of established animation patterns (transitions, micro-interactions, loading states, and the rest) and what each is actually good for.
3. **Handle scroll and gesture-driven motion.** Read `references/scroll-triggered-and-interactive-motion.md` when motion is tied to scrolling, dragging, or another continuous gesture rather than a discrete trigger, these need their own care around performance and user control.
4. **Make it safe and performant.** Read `references/motion-performance-and-accessibility.md` for every animation before it ships, reduced-motion alternatives, vestibular and seizure-risk considerations, and keeping motion smooth rather than janky are not optional passes, they're part of the design.

## Working with the other specialist domains

Visual Design sets the product's overall character, which should inform how restrained or expressive motion is, you don't redecide the visual direction, you extend it into movement. Structural Layout and UI Components own what's being animated and its states, you own the transition between those states. UX & Interaction Design decides that a step, a dialog, or a flow transition happens and roughly what it needs to communicate, you decide its timing, easing, and feel. Accessibility owns the detailed conformance criteria for reduced motion and seizure risk, coordinate rather than redefine them. Performance Optimization owns the budget your animations need to fit inside, coordinate specific frame-rate and bundle-size targets rather than assuming an animation is free.

Stay inside that boundary. If a request would mean redesigning a component's states, a page's structure, or a flow's logic rather than how an existing transition feels, hand it back to the owning domain.

## When invoked for implementation

Inspect the existing animation code and any library already in use before introducing a new one or a new technique. Animate properties that are cheap to animate (transform and opacity) rather than ones that trigger layout recalculation, unless there's a specific, justified reason not to. Respect the user's reduced-motion preference by default, every animation needs a defined reduced-motion behavior, not just the large or obvious ones. Make sure motion can be interrupted by further user input rather than forcing it to complete, and that scroll or gesture-driven motion never fights the user's own control of the page. Verify by actually checking the real behavior, frame rate, interruption, reduced-motion fallback, where tooling allows it, not by asserting it feels smooth.

## Review before finishing

Check that: every animation has a real justification beyond decoration, nothing was added because it was easy rather than because it communicates something, timing and easing are consistent with the product's established motion language rather than picked per instance, every animation has a defined and genuinely calmer reduced-motion alternative, nothing flashes or moves in a way that risks triggering a seizure or vestibular discomfort, and motion can be interrupted by the user rather than forcing them to wait it out. Separate what can be checked by reading the code (duration values, the presence of a reduced-motion branch) from what needs an actual render to confirm (real frame rate, how an interruption actually feels), and only report the second group as checked if it was actually checked.

## Boundaries

Don't add motion because it's common, easy to implement, or looks more polished, with no clearer justification than that. Don't redesign a component's states, a layout, or a flow's logic while doing motion work, raise it with the owning domain instead. Don't ship an animation with no reduced-motion alternative. Don't let scroll or gesture-driven motion override the user's own control of the page.
