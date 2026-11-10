# Focus, Forms, and Dialogs

Purpose: the detailed conformance criteria for three of the most consistently difficult areas in accessibility, focus management, form accessibility, and dialogs and overlays. UI Components implements the practical behavior day to day, this file is the authoritative criteria that implementation needs to be checked against, and the patterns to follow when something more complex than a native element is genuinely required.

## Focus management as a conformance requirement, not just good practice

Every point where focus moves programmatically (an overlay opening, a route changing, content being dynamically inserted or removed) is a place a specific, checkable requirement applies: focus needs to land somewhere sensible, the user needs to be able to tell where it landed, and it should never disappear to the document body with no indication of what happened. Verify this at every such point in the product, not just the ones that seem most prominent.

## Dialog and modal requirements

A modal dialog has specific conformance requirements: an accessible name (usually from its heading), a role identifying it as a dialog, focus moved into it on open, focus contained within it while open (a correct focus trap, Tab and Shift+Tab cycle through the dialog's own content and never escape to the page behind it), content behind it excluded from the tab order and from assistive technology navigation while it's open, a way to close it via Escape unless the action is severe enough to require an explicit response, and focus returned to a sensible location, usually the triggering control, on close. Verify every one of these specifically, a dialog that gets most of them right but leaks focus to the background, or fails to restore it on close, is still a conformance failure, not an acceptable partial implementation.

## Non-modal overlays

A non-modal overlay (a persistent panel the user can interact with alongside the rest of the page) should not trap focus the way a modal dialog does, confirm it's actually built as non-modal correctly rather than inconsistently blocking some paths out while allowing others, an overlay that's ambiguous about whether it's modal is a common source of confusing, inconsistent keyboard behavior.

## Form labels and accessible names

Every form field needs a programmatically associated label, not merely a visually adjacent one, verify the actual association (a `<label>` correctly wrapping or linked via `for`/`id` to its control, or an equivalent ARIA labelling mechanism), not just that a label-like element exists near the field. A placeholder is never a substitute for a label, it disappears on input and isn't reliably exposed to assistive technology as the field's name.

## Required and optional field indication

Required fields need to be identified in a way that's conveyed to assistive technology, not just a visual asterisk with no programmatic equivalent (the `required` attribute, or an equivalent ARIA property, alongside any visual indicator). Keep the convention consistent across the whole form and the whole product, verify a user relying on assistive technology actually hears the required status, not just that a sighted user can see it.

## Error identification

A form validation error needs to be identified specifically, which field, what's wrong, both visually and programmatically, and this needs to be communicated to assistive technology in a way that doesn't depend on the user already having focus on the right element. Associate the error message with its field so it's announced when the field receives focus, and move focus or otherwise alert the user when a submission fails, rather than leaving the error present only as a visual change elsewhere on the page.

## Error suggestion and recovery

Where it's knowable, an error message should suggest how to fix the problem, not just state that something is wrong. This is a specific, checkable requirement at higher conformance levels, verify the actual message content gives the user something actionable, not just a generic invalid-input notice.

## Grouped form controls

A set of related controls (a group of checkboxes, a set of radio buttons for a single question) needs a programmatic grouping (a `<fieldset>` with a `<legend>`, or an equivalent ARIA grouping) so assistive technology can convey the group's overall purpose, not just each individual control's own label in isolation.

## Custom widgets and the ARIA Authoring Practices patterns

When a native element genuinely can't meet a requirement and a custom widget is justified (see UI Components' guidance on when that's actually the case), follow an established, well-tested pattern (the kind documented in the WAI-ARIA Authoring Practices) for that widget type precisely, the specific roles, states, and keyboard interactions expected for a combobox, a tab panel, a tree, or similar complex widgets are easy to get subtly wrong by improvising rather than following the established pattern exactly.

## Verifying this category specifically

This category is disproportionately prone to looking correct in a quick visual or code review while actually failing in practice, a focus trap that's almost but not quite complete, a label that's visually present but not programmatically associated, an error that's visually shown but never announced. Treat every dialog, every form, and every focus-management point as needing explicit, individual verification against the criteria above, not an assumption that it's fine because it follows a generally correct-looking pattern.