# API Development and Contracts

Read when adding, modifying, documenting, reviewing, or integrating APIs.

## 1. Contract-first design

Before implementation, identify consumers, resources, operations, payloads, response shapes, authentication, authorization, errors, pagination, compatibility, and side effects. For medium/large APIs, use OpenAPI or an established schema format as the machine-readable source of truth where suitable.

## 2. Endpoint semantics

Use predictable resource naming and correct HTTP methods. Do not expose internal database structure as the public API unless intentional. Add versioning only when compatibility needs justify it. Preserve established conventions unless they are unsafe or inconsistent enough to warrant a deliberate migration.

## 3. Request validation

Validate required/optional fields, types, formats, lengths, ranges, allowed values, nested structures, cross-field rules, resource existence, and caller access. Reject unexpected fields when mass assignment could change protected values. Browser validation is not sufficient.

## 4. Responses

Use consistent naming and response schemas. Return only fields the caller is authorized to see. Document raw arrays vs wrapped objects, pagination metadata, date/time formats, and monetary precision. Never expose stack traces, SQL details, secrets, or internal diagnostic data.

## 5. Errors

Define a stable error shape with a machine-readable code, safe message, optional field details, and request/correlation ID. Distinguish validation, authentication, authorization, missing resource, conflict, rate limit, dependency failure, and unexpected server error. Do not make frontend code parse unstable provider error messages.

## 6. Pagination, filtering, and sorting

Bound page sizes. Use deterministic sorting with a unique tie-breaker. Prefer cursor pagination for large or frequently changing collections when suitable. Allow-list sort/filter fields; never interpolate arbitrary client input into query expressions. Define invalid-parameter behavior.

## 7. Idempotency and retries

For operations that may be retried, including payments, orders, webhook processing, and job submission, define idempotency. Repeated requests must not accidentally duplicate charges, entitlements, records, or external side effects. Use idempotency keys and/or business uniqueness constraints.

## 8. API security

Authenticate where required, authorize every protected action and resource, validate input, limit payload size, rate-limit sensitive operations, and consider resource-enumeration leaks. Read `backend-security.md` for detailed controls.

## 9. Browser clients and CORS

Configure trusted origins deliberately. Never combine wildcard origins with credentialed browser requests. Match cookies, authorization headers, CSRF, and credentials to the actual auth model and deployment origins. CORS is not authorization.

## 10. API documentation

For each operation, document method/path, purpose, access, parameters, validation, success status/body, errors, side effects, idempotency, pagination, and rate limits. Keep documentation synchronized with code and tests.

## 11. Verification

Test valid/invalid requests, missing auth, insufficient permissions, missing resources, conflicts, boundaries, repeated requests, and dependency failures. Check persistence and side effects, not just status codes.
