# Hero & Layout Archetypes Reference

This reference provides 15 distinct, battle-tested hero compositions and structural layout systems to break the monotony of standard single-column templates.

---

## 🏛️ The 15 Hero Archetypes

Select the hero architecture that matches the project's domain and personality:

- **H1: Split Viewport (Left Copy / Right Interactive UI):** Clean two-column grid. Left side holds the value proposition, badge, and dual CTAs; right side holds a live interactive product preview or code terminal. (Ideal for SaaS, DevTools).
- **H2: Centered Impact with Radial Glow & Layered Mockup:** Centered headline with tight tracking, short supporting copy, dual buttons, and a bottom-docked perspective screenshot breaking below the fold. (Ideal for Cloud Platforms).
- **H3: Floating Device Mockup with Micro-Telemetry:** Centered or asymmetric hero with a floating mobile/tablet frame surrounded by contextual stat chips (e.g., "Active Users", "Latency 12ms"). (Ideal for Mobile Apps, FinTech).
- **H4: Massive Typography Watermark & Editorial Reel:** Giant oversized display typography (96px+) sitting behind or above high-craft imagery with subtle kinetic scroll movement. (Ideal for Design Studios, Portfolios).
- **H5: Full-Bleed Video / Canvas Backdrop with Centered Glass Card:** Subtle background video or WebGL canvas overlayed with a crisp glassmorphic summary card and magnetic action trigger. (Ideal for Luxury, Agencies).
- **H6: Asymmetrical Bento Showcase:** The hero itself is a multi-cell bento grid. The top-left cell holds the main headline; other cells display live metrics, interactive toggles, or customer proof. (Ideal for Modern Tech).
- **H7: Editorial Magazine Cover:** Centered classical serif masthead, issue date, lead article summary, reading time pill, and high-fidelity cover photo. (Ideal for Publications, Newsletters).
- **H8: Card Stack & Perspective Overlap:** Overlapping tilted cards with CSS 3D transforms (`rotateX`, `rotateY`) that unstack on scroll or hover. (Ideal for Payments, Cards, Wallets).
- **H9: Interactive 3D / Spline Canvas:** Real-time 3D interactive object or model viewport that responds to pointer movement. (Ideal for Gaming, Hardware, Creative Studios).
- **H10: Metric-Led Command Center:** Large numerical telemetry indicators (e.g. "$4.2B Volume", "99.99% Uptime") dominating above the fold before secondary copy. (Ideal for Infrastructure, Web3, FinTech).
- **H11: Asymmetrical Diagonal Grid:** Angled section dividers or diagonal grid lines breaking horizontal box boundaries. (Ideal for Sports, High-Energy Brands).
- **H12: Horizontal Filmstrip Scroll:** Above the fold transitions into a side-scrolling project reel anchored by a sticky headline. (Ideal for Agencies, Photographers).
- **H13: Minimalist White Cube Gallery:** Extreme negative space, tiny high-contrast typography, single stark focal image. (Ideal for High Fashion, Architecture).
- **H14: Brutalist Frame & Wire:** Raw 1px black/white grid lines, exposed coordinates, monospace labels, high-contrast monochrome buttons. (Ideal for Dev Infrastructure, Underground Media).
- **H15: Live Interactive Sandbox / Code Runner:** An executable code editor or prompt input box right in the hero where visitors can type immediately without signing up. (Ideal for Developer Tools, AI Products).

---

## 📐 Section Layout Rhythm & Density Rules

Avoid placing two visually identical sections back-to-back:
1. **Rule of Alternating Density:**
   - Section 1 (Hero): High visual breath, large type.
   - Section 2 (Social Proof): Low height, horizontal logo ticker or compact metrics.
   - Section 3 (Deep Features): High density, multi-column bento grid or tabbed breakdown.
   - Section 4 (Editorial Breather / Quote): Wide negative space, single bold testimonial.
   - Section 5 (Comparison / Pricing): High data density, structured table.
   - Section 6 (Final CTA): High visual punch, solid accent backdrop.
2. **Container Discipline:**
   - Standard content container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
   - Editorial reading container: `max-w-3xl mx-auto px-4`.
   - Section vertical padding: `py-16 sm:py-24 lg:py-32` (generous breathing room).
