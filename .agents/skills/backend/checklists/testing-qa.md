# Backend Testing and QA Checklist

## Test design
- [ ] Tests are tied to requirements and acceptance criteria.
- [ ] Unit tests cover important business rules.
- [ ] Integration tests cover relevant persistence and infrastructure boundaries.
- [ ] API tests cover request / response contracts and status codes.
- [ ] End-to-end tests cover critical journeys when supported.

## Functional cases
- [ ] Happy paths work.
- [ ] Invalid, missing, malformed, and boundary input is handled.
- [ ] Empty and large collections behave correctly.
- [ ] Business-state transitions and conflicts are correct.
- [ ] Database writes persist expected changes.
- [ ] Transactions and rollback behavior are checked where needed.
- [ ] Duplicate requests and retries do not create duplicate side effects.

## Access and security
- [ ] Anonymous requests are handled correctly.
- [ ] Authenticated users have only permitted access.
- [ ] Cross-user and cross-tenant access attempts are denied.
- [ ] Expired / revoked credentials are rejected.
- [ ] Sensitive fields are not returned.
- [ ] Relevant abuse, injection, upload, and webhook cases are covered.

## Regression and reporting
- [ ] A regression test exists for each fixed defect where practical.
- [ ] Focused tests pass after changes.
- [ ] Relevant regression tests and project checks are run.
- [ ] Mocked tests are distinguished from real provider tests.
- [ ] Unavailable services and skipped tests are recorded.
- [ ] No failed test is hidden by weakening assertions or suppressing errors.
