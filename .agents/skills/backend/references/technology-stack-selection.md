# Technology and Stack Selection

Read only when the project has no established stack, the user asks for a technology recommendation, or the current stack cannot meet a confirmed requirement.

## 1. Selection process

1. Extract product requirements and operational constraints.
2. Inspect existing team skills, repository, hosting, integrations, and deployment environment.
3. Identify must-have capabilities (realtime, payments, analytics, file processing, AI workloads, multi-tenancy, etc.).
4. Compare a small number of realistic options.
5. Choose the least complex option that satisfies current and reasonably foreseeable needs.
6. Record the decision and trade-offs in project documentation.

Do not choose a stack based solely on trend, benchmark headlines, or personal preference.

## 2. Evaluation criteria

Consider:
- Developer familiarity and hiring / maintenance capacity.
- Framework maturity and ecosystem.
- Security track record and support model.
- Database fit and data consistency requirements.
- Performance under the expected workload.
- Deployment and hosting compatibility.
- Integrations and SDK quality.
- Testing and observability tooling.
- Licensing, cost, vendor lock-in, and portability.
- Long-term maintenance and upgrade path.

Use official documentation for current compatibility, support status, APIs, and version-specific decisions. Do not invent current versions or claim a framework feature exists without verification.

## 3. Language and framework fit

Examples of common combinations (not mandatory recommendations):
- TypeScript / JavaScript with Express or NestJS for web APIs and JavaScript-oriented teams.
- Python with FastAPI or Django for APIs, data workflows, and Python-centric systems.
- PHP with Laravel for PHP ecosystems and convention-rich web applications.
- Java with Spring Boot for established Java environments and large enterprise systems.
- C# with ASP.NET Core for .NET environments and enterprise applications.
- Go for services where its deployment model and concurrency characteristics are useful.

Compare the specific framework's conventions, team fit, deployment requirements, and ecosystem before choosing.

## 4. Database selection

Choose based on data shape and query patterns:
- **Relational SQL** (e.g. PostgreSQL, MySQL): structured entities, relationships, constraints, transactions, reporting, and complex queries.
- **Document database** (e.g. MongoDB): document-oriented data where aggregate boundaries and access patterns fit the model.
- **Key-value / cache** (e.g. Redis): fast ephemeral or derived data, caching, coordination, rate limits, and selected queue patterns.
- **Search engine:** specialized full-text or analytical search needs; usually complements rather than replaces the primary database.

Assess consistency, transactions, indexes, query flexibility, migration strategy, operational expertise, backup, and hosting. Do not select a database because the frontend happens to use JSON.

## 5. Supporting technologies

Select only when required:
- Object-relational or object-document mapping tools.
- Cache and distributed coordination.
- Queue / message broker and background job framework.
- Object storage for files.
- Email or SMS provider.
- Payment provider.
- Search service.
- Observability and error-tracking tools.
- Container and deployment platform.

Avoid duplicating functionality already provided by the chosen platform.

## 6. Decision record template

Record:
- Requirement being addressed.
- Options considered.
- Chosen technology and version policy.
- Why it fits the project.
- Known trade-offs and operational costs.
- Migration / integration impact.
- Confirmation status and references checked.

## 7. When the project already has a stack

Preserve it by default. Before proposing a replacement, identify a concrete blocker, compare migration cost and risk, and explain why incremental improvement is insufficient. A rewrite is not automatically safer or cheaper than improving the current system.
