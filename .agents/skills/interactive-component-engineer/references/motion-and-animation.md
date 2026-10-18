# Motion Engineering, Animation Frameworks & Reduced-Motion Safety

**Scope:** Motion Selection, CSS Transitions, GSAP Timelines, Framer Motion & Cleanup  
**Owner:** `interactive-component-engineer`  
**Load Condition:** Loaded during Step 6 of Stage 3 when implementing component transitions  

---

## 1. Purpose & Problem Solved
AI applications often force massive GSAP scripts, continuous spinning glows, and heavy parallax onto basic websites, causing CPU throttling, high battery drain, and disorienting motion sickness. This reference establishes purposeful motion engineering: selecting the right tool for the job, respecting reduced motion, and ensuring proper cleanup.

---

## 2. When to Load This Reference
- Loaded when adding transitions, micro-interactions, or scroll effects.
- Loaded before installing or configuring animation libraries.

---

## 3. Technology Selection Matrix: Right Tool for the Job

Never force GSAP or Framer Motion onto every component:

| Motion Need | Recommended Engine | Rationale |
| :--- | :--- | :--- |
| **Micro-Interactions (Hover, Focus, Press)** | Native CSS Transitions | Sub-millisecond latency, zero bundle size, runs directly on GPU compositor. |
| **Layout Springs & Enter/Exit Modals** | Framer Motion (or native CSS) | Spring physics without coordinate math; handles unmount exits cleanly. |
| **Scroll-Driven Pinning & Timelines** | GSAP & ScrollTrigger | High-precision scroll scrubbing and complex timeline choreography. |
| **High-Density Telemetry & Data** | Pure CSS or Zero Motion | High information density demands immediate, un-animated responsiveness. |

---

## 4. Native CSS Transitions: First Principles

For 85% of component interactions, native CSS is the fastest and most performant solution:
```css
/* Tactile Press Physics */
.interactive-button {
  transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1),
              background-color 160ms ease-out;
}
.interactive-button:active {
  transform: scale(0.97);
}
```
- **Hardware Acceleration:** Only animate `transform` and `opacity`. Never animate layout properties (`width`, `height`, `top`, `margin`, `padding`), which trigger browser reflows and cause layout jank.

---

## 5. GSAP ScrollTrigger Architecture & Lifecycle Cleanup

When GSAP is explicitly called for by `DESIGN_ENGINEERING_BRIEF.md`:
1. **Always Use `'use client'`:** GSAP requires DOM node refs and browser window access.
2. **Mandatory Lifecycle Cleanup (The Memory Leak Defense):**
   In React 18/19, GSAP timelines must be wrapped in `useGSAP()` or cleaned up inside `useEffect` using `ctx.revert()`:
   ```typescript
   "use client";
   import { useEffect, useRef } from "react";
   import gsap from "gsap";
   import { ScrollTrigger } from "gsap/ScrollTrigger";

   gsap.registerPlugin(ScrollTrigger);

   export function PinnedShowcase() {
     const containerRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
       const ctx = gsap.context(() => {
         gsap.to(".pin-target", {
           scrollTrigger: {
             trigger: containerRef.current,
             start: "top top",
             end: "+=100%",
             pin: true,
             scrub: 1,
           },
         });
       }, containerRef);

       return () => ctx.revert(); // Essential: prevents memory leaks and duplicate triggers
     }, []);

     return <div ref={containerRef}>...</div>;
   }
   ```

---

## 6. Anti-Slop Motion Restraint (The Zero Gratuitous Motion Law)

- **No Long Intro Sequences:** Never block the user with a 3-second animated splash screen or logo intro before displaying content.
- **No Perpetual Spinning/Floating:** Avoid elements that constantly float, wobble, or pulse without user interaction.
- **No Staggered 50-Item Delays:** When revealing a list or grid, cap the stagger delay at 50ms per item, with a total stagger duration not exceeding 400ms.

---

## 7. Mandatory Reduced-Motion Safety

Every animation must honor `prefers-reduced-motion: reduce`:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
In JavaScript/GSAP, check `window.matchMedia("(prefers-reduced-motion: reduce)").matches` and bypass timeline animations if true.
