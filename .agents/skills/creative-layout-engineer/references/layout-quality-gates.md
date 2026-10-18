# Layout Quality Gates: Mechanical Validation & Anti-Slop Audit

**Scope:** Layout Quality Verification, Usability Review & Acceptance Testing  
**Owner:** `creative-layout-engineer`  
**Load Condition:** Loaded during Step 9 of Stage 2 before finalizing any page layout  

---

## 1. Purpose & Problem Solved
AI agents often mark a page "complete" when it is merely a non-responsive skeleton full of overlapping text or generic template sections. This reference establishes 8 strict quality gates that must pass before any page composition is approved.

---

## 2. When to Load This Reference
- Loaded immediately after coding any page layout in `frontend/src/app/**/page.tsx`.
- Loaded before updating state tracking or presenting the page to the user.

---

## 3. The 8 Mechanical Layout Quality Gates

### Gate 1: Anti-Template & Originality Check
- **Verification:** Is the page composition meaningfully distinct from standard AI boilerplate (e.g. not another centered headline + 2 buttons + 3 cards)?
- **Pass Condition:** The composition uses a deliberate spatial arrangement tailored specifically to the product category.

### Gate 2: Information Hierarchy & The Squint Test
- **Verification:** Does the section sequence follow a logical narrative (Attention -> Proof -> Action)? Is there a clear Tier 1 visual anchor?
- **Pass Condition:** Squinting at the screen reveals an unambiguous visual hierarchy with zero competing focal points.

### Gate 3: Real Content & Zero Lorem Ipsum
- **Verification:** Search the page code for `lorem`, `ipsum`, `placeholder`, `TODO`, or `TBD`.
- **Pass Condition:** Zero placeholder strings detected. The page uses realistic domain-specific copy.

### Gate 4: Zero Horizontal Overflow at 320px
- **Verification:** Check that `overflow-x-hidden`, `min-w-0`, and `break-words` are applied to containers and text blocks.
- **Pass Condition:** No element exceeds container width at 320px viewport.

### Gate 5: Mobile Touch Target Compliance
- **Verification:** Check bounding boxes of all interactive controls, links, and buttons.
- **Pass Condition:** All touch targets meet the 44x44px minimum touch area.

### Gate 6: Surface & Token Continuity
- **Verification:** Ensure page background binds strictly to `--canvas` or `--surface-1`.
- **Pass Condition:** No uncoordinated gray/white surface clashes between adjacent sections.

### Gate 7: Container Query & Fluid Clamp Math
- **Verification:** Verify that cards and widgets use `@container` queries and typography uses fluid `clamp()`.
- **Pass Condition:** Zero jarring layout jumps between viewport breakpoints.

### Gate 8: Design Review vs Rendered UI Boundary
- **Verification:** Clarify the scope of review.
- **Protocol:** The layout engineer performs code-level structural and static layout review. Live rendered visual verification and Lighthouse scoring are officially owned by Stage 4 (`experience-qa-auditor`). The layout engineer never claims unverified browser rendering.

---

## 4. Failure Handling Protocol

If any quality gate fails during self-review:
1. **Immediate Correction:** The agent must not hand off a defective layout. Fix the CSS, adjust the grid, or constrain the text measure immediately.
2. **Documented Limitation:** If a layout cannot be completed due to missing technical assets or unresolved user constraints, explicitly document the limitation in `frontend/PLAN.md` rather than claiming complete victory.
