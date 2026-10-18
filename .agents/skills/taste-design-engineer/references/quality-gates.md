# Quality Gates & Stage 0 Verification Standards

**Scope:** Completeness Validation, Anti-Slop Audits & Acceptance Verification  
**Owner:** `taste-design-engineer`  
**Load Condition:** Loaded before declaring Stage 0 complete  

---

## 1. Purpose & Problem Solved
AI agents frequently claim "task complete" while leaving critical sections blank, hallucinating generic templates, or embedding contrast failures. This reference establishes the mandatory mechanical quality gates that must pass before `frontend/DESIGN_ENGINEERING_BRIEF.md` can be signed off.

---

## 2. When to Load This Reference
- Loaded immediately before writing or finalizing `frontend/DESIGN_ENGINEERING_BRIEF.md`.
- Loaded whenever performing a self-audit of Stage 0 deliverables.

---

## 3. Inputs & Prerequisites
- Draft of `frontend/DESIGN_ENGINEERING_BRIEF.md`.
- Derived token specifications and layout blueprints.

---

## 4. The 6 Mechanical Quality Gates

The master specification must pass all six gates without exception:

### Gate 1: Non-Empty & Zero Placeholder Audit
- **Check:** Search the document for placeholder strings: `[TBD]`, `[TODO]`, `[insert copy]`, `[lorem ipsum]`, `[placeholder]`.
- **Pass Condition:** Zero placeholder strings detected. All routes and sections contain full, realistic production copy.

### Gate 2: Concrete Structural Layout Audit
- **Check:** Does Section 6 contain explicit geometric grid descriptions (column ratios, asymmetric splits, card topology, mobile collapse)?
- **Pass Condition:** Every canonical route has a defined spatial layout wireframe. Banned: leaving layout up to downstream interpretation.

### Gate 3: Contrast & Surface Continuity Audit
- **Check:** Verify that `--canvas` is unified across the navigation bar and hero section.
- **Check:** Verify that all icon directives inherit `--text-primary` or `--text-muted` (guaranteeing minimum 4.5:1 contrast).
- **Pass Condition:** Zero uncoordinated surface clashes (no dark gray navbar on white hero). Zero invisible icons.

### Gate 4: Operational Reference Verification
- **Check:** Does Section 2 cite at least one verified local reference from `design-refs/` or an ingested user asset?
- **Check:** Is the Reference-to-Decision Mapping Table fully populated?
- **Pass Condition:** Every major design choice traces back to a verified reference.

### Gate 5: Creative Triad Verification
- **Check:** Does Section 3 describe three materially distinct directions with clear structural trade-offs?
- **Pass Condition:** Directions represent distinct layout and interaction philosophies, not superficial color tweaks.

### Gate 6: Handoff Contract Completeness
- **Check:** Does Section 9 specify unambiguous contracts for `frontend-architect`, `creative-layout-engineer`, `interactive-component-engineer`, and `experience-qa-auditor`?
- **Pass Condition:** All 4 downstream engineering contracts are explicitly defined.

---

## 5. Failure Handling Protocol

If any quality gate fails during synthesis:
1. **Explicit Self-Correction:** The agent must not output an incomplete brief. It must immediately identify the failing gate, resolve the missing specification, and re-run the check.
2. **Missing Input Escalation:** If a requirement cannot be resolved due to missing user input, the agent must explicitly halt, report the exact missing decision, and ask the user for clarification rather than inventing arbitrary data.

---

## 6. Output Artifact
- Signed-off `frontend/DESIGN_ENGINEERING_BRIEF.md` passing 100% of quality gates.

---

## 7. Validation Criteria
- All 6 quality gates verified.
- Confirmation logged in terminal before handing off to Stage 1.
