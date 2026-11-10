# Backend Security

Read for any security-sensitive implementation, public API, authentication, user data, file upload, admin function, payment flow, or security review.

## 1. Security mindset

Treat all client input, headers, uploaded files, webhook payloads, and external responses as untrusted. Define trust boundaries and minimize privileges. Apply defense in depth rather than relying on a single middleware or frontend control.

## 2. Threat modeling

For meaningful features, identify:
- Assets: accounts, personal data, credentials, payments, content, and infrastructure.
- Actors: anonymous users, ordinary users, admins, service accounts, and attackers.
- Entry points: APIs, forms, uploads, webhooks, background jobs, and admin tools.
- Trust boundaries and sensitive operations.
- Abuse cases and likely impact.
- Controls, monitoring, and residual risk.

Use an established threat-modeling method when the project's risk warrants it.

## 3. Common web risks and controls

- **Injection:** use parameterized queries / safe ORM APIs; avoid building executable query strings from user input.
- **Broken access control / IDOR:** authorize every object-level read and write; scope queries by actor and tenant.
- **Authentication failures:** use proven libraries, secure credential handling, rate limits, and safe recovery flows.
- **Cross-site scripting:** encode output in the frontend, sanitize only where rich HTML is intentionally supported, and avoid unsafe rendering.
- **CSRF:** protect cookie-authenticated state-changing requests with appropriate SameSite and anti-CSRF controls.
- **SSRF:** restrict outbound destinations, block internal / metadata addresses, validate redirects, and use network egress controls where possible.
- **Security misconfiguration:** disable debug mode in production, restrict origins, harden headers, and remove default credentials.
- **Sensitive data exposure:** minimize data collection, encrypt in transit, protect secrets, restrict logs, and apply least privilege.
- **Unsafe deserialization:** avoid deserializing untrusted native objects; validate structured input against explicit schemas.
- **Resource exhaustion:** cap payload size, pagination, expensive queries, uploads, concurrency, and request rates.

Use the current OWASP guidance and framework security documentation when a specific control or framework behavior needs verification.

## 4. Input, output, and file safety

- Validate type, size, format, range, and allowed values server-side.
- Allow-list file extensions and validate actual file content; do not trust filenames or MIME headers alone.
- Generate server-side storage names; prevent path traversal.
- Store uploads outside executable web roots or in object storage with controlled access.
- Scan or quarantine risky files where required by the product's threat model.
- Limit upload and decompression size to reduce resource exhaustion.
- Return safe error messages; never expose stack traces or secret configuration.

## 5. Secrets and configuration

- Never commit secrets, API keys, private keys, production credentials, or real `.env` files.
- Use environment variables or an approved secrets manager with access controls and rotation.
- Provide an `.env.example` with names and safe placeholder values only.
- Validate required settings at startup without printing secret values.
- Redact credentials, tokens, authorization headers, and sensitive personal data from logs.

## 6. Transport and browser controls

Use HTTPS in production. Configure secure cookies and security headers appropriate to the app. Configure CORS with explicit trusted origins. Remember that CORS does not replace authentication or authorization. Apply CSRF protections when the authentication design requires them.

## 7. Rate limiting and abuse prevention

Apply appropriately scoped limits to login, password reset, verification, search, uploads, expensive operations, and public endpoints. Consider distributed rate-limit storage for multi-instance deployments. Add bot / abuse controls where justified, without making legitimate users unable to recover accounts.

## 8. Payments and webhooks

- Never trust a client-reported payment success or amount.
- Verify provider signatures using official SDKs.
- Use idempotency and deduplication for webhook events.
- Reconcile provider state with internal state.
- Keep secret keys server-side.
- Do not store prohibited payment-card data; use the provider's approved tokenization / hosted flows.
- Treat webhook delivery as retryable and potentially duplicated or out of order.

## 9. Logging and incident readiness

Log security-relevant events without recording secrets. Include request IDs and actor / resource identifiers only when safe and necessary. Protect log access and retention. Define alerting for suspicious authentication activity, privilege changes, abnormal rates, and repeated failures where appropriate.

## 10. Security verification

Test negative cases, not just successful flows: privilege escalation, object ownership, tenant isolation, malformed input, injection payloads, oversized requests, expired tokens, webhook signature failures, replay attempts, rate limits, and information leakage. Run dependency and static security checks available in the project.

## 11. Scope and claims

A code review or a passing test suite does not prove a system is secure. Report the checks performed, known gaps, and any need for specialist penetration testing or compliance review. Do not claim compliance certification unless it has been formally established.
