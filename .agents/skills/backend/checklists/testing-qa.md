# Backend Testing and QA Checklist

## Test design
- [ ] Tests map to requirements and acceptance criteria.
- [ ] Unit tests cover critical business rules.
- [ ] Integration tests cover persistence/infrastructure boundaries.
- [ ] API tests cover request/response, status, access, and side effects.
- [ ] End-to-end tests cover critical journeys when supported.

## Functional cases
- [ ] Happy paths work.
- [ ] Invalid, missing, malformed, and boundary input is handled.
- [ ] Empty and large collections behave correctly.
- [ ] State transitions and conflicts are correct.
- [ ] Database changes persist as expected.
- [ ] Transactions/rollback are checked where needed.
- [ ] Duplicate requests/retries do not duplicate side effects.

## Access and security
- [ ] Anonymous and authenticated requests are covered.
- [ ] Insufficient permission and cross-user/tenant access are denied.
- [ ] Expired/revoked credentials are rejected.
- [ ] Sensitive fields are not returned.
- [ ] Abuse, injection, upload, and webhook cases are covered where relevant.

## Regression and reporting
- [ ] Fixed defects have regression tests where practical.
- [ ] Focused tests pass after changes.
- [ ] Relevant regression/build/lint/type checks are run.
- [ ] Mocked tests are distinguished from real provider tests.
- [ ] Unavailable services and skipped checks are recorded.
- [ ] Tests were not weakened merely to obtain a pass.
