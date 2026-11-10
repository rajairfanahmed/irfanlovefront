# Project Discovery Checklist

Use before substantial backend work. Mark items not applicable when justified.

## Project context
- [ ] Read the user-provided project information and relevant root documentation.
- [ ] Identify product purpose, actors, key user journeys, and business domain.
- [ ] Extract functional and non-functional requirements.
- [ ] Identify constraints, technology preferences, hosting expectations, and out-of-scope items.
- [ ] Separate confirmed facts, assumptions, proposals, and open questions.

## Repository inspection
- [ ] Inspect repository structure and relevant manifests / lockfiles.
- [ ] Identify frontend and backend entry points.
- [ ] Inspect relevant routes, services, models, data access, and tests.
- [ ] Inspect frontend API clients and authentication flow when integration is in scope.
- [ ] Inspect database schemas, migrations, and sample environment configuration.
- [ ] Identify existing conventions and documentation; avoid duplicates.
- [ ] Do not expose secret values or production credentials.

## Baseline and scope
- [ ] Identify available test, lint, type-check, build, and migration commands.
- [ ] Run safe baseline checks when practical and record pre-existing failures.
- [ ] Confirm the requested work mode and boundaries.
- [ ] Select only the relevant references from the skill.
- [ ] Decide whether documentation is needed based on scope and risk.
- [ ] Identify blockers and make only safe, explicit assumptions.
