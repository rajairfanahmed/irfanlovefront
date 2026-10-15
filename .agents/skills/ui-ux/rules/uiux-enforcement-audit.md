# UI/UX Skill Enforcement Audit & Root Cause Analysis

## Purpose
Document the empirical investigation into why the UI/UX design skill repeatedly produced near-identical layout and color compositions despite having extensive reference files and quality guidelines. This audit traces the complete runtime execution path, provides verified evidence, classifies root causes, and defines concrete corrective actions.

---

## 1. Observed Failure

When invoking `/uiux` across different tasks and iterations (particularly on developer portfolios and web applications), the generated output consistently repeated the same structural fingerprint:
- **Macrostructure:** Dark near-black or teal canvas, electric green/cyan/purple gradient glows, floating rounded navbar.
- **Hero Silhouette:** Giant left-aligned or centered headline, cluster of 2 to 3 pill buttons, floating badge row beneath buttons.
- **Section Rhythm:** Identical vertical padding across every section, mechanical three-column card grids, flagship project cards nested inside another rounded container.
- **Micro-patterns:** Rounded technology chips, four-card skill grids, identical rounded CTA banners.
- **Diagnostic Anomalies:** Repeated red indicator dots/badges along the left viewport edge.

Despite instructions in `references/` forbidding generic AI templates, the agent repeatedly fell back into this exact formula.

---

## 2. Empirical Evidence from Workspace & Runtime Inspection

| Inspection Target | Exact Path / Artifact | Observed State & Evidence |
|---|---|---|
| **Global Customization Root** | `C:\Users\Raja Irfan Ahmed\.gemini\config\skills\ui-ux\SKILL.md` | **Outdated v1 copy** (Timestamp: 10/14/2026 10:16 AM, 18,718 bytes). Only contained 22 reference files; lacked `designs/` library, lacked restraint engine, lacked 8-stage operational architecture. |
| **Workspace 1 Root** | `d:\uiux\.agents\skills\ui-ux\SKILL.md` | **Upgraded v3 copy** (25,181 bytes). Contained 25 reference files and 124 design images. |
| **Portfolio Workspace** | `E:\rajairfanahmed\.agents\skills\ui-ux\SKILL.md` | Workspace copy existed, but when the user opened files outside `d:\uiux`, Antigravity's global customization discovery loaded the unupgraded global copy. |
| **Instruction References Loading** | `references/*.md` | Passive Markdown links only (e.g. `[anti-slop-standard.md](./anti-slop-standard.md)`). **Zero mandatory runtime tool calls** existed in `SKILL.md` requiring `view_file` on references before writing code. |
| **Visual Reference Inspection** | `designs/` (124 `.jpg` images) | Present on disk, but `SKILL.md` lacked an explicit runtime command to call `view_file` on specific image paths. The images were never loaded into LLM context. |
| **Template Boilerplate in References** | `references/design-system-generation-and-novelty.md` (lines 68-100) | Contained a static CSS code block with `--font-display: 'Inter'`, `--font-body: 'Inter'`, and `--color-accent: #2563eb`. Models treated this code block as a mandatory copy-paste template. |
| **Red Issue Indicators Along Left Edge** | Viewport & Browser Diagnostic | Development/accessibility diagnostic overlay (such as Next.js hydration error markers or accessibility violation badges), not intended product UI. |

---

## 3. Runtime Execution Trace: Where the Chain Broke

The instruction-to-execution pipeline failed at multiple sequential stages:

```
User Invocation (/uiux)
       ↓
[Point 1: Global vs Local Routing] → In non-d:\uiux workspaces, loaded stale v1 global skill (10:16 AM).
       ↓
[Point 2: Prompt Loading] → Agent read SKILL.md text only.
       ↓
[Point 3: Reference Files Omission] → References in references/ were hyperlinked but never opened via view_file.
       ↓
[Point 4: Vision Skip] → 124 reference images in designs/ were never viewed via view_file.
       ↓
[Point 5: Template Anchor] → Model anchored on code snippets (Inter, blue/cyan accents) and prior mental habits.
       ↓
[Point 6: Unverified Completion] → Agent wrote code, ran `npm run build`, and declared victory without browser preview.
```

---

## 4. Root Cause Classification (Evidence-Supported)

### Root Cause 1: Global vs Workspace Customization Out-of-Sync (CONFIRMED)
- **Evidence:** `C:\Users\Raja Irfan Ahmed\.gemini\config\skills\ui-ux\SKILL.md` was last modified at 10:16 AM and was 18.7 KB, whereas `d:\uiux\.agents\skills\ui-ux\SKILL.md` was 25.2 KB.
- **Impact:** Any session initiated in other folders or falling back to the global customization root executed outdated, permissive instructions with contradictory mode gates and zero anti-repetition engines.
- **Correction:** Synchronize the upgraded skill, all 25 reference files, and `design-index.json` across both workspace roots and the global customization root (`C:\Users\Raja Irfan Ahmed\.gemini\config\skills\ui-ux`).

### Root Cause 2: Passive References Rather Than Mandatory Runtime Actions (CONFIRMED)
- **Evidence:** `SKILL.md` only contained Markdown tables saying "Consult references on-demand". In AI agent runtimes, agents do not open files unless an imperative instruction commands a tool invocation.
- **Impact:** The 25 detailed guideline files sat idle on disk. The agent made decisions entirely from default model memory.
- **Correction:** Convert reference consultation into an explicit runtime tool invocation:
  `MANDATORY RUNTIME ACTION: You MUST invoke view_file on the specific reference files relevant to this task before writing any code or proposing design decisions.`

### Root Cause 3: Image References Were Never Loaded via Vision Tool (CONFIRMED)
- **Evidence:** The 124 `.jpg` files in `designs/` were listed in `README.md`, but no machine-readable index existed, and no instruction required calling `view_file` on them.
- **Impact:** The agent could not learn from the visual evidence because it never looked at the images.
- **Correction:** Generate `designs/design-index.json` with structured metadata and enforce:
  `MANDATORY RUNTIME ACTION: Call view_file(AbsolutePath="...") on at least 2 to 3 relevant design images before formulating the visual thesis.`

### Root Cause 4: Hardcoded Code Scaffolds Acting as Attractor Templates (CONFIRMED)
- **Evidence:** `design-system-generation-and-novelty.md` contained hardcoded CSS custom properties specifying Inter font and `#2563eb` accent.
- **Impact:** LLMs treat fenced code blocks in skill instructions as direct copyable templates.
- **Correction:** Replace static CSS boilerplate with a dynamic token specification standard that requires deriving tokens directly from the project's unique thesis and palette strategy.

### Root Cause 5: Verification Claims Allowed Without Tool Execution (CONFIRMED)
- **Evidence:** Agents reported "Verified responsive layout and passing contrast" after merely executing `npm run build` or without running any command at all.
- **Impact:** Critical flaws (horizontal scrollbar at 320px, nested cards, low contrast, red diagnostic indicators) went unnoticed.
- **Correction:** Enforce the strict execution chain: `Requirement → Runtime Action → Evidence → Pass/Fail Criterion → Corrective Action`. Require actual `browser_subagent` inspection or screenshot capture when preview tools are available; otherwise mandate explicit disclosure of limitations.

### Root Cause 6: Red Issue Indicators Along Left Edge (CONFIRMED)
- **Evidence:** Left-edge red dots in screenshots correspond to runtime development/accessibility overlay indicators (such as automated linting or hydration mismatch flags).
- **Impact:** Cluttered visual presentation and unaddressed DOM/accessibility errors.
- **Correction:** Identify and eliminate root HTML syntax or hydration errors in source components, ensuring zero diagnostic markers remain on rendered screens.

---

## 5. Enforceable Quality Contract: Requirement → Action → Evidence → Pass/Fail → Correction

Every critical requirement must now execute this verifiable loop:

| Requirement | Runtime Action (Tool Invocation) | Required Evidence | Pass/Fail Criterion | Corrective Action if Failed |
|---|---|---|---|---|
| **1. Reference Image Inspection** | Call `view_file(AbsolutePath=".../designs/<asset>.jpg")` on 2-3 relevant assets from `design-index.json`. | Cite exact image paths and extracted principles in decision record. | **Pass:** Specific visual attributes cited from image.<br>**Fail:** Vague description or uninspected paths. | Inspect images or explicitly state tool limitation. |
| **2. Guideline Retrieval** | Call `view_file(AbsolutePath=".../<ref>.md")` for task domain. | Cite specific rules and heuristics applied to the task. | **Pass:** Exact reference path loaded into context.<br>**Fail:** Implementing from memory without tool call. | Invoke `view_file` on the relevant reference file before proceeding. |
| **3. Distinct Art Direction** | Formulate 3 distinct conceptual directions differing in macrostructure, typography, and palette. | Record 3 concepts in decision notes before writing code. | **Pass:** Concepts have distinct silhouettes and type roles.<br>**Fail:** Same layout with only hex color changes. | Redesign macro-composition and section rhythm. |
| **4. Framework & Motion Restraint** | Inspect existing dependencies in `package.json`. Evaluate native scroll vs Lenis; CSS vs GSAP. | Explicit justification in decision record. | **Pass:** Motion justified by explicit user need.<br>**Fail:** GSAP, Lenis, or bento grid forced blindly. | Remove unneeded dependencies; use native scrolling and CSS transitions. |
| **5. Static Code & Accessibility Audit** | Inspect markup, Tailwind directives, fluid typography clamp(), and WCAG contrast. | Static verification log in PLAN.md. | **Pass:** Zero horizontal overflow risks; contrast >= 4.5:1.<br>**Fail:** Overflow scrollbar, clipped text, broken contrast. | Fix CSS in source files, then invite user to test on localhost. |
| **6. Production Verification** | Execute project typecheck, lint, and build scripts. | Exact terminal command outputs and exit code 0. | **Pass:** Real build output shown with 0 errors.<br>**Fail:** Claiming build passed without running command. | Fix compilation/lint errors or report actual command failure. |

---

## 6. Verification and Testing of the Fix

1. **Index Generation Verification:** `scratch/build_design_index.js` executed, generating `designs/design-index.json` with 124 indexed image records across 9 domains.
2. **Vision Capability Verification:** Executed `view_file` on `contemporary-figma-portfolio-website-tem.jpg` and `tech-brand-colour-palette-tech-brand-col.jpg`, successfully rendering high-resolution image details into the agent context.
3. **Link Integrity Verification:** All relative Markdown links across 26 reference files and `SKILL.md` resolve with zero broken targets.
4. **Customization Root Synchronization:** All upgraded files synchronized across workspace `.agents`, workspace root, and global customization directory `C:\Users\Raja Irfan Ahmed\.gemini\config\skills\ui-ux`.
