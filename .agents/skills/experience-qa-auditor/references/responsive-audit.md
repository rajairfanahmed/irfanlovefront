# Responsive Design and Viewport Audit

A desktop-only visual check is invalid proof of responsive engineering. A production frontend must adapt fluidly across all standard screen sizes, from constrained mobile viewports up to expansive high-density monitors.

---

## 1. Supported Viewport Matrix

Audit every public route across this complete viewport spectrum:

| Breakpoint Tier | Width Range | Primary Responsive Failure Modes to Audit |
|---|---|---|
| **Compact Mobile** | `320px` to `374px` | Severe text truncation, horizontal scroll overflow, button collision, crushed tables |
| **Standard Mobile** | `375px` to `480px` | Touch targets under 44px, clipped form fields, mobile menu drawer layout breaks |
| **Tablet Portrait** | `768px` to `1023px` | Awkward two-column squishing, navigation breakpoint transitions, tablet drawer state |
| **Desktop / Laptop** | `1024px` to `1439px` | Navigation menu overflow, multi-column editorial balance, hover vs touch confusion |
| **Ultra-Wide Display**| `1440px` and wider | Unconstrained line length stretching, detached margins, lonely floating hero assets |

---

## 2. Horizontal Scroll Elimination Protocol

Horizontal scrolling on mobile is an instant audit failure. Every page must scroll strictly along the vertical axis:
1. **Global Shell Constraints:**
   Verify `globals.css` applies defensive container constraints:
   ```css
   html, body {
     max-width: 100vw;
     overflow-x: hidden;
   }
   ```
2. **Detecting Unconstrained Child Elements:**
   - Look for elements with fixed pixel widths (e.g. `width: 600px` without `max-width: 100%`).
   - Check large data tables and code snippets: verify they are enclosed in dedicated horizontal overflow wrappers (`overflow-x: auto`) rather than forcing the entire viewport to stretch.
   - Audit negative margins (e.g. `-mx-8`): confirm parent padding cancels out the negative pull cleanly on mobile screens.

---

## 3. Mobile Usability and Touch Ergonomics

Inspect these mobile-specific engineering requirements:

### A. Touch Targets and Thumb Ergonomics
- **Minimum Target Size:** All buttons, menu links, tab toggles, and form inputs must measure at least 44px by 44px on mobile devices.
- **Thumb Sweep Placement:** Primary action triggers must reside within the natural bottom sweep zone of the mobile screen rather than isolated at the extreme top corners.
- **Touch Spacing:** Interactive controls placed adjacent to one another must maintain at least 8px of clearance to prevent accidental fat-finger activation.

### B. Mobile Navigation and Drawers
- **Drawer State Discipline:** When the mobile navigation drawer opens, the page body behind it must have scroll locked (`overflow: hidden`). When the drawer closes, body scroll must restore cleanly.
- **Escape and Backdrop Handling:** Tapping the backdrop overlay or pressing Escape must close the drawer immediately.
- **Link Click Dismissal:** Navigating to an anchor or route via mobile drawer must automatically dismiss the drawer.

### C. Input Auto-Zoom and Tap Polish
- **Prevent iOS Input Auto-Zoom:** Every `<input>`, `<select>`, and `<textarea>` must use a minimum font size of 16px (`text-base` or `1rem`). Any font size smaller than 16px causes iOS Safari to force-zoom the entire screen, breaking layout context.
- **Eliminate Tap Highlight Flash:** Apply `-webkit-tap-highlight-color: transparent` globally to eliminate the ugly grey tap flash on WebKit browsers.
- **Responsive Viewport Units:** Application shells must leverage modern dynamic viewport units (`100dvh` for full screen app wrappers, `100svh` for hero sections) rather than unconstrained `100vh` which jumps as mobile address bars toggle.

---

## 4. Responsive Adaptation versus Destructive Collapse

Components must gracefully rearrange their internal geometry rather than destructively squishing content:
- **Card Grids:** Collapse from 3 or 4 columns on desktop down to 2 columns on tablet and 1 column on mobile (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- **Hero Stacks:** Side-by-side hero compositions must stack cleanly on mobile with headline and CTA maintaining priority before media visual.
- **Data Tables:** Convert complex wide tables into readable mobile key-value summary cards on viewports under 768px.
