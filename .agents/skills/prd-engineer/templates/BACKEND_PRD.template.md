# Backend Product Requirements Document

> Status: PROPOSED / FINALIZED  
> Version: 0.1  
> Last updated: YYYY-MM-DD  
> Source of truth for server-side behavior, data, APIs, security, and backend operations.

## 1. Backend Overview
- Runtime/framework/language:
- Architecture style:
- API style:
- Database/data access:
- Authentication/authorization:
- Hosting/deployment:
- External integrations:

## 2. System Responsibilities and Boundaries
[Backend-owned capabilities, source-of-truth rules, external systems, and frontend responsibilities.]

## 3. Domain Model and Data Ownership
### DATA-001: [Entity]
- Purpose:
- Fields and types:
- Required/optional and constraints:
- Relationships/cardinality:
- Ownership/tenant boundary:
- Lifecycle/state transitions:
- Uniqueness/index/query needs:
- Sensitivity/retention/deletion:
- Audit requirements:

## 4. Business Logic and Workflows
[Rules, calculations, state machines, invariants, transactions, concurrency, side effects.]

## 5. API Contract
### API-001: [Operation]
- Feature/UI IDs:
- Actor and purpose:
- Method/path or operation:
- Authentication/authorization:
- Path/query parameters:
- Request schema/example:
- Response schema/example:
- Status codes and error format:
- Validation/domain errors:
- Pagination/filter/sort:
- Idempotency/concurrency:
- Side effects/events/jobs:

## 6. Authentication and Authorization
[Identity/session/token behavior, role/permission matrix, resource ownership, tenant isolation, recovery.]

## 7. Integrations and Background Processing
[Providers, webhooks, queues, scheduled jobs, retries, reconciliation, real-time delivery.]

## 8. Security and Privacy
[Threat-sensitive requirements, data protection, abuse controls, audit, retention, export/deletion.]

## 9. Reliability and Operations
[Timeouts, retries, idempotency, observability, alerting, backups, recovery, migrations, graceful degradation.]

## 10. Backend Non-Functional Requirements
| ID | Category | Requirement/target | Verification | Status |
|---|---|---|---|---|

## 11. Backend Testing and Acceptance
[Unit, API, integration, authorization, security, concurrency, and end-to-end scenarios. Link acceptance IDs.]

## 12. Open Items and Assumptions
| ID | Item | Impact | Next decision | Status |
|---|---|---|---|---|

## 13. Handoff to Backend Engineering
- Read this document before implementation.
- Read `MASTER_PRD.md` for approved product goals, scope, roles, and priorities.
- Keep `architecture.md`, `api-contract.md`, and `database-design.md` synchronized with this PRD.
- Confirm all API and data decisions before frontend integration work depends on them.
