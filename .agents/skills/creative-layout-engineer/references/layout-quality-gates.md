# Layout Quality Gates: Mechanical Validation, Coverage Matrix & Anti-Slop Audit

**Scope:** Layout Quality Verification, Full-Site Coverage Review & Acceptance Testing  
**Owner:** `creative-layout-engineer`  
**Load Condition:** Loaded during Phase 5 of Stage 2 before finalizing layout deliverables  

---

## 1. Purpose & Problem Solved
AI agents often mark a page complete when it is merely a single hero section or a non-responsive skeleton with masked overflow. This reference establishes 9 strict quality gates that must pass across the full website inventory before layouts are approved.

---

## 2. When to Load This Reference
- Loaded immediately after coding structural layouts in `frontend/src/app/**/page.tsx`.
- Loaded before updating state tracking or handing off to component engineering.

---

## 3. The 9 Mechanical Layout Quality Gates

### Gate 1: Full-Site Route & Section Coverage Gate
- **Verification:** Inspect the Route & Section Coverage Matrix in `frontend/PLAN.md`.
- **Pass Condition:** Every required route physically exists with a complete top-to-bottom section sequence (header, hero/intro, core content sections, and footer). No route is left with only a hero.

### Gate 2: Anti-Template & Contextual Originality Check
- **Verification:** Is the page composition thoughtfully matched to the product category without falling into generic AI boilerplate traps?
- **Pass Condition:** Layout is derived from content and category needs. Centered headlines or split columns are used because they fit the content, not as automatic defaults.

### Gate 3: Information Hierarchy & The Squint Test
- **Verification:** Does the section sequence follow a logical narrative (Attention -> Proof -> Action)? Is there a clear visual anchor?
- **Pass Condition:** Squinting at the screen reveals an unambiguous visual hierarchy with zero competing focal points.

### Gate 4: Real Content & Zero Lorem Ipsum
- **Verification:** Search the page code for `lorem`, `ipsum`, `placeholder`, `TODO`, or `TBD`.
- **Pass Condition:** Zero placeholder strings detected. The page uses realistic domain-specific copy.

### Gate 5: True Overflow Root-Cause Elimination
- **Verification:** Inspect wide elements, tables, and images. Ensure no child elements have unconstrained fixed widths exceeding container boundaries.
- **Pass Condition:** Actual cause of overflow is eliminated using responsive constraints (`max-w-full`, `min-w-0`, `break-words`). `overflow-x: hidden` is applied defensively, NOT as a band-aid to hide clipping defects.

### Gate 6: Mobile Touch Target Compliance
- **Verification:** Check dimensions of all interactive controls, links, and buttons on mobile viewports.
- **Pass Condition:** All touch targets meet the 44x44px minimum touch area within the natural thumb sweep zone.

### Gate 7: Surface & Token Continuity
- **Verification:** Ensure page background binds strictly to `--canvas` substrate tokens.
- **Pass Condition:** No uncoordinated surface clashes between adjacent sections (e.g. gray navbar on white hero).

### Gate 8: Container Queries & Fluid Clamp Math
- **Verification:** Verify that cards and widgets use `@container` queries and typography uses fluid `clamp()`.
- **Pass Condition:** Layout reflows smoothly without abrupt structural breaks between viewports.

### Gate 9: Truth in Verification (Static vs Rendered)
- **Verification:** Check how layout verification was conducted.
- **Pass Condition:** Layout engineer verifies structural syntax, DOM nesting, and static styles. If browser execution tools are unavailable, explicitly declare browser rendering QA as "Pending Stage 4". Never falsely claim unperformed browser checks.

---

## 4. Failure Handling Protocol

If any quality gate fails during self-review:
1. **Immediate Correction:** The agent must not hand off a defective layout. Fix the CSS, adjust the grid, or complete missing sections immediately.
2. **Explicit Disclosure:** If any route or section cannot be completed due to missing technical assets or unresolved user constraints, explicitly document the limitation in `frontend/PLAN.md` rather than claiming complete victory.
