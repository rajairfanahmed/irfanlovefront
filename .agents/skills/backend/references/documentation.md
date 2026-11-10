# Backend Documentation Guidance

Read when creating or updating project-specific technical documentation. Prefer existing repository conventions over this suggested structure.

## 1. Documentation principles

- Document decisions and behavior that help someone build, operate, test, or maintain the system.
- Keep documents concise, accurate, and linked to actual code.
- Separate confirmed facts from proposals, assumptions, and open questions.
- Avoid duplicate documentation and stale copied content.
- Update docs in the same change as the implementation when contracts or behavior change.
- Do not document secrets or private production configuration.

## 2. Suggested project documents

For a new or complex backend, consider:

### `architecture.md`
Purpose, system context, components, module boundaries, request flow, external dependencies, deployment shape, key decisions, and trade-offs.

### `database-design.md`
Data entities / collections, fields, relationships, constraints, indexes, ownership / tenant boundaries, migrations, retention, and transaction requirements.

### `api-contract.md`
Endpoint method and path, access requirements, parameters, request / response examples, validation, statuses, error format, side effects, and idempotency. Use OpenAPI or another established contract format if appropriate.

### `implementation-plan.md`
Modules / vertical slices, dependencies, sequence, acceptance criteria, test requirements, risks, and out-of-scope work.

### `testing-strategy.md`
Test layers, tools, environment, fixtures, integration boundaries, security cases, regression approach, and release checks.

### `progress.md`
Completed, in progress, pending, blocked, test outcomes, decisions, and known risks. Keep it factual and update it as work changes.

Do not create every file automatically. Choose based on complexity, risk, and the usefulness of the document.

## 3. Document lifecycle

1. Inspect existing docs and repository conventions.
2. Identify missing decisions or contracts.
3. Copy only relevant templates from the skill package.
4. Replace every placeholder with verified project-specific information or clearly label it pending.
5. Review consistency with code and tests.
6. Update docs when implementation changes.
7. Remove obsolete statements rather than appending contradictory notes indefinitely.

## 4. Examples and diagrams

Use small architecture or sequence diagrams when they clarify boundaries or flows. Keep diagrams synchronized with implementation. Examples must be safe, synthetic, and representative; never use real credentials or personal data.

## 5. Completion

A document is useful only if it answers a real project question and remains accurate. Do not create documentation solely to satisfy a checklist.
