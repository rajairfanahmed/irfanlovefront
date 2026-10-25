# Structured Outputs & Agentic Tools Reference

This reference establishes function calling, JSON schema enforcement, and multi-step tool loops.

---

## 🛠️ 1. Declaring Strongly-Typed Tools

Declare tools with explicit Zod/Pydantic parameter schemas:

```ts
import { z } from 'zod';

export const weatherTool = {
  name: 'get_current_weather',
  description: 'Fetches real-time weather metrics for a specified city.',
  parameters: z.object({
    location: z.string().describe('City name or postal code'),
    units: z.enum(['celsius', 'fahrenheit']).default('celsius'),
  }),
  execute: async ({ location, units }) => {
    // Execution logic
    return { temperature: 22, condition: 'Sunny' };
  },
};
```

---

## 🔁 2. ReAct Agent Loop & Error Recovery

When running multi-step agent tool loops:
1. Model requests tool execution with parameters.
2. Server validates parameters against schema.
3. If parameters fail schema validation, return error message to model and request correction.
4. Execute tool function safely in try-catch block.
5. Feed tool output back to model context and continue generation until model emits final response or reaches `maxSteps: 5`.
