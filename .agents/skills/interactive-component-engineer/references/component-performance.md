# Component Performance Engineering & Runtime Hygiene

**Scope:** Rendering Optimization, State Colocation, Event Cleanup & Memory Hygiene  
**Owner:** `interactive-component-engineer`  
**Load Condition:** Loaded during Step 8 & 9 of Stage 3 when optimizing component runtime  

---

## 1. Purpose & Problem Solved
Components built by AI frequently suffer from memory leaks, unnecessary re-renders of the entire page tree, un-debounced event listeners, and layout jank from animating layout properties. This reference mandates runtime performance hygiene: state colocation, event cleanup, and compositor-only animations.

---

## 2. When to Load This Reference
- Loaded when adding event listeners (scroll, resize, pointermove).
- Loaded when architecting state that updates frequently (counters, timers, cursor followers).

---

## 3. State Colocation (Push State Down)

Never lift local state to the root page or layout when it is only needed inside a leaf component:
- **Bad:** Holding modal state `isModalOpen` at the root layout, causing the entire landing page and all children to re-render whenever the modal toggles.
- **Good:** Encapsulate modal state inside a `<ContactModalTrigger />` client component. The parent layout remains a pure Server Component with zero re-rendering overhead.

---

## 4. Event Listener Cleanup & Passive Flag

Whenever adding event listeners in `useEffect`:
1. **Always Remove in Cleanup:**
   ```typescript
   useEffect(() => {
     const handleResize = () => { /* ... */ };
     window.addEventListener("resize", handleResize, { passive: true });
     return () => window.removeEventListener("resize", handleResize);
   }, []);
   ```
2. **Use `{ passive: true }` for Scroll & Touch:** This informs the browser that the listener will not call `preventDefault()`, allowing the browser compositor to scroll smoothly without waiting for JavaScript execution.

---

## 5. Preventing Layout Thrashing & Cumulative Layout Shift (CLS)

- **Compositor-Only Animations:** Only animate `transform` and `opacity`. Never animate `height`, `width`, `top`, or `padding` on interactive transitions.
- **Explicit Aspect Ratios:** Always reserve space for images, video players, and dynamic embeds using CSS `aspect-ratio` or fixed Tailwind classes (`aspect-video`, `aspect-square`) before content loads.
- **Skeleton Placeholders:** When fetching dynamic data, render a skeleton container with the exact height and width of the incoming content to guarantee CLS = 0.

---

## 6. Dependency Discipline
- Avoid importing entire monolithic utility libraries when only one function is needed.
- Verify that icons are imported individually (e.g. `import { ArrowRight } from "lucide-react"`) to ensure proper tree-shaking.
