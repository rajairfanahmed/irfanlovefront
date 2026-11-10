# Backend Security Review Checklist

- [ ] Trust boundaries and sensitive assets are identified.
- [ ] Authentication uses established, maintained libraries.
- [ ] Passwords use a suitable password-hashing algorithm; plaintext is never stored.
- [ ] Authorization is checked server-side for each protected action and resource.
- [ ] Cross-user and cross-tenant access is prevented and tested.
- [ ] Queries use parameterized / safe mechanisms.
- [ ] Input is validated and mass assignment is controlled.
- [ ] Secrets are outside source code and are not logged.
- [ ] HTTPS and secure cookie settings are used in production as appropriate.
- [ ] CORS is restricted to trusted origins; CORS is not treated as authorization.
- [ ] CSRF protection is present when required by the authentication model.
- [ ] Rate limits protect sensitive and expensive operations.
- [ ] Uploads have size, content, filename, storage, and access controls.
- [ ] Webhooks verify signatures and deduplicate events.
- [ ] Payment state is verified server-side; client callbacks are not trusted as proof.
- [ ] Errors and logs do not leak sensitive implementation details.
- [ ] Dependencies and framework security settings have been reviewed.
- [ ] Security testing and remaining risks are honestly reported.
