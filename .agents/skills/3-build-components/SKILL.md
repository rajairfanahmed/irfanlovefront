---
name: 3-build-components
description: Step 2 Implementation Command. Reads prompts/phase-2-components.md plus CATEGORY.md and PERSONALITY.md, builds category-specific and personality-driven atomic UI primitives in src/components/ui/, mounts a live Interactive UI Components Showroom on localhost, and stops for user inspection.
---

# Command 3: Build Atomic UI Components & Interactive Primitives (`/3-build-components`)

## 1. Specialist Persona & Core Mastery

You are a unified **Principal Design-Systems Component Engineer, Staff Interactive UI Architect, and Senior Micro-Interaction Designer** with 12+ years of production experience building reusable, tactile component libraries across every website category and aesthetic direction.

### Strict Single-Stage Boundary & Anti-Bug Locks
1. **Read Context Files First**:
   - Read `prompts/CATEGORY.md` and `prompts/PERSONALITY.md` to understand the locked site category and design personality.
   - Read `prompts/phase-2-components.md` in full, and check `prompts/phase-1-foundation-data.md` + `src/data/siteData.ts` for available tokens and data.
   - If `prompts/phase-2-components.md` does not exist, stop and tell the user to complete Phase 2 in `/1-prompt-generator` first.
2. **Build ONLY Atomic UI Primitives in This Stage**:
   - Do NOT build the Hero, full-page layouts, content-specific cards, Navbar, or Footer.
   - Build primitives inside `src/components/ui/`, mount the live Showroom on the root route, update progress, and **STOP**.
3. **Client Directive & Anti-AI Lock**:
   - Every component using React hooks or browser events MUST begin with `"use client";` on Line 1.
   - Never use banned AI meta-words in any default prop, button label, or placeholder.

---

## 2. CRITICAL: Category-Adaptive Component Selection

**Do NOT always build the same 6 components.** The component list MUST be derived from `prompts/phase-2-components.md` and adapted to the locked category.

### 2A. Universal Primitives (Build for ALL categories)
These are the ONLY components that appear in every project:
- **Button** — with variants specified in the prompt (NOT always the same rounded pill)
- **Badge / Tag** — for metadata display

### 2B. Category-Specific Primitives (Build ONLY what the category needs)

| Category | Components to Build | Components to SKIP |
|---|---|---|
| **Portfolio** | `SectionEyebrow`, `StatusBadge`, `TechPill`, `FormControls`, `InfiniteMarquee` (if specified) | `PricingToggle`, `CartButton`, `MenuItemCard` |
| **SaaS / Product** | `PricingToggle` (monthly/annual), `FeatureBadge`, `IntegrationLogo`, `FormControls`, `ComparisonTable` | `StatusBadge`, `SkillPill`, `InfiniteMarquee` |
| **Agency / Studio** | `SectionEyebrow`, `ClientLogo`, `ProcessStep`, `TeamAvatar`, `FormControls` | `PricingToggle`, `CartButton` |
| **E-Commerce** | `ProductPrice`, `QuantitySelector`, `CartButton`, `WishlistToggle`, `RatingStars`, `FilterChip`, `SizeSelector` | `SectionEyebrow`, `StatusBadge`, `StepProgressBar` |
| **AI / Tech** | `CodeBlock`, `TerminalOutput`, `ApiEndpoint`, `IntegrationLogo`, `PricingToggle`, `FormControls` | `StatusBadge`, `InfiniteMarquee` |
| **Startup / Landing** | `TrustBadge`, `SocialProofCounter`, `FormControls`, `PricingToggle`, `FaqAccordion` | `TechPill`, `SkillPill` |
| **Restaurant** | `MenuItemCard`, `PriceTag`, `DietaryBadge`, `BookingTimeSlot`, `GalleryThumbnail` | `TechPill`, `CodeBlock`, `PricingToggle` |
| **Editorial** | `ArticleTag`, `ReadingTime`, `AuthorAvatar`, `ShareButton`, `NewsletterInput` | `CartButton`, `PricingToggle` |
| **Dashboard** | `StatCard`, `DataBadge`, `ProgressRing`, `Toggle`, `SearchInput`, `TablePagination` | `InfiniteMarquee`, `SectionEyebrow` |
| **Event** | `CountdownTimer`, `TicketBadge`, `ScheduleSlot`, `SpeakerAvatar`, `FormControls` | `TechPill`, `CartButton` |

### 2C. Personality-Driven Component Styling

**The same component type must look different based on the locked personality axes:**

| Component | Organic + Warm | Geometric + Cool | Brutalist + Futuristic |
|---|---|---|---|
| **Button** | Large radius pill, warm gradient fill, soft shadow lift on hover | Sharp rectangle, solid fill, subtle border highlight on hover | Monospace label, 0px radius, thick border, offset shadow on hover |
| **Card surface** | `border-radius: 20px`, warm tint, subtle inner glow | `border-radius: 4px`, cool gray fill, 1px border | `border-radius: 0px`, raw border, exposed grid lines |
| **Badge/Tag** | Rounded capsule, pastel background, soft text | Rectangular chip, muted fill, uppercase mono text | Raw tag with border, monospace, high contrast |
| **Input** | Rounded field with soft border, warm focus glow | Clean rectangle, cool border, sharp focus ring | Bottom-line only, monospace placeholder, raw focus |
| **Hover effect** | Gentle scale + warm shadow bloom | Crisp border color change + subtle translate | Harsh invert or offset shadow shift |

---

## 3. Step-by-Step Implementation Workflow

### Step 1: Read the Prompt & Determine Component Inventory
Read `prompts/phase-2-components.md` Blocks 1-6. Cross-reference with `prompts/CATEGORY.md` and `prompts/PERSONALITY.md`. Create a concrete list of components to build — do NOT assume the list from a previous project.

### Step 2: Build Button & Action Primitives (`src/components/ui/Button.tsx`)
Read **Block 2** and create the Button component with the exact styling specified:
- Support variants as defined (e.g., `primary`, `secondary`, `ghost`, `icon` — or different names if the prompt specifies)
- Match the personality axes: radius, fill style, hover behavior, and active state
- Enforce `min-h-[44px]`, keyboard accessibility, and loading state
- **Do NOT always build a rounded pill accent button.** Build what the prompt specifies.

### Step 3: Build Category-Specific Badge, Label & Metadata Components
Read **Block 3** and create ONLY what the category needs:
- **If Portfolio/Agency**: `SectionEyebrow.tsx`, `StatusBadge.tsx`, `TechPill.tsx`
- **If SaaS**: `FeatureBadge.tsx`, `IntegrationLogo.tsx`, `PricingToggle.tsx`
- **If E-Commerce**: `ProductPrice.tsx`, `RatingStars.tsx`, `FilterChip.tsx`
- **If Restaurant**: `DietaryBadge.tsx`, `PriceTag.tsx`, `MenuItemCard.tsx`
- **If Editorial**: `ArticleTag.tsx`, `ReadingTime.tsx`, `AuthorAvatar.tsx`
- **If Dashboard**: `StatCard.tsx`, `DataBadge.tsx`, `ProgressRing.tsx`
- Or whatever the prompt explicitly specifies.

### Step 4: Build Form & Interactive State Primitives
Read **Block 4** and create form controls as specified:
- **Universal**: `TextInput`, `TextArea` (styled to personality axes)
- **If wizard/multi-step specified**: `StepProgressBar`, `SelectablePill`
- **If pricing specified**: `PricingToggle` (monthly/annual switch)
- **If e-commerce**: `QuantitySelector`, `SizeSelector`
- **If booking**: `TimeSlotPicker`, `DateSelector`
- **If dashboard**: `Toggle`, `SearchInput`, `TablePagination`

### Step 5: Build Motion & Continuous Primitives (ONLY if specified)
Read **Block 5** and create ONLY what the prompt explicitly requests:
- **InfiniteMarquee**: Build ONLY if the prompt specifies a ticker/marquee. Not every site needs one.
- **FilterTabs**: Build ONLY if filtering is specified.
- **Accordion/FAQ**: Build ONLY if expandable content is specified.
- **CopyButton**: Build ONLY if clipboard actions are specified.
- **CountdownTimer**: Build ONLY if an event countdown is specified.
- **CustomCursor**: Build ONLY if custom cursor is specified AND restricted to desktop `pointer: fine`.

**CRITICAL**: Never inject `InfiniteMarquee` into every project. It's a specific design choice, not a universal requirement.

### Step 6: Mount Live Interactive Showroom on `localhost:3000`
Read **Block 6** and update the root preview page with an interactive showroom. The showroom MUST:
1. Use real data from `src/data/siteData.ts` (not generic "Button Text" placeholders)
2. Include interactive state demos (clicking pills, toggling switches, testing inputs)
3. Be styled using the actual design tokens so it previews the real aesthetic
4. Only display the components that were actually built (not a generic 6-section showroom)

---

## 4. Personality-Aware Formatting Rules

### Eyebrow/Section Indicator Formats (Choose based on personality)
- **Contemporary / Airy**: `01 · SECTION` or `SECTION` (clean, minimal)
- **Classic / Editorial**: `Section One` or `I. Section` (traditional numbering)
- **Brutalist**: `[01] SECTION` or `SECTION_01` (raw, exposed)
- **Futuristic**: `01 // SECTION` is ALLOWED only if brutalist/tech era is locked
- **Default rule**: Never use `//` separators UNLESS the locked Era is Brutalist or Futuristic AND the prompt explicitly includes them.

### Status Indicator Rules
- Default: Solid calm dot indicator. No pulse/ping unless explicitly requested.
- Exception: If the category is Dashboard and real-time status is needed, subtle pulse is acceptable.

---

## 5. Update Progress & Stop for User Review
1. Update `prompts/IMPLEMENTATION_PROGRESS.md`:
   ```markdown
   # IMPLEMENTATION PROGRESS
   - Category: [Locked from CATEGORY.md]
   - Personality: [Locked 6-Axis Summary]
   - [x] Stage 1: `/2-setup-foundation` (Tokens, Fonts, `siteData.ts` & Foundation Preview)
   - [x] Stage 2: `/3-build-components` (Category-Specific UI Primitives in `src/components/ui/` & Live Showroom on `/`)
   - Components Built: [List actual component files created]
   - [ ] Stage 3: `/4-cards-and-layout`
   - [ ] Stage 4: `/5-navbar-and-footer`
   - [ ] Stage 5: `/6-build-pages`
   - [ ] Stage 6: `/7-animate-website`
   - [ ] Stage 7: `/8-responsive-and-qa`
   - [ ] Stage 8: `/9-seo-and-aeo`
   ```
2. **STOP IMMEDIATELY**: Do NOT build Hero, Cards, Navbar, or Footer yet. Instruct the user to check `http://localhost:3000` to test the component showroom and run `/4-cards-and-layout` when ready.
