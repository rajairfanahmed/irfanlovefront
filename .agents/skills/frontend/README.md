# Frontend Engineering and Design Skills

A coordinated frontend skill system for researching, designing, specifying, implementing, testing, and maintaining production web interfaces.

The package contains one suite-level guide, one design-engineering orchestrator, ten frontend specialist skills, and an optional GitHub README specialist. Each skill has a clear remit, documented inputs and outputs, specialist references, and review criteria.

## Package structure

- `SKILL.md`: suite entry point and routing rules.
- `WORKFLOW.md`: end-to-end workflow, handoffs, and ownership boundaries.
- `00-design-engineer/`: turns project inputs into a unified design brief and specialist specifications.
- `01-frontend-architecture/`: establishes the application structure, routing, data access, and technical foundations.
- `02-visual-design/`: defines and implements the visual language and design tokens.
- `03-structural-layout/`: composes page shells, grids, and page-level structures.
- `04-ui-components/`: builds reusable, accessible interface components.
- `05-ux-interaction-design/`: implements user flows, forms, state transitions, and API-backed interactions.
- `06-responsive-design/`: verifies and refines behavior across screen sizes and input types.
- `07-animations-motion-design/`: implements purposeful motion and interaction feedback.
- `08-seo/`: handles crawlability, metadata, structured data, and sharing metadata.
- `09-accessibility/`: audits and improves accessibility across complete user journeys.
- `10-performance-optimization/`: measures and improves loading, responsiveness, and visual stability.
- `github-readme-writer/`: prepares accurate project documentation for GitHub.
- `checklists/` and `templates/`: reusable review controls and project artifacts.

## Recommended use

For a new product or a substantial redesign, start with `00-design-engineer/SKILL.md`, then follow `WORKFLOW.md`. For an existing application, inspect the repository and invoke only the specialist skills needed for the requested change, plus their required dependencies and quality checks.

The numbered sequence is a dependency guide, not a reason to run every skill for a one-line change. Accessibility, responsive behavior, semantic HTML, security boundaries, and performance budgets remain design and implementation constraints from the beginning.

## Documentation handoff

When the repository has no established documentation convention, use the root `docs/` directory. Frontend specifications and backend contracts share this location so both disciplines can find one source of truth. Preserve an established project convention when it already exists and add an index rather than creating duplicate copies.

The default frontend specification files are:

```text
docs/
├── DESIGN_BRIEF.md
├── frontend-architecture.md
├── visual-design.md
├── structural-layout.md
├── ui-components.md
├── ux-interaction-design.md
├── responsive-design.md
├── animations-motion-design.md
├── seo.md
├── accessibility.md
├── performance-optimization.md
└── reference-and-decision-map.md
```

The backend commonly supplies `architecture.md`, `api-contract.md`, `database-design.md`, `implementation-plan.md`, and `testing-strategy.md`. Read the files that exist. Never invent missing contracts or duplicate backend-owned documentation.

## Operating standards

- Inspect before changing. Preserve sound project decisions and working code.
- Prefer the smallest architecture that satisfies verified requirements.
- Treat user requirements and confirmed backend contracts as constraints, not suggestions.
- Design for narrow and wide viewports from the start.
- Build semantic, keyboard-operable interfaces as the default.
- Measure performance and validate real user flows. Do not claim tests passed unless they ran.
- Make a specific design decision and justify it. Avoid unranked option lists and generic template output.
- Write interface copy that is natural, useful, specific, and free of filler. Do not use em dashes in project copy.
- Do not add claims, testimonials, ratings, statistics, feature promises, or integrations that the project cannot substantiate.
- Use installed project documentation and current official references when library APIs or framework behavior may have changed.

## Compatibility

The package is stack-agnostic. It can guide React, Next.js, Vue, Svelte, Angular, and other frontend stacks, but it must follow the framework and versions actually installed in the target repository. It does not require a specific styling, animation, state, or component library.
