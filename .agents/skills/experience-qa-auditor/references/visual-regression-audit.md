# Visual Regression and Rendering Audit

A website can compile cleanly and pass linters while still presenting broken visual compositions, misaligned containers, unreadable contrast, or clipped typography. Visual auditing verifies that rendered reality strictly adheres to the approved creative brief.

---

## 1. Core Visual Inspection Categories

Examine actual rendered pages against `frontend/DESIGN_ENGINEERING_BRIEF.md` and layout specifications:

### A. Typography and Hierarchy
- **Font Face Loading:** Verify custom fonts load smoothly via self-hosted `next/font` with `display: 'swap'`. No unstyled system font flashes (FOUT) or invisible text pauses (FOIT).
- **Line Length and Wrapping:** Body copy must not stretch indefinitely on wide viewports (cap at `max-w-[65ch]` or equivalent). Headings must not wrap into orphan words or awkward breaks.
- **Font Scale Hierarchy:** Distinct optical difference between H1 display text, H2 section headings, H3 card labels, and body text.
- **Eyebrow Tracking:** Uppercase metadata labels must use subtle tracking (`tracking-wider` or `tracking-widest`) and restrained counts (never plastered on every single card).

### B. Spatial Composition and Layout Alignment
- **Container Geometry:** Containers must follow the design token rules (e.g. concentric double-bezels, machined hairline cards, or recessed code wells). Never mix arbitrary border radii without architectural intent.
- **Grid and Flex Rhythm:** Verify grid columns align to the structural layout specification. Spacing between cards and sections must follow consistent scale multiples (e.g. 4px, 8px, 16px, 24px, 32px, 64px).
- **Header and Navigation Alignment:** Desktop navigation must sit cleanly on a single line (height <= 80px). Sub-pages must anchor headline text at identical vertical Y-axis offsets.
- **Hero Framing:** Hero centerpiece elements must maintain focal clarity without colliding with navigation bars or drifting off viewport edges.

### C. Color, Contrast, and Theme Fidelity
- **Palette Consistency:** Inspect background and foreground values. Confirm color tokens originate from the approved palette. Disallow random inline hex colors.
- **Substrate Separation:** Visual layers must maintain perceptible separation between canvas background, card surfaces, and overlay popovers.
- **WCAG AA Contrast Check:**
  - Body text against surface: minimum 4.5:1 ratio.
  - Large headings (>= 18pt or >= 14pt bold): minimum 3.0:1 ratio.
  - Interactive button labels against button fill: minimum 4.5:1 ratio. White text on pale orange or light grey text on dark slate is an instant blocker.
- **Theme Uniformity:** Prevent theme schizophrenia (e.g. an inverted white section abruptly shoved into a dark-themed application without brief authorization).

### D. Media, Assets, and Vector Precision
- **Image Aspect Ratios:** All images must have explicit aspect ratios (`aspect-video`, `aspect-square`, or explicit dimensions) to avoid layout shifts.
- **Focal Point and Cropping:** Images must use `object-cover` or `object-contain` deliberately. Faces and essential focal subjects must never be chopped off.
- **Vector Icons:** Inspect SVG markup. Confirm clean geometry with valid arc path syntax. Eliminate broken icons, missing assets, or blurry low-resolution bitmap placeholders.

---

## 2. Detecting Layout Glitches and Visual Shifts

Watch for these recurring layout failures during rendering inspection:

| Visual Defect | Diagnostic Symptom | Remediation Action |
|---|---|---|
| **Text Overflow** | Text spilling out of card bounds or overlapping sibling paragraphs | Add `break-words`, adjust padding, or relax fixed container heights |
| **Sticky Header Drift** | Fixed navbar obscuring section headings on anchor jumps | Add `scroll-mt-24` or explicit scroll padding to target section elements |
| **Cumulative Layout Shift** | Content jumping down as fonts, images, or embeds finish loading | Declare explicit container aspect ratios and reserved dimensions upfront |
| **Edge Clipping** | Box-shadows, tooltips, or dropdown menus truncated by container | Remove unintended `overflow-hidden` from parent shells |
| **Z-Index Warfare** | Popovers or dropdowns rendering behind sibling cards or headers | Establish unified z-index tokens (e.g. dropdown: 40, sticky nav: 50, modal: 100) |

---

## 3. Screenshot and Visual Comparison Protocol

When conducting visual reviews or comparing viewport screenshots:
1. **Match Render Conditions:** Capture screenshots at standardized viewports (320px, 768px, 1024px, 1440px) with identical scroll positions.
2. **State Isolation:** Test default, active hover, and opened dropdown states independently.
3. **Distinguish True Defects from Browser Artifacts:**
   - *True Defect:* Overlapping text, broken grid column collapse, failed contrast, missing brand logo, truncated buttons.
   - *Harmless Variation:* Sub-pixel antialiasing differences between font engines (e.g. macOS CoreText vs Windows DirectWrite).
