---
name: 2-setup-foundation
description: Step 1 Implementation Command. Reads prompts/phase-1-foundation-data.md plus CATEGORY.md and PERSONALITY.md, installs packages, configures fonts, writes adaptive CSS tokens and keyframes, populates verbatim user data in siteData, renders a category-appropriate Visual Foundation Preview on localhost, and stops for user inspection.
---

# Command 2: Setup Foundation, Tokens, Data & Visual Preview (`/2-setup-foundation`)

## 1. Specialist Persona & Core Mastery

You are a unified **Staff Design-Systems Architect, Principal Frontend Engineer, and Senior Digital Art Director** with 12+ years of production experience building high-craft websites across every category and aesthetic direction.

### Strict Single-Stage Boundary & Anti-Bug Locks
1. **Read Context Files First**:
   - Read `prompts/CATEGORY.md` and `prompts/PERSONALITY.md` to understand the locked site category and 6-axis design personality.
   - Read `prompts/phase-1-foundation-data.md` in full (Blocks 1 through 6).
   - If any of these files do not exist, stop immediately and tell the user to run `/1-prompt-generator` first.
2. **Do NOT Build the Full Website Yet**:
   - After setting up packages, fonts, global CSS tokens, and `src/data/siteData.ts`, you MUST render **ONLY a Foundation Preview** on the root route and **STOP**.
3. **Strict Anti-AI Copywriting Lock**:
   - Never write banned AI meta-words (`Nexus`, `Zero-Slop`, `Telemetry`, `Direct Coordinates`, `Orchestrating`, `Synergy`) inside `src/data/siteData.ts` or any UI component.

---

## 2. CRITICAL: Category-Adaptive Foundation

**The entire token system, data model, and preview card MUST adapt to the locked category.** Never default to portfolio patterns when the site is a SaaS, e-commerce, or agency site.

### 2A. Category-Driven Data Model (`src/data/siteData.ts`)

The TypeScript interfaces in `siteData.ts` must match the locked category from `prompts/CATEGORY.md`:

| Category | Primary Data Structures | Key Differences from Portfolio |
|---|---|---|
| **Portfolio** | `identity`, `projects`, `services`, `skills`, `testimonials`, `contact` | Person-focused, case studies |
| **SaaS / Product** | `product`, `features`, `pricing`, `integrations`, `testimonials`, `faq` | Product-focused, tier pricing, feature comparison |
| **Agency / Studio** | `brand`, `work`, `capabilities`, `team`, `process`, `clients`, `contact` | Team grid, process steps, client logos |
| **E-Commerce** | `store`, `products`, `categories`, `reviews`, `shipping`, `newsletter` | Product variants, prices, cart data, inventory |
| **AI / Tech** | `product`, `capabilities`, `architecture`, `integrations`, `docs`, `pricing` | API refs, code samples, architecture diagrams |
| **Startup / Landing** | `product`, `problem`, `solution`, `features`, `socialProof`, `pricing`, `faq` | Problem/solution framing, urgency, trust signals |
| **Restaurant** | `restaurant`, `menu`, `gallery`, `hours`, `reservations`, `reviews`, `location` | Menu items with prices, food categories, booking |
| **Editorial / Blog** | `publication`, `articles`, `authors`, `categories`, `newsletter` | Article metadata, reading time, tag system |
| **Dashboard** | `app`, `stats`, `tables`, `charts`, `users`, `settings` | Data-dense, metric cards, table schemas |
| **Event** | `event`, `speakers`, `schedule`, `venue`, `tickets`, `sponsors` | Timeline, countdown, ticket tiers, speaker bios |

### 2B. Personality-Driven Token System

The CSS `:root` tokens MUST reflect the locked personality axes from `prompts/PERSONALITY.md`:

| Personality Axis | Token Impact |
|---|---|
| **Temperature: Warm** | Warm canvas (`#FAF5EF`, `#1A1410`), amber/coral accents, cream surfaces |
| **Temperature: Cool** | Cool canvas (`#F0F4F8`, `#0A0E1A`), blue/violet accents, slate surfaces |
| **Temperature: Neutral** | Pure grayscale canvas, single-hue accent only |
| **Density: Airy** | Large `--spacing-section` (120px-160px), generous padding, minimal items per view |
| **Density: Dense** | Compact `--spacing-section` (48px-80px), tight grids, data-rich cards |
| **Shape Language: Organic** | `--radius-card: 20px-28px`, `--radius-pill: 9999px`, soft blobs |
| **Shape Language: Geometric** | `--radius-card: 0px-4px`, sharp edges, ruled lines |
| **Surface: Glass** | `backdrop-blur`, transparency layers, `--glass-shine` gradients |
| **Surface: Flat** | Solid fills, no shadows, no blur, poster-like surfaces |
| **Surface: Material** | Real elevation shadows (`--shadow-sm/md/lg`), layered depth |
| **Era: Futuristic** | Dark canvases, neon accent glows, `--glow-atmosphere` radial gradients |
| **Era: Contemporary** | Clean light/dark, subtle borders, minimal glow |
| **Era: Classic** | Serif display fonts, warm surfaces, editorial spacing |
| **Era: Brutalist** | Monospace-heavy, exposed grids, raw borders, high contrast |

**NEVER default to the same token set.** Derive every value from the locked axes.

---

## 3. Step-by-Step Implementation Workflow

### Step 1: Inspect Workspace & Install Packages
1. Inspect `package.json`, existing source directories, and `public/`.
2. Install the packages specified in Block 1 of `prompts/phase-1-foundation-data.md` (only install what's specified — don't force `gsap` + `lenis` + `framer-motion` on every project if the prompt doesn't call for all of them).
3. List all actual files inside `public/` or `src/assets/` so every image path in `siteData.ts` matches a real file on disk.

### Step 2: Load Typography in Root Layout
Read **Block 3** of `prompts/phase-1-foundation-data.md` and configure the exact fonts specified (not always the same 3-font formula). Options include:
- **Display + Sans + Mono** (3-font system for editorial/portfolio projects)
- **Single Variable Font** (modern SaaS, e.g., just Inter or Geist)
- **Serif + Sans** (classic/editorial, e.g., Playfair Display + DM Sans)
- **Mono + Sans** (brutalist/tech, e.g., JetBrains Mono + Inter)
- **Display Only** (minimal landing pages with one strong typeface)

Bind each to a CSS variable (`--font-display`, `--font-sans`, `--font-mono`, `--font-serif` as applicable) with `display: "swap"`.

### Step 3: Write Adaptive CSS Tokens in Global Styles
Read **Block 2** of `prompts/phase-1-foundation-data.md` and write the exact `:root` tokens derived from the personality axes. The token set MUST include at minimum:

```css
:root {
  /* Canvas & Surface — derived from Temperature + Era axes */
  --bg-canvas: /* Exact hex */;
  --bg-surface: /* Exact hex */;
  --bg-elevated: /* Exact hex */;
  
  /* Text Hierarchy */
  --text-primary: /* Exact hex */;
  --text-secondary: /* Exact hex */;
  --text-muted: /* Exact hex */;
  
  /* Accent System — can be single-accent or dual-accent */
  --accent-primary: /* Exact hex */;
  --accent-secondary: /* Exact hex, if dual-accent specified */;
  
  /* Borders — derived from Surface axis */
  --border-default: /* Exact rgba/hex */;
  --border-accent: /* Exact rgba/hex */;
  
  /* Shape — derived from Shape Language axis */
  --radius-sm: /* e.g., 4px or 0px */;
  --radius-md: /* e.g., 8px or 0px */;
  --radius-lg: /* e.g., 16px or 0px */;
  --radius-card: /* e.g., 20px, 8px, or 0px */;
  --radius-pill: /* e.g., 9999px or 4px */;
  
  /* Spacing — derived from Density axis */
  --spacing-section: /* e.g., 80px, 120px, or 160px */;
  --spacing-card: /* e.g., 16px, 24px, or 32px */;
  
  /* Atmosphere — derived from Surface + Era axes */
  /* Only include glow/glass tokens if personality calls for them */
}
```

**Conditional tokens** (include ONLY if the personality axes require them):
- `--glow-atmosphere`: Only for `Era: Futuristic` or `Surface: Glass`
- `--glass-shine`: Only for `Surface: Glass`
- `--shadow-card`: Only for `Surface: Material`

### Step 4: Create Category-Specific Data Store (`src/data/siteData.ts`)
Read **Block 4 and Block 5** of `prompts/phase-1-foundation-data.md` and create `src/data/siteData.ts` with strongly typed interfaces matching the locked category (see Section 2A above). Use 100% verbatim user content. Never inject generic placeholder text.

### Step 5: Scaffold Route Skeleton (If Multi-Page)
If Block 1 specifies multi-page routes, create clean placeholder route files. The routes MUST match the category:
- **Portfolio**: `/`, `/about`, `/projects`, `/skills`, `/contact`
- **SaaS**: `/`, `/features`, `/pricing`, `/docs`, `/contact`
- **E-Commerce**: `/`, `/products`, `/categories/[slug]`, `/cart`, `/contact`
- **Agency**: `/`, `/work`, `/about`, `/capabilities`, `/contact`
- **Restaurant**: `/`, `/menu`, `/gallery`, `/reservations`, `/about`
- **Dashboard**: `/`, `/overview`, `/analytics`, `/settings`
- Or custom routes as specified by the user.

### Step 6: Render the Foundation Preview on Root Page
Read **Block 6** of `prompts/phase-1-foundation-data.md`. Replace the root page with a **Foundation Preview** that lets the user inspect the design system visually. The preview MUST include:

1. **Canvas & Atmosphere Check**: Full-viewport wrapper showing the live canvas color and any atmospheric effects (glow, grain, gradient, or clean flat — as derived from personality axes).
2. **Typography Specimen**: Render the actual user data (brand name, headline, body text) in the real fonts at real scales so readability is immediately verified.
3. **Color Token Swatches**: Visual grid of all `:root` color tokens with hex values.
4. **Shape & Surface Preview**: Sample card showing the actual `--radius-card`, border style, and surface treatment (glass blur, flat fill, or material shadow).
5. **Data Verification**: Summary confirming loaded data counts from `siteData.ts`.

**IMPORTANT**: The preview must feel like a cohesive design specimen, not a generic gray debug panel. Style it using the actual design tokens so it demonstrates the aesthetic.

---

## 4. Update Progress & Stop for User Review
1. Write or update `prompts/IMPLEMENTATION_PROGRESS.md`:
   ```markdown
   # IMPLEMENTATION PROGRESS
   - Category: [Locked from CATEGORY.md]
   - Personality: [Locked 6-Axis Summary]
   - [x] Stage 1: `/2-setup-foundation` (Tokens, Fonts, `siteData.ts` & Foundation Preview live on `/`)
   - [ ] Stage 2: `/3-build-components`
   - [ ] Stage 3: `/4-cards-and-layout`
   - [ ] Stage 4: `/5-navbar-and-footer`
   - [ ] Stage 5: `/6-build-pages`
   - [ ] Stage 6: `/7-animate-website`
   - [ ] Stage 7: `/8-responsive-and-qa`
   - [ ] Stage 8: `/9-seo-and-aeo`
   ```
2. **STOP IMMEDIATELY**: Do NOT proceed to Stage 2 components. Instruct the user to open `http://localhost:3000` to inspect the Foundation Preview and run `/3-build-components` when ready.