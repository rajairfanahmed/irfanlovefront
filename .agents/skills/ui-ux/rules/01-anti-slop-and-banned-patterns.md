# 01 · Anti-Slop & Banned AI Patterns Rulebook
**Status:** Mandatory Frontend Engineering Rule  
**Enforcement:** Hard Blocker for all UI/UX outputs

Every interface must look like it was designed and built by an elite senior human frontend engineer, never an automated AI template generator.

---

## 1. The Banned "AI Slop" Fingerprint

If an interface exhibits 3 or more of these symptoms, it is considered **AI Slop** and must be rejected and redesigned:

| Element | The Banned AI Slop Formula | Why It Fails |
|---|---|---|
| **Palette** | Flat `#0a0a0a` or `#000` with electric cyan/teal (`#00d4ff`) or neon purple glow. | Cheap, clichéd "crypto-SaaS" aesthetic from 2022. |
| **Hero** | Centered layout with eyebrow badge pill (`New feature v2.0 →`) + huge heading with gradient text + centered 2-line paragraph + pair of pill buttons + stats row underneath. | Instant tell of an automated template. Lacks personality and content-specific structure. |
| **Cards** | Everything placed in a card: 3-column card grid for features, 3-column card grid for services, 3-column card grid for testimonials. Cards inside cards. | Container proliferation. Destroys visual hierarchy and makes the page look like a grid of boxes. |
| **Buttons** | Rounded pill buttons (`border-radius: 9999px`) with gradient backgrounds and glowing drop-shadows on every section. | Overused, uniform, childish. Disregards brand tone and spatial scale. |
| **Navbar** | Floating rounded pill navbar with `backdrop-filter: blur(12px)` and border `rgba(255,255,255,0.1)`. | Monotonous repetition across every single AI-generated site. |
| **Decorations** | Floating blur orbs, glowing background gradients (`filter: blur(80px)`), fake terminal windows with simulated bash commands, pretend latency meters. | Fake engineering props that add visual clutter and slow down rendering without providing real user value. |
| **Typography** | Default Inter font on everything with no size or weight contrast; 80+ character line lengths. | Lazy, uninspired, poor readability. |

---

## 2. Hard Correctness Engineering Gates (Non-Negotiable)

1. **Semantic HTML5 Only:**
   - Use `<main>`, `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
   - Use `<button>` for actions, `<a>` with `href` for navigation. NEVER `<div onClick>`.
   - Single `<h1>` per page. Sequential heading hierarchy (`h1` → `h2` → `h3`).

2. **Zero Horizontal Overflow:**
   - The page must be perfectly responsive at 320px, 375px, 768px, 1024px, 1280px, and 1440px.
   - Use `max-width: 100%`, `overflow-x: hidden` on page shell, and fluid `clamp()` sizing.

3. **WCAG AA Contrast Minimum:**
   - 4.5:1 for body text against its background.
   - 3:1 for large display text and UI interactive components.
   - Never use low-contrast grey text (`#666` on `#111`) that strains human eyes.

4. **Zero Fake Proof / Truthful Data Only:**
   - Never fabricate testimonials, star ratings, fake customer counts, or pretend metrics.
   - Use verified project data or realistic, honest content.

5. **Reduced Motion Respect:**
   - Wrap non-essential animations in `@media (prefers-reduced-motion: reduce)`.
