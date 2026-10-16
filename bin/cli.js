#!/usr/bin/env node

import("../src/index.js").catch((err) => {
  console.error("Failed to run irfanlovefront CLI:", err);
  process.exit(1);
});
