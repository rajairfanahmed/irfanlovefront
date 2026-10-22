#!/usr/bin/env node

import { runMcpServer } from "./mcp-server.js";

runMcpServer().catch((err) => {
  console.error("Fatal error starting irfanlovefront MCP server:", err);
  process.exit(1);
});
