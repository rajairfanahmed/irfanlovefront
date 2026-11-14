# Frontend/Backend Integration Contracts

## Purpose

Prevent the frontend and backend from being specified independently. Each user-visible operation must map to a server-side capability or a clearly documented local-only action.

## System boundaries

Record which layer owns:
- Presentation, transient client state, client-side navigation, and user feedback.
- Authoritative business rules, access control, and persisted state.
- Identity/session state and permission decisions.
- External provider credentials and provider-side state.
- Background processing, retries, notifications, and reconciliation.

The browser is not a trusted enforcement boundary. Frontend validation improves usability but does not replace server validation or authorization.

## API contract content

For every operation, define:
- Stable `API-###` ID and linked `FEAT-###` / `UI-###` IDs.
- User/system actor and purpose.
- Method and path or selected operation type.
- Authentication requirement and authorization rule.
- Path/query/body schema, field types, nullability, validation, and examples.
- Response schema and relevant status codes.
- Standard error format and field/domain error mapping.
- Pagination, filters, sorting, and versioning where needed.
- Idempotency, concurrency, and side effects where needed.

If API naming is not yet approved, document an operation proposal with `PROPOSED` status rather than pretending it is final.

## Error contract

Define a consistent mapping between server errors and UI outcomes. Include, where relevant:
- Authentication expired or missing.
- Forbidden or resource unavailable.
- Field validation failure.
- Business rule conflict.
- Not found.
- Rate limit or quota exceeded.
- External provider unavailable.
- Network timeout and unknown failure.

Do not expose stack traces, secrets, internal provider responses, or sensitive data to clients.

## Special integration patterns

### Webhooks

Specify signature verification, replay protection, idempotency, event identity, retry policy, ordering assumptions, acknowledgment timing, dead-letter handling, and reconciliation. The frontend must not be the source of truth for webhook-driven state.

### File uploads

Specify allowed types, size limits, scanning, storage ownership, upload authorization, signed URL lifecycle if used, progress/failure behavior, and deletion policy.

### Background work

Specify job trigger, payload, status visibility, retry/backoff, failure visibility, cancellation, duplicate prevention, and monitoring.

### Real-time updates

Specify transport, authentication, event schema, ordering, reconnection, missed-event recovery, and a polling/fallback strategy if required.

### Payments and external state

Specify authoritative provider events, webhook reconciliation, idempotent commands, refund/cancellation flows, and how the UI represents pending versus confirmed state.

## Contract consistency checks

- Every frontend data action maps to an API/operation ID.
- Every API operation has a caller or operational purpose.
- Frontend field names and types match backend request/response schemas.
- The UI maps all relevant success and error outcomes.
- Authorization is enforced server-side and reflected in the UI.
- No frontend document promises data or behavior the backend cannot supply.
- No backend endpoint is added only because a screen name suggests it.
