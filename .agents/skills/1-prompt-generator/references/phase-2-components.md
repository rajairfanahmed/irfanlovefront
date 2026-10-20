# Phase 2: Atomic UI Components & Interactive Primitives

Read this file ONLY when executing **Phase 2** of `/1-prompt-generator` (after `prompts/phase-1-foundation-data.md` has been written and recorded in `prompts/PROGRESS.md`).

Your goal in Phase 2 is to:
1. Check if the user's reference design (PDF/screenshots/URL) or Phase 1 answers already specify button, badge, input, marquee, or cursor styles. Mark any known items as `Locked from Context`.
2. Ask the Phase 2 questions below with selectable options + `[Custom User Input]` + `[AI Recommended]`.
3. **Immediately after the user replies to Phase 2**, write the complete file `prompts/phase-2-components.md` using the exact blueprint in Section 3 below, update `prompts/PROGRESS.md` to `Last Completed Phase: Phase 2 | Next Phase: Phase 3`, and then load `references/phase-3-cards-layout.md` to present Phase 3 questions.

## 1. Phase 2 Discovery Questions (Atomic UI Components)

### Q1. Primary & Secondary CTA Button Designs
Ask how primary and secondary action buttons should look and behave across the website:
- `A)` **Rounded Pill Accent Button (`robinsweb.net` / Studio Style)**: Full capsule (`rounded-full`), vibrant solid `--accent-primary` background (e.g., Sunset Orange `#ED7A36`), crisp uppercase/semibold label, circular arrow badge inside or beside, and warm glow + slight scale lift on hover.
- `B)` **Magnetic Interactive Button (Awwwards / Creative Dev Style)**: Button tracks pointer position within a `16px` magnetic pull zone using smooth spring interpolation, paired with a vertical text-roll (`translateY(-100%)`) on hover.
- `C)` **Illuminated Hairline & Glass Button (Linear / Vercel Style)**: Dark or translucent surface (`backdrop-blur-md`), `1px` border with top-edge specular highlight, and subtle radial accent spotlight on hover.
- `D)` **Architectural Sharp / Brutalist Button**: Crisp `0px-4px` corners, exposed `1px` border or hard offset shadow (`4px 4px 0px var(--accent-primary)`), and instant high-contrast color inversion on hover.
- `E)` **Animated Border-Beam / Shimmer Button (Stripe / AI Product Style)**: Continuous subtle light beam traveling around the `1px` pill border with soft internal gradient sheen.
- `F) [Keep Existing Buttons]`: Preserve current project button styles.
- `G) [Custom User Input]`: Describe your exact button shape, padding, border, icon, and hover effect.
- `H) [AI Recommended]`: Let AI select the optimal primary and secondary button primitives for your Phase 1 art direction.

### Q2. Badges, Section Eyebrows & Tech/Category Pills
Ask how section labels, status indicators, and metadata tags should be styled:
- `A)` **Numbered Monospace Eyebrow + Pill Tag**: Section headers preceded by `01 // SECTION NAME` in `--font-mono` (`text-[var(--accent-primary)]`), paired with rounded surface pills for tech/category tags.
- `B)` **Live Availability / Status Pill**: Translucent capsule containing a pulsing accent/emerald status dot + natural human text (e.g., `Available for Select Projects`).
- `C)` **Interactive Hover-Glow Skill / Tech Chips**: Compact cards/pills (`px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)]`) that illuminate with `border-[var(--accent-primary)]` and subtle background tint on hover.
- `D)` **Editorial Bracket / Hairline Labels**: Minimal `[ 01 - SERVICES ]` or exposed horizontal rule labels with zero background fill.
- `E) [Custom User Input]`: Specify your exact badge, tag, and section eyebrow styling.
- `F) [AI Recommended]`: Let AI match badges and tags to your typography and surface tokens.

### Q3. Form Inputs, Selectable Option Pills & Wizard Controls
Ask how interactive inputs and form controls should work (used in Contact, Newsletter, Search, or Filters):
- `A)` **Multi-Step Interactive Wizard Controls (`robinsweb.net` Style)**:
  - Top step indicator (`Step 1 of 3`) + animated progress bar track (`h-1.5 rounded-full` filling with `--accent-primary`).
  - Interactive selectable option pills for Service Type / Budget / Timeline (clicking a pill toggles active border + accent glow).
  - Clean floating/surface text inputs + `Next Step` / `Back` / `Send Message` buttons.
- `B)` **Architectural Bottom-Line Inputs**: Minimal transparent inputs with a `1px` bottom border (`border-b border-[var(--border-subtle)]`) that smoothly animates to `border-[var(--accent-primary)]` on focus.
- `C)` **Elevated Surface / Frosted Glass Inputs**: Full-box inputs (`rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] px-4 py-3.5`) with focus ring glow and clear validation states.
- `D) [Custom User Input]`: Describe your exact input fields, interactive pills, dropdowns, or form controls.
- `E) [AI Recommended]`: Let AI select the cleanest input and form primitive system.

### Q4. Continuous Infinite Marquee / Ticker Component
Ask if the website needs a reusable seamless marquee/ticker component (`src/components/ui/InfiniteMarquee.tsx`):
- `A)` **Full-Bleed Seamless Text & Icon Marquee (`robinsweb.net` Style)**: Top and bottom `1px` borders, continuous `@keyframes marquee-left` animation with duplicated track (`[...items, ...items]`), uppercase display/mono items separated by `--accent-primary` `+` or `*` icons, pausing smoothly on hover.
- `B)` **Dual-Row Opposite-Direction Ticker**: Two stacked ticker rows moving in opposite directions (`left` and `right`) for skills, client logos, or highlights.
- `C)` **Monochrome-to-Color Brand / Tech Logo Ticker**: Infinite scrolling strip of official SVG logos/icons.
- `D)` **No Marquee Component Needed**
- `E) [Custom User Input]`: Specify exact marquee items, speed, separator icon, height, and background color.
- `F) [AI Recommended]`: Let AI configure the marquee component based on your Phase 1 data.

### Q5. Interactive Utility Primitives (Cursor, Filter Tabs, Accordions, Modals)
Select any additional interactive UI primitives needed in `src/components/ui/`:
1. **Custom Spring Cursor Follower**: Desktop pointer ring/dot that smoothly follows the mouse and morphs into a `"VIEW"` badge when hovering project/product cards.
2. **Animated Filter Tabs**: Category filter bar (`All`, `Web Apps`, `AI/ML`, `Design Systems`) with a sliding active pill indicator.
3. **Interactive Accordion Primitive**: Expandable Q&A or specification drawer with smooth height transition and rotating `+`/`-` icon.
4. **Back-to-Top Smooth Trigger & Copy-Email Toast**: One-click scroll-to-top button and interactive `"Click to Copy Email"` pill with instant `"Copied!"` toast feedback.
5. `[Custom User Input]`: Add any other custom UI primitive (tooltips, theme toggle button, video modal trigger, etc.).
6. `[AI Recommended]`: Let AI include the right utility primitives for your category.

## 2. Immediate Action After User Answers Phase 2
As soon as the user answers Phase 2 (or asks you to auto-decide):
1. Write `prompts/phase-2-components.md` using the exact 6-Block template in Section 3 below (170 to 240 lines of complete component specifications).
2. Update `prompts/PROGRESS.md` with:
   - `Last Completed Phase: Phase 2 (prompts/phase-2-components.md)`
   - `Last Written Line Count: [Exact line count]`
   - `Next Phase to Execute: Phase 3 (references/phase-3-cards-layout.md)`
3. Read `references/phase-3-cards-layout.md` and present Phase 3 questions to the user.

## 3. Exact Blueprint to Write Into `prompts/phase-2-components.md`

When writing `prompts/phase-2-components.md`, include all 6 blocks below with 100% concrete specifications (zero placeholders):

```markdown
# PHASE 2 PROMPT: ATOMIC UI COMPONENTS & INTERACTIVE PRIMITIVES
**Target Command**: `/3-build-components`
**Required Prerequisite**: Read `prompts/phase-1-foundation-data.md` token variables (`:root`) and `src/data/siteData.ts` first.

## BLOCK 1: COMPONENT DIRECTORY & ARCHITECTURE RULES
Create all reusable atomic UI primitives inside `src/components/ui/`:
- Every interactive component using `useState`, `useEffect`, or pointer events MUST include `"use client";` on Line 1.
- Use ONLY the semantic CSS variables from Phase 1 (`var(--bg-canvas)`, `var(--bg-surface)`, `var(--accent-primary)`, `var(--border-subtle)`, `var(--font-display)`, `var(--font-sans)`, `var(--font-mono)`).
- Never use banned AI meta-words in any default prop, placeholder, or aria-label.

## BLOCK 2: BUTTON & LINK PRIMITIVES (`src/components/ui/Button.tsx`)
- **Primary Button Variant**: [Exact geometry, radius, background, text font/weight, icon badge, and hover glow/magnetic physics]
- **Secondary / Ghost Button Variant**: [Exact border, surface backdrop, hover fill, and transition timing]
- **Icon / Arrow Trigger Button**: [Circular or pill icon button with `-45deg` arrow rotation on hover]
- **Ergonomics**: Minimum `44px` height on all viewports; `focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]`.

## BLOCK 3: BADGES, EYEBROWS & SKILL CHIPS (`src/components/ui/Badge.tsx` & `SectionEyebrow.tsx`)
- **`SectionEyebrow.tsx`**: [Exact layout for section index `01` + uppercase category label in `--font-mono`, accent color rules]
- **`StatusBadge.tsx`**: [Availability pill with pulsing dot and verbatim status text from `siteData.ts`]
- **`TechPill.tsx`**: [Exact padding, border, radius, and hover border-illumination rules for skill/tag chips]

## BLOCK 4: FORM INPUTS, SELECTABLE PILLS & WIZARD PRIMITIVES (`src/components/ui/FormControls.tsx`)
- **`TextInput` & `TextArea`**: [Exact styling, focus border transition to `--accent-primary`, label typography, and error state]
- **`SelectablePill`**: [Interactive toggle pill for service/budget selection with active state `border-[var(--accent-primary)] bg-[var(--accent-primary)]/15 text-[var(--text-primary)]`]
- **`StepProgressBar`**: [Visual step counter `Step {current} of {total}` + animated fill bar using `var(--accent-primary)`]

## BLOCK 5: INFINITE MARQUEE & UTILITY PRIMITIVES
- **`src/components/ui/InfiniteMarquee.tsx`**:
  - Must render a `w-full overflow-hidden border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]` container.
  - Inner flex track MUST use class `animate-marquee-infinite` and render `[...items, ...items]` (duplicated array) so `@keyframes marquee-left` loops 100% seamlessly without gaps.
  - Separate items with `--accent-primary` `+` or `*` icons. Never render as a static flex bar.
- **Additional Utility Primitives**:
  - [Specify exact code rules for `CustomCursor.tsx`, `FilterTabs.tsx`, `Accordion.tsx`, or `CopyEmailButton.tsx` as selected by user]

## BLOCK 6: MANDATORY VISUAL COMPONENT PREVIEW UPDATE ON `/` (`localhost:3000`)
When `/3-build-components` finishes building these files in `src/components/ui/`, it MUST update the preview card on `src/app/page.tsx` (`localhost:3000`) to include a live **"Phase 2: Interactive UI Components Showroom"** section inside/below the Foundation Preview Card and then STOP:
1. Render live interactive examples of `Button` (Primary, Secondary, Icon), `SectionEyebrow`, `StatusBadge`, and `TechPill`.
2. Render the live scrolling `InfiniteMarquee` strip across the card using the user's actual ticker items from `siteData.ts`.
3. Render sample `TextInput`, `SelectablePill` (clickable toggle), and `StepProgressBar` (`Step 1 of 3`) so the user can click and verify every component in the browser before running `/4-cards-and-layout`.
```

## 4. Phase 2 Validation Checklist (Before Moving to Phase 3)
Before writing `prompts/phase-2-components.md`, verify:
- [ ] Every component file path is an exact path (`src/components/ui/Button.tsx`, not `[component]`)
- [ ] Every CSS variable reference matches the exact tokens defined in `prompts/phase-1-foundation-data.md`
- [ ] Button geometry includes exact radius, padding, min-height, font-family, font-weight, and hover transition
- [ ] Badge and eyebrow specs include exact `--font-mono` usage, accent color, and layout rules
- [ ] Form input specs include exact focus border color, label typography, and error state styling
- [ ] InfiniteMarquee spec includes duplicated array technique, `@keyframes` name, separator icon, and hover pause
- [ ] The Visual Component Preview Update spec for Block 6 is complete
- [ ] Zero banned AI words appear anywhere in the file
- [ ] Zero typographic em-dashes or en-dashes exist
- [ ] Line count is between 170 and 240 lines
- [ ] `prompts/PROGRESS.md` update instructions are correct
