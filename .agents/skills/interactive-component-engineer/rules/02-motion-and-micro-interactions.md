# 02 · Motion Choreography, GSAP & Framer Micro-Interactions
**Domain:** Interactive Component Engineering · Stage 3 Components & Motion  
**Philosophy:** Purposeful Motion. Animations must explain spatial relationships and reward interaction, never distract or cause vestibular discomfort.

---

## 1. The Dual Motion Architecture

We use a complementary two-tier animation system:
1. **Framer Motion (`framer-motion`):** For declarative React component micro-interactions, spring physics, modal dialog entrances, and tab transitions.
2. **GSAP + ScrollTrigger (`gsap`):** For complex scroll-choreographed reveals, parallax timelines, and continuous path/number animations.

---

## 2. Framer Motion Best Practices

### Spring Physics Over Linear Easing:
Avoid rigid linear transitions. Use physical springs with deliberate damping:

```tsx
// frontend/src/lib/motion.ts
export const springTransition = {
  type: 'spring',
  stiffness: 380,
  damping: 30,
};

export const gentleSpring = {
  type: 'spring',
  stiffness: 200,
  damping: 24,
};

export const staggerContainer = (staggerChildren = 0.08) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
    },
  },
});

export const revealItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
};
```

---

## 3. GSAP ScrollTrigger Choreography

For downstream showcase sections and timeline reveals:

```tsx
// frontend/src/components/sections/ShowcaseSection.tsx
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.showcase-item', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="work" className="py-24 max-w-7xl mx-auto px-6">
      {/* Downstream showcase items */}
    </section>
  );
}
```

---

## 4. Reduced Motion & Performance Rules

1. **Check `prefers-reduced-motion`:**
   Wrap all GSAP animations:
   ```ts
   const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
   if (prefersReducedMotion) {
     // Skip translation animations, perform instant opacity switch
     gsap.set(elements, { opacity: 1, y: 0 });
     return;
   }
   ```
2. **Never Animate Layout Properties:**
   Animate ONLY GPU-accelerated properties: `transform` (`x`, `y`, `scale`) and `opacity`. NEVER animate `width`, `height`, `top`, `margin`, or `padding` during scroll.
3. **Always Clean Up Listeners:**
   In React hooks, always call `ctx.revert()` or `ScrollTrigger.kill()` on unmount to prevent memory leaks and ghost triggers.
