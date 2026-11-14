# Backend Security Review Checklist

- [ ] Trust boundaries, sensitive assets, actors, and entry points are identified.
- [ ] Authentication uses maintained, established libraries/providers.
- [ ] Passwords use suitable hashing; plaintext is never stored.
- [ ] Server-side authorization protects every sensitive action and object.
- [ ] Cross-user and cross-tenant access is prevented and tested.
- [ ] Queries use parameterized/safe mechanisms.
- [ ] Input validation and mass-assignment protection are present.
- [ ] Secrets are outside source and logs.
- [ ] HTTPS and secure cookie settings are appropriate for production.
- [ ] CORS is restricted to trusted origins; it is not treated as authorization.
- [ ] CSRF protection matches the authentication model.
- [ ] Sensitive/expensive operations are rate-limited.
- [ ] Uploads enforce size, content, filename, storage, and access controls.
- [ ] Webhooks verify signatures, deduplicate, and handle replay/out-of-order events.
- [ ] Payment state is verified server-side; client callbacks are not trusted.
- [ ] Errors/logs do not leak sensitive details.
- [ ] Dependencies and framework security settings are reviewed.
- [ ] Security tests and residual risks are honestly reported.
