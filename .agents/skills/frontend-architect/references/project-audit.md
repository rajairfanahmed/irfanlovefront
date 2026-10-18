# Project Preflight Audit & Environment Analysis

**Scope:** Repository Inspection, Framework Detection & Constraint Analysis  
**Owner:** `frontend-architect`  
**Load Condition:** Loaded at Step 1 of Stage 1 before making architectural decisions  

---

## 1. Purpose & Problem Solved
AI tools often assume a blank canvas and blindly run scaffolding commands that overwrite existing code, conflict with active package managers, or introduce incompatible dependencies. This reference establishes the preflight audit procedure: inspecting existing code, dependencies, build scripts, and constraints before proposing architecture.

---

## 2. When to Load This Reference
- Loaded immediately upon invoking `/frontend-architect`.
- Loaded before creating or modifying configuration files.

---

## 3. Inputs & Prerequisites
- Repository root directory.
- `package.json` and package manager lockfiles (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`, `bun.lockb`).
- `frontend/DESIGN_ENGINEERING_BRIEF.md` (synthesized from Stage 0).

---

## 4. Preflight Audit Checklist

The architect must execute this sequential inspection:

### 1. Project Lifecycle Mode Determination
- **Mode A (Greenfield Creation):**
  - No web application exists, or an empty `frontend/` directory is present.
  - Action: Scaffold a clean Next.js 15 application inside `frontend/` adhering to the folder quarantine standard.
- **Mode B (In-Place Refactoring):**
  - An active web application already exists in the repository.
  - Action: Do NOT run scaffolding commands. Do NOT wipe files. Adopt the existing framework, directory structure, and bundler.

### 2. Framework & Version Audit
- Inspect `package.json` to identify:
  - Framework: Next.js (App Router vs Pages Router), Vite, Remix, React, Astro.
  - React Version: React 18 vs React 19.
  - TypeScript Version: Configured in `tsconfig.json` with strict mode enabled.
  - Styling Engine: Tailwind CSS (v3 with `tailwind.config.js` vs v4 with CSS `@import "tailwindcss"`), Vanilla CSS, CSS Modules, or CSS-in-JS.

### 3. Package Manager & Script Analysis
- Identify the authoritative package manager from lockfiles:
  - `pnpm-lock.yaml` -> use `pnpm`
  - `yarn.lock` -> use `yarn`
  - `bun.lockb` -> use `bun`
  - `package-lock.json` -> use `npm`
- Inspect existing scripts: `dev`, `build`, `start`, `lint`, `type-check`.
- Verify that build and type-checking scripts execute without pre-existing errors.

### 4. Constraint & Conflict Identification
- Identify deprecated or conflicting packages.
- Flag breaking changes (e.g. Next.js 15 async request headers, React 19 ref changes).
- Document all preflight findings in `frontend/PLAN.md`.

---

## 5. Output Artifact
- Initialized or updated `frontend/PLAN.md` with Section 1: Preflight Audit Summary.

---

## 6. Validation Criteria
- Package manager, framework, and styling engine explicitly identified.
- Greenfield vs In-Place Refactor mode unambiguously declared.
- Existing repository configuration preserved without destructive overwrite.

---

## 7. Downstream Dependencies
- Feeds `references/stack-and-compatibility.md` to select verified dependencies.
- Feeds `references/architecture-and-routing.md` to establish folder structures.
