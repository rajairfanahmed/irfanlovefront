# Authentication & Security Reference

This reference enforces production-grade authentication, role-based access control, and defense-in-depth security.

---

## 🔒 1. Authentication Patterns

- **Session-Based Auth (Web & SaaS):** Secure `httpOnly`, `sameSite: "lax"`, `secure: true` cookies stored in Redis or database sessions.
- **JWT / Bearer Tokens (APIs & Mobile):** Short-lived access tokens (15 minutes) paired with rotating refresh tokens stored in secure storage.
- **OAuth 2.0 Integration:** Standard PKCE flow for Google, GitHub, and Apple login.

---

## 🛡️ 2. Defense-in-Depth Middleware Checklist

1. **Role-Based Access Control (RBAC):** Middleware checks user role (`admin`, `member`, `viewer`) before executing mutations.
2. **Rate Limiting:** Sliding-window rate limiter via Redis (e.g. 100 requests per minute per IP, and 5 attempts per minute on `/login`).
3. **CORS Hardening:** Whitelist explicit client origins; never allow wildcard `Access-Control-Allow-Origin: *` with credentials.
4. **Security Headers (Helmet):** Enforce `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, and `Strict-Transport-Security`.
