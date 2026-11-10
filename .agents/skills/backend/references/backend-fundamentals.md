# Backend Fundamentals

Read this reference when the task requires foundational backend concepts, when the repository boundaries are unclear, or when explaining how a frontend and backend should communicate.

## 1. Backend responsibilities

A backend commonly owns business rules, trusted data access, identity and permissions, integration with external systems, background work, and operational behavior. The frontend presents the user experience; it must not be trusted to enforce permissions or authoritative business rules.

## 2. Client-server request lifecycle

A typical request passes through:
1. Client constructs a request and sends it over HTTPS.
2. Edge proxy, gateway, or web server accepts and routes it.
3. Application middleware handles concerns such as request IDs, parsing, CORS, authentication, and rate limits.
4. Route selects a handler.
5. Validation checks shape, types, and business constraints.
6. Authorization verifies that the actor may perform the requested action on the target resource.
7. Business logic applies domain rules.
8. Data access reads or changes persistent state, potentially within a transaction.
9. The application maps the result or failure to a stable response.
10. Logs and metrics record useful operational context without leaking secrets.

The exact framework order varies. Keep trust boundaries and failure behavior explicit.

## 3. HTTP essentials

Common methods:
- `GET`: retrieve a representation; should not cause a business-state change.
- `POST`: create a resource or initiate an operation.
- `PUT`: replace a resource representation or apply a defined replacement operation.
- `PATCH`: partially update a resource.
- `DELETE`: remove or deactivate a resource according to domain rules.

Common status codes include:
- `200 OK`: successful request with a response body.
- `201 Created`: a resource was created.
- `202 Accepted`: work was accepted for asynchronous processing.
- `204 No Content`: successful request with no response body.
- `400 Bad Request`: malformed or invalid request.
- `401 Unauthorized`: valid authentication is missing or invalid.
- `403 Forbidden`: actor is authenticated but not allowed to perform the action.
- `404 Not Found`: resource or route is not available to the caller.
- `409 Conflict`: request conflicts with current state or uniqueness constraints.
- `422 Unprocessable Content`: syntactically valid request fails semantic validation, where this convention is used.
- `429 Too Many Requests`: rate limit exceeded.
- `500 Internal Server Error`: unexpected server failure.
- `502`, `503`, `504`: upstream or service availability failures.

Choose status codes consistently with the project's API conventions. Never force every success to `200` or expose internal exception details.

## 4. API styles and communication

- **REST:** resource-oriented HTTP APIs; often the simplest fit for browser applications.
- **GraphQL:** clients request structured data through a schema; consider query complexity, authorization, and caching.
- **WebSockets:** bidirectional long-lived communication for realtime needs; require connection authentication, authorization, and lifecycle management.
- **RPC:** operation-oriented calls; useful for strongly defined service-to-service contracts.
- **Events / messaging:** asynchronous communication for decoupled processes; requires delivery, retry, ordering, and idempotency design.

Choose based on actual interaction needs, not popularity.

## 5. Common architecture styles

- **Monolith:** one deployable application with internal modules. Often a strong default for small and medium products because it is simpler to build and operate.
- **Modular monolith:** one deployable application with clear internal boundaries. Useful when the domain is growing but separate services are not yet justified.
- **Microservices:** independently deployable services with network boundaries and operational overhead. Use when independent scaling, ownership, isolation, or deployment needs justify the complexity.
- **Event-driven:** components communicate through events or messages, often to decouple asynchronous workflows.

Do not split a system into microservices merely to appear scalable.

## 6. Backend responsibilities versus frontend responsibilities

Backend is authoritative for:
- Authentication and permission enforcement.
- Prices, totals, subscription state, entitlements, and other business-critical calculations.
- Data validation and persistence.
- Ownership and access checks.
- Payment confirmation and webhook processing.

Frontend may provide early validation and user feedback, but the backend must repeat all security- and business-critical checks.

## 7. Stateful and stateless behavior

A stateless request does not depend on hidden in-memory state from a prior request. Authentication can use signed tokens or server-side sessions, each with different revocation and storage trade-offs. Do not assume JWT is always better than sessions. Consider deployment topology, browser security, revocation, refresh, and operational requirements.

## 8. Design questions

Before choosing an implementation, ask:
- What is the source of truth for each piece of data?
- Which actor can perform each operation?
- Which operations must be atomic?
- Which work can happen asynchronously?
- What happens when a dependency times out or fails?
- What must be observable for support and incident diagnosis?
- What data must never appear in logs or client responses?
