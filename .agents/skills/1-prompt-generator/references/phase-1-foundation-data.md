# Phase 1: Scope, Pages, Verbatim User Data, Art Direction, Colors & Typography

Read this file ONLY when executing **Phase 1** of `/1-prompt-generator`.
Your goal in Phase 1 is to:
1. Check what the user already provided (in chat, uploaded PDF/screenshots, or existing repo).
2. Ask the missing Phase 1 questions below (presenting selectable options + `[Custom User Input]` + `[AI Recommended]`).
3. **Immediately after the user replies to Phase 1**, write the complete, detailed file `prompts/phase-1-foundation-data.md` using the exact blueprint in Section 3 of this file, update `prompts/PROGRESS.md` to `Last Completed Phase: 1 | Next Phase: 2`, and then load `references/phase-2-components.md` to present Phase 2 questions.

## 1. Phase 1 Discovery Questions (Present Clear Options + User Input)

### Q1. Website Category (Confirm if already stated; otherwise ask first)
1. Developer portfolio | 2. Personal brand or professional profile | 3. SaaS marketing website | 4. SaaS web application | 5. AI product or AI-powered application | 6. Ecommerce or online store | 7. Marketplace | 8. Digital agency or creative studio | 9. Corporate or institutional website | 10. Dashboard or admin panel | 11. Developer tool or API documentation | 12. Education, courses or e-learning | 13. Healthcare or health and wellness | 14. Fintech or financial services | 15. Booking, appointments or reservations | 16. Travel and hospitality | 17. Restaurant or food service | 18. Real estate and property | 19. Editorial, magazine, blog or news | 20. Media, video or entertainment | 21. Social or community platform | 22. Productivity or collaboration tool | 23. HR, recruiting or careers website | 24. Event or conference website | 25. Nonprofit or community organization | 26. Internal business application | 27. Landing page or campaign website | 28. Multi-category product
- `29) [Custom User Input]`: Type any custom website category or niche.
- `30) [AI Recommended]`: Let AI infer the category from your description.

### Q2. Project Mode & Existing Site Preservation
- `A)` Build a new website from scratch
- `B)` Improve the existing website without replacing everything
- `C)` Redesign an existing website while preserving selected functionality
- `D)` Audit an existing website before deciding what to change
- `E)` Add new pages, sections or features to an existing website
- `F)` Refactor or migrate an existing frontend while preserving required behavior
- `G) [Custom User Input]`: Describe custom project mode and what existing routes/functionality must be preserved.

### Q3. Website Pages & Route Architecture (Sitemap)
- `A)` **Single-Page Scroll Website**: All sections on `/` with smooth anchor links (`#hero`, `#about`, `#services`, `#projects`, `#reviews`, `#contact`).
- `B)` **Multi-Page Portfolio / Studio**: `/` (Home), `/about`, `/projects` (or `/work`), `/skills` (or `/services`), `/contact`.
- `C)` **SaaS Multi-Page**: `/`, `/features`, `/pricing`, `/about`, `/blog`, `/contact`, `/login`, `/signup`.
- `D)` **E-Commerce Multi-Page**: `/`, `/shop`, `/collections/[slug]`, `/product/[id]`, `/cart`, `/checkout`, `/contact`.
- `E) [Keep Existing Routes]`: Keep current project routes.
- `F) [Custom User Input]`: Type the exact pages and URL routes you want.
- `G) [AI Recommended]`: Recommend the best page structure for this category.

### Q4. Real Website Data, Human Copy & Visual Assets (User Content Intake)
Ask the user to paste or confirm their real data so zero fake copy or robotic AI words are ever used:
1. **Person or Brand Identity**: Exact Name, Role/Tagline, Location, Availability badge, and short Bio.
2. **Hero Headlines & CTAs**: Primary headline, subheadline, Primary CTA text/link, Secondary CTA text/link.
3. **Key Metrics / Ticker Items**: Exact numbers and items (e.g., `2+ Years Experience`, `14+ Projects`, tech stack items, client names).
4. **Services / Features Data**: Numbered items (`01`, `02`, `03`, `04`), titles, human descriptions, and tags.
5. **Projects / Products / Credentials Data**: Exact project titles, categories, descriptions, tech stack tags, live URLs, GitHub URLs, Education/Degrees, Certifications, and image filenames.
6. **Testimonials & Contact Info**: Client quotes, names/roles, email address, phone/WhatsApp, GitHub/LinkedIn/social links, and contact form fields.
7. **Visual Assets Check**:
   - `[Supplied Assets]`: Exact filenames provided by the user in `public/` (e.g., cutout portrait `/hero-portrait.png`, project screenshots).
   - `[Suggested Placeholders]`: Any missing visuals that need clean placeholders.
   - `[Custom User Input]`: Paste all your raw text, resume data, project details, and asset names here.

### Q5. Design Reference & Art Direction (Optional User Design or Curated Direction)
**Part 5A - Reference Source (User may provide a design or pick an option)**:
- `A)` User-provided design (PDF, screenshots, Figma, or URL - inspect directly and extract exact layout, colors, fonts, and motion)
- `B)` Awwwards-inspired | `C)` Linear-inspired | `D)` Stripe-inspired | `E)` Apple-inspired | `F)` Vercel-inspired | `G)` Framer-inspired | `H)` Notion-inspired | `I)` Robinsweb-inspired (`robinsweb.net` - dark obsidian canvas + warm orange `#ED7A36` radial glow + tall condensed display font + overlapping cutout portrait) | `J)` Other named reference from `design-refs/` | `K)` Multi-reference synthesis | `L)` Custom original direction
- `M) [Custom User Input]` / `N) [AI Recommended]`
*(MANDATORY LIVE CHROME & MCP EXPLORATION: If the user provides a URL or picks an Awwwards / live website reference, the agent must fetch any available .md brief AND open the URL directly in Chrome using browser_subagent or awwwards MCP live capture tools. In Chrome, inspect the full-page layout, hover over interactive buttons/cards, click navigation menus/overlays/tabs, scroll through the entire page, and provide a comprehensive visual & interactive description in the conversation before writing prompts/phase-1-foundation-data.md).*

**Part 5B - General Art Direction**:
1. Premium minimal | 2. Editorial | 3. Swiss or grid-led | 4. Brutalist or neo-brutalist | 5. Experimental | 6. Cinematic | 7. Luxury | 8. Futuristic or neo-futuristic | 9. Organic or natural | 10. Industrial | 11. Playful | 12. Corporate and restrained | 13. Expressive and maximalist | 14. Retro-inspired | 15. Technical and data-dense | 16. Typography-led | 17. Photography-led | 18. Illustration-led | 19. Product-led | 20. `[Custom User Input]` | 21. `[AI Recommended]`

### Q6. Theme, Color Palette & Surface Physics
**Part 6A - Theme & Color Options**:
- `A)` **Dark Atmospheric Gradients**: Deep black (`#000000` / `#0A0A0C`) with warm radial spotlight glow (e.g., Sunset Orange `#ED7A36` or Amber glow)
- `B)` **Pure Dark + High-Contrast Single Accent**: Obsidian/carbon dark canvas with Electric Blue, Indigo, Emerald, Lime, or Crimson accent
- `C)` **Warm Editorial Light Mode**: Alabaster/ivory (`#FAF8F5`) with deep ink (`#111111`) and warm terracotta/cobalt accent
- `D)` **Crisp Technical Light Mode**: Pure white (`#FFFFFF`) and soft slate (`#F4F4F6`) with high-contrast ink and royal blue/violet accent
- `E)` **Light and Dark Themes (With Theme Switcher)**
- `F)` **Additional Palette Directions**: Neutral monochrome | Warm neutral | Cool neutral | Multiple brand accents | High contrast | Muted and restrained | Pastel | Saturated | Earth tones | Warm gradients | Cool gradients
- `G) [Existing Project Palette]` | `H) [Custom User Input]` (exact Hex codes) | `I) [AI Recommended]`

**Part 6B - Surface Treatments (Never assume glassmorphism or glow unless selected)**:
1. Minimal flat surfaces | 2. Glassmorphism / Frosted glass | 3. Subtle transparency | 4. Gradient surfaces | 5. Soft shadows | 6. Hard shadows | 7. Borders and hairline dividers (`1px`) | 8. Layered depth | 9. Neumorphism (only when justified) | 10. Grain and film texture | 11. Glow and atmospheric lighting | 12. Blur effects | 13. Sharp geometric surfaces (`0px-4px`) | 14. Rounded surfaces (`16px-24px`) | 15. Mixed surface treatments | 16. `[Custom User Input]` | 17. `[AI Recommended]`

### Q7. Typography & Hierarchy System
- `A)` **Tall Condensed Uppercase Display + Clean Geometric Sans**: e.g., `Anton`, `Bebas Neue`, or `Oswald` for giant hero/section headlines + `Plus Jakarta Sans` or `Inter` for body + `JetBrains Mono` for index numbers (`01-04`)
- `B)` **Modern Geometric Sans-Serif Pair**: e.g., `Plus Jakarta Sans` / `Space Grotesk` / `Syne` for display + `Inter` / `DM Sans` for body + `JetBrains Mono` for badges
- `C)` **Editorial Serif + Clean Sans**: e.g., `Instrument Serif` or `Playfair Display` for headings + `Plus Jakarta Sans` or `Inter` for body
- `D)` **Other Directions**: Humanist sans-serif | Modern serif | Monospaced-led | Variable typography | Oversized display | Typography-led composition | Mixed font pairing | Existing brand fonts
- `E) [Custom User Input]` (Exact Google/local font names & sizes) | `F) [AI Recommended]`

## 2. Immediate Action After User Answers Phase 1
As soon as the user answers Phase 1 (or tells you to auto-select):
1. Create the `prompts/` directory in the project workspace if it does not exist.
2. Write `prompts/phase-1-foundation-data.md` using the exact 6-Block template in Section 3 below (180 to 260 lines of dense, complete specifications).
3. Update `prompts/PROGRESS.md` to record that `prompts/phase-1-foundation-data.md` is complete and `Next Phase: Phase 2`.
4. Read `references/phase-2-components.md` and present the Phase 2 questions to the user.

## 3. Exact Blueprint to Write Into `prompts/phase-1-foundation-data.md`

When writing `prompts/phase-1-foundation-data.md`, include all 6 blocks below with 100% concrete values (zero placeholders):

```markdown
# PHASE 1 PROMPT: FOUNDATION, DESIGN TOKENS, TYPOGRAPHY & VERBATIM DATA
**Target Command**: `/2-setup-foundation`

## BLOCK 1: PROJECT SCOPE, STACK & ROUTE SKELETON
- **Website Category**: [Exact category]
- **Project Mode**: [New build / Improve existing / Redesign / etc.]
- **Preservation Rules**: [Routes/components to keep untouched, if any]
- **Framework & Packages to Install**:
  - Core: [Next.js App Router / React + Vite, TypeScript, Tailwind CSS]
  - Mandatory Motion & Icon Packages: `gsap`, `lenis`, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`
- **Route Skeleton to Create**:
  - [List every page route, e.g., `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/projects/page.tsx`, `src/app/skills/page.tsx`, `src/app/contact/page.tsx`]

## BLOCK 2: EXACT CSS COLOR, SURFACE & ATMOSPHERIC TOKENS (`:root`)
Define these exact CSS variables in `globals.css` (and map them to Tailwind utilities):
- `--bg-canvas`: [Exact Hex, e.g., `#000000` or `#FAF8F5`]
- `--bg-surface`: [Exact Hex, e.g., `#0D0D0F` or `#FFFFFF`]
- `--bg-elevated`: [Exact Hex, e.g., `#16161A` or `#F2EFE9`]
- `--text-primary`: [Exact Hex, e.g., `#FFFFFF` or `#111111`]
- `--text-secondary`: [Exact Hex, e.g., `#A1A1AA` or `#52525B`]
- `--text-muted`: [Exact Hex, e.g., `#71717A`]
- `--accent-primary`: [Exact Hex, e.g., `#ED7A36`]
- `--accent-secondary`: [Exact Hex, e.g., `#F59E0B`]
- `--border-subtle`: [Exact rgba/hex, e.g., `rgba(255, 255, 255, 0.10)`]
- `--border-accent`: [Exact rgba/hex, e.g., `rgba(237, 122, 54, 0.45)`]
- `--glow-atmosphere`: [Exact CSS radial-gradient value]
- `--radius-card`: [Exact radius, e.g., `16px`]
- `--radius-pill`: `9999px`
- **Surface Physics Rules**: [Exact rules for borders, radial glow, glass blur, shadows, or grain texture]

## BLOCK 3: TYPOGRAPHY LOADING & FLUID SCALE TOKENS
Load these exact Google/local fonts in root layout and bind CSS variables:
- `--font-display`: [Exact Font Name, weights, uppercase/tracking rules]
  - Hero Display Scale: `clamp(3.75rem, 12vw, 13rem)`, line-height `0.88`, letter-spacing `-0.02em`
  - H1 Page Title Scale: `clamp(2.75rem, 6vw, 5.5rem)`, line-height `0.95`
  - H2 Section Heading Scale: `clamp(2rem, 4.5vw, 3.75rem)`, line-height `1.0`
- `--font-sans`: [Exact Font Name, weights `400, 500, 600, 700`]
  - Body Large: `clamp(1.05rem, 1.2vw, 1.25rem)`, line-height `1.65`
  - Body Default: `1rem` (`16px`), line-height `1.65`, max-width `65ch`
- `--font-mono`: [Exact Font Name, weight `400, 500` for indices `01-04`, badges, and tags]

## BLOCK 4: COMPLETE VERBATIM USER DATA & ASSET MANIFEST
Store this structured data in `src/data/siteData.ts` so all downstream commands import real data directly:
- **Identity & Bio**: [Verbatim Name, Role, Location, Availability, Bio paragraphs]
- **Supplied Assets in `public/`**: [Exact verified file paths]
- **Suggested Asset Placeholders**: [Clean aspect-ratio placeholders needed]
- **Metrics / Marquee Items**: [Exact list of ticker phrases and numbers]
- **Services / Disciplines (`01` to `0N`)**: [Exact titles, descriptions, tags]
- **Projects / Case Studies**: [Exact titles, categories, descriptions, tech stack, live URLs, GitHub links, image paths]
- **Education, Certifications & Skills**: [Exact degrees, institutions, dates, certificates, skill groups]
- **Testimonials & Contact Info**: [Exact quotes, client names, email, socials, contact form options]

## BLOCK 5: STRICT HUMAN COPYWRITING LOCK (BANNED AI WORDS)
When creating `src/data/siteData.ts` or any UI label:
- **BANNED WORDS (NEVER USE ON THE WEBSITE)**: `Nexus`, `Zero-Slop`, `AI Slop`, `Eliminating Generic AI Slop`, `Telemetry`, `Direct Coordinates`, `Direct Dispatch`, `Verified Channels`, `Architecture Routes`, `Production Standard`, `Orchestrating`, `Synergistic`, `Delve`, and unrequested `$ npx` terminal boxes.
- **REQUIRED TONE**: Direct, natural, authentic human language (`About Me`, `Selected Work`, `Services`, `Skills & Stack`, `Get in Touch`, `Send a Message`, `Contact Info`).

## BLOCK 6: MANDATORY VISUAL FOUNDATION PREVIEW CARD ON `/` (`localhost:3000`)
When `/2-setup-foundation` executes this file, after setting up packages, fonts, `globals.css`, and `src/data/siteData.ts`, it MUST render a **Single Large Visual Design-System Preview Card (`FoundationPreviewCard`)** centered on `src/app/page.tsx` (not the full website yet, just one comprehensive visual card) and then STOP:
1. **Atmosphere & Canvas Preview**: The page background uses `var(--bg-canvas)` and renders the live `var(--glow-atmosphere)` behind the preview card.
2. **Color & Surface Swatches Grid**: Inside the big card (`bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-card)] p-8 md:p-12 max-w-5xl mx-auto my-12`), display visual color blocks with hex labels for `--bg-canvas`, `--bg-surface`, `--bg-elevated`, `--accent-primary`, `--text-primary`, `--text-secondary`, and `--border-accent`.
3. **Live Typography Hierarchy Specimen**: Render the user's actual Name/Headline in `--font-display` (Hero scale + H2 scale), bio paragraph in `--font-sans`, and `01 / FULL-STACK` badge in `--font-mono` so the user can visually verify font loading and hierarchy in the browser.
4. **Surface & Button Preview Strip**: Show 1 sample primary accent pill button, 1 glass/surface badge, and 1 radial-glow bordered sub-card.
```

## 4. Phase 1 Validation Checklist (Before Moving to Phase 2)
Before writing `prompts/phase-1-foundation-data.md`, verify:
- [ ] Every color token has an exact hex code (no `[TBD]`)
- [ ] Every font name is an exact Google Font or local font name
- [ ] Every route is an exact file path (`src/app/page.tsx`, not `[page]`)
- [ ] All user data (name, bio, projects, services) is verbatim from the user's input
- [ ] The Visual Foundation Preview Card specification is complete in Block 6
- [ ] Zero banned AI words appear anywhere in the file
- [ ] Line count is between 180 and 260 lines
- [ ] `prompts/PROGRESS.md` is updated with the correct phase number and line count
