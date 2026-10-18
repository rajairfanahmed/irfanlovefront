# Accessibility Audit and WCAG AA Compliance

Accessibility is an engineering standard, not an optional post-launch consideration. Every user, regardless of visual acuity, motor control, or assistive technology, must be able to perceive, understand, and navigate the application.

---

## 1. Automated Scans versus Manual Inspection Reality

Automated tools (such as Lighthouse or axe-core) detect only 30% to 40% of accessibility barriers. A passing automated score is not proof of full accessibility. Manual keyboard and document structure audits are mandatory:

| Accessibility Dimension | Automated Tool Capability | Mandatory Manual Verification Check |
|---|---|---|
| **Contrast Ratios** | Flags obvious hex color failures on static backgrounds | Checks text over gradients, images, glassmorphism, or hover overlays |
| **Keyboard Navigation** | Checks if `tabindex` is negative or missing on native buttons | Physically tabs through all routes to verify logical flow and focus traps |
| **Focus Rings** | Checks if `:focus` CSS rules exist | Confirms visible contrast against actual rendered canvas background |
| **Accessible Names** | Flags buttons without text or `aria-label` | Verifies that screen-reader labels convey clear and meaningful intent |
| **Screen Reader Flow** | Verifies basic landmark tags exist | Confirms content reads in logical hierarchy without confusing jumps |

---

## 2. Semantic Document Structure and Landmarks

A sound semantic foundation provides immediate navigation anchors for assistive technology:
1. **Landmark Regions:**
   - Every page must feature exactly one `<header>`, one `<main id="main-content">`, and one `<footer>`.
   - Distinct navigation blocks must be enclosed in `<nav>` elements with descriptive labels (e.g. `<nav aria-label="Main Navigation">`, `<nav aria-label="Footer Legal Links">`).
2. **Heading Hierarchy Discipline:**
   - Exactly ONE `<h1>` per page representing the primary page subject.
   - Headings must descend logically without skipping levels: `h1` -> `h2` -> `h3`. Never jump from `h1` directly to `h4` purely to achieve smaller font styling (use CSS classes for visual size).
3. **Skip to Main Content Link:**
   Provide a keyboard-accessible skip link as the very first child of the body:
   ```tsx
   <a
     href="#main-content"
     className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--text-primary)] focus:text-[var(--bg-primary)] focus:rounded-md focus:shadow-lg"
   >
     Skip to main content
   </a>
   ```

---

## 3. Keyboard Navigation and Focus Management

Physical keyboard operation must be seamless:
- **Logical Tab Order:** Tabbing through the interface must strictly match the visual left-to-right, top-to-bottom reading sequence. Avoid CSS flex/grid layout tricks that visually invert DOM order.
- **Visible Focus Indicators:** Never remove focus outlines (`outline: none` without replacement is banned). All interactive controls must display a high-contrast focus ring:
  ```css
  :focus-visible {
    outline: 2px solid var(--accent-focus, #3b82f6);
    outline-offset: 2px;
  }
  ```
- **Custom Interactive Widgets:** Any `<div>` or `<span>` acting as a button must have `role="button"`, `tabIndex={0}`, and handle both `KeyDown` (`Enter` and `Space`) events. Where possible, use native `<button>` elements instead.

---

## 4. Contrast and Color Independence

- **WCAG AA Ratios:**
  - Standard body copy (< 18pt regular): Minimum 4.5:1 contrast against substrate.
  - Large display headings (>= 18pt or >= 14pt bold): Minimum 3.0:1 contrast.
  - Active UI controls and input borders: Minimum 3.0:1 contrast.
- **Color Independence:** Never use color alone to convey state or required fields. For example, form error states must pair red border styling with a visible text warning or warning icon.

---

## 5. Reduced-Motion Compliance

Respect user vestibular preferences. Test by enabling `prefers-reduced-motion: reduce`:
- When reduced motion is active, large spatial animations (sliding hero cards, parallax, kinetic scale shifts) must collapse to simple subtle opacity crossfades.
- Timelines running in GSAP or Motion must query `window.matchMedia('(prefers-reduced-motion: reduce)')` and disable continuous triggers.
