# Backend Testing and Quality Assurance

Read for meaningful backend implementation, bug fixing, integration, code review, or QA. This is a core reference for most non-trivial tasks.

## 1. Testing strategy

Use a balanced testing pyramid:
- **Unit tests:** fast tests of isolated domain rules and functions.
- **Integration tests:** verify database, framework, queue, cache, and external-adapter behavior at real boundaries where practical.
- **API tests:** exercise HTTP routes, validation, authentication, authorization, status, response shape, and side effects.
- **End-to-end tests:** verify critical user journeys across frontend and backend where the project supports them.
- **Non-functional tests:** security, load, resilience, and performance tests when risk or requirements justify them.

Do not chase coverage percentage without testing meaningful behavior and failure cases.

## 2. Baseline before changes

Identify the project's actual test, lint, type-check, build, and migration commands from manifests and documentation. Run relevant safe baseline checks when practical. Record pre-existing failures and environment limitations.

Never invent commands or test results. If a command is unavailable, say so and identify the project's available alternative.

## 3. Test business behavior

Cover:
- Happy paths.
- Validation boundaries and malformed input.
- Missing and unauthorized actors.
- Ownership and tenant isolation.
- Invalid state transitions.
- Duplicate submissions and retries.
- Empty and large result sets.
- Time zones, dates, currency precision, and rounding where relevant.
- Concurrent updates and transactions where relevant.
- External service timeouts and failures.

## 4. API verification

For each relevant endpoint, verify:
- Method, path, and expected status.
- Request validation and safe error structure.
- Authentication and authorization.
- Response schema and sensitive-field filtering.
- Persistence and actual side effects.
- Pagination, filtering, sorting, and limits.
- Idempotency and conflict behavior.

An HTTP `200` alone does not establish correctness. Some operations correctly return `201`, `202`, or `204`; errors should use appropriate 4xx / 5xx statuses.

## 5. Database testing

Use isolated test databases or controlled fixtures. Verify constraints, relationships, migrations, transactions, rollback behavior, and persistence. Clean up test data safely. Never point destructive test setup at a production database.

## 6. Authentication and security testing

Test anonymous, authenticated, insufficient-permission, cross-user, and cross-tenant cases. Include expired / revoked credentials, invalid tokens, brute-force controls, CSRF where applicable, injection attempts, oversized input, file validation, and webhook signature checks as appropriate.

## 7. Test doubles and external services

Mock external systems in unit tests to keep them deterministic. Use contract tests or provider sandboxes when integration behavior matters. Clearly report which tests used mocks and which exercised the real service. Never call a production payment or messaging service accidentally from automated tests.

## 8. Regression testing

After a fix:
1. Add or update a test that reproduces the defect.
2. Run that focused test.
3. Run tests for dependent modules.
4. Run broader regression, build, lint, and type checks when practical.
5. Verify the original scenario and adjacent failure cases.

Do not remove or weaken a failing test to make the suite green without proving the test itself is incorrect.

## 9. Test environment safety

Use explicit test configuration and isolated databases. Check environment variables before running migrations or reset commands. Avoid commands that drop, truncate, or reseed shared data. Keep test credentials separate from production credentials.

## 10. QA completion report

Report exact commands, environment, test scope, pass / fail outcomes, skipped checks, and blockers. Distinguish:
- Tests executed and passed.
- Tests executed and failed.
- Tests not run.
- Tests blocked by missing services or credentials.

Do not claim full coverage or production readiness based on a small smoke test.
