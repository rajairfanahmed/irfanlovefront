# Phase 4: Sections, Card Designs, Imagery, Contact, Footer & Animations

Read this file at the start of **Phase 4**. Present the options below so the user can lock in their exact section sequence, card anatomy, contact/footer design, and animations. Always include `[Custom User Input]` and `[AI Recommended]`.

## Q13. Section Sequence & Card / Row Designs
First, confirm the exact top-to-bottom **Section Order** on each page (e.g., `1. Hero -> 2. Infinite Marquee Strip -> 3. About/Stats -> 4. Services -> 5. Featured Projects -> 6. Testimonials -> 7. Process/FAQ -> 8. Contact -> 9. Footer`).

Second, ask which **Card / Row Design Archetype** to use for each major section:
- `A)` **Full-Width Numbered Interactive Rows (`01` - `04`)**: Exposed top/bottom `1px` hairlines, large index number (`01`), bold service/feature title, description, tags, and smooth row highlight/image reveal on hover (exact `robinsweb.net` Services style).
- `B)` **Atmospheric Radial Glow Cards**: Dark surface cards (`#0D0D0F`) with warm orange/accent radial spotlight glow along the top/bottom border and subtle hover lift (exact `robinsweb.net` Testimonials / Pricing style).
- `C)` **Editorial Case-Study Showcase Cards**: Large aspect-ratio project preview (`16:10` or `4:3`), subtle image zoom (`scale-105`) on hover, category pill badges, index number, and custom `"VIEW"` cursor follower.
- `D)` **Interactive SaaS Bento Cards**: Asymmetric grid (`col-span-7` + `col-span-5`) where each card contains a live interactive micro-UI preview (animated toggle, code snippet, metric graph, or command palette).
- `E)` **E-Commerce Product Cards**: Secondary image swap on hover, slide-up `Quick Add` button, discount/new badge, color swatch dots, and right-aligned price.
- `F)` **Sticky Stacking Cards**: Cards that pin and stack on top of each other with subtle scale-down (`scale(0.96)`) as the user scrolls down.
- `G)` **Frosted Glass Floating Cards**: Translucent `backdrop-blur-xl` cards with luminous `1px` border over atmospheric gradients.
- `H)` `[Custom User Input]`: Specify the exact section order and how cards/rows in each section should look and behave.
- `I)` `[AI Recommended]`: Let AI assign the best card/row archetype to each section.

## Q14. Imagery, Contact Form & Footer Architecture
### Part 14A: Imagery & Visual Assets (16 Options)
1. Real photography | 2. Portrait-led visuals (e.g., cutout hero portrait) | 3. Product photography | 4. Device and product mockups | 5. Interface previews | 6. 3D renders | 7. Illustrations | 8. Abstract forms | 9. SVG artwork | 10. Video backgrounds | 11. Textures and grain | 12. Official brand icons | 13. Existing project assets | 14. User-supplied assets | 15. Custom-generated visual assets | 16. No decorative imagery
- `[Custom User Input]` / `[AI Recommended]`

### Part 14B: Contact Section Design
- `A)` **Multi-Step Interactive Wizard Form (`robinsweb.net` Style)**: Step indicator bar (`Step 1 of 3` with orange/accent progress fill), interactive selectable service/budget pills, Next/Back buttons, and final message submit.
- `B)` **Split Editorial Contact Section**: Left side big headline, direct email/WhatsApp links, and availability badge; Right side clean single-step form with floating/minimal inputs.
- `C)` **Embedded Booking / Calendar Callout**: Direct scheduling card + quick message box.
- `D)` `[Custom User Input]` / `[AI Recommended]`

### Part 14C: Footer & Giant Watermark Design
- `A)` **Giant Interactive Brand Watermark Footer (`robinsweb.net` Style)**:
  - Top row: Quick navigation links, social pills, and back-to-top trigger.
  - Bottom masthead: Full-viewport-width oversized uppercase brand/name text (`ROBINSWEB` or `RAJA IRFAN AHMED`) that is **clearly visible at rest** (using warm dark tint/glow or `#222226` against `#000000` - NEVER invisible black-on-black!) and **illuminates with vibrant accent color + radial glow on hover (`hover:text-[var(--accent)]`)**.
- `B)` **Multi-Column SaaS Sitemap Footer**: 4-to-5 link columns, status indicator (`All systems operational`), newsletter input, and legal row.
- `C)` **Minimal Architectural Bar**: Single horizontal hairline row with copyright, time zone clock, and social links.
- `D)` `[Custom User Input]` / `[AI Recommended]`

## Q15. Motion & Interaction Preferences
Capture exact motion requirements in the prompt so the Implementer builds real animations (never just `scroll-behavior: smooth`!):

### Overall Motion Level
1. No decorative motion | 2. Minimal functional motion | 3. Subtle and polished | 4. Smooth and expressive | 5. Strong visual storytelling | 6. Experimental or immersive | 7. `[Custom User Input]` | 8. `[AI Recommended]`

### Select Specific Motion Features Across 6 Categories
1. **Continuous Movement**:
   - **True Infinite Marquee Strip** (`@keyframes marquee` or GSAP seamless loop - NEVER a static flex row!), Brand/client logo ticker, Technology ticker, Auto-scrolling project strip, Continuous carousel, Animated metrics counter.
2. **Entrance & Typography**:
   - Split-text character/word reveal on hero display title, Fade and reveal, Slide and reveal, Staggered elements, Mask/clip-path reveals, Image curtain reveals, Hero entrance sequence.
3. **Scroll-Driven Motion**:
   - Smooth scrolling (`Lenis`), Scroll-triggered section reveals (`GSAP ScrollTrigger` / `Framer Motion`), Parallax portrait/backgrounds, Sticky or pinned storytelling, Horizontal scroll sections, Scroll progress indicator.
4. **Hover & Pointer Interactions**:
   - Interactive footer watermark color/glow highlight on hover, Card radial spotlight border follow, Magnetic buttons, Custom cursor / `"VIEW"` follower badge, Image zoom on card hover, Animated link underlines, Card 3D tilt, Text color transitions.
5. **Navigation & Interface Motion**:
   - Animated hamburger morph (`Menu [=]` to `Close [X]`), Full-screen menu curtain reveal, Menu item staggering, Drawer/sidebar transitions, Multi-step form progress transition, Page/dialog transitions.
6. **Advanced Motion**:
   - SVG path animation, 3D perspective transforms, WebGL/shader background glow, Interactive canvas.
- `[Custom User Input]`: Describe any exact animation timing, easing, or trigger you want.
- `[AI Recommended]`: Recommend the complete animation choreography for this project.
