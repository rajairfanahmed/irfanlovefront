# Accessibility Engineering: Semantic DOM, Keyboard Navigation & ARIA

**Scope:** Inclusive Component Design, WCAG AA/AAA Standards & Screen Reader Operability  
**Owner:** `interactive-component-engineer`  
**Load Condition:** Loaded during Step 4 & 9 of Stage 3 to enforce accessible implementation  

---

## 1. Purpose & Problem Solved
Accessibility is not a cosmetic checklist run at the end of a project: it is fundamental component architecture. When developers build interactive controls using clickable `<div>` elements without keyboard handlers or accessible names, assistive technology users and power keyboard users are completely locked out. This reference mandates native semantic elements and strict accessibility patterns.

---

## 2. When to Load This Reference
- Loaded when building any clickable, focusable, or stateful UI component.
- Loaded to audit keyboard navigation and screen reader announcements.

---

## 3. The Native Element First Principle

**The Golden Rule of UI Engineering:**
Always use native HTML5 interactive elements before attempting to invent custom controls:
- Use `<button type="button">` for actions that trigger changes on the current page.
- Use `<a href="...">` for actions that navigate to another page or external URL.
- Use native `<dialog>` or standard semantic inputs rather than building custom `div`-soup equivalents.

Native elements provide built-in focusability, keyboard event handling (`Enter`, `Space`), and screen-reader accessibility for free.

---

## 4. The Accessible Name Mandate (Zero Nameless Controls)

Every interactive control must have an unambiguous accessible name announced by screen readers:

1. **Text Buttons:** The text inside `<button>Submit Order</button>` serves as the accessible name automatically.
2. **Icon-Only Buttons:** If a button contains only an SVG icon, you **MUST** provide an accessible name using `aria-label`:
   ```tsx
   <button type="button" aria-label="Close navigation drawer" className="...">
     <X className="w-5 h-5" aria-hidden="true" />
   </button>
   ```
   - Always add `aria-hidden="true"` to decorative SVGs inside buttons to prevent screen readers from announcing redundant vector paths.
3. **External Links:** Links that open in a new tab must warn assistive technology:
   ```tsx
   <a href="https://github.com" target="_blank" rel="noopener noreferrer">
     View Source Code <span className="sr-only">(opens in a new tab)</span>
   </a>
   ```

---

## 5. Keyboard Navigation & Focus Ring Standards

1. **Logical Tab Order:** DOM source order must match visual reading order. Never use CSS `order` or float hacks that cause keyboard focus to jump backwards.
2. **High-Visibility Focus Indicators:**
   Never write `outline-none` without immediately providing a visible `:focus-visible` replacement:
   ```css
   :focus-visible {
     outline: 2px solid var(--accent-primary);
     outline-offset: 2px;
   }
   ```
3. **No Keyboard Traps:** The user must always be able to navigate away from any component using the `Tab` or `Shift+Tab` keys, or close an overlay with `Escape`.

---

## 6. Color Contrast Discipline
- Text must achieve at least 4.5:1 contrast against its immediate background substrate.
- Interactive component borders and icons must achieve at least 3:1 contrast against adjacent backgrounds.
