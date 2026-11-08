# Semantic HTML and Keyboard Navigation

Purpose: the structural foundation almost everything else in accessibility depends on, correct elements, a navigable landmark and heading structure, and full keyboard operability. Most accessibility problems trace back to a gap here before they trace back to anything more exotic.

## Why semantics matter more than appearance

Assistive technology doesn't see the page the way a sighted user does, it interprets the underlying markup, element types, roles, relationships, and states, and constructs its own representation from that. A `<div>` styled to look exactly like a button conveys nothing to a screen reader unless it's also given the semantics of a button, correct role, keyboard behavior, and state. Visual similarity to the intended element is not a substitute for actually being, or correctly impersonating, that element.

## Correct native elements first

Use the native HTML element whose built-in behavior and semantics already match what's needed: a `<button>` for an action, an `<a>` for navigation, the correct heading level for a heading, a real `<table>` for tabular data, native form elements for form controls. Native elements come with keyboard handling, accessible roles, and expected behavior for free, a custom-built equivalent has to replicate all of it correctly by hand, and subtle gaps are common. Reach for ARIA only when a native element genuinely can't express what's needed, not as a default.

## Landmark regions

Use landmark roles (`<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`, and their ARIA equivalents where a native element doesn't exist for the role) to divide the page into navigable regions. This lets a screen reader user jump directly to the main content, the navigation, or a specific region, rather than tabbing or reading through everything in sequence. A page with no landmark structure forces an assistive technology user to process the entire page linearly to find anything.

## Heading hierarchy

Headings should form a logical, correctly nested outline of the page's content, starting from a single top-level heading and nesting subsequent levels without skipping (a level-two heading followed directly by a level-four, with no level-three in between, breaks the outline a screen reader user relies on to navigate). Headings should be chosen for their structural level in the document, not for a specific visual size, visual size is a Visual Design decision applied to whatever semantic level is structurally correct, not the other way around.

## Lists, tables, and other structural semantics

Use a real list element for content that's actually a list, a real table for data that's actually tabular (with correctly associated headers), and other structural elements for what they actually represent. These convey count, position, and relationship information to assistive technology automatically, a visually identical structure built from generic elements conveys none of it.

## Accessible names and descriptions

Every interactive element needs an accessible name, text that identifies its purpose to assistive technology, computed from its visible text, an explicit label, or an appropriate ARIA attribute, in that order of preference. An icon-only control with no text needs an explicit accessible name since there's no visible text to compute one from. Check the actual computed accessible name, not just that a label-like attribute exists, a mistake in how elements are associated can leave the accessible name blank, wrong, or duplicated even when a label is visually present.

## ARIA, used correctly or not at all

Incorrect ARIA can make an element less accessible than using no ARIA at all, an incorrect role, a stale state attribute that doesn't match the element's actual current state, or a redundant role on an element that already has the right native semantics all actively mislead assistive technology rather than helping it. Use ARIA to add semantics a native element can't express on its own (a custom widget with no native equivalent) or to expose a dynamic state (expanded, selected, current) that needs to stay synchronized with the element's actual behavior, verify it actually does.

## Full keyboard operability

Every interactive element and every piece of functionality needs to be operable using the keyboard alone, with no exceptions carved out for anything that "should" be mouse-only. This includes complex custom widgets, drag interactions (which need a keyboard-operable alternative), and anything implemented with mouse-specific event handlers that don't have a keyboard equivalent wired up alongside them.

## Logical focus order

Tab order should follow the visual and logical reading order of the page. When DOM order and visual order diverge for a layout reason, that's a problem to resolve structurally, not something to patch with a manually managed tab index sequence, a hand-tuned tab order is fragile and tends to drift out of sync as the page changes.

## No keyboard traps

A user must always be able to move focus away from any element using standard keyboard navigation, nothing should capture focus and refuse to release it except a deliberately designed, properly implemented modal focus trap (see `focus-forms-and-dialogs.md`) that has its own defined, correct way out.

## Visible focus indicators

Every focusable element needs a visible indicator when it has keyboard focus, with sufficient contrast against its background to actually be perceivable, not just technically present. A focus style removed for visual preference with nothing equally visible put in its place is a direct, common, and entirely avoidable failure.

## Skip links and keyboard shortcuts

A way to skip repeated navigation and jump directly to main content benefits keyboard users who would otherwise tab through the same navigation on every single page. Where custom keyboard shortcuts exist, confirm they don't conflict with standard browser or assistive technology shortcuts, and provide a way to view, remap, or disable them to prevent conflicts for different AT configurations.