#!/usr/bin/env node

const args = process.argv.slice(2);
const command = args[0];

if (command === "help") {
  process.argv = [process.argv[0], process.argv[1], "--help"];
} else if (command === "install") {
  process.argv.splice(2, 1);
}

import("../src/index.js").catch((err) => {
  console.error("Failed to run irfanlovefront CLI:", err);
  process.exit(1);
});
