# Implementation and Code Review Checklist

- [ ] Changes satisfy the requested scope and acceptance criteria.
- [ ] Existing conventions and public contracts are preserved unless an intentional change is documented.
- [ ] No unrelated files or generated artifacts were modified unnecessarily.
- [ ] Business logic is not duplicated across controllers or routes.
- [ ] Validation and authorization are applied at the correct boundaries.
- [ ] Database operations handle integrity, concurrency, and failure behavior.
- [ ] External dependencies have timeouts and safe error handling.
- [ ] Logging is useful and does not reveal secrets or sensitive data.
- [ ] Error handling does not suppress unexpected failures.
- [ ] Tests cover both intended behavior and important negative cases.
- [ ] Tests were not weakened or removed merely to obtain a passing result.
- [ ] Comments and documentation explain important decisions rather than restating obvious code.
- [ ] Known risks and follow-up work are recorded.
