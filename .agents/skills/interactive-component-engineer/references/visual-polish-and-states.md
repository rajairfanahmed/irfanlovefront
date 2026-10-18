# Visual Polish, Interaction States & Aesthetic Discipline

**Scope:** Micro-States, Border Behaviors, Icon Alignment & Aesthetic Consistency  
**Owner:** `interactive-component-engineer`  
**Load Condition:** Loaded during Step 5 & 7 of Stage 3 when polishing component styling  

---

## 1. Purpose & Problem Solved
AI components often look unpolished: icons sit misaligned with adjacent text, borders flicker on hover because extra pixels are added, and every single box is slathered in rounded glassmorphism with heavy drop shadows. This reference establishes state-level visual discipline aligned with the approved art direction.

---

## 2. When to Load This Reference
- Loaded when writing hover, active, and focus styles.
- Loaded when auditing icon alignment, card borders, and empty states.

---

## 3. The 7 Core Interaction States

Determine which interaction states are meaningful for each component:
1. **Default:** Stable visual baseline bound to design tokens.
2. **Hover:** Subtle brightness or background shift (`brightness-105` or subtle border shift).
3. **Active / Pressed:** Physical depression (`scale(0.97)`) responding immediately on `pointerdown`.
4. **Focus-Visible:** High-contrast 2px outline with 2px offset.
5. **Selected / Active Route:** Distinct background or text emphasis indicating current location.
6. **Loading:** Disabled pointer events with a non-jarring spinner or subtle pulse.
7. **Empty:** High-craft empty state with a clear illustration, explanatory text, and a primary action trigger.

---

## 4. Border & Shadow Engineering (No Layout Flickering)

- **Flicker Defense:** Never add a 1px border on hover if the default state had no border (this shifts layout by 1px). Always define a 1px border in the default state using a transparent or subtle color (`border border-transparent hover:border-[var(--border-subtle)]`).
- **Physical Hairline Dividers:** For technical and editorial styles, prefer 1px crisp borders over heavy blurry drop shadows.
- **Elevation Layers:** If shadows are used, use multi-layered diffuse shadows (`box-shadow: 0 1px 2px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.05)`). Never use harsh single-point black shadows.

---

## 5. Icon & Typography Alignment

- **Vertical Optical Centering:** Icons must always be vertically centered with adjacent text using `inline-flex items-center gap-2`.
- **Shrink Protection:** Always apply `shrink-0` to SVG icons inside flex containers to prevent long text from squishing the icon into an oval.
- **Optical Stroke Matching:** Ensure the icon stroke weight matches the typographic font weight (e.g. `strokeWidth={1.75}` for standard text, `strokeWidth={2}` for bold text).

---

## 6. Anti-Slop Aesthetic Discipline (No One-Size-Fits-All Glass)

Respect the locked visual thesis from `taste-design-engineer`:
- If the project is **Swiss Industrial Print**: Zero rounded pills, zero glassmorphism, zero drop shadows. Use rigid 90-degree corners, carbon ink, and hairline borders.
- If the project is **Warm Utilitarian**: Bone surfaces, crisp white cards, muted text, natural breathing room.
- Only deploy glassmorphism or glowing borders if the brief explicitly demanded an ethereal dark-mode aesthetic.
