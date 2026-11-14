# Backend Testing and Quality Assurance

Read for meaningful backend implementation, bug fixing, integration, review, or QA.

## 1. Balanced test strategy

- Unit: isolated domain rules and pure functions.
- Integration: real framework/database/cache/queue boundaries where practical.
- API: HTTP routes, schemas, auth, status codes, errors, and side effects.
- End-to-end: critical user journeys across frontend and backend where supported.
- Non-functional: security, resilience, load, and performance when risk or requirements justify them.

Do not chase coverage percentages instead of meaningful behavior.

## 2. Baseline and commands

Discover actual test/lint/type-check/build/migration commands from manifests and docs. Run safe baselines where practical. Record existing failures. Never invent test output or run destructive setup against shared/production data.

## 3. Business behavior

Cover happy paths, invalid/boundary input, missing/unauthorized actors, ownership/tenant isolation, invalid state transitions, duplicate/retried requests, empty/large results, time zones, currency precision, concurrent updates, transactions, and provider timeouts where relevant.

## 4. API verification

Check method/path, status, schema, validation errors, auth, authorization, sensitive-field filtering, persistence, pagination/filter/sort limits, idempotency, and dependency failure behavior.

## 5. Database verification

Use isolated test databases/fixtures. Verify constraints, relationships, migrations, transaction and rollback behavior, persistence, and safe cleanup. Never aim destructive tests at production.

## 6. Security testing

Test anonymous, authenticated, insufficient permission, cross-user/tenant attempts, expired/revoked credentials, CSRF where applicable, injection, oversized input, file validation, webhook signatures, and abuse limits as appropriate.

## 7. Test doubles and external systems

Use mocks/fakes for deterministic unit tests. Use contract tests or provider sandboxes when integration behavior matters. Clearly label mocked vs real-provider tests. Do not accidentally call production payment or messaging systems in automated tests.

## 8. Regression approach

For a defect, create/update a reproducing test, run it, test dependent modules, run broader relevant checks, then verify the original scenario and adjacent edge cases. Do not weaken assertions or remove a failing test merely to obtain a pass.

## 9. Environment safety

Use explicit test config and isolated stores. Check environment variables before migrations/resets. Separate test and production credentials. Never drop/truncate/reseed shared data without authorization and safeguards.

## 10. QA report

State exact commands, environment, test scope, and outcomes. Separate passed, failed, not run, and blocked tests. Explain missing services, credentials, or tooling. Never claim full coverage from a smoke test.
