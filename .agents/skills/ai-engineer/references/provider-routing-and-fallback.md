# Multi-Provider Routing & Fallback Reference

This reference covers model routing, provider abstraction, and automatic failover.

---

## 🌐 1. Model Tiering Matrix

Match each user task to the optimal model tier:

1. **Tier 1: Ultra-Fast Extraction & Classification (< 300ms)**
   - Models: Groq Llama-3-8B, Gemini 1.5/2.0 Flash, Claude 3.5 Haiku.
   - Use Cases: Real-time query routing, intent classification, entity extraction, sentiment.
2. **Tier 2: Production General Reasoning & Code (500ms - 2s)**
   - Models: Claude 3.5/3.7 Sonnet, GPT-4o, Gemini 1.5 Pro.
   - Use Cases: Complex chat, code generation, tool orchestration, RAG synthesis.
3. **Tier 3: Local / Offline Privacy Execution**
   - Models: Ollama (Llama 3.2, Qwen 2.5, DeepSeek).
   - Use Cases: Local development, air-gapped deployments, sensitive on-premise data.

---

## 🔄 2. Fallback Chain Implementation

Always wrap provider calls in a fallback chain:
1. Primary call to preferred model (e.g. Anthropic Claude 3.5 Sonnet).
2. If `429 Too Many Requests` or network timeout:
3. Automatically failover to secondary model (e.g. OpenAI GPT-4o or Gemini 1.5 Pro).
4. If secondary fails, return clean structured error to client without crashing.
