# Design Specification Output Contract

The design brief and specialist specifications are implementation inputs. They must contain decisions and acceptance criteria, not vague inspiration statements.

## 1. Master design brief

`DESIGN_BRIEF.md` must contain:

1. Project summary and product category.
2. Target users, roles, and primary jobs.
3. Product goals and measurable success criteria where supplied.
4. Scope, exclusions, and assumptions.
5. Existing stack, repository constraints, and relevant backend contracts.
6. Route and page inventory.
7. Primary user journeys and important states.
8. One recommended design direction and its rationale.
9. Visual principles and asset requirements.
10. Structural and responsive principles.
11. Interaction and motion principles.
12. Accessibility, SEO, and performance targets.
13. Backend integration summary and contract gaps.
14. Risks, conflicts, and unresolved decisions.
15. Links to all specialist specifications.

## 2. Specialist specifications

Every specialist specification must include:

- objective and scope;
- source material and upstream decisions;
- project-specific requirements;
- implementation decisions and constraints;
- routes, components, or flows affected;
- relevant responsive behavior;
- relevant accessibility requirements;
- relevant performance implications;
- `Backend Integration Points`, with exact documented contracts or explicit gaps;
- acceptance criteria;
- dependencies, assumptions, and handoff notes.

Only include the backend section's detailed fields where relevant. For visual-only decisions, state that no direct API call is owned by the spec rather than inventing one.

## 3. Required specialist files

| File | Required subject matter |
|---|---|
| `frontend-architecture.md` | framework, route model, boundaries, data access, token infrastructure, testing |
| `visual-design.md` | visual language, semantic tokens, themes, type, color, surfaces, assets |
| `structural-layout.md` | app shell, navigation layout, page grids, page-specific composition |
| `ui-components.md` | component inventory, APIs, variants, semantics, display states |
| `ux-interaction-design.md` | user flows, local and remote state, validation, API calls, recovery |
| `responsive-design.md` | content constraints, breakpoints, reflow, device and input testing |
| `animations-motion-design.md` | purpose, triggers, timing, easing, reduced motion, implementation constraints |
| `seo.md` | indexing, metadata, canonical rules, structured data, social metadata |
| `accessibility.md` | conformance target, semantic requirements, keyboard, assistive technology tests |
| `performance-optimization.md` | performance budgets, measurement plan, asset and runtime strategy |
| `reference-and-decision-map.md` | reference inventory, observed principles, decisions, requirement traceability |

## 4. Route contract

Each route entry should identify:
- path and public/authenticated status;
- purpose and intended audience;
- entry points and navigation relationships;
- content and data requirements;
- primary and secondary actions;
- permission and empty states;
- loading, error, success, and recovery behavior;
- mobile composition;
- metadata and indexability where applicable.

## 5. API integration record

When an interaction consumes backend behavior, identify the source contract, exact route and method, request shape, response shape, auth requirement, error handling, and owning frontend flow. If any of these are not defined, mark them `Pending backend contract`.

## 6. Traceability

Use stable IDs for major requirements and link each to the affected route, spec, implementation area, and acceptance test. This makes review and change impact analysis possible.
