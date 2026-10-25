# Caching Strategies & Performance Reference

This reference covers multi-layer caching and latency minimization techniques.

---

## 🏎️ 1. Cache-Aside Pattern with Redis

1. Application checks Redis key (e.g. `cache:user:usr_123:profile`).
2. If cache hit, return deserialized JSON immediately (< 5ms).
3. If cache miss, execute database query, store result in Redis with an explicit TTL (e.g. `EX: 3600`), and return data.
4. On data update, actively invalidate or update the specific cache key.

---

## ⚡ 2. Database Connection Pooling

- Never open a new database connection on every HTTP request. Use connection poolers (`pgBouncer`, Prisma Accelerate, or native pool).
- Set sensible connection limits (`max: 20`, `idleTimeoutMillis: 30000`) to prevent database socket exhaustion during traffic spikes.
