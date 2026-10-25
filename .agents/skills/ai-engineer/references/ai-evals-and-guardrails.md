# AI Automated Evals & Guardrails Testing Reference

This reference covers automated evaluation testing, deterministic verification, and regression prevention.

---

## 🧪 1. Automated Eval Testing

1. **Deterministic Schema Assertion:** Run automated tests feeding sample inputs to the AI layer, asserting that returned objects parse cleanly with Zod:
   ```ts
   test('extracts user profile with required fields', async () => {
     const result = await extractUserProfile('My name is Sarah, email sarah@example.com');
     expect(UserProfileSchema.safeParse(result).success).toBe(true);
   });
   ```
2. **Golden Prompt Dataset:** Maintain a test JSON fixture (`tests/golden-prompts.json`) containing 20 standard prompts and expected answers to catch regressions across model versions.
3. **Adversarial / Jailbreak Fuzzing:** Run automated tests with adversarial injection attempts to verify the model refuses to leak secrets or execute unauthorized actions.

---

## 📋 2. AI Pre-Commit Checklist

Before reporting completion on an AI/ML task, verify:
- [ ] Schema validation tests pass with zero parsing exceptions.
- [ ] Streaming endpoints close cleanly on client abort (`AbortController`).
- [ ] Fallback model triggers properly when primary key is simulated offline.
- [ ] AI endpoint contracts are documented in `CONTRACTS.md`.
