# Focus, Scrolling, and Feedback

Purpose: reliable focus and scroll behavior across the application. This is where components quietly fail keyboard and screen reader users even when they look correct visually, treat it as core functionality, not a finishing touch.

## Visible keyboard focus

Every interactive element needs a visible focus indicator when reached by keyboard. Never remove a focus outline without replacing it with an equally visible alternative; removing it for purely aesthetic reasons breaks keyboard navigation for anyone who relies on it.

## Focus order

The order focus moves through on Tab should match the visual and logical reading order of the page. If a layout reason causes DOM order and visual order to diverge, that's a flag to resolve, not something to leave for keyboard users to puzzle through, see the structural-layout skill's reading-order guidance if it's available in this project.

## Focus restoration

When a temporary UI element (a menu, a popover, a dialog) closes, focus should return to a sensible place, usually the control that opened it, unless the action that closed it makes a different location clearly more useful (for example, after a destructive delete, focus can reasonably move to the next item in a list rather than to a now-gone trigger).

## Focus movement after actions

Move focus deliberately when it helps the user, into a dialog when it opens, to the first invalid field after a failed form submission, to newly revealed content when that content is the direct result of what the user just did. Don't move focus reflexively after every single state change, an unexpected focus jump is as disorienting as a missing one.

## Focus management inside dialogs

On open, move focus to the dialog, typically its heading or its first logical interactive element, whichever suits the dialog's purpose. While open, keep focus contained within the dialog (a focus trap), Tab and Shift+Tab should cycle through the dialog's own content and never escape to the page behind it. On close, return focus to the triggering control.

## Focus behavior when overlays open or close

The same pattern applies to menus, popovers, and drawers: focus moves to the overlay's content on open (or to its first meaningful item, depending on the pattern) and returns to the trigger on close. Content behind a modal overlay should be excluded from the tab order and from screen reader navigation while it's open.

## Initial focus

Choose the initial focus target inside a newly opened dialog or panel based on what the user will do first, a heading if they need to read context before acting, the first input if it's a short, obvious form, a specific control if the whole point of opening it was to reach that control. Don't default to focusing the first interactive element unthinkingly when a different target actually serves the user better.

## Avoiding unexpected focus changes

Don't move focus as a side effect of something the user didn't directly trigger, an element re-rendering, a background data refresh, an unrelated part of the page updating. Unexpected focus movement is disorienting and can cause a keyboard user to lose their place or take an unintended action.

## Keyboard access to interactive elements

Everything a mouse user can do, a keyboard user needs to be able to do too, in a reasonable number of steps and without a keyboard trap (a state where Tab can't move focus out). Verify this directly rather than assuming a component is keyboard accessible because it looks standard.

## Scroll position preservation

When content updates in place (new items load, a filter is applied), don't reset the scroll position unless the update genuinely represents a new context the user should see from the top. Preserve the user's scroll position through updates that are incremental or peripheral to what they were looking at.

## Scrolling to relevant content after an action

Scroll to new or relevant content when it's the direct, expected result of what the user just did (jumping to a newly added item, scrolling a validation error into view). Account for fixed or sticky headers and toolbars so the scrolled-to content isn't hidden behind them, calculate the offset rather than scrolling to the exact element position and hoping nothing overlaps it.

## Sticky headers during anchor navigation

An in-page anchor link or a jump to a specific section needs to land below any sticky header, not have its target's top edge hidden underneath it. This is a common, easily overlooked bug whenever a sticky header coexists with in-page navigation.

## Programmatic focus and scroll coordination

When an action needs to both move focus and scroll (revealing and focusing a newly added form field, for instance), coordinate the two so they happen in the right order and don't fight each other, two separate, uncoordinated effects each trying to control scroll position is a common source of jumpy, unpredictable behavior.

## Form error focus and announcements

When a form submission fails validation, move focus to the first invalid field (or to a summary of the errors, for a longer form, matching the project's established pattern) and make sure the error is announced to assistive technology, not just shown visually. Don't leave focus on the submit button with errors appearing elsewhere on the page with no indication to a keyboard or screen reader user that anything changed.

## Loading feedback

Indicate loading state in a way that's perceivable without requiring the user to keep looking at the exact spot where it will appear, a programmatic change (an `aria-busy` state or a live region) alongside the visual indicator, not a purely visual spinner with nothing for assistive technology to pick up.

## Success and error announcements

Use a live region (`aria-live`, or the appropriate role as covered in `navigation-and-interactive-controls.md`'s toast entry) for feedback that appears without the user's focus already being on it. Match the urgency of the announcement to the urgency of the message, a routine confirmation doesn't need to be as assertive as an error that blocks progress.

## Toast behavior

Give the user enough time to perceive and act on a toast before it disappears, and never auto-dismiss one that requires a response. Let the user dismiss any toast manually regardless of its auto-dismiss timing.

## Reduced-motion considerations

Respect the user's reduced-motion preference for scroll behavior and any focus-related transitions, smooth scrolling and animated focus indicators should have a non-animated equivalent available. Never use aggressive smooth scrolling that overrides a user's own scroll input or takes control away from them mid-scroll.

## Dynamic content and focus stability

When content a user is currently focused on or reading gets updated (a list re-sorting, an item above the viewport being removed), avoid shifting their focus or their visual position unexpectedly. Where content must be removed from under the user's focus, move focus deliberately to a sensible nearby location rather than letting it fall back to the document body.

## Scroll locking when overlays are open

While a modal overlay is open, prevent the page behind it from scrolling, but do this without causing a layout shift (a sudden change in scrollbar presence shifting content horizontally) and without breaking scrolling inside the overlay itself if its own content is taller than the viewport.

## Nested scrolling and scroll containment

When a scrollable region sits inside another scrollable region (a dropdown list inside a scrollable panel, a dialog with its own scrolling body), make sure scroll input on the inner region doesn't unintentionally scroll the outer page once the inner region reaches its own boundary, and make sure the inner region is reachable and scrollable by keyboard, not just by pointer.

## Touch and pointer considerations

Confirm that anything relying on hover (a tooltip, a hover-revealed control) has a working equivalent for touch and for keyboard focus, hover-only is not accessible on a touchscreen and not reachable without a pointer. Keep touch targets large enough to activate reliably, and avoid interactions that depend on precise, fast pointer movement without a simpler alternative.

## Critical requirements, checked on every relevant component

- When an interaction opens a dialog, menu, popover, drawer, or other focus-managed overlay, confirm focus actually moves and remains usable inside it.
- When an interaction navigates to or reveals content, decide deliberately whether scrolling is needed, and account for fixed or sticky elements so revealed content isn't hidden.
- When an operation fails, give clear feedback and preserve the user's input.
- When content updates dynamically, prevent unexpected focus loss and avoid unnecessary scroll jumps.
- When the user dismisses an overlay, restore focus to a meaningful location.
- Use the established pattern for the component in question rather than inventing custom focus or scroll behavior from scratch.

And the defaults to avoid: don't scroll to the top after every action, don't move focus after every state change, don't use aggressive smooth scrolling that fights the user's own control or ignores reduced-motion preferences.