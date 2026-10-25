# Async Jobs, Queues & Webhooks Reference

This reference establishes background worker patterns (BullMQ, Redis, Inngest, Celery) to offload heavy workloads from the API request-response cycle.

---

## ⚙️ 1. When to Use Background Workers

Offload to an async queue whenever a task:
- Involves third-party network calls that may timeout (emails via Resend/SendGrid, webhooks).
- Involves heavy compute or AI generation (document parsing, embedding generation, video encoding).
- Requires scheduled or recurring execution (daily summary reports, data cleanup).

---

## 🔁 2. Idempotency & Retry Policies

- **Idempotency Keys:** Every webhook and critical job must store an `idempotency_key` in Redis or DB to prevent duplicate processing on retries.
- **Exponential Backoff:** Configure workers with exponential retry backoff:
  `attempts: 5, backoff: { type: 'exponential', delay: 2000 }`.
- **Dead-Letter Queue (DLQ):** Unrecoverable failed jobs move to a DLQ with structured error payloads for developer inspection.
