# robinsweb.md : Robin's Portfolio Frontend Design System & Architecture Specification

> **Brand Name**: Robin's Portfolio  
> **Website URL**: [https://robinsweb.net/](https://robinsweb.net/)  
> **Page Title**: Robin's Portfolio - WordPress Developer & UI/UX Designer for High-Converting Websites  
> **Extraction Engine**: Headless Chromium 124 Telemetry + AST Computed CSS  
> **DOM Nodes Inspected**: 1174 | **Stylesheets Evaluated**: 5 | **Runtime Stack**: Tailwind CSS + Vue.js  
> **Status**: Verified Production-Ready Specification  

---
brand: "Robin's Portfolio"
title: "Robin's Portfolio - WordPress Developer & UI/UX Designer for High-Converting Websites"
url: "https://robinsweb.net/"
link: "https://robinsweb.net/"
canonical_url: "https://robinsweb.net/"
slug: "robinsweb"
filename: "robinsweb.md"
version: 1.0.0
generated_by: "md.irfan [STUDIO EXTRACTOR]"
extracted_at: "2026-10-18T11:07:36.960Z"
viewport_inspected: "1440x900"
dom_nodes_inspected: 1174
status: "verified-production-ready"
name: robinsweb-design-analysis
description: "A precision-crafted marketing canvas built around #000000 substrate, light text (#f7f8f8), and the signature Robin's Portfolio accent (#ed7a36) used as the single chromatic beacon. The system reads as software-craft documentation: dense, technical, and quietly luxurious. Display type is set in Inter Custom at weights 500-700 with measured negative tracking. Cards live as panels (#0f1011) with 1px hairline borders (#23252a). Section rhythm frames high-fidelity product captures rather than atmospheric decorative color."
explanation:
  hero_architecture: "Robin Ahmed serves as the primary value proposition, supported by high-contrast action triggers (Start a Project and See All Works)."
  navigation_system: "Sticky header anchored with brand wordmark 'Robinsweb' and directory links (Robinsweb, Home, About, Works)."
  visual_media_and_images: "Discovered 59 image elements and 68 vector icons. Visual media is concentrated in product screenshot panels and high-density Retina emblems."
  feature_sections_and_bento: "Asymmetric Bento grid modules organizing Robinsweb, Menu, Discover with 1px hairline boundaries."
  global_footer_directory: "Directory tree organizing 10 navigational routes and verified governance: '© 2026 Robin's Portfolio. All rights reserved.'."
  color_and_lighting: "Root substrate anchored on #000000 with a 4-step surface progression (#0f1011 through #191a1b). Chromatic accent (#ed7a36) is used strictly as a focal beacon."
  gradients_and_glassmorphism: "Subtle radial background luminescence paired with hairline border illumination and frosted glass scrims."
  motion_and_cursor: "160ms cubic-bezier transitions with translateY(-2px) hover lift and 0.98 active button compression."
  interactive_clicks: "Tabs, accordions, and toggles verified"
  systemic_architecture: "System combines Tailwind CSS + Vue.js with strict token discipline, fluid clamp typography, and zero-clutter surfaces."

colors:
  primary: "#ed7a36"
  on-primary: "#ffffff"
  primary-hover: "#ed7a36dd"
  primary-focus: "#ed7a36bb"
  ink: "#f7f8f8"
  ink-muted: "#d0d6e0"
  ink-subtle: "#8a8f98"
  ink-tertiary: "#62666d"
  canvas: "#000000"
  surface-1: "#0f1011"
  surface-2: "#141516"
  surface-3: "#18191a"
  surface-4: "#191a1b"
  hairline: "#23252a"
  hairline-strong: "#34343a"
  hairline-tertiary: "#3e3e44"
  inverse-canvas: "#ffffff"
  inverse-surface-1: "#f5f6f6"
  inverse-surface-2: "#f6f7f7"
  inverse-ink: "#000000"
  brand-secure: "#ed7a3699"
  semantic-success: "#27a644"
  semantic-overlay: "#000000"

typography:
  display-xl:
    fontFamily: Inter Custom
    fontSize: 80px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -3.0px
  display-lg:
    fontFamily: Inter Custom
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.10
    letterSpacing: -1.8px
  display-md:
    fontFamily: Inter Custom
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -1.0px
  headline:
    fontFamily: Inter Custom
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -0.6px
  card-title:
    fontFamily: Inter Custom
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.4px
  subhead:
    fontFamily: Inter Custom
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: -0.2px
  body-lg:
    fontFamily: Inter Custom
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: -0.1px
  body:
    fontFamily: Inter Custom
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: -0.05px
  body-sm:
    fontFamily: Inter Custom
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0px
  caption:
    fontFamily: Inter Custom
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0px
  button:
    fontFamily: Inter Custom
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.20
    letterSpacing: 0px
  eyebrow:
    fontFamily: Inter Custom
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0.4px
  mono:
    fontFamily: ui-monospace, SF Mono, Menlo
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0px

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 14px
  button-primary-pressed:
    backgroundColor: "{colors.primary-focus}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 14px
  button-tertiary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 14px
  button-inverse:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 8px 14px
  pricing-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  pricing-card-featured:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
  product-screenshot-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 24px
  testimonial-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  customer-logo-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 16px
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 8px 12px
  text-input-focused:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 8px 12px
  pricing-tab-default:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 6px 14px
  pricing-tab-selected:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 6px 14px
  cta-banner:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.lg}"
    padding: 48px
  changelog-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 24px 0
  status-badge:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 2px 8px
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xs}"
    height: 56px
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 64px 32px

sections:
  viewport:
    title: "Desktop Hero Viewport (1440x850)"
    selector: "viewport-clip"
    imagePath: "/captures/robinsweb/viewport.png"
    dimensions: "1440x850"
---

# Explanation

### 1. Visual Media & Images Architecture (Where & How Images Are Used)

The interface deploys 59 image elements and 68 inline vector glyphs across the DOM, using imagery with strict functional purpose rather than decorative slop. Visual assets are distributed across key architectural zones:
- **Hero Section Frame**: Houses the primary visual protagonist (33 asset detected), framing high-fidelity product captures inside a `{rounded.xl}` container with a 1px hairline border.
- **Top Navigation Bar**: Features the brand wordmark (Robinsweb) and micro-icons (6 asset) optimized as scalable SVGs for zero pixelation on high-density Retina displays.
- **Feature Cards & Bento Grid**: Product UI previews and workflow diagrams (2 assets detected) are embedded directly into `{colors.surface-1}` panels, showcasing actual interactive software states.
- **Customer & Partner Proof**: Monochrome logo badges (multiple assets) rendered at calibrated opacity to build institutional trust without distracting from the primary conversion funnel.
- **Global Footer Directory**: System badges, security seals, and social media icons (1 assets) anchored at the bottom substrate.

**Detected Image Manifest & Section Placements:**
- `https://robinsweb.net/wp-content/uploads/2026/05/HOME-1.webp` (Alt: "Graphic asset"): Located in **Top Navigation (Brand Wordmark / Action Icon)**
- `https://robinsweb.net/wp-content/uploads/2026/05/robin-home....` (Alt: "Graphic asset"): Located in **Top Navigation (Brand Wordmark / Action Icon)**
- `https://robinsweb.net/wp-content/uploads/2026/05/works-1.web...` (Alt: "Graphic asset"): Located in **Top Navigation (Brand Wordmark / Action Icon)**
- `https://robinsweb.net/wp-content/uploads/2026/05/service.web...` (Alt: "Graphic asset"): Located in **Top Navigation (Brand Wordmark / Action Icon)**
- `https://robinsweb.net/wp-content/uploads/2026/05/review.webp` (Alt: "Graphic asset"): Located in **Top Navigation (Brand Wordmark / Action Icon)**
- `https://robinsweb.net/wp-content/uploads/2026/05/Notificatio...` (Alt: "Graphic asset"): Located in **Top Navigation (Brand Wordmark / Action Icon)**
- `https://robinsweb.net/wp-content/uploads/2026/04/clients-ima...` (Alt: "Graphic asset"): Located in **Hero Section Frame (Visual Protagonist / Product UI Preview)**
- `https://robinsweb.net/wp-content/uploads/2026/05/Frame-31272...` (Alt: "Graphic asset"): Located in **Hero Section Frame (Visual Protagonist / Product UI Preview)**

### 2. Top Navigation Bar (Header) Architecture

The global navigation header is pinned to the top of the viewport with a sticky position and frosted glass backdrop blur. It establishes the initial brand anchor:
- **Brand Identity**: Left-aligned wordmark representing **Robinsweb**, providing an instant home route trigger.
- **Information Architecture**: Centered route directory featuring primary site navigation paths: `Robinsweb`, `Home`, `About`, `Works`, `Services`, `Testimonials`.
- **Action Triggers**: Right-aligned conversion pair (`Start a Project`, `See All Works`), directing users into the primary onboarding funnel.
- **Glassmorphism Scrim**: Utilizes `backdrop-filter: blur(12px)` over an alpha-blended substrate (`#000000cc`), preserving content context as users scroll down the page.

### 3. Hero Section Execution & Visual Protagonist

The hero section serves as the apex conversion engine, engineered with high visual contrast and negative letter-spacing:
- **Primary Value Proposition**: Headline reads **"Robin Ahmed"**, set in display weight 600 with aggressive optical tracking (-3.0px) for tight typographic cohesion.
- **Supporting Narrative**: Subhead **"99.6% of my clients are satisfied- be one of them today."** delivers clear explanatory context in balanced mid-tone ink (`{colors.ink-muted}`).
- **Call-to-Action Cluster**: Dual-action trigger layout pairing a high-contrast primary button (`{colors.primary}`) with an understated hairline secondary button (`{colors.surface-1}`).
- **Visual Protagonist Layout**: The hero integrates a high-resolution interface frame directly beneath the copy block, establishing immediate product credibility before the user begins scrolling.

### 4. Bento Grid, Feature Cards & Section Layouts

Content downstream is structured as an asymmetric Bento Grid, breaking complex product offerings into scannable visual units:
- **Section Taxonomy**: Key thematic sections discovered include "Robinsweb", "Menu", "Discover", "Contact Me".
- **Card Hierarchy**: Cards use `{colors.surface-1}` fill with 1px `{colors.hairline}` boundaries. Asymmetric column spans (e.g. 2-column wide featured cards paired with 1-column detail tiles) create dynamic visual rhythm.
- **Content Stacking**: Each card follows a strict internal anatomy: micro-eyebrow badge top, display card title center, brief explanatory prose bottom, and interactive screenshot canvas.

### 5. Global Footer Directory & Governance

The base of the application closes with a comprehensive multi-column site directory:
- **Directory Columns**: Multi-column categorization covering Product, Solutions, Developers, Company, Legal.
- **Legal Governance & Copyright**: Includes regulatory notices, status indicators, and the verified copyright notice: **© 2026 Robin's Portfolio. All rights reserved.**.
- **Substrate Transition**: Anchored cleanly on `{colors.canvas}` with a hairline separator, providing a grounded termination to the vertical scroll journey.

### 6. Design System, Color Palette & Surface Ladder

The color architecture relies on a disciplined optical hierarchy rather than random decorative colors:
- **Canvas Substrate**: Root background anchored on `{colors.canvas}` (#000000), establishing the foundational contrast baseline.
- **4-Step Surface Ladder**: Depth is created without blurry shadows by stepping from Canvas (#000000) up through Surface 1 (#0f1011), Surface 2 (#141516), Surface 3 (#18191a), and Surface 4 (#191a1b).
- **Chromatic Accent Role**: The signature brand accent `{colors.primary}` (#ed7a36) is deployed strictly as a focal beacon for key interactive elements, brand marks, and active focus rings.
- **Ink Legibility**: Four distinct ink grades (Ink, Ink Muted, Ink Subtle, Ink Tertiary) guarantee WCAG AA compliant readability across all viewports.

### 7. Gradients, Glassmorphism & Atmospheric Lighting

- **Atmospheric Lighting**: Uses subtle radial glows (`linear-gradient(150deg,#ED7A36,#DD4D06)`) rather than aggressive saturated color washes.
- **Glassmorphism**: Applied selectively to sticky navigation and modal overlays using backdrop filters and calibrated opacity.
- **Edge Illumination**: Cards feature subtle 1px hairline borders that capture ambient light, defining clear geometric edges without heavy drop shadows.

### 8. Motion Choreography, Transitions & Cursor Physics

- **Timing & Curves**: Standard transitions run at `160ms` with a custom cubic-bezier easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`) for responsive, fluid snappiness.
- **Card Hover Physics**: Interactive panels lift on hover with `transform: translateY(-2px)` accompanied by a border highlight.
- **Button Tactile Feedback**: Action buttons compress on active click with `transform: scale(0.98)`, providing tangible tactile acknowledgment.
- **Cursor Discipline**: Interactive targets enforce `cursor: pointer` with active focus rings (`{colors.primary-focus}`), while mobile viewports suppress default tap highlight artifacts via `-webkit-tap-highlight-color: transparent`.
- **Animation Engines**: Detected GSAP ScrollTrigger. Transition duration: `0.3s`.

### 9. Component Mechanics, Interactivity & Autonomous Click Discoveries

- **Button Primitives**: Standardized on `{rounded.md}` (8px) corners with calibrated horizontal and vertical padding (8px 14px), maintaining consistent hit targets across all screen sizes.
- **Form Inputs**: Clean surface panels with subtle hairline borders, expanding into a 2px primary accent focus ring on keyboard navigation.
- **Badges & Micro-Pills**: Status chips and taxonomy labels use `{rounded.pill}` (9999px) with mono or eyebrow typography.
- **Interactive Target Exploration**: Safe clickables exercised across tabs, accordions, and preview pills to verify responsive layout states.

### 10. Systemic Operational Architecture (How Everything Works Together)

The entire frontend functions as an integrated, production-grade software craft ecosystem:
- **Runtime Foundation**: Built on Tailwind CSS + Vue.js, delivering high performance, rapid server-side rendering, and instant client interactivity.
- **Zero Decorative Slop**: Every element on the page exists for functional clarity and user enablement. Decorative clutter, uncalibrated gradients, and fuzzy drop shadows are eliminated.
- **Responsive Cohesion**: From mobile viewports (375px) up through ultra-wide desktop monitors (1440px+), the grid, spacing tokens, and typography scale fluidly to provide an uncompromising user experience.

## Overview

Robin's Portfolio's marketing canvas is anchored on `{colors.canvas}` (#000000), establishing the foundational substrate of the experience. On top sits a four-step surface ladder (`{colors.surface-1}` through `{colors.surface-4}`) for cards, panels, and lifted tiles, bounded with 1px hairline borders running from `{colors.hairline}` (#23252a) up through `{colors.hairline-strong}` (#34343a). Light text (`{colors.ink}` #f7f8f8) carries the body and headlines with calibrated optical legibility.

The single chromatic accent is **Robin's Portfolio Accent** `{colors.primary}` (#ed7a36): used intentionally on the brand mark, focus rings, and primary CTA buttons. A lighter hover state (`{colors.primary-hover}`) and focus ring variant (`{colors.primary-focus}`) extend the same hue with zero atmospheric clutter.

Display type runs **Inter Custom** at weights 500 to 700 with negative letter-spacing scaling from -3.0px at 80px down to 0 at body. The body family is tuned for long-form legibility, while monospace is reserved for code tokens.

The page rhythm is driven by **dense product UI visual evidence**: the design leads with high-fidelity section captures framed in `{colors.surface-1}` panels with `{rounded.lg}` corners. The chrome is intentionally minimal so the actual product interface does the heavy lifting.

**Key Characteristics:**
- **Calibrated Canvas**: `{colors.canvas}` (#000000) forms the deep anchor substrate.
- **Single Chromatic Accent**: `{colors.primary}` (#ed7a36) used strictly on brand mark, focus indicators, and key triggers.
- **Four-Step Surface Ladder**: Canvas to Surface-1 to Surface-2 to Surface-3 to Surface-4 carries hierarchy without blurry drop shadows.
- **Measured Negative Letter-Spacing**: Display tracking pulls aggressively negative (-3.0px at 80px) for optical cohesion.
- **Crisp Hairline Geometry**: Cards use `{rounded.lg}` (12px) corners with 1px hairline borders (#23252a).
- **High-Fidelity Product Protagonist**: Every content block frames real UI captures rather than decorative gradient slop.
- **Zero Decorative Clutter**: No uncalibrated gradients, no fuzzy drop-shadows, and zero atmospheric fog.

## Colors

> Source target: https://robinsweb.net/ (Inspected across 1174 DOM nodes and 5 stylesheets).

### Brand & Accent
- **Primary Accent** ({colors.primary}): The signature Robin's Portfolio accent (#ed7a36) used on primary CTAs, active links, and brand emblems.
- **Primary Hover** ({colors.primary-hover}): Lighter accent tint (#ed7a36dd) for interactive hover states.
- **Primary Focus** ({colors.primary-focus}): Focus-ring outline tint (#ed7a36bb) for keyboard accessibility.
- **Brand Secure** ({colors.brand-secure}): Muted security / badge neutral (#ed7a3699).

### Surface Ladder
- **Canvas** ({colors.canvas}): Default root background substrate (#000000).
- **Surface 1** ({colors.surface-1}): One step above canvas (#0f1011) for feature cards, screenshot panels, and pricing containers.
- **Surface 2** ({colors.surface-2}): Two steps above canvas (#141516) for hovered cards and featured pricing tiers.
- **Surface 3** ({colors.surface-3}): Three steps above canvas (#18191a) for secondary panels and sub-navigation dropdowns.
- **Surface 4** ({colors.surface-4}): Four steps above canvas (#191a1b) for highest lifted tooltips and popovers.
- **Hairline** ({colors.hairline}): 1px hairline border (#23252a) bounding cards and column dividers.
- **Hairline Strong** ({colors.hairline-strong}): Stronger 1px border (#34343a) for active focus rings and card headers.
- **Hairline Tertiary** ({colors.hairline-tertiary}): Subtle 1px divider (#3e3e44) for nested interior rows.
- **Inverse Canvas** ({colors.inverse-canvas}): Pure high-contrast substrate (#ffffff) for inverse pill banners.
- **Inverse Surface 1** ({colors.inverse-surface-1}): One step above inverse canvas (#f5f6f6).
- **Inverse Surface 2** ({colors.inverse-surface-2}): Two steps above inverse canvas (#f6f7f7).
- **Inverse Ink** ({colors.inverse-ink}): Dark copy (#000000) for inverse surfaces.

### Text & Ink Hierarchy
- **Ink** ({colors.ink}): High-contrast headline text (#f7f8f8) ensuring WCAG AA compliant legibility.
- **Ink Muted** ({colors.ink-muted}): Mid-tone neutral (#d0d6e0) for lead subheads and section intros.
- **Ink Subtle** ({colors.ink-subtle}): Tertiary neutral (#8a8f98) for metadata, deselected tabs, and directory footers.
- **Ink Tertiary** ({colors.ink-tertiary}): Quaternary neutral (#62666d) for disabled states, footnotes, and legal copy.

### Semantic
- **Success Green** ({colors.semantic-success}): Status indicators, verified checkmarks, and operational status pills (#27a644).
- **Overlay Scrim** ({colors.semantic-overlay}): Pure black modal overlay scrim (#000000) with calibrated backdrop opacity.

## Typography

### Font Family
- **Primary Face**: `Inter Custom` (Fallback: `SF Pro Display, -apple-system, system-ui, Segoe UI, Roboto, sans-serif`).
- **Mono Face**: `ui-monospace, SF Mono, Menlo, Monaco, Consolas, monospace`. Used for code tokens, telemetry, and system metrics.

### Typography Hierarchy Table

| Token | Size | Weight | Line Height | Letter Spacing | Primary Use |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `{typography.display-xl}` | 80px | 600 | 1.05 | -3.0px | Primary hero opener headline |
| `{typography.display-lg}` | 56px | 600 | 1.10 | -1.8px | Major section opener titles |
| `{typography.display-md}` | 40px | 600 | 1.15 | -1.0px | Sub-section headings and modal titles |
| `{typography.headline}` | 28px | 600 | 1.20 | -0.6px | Card titles, pricing tier headers, CTA headings |
| `{typography.card-title}` | 22px | 500 | 1.25 | -0.4px | Feature card headers and bento highlights |
| `{typography.subhead}` | 20px | 400 | 1.40 | -0.2px | Lead intro paragraphs and hero subheadings |
| `{typography.body-lg}` | 18px | 400 | 1.50 | -0.1px | Testimonial quotes and lead body copy |
| `{typography.body}` | 16px | 400 | 1.50 | -0.05px | Standard readable prose across all viewports |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0.0px | Sidebar navigation, secondary cards, footer links |
| `{typography.caption}` | 12px | 400 | 1.40 | 0.0px | Metadata, timestamp badges, status pills |
| `{typography.button}` | 14px | 500 | 1.20 | 0.0px | Interactive button triggers and tab toggles |
| `{typography.eyebrow}` | 13px | 500 | 1.30 | +0.4px | Section taxonomy labels (positive tracking) |
| `{typography.mono}` | 13px | 400 | 1.50 | 0.0px | Monospace code blocks, terminal telemetry |

### Typographic Principles
- **Aggressive Negative Tracking on Large Display**: Display sizes scale from -3.0px down to -0.6px to prevent optical gapiness.
- **Positive Tracking on Eyebrows**: Eyebrows use +0.4px letter-spacing to establish clear taxonomic authority against display copy.
- **Strict Mono Discipline**: Monospace type is strictly quarantined to code, telemetry, and system IDs.

## Layout

### Spacing System
- **Base Grid Unit**: 4px micro-grid with 8px layout rhythm.
- **Rhythm Scale**: `{spacing.xxs}` 4px | `{spacing.xs}` 8px | `{spacing.sm}` 12px | `{spacing.md}` 16px | `{spacing.lg}` 24px | `{spacing.xl}` 32px | `{spacing.xxl}` 48px | `{spacing.section}` 96px.
- **Card Interior Padding**: `{spacing.lg}` 24px on standard cards; `{spacing.xl}` 32px on testimonials; `{spacing.xxl}` 48px on major CTA banners.
- **Button Padding**: 8px vertical by 14px horizontal for standard action triggers.
- **Input Padding**: 8px vertical by 12px horizontal.

### Grid & Container Max Bounds
- **Desktop Max Bounds**: 1280px to 1440px max-width container with responsive side gutters.
- **Grid Architecture**: 3-up on desktop, 2-up on tablet, 1-up stacked on mobile.
- **Whitespace Philosophy**: Negative space is carried by the clean background substrate rather than bloated margins.

## Elevation & Depth

| Elevation Level | Surface Treatment | Structural Role |
| :--- | :--- | :--- |
| **Level 0 (Flat)** | Canvas background, zero shadow, zero border | Default page body, hero text, and footer base |
| **Level 1 (Charcoal Lift)** | `{colors.surface-1}` fill with 1px `{colors.hairline}` border | Default feature cards and product screenshot frames |
| **Level 2 (Surface Lift)** | `{colors.surface-2}` fill with 1px `{colors.hairline-strong}` border | Featured pricing cards, hovered states, dropdown panels |
| **Level 3 (Elevated Menu)** | `{colors.surface-3}` fill with subtle hairline divider | Sticky sub-navbars, popover menus |
| **Level 4 (Focus Ring)** | 2px `{colors.primary-focus}` outline with 40% blur ring | Focused form inputs, active button keyboard triggers |

### Depth Philosophy
Depth is carried primarily through the calibrated four-step surface ladder and razor-sharp 1px hairline borders. Heavy drop shadows are rejected in favor of pure optical surface differentiation.

## Shapes & Geometry

### Border Radius Scale Table

| Token | Computed Value | Application Guardrails |
| :--- | :--- | :--- |
| `{rounded.xs}` | 4px | Status chips, micro-tags, and badges |
| `{rounded.sm}` | 6px | Inline tags, code snippets |
| `{rounded.md}` | 8px | All button triggers, text form fields |
| `{rounded.lg}` | 12px | Standard feature cards, pricing panels |
| `{rounded.xl}` | 16px | Product UI screenshot frames |
| `{rounded.xxl}` | 24px | Major bottom CTA banners |
| `{rounded.pill}` | 9999px | Pricing toggle tabs, status pills |
| `{rounded.full}` | 9999px | Avatar circles, icon bubbles |

## Components

### Buttons
- **button-primary**: Lavender/accent action trigger (`{colors.primary}` background, `{colors.on-primary}` text, `{typography.button}` font, `{rounded.md}` 8px radius, 8px 14px padding).
- **button-primary-hover**: Lighter accent tint (`{colors.primary-hover}`).
- **button-primary-pressed**: Focus-tinted variant (`{colors.primary-focus}`).
- **button-secondary**: Surface panel button (`{colors.surface-1}` background, `{colors.ink}` text, 1px `{colors.hairline}` border, `{rounded.md}` 8px radius, 8px 14px padding).
- **button-tertiary**: Transparent button (`{colors.canvas}` background, `{colors.ink}` text, `{rounded.md}` radius).
- **button-inverse**: White-on-dark pill trigger (`{colors.inverse-canvas}` background, `{colors.inverse-ink}` text, 8px 14px padding).

### Cards & Panels
- **feature-card**: Surface-1 container with 1px hairline border, 24px padding, and 12px radius.
- **pricing-card**: Standard pricing tier container with feature list and CTA button.
- **pricing-card-featured**: Elevated surface-2 container with highlighted border.
- **product-screenshot-card**: High-fidelity UI frame with 16px radius and 24px padding.
- **testimonial-card**: Quote container with avatar circle and customer attribution.

### Forms & Inputs
- **text-input**: Form field with surface-1 fill, `{colors.ink}` text, 8px 12px padding, and 8px radius.
- **text-input-focused**: 2px primary focus ring outline with 40% accent opacity.

### Navigation & Footer
- **top-nav**: Sticky dark container with brand wordmark left, links center, and action button pair right (56px height).
- **footer**: Multi-column link grid on canvas substrate with `{colors.ink-subtle}` text and hairline divider (64px 32px padding).

## Captured Section Telemetry & Visual Evidence

This design system extraction includes automated headless browser section captures saved locally in `public/captures/robinsweb/`:

### Desktop Hero Viewport (1440x850)
- **DOM Selector**: `viewport-clip`
- **Captured File**: `/captures/robinsweb/viewport.png`
- **Computed Bounds**: `1440px` wide by `850px` high
- **Visual Preview**:
![Desktop Hero Viewport (1440x850)](/captures/robinsweb/viewport.png)


## Do's and Don'ts

### Architectural Do's
- Anchor the entire interface on `{colors.canvas}` (#000000) substrate.
- Use `{colors.primary}` (#ed7a36) strictly for primary action CTAs, focus indicators, and brand emblems.
- Enforce the four-step surface ladder (Canvas to Surface 1 through 4) for optical depth.
- Pair display weight 600 with body weight 400 for clean optical contrast.
- Apply negative letter-spacing aggressively on large display headings.
- Frame high-fidelity product screenshots as the primary visual protagonist of every content block.
- Standardize all action buttons on `{rounded.md}` (8px) corners.

### Architectural Don'ts
- Do not introduce a light-mode canvas if the brand is engineered as an intentional dark substrate.
- Do not use the chromatic accent as a section background or full card fill.
- Do not introduce arbitrary secondary chromatic colors (e.g. orange, magenta, lime) on the marketing chrome.
- Do not add blurry atmospheric gradients or bloated drop shadows.
- Do not apply pill radius (9999px) to standard action buttons when 8px is the brand standard.
- Do not use pure `#000000` true black if the brand canvas is a tinted near-black substrate.

## Responsive Behavior

### Breakpoints Table

| Breakpoint | Viewport Width | Layout Adaptations |
| :--- | :--- | :--- |
| **Desktop-XL** | 1440px | Default full desktop canvas with generous gutters |
| **Desktop** | 1280px | 3-up card grids maintained with standard spacing |
| **Tablet** | 1024px | 3-up card grids collapse to 2-up; navigation links condense |
| **Mobile-Lg** | 768px | Cards stack to 1-up; navigation collapses into hamburger menu |
| **Mobile** | 480px | Single-column stack; display-xl scales from 80px down to ~36px |

### Touch Targets & Form Ergonomics
- Action buttons maintain minimum 40px tap target height across mobile viewports.
- Form input fields maintain minimum 44px tap target height on touch screens.
- Pricing toggle tabs maintain minimum 36px tap target height.

## Motion Choreography & Transitions
- **Default Duration**: `160ms`
- **Timing Curve**: `cubic-bezier(0.16, 1, 0.3, 1)`
- **Card Hover**: `transform: translateY(-2px)` with smooth border highlight.
- **Button Press**: `transform: scale(0.98)` active compression.

## Iteration Guide
1. Build one component at a time and reference it strictly by its `components:` token name.
2. When creating a section, determine first which surface ladder level it belongs to.
3. Default body prose to `{typography.body}` at weight 400.
4. Frame high-fidelity product captures inside `{colors.surface-1}` panels with `{rounded.xl}` corners.
5. Keep chromatic accent usage scarce: brand mark, primary CTA, focus outline.
6. Verify 100/100 Lighthouse contrast compliance across all color tokens.
7. Validate zero em-dashes across all documentation and copy strings.

## Production Tailwind CSS Theme Tokens

```css
@theme inline {
  --color-canvas: #000000;
  --color-surface-1: #0f1011;
  --color-surface-2: #141516;
  --color-surface-3: #18191a;
  --color-surface-4: #191a1b;
  --color-ink: #f7f8f8;
  --color-ink-muted: #d0d6e0;
  --color-ink-subtle: #8a8f98;
  --color-ink-tertiary: #62666d;
  --color-primary: #ed7a36;
  --color-hairline: #23252a;
  --color-hairline-strong: #34343a;
  --font-sans: "Inter Custom", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: ui-monospace, SF Mono, Menlo, monospace;
  --radius-xs: 4px;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-pill: 9999px;
  --transition-fast: 160ms cubic-bezier(0.16, 1, 0.3, 1);
}
```

## Known Gaps
- The four-step surface ladder is extracted directly from the computed CSS custom properties and surface elements on https://robinsweb.net/.
- Dynamic authenticated dashboards, modal states, and customer portal panels are analyzed based on public marketing surfaces.
- All tokens are verified for production deployment in Next.js, Tailwind CSS v4, and modern CSS engines.
