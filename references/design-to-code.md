# Design-to-Code Fidelity and Engineering Constraints

## Purpose
Preserve design intent when translating interface design into frontend code connected to real product behaviour. Distinguish implementation correctness from design quality.

---

## Project Inspection Before Implementation
Before making changes, inspect the actual repository:
- Check existing instructions, package configuration, app routes, components, data, assets, and styling conventions
- Do not assume that the user's description perfectly matches the current checkout
- Report material discrepancies and use the actual project as the implementation source of truth
- Reuse genuine project content, existing assets, official brand SVGs, and available data definitions
- Do not replace a functioning source of truth with invented data or recreate assets that already exist without a reason
- Inspect the installed stack before adding dependencies or assuming library versions

## Design-to-Implementation Mapping
- Layout → grid, flex, flow, positioning, responsive rules
- Typography → font loading, type tokens, line height, wrapping
- Colour → semantic design tokens and theme values
- Spacing → consistent scales and component layout
- Visual components → reusable component APIs
- Interactions → explicit state transitions and event behaviour
- Navigation → actual routes and link targets
- Data display → real data structures and formatting rules
- Validation → client-side and server-side constraints
- Feedback → loading, success, error, and recovery states
- Accessibility → semantic structure, accessible names, focus management, keyboard behaviour
- Responsive layouts → tested viewport adaptation

## Visual Inspection of Rendered Output
When browser or preview tools are available and the task includes implementation:
- Do not stop after writing code or confirming that it compiles
- Start the application when supported and inspect rendered pages at appropriate viewport sizes
- Review the full page, not only the first viewport
- Inspect typography, line wrapping, content density, section rhythm, alignment, contrast, image cropping, visual hierarchy, overflow, component consistency, and the relationship between sections
- Identify the most important visual defects, correct them in the code, and inspect the updated result again
- Continue until the available verification shows a coherent result or a concrete limitation prevents further validation
- If visual inspection tools are not available, do not claim to have visually reviewed the rendered interface — state the limitation precisely and perform the strongest available code and build checks

## Semantic and Structural Implementation
- Headings in a meaningful hierarchy
- Buttons for actions and links for navigation
- Associated form labels and descriptions
- Appropriate input types
- Semantic tables for tabular data
- Lists for collections where appropriate
- Accessible names and states for controls
- Meaningful document structure and landmarks
- Focus management for dialogs and route changes
- Do not use ARIA as a substitute for correct native semantics

## Component Architecture
Document: purpose, anatomy, properties/data inputs, variants/sizes, state transitions, events/callbacks, accessibility expectations, responsive behaviour, error handling, testing requirements. Promote reuse when it reduces duplication; avoid excessive abstraction.

## Design Tokens and Visual Consistency
Define tokens for: colour roles, typography, spacing, sizing, border radii, border widths, elevation, motion, breakpoints, layering. Prefer semantic token names. Avoid scattering arbitrary values.

## Responsive Implementation
Consider fluid sizing, content-driven wrapping, responsive grids, container constraints, breakpoint behaviour, touch input, keyboard input, orientation, and overflow. Verify: no horizontal overflow, text readable, controls usable, important content not clipped, navigation works, sticky elements don't obstruct, tables/charts have narrow-screen treatments.

## State and Interaction Contracts
Define: initial state, triggering action, state transition, visible feedback, disabled conditions, loading behaviour, success behaviour, error behaviour, cancellation/undo, data persistence, keyboard behaviour, focus behaviour.

Any advertised control must do what its label implies. Do not add fake interactions to make screenshots appear sophisticated.

## Data and API Boundaries
Account for: data loading/refresh, partial data, invalid data, network failure, authorization failure, rate limiting, duplicate requests, out-of-order responses, conflicting updates, stale data, form submission failure, optimistic updates and rollback.

Never simulate a successful submission when the request has failed.

## Performance-Aware Design
Consider: font loading, image size/format, lazy loading, large media, excessive animation, layout shifts, large component trees, unnecessary client-side JavaScript, code splitting, expensive chart rendering, repeated network requests, perceived loading.

## Browser and Platform Realities
Respect supported browser capabilities, form behaviour, keyboard conventions, font rendering, viewport units, scroll behaviour, reduced-motion preferences, touch-versus-pointer interaction. Use progressive enhancement where it improves resilience.

## Accessibility Implementation
Inspect: semantic elements, accessible names/descriptions, keyboard operation, visible focus, focus order/restoration, screen-reader announcements, form error relationships, dialog semantics, reduced-motion support, contrast, zoom and reflow.

## Design Fidelity Review
Compare implementation with intended design: typography, spacing, alignment, container widths, component dimensions, colour/contrast, image cropping, borders/shadows, responsive breakpoints, hover/focus states, loading/empty/error states, content wrapping, scroll/sticky behaviour.

## Post-Implementation Checks
After changes, run appropriate available checks:
- Inspect the project's scripts and use the applicable lint, type check, build, tests, or development preview where available
- Do not report a command as successful unless it was actually run and succeeded
- Prefer focused changes that improve the result without unnecessarily rewriting working architecture
- Preserve existing user content, integrations, routes, and working functionality unless change is required and justified

## Testing Layers
Unit tests, component tests, integration tests, end-to-end workflow tests, keyboard/accessibility tests, responsive checks, cross-browser checks, visual regression tests, performance measurements, error/recovery tests. Choose testing depth according to deliverable and risks.

## Engineering Claims and Verification
Distinguish: designed, implemented, executed, tested, verified against requirement, not tested, known limitation. Do not claim a build passes, a route works, or accessibility conforms unless verification actually occurred.

A successful build proves neither strong visual design nor good UX. A visually attractive screenshot proves neither functional correctness nor accessibility conformance.

## Maintainability
Prefer clear naming, predictable behaviour, consistent styling, appropriate separation of concerns, manageable dependencies, proportional documentation. Avoid: duplicate implementations, global CSS with unintended effects, arbitrary one-off styles, overly complex components, unnecessary dependencies, hardcoded sample values, fragile selectors and magic numbers.

Do not add an unrelated design system, dependency, route, component, or decorative feature merely to make the implementation appear more sophisticated.

**Foundational principle:** Preserve visual intent while building an interface that is semantically correct, responsive, accessible, realistic, and maintainable. Verify the rendered result, not just the code.
