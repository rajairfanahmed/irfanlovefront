# Motion & Interaction Architecture: GSAP Timelines, Apple Physics & Tactile States

**Scope:** Animation Choreography, ScrollTrigger Parameters, Tactile Feedback & Easing Curves  
**Owner:** `taste-design-engineer`  
**Load Condition:** Loaded during Step 2 of Stage 0 to formulate Section 8 of the master brief  

---

## 1. Purpose & Problem Solved
Generic AI applications sprinkle random fade-in-up animations across every element, causing performance stutter and visual chaos. This reference defines a disciplined motion framework rooted in Emil Kowalski interaction rules, Apple WWDC fluid interface physics, and performant GSAP ScrollTrigger timelines.

---

## 2. When to Load This Reference
- Loaded when specifying component transitions, scroll dynamics, and hover/active states.
- Loaded before `interactive-component-engineer` writes animation hooks.

---

## 3. Inputs & Prerequisites
- Winning creative direction from `references/creative-direction.md`.
- Layout geometry from `references/visual-system.md`.

---

## 4. The Emil Kowalski Motion Decision Sequence

Before prescribing any animation in the master specification, verify:

1. **Should this element animate at all?**
   - High-frequency utilities (command menus, search inputs): Zero animation. Instantaneous response.
   - Frequent navigation (dropdowns, tabs): Ultra-fast and crisp (120ms to 180ms).
   - Occasional modals & sheets: Smooth fluid entry (200ms to 280ms).
   - Scroll milestones (hero reveal, sticky pinning): Scrubbed GSAP ScrollTrigger timelines.
2. **The Purpose Test:** Every motion must satisfy one of six goals: Feedback, Spatial Orientation, State Transition, Preventing Teleportation, Explanation, or Delight.
3. **Calibrated Easing Profiles:**
   - Strong Ease-Out (Entrances): `cubic-bezier(0.23, 1, 0.32, 1)`.
   - Layout & Dimension Shifts: `cubic-bezier(0.77, 0, 0.175, 1)`.
   - Fluid Sheet Pull: `cubic-bezier(0.32, 0.72, 0, 1)`.

---

## 5. Apple WWDC Fluid Interface Foundations

- **Zero-Latency Pointerdown:** All button press states must register on `pointerdown`, never waiting for the delayed `click` event.
- **Tactile Button Press Rule:** Every pressable surface executes an immediate micro-scale (`transform: scale(0.97)`) with a 160ms ease-out recovery.
- **Critically Damped Springs:** Default spring physics use a damping ratio of `1.0` (zero oscillation or cartoonish bounce).

---

## 6. The 5 Core GSAP Choreography Paradigms

For rich, award-level experiences (such as Awwwards showcases), specify one of five GSAP paradigms:

1. **Sticky-Stack Cards:** As the user scrolls, feature cards lock into place and stack with subtle vertical offsets and progressive scale reductions (`scale(0.95)`).
2. **Split Pinned Gallery:** The narrative text column scrolls smoothly on one side while the corresponding media frame remains pinned and cross-fades on the other.
3. **Scrubbed Typography Skew:** Display typography subtly shears or skews on rapid scroll velocity, snapping back to zero on deceleration.
4. **Horizontal Kinetic Rail:** Vertical scroll delta translates smoothly into horizontal track translation with snap points.
5. **Interactive Cursor Distortion / Spotlight:** High-performance canvas or CSS variable radial spotlight following pointer position across elevated panels.

---

## 7. Accessibility & Reduced Motion

- **Mandatory Media Query:** All motion directives must respect `prefers-reduced-motion: reduce`.
- **Graceful Fallback:** When reduced motion is active, all GSAP pinning and transform animations collapse into instantaneous opacity fades or static layouts.

---

## 8. Output Artifact
- Populates Section 8 (Motion & Fluid Physics Architecture) in `frontend/DESIGN_ENGINEERING_BRIEF.md`.

---

## 9. Validation Criteria
- Every animated element has an explicit trigger, duration (120ms to 280ms), and calibrated curve.
- Scroll-driven timelines define clear start/end pinning triggers.
- Reduced motion fallback is explicitly provided for all complex choreographies.

---

## 10. Downstream Dependencies
- Feeds `interactive-component-engineer` for GSAP ScrollTrigger and Framer Motion code.
- Feeds `frontend-architect` for Lenis smooth-scroll initialization.
