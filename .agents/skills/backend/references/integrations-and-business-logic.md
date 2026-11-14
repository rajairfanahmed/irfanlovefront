# Integrations and Business Logic

Read for domain workflows, external APIs, payments, email, files, webhooks, queues, or scheduled jobs.

## 1. Business rules belong on the server

Translate requirements into explicit rules, invariants, allowed state transitions, and acceptance criteria. Prices, totals, entitlements, quotas, permissions, and subscription status are authoritative server decisions. Treat client values as requests, not truth.

## 2. Provider adapters

Encapsulate provider-specific SDK calls and payloads behind focused adapters where useful. Keep vendor errors out of domain logic. Configure credentials securely and validate required provider settings at startup.

## 3. Reliability patterns

Set connection/request timeouts. Retry only transient errors and only when safe. Use bounded exponential backoff with jitter where appropriate. Avoid retry storms. Add circuit breakers/bulkheads only when service criticality and architecture justify them. Make operations idempotent when retries can duplicate side effects. Define a clear failure state.

## 4. Webhooks

A robust handler should:
1. Receive the raw body if required for signature verification.
2. Verify provider signature using the official method.
3. Reject invalid signatures.
4. Persist or safely deduplicate the event ID.
5. Acknowledge promptly according to provider requirements.
6. Process long work asynchronously when appropriate.
7. Handle duplicates, delayed delivery, and out-of-order events.
8. Record outcomes and support reconciliation.

Never grant paid access solely because the browser returned to a success URL.

## 5. Background jobs and queues

Define payload schema/version, idempotency, retry count/backoff, dead-letter/failure handling, timeout, concurrency, observability, cancellation, and ordering requirements. A queue does not guarantee exactly-once execution; handlers must tolerate repeated delivery.

## 6. Email and notifications

Use templates and provider adapters. Avoid secrets or sensitive information in links/content. Account-action links should be short-lived and single-use where appropriate. A queued email is not proof of delivery or reading.

## 7. File/object storage

Choose by file size, access pattern, privacy, retention, and delivery requirements. Use private storage and short-lived signed access for restricted assets. Define validation, quotas, ownership, deletion, lifecycle, and backup implications.

## 8. Payments

Model payment, order, invoice, refund, entitlement, and subscription states explicitly. Use hosted checkout or tokenized payment methods where practical. Verify events server-side, deduplicate, reconcile provider/local state, and make refunds/cancellations auditable. Store currency in integer minor units or a suitable decimal type, never binary floating point.

## 9. State machines

For multi-state workflows, define allowed transitions and authorized actors. Reject invalid transitions atomically. Include failure, timeout, retry, cancellation, and manual-review states when the domain requires them. Preserve enough history for audit and support.

## 10. Integration testing

Use mocks/fakes for isolated unit tests, contract tests for boundaries, and provider sandboxes for end-to-end checks. Test timeouts, invalid signatures, duplicates, provider errors, and partial failures. Distinguish simulated tests from real provider verification.
