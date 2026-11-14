# Architecture and Full-Stack Technology Selection

## Selection principle

Select a coherent system, not an unranked menu of technologies. Start with product requirements and constraints, then recommend one primary stack. Compare alternatives only when they solve a meaningful trade-off.

## Inputs to collect

- Product type and required user experience.
- Existing codebase and team familiarity.
- Required integrations and provider SDKs.
- Data shape, consistency, querying, tenancy, and retention.
- Traffic/use patterns and latency expectations.
- Security, privacy, regulatory, and deployment constraints.
- Budget and operational capacity.
- Portability, lock-in, and long-term maintenance expectations.

## Stack decision categories

Choose only what the product needs:

### Frontend
- Framework and language.
- Rendering strategy: server-rendered, static, client-rendered, or hybrid.
- Styling and design-system approach.
- Component primitives/library.
- State management and data fetching/cache strategy.
- Forms and validation.
- Authentication integration.
- Unit/component/e2e test approach.

### Backend
- Runtime, framework, and language.
- API style and validation approach.
- Application architecture and module boundaries.
- ORM/query layer or data access method.
- Background jobs, queues, events, or real-time transport if required.
- Authentication and authorization approach.
- Backend test approach.

### Data and infrastructure
- Primary database and data access layer.
- Cache/search/object storage only when justified.
- Hosting and deployment topology.
- CI/CD, secrets, monitoring, logs, tracing, and backups.

### Integrations
- Payments, email/SMS, identity, analytics, AI/ML, maps, search, or other providers as required.
- API limits, pricing, data residency, vendor dependencies, and fallback strategy where material.

## Recommendation method

1. Eliminate options that fail explicit requirements.
2. Prefer compatibility with the current codebase unless migration is justified.
3. Assess learning curve and operational burden for the actual team.
4. Assess data fit, security, reliability, cost, performance, ecosystem maturity, and integration support.
5. Check version/API compatibility using current official documentation when available.
6. Recommend one stack and explain the reasons and trade-offs.
7. Ask the user to approve or challenge the recommendation.

Do not use popularity, novelty, or benchmark claims without context as the deciding factor. Do not invent cost estimates or claim that a technology guarantees scalability or security.

## Architecture fit

- Start with a modular monolith for most early products unless concrete needs justify separate deployable services.
- Keep domain logic out of UI components and transport controllers.
- Define clear ownership of data and business rules.
- Avoid duplicate sources of truth.
- Use synchronous requests for simple request/response work; introduce asynchronous processing for long-running, retryable, or decoupled tasks.
- Add caching only with a defined cache key, invalidation strategy, and consistency expectation.
- Treat external providers as failure-prone systems with timeouts, retries, idempotency, and reconciliation where appropriate.

## Decision record

For each major technology decision, record:
- Decision ID and category.
- Requirement that drives the choice.
- Recommended option.
- Alternatives considered and why they were not selected.
- Known trade-offs and risks.
- Approval status.
- Impacted frontend, backend, data, integration, deployment, and cost requirements.
