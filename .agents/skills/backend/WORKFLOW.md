# Backend Engineering Workflow

This file defines the execution order for the `backend-engineering` skill. `SKILL.md` is the role and policy authority; this file turns it into an operational sequence.

## 1. Select the workflow depth

| Task size | Examples | Required workflow |
|---|---|---|
| Small | Fix one validation bug, correct one response field | Inspect affected code, reproduce, fix, test, review diff |
| Medium | Add one feature/module or integrate one provider | Discovery, contract review, focused plan, vertical slices, integration tests, handoff |
| Large | New backend, major feature set, major refactor | Full discovery, stack/architecture decision, data/API contracts, implementation plan, staged vertical slices, full QA and release review |

Do not force the large-project process onto a small change. Do not skip architecture and contract work on a new system.

## 2. Canonical stage sequence

### Stage 0: Understand the request

- Read the current task and all relevant prior conversation context.
- Find the PRD/project brief and repository-specific agent instructions.
- Identify desired outcome, scope, exclusions, deadline/operational constraints, and required outputs.
- Select the work mode from `SKILL.md`.
- Ask a question only if a critical business or safety decision cannot be inferred safely.

**Gate:** The agent can state what success means and what is out of scope.

### Stage 1: Repository reconnaissance

- Inspect repository structure, manifests, runtime versions, framework conventions, and lockfiles.
- Trace the actual request path from route to business logic to data access.
- Inspect database schema/migrations and relevant frontend callers if integration is involved.
- Inspect tests and actual lint/type-check/build commands.
- Check configuration names without exposing secret values.
- Run safe baseline checks and record pre-existing failures.

**Gate:** Existing behavior, constraints, and baseline failures are known. No architectural decision is based on assumptions about unseen code.

### Stage 2: Requirements and domain model

- List actors, resources, actions, workflows, business invariants, and lifecycle states.
- Identify sensitive data, tenant boundaries, ownership, retention/deletion expectations, and abuse cases.
- Convert requirements into observable acceptance criteria.
- Separate confirmed facts from assumptions and open questions.

**Gate:** Each feature can be expressed as expected behavior and testable acceptance criteria.

### Stage 3: Stack and architecture decision (large/new projects only)

- Read stack-selection and architecture references.
- Preserve the current stack when it meets requirements.
- Choose a primary runtime/framework, database, and hosting model based on evidence.
- Add cache, queue, search, object storage, or microservices only when justified.
- Record important decisions and trade-offs.

**Gate:** The proposed architecture is understandable, proportionate, and implementable with the repository/environment.

### Stage 4: Data and API contracts

- Model entities/aggregates, fields, relationships, constraints, and ownership.
- Define transactions, concurrency controls, indexes, and migration strategy.
- Define endpoints/events, auth requirements, request/response schemas, errors, pagination, idempotency, and side effects.
- Inspect frontend callers or coordinate exact handoff with frontend design/architecture.
- Use OpenAPI or an equivalent machine-readable contract when appropriate.

**Gate:** Backend and frontend have one agreed source of truth. No endpoint, field, or auth behavior is invented by a downstream agent.

### Stage 5: Implementation plan and test plan

Break work into vertical slices. Each slice identifies dependencies, behavior, schema/API changes, security controls, tests, and acceptance criteria. Order by dependency, not by folder or layer. Plan migrations and provider sandbox use safely.

**Gate:** The next slice can be implemented and verified independently.

### Stage 6: Implement vertical slices

For each slice:
1. Implement schema/migration if required.
2. Implement domain/application logic.
3. Implement transport/API layer.
4. Add authentication, authorization, validation, and error handling.
5. Add external integration or asynchronous work if needed.
6. Add tests for behavior and negative cases.
7. Run focused tests and static checks.
8. Update API/data docs and progress.
9. Review the diff before the next slice.

**Gate:** The slice meets its acceptance criteria, or blockers are explicitly documented.

### Stage 7: Frontend and provider integration

- Verify real request/response behavior, not merely TypeScript compilation.
- Confirm cookies/headers, CORS, CSRF, token refresh, and logout where applicable.
- Verify loading, empty, success, validation, timeout, retry, and error contracts.
- Test provider sandbox callbacks/webhooks and duplicate/out-of-order events where relevant.
- Confirm client callbacks do not become the source of truth for payment, entitlements, or permissions.

**Gate:** Each cross-boundary flow works against the agreed contracts or is clearly marked as blocked.

### Stage 8: Security, reliability, and performance review

- Review trust boundaries, authorization, tenant isolation, injection, file handling, secrets, rate limits, and webhook verification.
- Review transactions, retries, idempotency, timeouts, and failure recovery.
- Measure performance before introducing optimization infrastructure.
- Inspect logs and errors for sensitive-data leakage.

**Gate:** Applicable high-risk issues are fixed or explicitly escalated. No unsupported security/scale claim is made.

### Stage 9: Regression and release readiness

- Run focused tests, module integration tests, relevant end-to-end journeys, lint, type check, build, and migration validation.
- Inspect final diff, generated files, secrets, docs, and compatibility.
- Confirm environment, migration, backup, rollback, health check, and observability readiness before a release.
- Deploy only when the user explicitly authorizes the target environment and actions.

**Gate:** Results are evidenced. Deployment and production checks are accurately reported.

### Stage 10: Handoff

Provide changed paths, decisions, data/API changes, verification results, frontend integration status, known limitations, and next required actions. Keep `docs/progress.md` current for larger tasks.

## 3. Cross-agent ownership boundaries

| Concern | Backend owns | Frontend owns |
|---|---|---|
| Data model | Authoritative schema, constraints, persistence, ownership | UI view models and form presentation, derived only from API contract |
| Business rules | Authoritative validation, pricing, entitlements, state transitions | Early usability validation and display of server results |
| Authentication | Credential/session/token verification and server identity | Login UI, client session handling according to the agreed contract |
| Authorization | Server-side permission enforcement on every protected operation | Hide/disable unavailable actions for usability only |
| API | Endpoint, method, request/response schema, errors, versioning | API client, typed consumption, retry/loading/error UX |
| Security | Trust boundaries, secrets, CSRF/CORS policy, abuse prevention, data access | Safe rendering, input UX, secure cookie usage, no secret exposure |
| Integration | Provider adapters, webhooks, queues, persistence of provider state | Trigger flows and show truthful status |
| Testing | Domain, database, API, security, integration tests | Component, interaction, responsive, accessibility and browser-flow tests |

Neither side silently changes a shared contract. The changing agent updates the canonical contract and coordinates consumer updates.

## 4. Documentation contract

Default canonical location is repository root `docs/` to ensure design and frontend agents can locate backend contracts. The canonical names are `architecture.md`, `database-design.md`, `api-contract.md`, `implementation-plan.md`, `testing-strategy.md`, and `progress.md`.

If the repository already has an established nested structure, preserve it. Add a docs index pointing to exact locations; do not create competing copies. Update contract docs in the same change as implementation.

## 5. Escalation and safe assumptions

Proceed without asking when the answer is in the PRD, codebase, conversation, or can be safely inferred. State assumptions explicitly. Stop only the specific unsafe operation when it could destroy user data, expose secrets, incur costs, alter production, violate a business rule, or trigger an irreversible side effect without authorization. Continue independent safe work.

## 6. Completion status vocabulary

- **Planned:** accepted scope, not implemented.
- **Implemented:** code has been changed, not necessarily verified.
- **Verified:** relevant checks were executed and passed.
- **Partially verified:** some checks passed; named checks remain outstanding.
- **Blocked:** cannot proceed because of a named dependency or decision.
- **Not run:** no test/inspection was performed.

Never use “complete” to mean only “files were created” or “the code compiles.”
