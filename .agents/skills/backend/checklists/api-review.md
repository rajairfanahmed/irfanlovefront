# API Review Checklist

- [ ] Endpoint naming, method, and semantics are consistent.
- [ ] Request and response contracts are documented where useful.
- [ ] All untrusted input is validated server-side.
- [ ] Protected endpoints authenticate the caller.
- [ ] Resource-level and tenant-level authorization are enforced.
- [ ] Responses do not expose secrets, internal stack traces, or unauthorized fields.
- [ ] Status codes represent the actual outcome.
- [ ] Errors use a consistent, safe structure.
- [ ] Pagination is bounded and sorting / filtering fields are allow-listed.
- [ ] Expensive or sensitive endpoints have suitable rate limits.
- [ ] Retryable operations have suitable idempotency behavior.
- [ ] CORS and cookie / credential settings match the deployment model.
- [ ] Tests cover success, validation failure, authentication, authorization, conflict, missing resource, and dependency failure as appropriate.
- [ ] Frontend callers and API documentation match the implementation.
