---
name: ux-interaction-design
description: "Step 5 of 10 (Component & Page Phase). Wires user flows, navigation behavior, form submissions to backend API, loading states, error handling, empty states, and confirmation/undo patterns using the components built in Step 4. Use whenever the user wants flows wired, forms connected to the API, navigation behavior completed, or says things like \"wire up the forms\", \"connect to the API\", \"handle the errors\", \"build the user flows\", or \"implement the ux-interaction-design spec\". Runs AFTER ui-components (Step 4) and BEFORE responsive-design (Step 6)."
---

# UX Interaction Design (Step 5 of 10 - Component & Page Phase)

**You are Step 5. You run AFTER ui-components (Step 4) and BEFORE responsive-design (Step 6).** Steps 1-4 built the scaffold, tokens, layouts, and all UI components. Your job is to wire everything together: connect forms to the backend API, complete navigation flows, add loading/error/empty states, and make the application actually functional.

You own user flows, information architecture, navigation models, feedback loops, form submission behavior, error prevention and recovery, loading states, empty states, and confirmation/undo patterns. You make the static components from Step 4 into a working, interactive application.

## Before doing anything: read your spec

1. **Read `docs/ux-interaction-design.md`** - this is your implementation spec. It maps every user flow, defines navigation behavior, specifies form validation rules, and describes error handling patterns. Follow it.
2. **Read `docs/api-contract.md`** - you need the exact endpoints, request/response shapes, authentication flow, and error format to wire every API call correctly.
3. **Read `docs/DESIGN_BRIEF.md`** for overall project context.
4. **Inspect the existing codebase.** Steps 1-4 already built everything you need. The API client exists (Step 1), components exist (Step 4). Your job is to wire them together.

## What you build

Work through these in order:

1. **Navigation wiring.** Complete all navigation: page-to-page routing, active state highlighting, breadcrumb updates, mobile menu open/close behavior, and any conditional navigation (e.g., authenticated vs guest). Read `references/user-flows-and-information-architecture.md`.
2. **Form submissions.** Wire every form to its backend API endpoint: collect input, validate client-side, submit to the API, handle the response (success redirect, error display, field-level errors). Read `references/forms-validation-and-error-recovery.md`.
3. **Data fetching.** Wire data-displaying components to their API endpoints: fetch on page load, show loading state while fetching, show error state on failure, show empty state when no data. Read `references/interaction-patterns.md`.
4. **Authentication flow.** If the project has auth: wire login, signup, logout, token storage, auth header injection, protected route guards, and session expiry handling.
5. **Feedback and confirmation.** Add toast notifications for success/error, confirmation dialogs for destructive actions, undo patterns where specified, and progress indicators for multi-step processes. Read `references/usability-and-feedback.md`.
6. **Error recovery.** Implement retry buttons, "go back" options, form data preservation on error, and graceful degradation for network failures.

## What you hand off

After you finish:
- Every form submits to its correct API endpoint and handles success/error
- All navigation works (page transitions, active states, conditional routes)
- Data-displaying pages fetch from the API and show loading/error/empty states
- Authentication flow works end-to-end (if applicable)
- Toast notifications and confirmation dialogs work
- The application is functionally complete at the default viewport size

## Working with other skills

- Frontend Architecture (Step 1) created the API client you use for all calls
- UI Components (Step 4) built the forms, buttons, and displays you wire up
- Responsive Design (Step 6) will adapt the interactions to mobile (touch, swipe)
- Animations (Step 7) will add transition effects to your navigation and feedback
- Accessibility (Step 9) will verify your flows work with keyboard and screen readers

## Review before finishing

Verify: every form submits and handles responses correctly, navigation works between all pages, data fetching shows loading/error/empty states, authentication works (if applicable), error messages display correctly, and no console errors during normal flows.

## Boundaries

Don't rebuild components (Step 4). Don't change layout structure (Step 3). Don't change token values (Step 2). Don't add responsive breakpoints (Step 6). Don't add animations (Step 7). You wire the existing components into working flows.
