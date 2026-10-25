# Motion Recipes & Animation Reference

This reference defines hardware-accelerated, 60fps interaction choreography and timing curves.

---

## ⚡ The 4 Motion Personality Profiles

Select one motion profile to ensure coherent physics across the entire application:

1. **Cinematic (Slow, Heavy, Editorial):**
   - Timing: `600ms` to `1000ms`.
   - Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (Expo Out).
   - Usage: Luxury brands, architectural studios, creative portfolios, high-end editorial.
2. **Snappy (Fast, Spring, Responsive):**
   - Timing: `150ms` to `300ms`.
   - Easing: `cubic-bezier(0.2, 0, 0, 1)` or spring stiffness: 400, damping: 30.
   - Usage: B2B SaaS, developer tools, productivity apps, dashboards.
3. **Calm (Subtle, Muted, Gentle Fade):**
   - Timing: `300ms` to `500ms`.
   - Easing: `ease-out`.
   - Usage: Healthcare, financial planning, educational documentation, legal.
4. **None / Reduced Motion:**
   - Instant transitions (`0ms`).
   - Respects user preference: `@media (prefers-reduced-motion: reduce)`.

---

## 🎬 Core Animation Recipes

### 1. Title Entrance Reveal
- **CSS / Framer Motion Pattern:** Staggered word or character upward reveal.
- **Initial State:** `opacity: 0; transform: translateY(20px);`
- **Active State:** `opacity: 1; transform: translateY(0);`
- **Stagger:** `0.05s` between words.

### 2. Card Hover Magnetic / Tilt Effect
- **Hardware Acceleration:** Apply `will-change: transform; transform: translateZ(0);`
- **Transform:** Subtle elevation (`translateY(-4px)`) and 3D perspective rotation (max 5 degrees) tracking pointer coordinates.

### 3. Scroll-Triggered Section Stagger
- **Observer:** Standard `IntersectionObserver` with `threshold: 0.1` and `rootMargin: "0px 0px -50px 0px"`.
- **Children Stagger:** Cards or list items fade up in sequence (`delay: index * 100ms`).

### 4. Continuous Marquee
- **CSS Keyframes:** Use pure CSS `transform: translate3d(-50%, 0, 0)` with linear infinite timing.
- **Pause on Hover:** `hover:[animation-play-state:paused]` for accessible inspection.
