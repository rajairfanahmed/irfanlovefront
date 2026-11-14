# PRD Quality Review and Readiness

## Review categories

### Product coherence
- Problem, audience, value proposition, and success measures align.
- User roles and permissions are distinguishable.
- MVP solves a coherent end-to-end problem.
- Out-of-scope items and future phases are clear.

### Requirements quality
- Requirements are specific, testable, and traceable.
- Priorities are consistent and justified.
- User journeys include realistic alternate and failure paths.
- Non-functional targets are measurable or clearly marked `TBD`.
- No invented personas, quotes, metrics, or market facts.

### Frontend completeness
- Each page has a clear purpose, route/access rule, content hierarchy, and actions.
- Components and controls have defined behavior.
- Loading, empty, success, failure, disabled, validation, and permission states are covered where relevant.
- Responsive, keyboard, accessibility, and localization needs are considered.
- Frontend operations reference agreed API contract IDs.
- No unsupported data or endpoint assumptions.

### Backend completeness
- Business rules and source-of-truth ownership are clear.
- Entities, state transitions, relationships, and data constraints are defined.
- API operations, schemas, errors, permissions, and idempotency are covered as needed.
- Security, privacy, audit, retention, and failure handling are appropriate to risk.
- Background jobs, webhooks, external dependencies, and recovery paths are defined where relevant.

### Cross-layer consistency
- Every feature has frontend and backend coverage.
- Each frontend API call maps to an approved backend operation.
- Field names, types, nullability, errors, and authorization behavior agree.
- Permissions, roles, and data visibility agree.
- No duplicated or contradictory business rules.
- Traceability IDs link master, frontend, backend, and acceptance criteria.

### Stack and architecture
- Frontend and backend choices are compatible.
- Database and data access choices fit data/query requirements.
- Integrations are feasible and current.
- Architecture is proportionate and avoids needless complexity.
- Existing stack is preserved unless a justified migration is approved.

### Delivery and operations
- Dependencies and risks are visible.
- Milestones have dependency order.
- Estimates reflect known team capacity and uncertainty.
- Testing, deployment, monitoring, backups, and support needs are addressed for the product's risk level.

## Severity

- **Blocker:** makes the product direction, core user journey, data ownership, security boundary, or core integration impossible to implement safely.
- **Critical:** likely to cause a major rework, contract mismatch, data loss, authorization flaw, or failed MVP outcome.
- **Major:** materially affects usability, reliability, maintainability, or scope.
- **Minor:** wording, organization, or low-risk omission.

## Readiness labels

- `DISCOVERY`: product direction is still being established.
- `SCOPE-BASELINED`: users, goals, MVP scope, and priorities are approved.
- `FEATURES-DEFINED`: core feature contracts include both frontend and backend behavior.
- `STACK-APPROVED`: compatible frontend/backend technology choices are approved.
- `CONTRACTS-READY`: data ownership, API contracts, permissions, and integrations are defined for implementation.
- `IMPLEMENTATION-READY`: no unresolved blocker or critical decision remains for the agreed implementation scope, and the user has approved the final package.

Do not label a PRD `IMPLEMENTATION-READY` while required P0 contracts, security boundaries, core integrations, or essential decisions remain open. Identify exactly what blocks readiness.
