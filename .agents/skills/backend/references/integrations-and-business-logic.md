# Integrations and Business Logic

Read when implementing domain workflows, external APIs, payment providers, email, files, webhooks, queues, or scheduled jobs.

## 1. Business rules are server-owned

Translate requirements into explicit rules, state transitions, invariants, and acceptance criteria. Keep prices, totals, entitlements, limits, subscription status, permissions, and other authoritative decisions on the server. Treat client values as requests, not truth.

## 2. External service adapters

Wrap vendor-specific SDK calls behind a focused integration module where useful. Keep provider-specific payloads and errors from spreading throughout the domain layer. Configure credentials securely and validate provider configuration at startup.

## 3. Reliability patterns

For external calls:
- Set connection and request timeouts.
- Retry only transient failures and only when safe.
- Use exponential backoff with jitter where appropriate.
- Set retry limits and avoid retry storms.
- Use circuit breakers or bulkheads when justified by service criticality and architecture.
- Make operations idempotent if retries can duplicate side effects.
- Define a fallback or clear failure state.

Never blindly retry a payment, email, or other irreversible action without idempotency controls.

## 4. Webhooks

A robust webhook handler should:
1. Receive the raw body if required by signature verification.
2. Verify the provider signature with the official method.
3. Reject invalid signatures.
4. Persist or otherwise safely deduplicate the event ID.
5. Acknowledge promptly according to provider requirements.
6. Process the event safely, often asynchronously for longer work.
7. Handle duplicate, delayed, and out-of-order events.
8. Record outcome and support reconciliation.

Do not grant paid access based solely on a browser redirect or client callback.

## 5. Background jobs and queues

Use background processing for work that should not block a request or needs retry / scheduling. Define:
- Job payload and schema version.
- Idempotency and duplicate handling.
- Retry count, backoff, and dead-letter / failure handling.
- Timeout and concurrency limits.
- Observability and correlation IDs.
- Ordering requirements, if any.
- Safe cancellation and recovery behavior.

A queue does not guarantee exactly-once execution. Design handlers to tolerate retries.

## 6. Email and notifications

Use templates and a provider adapter. Avoid putting secrets or sensitive information in email links or message content. Use short-lived signed links for account actions. Track delivery outcomes where necessary, and do not treat a queued email as proof that a user received or read it.

## 7. File and object storage

Choose storage based on file size, access pattern, privacy, retention, and delivery needs. Prefer private storage with short-lived signed access when content is restricted. Define upload validation, quotas, ownership, deletion, and lifecycle policies.

## 8. Payment workflows

Model payment, order, invoice, entitlement, refund, and subscription states explicitly. Use provider-hosted checkout or tokenized payment methods when possible. Verify payment events server-side, deduplicate events, reconcile provider and local state, and make refunds / cancellations auditable. Keep monetary calculations in integer minor units or a suitable decimal type; avoid binary floating-point for currency.

## 9. Business state machines

For workflows with several states, define allowed transitions and who may trigger them. Reject invalid transitions atomically. Include timeout, retry, cancellation, failure, and manual-review states where appropriate. Store enough history to investigate changes when the domain requires it.

## 10. Testing integrations

Use mocks or fakes for isolated unit tests, contract tests for integration boundaries, and provider sandbox environments for end-to-end checks where available. Explicitly test timeouts, invalid signatures, duplicate events, provider errors, and partial failures. Clearly distinguish simulated tests from real provider verification.
