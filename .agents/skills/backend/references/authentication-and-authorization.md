# Authentication and Authorization

Read for identity, login, access control, sessions, tokens, account recovery, or protected resources.

## 1. Keep the concepts separate

Authentication establishes who the actor is. Authorization determines what that actor may do to a specific resource in a specific context. A valid login does not grant broad access.

## 2. Identity lifecycle

Define applicable flows: registration, verification, login, logout, renewal, password change/reset, account disablement, deletion, and recovery. Include abuse prevention, rate limits, notification, and support procedures.

## 3. Password handling

Never store plaintext or reversible password encryption. Use a reputable library implementing a modern password hash such as Argon2id or appropriately configured bcrypt. Use library verification APIs, rate-limit credential attempts, and never log/return passwords. Do not implement cryptographic primitives manually.

## 4. Sessions and tokens

Choose according to architecture and threat model. Server-side sessions support centralized invalidation but require reliable shared storage when scaled. Signed access tokens support distributed validation but require deliberate expiry, revocation, rotation, theft response, and key management.

For browser apps, consider secure, HttpOnly, SameSite cookies and CSRF protection when appropriate. Do not store long-lived sensitive tokens in browser-accessible storage without a documented threat analysis.

If access/refresh tokens are used, define expiry, renewal, rotation, reuse detection, revocation, logout/password-reset behavior, secure storage/transport, issuer, audience, algorithm allow-list, signature checks, and key rotation.

## 5. Authorization models

- RBAC: permissions grouped into roles.
- ABAC/policy-based access: decision depends on attributes such as ownership, tenant, resource state, or context.
- Resource ownership: actor can access only resources they own or have been granted.

Many products need a combination. Centralize reusable policies, but verify access close to the protected operation/data boundary. Never trust client-supplied role, owner, price, or entitlement.

## 6. Multi-tenancy

Derive tenant context from trusted identity and validated membership. Scope every query and mutation to the tenant. Test cross-tenant access attempts. An arbitrary tenant ID from the browser is not proof of access. Consider database-level isolation for high-risk workloads.

## 7. Recovery and verification

Use short-lived, single-use, cryptographically random tokens or established provider flows. Store token hashes where practical and invalidate after use/expiry. Avoid public account enumeration and rate-limit recovery. Notify users of sensitive account changes.

## 8. MFA and federation

Use established providers/libraries. Validate OAuth/OIDC state, redirect URI, issuer, audience, nonce, and signature as applicable. Protect MFA recovery codes and define recovery paths. Do not implement OAuth, OIDC, or TOTP primitives from scratch.

## 9. Authorization test matrix

Test anonymous, valid actor, insufficient role, cross-user resource access, cross-tenant access, expired/revoked/malformed/reused credentials, disabled accounts, and role/permission changes.
