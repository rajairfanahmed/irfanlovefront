# API Design & Contract Standards Reference

This reference establishes the unified API protocol, error envelope, and contract documentation rules.

---

## 📡 1. Unified Response Envelope

All API endpoints must return a predictable JSON envelope:

### Success Response (`200 OK`, `201 Created`):
```json
{
  "data": {
    "id": "usr_98a72b",
    "name": "Alex Vance",
    "email": "alex@example.com"
  },
  "error": null,
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 142
  }
}
```

### Error Response (`400 Bad Request`, `401 Unauthorized`, `404 Not Found`, `500 Internal`):
```json
{
  "data": null,
  "error": {
    "code": "VALIDATION_FAILED",
    "message": "The provided email address is invalid.",
    "details": [
      {
        "field": "email",
        "issue": "Must be a valid email format"
      }
    ]
  },
  "meta": {
    "timestamp": "2026-10-25T20:00:00Z"
  }
}
```

---

## 📑 2. `CONTRACTS.md` Standard

Whenever an endpoint is created or updated, record it in `CONTRACTS.md` at project root:

```markdown
# API Contracts & Type Definitions

## `POST /api/v1/auth/signup`
- **Description:** Registers a new user account.
- **Request Body:**
  \`\`\`json
  { "email": "string", "password": "string(min:8)", "fullName": "string" }
  \`\`\`
- **Response 201:** \`{ "data": { "userId": "string", "token": "string" }, "error": null }\`
- **Response 400:** \`{ "data": null, "error": { "code": "USER_EXISTS", "message": "..." } }\`
```
