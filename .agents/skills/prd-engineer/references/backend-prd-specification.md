# Backend PRD Specification

## Purpose

Define server-side responsibilities and operational behavior so Backend Engineering can implement the product without inventing business rules, data ownership, or API contracts.

## Backend architecture requirements

Document:
- Runtime, framework, and language decisions with approved versions where known.
- Application/module boundaries and responsibility of each module.
- API style and external integration boundaries.
- Data stores and ownership boundaries.
- Background processing, scheduled jobs, eventing, and real-time needs.
- Environments, deployment, and operational ownership.

Prefer the simplest architecture that satisfies approved requirements. Do not default to microservices, event sourcing, CQRS, or distributed infrastructure without a concrete reason.

## Data design

For each entity or aggregate, define:
- Stable data ID and domain purpose.
- Fields, types, required/optional status, constraints, defaults, and sensitive classification.
- Primary identifiers and relationships/cardinality.
- Ownership and tenant/account boundary.
- Lifecycle and allowed state transitions.
- Uniqueness and integrity rules.
- Query patterns and relevant indexes.
- Retention, archival, export, and deletion behavior.
- Audit history and soft-delete requirements where relevant.

Do not write database-specific DDL until the database and data access approach are approved. Distinguish domain concepts from physical tables/collections.

## API and server behavior

For each operation, define:
- Stable API ID, purpose, actor, and permission.
- HTTP method/path or agreed operation style.
- Path/query parameters and request schema.
- Response schema and status codes.
- Authentication and authorization requirements.
- Validation rules and domain error codes.
- Pagination/filter/sorting semantics where applicable.
- Idempotency and concurrency requirements where applicable.
- Rate limits or abuse controls where justified.
- Side effects, emitted events, notifications, or jobs.

Examples must match the approved schema. Label illustrative values and do not represent them as real production data.

## Business logic

Specify invariants, calculations, workflow states, transitions, permissions, transactional behavior, ordering, conflict handling, and rollback/recovery. Identify the authoritative layer for each rule. Business-critical rules must not exist only in the browser.

## Security and privacy

Consider:
- Authentication, authorization, role/permission design, and resource ownership.
- Tenant isolation and prevention of insecure direct object references.
- Input validation, output encoding, injection defense, CSRF/CORS where relevant.
- Secret management, encryption, transport security, and key handling.
- Sensitive logging, privacy, consent, retention, export, and deletion.
- Rate limiting, abuse prevention, fraud controls, and account recovery.
- Audit trails for privileged or consequential operations.
- Dependency, webhook, file-upload, and integration security.

Do not claim compliance with a regulation or certification without a verified scope and evidence.

## Reliability and operations

Define relevant requirements for timeouts, retries, idempotency, queue behavior, webhook reconciliation, observability, alerting, backups, restoration, migrations, graceful degradation, and incident diagnosis.

Do not add queues or caches without a use case. State consistency expectations and failure recovery behavior explicitly.

## Testing and acceptance

Cover unit tests for domain rules, API/contract tests, database/integration tests, authorization tests, abuse/security tests, concurrency/idempotency tests, and end-to-end flows as applicable. Link backend acceptance criteria to the same feature IDs used by the Frontend PRD.
