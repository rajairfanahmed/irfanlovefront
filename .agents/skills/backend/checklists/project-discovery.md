# Project Discovery Checklist

Use before substantial backend work. Mark items not applicable with a reason.

## Product context
- [ ] Read the user request, conversation context, PRD/project brief, and relevant root instructions.
- [ ] Identify product purpose, actors, user journeys, and domain concepts.
- [ ] Extract functional and non-functional requirements.
- [ ] Identify integrations, hosting, cost, timeline, and operational constraints.
- [ ] Identify explicit exclusions and data sensitivity.
- [ ] Separate confirmed facts, assumptions, proposals, and blockers.

## Repository inspection
- [ ] Inspect project structure, manifests, runtime versions, and lockfiles.
- [ ] Identify backend and frontend entry points.
- [ ] Inspect relevant routes, handlers, services, models, data access, and tests.
- [ ] Inspect frontend API/auth callers when integration is in scope.
- [ ] Inspect database definitions, migrations, seeds, and configuration shape.
- [ ] Inspect CI, build, deployment, and observability conventions.
- [ ] Do not expose secret values or production credentials.

## Baseline and scope
- [ ] Identify actual test, lint, type-check, build, and migration commands.
- [ ] Run safe baseline checks where practical and record pre-existing failures.
- [ ] Select task mode and workflow depth.
- [ ] Select only relevant references.
- [ ] Decide whether project documentation is warranted.
- [ ] Identify blockers and make only safe, explicit assumptions.
