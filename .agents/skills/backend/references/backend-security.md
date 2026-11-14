# Backend Security

Read for any public API, user data, authentication, admin action, file upload, payment, webhook, sensitive integration, or security review.

## 1. Security mindset and threat model

Treat client input, headers, cookies, files, webhook payloads, and external responses as untrusted. Identify assets, actors, entry points, trust boundaries, abuse cases, likely impact, controls, and residual risks. Apply least privilege and defense in depth.

## 2. Common web risks

- **Injection:** parameterized queries and safe ORM APIs; never build executable query expressions from raw user input.
- **Broken access control/IDOR:** authorize every object read/write; scope queries by actor and tenant.
- **Authentication failure:** maintained identity libraries, secure credential handling, rate limits, and recovery.
- **XSS:** context-appropriate output encoding; sanitize only intentionally supported rich HTML; avoid unsafe render APIs.
- **CSRF:** protect cookie-authenticated state-changing operations with appropriate SameSite and anti-CSRF controls.
- **SSRF:** constrain destinations, block internal/metadata ranges, validate redirects, and use egress controls when available.
- **Misconfiguration:** production debug off, trusted origins, hardened headers, no default credentials.
- **Sensitive data exposure:** minimize collection, encrypt in transit, restrict secrets and logs, and apply least privilege.
- **Unsafe deserialization:** do not deserialize untrusted native objects; validate structured input against explicit schemas.
- **Resource exhaustion:** bound payloads, pagination, expensive queries, uploads, concurrency, and request rates.

Use current OWASP and official framework guidance when a specific control/version needs verification.

## 3. Input, output, and file safety

Validate type, size, format, range, and allowed values server-side. Allow-list file extensions and verify content rather than trusting filename/MIME alone. Generate storage names server-side and prevent path traversal. Keep uploads outside executable web roots or use controlled object storage. Scan/quarantine risky content when required by threat model. Cap upload and decompression sizes. Return safe errors.

## 4. Secrets and configuration

Never commit API keys, credentials, private keys, production `.env` files, or real tokens. Use environment configuration or an approved secrets manager with access control and rotation. Provide safe `.env.example` values only. Validate required settings at startup without printing values. Redact sensitive headers and fields from logs.

## 5. Transport and browser controls

Use HTTPS in production. Configure secure cookie flags, content security policy, security headers, and explicit CORS origins for the product. CORS does not replace auth. Apply CSRF protection when the chosen auth mechanism requires it.

## 6. Rate limiting and abuse prevention

Use suitable limits for login, reset, verification, search, uploads, expensive operations, and public routes. For multiple application instances, use a shared/distributed limiter if needed. Add bot controls only when justified and avoid blocking legitimate recovery.

## 7. Payments and webhooks

Never trust client-reported payment success or amount. Verify provider signatures with official SDKs, deduplicate event IDs, reconcile provider and internal state, keep secrets server-side, and use hosted/tokenized payment handling. Webhook delivery may be duplicated, delayed, or out of order.

## 8. Logging and incident readiness

Log security-relevant events without secrets. Include correlation IDs and safe actor/resource identifiers where justified. Restrict log access and retention. Alert on suspicious login activity, privilege changes, unusual request rates, and repeated failures when relevant.

## 9. Security verification

Test privilege escalation, object/tenant isolation, malformed input, injection payloads, oversized requests, expired tokens, signature failures, replay attempts, rate limits, and information leakage. Run available static/dependency checks.

## 10. Claims and scope

A code review or passing tests do not prove a system secure. Report actual checks, known gaps, and when penetration testing or compliance review is needed. Never claim certification without formal evidence.
