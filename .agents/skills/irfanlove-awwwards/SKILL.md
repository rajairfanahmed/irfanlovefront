---
name: irfanlove-awwwards
description: Search award-winning websites on Awwwards, inspect design DNA, capture live component states, record motion sheets, and verify builds using the irfanlovefront suite.
metadata:
  priority: 9
  command: "/irfanlove:awwwards"
---

# Awwwards Inspiration & Motion Intelligence (`/irfanlove:awwwards`)

## 1. Overview
The `irfanlove-awwwards` skill connects to the Awwwards ecosystem and the `irfanlovefront` MCP tools. It grounds visual direction in proven, award-winning references rather than generic guesswork.

## 2. Capabilities
- **Site Search**: Search by award type (Site of the Day, Developer Award, Honorable Mention), tag, color, or technology stack.
- **Motion DNA Extraction**: Extract real cubic-bezier curves, keyframes, scroll scrubbing behaviors, and transitions.
- **Component Capture**: Inspect and capture isolated hero sections, navigation bars, bento cards, and interactive 3D WebGL canvases.
- **Build Verification**: Run automated conformance checks between local dev builds and reference sites.

## 3. How to Execute

### Search Awwwards via CLI:
```bash
node dist/cli.js awwwards "portfolio"
```

### Search via MCP Tool:
Call `irfanlove_awwwards_search` with:
- `query`: e.g. "dark 3D portfolio"
- `award`: "sotd" | "developer" | "honorable"

### Downstream Handoff
Captured references feed directly into `/1-prompt-generator` and `/7-animate-website` to recreate world-class micro-interactions and smooth scrolling.
