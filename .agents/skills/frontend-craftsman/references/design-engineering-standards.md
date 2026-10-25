# Design Engineering & Awwwards-Grade Standards Reference

This reference documents the technical engineering principles that separate amateur UI prototypes from elite, 60fps production frontends.

---

## ⚡ 1. Composited GPU Properties Only (Locked 60/120fps)

Never animate layout-triggering properties (`width`, `height`, `top`, `left`, `margin`, `padding`). These force the browser to recalculate layout and repaint on every frame, causing catastrophic dropped frames and battery drain on mobile devices.

### Permitted Animation Properties:
- `transform: translate3d(...)` / `translateY()` / `translateX()`
- `transform: scale()` / `scale3d()`
- `transform: rotate()`
- `opacity`

### CSS Rule:
Apply `will-change: transform, opacity;` sparingly to heavily animated elements, and remove it when animations complete to free GPU memory.

---

## 📐 2. Pure CSS Fluid Typography & Zero-CLS Scaling

Avoid using unthrottled JavaScript window resize listeners to scale text. Use pure CSS math via `clamp()`:

```css
/* Fluid Title Scale */
font-size: clamp(2rem, 5vw + 1rem, 4.5rem);

/* Fluid Section Spacing */
padding-block: clamp(4rem, 10vw, 8rem);
```

### Cumulative Layout Shift (CLS) Prevention:
When loading custom display web fonts, override local fallback font metrics using `@font-face` descriptors (`size-adjust`, `ascent-override`, `descent-override`) to ensure fallback fonts take up the exact same pixel space, completely eliminating text reflow when custom fonts arrive.

---

## 🛡️ 3. Progressive Enhancement (HTML-First Resilience)

Never make core content inaccessible if JavaScript crashes, takes time to load, or is disabled:
- All headings, paragraphs, and links must be real, semantic HTML.
- Never render basic textual content exclusively inside a WebGL `<canvas>` without an accessible HTML fallback.
- Layer high-end WebGL, custom cursors, and physics on top as progressive enhancements.

---

## 🧹 4. Lifecycle Hygiene & Event Listener Discipline

Memory leaks and sluggish scroll behavior occur when event listeners and animation timelines are left running uncleaned.

### Strict Rules:
1. **Passive Event Listeners:** Mark all scroll and wheel event listeners with `{ passive: true }` so the browser main thread is never blocked.
2. **Hook Cleanup:** Always return cleanup callbacks in React `useEffect`:
   ```tsx
   useEffect(() => {
     const handleResize = () => { /* ... */ };
     window.addEventListener("resize", handleResize, { passive: true });
     return () => window.removeEventListener("resize", handleResize);
   }, []);
   ```
3. **Timeline Destruction:** When using GSAP or Lenis, kill active tweens and disconnect `ResizeObserver` instances on component unmount.
