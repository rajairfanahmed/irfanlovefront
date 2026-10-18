# Interaction Design, State Lifecycles & Keyboard Behavior

**Scope:** State Machines, Haptic Feedback, Keyboard Navigation & Interactive Lifecycles  
**Owner:** `interactive-component-engineer`  
**Load Condition:** Loaded during Step 3 of Stage 3 when defining component behavior  

---

## 1. Purpose & Problem Solved
AI components often look visually complete on load but break immediately upon interaction: dropdowns that don't close on Escape, buttons with zero hover or active feedback, or elements that look like clickable controls but do nothing. This reference mandates the complete behavioral specification for every interactive element.

---

## 2. When to Load This Reference
- Loaded when architecting stateful components (modals, dropdowns, tabs, accordions, toggles).
- Loaded when auditing keyboard accessibility and focus management.

---

## 3. The 10-Point Interaction Lifecycle Specification

For every interactive component, the engineer must explicitly define all ten interaction phases:

1. **Initial / Idle State:** Visual appearance before any user contact. Clear visual affordance indicating it is actionable.
2. **Hover State:** Cursor feedback (`cursor-pointer`), subtle background or border transition (120ms to 160ms ease-out).
3. **Focus State (`:focus-visible`):** High-contrast 2px outline offset by 2px (`outline: 2px solid var(--accent-primary)`).
4. **Active / Pressed State:** Immediate visual compression on `pointerdown`: `transform: scale(0.97)` with 160ms spring recovery.
5. **Loading State:** Clear inline spinner or skeleton pulse. Button or control must be disabled (`aria-disabled="true"`) to prevent double-submission.
6. **Disabled State:** Reduced opacity (0.5), `pointer-events: none` or disabled cursor, removed from tab sequence if non-actionable.
7. **Keyboard Action:**
   - `Enter` / `Space`: Triggers primary activation.
   - `Escape`: Immediately closes open overlays (drawers, modals, dropdowns) and restores focus to the trigger element.
   - `ArrowUp` / `ArrowDown`: Navigates between items in menus, tabs, or lists.
8. **Dismissal & Outside Click:** Clicking anywhere outside an active dropdown, popover, or drawer closes it cleanly.
9. **Error / Validation State:** High-contrast error message paired with an alert icon and red/amber border. Error text must be announced to assistive technology.
10. **Touch & Mobile Behavior:** No sticky hover states on mobile touchscreens (`@media (hover: hover)` encapsulation). Touch target padded to minimum 44x44px.

---

## 4. The Anti-Decorative Control Law

**Strict Functional Requirement:**
Every visible element that looks like a button, tab, link, or switch MUST have real, working functionality:
- **No Fake Controls:** Never render a search icon inside an `<input>` that does not accept typing or submit search.
- **No Fake Action Chips:** Never render filter chips or pill tags that do nothing when clicked.
- **No Dead Links:** Every link must point to a real route, an anchor, or an external URL. If backend integration is pending, attach a clear toast or alert explaining that the feature is in development.

---

## 5. Focus Restoration & Overlay Management

When opening a modal, drawer, or dropdown:
1. **Focus Trap:** Tab key navigation must circulate strictly within the overlay container.
2. **Body Scroll Lock:** Prevent underlying page from scrolling while overlay is active (`document.body.style.overflow = 'hidden'`).
3. **Focus Restoration:** When the overlay closes, return browser focus immediately to the exact button or element that opened it.
