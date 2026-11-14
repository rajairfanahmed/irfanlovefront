# Full-Stack Feature Definition

## Objective

Define each feature as one complete user-to-system capability. A feature must not be considered finalized when only its screen or only its server logic has been described.

## Feature definition checklist

### Product intent
- Stable feature ID and title.
- User problem and expected outcome.
- Actor/role and permission context.
- Trigger, preconditions, and completion state.
- Priority and release phase.

### Frontend side
- Page, route, screen, or entry point.
- Page purpose and user task.
- Layout regions and content hierarchy.
- Components and controls.
- User actions and navigation behavior.
- Input fields, client validation, and user guidance.
- Loading, empty, success, error, disabled, offline, and permission states as applicable.
- Confirmation, undo, destructive-action safeguards, and feedback.
- Responsive behavior and touch interaction.
- Accessibility expectations and keyboard behavior.
- Visual or interaction decisions that require Design Engineer refinement.

### Backend side
- Server-side use case and business rules.
- Authoritative data and state transitions.
- Entities/fields affected and relationships.
- Server-side validation and invariants.
- Authentication and authorization requirements.
- Transaction boundaries, concurrency, and idempotency where relevant.
- Side effects, events, notifications, jobs, and external calls.
- Audit history, retention, deletion, and privacy implications.
- Failure handling, retries, and reconciliation.

### Contract between the sides
- API operation(s) or an explicitly documented alternative such as server action, GraphQL operation, event, or managed SDK.
- Method/path or operation name after it has been decided.
- Authentication context and authorization outcome.
- Request and response schema, including field types and nullability.
- Validation and domain error codes.
- Pagination/filter/sort semantics where relevant.
- Upload/download, streaming, or real-time behavior where relevant.
- Loading and failure mapping in the UI.

### Verification
- Acceptance criteria for the full user journey.
- Frontend tests and backend tests required.
- Integration and end-to-end scenarios.
- Negative, boundary, role, and concurrency cases where relevant.
- Analytics or operational signals only when they serve an approved goal.

## Definition of ready

A feature is ready for implementation when:
1. The user outcome and actor are clear.
2. Frontend behavior and all meaningful UI states are specified.
3. Backend rules, data ownership, and permission checks are clear.
4. The frontend operation maps to an agreed backend contract.
5. Important edge cases and failure outcomes are addressed.
6. Acceptance criteria are testable.
7. Dependencies and assumptions are visible.
8. The user has approved material decisions.

## When a detail does not apply

Mark it `N/A` and give a short reason. Do not leave blank sections that look accidentally incomplete. If it is unknown, mark it `OPEN` or `TBD`, not `N/A`.
