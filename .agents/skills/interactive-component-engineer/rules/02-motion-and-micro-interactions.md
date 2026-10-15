# 02: Motion Choreography, GSAP Skeletons & Micro-Interactions
**Domain:** Interactive Component Engineering (Stage 3)  
**Philosophy:** Purposeful motion, hardware acceleration, and reduced-motion safety. Zero em-dashes.

---

## 1. Motion Motivation Rule

Before adding any animation, ask: "What does this animation communicate?"
- **Valid reasons:** Hierarchy, storytelling, feedback, state transition.
- **Invalid reason:** "It looked cool."
Each ScrollTrigger, each marquee, each pinned section needs a one-sentence reason. If you cannot articulate the reason in one sentence, drop the animation.

---

## 2. Forbidden Animation Patterns

- **`window.addEventListener('scroll', ...)` is banned.** Janky and unbatched. Use Motion's `useScroll()`, GSAP's `ScrollTrigger`, IntersectionObserver, or CSS scroll-driven animations.
- **Custom scroll progress using `window.scrollY` in React state is banned.**
- **`requestAnimationFrame` loops touching React state are banned.** Use Motion values (`useMotionValue` + `useTransform`).
- **Animate ONLY `transform` and `opacity`.** Never animate `top`, `left`, `width`, `height`.

---

## 3. Canonical Sticky-Stack GSAP Pattern

```tsx
"use client";
import { useRef, useEffect, useId, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export function StickyStack({ cards }: { cards: ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const instanceId = useId().replace(/:/g, "");
  const cardClass = `stack-card-${instanceId}`;
  const innerClass = `stack-card-inner-${instanceId}`;

  useEffect(() => {
    if (reduce || !ref.current || cards.length <= 1) return;
    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(`.${cardClass}`);
      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cardEls[cardEls.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
        const inner = card.querySelector(`.${innerClass}`);
        if (!inner) return;
        gsap.to(inner, {
          scale: 0.92,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: {
            trigger: cardEls[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [reduce, cards.length, cardClass, innerClass]);

  return (
    <div ref={ref} className="relative">
      {cards.map((card, i) => (
        <div
          key={i}
          style={{ zIndex: i + 1 }}
          className={`${cardClass} relative min-h-[100dvh] flex items-center justify-center`}
        >
          <div className={`${innerClass} w-full flex items-center justify-center will-change-transform`}>
            {card}
          </div>
        </div>
      ))}
    </div>
  );
}
```

Critical: `start: "top top"`, `pin: true`. Never combine CSS `position: sticky` with `pin: true` on the same element. Pin outer card, animate inner wrapper.

---

## 4. Canonical Horizontal-Pan GSAP Pattern

```tsx
"use client";
import { useRef, useEffect, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export function HorizontalPan({ children }: { children: ReactNode }) {
  const wrap = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !wrap.current || !track.current) return;
    const ctx = gsap.context(() => {
      const getDistance = () =>
        Math.max(0, track.current!.scrollWidth - wrap.current!.clientWidth);
      gsap.to(track.current, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrap);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      ref={wrap}
      role="region"
      aria-label="Horizontal content track"
      tabIndex={reduce ? 0 : undefined}
      className={`relative w-full ${reduce ? "overflow-x-auto scroll-smooth" : "overflow-hidden"}`}
    >
      <div
        ref={track}
        className={`flex h-[100dvh] w-max items-center ${reduce ? "snap-x snap-mandatory" : ""}`}
      >
        {children}
      </div>
    </section>
  );
}
```
