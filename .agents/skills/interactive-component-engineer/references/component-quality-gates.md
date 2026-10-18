# Component Quality Gates & Mechanical Acceptance Standards

**Scope:** Component Verification, Quality Gates & Regression Prevention  
**Owner:** `interactive-component-engineer`  
**Load Condition:** Loaded during Step 9 of Stage 3 before finalizing components  

---

## 1. Purpose & Problem Solved
AI generators frequently claim components are complete merely because the JSX has no syntax errors, while buttons don't click, dropdowns don't dismiss, and accessibility is completely absent. This reference establishes 10 strict mechanical quality gates that must pass before any component is signed off.

---

## 2. When to Load This Reference
- Loaded when auditing newly created or refactored components.
- Loaded before updating state tracking or handing off to QA.

---

## 3. The 10 Mechanical Component Quality Gates

| Gate | Check Item | Expected Pass Condition |
| :--- | :--- | :--- |
| **1. Functionality** | User Action Execution | Every button, link, tab, and input executes its intended action or displays an honest demo message. Zero dead controls. |
| **2. State Handling** | Edge Cases Covered | Loading, error, empty, active, and disabled states are handled where applicable. |
| **3. Accessibility** | Native Elements & Names | Native `<button>`/`<a>` used; all icon buttons have `aria-label`; visible `:focus-visible` ring active. |
| **4. Keyboard Operability**| Tab & Escape Support | Modals and drawers close on `Escape`; dropdowns navigable via keyboard; focus restored on close. |
| **5. Responsive Scaling** | Mobile Touch Compliance | Controls adapt from 320px to 1440px; touch targets meet 44x44px; form inputs use >= 16px font on mobile. |
| **6. Integration** | Design System Alignment | Components bind strictly to CSS custom properties (`--canvas`, `--surface-1`). Zero uncoordinated gray classes. |
| **7. Type Safety** | Strict TypeScript | Strict prop interfaces; zero `any` types; event handlers explicitly typed. |
| **8. Motion Purpose** | Restraint & Reduced Motion| Transitions under 250ms; GPU-accelerated transforms; `prefers-reduced-motion` safety active; GSAP cleanup verified. |
| **9. Reusability** | Clean Composition | Props are focused; children slots used where appropriate; zero monolithic 40-boolean prop interfaces. |
| **10. Verification Honesty**| Code Review vs Browser QA | Code inspection and TypeScript compile checks verified. No false claims of browser testing without real browser execution. |

---

## 4. Code Inspection vs Browser QA Boundary

The component engineer verifies code through:
1. Static TypeScript compilation (`npx tsc --noEmit`).
2. DOM structure and prop audit.
3. CSS class and token verification.

**Strict Integrity Law:** The component engineer must NEVER claim that a component was "browser-tested" or "visually verified in Chrome" unless an actual browser subagent or manual test was run. Full rendered browser verification is officially owned by Stage 4 (`experience-qa-auditor`).

---

## 5. Failure Escalation Protocol
If an interactive component fails a quality gate:
- Fix the state handling, keyboard listener, or accessibility attribute immediately.
- If an interaction requires missing backend APIs, document the mock/stub in `frontend/PLAN.md`.
