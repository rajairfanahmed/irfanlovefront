#!/usr/bin/env node

import("../mcp/dist/index.js").catch((err) => {
  console.error("Failed to start irfanlovefront MCP server:", err);
  process.exit(1);
});
