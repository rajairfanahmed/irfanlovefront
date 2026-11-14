# Backend Architecture and Design

Read for a new backend, major feature boundary, structural refactor, or architecture review.

## 1. Start with domain and use cases

Identify actors, user journeys, domain concepts, invariants, commands, queries, and external systems. Group behavior into cohesive capabilities before designing folders. A folder structure is an implementation consequence, not the domain model.

## 2. Practical architectural layers

A useful model may include:
- Transport: routes, controllers/handlers, parsing, response mapping.
- Application: use cases, orchestration, transaction coordination.
- Domain: business rules, entities, value objects, invariants, state transitions.
- Infrastructure: database adapters, storage, email, payments, queues, external APIs.

Not every project needs separate modules for every layer. Use the framework's idioms and the simplest boundaries that preserve clarity and testability.

## 3. Separation of concerns

Routes should not contain the entire business workflow. Handlers translate transport input and output. Application services coordinate use cases. Domain rules should not depend unnecessarily on HTTP or vendor SDK types. Infrastructure adapters should contain provider-specific details. Validation and authorization belong at explicit trust boundaries.

## 4. Module boundaries

Each module owns a coherent business capability. Define its public operations, data ownership, dependencies, events, authorization responsibilities, and failure modes. Avoid circular dependencies and uncontrolled cross-module database writes.

## 5. Architecture decisions

For material decisions, record context, problem, constraints, options considered, selected decision, rationale, consequences, costs, risks, and status (`Confirmed`, `Proposed`, or `Assumed`). Common decisions include monolith vs services, relational vs document data, session vs token authentication, sync vs async processing, and file storage.

## 6. Transactions and distributed workflows

Identify changes that must succeed or fail together. Use database transactions for atomic work in one database. For multi-service workflows, use explicit state, idempotent steps, outbox/inbox patterns, and compensating actions when justified. Do not imply that a normal database transaction makes a distributed workflow atomic.

## 7. Configuration and dependency management

Keep environment configuration outside code, validate required settings at startup, and use an approved secret store. Add dependencies only for a real need. Pin and update packages according to repository conventions. Avoid implementing cryptography or protocol primitives yourself.

## 8. Evolution and migration

1. Map current behavior and callers.
2. Define the target boundary and compatibility requirements.
3. Plan additive/backward-compatible transitions where feasible.
4. Migrate one capability at a time.
5. Test old and new behavior during the transition.
6. Remove old code only after its consumers and data dependencies are verified.
7. Update architecture/API docs.

## 9. Avoid overengineering

Do not add microservices, brokers, event sourcing, CQRS, generic factories, repository layers, or elaborate dependency injection automatically. Each abstraction must solve a concrete problem the project actually has.
