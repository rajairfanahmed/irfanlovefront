# Downstream Handoff & State Integration Protocol

**Scope:** Downstream Agent Delegation, Progress State Tracking & Environment Verification  
**Owner:** `taste-design-engineer`  
**Load Condition:** Loaded at Stage 0 completion to orchestrate downstream transition  

---

## 1. Purpose & Problem Solved
A specification is useless if downstream agents cannot parse it or if the handoff instructions reference non-existent files. This reference coordinates the deterministic transition from Stage 0 (Taste & Design) to Stage 1 (Architecture & Foundation), verifying environment dependencies and updating state tracking.

---

## 2. When to Load This Reference
- Loaded immediately after `frontend/DESIGN_ENGINEERING_BRIEF.md` passes quality gates.
- Loaded to formulate handoff directives for the user and downstream agents.

---

## 3. Inputs & Prerequisites
- Validated `frontend/DESIGN_ENGINEERING_BRIEF.md`.
- `frontend/uiux-progress.json` (progress tracker).

---

## 4. Downstream Agent Roles & Delivery Contracts

The brief delegates responsibilities across four sequential downstream specialists:

### 1. Stage 1: `frontend-architect`
- **Reads:** Section 5 (Visual System) and Section 9 (Downstream Contracts).
- **Executes:** Scaffolds Next.js 15 inside `frontend/`, injects `--canvas` and `--surface-1` tokens into `globals.css`, sets zero-blocking `next/font`, and crafts `BrandLogo.tsx`.
- **Trigger:** `/frontend-architect`.

### 2. Stage 2: `creative-layout-engineer`
- **Reads:** Section 6 (Structural Layout Blueprint) and Section 4 (Canonical Routes).
- **Executes:** Constructs responsive CSS Grid page layouts, bespoke heroes, and container queries (one page at a time).
- **Trigger:** `/creative-layout-engineer`.

### 3. Stage 3: `interactive-component-engineer`
- **Reads:** Section 8 (Motion Architecture) and Section 6 (Component Anatomy).
- **Executes:** Implements GSAP ScrollTrigger timelines, tactile button springs, card geometries, and accessible forms.
- **Trigger:** `/interactive-component-engineer`.

### 4. Stage 4: `experience-qa-auditor`
- **Reads:** Entire master brief to benchmark production fidelity.
- **Executes:** Automated contrast checks, WCAG AA/AAA audit, technical SEO, and 100/100 Lighthouse verification.
- **Trigger:** `/experience-qa-auditor`.

---

## 5. Progress State Tracking (`frontend/uiux-progress.json`)

Upon completing Stage 0, the agent must update or initialize `frontend/uiux-progress.json`:

```json
{
  "currentStage": 0,
  "stageName": "Taste & Design Engineering",
  "status": "COMPLETED",
  "completedAt": "2026-10-18T18:30:00Z",
  "activeRoute": null,
  "stages": {
    "stage0_taste": { "status": "COMPLETED", "briefPath": "frontend/DESIGN_ENGINEERING_BRIEF.md" },
    "stage1_architecture": { "status": "PENDING" },
    "stage2_layout": { "status": "PENDING" },
    "stage3_components": { "status": "PENDING" },
    "stage4_qa": { "status": "PENDING" }
  }
}
```

---

## 6. Pre-Handoff Verification Checklist
Before instructing the user to proceed, verify:
1. `frontend/DESIGN_ENGINEERING_BRIEF.md` exists and is non-empty.
2. Downstream skill paths exist (`.agents/skills/frontend-architect/SKILL.md`).
3. Display clear next-step message instructing user to run `/frontend-architect`.

---

## 7. Output Artifact
- Updated `frontend/uiux-progress.json`.
- Stage 0 completion summary displayed in terminal.

---

## 8. Validation Criteria
- Progress JSON is valid syntax.
- Next command is explicitly `/frontend-architect`.
