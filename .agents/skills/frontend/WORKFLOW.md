# Frontend Workflow and Handoffs

## Phase 0: Product and repository discovery

**Goal:** understand the product, current implementation, source of truth, and constraints before deciding how to work.

Inspect the repository instructions, framework and dependency versions, routes, existing component and token systems, tests, assets, and documentation. Confirm whether the task is a new build, redesign, feature, refactor, audit, or documentation request.

Capture:
- user roles and the primary jobs each role needs to complete;
- public and authenticated routes;
- content and data required by each screen;
- important states, including loading, empty, error, success, and permission denial;
- supported viewports, devices, and input types;
- backend routes, request and response types, auth requirements, and error format;
- constraints such as browser support, localization, deadlines, hosting, and existing dependencies.

Do not turn an unknown into a requirement. Label unknowns as `Open`, assumptions as `Assumption`, and confirmed decisions as `Confirmed`.

## Phase 1: Design specification

Use the Design Engineer when the project requires a new or materially revised visual and interaction direction.

1. Determine the product category and audience from available information. Ask only when the category materially changes the required structure and cannot be inferred.
2. Inventory every supplied design document and relevant image. Inspect all supplied references where practical. If a repository contains a dedicated `designs/` or `design-refs/` folder, inventory it and inspect at least ten distinct references when ten or more are available and relevant. Do not claim to have inspected assets that were not opened.
3. For each reference, record observable structure, hierarchy, typography, color, density, interaction clues, and responsive evidence. Separate observation from interpretation.
4. Read backend contracts and reconcile all integration assumptions.
5. Establish one recommended direction. Explain why it fits the product and what it deliberately avoids.
6. Produce the design brief and specialist specifications in the repository's documentation convention.
7. Run design quality gates before handoff.

## Phase 2: Technical foundation

The Frontend Architecture skill confirms the actual framework and version, folder boundaries, routing, server/client boundaries, state ownership, API client, error handling, environment configuration, test setup, and design-token infrastructure.

Do not introduce a state library, router, component library, CSS framework, or animation package when the existing stack already solves the requirement. Add a dependency only when the benefit is explicit and its maintenance cost is acceptable.

## Phase 3: Visual system and page composition

Visual Design translates the approved direction into semantic tokens for color, typography, spacing, radii, borders, shadows, elevation, and themes. Structural Layout uses those tokens to create the app shell, navigation, page containers, grids, page sections, and content composition.

Responsive constraints, semantic structure, focus visibility, and performance budgets must already be reflected in the decisions made here.

## Phase 4: Components and interaction flows

UI Components creates reusable primitives and compound components with documented props, variants, semantics, and display states.

UX Interaction connects these components into working journeys. It owns URL state, form behavior, validation, asynchronous requests, pending states, retry behavior, optimistic updates when safe, confirmation, and error recovery. It consumes the backend's real API contract and does not invent endpoints.

## Phase 5: Specialist refinement

Responsive Design verifies behavior across the actual content widths and device modes. Motion Design adds only purposeful motion and supports reduced-motion preferences. SEO makes public pages crawlable and supplies correct metadata and structured data. Accessibility checks full pages and journeys against the selected conformance target. Performance Optimization measures and resolves actual bottlenecks.

These constraints are not postponed until this phase. This phase provides dedicated, cross-page verification and remediation.

## Phase 6: Integration and release review

- Verify every frontend API call against `docs/api-contract.md` or the current backend contract.
- Verify loading, empty, error, permission, success, and offline or timeout behavior where relevant.
- Verify navigation, browser history, refresh, deep links, and authentication redirects.
- Verify narrow, intermediate, and wide layouts, zoom, keyboard use, and reduced motion.
- Run formatter, lint, type check, tests, and production build where configured.
- Inspect bundle and runtime measurements where relevant.
- Record defects, unresolved assumptions, and deferred work accurately.

## Specification path convention

Use the root `docs/` folder when the repository has no established alternative. This keeps frontend specifications beside backend contracts. If the repository already uses a nested convention, preserve it and create a single index linking the frontend and backend documentation. Do not create duplicate files under multiple paths.

## Cross-specialist handoff contract

A handoff must identify:
- source specification and its version or last-updated date;
- files, routes, components, or flows in scope;
- accepted decisions and constraints;
- dependencies and interfaces owned by another specialist;
- known open questions and assumptions;
- acceptance criteria and verification evidence.

A downstream skill must not silently rewrite an upstream decision. Raise a conflict, explain its impact, and update the source specification through the agreed owner.
