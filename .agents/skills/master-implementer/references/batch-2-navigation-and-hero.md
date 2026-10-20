# Batch 2: Desktop Navbar, Hamburger Overlay, Hero & Infinite Marquee

Read this file at the start of **Batch 2**. Build the exact Navigation, Hero, and Marquee archetypes specified in **Block 4 and Block 5 (Section 1)** of `MASTER_PROMPT.md`.

## 1. Desktop Navbar Implementation (Build Only the Selected Archetype)
Inspect Block 4 of `MASTER_PROMPT.md` and implement the exact selected Desktop Navbar variant:

- **Archetype A - Minimal Split Bar (`Brand` Left + `Menu [=]` Pill Right, e.g., `robinsweb.net`)**:
  - Render a fixed/sticky top bar (`h-20`, `z-50`, `px-6 md:px-12`, `flex items-center justify-between`).
  - Left: Bold uppercase brand wordmark (`font-[family-name:var(--font-display)] tracking-wider text-xl md:text-2xl`).
  - Right: Interactive pill button (`rounded-full px-5 py-2.5 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-md flex items-center gap-3 hover:border-[var(--accent-primary)] transition-all`). Inside the pill, render the label (`Menu` / `Close`) and a 2-line architectural icon that morphs into an `X` when open.
  - **CRITICAL**: Do NOT render horizontal desktop nav links in the center of the bar when Archetype A is selected.
- **Archetype B - Floating Center Glass Island / Dynamic Pill**:
  - Fixed centered capsule (`top-5 left-1/2 -translate-x-1/2 z-50 rounded-full px-6 py-3 backdrop-blur-xl bg-[var(--bg-surface)]/75 border border-[var(--border-subtle)] shadow-2xl flex items-center gap-8`).
- **Archetype C - Docked Full-Width SaaS Header**:
  - `h-16 md:h-20 w-full border-b border-[var(--border-subtle)] backdrop-blur-md` with Brand left, center nav links, and right CTA buttons.
- **Archetype D - Enterprise Mega-Menu Header**:
  - Hovering top-level items reveals a smooth dropdown panel with 2-to-3 columns of icon links + a featured preview card.
- **Archetype E - E-Commerce Split Utility Header**:
  - Top announcement strip + main header with Search input, Category links, Currency selector, and a working slide-over Cart Drawer trigger with item badge.
- **Archetypes F / G / H (Editorial Masthead / Left Command Sidebar / Bottom Floating Dock)**:
  - Build the exact structural geometry described in Block 4 of `MASTER_PROMPT.md`.

## 2. Hamburger Trigger & Overlay Menu State Machine
Implement the exact open/close menu experience from Block 4 of `MASTER_PROMPT.md` with working React state (`isOpen`, `ESC` key close, body scroll lock, and link click auto-close):

- **Overlay A - Full-Screen Staggered Curtain (`robinsweb.net` / Agency Style)**:
  - Fixed `inset-0 z-40 bg-[var(--bg-canvas)]/95 backdrop-blur-2xl` with atmospheric radial glow.
  - Display oversized numbered links (`01 HOME`, `02 SERVICES`, `03 WORK`, `04 REVIEWS`, `05 CONTACT`) using `--font-display` (`text-4xl md:text-7xl uppercase`), where hovering a link shifts it right (`translate-x-4`) and highlights it in `var(--accent-primary)`.
  - Include bottom social links and direct email/contact info.
- **Overlay B - Split-Screen Image Preview Menu**:
  - Left 45% desktop column shows a smooth crossfading preview image corresponding to the currently hovered nav link; Right 55% displays the giant stacked links.
- **Overlay C / D / E / F (Slide-In Right Glass Drawer / Expanding Top Island / 2-Line Accordion / Mobile Bottom Sheet)**:
  - Build the exact drawer or expanding capsule geometry specified in Block 4, ensuring smooth open/close transitions and `44px` minimum touch targets on mobile.

## 3. Hero Section Architecture (Exact Z-Index & Layout Execution)
Build the Hero section following the exact archetype and Z-index layer stack in Block 4 of `MASTER_PROMPT.md`:

- **Hero Archetype A - Layered Giant Display Title + Center Overlapping Cutout Portrait (`robinsweb.net` Style)**:
  - Container: `relative min-h-[90vh] w-full flex flex-col justify-between overflow-hidden pt-24 pb-0`.
  - **Layer 1 (`z-0` Atmospheric Glow)**: Absolute centered radial glow (`style={{ background: 'var(--glow-atmosphere)' }}`) behind the text and portrait so the dark canvas glows with warm orange/accent depth.
  - **Layer 2 (`z-10` Giant Condensed Display Text)**: Full-width uppercase display headline (`font-[family-name:var(--font-display)] text-[clamp(4.2rem,15.5vw,15rem)] leading-[0.88] tracking-tight text-center select-none uppercase`).
  - **Layer 3 (`z-20` Overlapping Cutout Portrait)**: Centered high-resolution cutout portrait image (`relative z-20 mx-auto -mt-[14vw] md:-mt-[11vw] w-[280px] sm:w-[360px] md:w-[460px] object-contain pointer-events-none`) that visually overlaps the lower half of the giant background title.
  - **Layer 4 (`z-30` Foreground Intro, Badges & CTA)**: Left/right desktop floating blocks (stacking cleanly below portrait on mobile `<768px`) containing the user's role description, availability pill, and primary rounded accent CTA button.
- **Hero Archetype B (60/40 Split) / C (Centered SaaS + 3D Tilted Mockup) / D (Full-Bleed Showreel) / E (E-Commerce Lookbook) / F (Bento Hero) / G (Swiss Poster)**:
  - Implement the exact column proportions, perspective transforms (`perspective(1200px) rotateX(8deg)` for 3D mockups), or grid hairlines specified in Block 4.
  - **Strict Prohibition**: Never inject an unrequested `"SYSTEM ONLINE / npx ..."` CLI box unless explicitly requested in `MASTER_PROMPT.md`.

## 4. Section 1: True Infinite Marquee Strip (Mandatory Continuous Motion)
Whenever `MASTER_PROMPT.md` includes a marquee or ticker strip below the Hero or between sections:
- Render an outer wrapper (`w-full overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--bg-surface)] py-4 md:py-5`).
- Render an inner track with class `animate-marquee-infinite` containing **two identical copies** of the item list side-by-side (`[...items, ...items]`) so `translate3d(-50%, 0, 0)` loops seamlessly forever without gaps.
- Separate items with accent icons (`+` or `*` in `text-[var(--accent-primary)]`).
- **NEVER** render the marquee as a static `flex-wrap` or static `justify-between` bar.
