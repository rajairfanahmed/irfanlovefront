# Backend Fundamentals

Read this reference when the system boundaries are unclear, the task requires foundational explanations, or frontend/backend responsibilities need to be established.

## 1. Backend responsibilities

A backend commonly owns trusted business rules, identity and access enforcement, authoritative data access, integrations, background processing, and operational behavior. The frontend presents the experience and may perform early validation, but it is not a security boundary. The server must revalidate security- and business-critical input.

## 2. Typical request lifecycle

1. Client sends a request over HTTPS.
2. Edge/server accepts and routes the request.
3. Middleware handles request IDs, parsing, CORS, rate limits, and authentication as appropriate.
4. Route selects a handler.
5. Validation checks shape, types, and domain constraints.
6. Authorization checks the actor's access to the action and resource.
7. Application/domain logic applies business rules.
8. Data access reads or changes persistent state, using a transaction when needed.
9. Response mapping returns a stable, safe result or error.
10. Logs and metrics record sanitized operational context.

Framework ordering differs. Keep trust boundaries and error behavior explicit.

## 3. HTTP method semantics

- `GET`: retrieve; should not cause a business-state change.
- `POST`: create a resource or initiate an operation.
- `PUT`: replace a resource representation or defined replacement operation.
- `PATCH`: partially update a resource.
- `DELETE`: delete, deactivate, or archive according to domain semantics.

Choose status codes based on actual semantics and existing API conventions. Common examples: `200`, `201`, `202`, `204`, `400`, `401`, `403`, `404`, `409`, `422`, `429`, `500`, `502`, `503`, and `504`. Do not force all successful operations to return `200`.

## 4. Communication styles

- REST: resource-oriented HTTP interfaces, often a practical browser-app default.
- GraphQL: schema-driven client queries; account for query complexity, caching, and authorization.
- RPC: operation-oriented contracts, useful for strongly defined internal calls.
- WebSockets/SSE: realtime or server-to-client updates; authenticate connections and handle reconnects, authorization, and lifecycle.
- Events/messaging: asynchronous communication requiring delivery, retry, ordering, idempotency, and observability decisions.

Choose based on the use case, not trend.

## 5. Architecture shapes

- Monolith: one deployable application.
- Modular monolith: one deployable system with clear internal business boundaries.
- Microservices: independently deployed services with network and operational costs.
- Event-driven: components coordinate through events/messages.

A modular monolith is often a sound starting point for a new product, but use service separation when independent deployment, scaling, ownership, or isolation needs justify it.

## 6. Source of truth

For each critical datum, identify its authoritative owner. Examples: payment status belongs to verified provider/backend state, not a browser redirect; permissions belong to server-side policy; stock or inventory must be protected by atomic database operations; a cached copy is not automatically authoritative.

## 7. Stateful and stateless behavior

JWT is not automatically better than sessions. Choose based on revocation, rotation, deployment topology, browser storage, CSRF, and operational needs. Define the full lifecycle for whichever model is chosen.

## 8. Questions to answer

- Who can perform each action on which resource?
- What is the source of truth for each piece of data?
- Which changes must be atomic?
- Which work can be asynchronous?
- What happens when a dependency is slow, unavailable, or returns invalid data?
- What must be observable for support and incident response?
- What data must never appear in logs or client responses?
