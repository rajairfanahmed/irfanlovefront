# API Contract

> Status: Proposed / Confirmed / Pending  
> Base URL: [Environment-specific; never include secrets]  
> Last updated: YYYY-MM-DD  
> Machine-readable contract: [Path to OpenAPI/schema, if used]

## 1. Conventions
- Authentication: [Actual model]
- Authorization: [Roles/policies/ownership]
- Content type: [Actual type]
- Error format: [Actual stable shape]
- Pagination: [Actual convention]
- Versioning: [Approach / Not required]

## 2. Endpoint catalogue
| Method | Path | Purpose | Access | Status |
|---|---|---|---|---|
| [GET/POST] | [/resource] | [Purpose] | [Public / Authenticated / Policy] | [Planned / Implemented / Verified] |

## 3. Endpoint details
### [METHOD] [PATH]
- Purpose: [What it does]
- Authentication: [Required / Not required]
- Authorization: [Policy, role, ownership, tenant]
- Path/query parameters: [Names and constraints]
- Request body: [Schema and safe synthetic example]
- Success status and response: [Actual expected schema]
- Validation: [Rules]
- Expected errors: [Statuses and machine-readable codes]
- Side effects: [Database writes, events, email, provider calls]
- Idempotency: [Behavior]
- Frontend consumers: [Routes/components or none]
- Tests: [Actual test cases]

## 4. Shared error schema
[Document the real error contract.]

## 5. Compatibility and security notes
[Breaking changes, deprecation, rate limits, sensitive-field rules.]
