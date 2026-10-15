# 02 · Mobile-First Responsiveness & Accessibility Standards
**Domain:** Experience QA & Auditing · Stage 4 Production Hardening  
**Philosophy:** Universal Inclusivity & Precision Ergonomics. An interface is only as good as its performance on a small screen and its accessibility to keyboard and screen-reader users.

---

## 1. Mobile-First Engineering (320px to 1440px)

Every layout and component must be designed and verified **mobile-first**, beginning from 320px width.

### Breakpoint Matrix:
| Breakpoint | Viewport Width | Key Verification Items |
|---|---|---|
| **Compact Mobile** | `320px` – `375px` | Zero horizontal scroll bar, comfortable font sizes, single-column flow, hamburger nav |
| **Standard Mobile** | `375px` – `480px` | Touch targets ≥ 44px, readable text without zoom |
| **Tablet Portrait** | `768px` | 2-column grids, collapsed navigation transition |
| **Desktop / Laptop**| `1024px` | Full navigation header, multi-column editorial split, hover states enabled |
| **Wide Display** | `1440px`+ | Max content container constraints (`max-w-7xl mx-auto`), no stretched text lines (`max-w-[65ch]`) |

### Eliminating Horizontal Scroll Overflow:
Add to `frontend/src/app/globals.css`:
```css
html, body {
  max-width: 100vw;
  overflow-x: hidden;
}
```
Check that no element has a fixed width greater than `100%` (e.g. `width: 500px` without `max-width: 100%`).

---

## 2. WCAG AA Contrast Ratios

All text and interactive controls must meet WCAG 2.1 AA standards:
1. **Body Text & Paragraphs:** Minimum contrast ratio of **4.5:1** against the background.
2. **Headings & Large Display Text (≥ 18pt or ≥ 14pt bold):** Minimum contrast ratio of **3.0:1**.
3. **Interactive Components & Hairlines:** Minimum contrast ratio of **3.0:1** for active boundary states.
4. **Never Use Unreadable Grey:** Banned: `#666666` or `#71717a` on `#0b0f17`. Use `#94a3b8` or `#cbd5e1` for secondary text in dark themes.

---

## 3. Keyboard Tab Navigation & Focus Trapping

1. **Focus Ring Visibility:**
   Every button, link, and form input must display a crisp, visible focus indicator when navigated via `Tab`.
   ```css
   :focus-visible {
     outline: 2px solid var(--border-focus, #F59E0B);
     outline-offset: 2px;
   }
   ```
2. **Skip to Main Content Link:**
   Provide a skip link at the top of the body for screen readers:
   ```tsx
   <a 
     href="#main-content" 
     className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--text-primary)] focus:text-[var(--bg-primary)] focus:rounded-md"
   >
     Skip to main content
   </a>
   ```
3. **Escape Key Handling:**
   All open menus, mobile drawers, and modals must close immediately upon pressing `Escape`.

---

## 4. Accessibility & Mobile Checklist:
- [ ] Viewport audited at 320px with zero horizontal scrollbar.
- [ ] Touch targets are at least 44x44px.
- [ ] All interactive controls can be activated via `Tab` + `Enter`/`Space`.
- [ ] Contrast ratios verified with WCAG AA standards.
- [ ] Images have descriptive `alt` tags or `aria-hidden="true"` if decorative.
