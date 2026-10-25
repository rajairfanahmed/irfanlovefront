# Real-Time Streaming & UI Protocol Reference

This reference covers Server-Sent Events (SSE) streaming and real-time frontend synchronization.

---

## ⚡ 1. SSE Wire Protocol & Event Types

Stream JSON events using standard `Content-Type: text/event-stream; charset=utf-8`:

```http
event: delta
data: {"text": "Hello, "}

event: delta
data: {"text": "how can I "}

event: tool_start
data: {"tool": "search_database", "args": {"query": "Q3 Revenue"}}

event: tool_result
data: {"tool": "search_database", "output": "$4.2M"}

event: delta
data: {"text": "help you today?"}

event: done
data: {"usage": {"promptTokens": 142, "completionTokens": 38}}
```

---

## 💻 2. Client-Side Streaming Consumption (React / Next.js)

- Use standard Web Streams API or Vercel AI SDK (`useChat`, `useCompletion`).
- Support user cancellation: wire `AbortController` to the "Stop Generating" button.
- Clean text rendering: render streaming markdown with memoized syntax highlighters to prevent client-side repainting on every text chunk.
