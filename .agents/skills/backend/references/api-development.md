# API Development and Contracts

Read when adding, modifying, documenting, reviewing, or integrating APIs.

## 1. Contract-first thinking

Before implementation, identify consumers, resources, operations, payloads, response shapes, authentication, authorization, errors, pagination, and compatibility requirements. For medium or large APIs, document the contract in the project's chosen format (for example, OpenAPI) when appropriate.

## 2. Endpoint design

Use consistent resource naming and HTTP methods. Keep URLs predictable. Avoid exposing internal database structure as the public API unless that is a deliberate contract. Use versioning only when compatibility needs justify it; do not introduce versions mechanically.

## 3. Request validation

Validate:
- Required and optional fields.
- Data types, formats, length, ranges, and allowed values.
- Nested structures and arrays.
- Cross-field and domain constraints.
- Resource existence and actor access.

Reject unexpected fields where mass assignment could change protected attributes. Never rely only on browser-side validation.

## 4. Response design

Use consistent response schemas and naming. Return only data the caller is allowed to see. Avoid exposing stack traces, SQL, internal IDs that are not part of the contract, or sensitive metadata.

Document whether collections are raw arrays or wrapped objects, and standardize pagination metadata. Avoid inconsistent response shapes across endpoints without a reason.

## 5. Errors

Define a stable error structure, such as a machine-readable code, safe message, optional field details, and request / correlation ID. Keep user-facing messages useful but do not reveal internal implementation details. Distinguish validation, authentication, authorization, missing resources, conflicts, rate limits, dependency failures, and unexpected server errors.

## 6. Pagination, filtering, and sorting

- Apply sensible maximum page sizes.
- Use deterministic sorting with a unique tie-breaker.
- Prefer cursor pagination for large or rapidly changing datasets when suitable.
- Whitelist sortable and filterable fields; never interpolate arbitrary client input into query syntax.
- Define behavior for invalid or conflicting query parameters.

## 7. Idempotency and retries

For operations that may be retried (payments, order creation, webhook handling, job submission), define idempotency semantics. A repeated request should not accidentally duplicate a charge, order, entitlement, or external side effect. Use idempotency keys or business-level uniqueness where appropriate.

## 8. API security

Authenticate where required, authorize every protected action, validate input, limit request size, rate-limit sensitive operations, and avoid leaking resource existence where that creates a security risk. Read `backend-security.md` for detailed controls.

## 9. CORS and browser clients

Configure allowed origins deliberately. Avoid wildcard origins with credentialed requests. Match cookie, authorization-header, CSRF, and credential settings to the chosen authentication model and actual deployment origins. CORS is not an authorization mechanism.

## 10. API documentation

For each operation, document:
- Method and path.
- Purpose and access requirements.
- Path, query, and body parameters.
- Validation rules.
- Success response and status.
- Expected error responses.
- Side effects and idempotency behavior.
- Pagination or rate-limit behavior where relevant.

Keep API docs synchronized with actual code and tests.

## 11. Verification

Test valid requests, invalid payloads, missing authentication, insufficient permissions, missing resources, conflict conditions, boundary values, repeated requests, and dependency failure behavior. Confirm persisted state, not merely the returned status code.
