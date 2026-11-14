---
name: ux-interaction-design
description: Implements complete frontend user journeys, navigation behavior, form validation, client and URL state, API-backed actions, async feedback, permissions presentation, and error recovery against verified backend contracts.
---

# UX Interaction Design

## Objective

Make the interface behave predictably from the user's first action through completion, interruption, and recovery.

## Before implementation

Read `ux-interaction-design.md`, `DESIGN_BRIEF.md`, `frontend-architecture.md`, `ui-components.md`, backend `api-contract.md`, and the relevant route and feature code.

Also inspect repository instructions, the actual implementation, installed library versions, and relevant tests. Do not rely on a specification when the code or framework version shows that it is outdated. Record material gaps rather than silently inventing missing requirements.

## Reference library

Read the references that apply to the task before making domain decisions. The complete set is listed here so the specialist can load the right guidance without guessing file names.

- [`user-flows-and-information-architecture.md`](references/user-flows-and-information-architecture.md)
- [`forms-validation-and-error-recovery.md`](references/forms-validation-and-error-recovery.md)
- [`interaction-patterns.md`](references/interaction-patterns.md)
- [`usability-and-feedback.md`](references/usability-and-feedback.md)

## Work sequence

1. Map each flow from entry point through user action, validation, request, response, resulting state, and recovery path.
2. Assign state to the correct owner: ephemeral component state, route or URL state, shared client state, or server-owned data. Avoid copying server truth into competing state stores.
3. Wire forms and actions to exact documented endpoints and request/response types. Do not invent routes, fields, roles, or error formats.
4. Implement client-side usability validation while preserving server validation as authoritative. Map backend field errors to the correct controls and form summary.
5. Implement pending, disabled, success, empty, validation, permission, timeout, network failure, retry, and confirmation behavior as appropriate.
6. Use optimistic updates only when rollback, conflict behavior, and data consistency are understood. Respect idempotency and concurrency rules supplied by the backend.
7. Preserve browser navigation, URL shareability, query state, and refresh behavior where the flow requires them.
8. Handle duplicate submissions, aborted requests, stale responses, and unmounted views safely.
9. Write interaction tests for the primary path and the most important failure or recovery path.

## Required outputs

Working user journeys, form and mutation behavior, navigation state, API integration, feedback and recovery patterns, plus tests for critical transitions.

## Ownership boundaries

Do not duplicate server business rules or authorization. Do not create generic component styling. Do not change backend contracts without an explicit backend review. Component-level semantics and reusable props remain with UI Components.

## Review before handoff

- Every primary flow has a defined result and recovery path, backend contracts are respected, async states are observable, repeated actions are safe, URL state behaves intentionally, and tests cover critical paths.
- Review the diff for unrelated changes, unused code, debug output, or accidental dependency additions.
- Run the relevant available checks and report their actual outcome.
- Record open issues with impact and owner.

## Handoff

Identify the files changed, decisions made, routes or components affected, tests run, and any dependency on another specialist. Do not claim completion for work that was not verified.
