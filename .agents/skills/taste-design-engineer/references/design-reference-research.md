# Design Reference Research: Recursive Scan, Multi-Role Selection & Decision Extraction

**Scope:** Operational Reference Extraction, Multi-Role Selection & Adopt/Adapt/Avoid Protocol  
**Owner:** `taste-design-engineer`  
**Load Condition:** Loaded during Step 2 of Stage 0 when scanning and evaluating design references  

---

## 1. Purpose & Problem Solved
AI models typically hallucinate arbitrary hex codes or blindly copy a single famous brand (like Apple) onto unrelated products (like developer portfolios). This reference enforces a structured 3-stage protocol: recursively scanning local `design-refs/`, selecting 3 to 4 genuinely relevant references across key architectural roles, and converting those references into explicit Adopt, Adapt, and Avoid decisions.

---

## 2. When to Load This Reference
- Loaded immediately after establishing Project Mode and Website Category.
- Loaded whenever evaluating user-provided `.md` design specs or visual screenshots.

---

## 3. Inputs & Prerequisites
- Local repository of 85+ brand specifications in `.agents/skills/taste-design-engineer/design-refs/`.
- Established Project Mode (New Website vs Improve Existing) and Website Category from `discovery-protocol.md`.
- User-provided reference files or UI screenshots (if provided).

---

## 4. Stage 2: Recursive Scan and Multi-Role Reference Selection

### Step 1: Deep Recursive Scan of `design-refs/`
The agent must recursively inspect the actual `.agents/skills/taste-design-engineer/design-refs/` directory.
- **NEVER pick based on filenames alone.** The agent must inspect internal section contents, layout structures, and design tokens to verify relevance.
- Filter files by relevance to the project mode, website category, and technical requirements.

### Step 2: Select 3 to 4 Relevant Reference Files
Select 3 to 4 suitable `.md` files that collectively cover these design dimensions:
1. **Category Reference:** The product structure, user mental models, and industry-specific UX patterns matching this category.
2. **Layout Reference:** Page composition, section hierarchy, macro-layout wireframes, and narrative sequence.
3. **Visual Reference:** Color palettes, contrast tokens, typography pairings, and aesthetic substrate.
4. **Interaction Reference:** Navigation patterns, micro-interactions, responsive transformations, and state feedback.

*(Note: These 4 roles are flexible guidelines, not rigid file slots. Select the genuinely best files available in the directory).*

### Step 3: Selection Safeguards & Quality Rules
- **Category Appropriateness:** For a developer portfolio, selecting an Apple hardware e-commerce store reference is incorrect, even if Apple typography is detailed. Choose developer-relevant references (e.g. `linear.app-DESIGN.md`, `raycast-DESIGN.md`, `warp-DESIGN.md`).
- **Safeguard on Availability:** If fewer than 3 genuinely relevant references exist in the directory for a niche category, **do not pick unrelated files just to fulfill a number**. Select only the truly relevant files and supplement with custom category principles.

---

## 5. Stage 3: From References to Concrete Design Decisions

Reading references is meaningless unless they translate into verified architectural decisions. For every selected reference file, the agent must document:

1. **Exact File Path:** Record the exact relative path (e.g. `.agents/skills/taste-design-engineer/design-refs/linear.app-DESIGN.md`).
2. **Relevant Principles:** What specific patterns or guidelines this file provides for this project.
3. **What to Adopt:** Exact tokens, rules, or patterns to carry over directly (e.g. typography hierarchy, spacing scale, high-contrast button tokens).
4. **What to Adapt:** Principles modified to suit the active project (e.g. adapting hardware product showcase photography into software case study screenshots).
5. **What to Avoid:** Irrelevant or brand-specific patterns to reject (e.g. avoiding Apple product-store navigation bars or fixed hardware spec grids).
6. **Conflict Resolution:** If Reference A prescribes dark canvas and Reference B prescribes warm paper, resolve the conflict against the approved creative direction and record the trade-off.

---

## 6. The Adopt, Adapt, Avoid Reference Matrix

Populate this structured contract in Section 2 of `frontend/DESIGN_ENGINEERING_BRIEF.md`:

| Selected Reference Path | Primary Role | What to Adopt | What to Adapt | What to Avoid |
| :--- | :--- | :--- | :--- | :--- |
| `design-refs/linear.app-DESIGN.md` | Layout & Visual | 1px hairline border dividers, dark substrate tokens | Adapt issue-tracking telemetry into project metric cards | Avoid complex issue keyboard shortcut system |
| `design-refs/stripe-DESIGN.md` | Interaction & UX | Micro-interaction timing, high-contrast CTA pop | Adapt checkout button feedback to portfolio contact form | Avoid multi-currency payment selectors |
| `design-refs/raycast-DESIGN.md` | Category UX | Monospace metadata accents, command-driven clarity | Adapt extension directory into case study grid | Avoid desktop launcher overlay mechanics |

---

## 7. Output Artifact
- Fully populates Section 2 (Operational Reference Audit & Decision Matrix) in `frontend/DESIGN_ENGINEERING_BRIEF.md`.

---

## 8. Validation Criteria
- 3 to 4 references selected with exact `.md` paths (unless fewer genuinely relevant files exist).
- Every selected reference has concrete Adopt, Adapt, and Avoid entries with explicit rationale.
- Zero blind application of brand-specific rules that do not belong to the project category.
