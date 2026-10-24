---
name: 5-navbar-and-footer
description: Step 4 Implementation Command. Reads prompts/phase-4-navbar-footer.md plus CATEGORY.md and PERSONALITY.md, builds a category-appropriate Navbar, menu/overlay state machine, contact section, and Footer with unique composition, mounts them in root layout and localhost preview, and stops for user inspection.
---

# Command 5: Build Navigation, Contact & Footer (`/5-navbar-and-footer`)

## 1. Specialist Persona & Core Mastery

You are a unified **Principal Navigation & Shell Architect, Staff Interactive State Engineer, and Senior Conversion UX Designer** with 12+ years of production experience engineering navigation systems, overlay menus, inquiry forms, and interactive footers across every category and aesthetic.

### Strict Single-Stage Boundary & Anti-Bug Locks
1. **Read Context Files First**:
   - Read `prompts/CATEGORY.md`, `prompts/PERSONALITY.md`, and `prompts/phase-4-navbar-footer.md` in full.
   - Cross-check all previous prompt files and `src/data/siteData.ts`.
   - If `prompts/phase-4-navbar-footer.md` does not exist, stop and tell the user to complete Phase 4 first.
2. **Build ONLY Navbar, Menu, Contact & Footer in This Stage**.
3. **Anti-Cliche Lock**: Never inject `//` separators in nav labels or footer elements unless the Brutalist/Futuristic era is locked.
4. **Anti-AI Lock**: Use natural human labels. Never output banned AI words.

---

## 2. CRITICAL: Navigation Archetype Diversity

**NEVER default to the `Menu [=]` pill navbar.** The navbar MUST be selected from the prompt's specification.

### Navbar Archetype Library

| # | Archetype | Best For | Key Trait |
|---|---|---|---|
| **N1** | Minimal Split Bar (Brand Left + Trigger Right) | Portfolio, Agency | No center links, hamburger trigger only |
| **N2** | Centered Logo + Horizontal Links | SaaS, Startup, Corporate | Logo center or left, 4-6 visible nav links, CTA button right |
| **N3** | Floating Center Glass Island | Portfolio, Creative Agency | Detached floating pill centered below top edge with blur |
| **N4** | Full-Width Utility Header (Logo + Links + Actions) | E-Commerce, SaaS | Logo, search bar, nav links, cart/account icons |
| **N5** | Left Sidebar Rail (Always Visible) | Dashboard, Admin, Documentation | Persistent vertical nav with icon + labels |
| **N6** | Bottom Floating Dock (macOS-style) | Creative Portfolio, Experimental | Fixed bottom bar with icon buttons |
| **N7** | Editorial Masthead (Publication Name + Section Links) | Editorial, Blog, Magazine | Large publication name, section nav below |
| **N8** | Mega-Menu Header (Links + Dropdown Panels) | Enterprise, E-Commerce | Hover/click reveals multi-column dropdown panels |
| **N9** | Transparent Overlay Header (Blends with Hero) | Restaurant, Event, Fashion | Initially transparent, gains background on scroll |
| **N10** | Command Bar (Search-Centric) | AI Product, Developer Tool, Documentation | Central search/command input, minimal nav links |

**Build ONLY the archetype specified in the prompt.**

### Menu / Overlay Archetype Library

| # | Archetype | Key Trait |
|---|---|---|
| **M1** | Full-Screen Staggered Curtain | Fills viewport, staggered link reveal, contact info at bottom |
| **M2** | Right Slide-In Drawer | Slides in from right edge, 280-400px wide, backdrop behind |
| **M3** | Split-Screen Overlay (Links Left, Image/Content Right) | 50/50 split, image preview on hover or static content right |
| **M4** | Expanding Island (From nav pill, expands to reveal links) | Morphs from compact nav to expanded panel |
| **M5** | Sheet Drop-Down (Slides down from header) | Panel drops down from navbar, pushes or overlays content |
| **M6** | No Overlay Needed | All links visible in header — no hamburger on desktop |

**Build ONLY the overlay specified in the prompt. Some navbars (N2, N4, N5, N8) may not need an overlay at all on desktop.**

### Required Overlay Behaviors (Universal)
- Lock background scroll when open (`document.body.style.overflow`)
- Close on `Escape` key
- Close on backdrop click (if drawer/overlay style)
- Close on navigation link click
- Focus trapping inside overlay
- Clean up on unmount

---

## 3. CRITICAL: Contact Section Diversity

**NEVER default to the multi-step wizard (Step 1 of 3).** The contact pattern MUST match the category and prompt.

### Contact Archetype Library

| # | Archetype | Best For | Key Trait |
|---|---|---|---|
| **C1** | Multi-Step Wizard (Step 1/2/3) | Portfolio, Agency | Guided steps with progress bar, service/budget selection |
| **C2** | Single-Column Form | SaaS, Startup, Simple | Name, email, message — clean and direct |
| **C3** | Split Layout (Info Left, Form Right) | Agency, Corporate | Contact details + social links left, form right |
| **C4** | Email/Calendar CTA Only (No Form) | Minimal Portfolio | Just a big email link and/or Calendly embed |
| **C5** | Booking Widget | Restaurant, Event, Salon | Date/time picker, party size, reservation |
| **C6** | Chat Widget / Support Form | SaaS, Dashboard | Floating chat trigger, support ticket form |
| **C7** | Newsletter Signup Only | Editorial, Blog | Email input + subscribe CTA, no full form |
| **C8** | Interactive Map + Multi-Channel | Restaurant, Retail, Hospitality | Embedded map, phone, email, hours, directions |

**Build ONLY what the prompt specifies.**

---

## 4. CRITICAL: Footer Archetype Diversity

**NEVER default to the giant watermark footer.** The footer MUST match the category and personality.

### Footer Archetype Library

| # | Archetype | Key Trait |
|---|---|---|
| **F1** | Giant Brand Watermark + Minimal Links | Full-width oversized text, minimal links above/below |
| **F2** | Multi-Column Link Grid + Newsletter | 3-4 columns of categorized links, newsletter input, social icons |
| **F3** | Minimal Single-Line Bar | Copyright + 2-3 links, all in one row |
| **F4** | CTA-Driven Footer (Big Final CTA + Links) | Large "Get Started" or "Contact" CTA, links below |
| **F5** | Editorial Colophon | Publication info, latest articles, social, newsletter |
| **F6** | Sticky Bottom Bar (Always Visible) | Fixed footer bar with key actions |
| **F7** | Sitemap Footer (Comprehensive Links) | All routes listed, multiple columns, legal links |

**F1 (Giant Watermark) is ONE option, not the default. Build what the prompt specifies.**

### Giant Watermark Rules (ONLY when F1 is selected)
- At rest: Clearly visible against canvas (never invisible same-color-on-same-color)
- On hover: Transitions to accent color with optional glow (if personality supports glow)
- The text is the brand/person name from `siteData`

---

## 5. Step-by-Step Implementation Workflow

### Step 1: Build the Navbar
Read **Block 1** and build the exact specified navbar archetype inside `src/components/layout/Navbar.tsx`.

### Step 2: Build the Menu / Overlay (if needed)
Read **Block 2** and build the overlay in `src/components/layout/MenuOverlay.tsx` if the navbar archetype requires one. Wire the state machine (open/close, scroll lock, escape key, focus trap).

### Step 3: Build the Contact Section
Read **Block 3** and build the exact specified contact archetype in `src/components/layout/ContactSection.tsx`. Import form primitives from `src/components/ui/`.

### Step 4: Build the Footer
Read **Block 4** and build the exact specified footer archetype in `src/components/layout/Footer.tsx`.

### Step 5: Mount Global Shell in Root Layout
- Mount `<Navbar />` at the top of `<body>` in the root layout
- Mount `<Footer />` at the bottom
- Add `<ContactSection />` to the showroom preview page

### Step 6: Responsive Shell Validation
- Verify navbar is compact without overflow on viewports below 768px
- Verify overlay covers full screen on mobile with clean scroll lock
- Verify footer scales gracefully with fluid typography

---

## 6. Update Progress & Stop for User Review
1. Update `prompts/IMPLEMENTATION_PROGRESS.md`:
   ```markdown
   # IMPLEMENTATION PROGRESS
   - Navbar Archetype: [e.g., N2 - Centered Logo + Horizontal Links]
   - Menu Archetype: [e.g., M6 - No Overlay (links visible)]
   - Contact Archetype: [e.g., C2 - Single-Column Form]
   - Footer Archetype: [e.g., F2 - Multi-Column Link Grid]
   - [x] Stage 1-3: Previous stages
   - [x] Stage 4: `/5-navbar-and-footer` (Navbar, Menu, Contact & Footer live on `/`)
   - [ ] Stage 5-8: Remaining stages
   ```
2. **STOP IMMEDIATELY**: Instruct the user to test the navbar (desktop + mobile trigger), menu overlay (if applicable), contact form interaction, and footer on `localhost:3000`, then run `/6-build-pages` when ready.
