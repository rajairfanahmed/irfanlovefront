# Backend Testing & API Integration Reference

This reference covers automated integration testing, database rollbacks, and schema validation tests.

---

## 🧪 1. Integration Test Workflow

1. **API Integration Tests (Vitest + Supertest / Pytest + HTTPx):**
   - Test endpoints against a real or ephemeral test database.
   - Assert HTTP status codes, response envelope format (`data` and `error` keys), and database side-effects.
2. **Transaction Rollback Fixture:**
   - Wrap each test case inside a database transaction and roll it back on teardown so tests remain completely isolated without dirtying data.
3. **Authentication Mocking:**
   - Create reusable test helpers that inject valid JWT claims or session cookies into the request header.

---

## 📋 2. Backend Pre-Commit Checklist

Before reporting completion on a backend task, verify:
- [ ] Automated tests pass (`npm run test` or `pytest`).
- [ ] Database migrations execute cleanly forward and backward (`db migrate up` and `db migrate down`).
- [ ] TypeScript/Python types compile cleanly with zero errors.
- [ ] All new endpoints are documented in `CONTRACTS.md`.
