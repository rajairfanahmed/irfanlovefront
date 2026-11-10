# Authentication and Authorization

Read when implementing or reviewing identity, login, access control, sessions, tokens, account recovery, or protected resources.

## 1. Keep the concepts separate

- **Authentication:** establishes who the actor is.
- **Authorization:** determines what that actor may do to a specific resource in a specific context.

A valid login does not grant access to every record or operation.

## 2. Identity lifecycle

Define the required flows: registration, account verification, login, logout, session renewal, password change, password reset, account disablement, and account deletion where applicable. Consider abuse prevention, rate limits, notification, and recovery procedures.

## 3. Password handling

- Never store plaintext passwords or reversible password encryption.
- Use a modern password-hashing algorithm supported by reputable libraries (for example, Argon2id or an appropriately configured bcrypt implementation).
- Use framework / library password verification APIs.
- Apply sensible password policy and rate limiting.
- Do not log passwords or return them in responses.

Do not implement cryptographic primitives manually.

## 4. Sessions and tokens

Choose based on architecture and threat model:
- Server-side sessions provide centralized session invalidation and require secure session storage when scaled across instances.
- Signed access tokens can support stateless validation, but revocation, rotation, storage, and theft response require deliberate design.

For browser applications, consider secure, HttpOnly, SameSite cookies and CSRF protections where appropriate. Avoid storing long-lived sensitive tokens in browser-accessible storage without a documented threat analysis.

If using access and refresh tokens, define:
- Expiration and renewal behavior.
- Refresh-token rotation and reuse detection where appropriate.
- Revocation on logout, password reset, or account compromise.
- Secure storage and transport.
- Issuer, audience, algorithm allow-list, and signature verification.
- Key rotation and secret management.

Do not accept unsigned or unexpected token algorithms.

## 5. Authorization models

- **RBAC:** permissions grouped into roles.
- **ABAC / policy-based:** decisions based on attributes such as ownership, tenant, resource state, or context.
- **Resource ownership:** actor may access only records they own or are explicitly granted.

Many applications need a combination. Centralize reusable policy checks, but verify authorization close to the protected operation / data access. Never trust role, owner, price, or entitlement values sent by the client.

## 6. Multi-tenancy

For tenant-aware applications:
- Derive tenant context from trusted authenticated identity and validated membership.
- Scope every query and mutation to the tenant.
- Enforce tenant isolation in tests.
- Avoid accepting an arbitrary tenant ID from the browser as sufficient proof of access.
- Consider database-level isolation controls for high-risk environments.

## 7. Account recovery and verification

Use short-lived, single-use, cryptographically random tokens or secure provider mechanisms. Store a hash of recovery tokens where practical. Invalidate tokens after use or expiry. Avoid account-enumeration leaks in public responses. Rate-limit requests and notify users of important account changes.

## 8. MFA and third-party login

Use established libraries and providers. Verify callback state, redirect URI, issuer, audience, nonce, and signature as applicable. Store MFA recovery codes securely and make recovery procedures explicit. Do not implement OAuth or TOTP primitives from scratch.

## 9. Authorization test cases

Test at least:
- Anonymous actor.
- Authenticated actor with correct permission.
- Authenticated actor without permission.
- User accessing another user's resource.
- Cross-tenant access attempt.
- Expired, revoked, malformed, or reused credentials.
- Role changes and disabled accounts.
