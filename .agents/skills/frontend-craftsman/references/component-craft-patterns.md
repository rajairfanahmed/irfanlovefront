# Component Craft Patterns Reference

This reference outlines high-craft UI component patterns, eliminating generic, lifeless UI elements.

---

## 🧭 1. Navigation Architecture
- **Desktop Navbar:** Floating pill container or sticky header with subtle backdrop blur (`backdrop-blur-md bg-canvas/80 border border-border/50`).
- **Mobile Menu State Machine:** Full-screen curtain overlay with staggered entrance animation for links, social anchors, and contact trigger. No awkward popover menus that clip off-screen.
- **Active Route Indication:** Subtle layout pill or border indicator highlighting the current route.

---

## 📦 2. Bento Grid Cards (Asymmetric & Multi-Scale)
- **Cell Variety:** Combine 1x1, 2x1, and 2x2 spans rather than uniform rows.
- **Surface Elevation:** 1px hairline border with soft gradient hover overlay (`hover:border-accent/40 transition-colors duration-200`).
- **Inner Content:** Combine a bold metric, an interactive mini-toggle, or an illustrated UI preview inside the card.

---

## 🔘 3. Tactile Buttons & CTAs
- **Primary CTA:** High-contrast solid fill with crisp typography, subtle inner top-border highlight (`shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]`), and physical click compression (`active:scale-[0.98]`).
- **Secondary CTA:** Subdued border outline with hover fill shift.
- **Ghost/Tertiary Action:** Underline draw effect on hover with an arrow icon that slides 4px right (`group-hover:translate-x-1 transition-transform`).

---

## 📝 4. Form Controls & Validation
- **Floating / Inset Labels:** Clean, modern form inputs with high-contrast focus rings.
- **Inline Real-Time Validation:** Error messages appear beneath fields with an alert icon and descriptive text (never generic "Invalid input").
- **Password / Secret Fields:** Show/hide toggle button with eye icon.
- **Submission Feedback:** Spinner loading state inside the submit button that locks double-clicks.

---

## 📊 5. Data Tables & Lists
- **Tabular Figures:** Numbers styled with `font-variant-numeric: tabular-nums` to ensure decimal alignment.
- **Sorting & Filtering Bar:** Search input, status dropdown, and column sort indicators.
- **Empty State:** Illustrated SVG icon, clear title (e.g. "No transactions found"), helpful explanation, and an action button ("Create First Transaction").
- **Pagination / Virtualization:** Clear page indicator ("Page 1 of 12") with previous/next buttons.

---

## 🔔 6. Toast Notifications & Modals
- **Toasts:** Fixed position (bottom-right or top-center), high-contrast border, auto-dismiss with animated progress bar or close button.
- **Modals & Dialogs:** Accessible focus trapping, Esc key listener, backdrop blur, and body scroll lock.
