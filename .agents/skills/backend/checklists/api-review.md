# API Review Checklist

- [ ] Endpoint naming, method, and semantics are consistent.
- [ ] Request/response schemas are documented where useful.
- [ ] All untrusted input is validated server-side.
- [ ] Protected endpoints authenticate the caller.
- [ ] Resource-level and tenant-level authorization are enforced.
- [ ] Responses exclude secrets, stack traces, and unauthorized fields.
- [ ] Status codes represent the actual outcome.
- [ ] Errors use a stable, safe structure.
- [ ] Pagination is bounded and deterministic; sort/filter fields are allow-listed.
- [ ] Expensive/sensitive endpoints have appropriate rate limits.
- [ ] Retryable operations have idempotency behavior.
- [ ] CORS and cookie/credential settings match deployment origins.
- [ ] Frontend callers and API docs match implementation.
- [ ] Tests cover success, validation, auth, authorization, conflicts, missing resources, duplicates, and dependency failures as applicable.
