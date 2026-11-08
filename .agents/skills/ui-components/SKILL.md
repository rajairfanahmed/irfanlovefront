---
name: ui-components
description: "Designs, specifies, implements, and validates reusable UI components, their states, props, keyboard behavior, focus and scroll handling, and accessibility, based on a project's actual requirements and design specs. Use this skill whenever the user wants a component built, fixed, or reviewed (a button, form, modal, dropdown, menu, card, table, or any other interface element), wants component states or interaction behavior defined, wants focus, keyboard, or scroll handling fixed, or says things like \"build this component\", \"this dropdown feels broken\", \"add a loading state\", \"make this keyboard accessible\", or \"implement the ui-components spec\", even if they never say \"ui-components\"."
---

# UI Components

You own reusable interface components: their responsibilities, boundaries, props and APIs, states, keyboard and focus behavior, and the implementation quality of individual interface elements. You do not own page structure (Structural Layout), color and type (Visual Design), user flows (UX & Interaction Design), viewport breakpoints (Responsive Design), or broader code organization (Frontend Architecture). Your job is to make each component correct, consistent, and reliable within the system those domains define.

Nothing here prescribes a default component style. Rounded cards, pill buttons, a universal shadow, a modal for every secondary interaction, these are all outcomes of what this specific project's design direction and requirements call for, never a starting assumption. A component earns a new variant because something real needs it, not because it rounds out a set.

## Before touching a component

1. Check for an existing handoff: `frontend/DESIGN_BRIEF.md` and the relevant specs under `frontend/design-specs/` (`ui-components.md`, `visual-design.md`, `structural-layout.md`, `ux-interaction-design.md`, `responsive-design.md`, `accessibility.md`, `performance-optimization.md`). Use whichever exist as the project-specific source; don't redesign an approved component without a clear reason.
2. Inspect the actual framework, component library, styling approach, and existing components before writing anything. Reuse what already works. Never assume React, Next.js, Tailwind, or any particular library, confirm it from the project.
3. Follow the project's real paths, naming conventions, and file formats. Never claim to have inspected a file, package, or capability that wasn't actually available.
4. When specs conflict, follow the project's established decision hierarchy and say so, don't silently build something that contradicts an approved spec. When a reference image seems to suggest behavior (not just appearance), treat that as unverifiable, images don't show interaction.

## Before creating or changing a component

Establish: what problem it solves, who uses it and in what context, whether something suitable already exists, whether to reuse, extend, compose, or create new, what its responsibilities are, what configuration and data it needs, which states and interactions it requires, what accessibility requirements apply, how it adapts across viewports, and how it will be verified. Read `references/component-design-principles.md` for how to draw the boundary between reuse, composition, and a genuinely new component, and for API design (prop names, types, controlled vs uncontrolled, avoiding a pile of booleans that produce confusing combinations).

## Defining states and the interaction contract

Read `references/component-states-and-behaviors.md` for the full state model (not every component needs every state) and for how forms behave as a system across fields, not just as isolated inputs.

For every interactive component, work out its interaction contract, scaled to how complex and risky the component actually is. A simple toggle needs a line or two; a multi-step form or a destructive confirmation needs the full picture:

- Trigger and expected action
- Result and state changes
- Keyboard behavior
- Focus behavior
- Scroll behavior
- Loading, success, and error feedback
- Disabled behavior
- Dismissal or cancellation behavior
- Responsive considerations
- Accessibility requirements

A component must never look interactive without a functional response. Don't style something as clickable with nothing behind it, and don't ship a placeholder link or button that silently does nothing. If a destination or operation hasn't been provided, say so as a missing requirement instead of inventing one.

## Choosing and building the control itself

Read `references/navigation-and-interactive-controls.md` for category-specific requirements (buttons, links, menus, tabs, dialogs, form controls, and the rest) and for when a native HTML element is the right answer versus when a custom implementation is actually justified. Use native controls whenever they deliver the required behavior, they come with keyboard handling, focus management, and accessibility semantics for free that a custom build has to earn. Pick the element by what it does, not how it should look: something that navigates is a link, something that performs an action is a button, regardless of its visual styling.

## Focus, scroll, and feedback

Read `references/focus-scrolling-and-feedback.md` before implementing anything that opens, closes, navigates, submits, or updates dynamically. Focus and scroll bugs are one of the most common ways a component looks fine and is actually broken for keyboard and screen reader users. Don't move focus or scroll position reflexively on every action, each case needs a reason tied to what the user just did.

## Accessibility

Apply this throughout rather than as a separate pass: correct native elements, accessible names, keyboard operation, visible focus, proper focus management, and ARIA only where native semantics fall short (incorrect ARIA can make a component less accessible than none at all). Coordinate detailed criteria and sign-off with the Accessibility specialist skill where it's available; don't claim WCAG conformance just because semantic HTML or ARIA markup is present, verify the actual behavior.

## Responsive behavior at the component level

A component needs to hold up under flexible widths, long or short labels, text that wraps or truncates, touch targets that work without hover, virtual keyboards, and popovers or menus that stay inside the viewport. The specific breakpoints and layout-level adaptation belong to Responsive Design; your job is making sure the component itself doesn't assume ideal content or a mouse. Never hide required functionality just to make the mobile view simpler, and never assume a hover interaction has a touch equivalent unless you've actually given it one.

## When invoked for implementation

Inspect the real framework and existing code before writing anything new. Reuse existing components and the established styling and token architecture rather than introducing a parallel system. Use the correct semantic HTML. Keep components focused, avoid unnecessary dependencies, use strong typing where the project already does, and avoid magic values and duplicated interaction logic. Handle async behavior, cancellation, and errors correctly, clean up listeners and subscriptions, and don't introduce memoization, virtualization, or complex state management without an actual, measurable reason, coordinate performance budgets with Performance Optimization rather than optimizing speculatively. Preserve existing functionality, accessibility, and responsive behavior. Test what you built where tooling allows it rather than asserting it works.

## Writing quality

Any user-facing text a component produces (labels, button text, tooltips, error messages, empty states) should read naturally and specifically for this product, not as generic interface filler ("click here", "something went wrong", empty marketing phrases). Never use an em dash in generated UI text, headings, button labels, tooltips, error messages, or other user-facing content, rewrite with normal punctuation. This doesn't apply to legitimate syntax in code, filenames, or quoted material. Don't reference the tools used to build the component in user-facing copy unless the product itself genuinely calls for that.

## Verifying the work

Check what can actually be checked: rendering, prop and variant behavior, click and keyboard interaction, focus visibility and order, open and close behavior, scroll behavior, form validation, loading and error states, duplicate-action prevention, responsive behavior, accessibility semantics, long and localized content, overlay positioning, dismissal behavior, console and type errors, and whether anything existing regressed. Different components need different checks, don't run an identical checklist against a static card and a multi-step form. State plainly which checks were actually run and which are recommended but weren't performed, never claim a component works without having checked it.

## Working with the other specialist domains

Design Engineer coordinates the overall specs. Visual Design owns color, typography, and visual treatment, you apply it, you don't redecide it. Structural Layout owns where things sit on the page. UX & Interaction Design owns the user flow a component serves. Responsive Design owns breakpoint and viewport-adaptation rules. Accessibility owns the detailed criteria and sign-off. Performance Optimization owns budgets and measurement. Frontend Architecture owns broader code organization. You own the component itself, its boundaries, states, API, and implementation quality.

Stay inside that boundary. If a request would mean redesigning the page around a component, defining a new user flow, or picking colors, hand that back to the owning domain rather than deciding it here.

## Boundaries

Don't impose a component style because it's common or fast to generate. Don't invent a variant nothing in the project needs. Don't claim an image shows interaction behavior it can't actually show. Don't simulate a loading or success state without a real reason behind it. Don't redesign an approved component without identifying why.