# Backend Architecture and Design

Read for a new backend, major feature boundaries, structural refactoring, or architecture review.

## 1. Start from domain and use cases

Identify actors, user journeys, domain concepts, invariants, commands, queries, and external systems. Group related behavior into cohesive modules. Avoid designing folders before understanding responsibilities.

## 2. Common layering

A practical layered design may contain:
- **Transport / presentation:** routes, controllers, request parsing, response mapping.
- **Application:** use cases, orchestration, transactions, authorization coordination.
- **Domain:** business rules, entities, value objects, domain services, invariants.
- **Infrastructure:** database adapters, email, payment gateways, storage, queues, external APIs.

Not every project needs every layer or a strict Clean Architecture implementation. Use the simplest structure that preserves clear boundaries and testability.

## 3. Separation of concerns

- Routes should map incoming requests to the correct operation, not contain all business logic.
- Controllers or handlers should translate transport input/output, not become large domain engines.
- Services / use cases should implement application behavior.
- Repositories or data-access modules should isolate persistence where that abstraction is useful.
- Validation should be explicit and occur at trust boundaries.
- Infrastructure adapters should encapsulate vendor-specific APIs.

Follow the framework's established idioms. Avoid creating abstractions with no current benefit.

## 4. Module boundaries

A module should own a coherent business capability and its rules. Define:
- Public operations and contracts.
- Data ownership and allowed access paths.
- Dependencies on other modules.
- Events or messages emitted/consumed.
- Authorization responsibilities.
- Failure modes and transaction boundaries.

Avoid circular dependencies and unrestricted cross-module database writes.

## 5. Architecture decisions

For significant choices, record:
- Context and problem.
- Constraints and alternatives considered.
- Decision and rationale.
- Consequences, including costs and risks.
- Whether the decision is confirmed or provisional.

Typical decision areas include monolith vs services, SQL vs document database, session vs token authentication, synchronous vs asynchronous processing, and file storage strategy.

## 6. Data and transaction boundaries

Identify which changes must succeed or fail together. Prefer a database transaction for atomic operations within one database. For multi-service workflows, consider idempotent steps, outbox/inbox patterns, compensating actions, and explicit workflow state rather than pretending a distributed transaction exists.

## 7. Configuration and dependency management

Separate environment-specific settings from code. Validate required configuration at startup. Keep secrets in the approved secret-management mechanism. Pin and update dependencies according to repository conventions; avoid adding packages when platform or existing library capabilities are sufficient.

## 8. Evolution and migration

For a structural change:
1. Map current behavior and dependencies.
2. Define target boundaries.
3. Plan backward-compatible transitions where possible.
4. Migrate one capability at a time.
5. Add tests around old and new behavior.
6. Remove obsolete code only after callers and data dependencies are verified.
7. Update architecture and API documentation.

## 9. Avoid common overengineering

Do not add microservices, message brokers, event sourcing, CQRS, repositories, generic factories, or elaborate dependency-injection frameworks automatically. Introduce them only when a concrete requirement or demonstrated problem justifies them.
