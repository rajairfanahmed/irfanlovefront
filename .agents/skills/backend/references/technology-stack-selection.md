# Technology and Stack Selection

Read when a project has no established stack, a technology choice is requested, or a verified constraint makes the current stack unsuitable.

## 1. Selection process

1. Extract product requirements and non-functional constraints.
2. Inspect repository, team familiarity, deployment environment, integrations, and operational capacity.
3. Identify must-have capabilities: realtime, payments, analytics, file processing, AI workloads, multi-tenancy, scheduled jobs, or high-volume reads/writes.
4. Compare a small number of realistic combinations.
5. Choose one recommendation: the least complex option that meets requirements and foreseeable growth.
6. Record rationale, trade-offs, cost, support status, and migration impact.

The user should receive one recommended stack, not an unranked technology menu, unless they explicitly request alternatives.

## 2. Evaluation criteria

Consider language/runtime maturity, ecosystem and SDK quality, security support, team skills, database fit, data consistency, expected traffic, deployment compatibility, test/observability tools, licensing, cost, vendor lock-in, and upgrade path.

Use official documentation to verify current versions, compatibility, support status, APIs, and provider capabilities when those details matter. Do not invent versions or claim an unsupported feature exists.

## 3. Common language/framework fits

Examples, not defaults:
- TypeScript/Node.js with an established framework for JavaScript-oriented full-stack teams.
- Python with FastAPI or Django for Python-centric APIs and data workflows.
- Java with Spring Boot for mature Java ecosystems and enterprise systems.
- C# with ASP.NET Core for .NET environments.
- Go for services where its deployment model and concurrency profile fit.
- PHP with Laravel for PHP ecosystems and convention-led application development.

Select a concrete framework only after examining team, hosting, runtime, library, and product needs.

## 4. Database selection

- Relational SQL (e.g., PostgreSQL/MySQL): relationships, constraints, transactions, reporting, and complex queries.
- Document database (e.g., MongoDB): document aggregates and access patterns that genuinely fit document modeling.
- Key-value/cache (e.g., Redis): ephemeral/derived data, caching, coordination, rate limits, and suitable queue patterns.
- Search systems: specialized text retrieval or analytical search, often alongside a primary database.

Assess data shape, consistency, transactions, indexes, migrations, backup/restore, operational skill, and hosting. Do not choose a database simply because browser payloads are JSON.

## 5. Supporting services

Add an ORM/ODM, cache, queue, object storage, email/SMS provider, payment provider, search, observability, containers, or workflow engine only when a product requirement justifies the capability and its cost.

## 6. Decision record

Record:
- Requirement addressed.
- Options considered and reason they were credible.
- Selected technology and version policy.
- Why it fits the project.
- Known costs and trade-offs.
- Integration/migration impact.
- Decision status and sources checked.

## 7. Existing stack policy

Preserve an existing healthy stack. Before recommending a rewrite, identify a concrete limitation, estimate migration risk, and explain why incremental change cannot solve it. A rewrite is not automatically safer, faster, or cheaper.
