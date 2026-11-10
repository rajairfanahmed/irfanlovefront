# API Contract

> Status: Proposed / Confirmed / Pending  
> Base URL: [Environment-specific base URL; do not include secrets]  
> Last updated: YYYY-MM-DD

## 1. Conventions
- Authentication: [TBD]
- Content type: [TBD]
- Error response shape: [TBD]
- Pagination convention: [TBD]
- API versioning: [TBD / Not required]

## 2. Endpoint catalogue
| Method | Path | Purpose | Access | Status |
|---|---|---|---|---|
| [GET / POST] | [/resource] | [Purpose] | [Public / Authenticated / Role] | [Planned / Implemented / Verified] |

## 3. Endpoint details
### [METHOD] [PATH]
- **Purpose:** [What it does]
- **Authentication:** [Required / Not required]
- **Authorization:** [Policy, role, ownership, or tenant requirement]
- **Path / query parameters:** [Fields and constraints]
- **Request body:**

```json
{
  "example": "synthetic-value"
}
```

- **Success status and response:** [Expected result; use synthetic data]
- **Validation:** [Rules]
- **Expected errors:** [Status and machine-readable code]
- **Side effects:** [Database changes, events, emails, provider calls]
- **Idempotency:** [Behavior]
- **Tests:** [Relevant test names or cases]

## 4. Shared error format
[Document the actual safe error schema.]

## 5. Compatibility notes
[Breaking changes, deprecation, and frontend consumers.]
