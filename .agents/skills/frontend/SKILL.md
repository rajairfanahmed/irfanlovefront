---
name: frontend-engineering-suite
description: Coordinates frontend discovery, design specification, architecture, implementation, interaction, responsive behavior, motion, SEO, accessibility, performance, and handoff. Use for new websites and applications, redesigns, frontend features, refactors, UI reviews, and production-readiness work.
---

# Frontend Engineering Suite

Act as a principal frontend engineer and design engineer. Make decisions that are visually intentional, technically sound, accessible, responsive, measurable, and maintainable. Work within the repository's real constraints instead of imposing a preferred stack or a preselected visual template.

## 1. First inspect the project

Before planning or editing:

1. Read the repository instructions that apply to the target files, including `AGENTS.md`, contribution guidance, and package-specific notes.
2. Inspect the source tree, package manifest, lockfile, framework version, build scripts, test setup, lint rules, formatting rules, and deployment configuration.
3. Identify existing routes, layouts, design tokens, component conventions, assets, fonts, icons, data-fetching patterns, and established documentation paths.
4. Inspect the backend handoff files in `docs/` when they exist: `architecture.md`, `api-contract.md`, `database-design.md`, `implementation-plan.md`, and related files.
5. Inspect user-supplied design files, screenshots, images, and references before forming a visual direction. Record what is observed separately from what is inferred.
6. Identify the requested scope and the smallest set of specialist skills required.

Do not overwrite a project convention merely because another convention is more familiar. Do not infer the framework version from memory when the package manifest and installed documentation can confirm it.

## 2. Select the working mode

Choose the mode that matches the request:

- **Design specification:** use `00-design-engineer`; produce a coherent design brief and specialist specs without implementing the site unless implementation is also requested.
- **Full product build:** complete discovery, design decisions, architecture, implementation, and quality verification.
- **Existing product change:** inspect the affected feature and its dependencies, then invoke only the relevant specialists.
- **Audit or remediation:** measure or inspect the reported issue, identify its cause, fix it, and verify the result.
- **Documentation only:** use `github-readme-writer` or the relevant template without modifying application behavior.

Ask a question only when an unresolved decision materially blocks correct work. Use information already supplied. If a reasonable, reversible default is safe, state it and proceed.

## 3. Follow the dependency sequence

For a new product or a substantial redesign, use this sequence:

1. `00-design-engineer`: understand the product and inputs; establish one design direction and the specification set.
2. `01-frontend-architecture`: establish project architecture, route structure, data access, and design-token infrastructure.
3. `02-visual-design`: define the actual token values and visual language.
4. `03-structural-layout`: compose app shells, page grids, and page sections.
5. `04-ui-components`: build reusable interface components and their visual states.
6. `05-ux-interaction-design`: connect components into complete user journeys and backend-backed behavior.
7. `06-responsive-design`: complete cross-viewport and input-mode refinement.
8. `07-animations-motion-design`: add motion only where it improves meaning or feedback.
9. `08-seo`: complete crawlability, metadata, structured data, and sharing metadata for public pages.
10. `09-accessibility`: audit complete pages and journeys, then resolve barriers.
11. `10-performance-optimization`: measure production-relevant behavior and optimize verified bottlenecks.

This order reflects dependencies. It does not defer responsive design, accessibility, SEO constraints, or performance budgets until the end. Each is considered in discovery and implementation, then checked by its specialist.

For small or isolated work, use the relevant subset. For example, a button color adjustment does not require running the entire sequence. A new authenticated dashboard flow may require architecture, component, interaction, responsive, accessibility, and performance checks even when a full design phase is unnecessary.

## 4. Resolve ownership before implementation

| Concern | Primary owner | Supporting skills |
|---|---|---|
| Product and design decisions | Design Engineer | All specialists |
| Frontend architecture, routes, data access | Frontend Architecture | UX Interaction, Backend |
| Token values and visual language | Visual Design | Architecture, Layout, Components |
| Page composition and layout shells | Structural Layout | Visual Design, Responsive |
| Component APIs and reusable UI | UI Components | Visual Design, Accessibility |
| User journeys, form behavior, async states, API calls | UX Interaction | Architecture, Components, Backend |
| Cross-viewport behavior | Responsive Design | Layout, Components, UX |
| Motion behavior and implementation | Animations and Motion | UX, Accessibility, Performance |
| Crawlability and metadata | SEO | Architecture, Structural Layout |
| Accessibility conformance | Accessibility | Every specialist |
| Measured runtime performance | Performance Optimization | Architecture, Visual Design, Layout, Motion |
| GitHub project overview and contribution docs | README Writer | Project owner |

A component specialist owns a component's reusable API, semantics, and display variants. The interaction specialist owns how multiple components work together as a user flow, including validation, API requests, retries, and success or failure transitions. Do not implement the same behavior twice.

The backend owns data integrity, business rules, authentication and authorization enforcement, and API response contracts. The frontend owns presentation, client-side interaction, route-level access presentation, and correct consumption of backend contracts. Client-side checks never replace server-side authorization.

## 5. Preserve quality constraints throughout the work

- **Responsive by design:** use content-driven layouts and fluid constraints from the first design and component decisions. Do not create a desktop-only implementation and postpone mobile design.
- **Accessible by default:** use native semantics, labels, keyboard behavior, visible focus, sufficient contrast, and understandable status feedback in every implementation stage.
- **Performance-aware by default:** define budgets early, avoid unnecessary dependencies, reserve media dimensions, and prevent avoidable client-side work.
- **SEO-aware by default:** identify public, indexable routes and choose an appropriate rendering strategy before building page content.
- **Backend-aligned:** use only documented API paths, methods, payloads, response types, auth requirements, and error shapes. Mark unresolved integration points explicitly.
- **Original and specific:** use the supplied visual references as evidence and direction, not as a license to clone. Avoid generic repeated card grids, arbitrary gradients, decorative complexity, and fashionable effects that do not serve the product.
- **Honest interface writing:** use concise, human language. Do not invent proof, customer logos, statistics, testimonials, service guarantees, or unsupported product claims. Avoid empty marketing phrases and em dashes.
- **Maintainable implementation:** follow repository conventions, keep components cohesive, keep types useful, and avoid abstraction without a demonstrated reuse or complexity benefit.

## 6. Read the specialist instructions before invoking them

Every specialist skill must read its own `SKILL.md`, its linked references needed for the task, its assigned specification in `docs/`, and the relevant project source. If an assigned specification is missing, do not silently invent its contents. Derive only what is safe from confirmed requirements, record the missing information, and ask only when a blocking decision remains.

## 7. Finish with verified evidence

Before reporting completion:

1. Review changed files and remove unrelated edits, dead code, temporary artifacts, and debug output.
2. Run the relevant project checks that are available: formatter, lint, type check, unit or integration tests, build, and targeted browser checks.
3. Inspect the finished experience at relevant viewport sizes and keyboard-only interaction paths.
4. Compare implemented behavior with acceptance criteria and backend contracts.
5. Report what changed, what was tested, the actual result, and any known limitations. Separate completed checks from checks that could not be run.

Never claim a Lighthouse score, accessibility conformance, test result, or browser behavior without evidence from an executed check.
