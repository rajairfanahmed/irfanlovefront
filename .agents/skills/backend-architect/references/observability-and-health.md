# Observability, Structured Logging & Health Reference

This reference establishes production monitoring standards and system diagnostics.

---

## 📋 1. Structured JSON Logging

Use structured JSON loggers (Pino for Node/TypeScript, Loguru/structlog for Python) rather than raw `console.log`:

```json
{
  "level": "info",
  "time": "2026-10-25T20:15:30.123Z",
  "reqId": "req_87a12b",
  "method": "POST",
  "url": "/api/v1/checkout",
  "userId": "usr_99",
  "durationMs": 42.6,
  "status": 200
}
```

---

## 🩺 2. Health & Liveness Checks

Every backend service must expose `/health` and `/health/ready` endpoints:
- **Liveness (`/health`):** Returns `200 OK` if the HTTP server process is running.
- **Readiness (`/health/ready`):** Returns `200 OK` only if downstream dependencies (Database, Redis) are responding. Returns `503 Service Unavailable` if the DB is disconnected.

---

## 🛑 3. Graceful Shutdown

Listen for `SIGTERM` and `SIGINT` signals:
1. Stop accepting new incoming HTTP connections.
2. Allow active in-flight requests 10 seconds to finish.
3. Close database pools, Redis connections, and queue workers.
4. Exit process cleanly (`process.exit(0)`).
