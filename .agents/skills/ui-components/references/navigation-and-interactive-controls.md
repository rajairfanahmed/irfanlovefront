# Navigation and Interactive Controls

Purpose: category-specific requirements for the interactive elements most interfaces are built from. Use native HTML elements whenever they deliver the required behavior, they provide keyboard handling, focus management, and accessibility semantics for free that a custom build has to earn back by hand. A custom implementation needs a real justification (a requirement a native element genuinely can't meet), not just a visual preference.

## Links versus buttons

Pick the element by what it does, not how it should look. A link navigates to a destination (a URL, a new location) and should be an `<a>` with a real `href`. A button performs an action within the current context (opening a dialog, submitting a form, toggling a state) and should be a `<button>`. Styling a `<div>` or a `<span>` to look like either, or using a button to navigate and a link to perform an action with `href="#"` or `javascript:void(0)`, breaks keyboard behavior, browser navigation features (open in new tab, back button), and screen reader expectations. Choose correctly before styling.

## Buttons and icon buttons

Purpose: trigger an immediate action. Semantics: `<button type="button">` by default, `type="submit"` only inside a form where that's the intended behavior. Keyboard: activates on Enter and Space. Icon-only buttons need an accessible name (visible text is clearer when the project can afford the space; otherwise a label via the project's accessible-naming convention), an icon alone is not accessible. States: default, hover, focus, active, disabled, and loading if the action is async. Common failures: an icon button with no accessible name, a disabled button with no explanation of why, a loading button that can still be clicked again.

## Links

Purpose: navigate. Semantics: `<a href="...">` with a real, working destination. Keyboard: activates on Enter, not Space. Accessible name should describe the destination or action in context, avoid vague link text like "click here" repeated across a page, screen reader users often scan a page's links out of context. Common failures: a link with no real href used purely for its clickable styling, link text that's meaningless out of context.

## Navigation items and navigation menus

Purpose: move between sections or pages of the product. Semantics: a `<nav>` landmark containing a list of links is the baseline pattern; mark the current page or section (`aria-current="page"` or equivalent) so users know where they are. Keyboard: standard tab order through the links; a menu with a more complex structure (nested items) needs arrow-key navigation matching the established pattern for that structure. Responsive: decide explicitly how navigation collapses on narrow viewports (a visible row becoming a disclosed menu is the common case), coordinate the breakpoint with Responsive Design. Common failures: current-page indication missing, a collapsed mobile menu trap that's hard to close or escape.

## Dropdown menus and menus or command interfaces

Purpose: present a set of actions or options triggered from a control. Semantics: a button that controls the menu's visibility (`aria-haspopup`, `aria-expanded` reflecting actual state) with the menu itself using the appropriate role for its content (a list of actions versus a list of navigable options are different patterns). Keyboard: Enter or Space opens it from the trigger, arrow keys move through items, Enter or Space activates the focused item, Escape closes it and returns focus to the trigger. Focus: moves into the menu on open, returns to the trigger on close, see `focus-scrolling-and-feedback.md`. Common failures: a menu that opens but doesn't trap or guide keyboard focus inside it, an `aria-expanded` value that doesn't reflect the actual open state.

## Select controls

Purpose: choose one value from a known set. Prefer the native `<select>` for straightforward cases, it comes with keyboard support, mobile picker UI, and accessibility for free. Build a custom listbox only when a real requirement a native select can't meet exists (rich option content, multi-select with custom rendering, search-as-you-type). Keyboard: native select handles this automatically; a custom implementation needs to replicate arrow-key navigation, typeahead, and Escape to close. Common failures: a custom select rebuilt for purely visual reasons that loses native keyboard and mobile behavior in the process.

## Tabs

Purpose: switch between related views without navigating to a new page. Semantics: `role="tablist"` containing `role="tab"` elements, each controlling a `role="tabpanel"`. Keyboard: arrow keys move between tabs (left and right, or up and down depending on orientation), Enter or Space activates the focused tab (or activation follows focus automatically, depending on the established pattern), Tab moves out of the tablist entirely to the active panel's content. State: exactly one tab marked selected at a time, matching the visible panel. Common failures: tabs built from unmarked clickable divs with no relationship to their panels, panel content that isn't reachable by keyboard after a tab is activated.

## Accordions and disclosure controls

Purpose: show or hide a section of content. Semantics: a button controlling the visibility of the associated content, with `aria-expanded` reflecting actual state. Keyboard: Enter or Space toggles. Decide whether multiple sections can be open simultaneously or only one at a time, and keep that behavior consistent across the instance. Common failures: `aria-expanded` not updated on toggle, hidden content left in the tab order so keyboard users land on things they can't see.

## Tooltips

Purpose: supplementary information shown on hover or focus, not a place for essential content or interactive elements. Semantics: associate with its trigger (an accessible-description pattern, not just visual positioning). Keyboard: must appear on keyboard focus, not just mouse hover, or keyboard users never see it. Dismissal: Escape dismisses it, and it shouldn't trap focus. Common failures: a tooltip that only appears on hover, making it invisible to keyboard and touch users; essential information available nowhere except a tooltip.

## Popovers

Purpose: contextual content or controls anchored to a trigger, more substantial than a tooltip, less than a full dialog. Semantics and keyboard follow the same pattern as dropdown menus: a controlling trigger, Escape to dismiss, focus returned to the trigger on close. Positioning: must stay within the viewport, flipping or shifting its anchor side when it would otherwise overflow. Common failures: a popover that opens off-screen or gets clipped by a scroll container, no way to dismiss it except clicking elsewhere.

## Modals and dialogs

Purpose: an interaction that needs the user's full attention before they can return to the page behind it. Semantics: `role="dialog"` or `role="alertdialog"` for one requiring an explicit response, with an accessible name (usually the dialog's heading). Keyboard: focus moves into the dialog on open (see `focus-scrolling-and-feedback.md` for exactly where), stays contained within it (a focus trap) while open, and Escape closes it unless the action is destructive enough to require explicit confirmation rather than an easy accidental dismissal. Background: content behind the dialog should be inert (not reachable by tab or screen reader) while it's open. Common failures: focus left behind the dialog on open, focus escaping the dialog into page content behind it, background content still scrollable or interactive while a modal is open. Reserve modals for interactions that genuinely need to interrupt the user; don't use one where an inline expansion or a dedicated page would serve the task better with less disruption.

## Drawers and side panels

Purpose: similar to a dialog but anchored to a screen edge, often for a longer task or persistent context alongside the main content. Follow dialog conventions for focus and keyboard behavior when the drawer is modal (blocks interaction with the rest of the page); if it's non-modal (the rest of the page stays usable), don't trap focus, treat it more like a persistent panel. Decide explicitly which mode applies, the two have materially different keyboard and focus requirements.

## Search inputs

Purpose: find content, usually from a larger set. Semantics: `type="search"` where appropriate, a clear accessible name (visible label or an equivalent), and a programmatic association with its results if results update live. Behavior: if results update as the user types, debounce the requests and announce result changes in a way assistive technology can pick up without interrupting typing. Common failures: a live-updating results list with no announcement, so screen reader users don't know results changed.

## Comboboxes and autocomplete

Purpose: a text input paired with a filtered list of suggestions. Semantics: the ARIA combobox pattern (`role="combobox"` with the appropriate `aria-expanded`, `aria-controls`, and `aria-activedescendant` or managed focus, matching the established pattern precisely, this is one of the easiest patterns to get subtly wrong). Keyboard: arrow keys move through suggestions without leaving the text input, Enter selects the highlighted suggestion, Escape closes the list without clearing typed text. Common failures: focus moving into the suggestion list instead of staying in the input, typeahead that doesn't update the accessible state correctly.

## Checkboxes and radio buttons

Purpose: checkboxes for independent binary choices (including a single standalone one), radio buttons for choosing one option from a mutually exclusive set. Semantics: native `<input type="checkbox">` or `<input type="radio">` with a properly associated `<label>` (wrapping the input or linked via `for`/`id`), radios grouped in a `<fieldset>` with a `<legend>` describing the choice being made. Keyboard: native behavior handles this; a custom-styled version still needs to preserve it. Common failures: a label that isn't programmatically associated so clicking the text doesn't toggle the control, a styled checkbox built from a div that loses native keyboard support entirely.

## Switches

Purpose: toggle a setting on or off, usually with an immediate effect (distinct from a checkbox in a form that's submitted later). Semantics: `role="switch"` with `aria-checked` reflecting state, or a native checkbox styled to look like a switch while keeping its semantics. Keyboard: Enter or Space toggles. Common failures: a switch that changes a setting with no visible or announced confirmation that the change took effect.

## Sliders

Purpose: select a value or range from a continuum. Semantics: `role="slider"` with `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` kept current, or the native `<input type="range">` where it meets the requirement. Keyboard: arrow keys adjust the value incrementally, Home and End jump to the minimum and maximum. Common failures: a custom slider that doesn't respond to keyboard at all, only to dragging.

## Pagination

Purpose: move through a large set of items split across pages. Semantics: a `<nav>` landmark with a labeled set of links or buttons, the current page marked clearly (visually and with `aria-current`). Common failures: page controls that are purely visual with no indication of the current page for assistive technology.

## Breadcrumbs

Purpose: show the user's location within a hierarchy and let them navigate up it. Semantics: a `<nav>` landmark (often labeled "Breadcrumb") containing an ordered list of links, with the current page present but not a link. Common failures: the current page rendered as a clickable link to itself.

## Date and time controls

Purpose: enter or select a date, time, or both. Prefer native `<input type="date">`, `<input type="time">`, or `<input type="datetime-local">` where their built-in picker and format handling meet the requirement, they handle locale formatting and mobile input for free. Build a custom date picker only when a real requirement exists (a range picker, a non-standard calendar, design constraints a native input can't meet) and follow an established accessible calendar pattern (grid semantics, arrow-key navigation between dates) rather than inventing one. Common failures: a custom date picker with no keyboard support, ambiguous date format with no indication of the expected pattern.

## Form submission controls

Purpose: commit the form's data. Semantics: `type="submit"` inside the `<form>` it belongs to, so native Enter-to-submit behavior works without extra scripting. Behavior: see the forms-as-a-system guidance in `component-states-and-behaviors.md` for validation timing, pending state, and duplicate-submission prevention. Common failures: a submit control outside the form it's meant to submit, relying entirely on a click handler with no native form association.

## Toast and notification messages

Purpose: brief, non-blocking feedback about something that just happened. Semantics: an ARIA live region (`role="status"` for routine feedback, `role="alert"` for something urgent) so assistive technology announces it without the user needing to find and focus it. Behavior: auto-dismiss routine confirmations after a reasonable interval, but never auto-dismiss something the user needs to act on, and let the user dismiss any toast manually regardless. Common failures: feedback that only appears visually with no live-region announcement, a toast that disappears before a screen reader user has had time to perceive it.

## Project-specific interactive components

For a component that doesn't map cleanly onto any category above, apply the same underlying questions: what native element or ARIA pattern is closest to its actual behavior, what does keyboard operation need to look like, where does focus go on open and close, and what's the accessible name. Don't invent a bespoke interaction pattern when an established one (even from a different category) already solves the same underlying problem.