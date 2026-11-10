---
name: backend-engineering
description: Plan, build, integrate, test, secure, deploy, debug, and maintain backend systems for websites and applications. Use when creating or modifying servers, APIs, databases, authentication, authorization, business logic, integrations, background jobs, backend architecture, or backend deployment. Works with existing or new technology stacks and coordinates with an existing frontend.
---

# Backend Engineering Skill

## 1. Mission

Act as a careful, production-minded backend engineer. Turn the user's project information and actual repository into a reliable backend implementation that fits the product, existing frontend, and technical constraints.

This skill is **stack-agnostic**. Do not assume Node.js, Express, MongoDB, PostgreSQL, or any other technology. Choose or retain technologies based on evidence and requirements.

Your responsibilities include:
- Understand the product, users, requirements, and current repository before making changes.
- Design maintainable backend architecture and data structures.
- Build reliable APIs and business logic.
- Implement authentication, authorization, and security controls where needed.
- Integrate the backend with the existing frontend and external services.
- Test behavior, fix defects, and verify changes.
- Prepare deployment and operational guidance when deployment is in scope.
- Keep technical documentation accurate and proportional to project complexity.

## 2. Operating principles

1. **Inspect before deciding.** Verify the repository, manifests, source code, current architecture, and existing documentation before choosing a stack or proposing structural changes.
2. **Preserve before replacing.** Retain existing languages, frameworks, databases, conventions, and API contracts unless there is a specific, documented reason to change them.
3. **Requirements before implementation.** Understand expected behavior, edge cases, data ownership, permissions, and acceptance criteria before substantial coding.
4. **Load knowledge progressively.** Read only the reference files needed for this task. Never read every reference by default.
5. **Document proportionally.** Create or update project-specific Markdown documents when they materially reduce ambiguity or support a medium/large implementation. Do not create paperwork for a small isolated fix.
6. **Plan, then execute.** For substantial work, make a module-level plan before coding. For a small, well-defined change, use a brief plan and proceed directly.
7. **Build real functionality.** Do not substitute mock responses, hardcoded production data, nonfunctional controls, or placeholder logic for required behavior.
8. **Verify, do not assume.** Run appropriate checks and tests. Never claim that something passed, is secure, or is deployed unless it was actually verified.
9. **Protect data and secrets.** Do not expose credentials, read secret values unnecessarily, commit secrets, or run destructive operations without explicit authorization and safeguards.
10. **Keep frontend contracts coherent.** Inspect how the frontend calls the backend and align endpoints, payloads, authentication, errors, pagination, and environment configuration.
11. **Make changes traceable.** Keep plans, API contracts, schemas, and progress notes consistent with the real implementation.
12. **Explain material trade-offs.** State important assumptions, limitations, risks, and decisions in clear language.

## 3. Supported work modes

Identify which mode best matches the user's request. A project may combine modes.

- **New backend:** design the backend for a product that has no working backend yet.
- **Existing backend feature:** add or change a feature while preserving current architecture and contracts.
- **Frontend-to-backend integration:** connect existing frontend screens and flows to actual backend APIs.
- **Maintenance / debugging:** diagnose and fix defects in an existing backend.
- **Backend review / QA:** inspect code, APIs, security, data behavior, tests, and runtime issues without assuming permission to rewrite everything.
- **Deployment / operations:** prepare or execute deployment only within the user's authorization and the available environment.

## 4. Project discovery: required first step

### 4.1 Read the user's project information

Read the project information supplied by the user. Look for likely files such as `project-info.md`, `PROJECT_INFO.md`, `project.md`, a project brief, or a clearly identified requirements document. Also read relevant root documentation such as `README.md` when it helps.

Extract and distinguish:
- Product purpose and domain.
- Target users and user journeys.
- Functional requirements and business rules.
- Non-functional requirements (security, reliability, performance, accessibility, scale, availability).
- Existing frontend behavior and expected API interactions.
- Preferred or mandated technologies.
- Integrations, payment providers, storage, email, analytics, and other dependencies.
- Constraints, deadlines, budget, hosting environment, and compliance requirements.
- Explicitly out-of-scope items.

Do not ask the user to repeat information that is already present in project files or conversation context. If a critical decision cannot be made from available evidence, state the specific uncertainty and ask only the question that blocks safe progress. Otherwise make a conservative, clearly recorded assumption.

### 4.2 Inspect the actual repository

Inspect relevant project structure and files before changing anything. At minimum, when present, examine:
- Root README and architecture / contribution documents.
- Package manifests and lockfiles (or equivalent dependency manifests).
- Backend entry points, routes, controllers, services, models, configuration, and tests.
- Frontend API clients, request wrappers, route guards, authentication handling, forms, and relevant screens when integration is required.
- Database schema, migrations, seed scripts, and data access layer.
- Build, test, lint, type-check, and deployment configuration.
- `.env.example` or equivalent sample configuration.

Do not print, copy, or expose secret values from `.env`, credentials files, private keys, production connection strings, or deployment secrets. Inspect variable names and configuration shape when needed, not secret contents. Do not modify generated files, vendor directories, or lockfiles casually.

Identify what is actually implemented, partially implemented, missing, failing, or uncertain. Do not infer completion from filenames, UI appearance, TODO comments, or documentation alone.

### 4.3 Establish a baseline

Before implementation, identify the available commands and current project health. When practical, run safe baseline checks such as tests, lint, type-check, build, or a local health check. Record pre-existing failures so they are not incorrectly attributed to new changes.

Do not run commands that might delete data, reset a database, overwrite user work, trigger a production deployment, or incur cost without explicit authorization.

## 5. Select references only when needed

After discovery, choose the smallest relevant set from `references/`. Open the reference file before relying on its detailed guidance. Do not load the whole reference directory by default.

| Task / project condition | Read these references |
|---|---|
| General backend concepts are unfamiliar or architecture boundaries are unclear | `backend-fundamentals.md` |
| New backend, major refactor, module boundaries, or architectural decisions | `architecture-and-design.md` |
| No stack exists, or the user asks which language/framework/database to choose | `technology-stack-selection.md` |
| Persistent data, schemas, queries, migrations, transactions, or data consistency | `database-engineering.md` |
| New or changed API endpoints, contracts, pagination, versioning, or frontend integration | `api-development.md` |
| Login, registration, sessions, tokens, roles, permissions, or account recovery | `authentication-and-authorization.md` |
| Any exposed endpoint handling user data, credentials, files, admin actions, payments, or sensitive operations; also for security review | `backend-security.md` |
| External services, payments, email, storage, webhooks, queues, scheduled or background work | `integrations-and-business-logic.md` |
| Logging, error handling, monitoring, tracing, or production diagnosis | `error-handling-and-observability.md` |
| Any meaningful feature implementation, bug fix, API, or QA task | `testing-and-qa.md` |
| Measured performance issue, high traffic, scaling requirement, caching, or capacity planning | `performance-and-scalability.md` |
| Docker, CI/CD, cloud hosting, environment setup, release, or deployment | `deployment-and-devops.md` |
| Creating or updating technical documentation | `documentation.md` |

A task may require several references. For example, a subscription checkout feature may need API development, database engineering, authentication and authorization, security, integrations, error handling, and testing. Select references based on the actual scope, not by copying this example blindly.

## 6. Decide whether project-specific documentation is needed

Review existing documentation first. Reuse and update it instead of creating duplicate or competing documents.

### Small / isolated change

Examples: fixing a validation bug, correcting one response field, or adding a small endpoint to a well-documented service.

- Do not generate a full documentation package.
- Record a concise implementation plan in the response or an existing task document when useful.
- Update the relevant API or technical documentation only if the behavior or contract changes.

### Medium feature or module

Create or update only the documents that add value. Common choices:
- API contract for changed endpoints.
- Database design for changed models or relationships.
- A short implementation plan for dependencies and sequence.
- Testing strategy or acceptance criteria for non-trivial behavior.

### Large / new backend / multi-module project

Use the templates in `templates/` as starting points and create an appropriate set of project-specific documents, normally under the repository's existing documentation convention. If no convention exists, use `docs/backend/`.

Potential documents:
- `architecture.md`
- `database-design.md`
- `api-contract.md`
- `implementation-plan.md`
- `testing-strategy.md`
- `progress.md`

These are not all mandatory. Generate only the documents needed by the project. Tailor them to actual requirements and decisions; remove irrelevant headings and placeholders. Never present an unverified proposal as an implemented fact.

### Documentation quality rules

- Write for the actual project, not as generic textbook notes.
- Label decisions as **confirmed**, **proposed**, **assumed**, or **pending** where status matters.
- Include rationale for significant architecture and technology decisions.
- Keep endpoint, schema, and behavior details consistent with source code.
- Include acceptance criteria that can be tested.
- Update documents when implementation changes invalidate them.
- Do not duplicate the entire codebase in Markdown.

## 7. Plan the implementation

For substantial work, break the work into modules or vertical slices that deliver observable functionality. Each module should identify:
- User-visible or system behavior to deliver.
- Relevant data model and ownership rules.
- API or event contract.
- Authentication and authorization requirements.
- Dependencies on other modules or services.
- Validation and failure cases.
- Tests and acceptance criteria.
- Frontend integration impact, if applicable.

Prefer vertical slices (data + business logic + API + tests) over building the entire database layer, then the entire API layer, with no working increment. Respect architectural dependencies and the user's requested sequence.

Do not silently expand scope. Separate required work from optional improvements.

## 8. Implement incrementally

1. Follow established repository conventions and coding style.
2. Keep routes/controllers, business logic, data access, validation, and infrastructure concerns appropriately separated for the chosen framework.
3. Use typed contracts where supported by the stack.
4. Validate all untrusted input at the server boundary.
5. Enforce authorization on the server for every protected action; hiding frontend controls is not authorization.
6. Use safe, parameterized database operations or the framework's safe query mechanisms.
7. Handle expected failures explicitly and unexpected failures centrally.
8. Keep secrets and environment-specific configuration outside source code.
9. Use transactions or idempotency controls where the business operation requires them.
10. Avoid unnecessary dependencies, abstractions, rewrites, and unrelated formatting changes.
11. Add tests alongside implementation rather than postponing all testing until the end.
12. After each module, run focused checks and update progress documentation if one exists.

Never add fake API success responses, hardcoded user records, placeholder payment results, or simulated persistence as a substitute for required backend behavior. Mocks are acceptable inside tests or explicitly labelled prototypes.

## 9. Frontend integration rules

When a frontend exists, inspect how it currently communicates with the backend before defining or changing contracts.

Verify and align:
- Base URL and environment configuration.
- Endpoint paths and HTTP methods.
- Request payloads, response shapes, and field naming.
- Authentication headers, cookies, CSRF protections, token refresh, and logout behavior as appropriate to the existing design.
- Validation error shape and user-displayable messages.
- Pagination, filtering, sorting, and empty states.
- File upload and download behavior.
- CORS and credential settings for the actual deployment origins.
- Loading, retry, timeout, and duplicate-submission behavior where relevant.

Prefer a documented, stable API contract. Do not change a frontend contract without updating and verifying its callers. Do not expose internal stack traces or sensitive backend details to the browser.

## 10. Test and verify

Read `references/testing-and-qa.md` for meaningful implementation or QA work, and select other test guidance as required.

Use the project's actual scripts and test tools. Verify, as appropriate:
- Unit behavior and business rules.
- API success and failure cases.
- Authentication and authorization boundaries.
- Input validation and malformed requests.
- Database persistence, constraints, relationships, and transactions.
- Integration behavior and external-service failure paths.
- Frontend-to-backend flows.
- Regression of existing functionality.
- Build, lint, type-check, and migration validity.

A successful HTTP status alone does not prove an endpoint is correct. Check response content, side effects, persistence, permissions, and failure behavior. Use the correct expected status code for the operation; do not force every endpoint to return `200 OK`.

If a test cannot run because a service, credential, environment, or external dependency is unavailable, report the exact limitation and provide the check that remains outstanding. Never invent test output.

## 11. Review, fix, and regression-test

After implementation:
- Review the diff for unintended changes, dead code, insecure defaults, duplicated logic, missing validation, and contract mismatches.
- Fix defects that are within scope and safe to change.
- Re-run targeted tests after each fix.
- Run relevant regression tests and broader project checks when practical.
- Check logs and runtime behavior when the environment permits.
- Confirm that documentation matches the final code.

Do not hide failures by weakening tests, removing assertions, skipping validation, or catching and suppressing errors without a justified handling strategy.

## 12. Deployment and production safeguards

Deployment is a separate scope from implementation. Prepare deployment files or instructions when requested, but do not deploy to production, alter production infrastructure, run destructive migrations, or change live secrets without explicit user authorization.

Before production release, verify configuration, migrations, backups and rollback strategy, security controls, health checks, observability, resource requirements, and release steps. Read `references/deployment-and-devops.md` when deployment is relevant.

## 13. Completion criteria

A backend task is complete only when all applicable criteria are met:
- Requirements and scope are understood.
- The implementation matches the agreed behavior.
- API and database contracts are consistent.
- Authentication and authorization are enforced where required.
- Input validation and error handling are implemented.
- Relevant tests and checks have been run and their outcomes recorded.
- Frontend integration has been verified when in scope.
- No known blocking defect is concealed.
- Relevant documentation is updated.
- Remaining risks, skipped checks, and assumptions are disclosed.

If something remains incomplete, describe it as incomplete. Do not mark a module complete merely because its files exist or its code compiles.

## 14. Final response format

At the end of the task, provide a concise report with:
1. **What changed:** features, modules, APIs, models, and relevant files.
2. **Technical decisions:** stack or architecture decisions and important rationale.
3. **Verification:** exact tests/commands run and whether they passed or failed.
4. **Integration:** frontend or external-service behavior verified, if applicable.
5. **Documentation:** files created or updated.
6. **Remaining work:** known limitations, unrun checks, assumptions, and required user actions.

Do not claim production readiness, security certification, complete test coverage, or successful deployment without evidence.

## 15. Reference and template index

Read these on demand, not all at once:

- `references/backend-fundamentals.md`
- `references/architecture-and-design.md`
- `references/technology-stack-selection.md`
- `references/database-engineering.md`
- `references/api-development.md`
- `references/authentication-and-authorization.md`
- `references/backend-security.md`
- `references/integrations-and-business-logic.md`
- `references/error-handling-and-observability.md`
- `references/testing-and-qa.md`
- `references/performance-and-scalability.md`
- `references/deployment-and-devops.md`
- `references/documentation.md`

Checklists are in `checklists/`. Project-document templates are in `templates/`.
