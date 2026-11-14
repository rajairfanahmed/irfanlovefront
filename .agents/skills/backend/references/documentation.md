# Backend Documentation Guidance

Read when creating or updating project-specific technical documentation.

## 1. Principles

Document decisions and behavior that help someone build, operate, test, or maintain the system. Keep docs concise, accurate, linked to implementation, and synchronized with code. Separate confirmed facts from proposals, assumptions, and open questions. Avoid duplicate docs and stale copied content. Never include secrets.

## 2. Canonical cross-agent documentation

For new projects with no established convention, use repository root `docs/` and these names so frontend agents can discover backend contracts:

- `architecture.md`: purpose, context, components, boundaries, request flow, integrations, deployment shape, decisions, risks.
- `database-design.md`: entities/collections, fields, relationships, constraints, indexes, ownership/tenant boundaries, migrations, transactions, retention.
- `api-contract.md`: operations, paths, access, schemas, statuses, errors, side effects, idempotency, pagination, compatibility.
- `implementation-plan.md`: vertical slices, dependencies, sequence, acceptance criteria, tests, risks, exclusions.
- `testing-strategy.md`: test layers, tools, environment, fixtures, security cases, regression and release checks.
- `progress.md`: factual status, completed/in-progress/pending/blocked, verification evidence, decisions, and risks.

Do not create every document automatically. Choose based on complexity and risk.

## 3. Existing documentation conventions

If an established structure such as `docs/backend/` already exists, preserve it. Add an index at `docs/README.md` or the existing docs landing page linking to exact file paths. Do not duplicate contracts in root and nested folders. If consumers expect a canonical path, update their instructions to point to the actual location.

## 4. Document lifecycle

Inspect existing docs, identify missing contracts/decisions, create only useful docs from templates, replace placeholders with verified facts or mark them pending, review consistency with code/tests, update docs as behavior changes, and remove obsolete statements rather than appending contradictions.

## 5. Diagrams and examples

Use concise diagrams when they clarify boundaries or sequence. Keep them synchronized with implementation. Use synthetic examples, never real credentials or personal data.

## 6. Completion

A document is useful only when it answers a real project question and remains accurate. Documentation is not complete because all template headings are filled; it is complete when it matches verified behavior.
