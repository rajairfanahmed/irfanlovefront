# Interactive Navigation, Overlays & Touch Gestures

**Scope:** Navigation Patterns, Drawers, Dropdowns, Focus Traps & Gesture Coordination  
**Owner:** `interactive-component-engineer`  
**Load Condition:** Loaded during Step 5 & 6 of Stage 3 when building navigation and overlay components  

---

## 1. Purpose & Problem Solved
AI generators frequently default to a floating glass pill navbar on every single website, while neglecting mobile drawer behavior, focus trapping, or Escape dismissal. This reference provides complete behavioral blueprints for diverse navigation archetypes: sidebars, docks, responsive drawers, and popovers.

---

## 2. When to Load This Reference
- Loaded when implementing `Navbar.tsx`, `MobileDrawer.tsx`, `Tabs.tsx`, or `DropdownMenu.tsx`.
- Loaded when managing z-index layers, modal backdrops, or focus trapping.

---

## 3. Product-Driven Navigation Archetypes

Do NOT force a floating pill on every website. Match the navigation pattern to the product domain:

1. **The Docked Full-Width Header:**
   - Single clean horizontal bar (`h-16 md:h-18`) pinned to the top, sharing `--canvas` substrate.
   - Ideal for: Developer tools, platforms, enterprise software, editorial broadsheets.
2. **The Persistent Vertical Sidebar:**
   - Left-docked rail (`w-64`) with collapsible sections and keyboard navigation (`Cmd+B` toggle).
   - Ideal for: Web applications, dashboards, documentation consoles.
3. **The Minimalist Action Rail:**
   - Ultra-thin top or bottom status bar containing only the brand logo and a single high-contrast contact/action trigger.
   - Ideal for: Immersive portfolios, product showcases, single-page landing experiences.
4. **The Centered Floating Pill (Use Only When Appropriate):**
   - High-contrast pill floating above content. Only deploy when explicitly prescribed in the design brief.

---

## 4. Mobile Drawer Engineering Standard (`MobileDrawer.tsx`)

Every responsive website requires a rock-solid mobile drawer implementation:
- **Trigger:** Accessible hamburger button with `aria-expanded="false"`, `aria-controls="mobile-menu"`, and minimum 44x44px touch target.
- **Backdrop:** Semi-transparent scrim (`bg-black/50 backdrop-blur-sm`) that dismisses the drawer on click.
- **Focus Trapping:** When the drawer opens, immediately shift focus to the first interactive link. Trap `Tab` and `Shift+Tab` within the drawer container.
- **Escape Key Handling:** Pressing `Escape` must immediately close the drawer and return focus to the hamburger button.
- **Body Scroll Lock:** Invert body overflow when drawer mounts:
  ```typescript
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);
  ```

---

## 5. Dropdowns, Tooltips & Popovers

- **Tooltip Timing Rule:** Initial tooltip displays after a 300ms hover delay. Once active, moving cursor to adjacent elements displays tooltips instantly (0ms delay).
- **Outside Click Listener:** Attach a `pointerdown` listener to `document` to dismiss active menus when clicking outside.
- **Z-Index Layer Hierarchy:**
  - Base Content: `z-0`
  - Floating Sticky Navbar: `z-30`
  - Dropdowns & Popovers: `z-40`
  - Mobile Drawer / Modals: `z-50`
  - Critical Toast Alerts: `z-60`
