# Mobile-First Design

Purpose: how to design from the smallest relevant viewport outward, what content and navigation should actually change as space shrinks, and how to handle the input realities (mostly touch) that come with that end of the range. Mobile-first is both a sizing strategy and an input strategy, treated together here because the two are tightly linked in practice, a narrow viewport is usually also a touch viewport.

## Mobile-first as a technique, not an ideology

Writing base styles for the smallest relevant viewport and layering on complexity as space increases, rather than the reverse, is usually the more robust technique: it forces content priority decisions up front and avoids accidentally depending on space that might not be there. But it's a technique, not a requirement for every project. A product whose real users are overwhelmingly on large screens (an internal tool used on desktop monitors, a kiosk display) can reasonably design desktop-first and add a mobile adaptation as the exception, if mobile use is genuinely rare and a full mobile-first rebuild isn't justified by actual usage. Decide based on where the real usage is, not as a reflexive best practice applied regardless of the project.

## Part 1: Content and navigation priority

### Reprioritizing, not just shrinking

Adapting a layout for a smaller viewport is rarely just making everything proportionally smaller, it's deciding what matters most when there's less room and giving that priority, while the rest reflows, collapses, or moves rather than competing equally for the same shrunken space. Go back to the content priority already established (by Structural Layout's composition work, or by this project's own stated goals) and let the smaller viewport's layout reflect that same priority more aggressively, not abandon it.

### What's safe to collapse or defer

Secondary information, supplementary navigation, and content that supports rather than drives the user's main task on a given screen are the usual candidates for collapsing behind a disclosure, moving later in the reading order, or being deferred to a secondary screen at smaller sizes. Decide this per page based on what that page's actual primary task is, not as a blanket rule applied to every "secondary-looking" element regardless of context.

### What should never be hidden to simplify the mobile view

Required functionality, not just supplementary content, stays available at every supported viewport size. If a feature exists on desktop, a mobile user needs a way to reach it too, even if that way is less immediately visible (behind a menu, on a secondary screen) than it is on a wider layout. Removing a feature entirely on small viewports because it was hard to fit is a product regression, not a responsive design decision.

### Navigation adaptation

Decide how primary navigation restructures as space shrinks, based on how many items it has, how often each is used, and how much space the rest of the page's content needs. A small number of frequently used destinations can often stay visible (a bottom tab bar, a condensed horizontal row); a larger or less frequently used set is usually better collapsed behind a disclosed menu. Don't default to a hamburger menu for every project regardless of how much navigation actually exists, for a small set of items, keeping them visible is often both more usable and barely more expensive in space than a collapsed icon.

### Reflow versus restructuring

Some content just needs to reflow (text rewrapping, a multi-column grid reducing its column count) without changing its fundamental relationship to the rest of the page. Other content needs to genuinely restructure (a sidebar becoming a bottom sheet, a table becoming a stacked card list, see `fluid-layouts-and-breakpoints.md` for table-specific techniques). Reflow is usually cheap and should be the default; restructuring is a bigger decision that needs the same justification as any other structural choice, tie it to a real usability problem at that size, not a stylistic preference.

### Progressive enhancement by available space

Where a feature or an effect depends on having enough room to be worth it (a secondary preview panel, an inline expanded view), treat the larger-viewport version as an enhancement on top of a fully functional smaller-viewport baseline, not the reverse. The product should work completely at the smallest supported size; a wider viewport adds convenience, it shouldn't be a requirement for completing a task.

### Consistency of adaptation logic across the product

The same kind of content (a data table, a card grid, a navigation structure) should adapt the same way everywhere it appears, unless a specific page has a real reason to differ. A user who learns how one table collapses on mobile should be able to expect the same behavior from another table elsewhere in the product.

## Part 2: Touch and input adaptation

### Never assume viewport size implies input type

A narrow viewport usually, but not always, means touch; a wide one usually, but not always, means a mouse. Touch laptops, mice connected to tablets, and resized desktop browser windows all break the assumption. Where it matters, design for the input type directly (don't rely on `:hover` alone to reveal something essential) rather than inferring it from viewport width.

### Touch target size

Interactive elements that can be touched need to be large enough to activate reliably without the user needing precision aiming, a floor of roughly 44 by 44 CSS pixels (or the equivalent minimum in the project's platform or accessibility standard) for the actual tappable area, which can be larger than the element's visible size through padding. This is a baseline from accessibility and usability standards, not a project-specific style choice, treat it as non-negotiable rather than something to shrink for a denser visual design, coordinate any apparent conflict with the accessibility skill and Visual Design rather than quietly undersizing targets.

### Spacing between adjacent touch targets

Beyond each target's own size, adjacent touch targets need enough space between them that a touch intended for one doesn't land on its neighbor. This matters most in dense interfaces (a toolbar of icon buttons, a data table with inline actions) where visual proximity is often tighter than touch accuracy allows.

### Hover has no touch equivalent by default

Anything that depends on `:hover` to reveal content or indicate state (a tooltip, a reveal-on-hover action, a hover-only visual cue) is invisible and unreachable on a touch device unless an explicit alternative is provided, a tap-to-reveal pattern, the content shown by default on touch, or a focus-triggered equivalent for keyboard users. Check every hover-dependent interaction in the product against this, it's one of the most common responsive gaps because it works perfectly in a desktop browser and silently fails for a large share of real users.

### Virtual keyboards

When a virtual keyboard appears on focusing a text input, it can occupy a large portion of the viewport. Confirm that the focused input, and ideally the relevant surrounding context (a validation message, a submit action), stays visible and reachable rather than being pushed off-screen behind the keyboard. Use the appropriate input type and `inputmode` so the device shows the most relevant keyboard layout (numeric, email, URL) for what's being entered, reducing input errors without any visual design change needed.

### Pointer precision and gesture complexity

Avoid relying on interactions that require more precision or more complex gestures than the input methods in use can reliably support, a small drag target, a multi-finger gesture with no simpler alternative, a precise hover-triggered reveal. Where a gesture-based interaction is used, provide a simpler, more accessible alternative that accomplishes the same result (a visible button alongside a swipe action, for instance), rather than making the gesture the only path.

### Mixed input on the same device

Some devices support more than one input method at once (a touchscreen laptop with a trackpad, a tablet with an attached keyboard and a stylus). Don't assume a single, exclusive input type for a device class, design for the possibility that any given interaction might come from touch, pointer, or keyboard, regardless of what the device nominally is.
