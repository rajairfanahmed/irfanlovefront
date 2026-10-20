# Batch 3: Core Sections, Card Archetypes, Contact Wizard & Interactive Footer

Read this file at the start of **Batch 3**. Implement every section, card variant, contact form, and footer in the exact sequence and style defined in **Block 3 and Block 5** of `MASTER_PROMPT.md`.

## 1. Card & Row Archetype Implementation Library
Match each section in Block 5 of `MASTER_PROMPT.md` to its exact specified Card/Row archetype:

### Archetype A: Full-Width Numbered Interactive Rows (`01` - `04`, e.g., `robinsweb.net` Services)
- Layout: Full-container-width vertical stack divided by `border-t border-b border-[var(--border-subtle)]`.
- Row Anatomy (`group relative py-8 md:py-12 px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:bg-[var(--bg-surface)]`):
  - Left: Monospace/condensed index badge (`01`, `02`, `03`, `04` in `text-[var(--accent-primary)] font-mono text-lg md:text-xl`) + bold uppercase title (`font-[family-name:var(--font-display)] text-3xl md:text-5xl tracking-wide group-hover:translate-x-2 transition-transform`).
  - Middle/Right: Concise description copy (`max-w-md text-[var(--text-secondary)]`), deliverable pill tags, and an arrow button that rotates `-45deg` and fills with `var(--accent-primary)` on hover.

### Archetype B: Atmospheric Radial Glow Cards (e.g., `robinsweb.net` Testimonials / Pricing)
- Card Container: `relative overflow-hidden rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-6 md:p-8 transition-all duration-300 hover:border-[var(--border-accent)] hover:-translate-y-1`.
- Atmospheric Glow Layer: Inside each card, include a top or bottom radial spotlight gradient (`pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-48 rounded-full opacity-60 group-hover:opacity-100 transition-opacity`, using `radial-gradient(circle, rgba(237,122,54,0.28) 0%, transparent 70%)` or the project's `--accent-primary`).
- Content: Star rating row (`text-[var(--accent-primary)]`), verbatim client quote, and client name/role footer.

### Archetype C: Editorial Case-Study Showcase Cards (Featured Work / Portfolio)
- Grid: 2-column asymmetric or alternating showcase grid (`gap-8 md:gap-12`).
- Card Anatomy:
  - Image Wrapper: `relative overflow-hidden rounded-2xl aspect-[16/10] bg-[var(--bg-elevated)] border border-[var(--border-subtle)]`.
  - Image Hover: `w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105`.
  - Metadata Bar below or overlaid: Project index (`01`), bold project title, category/tech stack pills, and live link trigger.

### Archetype D: Interactive SaaS Bento Cards
- 12-column grid (`grid-cols-1 md:grid-cols-12 gap-6`) with asymmetric spans (`md:col-span-7` and `md:col-span-5`).
- Each card includes a top/bottom text block and a live interactive micro-UI preview area (animated toggle, live metric bar, command list, or code preview).

### Archetype E: E-Commerce Product Cards
- Aspect-ratio image container (`aspect-[3/4]` or `aspect-square`) with primary image and secondary hover image crossfade, top-left badge (`NEW` / `-20%`), slide-up `Quick Add` button on hover, product title, color swatch dots, and right-aligned price.

### Archetypes F & G: Sticky Stacking Cards & Frosted Glass Cards
- For Sticky Stack: Apply `sticky top-24` with incremental top offsets (`top-24`, `top-28`, `top-32`) so cards stack cleanly on scroll.
- For Frosted Glass: Apply `backdrop-blur-xl bg-white/[0.04] border border-white/[0.12] shadow-2xl`.

## 2. Contact Section Implementation
Build the exact Contact architecture specified in Block 5 of `MASTER_PROMPT.md`:

- **Variant A - Multi-Step Interactive Wizard Form with Progress Bar (`robinsweb.net` Style)**:
  - Maintain React state `step` (`1`, `2`, `3`) and `formData` (`service`, `budget`, `name`, `email`, `message`).
  - **Top Progress Header**: Display `Step {step} of 3` alongside a full-width progress bar track (`h-1.5 bg-[var(--bg-elevated)] rounded-full overflow-hidden`) with an animated fill bar (`style={{ width: `${(step / 3) * 100}%`, backgroundColor: 'var(--accent-primary)' }}`).
  - **Step 1**: Interactive selectable pills for Services & Budget range (clicking a pill highlights it with `border-[var(--accent-primary)] bg-[var(--accent-primary)]/15`) + `Next Step` button.
  - **Step 2**: Name, Email, and Project Timeline inputs + `Back` / `Next Step` buttons.
  - **Step 3**: Project details textarea + `Submit Inquiry` button with instant confirmation state.
- **Variant B / C (Split Editorial Single-Step Form / Booking Callout)**:
  - Build the clean split layout with direct contact links on the left and validated inputs on the right.

## 3. Footer & Giant Interactive Brand Watermark (Anti-Black-on-Black Rule)
When implementing the Footer (especially **Footer Archetype A - Giant Brand Watermark** like `robinsweb.net`):
1. **Top Footer Row**: Render quick navigation anchor links, social media pill links, copyright notice, and a working `Back to Top` button (`window.scrollTo({ top: 0, behavior: 'smooth' })`).
2. **Giant Viewport-Spanning Brand Watermark (`ROBINSWEB` / `RAJA IRFAN AHMED` / Brand Name)**:
   - Render the brand/person name across the full width of the footer (`font-[family-name:var(--font-display)] text-[clamp(3.5rem,14.5vw,15rem)] leading-[0.85] tracking-tight uppercase text-center select-none cursor-pointer transition-all duration-500`).
3. **MANDATORY VISIBILITY & HOVER GLOW RULE**:
   - **At Rest (Default State)**: The watermark text MUST be clearly visible against `--bg-canvas` (use `text-[#262320]` or `text-white/15` with a subtle warm text-stroke or ambient glow - **NEVER use `#050505` or `#111111` on `#000000`!**).
   - **On Hover (`hover:` State)**: Hovering the giant watermark MUST smoothly transition the text color to `var(--accent-primary)` (e.g., `#ED7A36`) with a warm drop-shadow/radial glow (`hover:text-[var(--accent-primary)] hover:drop-shadow-[0_0_45px_rgba(237,122,54,0.55)]`).
