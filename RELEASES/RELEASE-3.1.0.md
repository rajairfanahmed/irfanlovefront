# Release 3.1.0: Modular Reference Architecture, Zero-Dash Standard & Dedicated Specialist Suite

**Release Version:** `3.1.0`  
**Author:** Raja Irfan Ahmed  
**Status:** General Availability  
**License:** Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)  

---

## What Is New in Release 3.1.0

Release 3.1.0 is a complete architectural overhaul of the `irfanlovefront` frontend engineering skills suite. It solves model context freezing, repetitive card layouts, contrast failures, and premature production claims by introducing a modular reference architecture, strict anti-slop quality gates, and clear domain separation across all specialist stages.

---

### 1. Modular Reference Architecture (Under 180-Line LLM Attention Ceiling)

Previous versions relied on monolithic multi-thousand-line rule files that caused token exhaustion, context drift, and output truncation:
- **On-Demand Reference Loading:** Each skill now operates via a compact master orchestrator (~100 lines) backed by focused companion references (40 to 80 lines each) loaded strictly when triggered by active workflow steps.
- **Maximum Output Capacity:** Eliminates over 3,500 lines of redundant rule boilerplate, preserving over 85% of model context for generating production code and components.
- **Permanent Design Library:** Relocated 85 world-class brand design specifications directly into `taste-design-engineer/design-refs/`.

---

### 2. Elimination of Master Orchestrator Bloat

- **Autonomous Peer Specialization:** Removed the centralized "Master Orchestrator" bottleneck. Each skill now functions with clear inputs, strict boundaries, and standardized peer handoffs.
- **Clear 5-Stage Lifecycle:**
  - **Stage 0 (`taste-design-engineer`):** Product understanding, brand research, 2-step interactive discovery protocol, and creative direction.
  - **Stage 1 (`frontend-architect`):** Foundation scaffolding, semantic substrate token hierarchy (`--canvas`), font system, and Next.js 15 App router architecture.
  - **Stage 2 (`creative-layout-engineer`):** Page-by-page layout composition, 4-element hero mini-site, squint test, and visual rhythm.
  - **Stage 3 (`interactive-component-engineer`):** Tactile component engineering, genuine interaction state handling, accessible forms, and disciplined motion.
  - **Stage 4 (`experience-qa-auditor`):** Evidence-based verification, responsive audits (320px to 1440px), WCAG AA compliance, and defect triage.
- **Auxiliary Specialists:**
  - `build-error-resolver`: Surgical TypeScript compiler error healing with minimal diffs.
  - `github-readme-writer`: High-converting technical documentation and launch assets.

---

### 3. Truth in Quality Verification (Stage 4)

- **End of Premature Sign-Offs:** The QA auditor no longer marks everything green by default. Code inspection is strictly separated from live rendered browser testing.
- **Definitive Status Taxonomy:** Audits deliver explicit verdicts: `PASS`, `FAIL`, `PARTIAL`, `NOT VERIFIED`, or `BLOCKED`.
- **Hard Blocker Protocol:** Any build failure, console exception, dead CTA, or mobile horizontal overflow triggers an immediate `FAIL`.

---

### 4. Strict Zero-Dash Anti-Slop Policy

- **Zero Em-Dash & En-Dash Invariant:** Strictly zero em-dash characters (U+2014) and zero en-dash characters (U+2013) across all skills, references, and generated outputs to eliminate AI-generated writing clichés.
- **Zero Template Forcing:** Banned automatic double-bezel cards, repetitive pill buttons, and mandatory GSAP timelines. Components adapt purely to the approved creative brief.

---

## Installation & Upgrade

To run Release 3.1.0 directly via npx:

```bash
npx irfanlovefront@latest
```

To install or upgrade globally via npm:

```bash
npm install -g irfanlovefront@latest
```

To install directly for specific AI coding tools:

```bash
# Claude Code (.claude/skills/ + CLAUDE.md)
npx irfanlovefront --claude

# Cursor (.cursor/rules/*.mdc)
npx irfanlovefront --cursor

# Google Antigravity / Gemini (.agents/skills/)
npx irfanlovefront --antigravity

# Install for all supported tools simultaneously
npx irfanlovefront --all
```
