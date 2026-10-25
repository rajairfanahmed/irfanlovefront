# Responsive Audit & Touch Ergonomics Reference

This reference provides a strict quality checklist for multi-viewport audits and mobile usability.

---

## 📱 Viewport Breakpoints & Checks

Test and verify interfaces against 3 mandatory breakpoints:

### 1. Mobile Phone (375px)
- **Zero Horizontal Overflow:** Absolutely zero horizontal scrollbar (`overflow-x: hidden` on viewport wrappers if necessary, but eliminate the overflowing child).
- **Navbar Behavior:** Collapses into a hamburger icon triggering the full-screen curtain overlay.
- **Hero Stacking:** Multi-column hero grids collapse into a single column with headline first, CTA second, visual preview third.
- **Table / Grid Stacking:** Bento grids collapse into a single-column card stack; wide data tables gain horizontal scrolling with visual scroll indicators.
- **Font Scaling:** Top headline scales down gracefully via `clamp(2rem, 8vw, 3.5rem)`.

### 2. Tablet (768px)
- **Two-Column Grid Adaptations:** 3-column feature grids collapse to 2 columns with centered or balanced orphan items.
- **Sidebar Collapsibility:** Dashboard sidebars collapse into icon-only mode or slide-out drawer.
- **Padding Adjustments:** Section container padding adjusts to `px-6 py-16`.

### 3. Desktop (1440px)
- **Max Width Containment:** Content is centered and bounded by `max-w-7xl` or `max-w-6xl` to prevent unreadable ultra-wide text lines.
- **Line Length Readability:** Body paragraphs do not exceed 75 characters per line (`max-w-prose`).

---

## 🖐️ Thumb Ergonomics & Touch Target Rules

1. **Minimum Touch Size:** Every interactive element (buttons, links, icon toggles, form fields) must measure at least **44x44px** of physical clickable area. If the visible icon is smaller (e.g. 20px), expand the hit target using padding or an invisible wrapper.
2. **Thumb Zone Placement:** Primary actions on mobile screens should be reachable within the lower half of the viewport.
3. **Spacing Between Targets:** Maintain at least **8px** gap between adjacent touch targets to avoid accidental taps.
