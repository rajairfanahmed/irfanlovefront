# Implementation and Code Review Checklist

- [ ] Changes satisfy scope and acceptance criteria.
- [ ] Existing conventions and public contracts are preserved or intentionally migrated.
- [ ] No unrelated/generated files were modified unnecessarily.
- [ ] Business logic is not duplicated across transport handlers.
- [ ] Validation and authorization occur at correct boundaries.
- [ ] Database behavior handles integrity, concurrency, and failure.
- [ ] External dependencies have timeouts and safe error handling.
- [ ] Logs are useful and redact sensitive values.
- [ ] Error handling does not suppress unexpected failures.
- [ ] Tests cover intended behavior and negative cases.
- [ ] Tests were not weakened or removed just to get green output.
- [ ] Documentation explains material decisions and matches code.
- [ ] Known risks and follow-up work are recorded.
