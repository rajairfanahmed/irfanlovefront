---
name: ui-components
description: "Step 4 of 10 (Component & Page Phase). Builds all reusable UI components - buttons, cards, forms, modals, tables, navigation menus, dropdowns, and every other interface element - using the design tokens from Step 2 and placing them in the layout structure from Step 3. Use whenever the user wants a component built, fixed, or reviewed, or says things like \"build the components\", \"create the buttons and cards\", \"build the navbar\", \"add a modal\", or \"implement the ui-components spec\". Runs AFTER structural-layout (Step 3) and BEFORE ux-interaction-design (Step 5)."
---

# UI Components (Step 4 of 10 - Component & Page Phase)

**You are Step 4. You run AFTER structural-layout (Step 3) and BEFORE ux-interaction-design (Step 5).** Steps 1-3 created the project scaffold, populated design tokens, and built the layout structure. Your job is to build every reusable UI component the project needs and place them into the layout sections.

You own the design, specification, and implementation of every UI component: buttons, cards, forms, inputs, modals, dropdowns, tables, navigation menus, tabs, accordions, tooltips, badges, avatars, and any other interface element. You define each component's variants, states (hover, focus, active, disabled, loading, error, success), props, keyboard behavior, and basic accessibility.

## Before doing anything: read your spec

1. **Read `docs/ui-components.md`** - this is your implementation spec. It lists every component the project needs, their variants, states, and which API endpoints they connect to. Follow it.
2. **Read `docs/api-contract.md`** - for each component that displays or submits data, know which endpoint it calls and what data shape it receives.
3. **Read `docs/DESIGN_BRIEF.md`** for overall project context.
4. **Inspect the existing codebase.** Steps 1-3 already built the scaffold, tokens, and layouts. Use the token system, follow the folder conventions, and place components in the layout sections that already exist.

## What you build

Build components in this order (foundational components first, composed components second):

1. **Primitive components.** Buttons, inputs, text areas, selects, checkboxes, radio buttons, switches, labels, badges, avatars, icons, spinners/loaders. These are the atoms everything else is built from. Read `references/component-design-principles.md`.
2. **Navigation components.** Navbar, sidebar menu, mobile menu, breadcrumbs, pagination, tabs, links. Build the actual interactive navigation that lives in the header/footer structure from Step 3. Read `references/navigation-and-interactive-controls.md`.
3. **Content components.** Cards, list items, tables, data displays, stat blocks, testimonials, pricing cards, feature cards. These display data from the backend API.
4. **Form components.** Complete form compositions: login form, signup form, search bar, filter controls, settings forms. Wire each form to its API endpoint with proper request/response handling. Read `references/component-states-and-behaviors.md`.
5. **Overlay components.** Modals, dialogs, drawers, tooltips, popovers, dropdown menus, toast notifications. Read `references/focus-scrolling-and-feedback.md`.
6. **Page assembly.** Place all components into the layout sections created by Step 3. Each page should now have its actual content: the hero section has its real headline and CTA, the features section has its real cards, the footer has its real links.

## Component requirements

For each component:
- Use design tokens from Step 2 (no hardcoded colors, fonts, or spacing)
- Follow the folder structure from Step 1
- Implement all states specified in `docs/ui-components.md`
- Include basic keyboard support (tab, enter, escape where applicable)
- Include aria labels and roles where semantically needed
- For data-displaying components: type the props to match the API response shape from `docs/api-contract.md`
- For form components: include validation, loading state, error state, and success state

## What you hand off

After you finish:
- Every component from the spec exists and renders correctly
- All components use design tokens
- Pages have their actual content in place (not placeholder text everywhere)
- Navigation is built (links exist, even if flow wiring happens in Step 5)
- Forms exist with validation (even if submit wiring happens in Step 5)

## Working with other skills

- Frontend Architecture (Step 1) defined where components live
- Visual Design (Step 2) provided the tokens you use for all styling
- Structural Layout (Step 3) created the page sections you populate
- UX Interaction Design (Step 5) will wire user flows, form submissions, navigation behavior, and error handling using your components
- Responsive Design (Step 6) will adapt your components to different viewport sizes
- Animations (Step 7) will add motion to your components
- Accessibility (Step 9) will audit and fix your components' accessibility

## Review before finishing

Verify: every component from the spec exists, all components use tokens (no hardcoded styles), all specified states are implemented, components render in their layout sections, keyboard basics work (tab, enter, escape), and the project builds without errors.

## Boundaries

Don't change the project scaffold (Step 1). Don't change token values (Step 2). Don't change layout structure (Step 3). Don't wire complete user flows or form submissions to API (Step 5). Don't add responsive breakpoints (Step 6). Don't add animations (Step 7).
