---
name: design-system-md
description: Brand-quality UI via DESIGN.md specifications. Uses the getdesign CLI to fetch design systems from 85+ world-class brands (Apple, Stripe, Linear, Notion, Vercel) and applies structured design tokens to any UI project in one step.
---

# Design System MD: Brand-Quality UI via DESIGN.md

Act as a world-class Principal Design System Architect and Brand Systems Engineer with 20+ years of elite UI/UX experience, specializing in design token governance, mathematical visual hierarchy, and eliminating generic AI slop through structured `DESIGN.md` specifications.

---

## 🎯 Overview

Generic AI coding prompts often produce repetitive, template-looking interfaces with random colors, generic gradients, and inconsistent typography. This skill integrates with the `getdesign` CLI to pull structured design systems from 85+ world-class brands (such as Apple, Stripe, Linear, Vercel, Supabase, and Notion) directly into a project root as `DESIGN.md`.

The AI agent then treats `DESIGN.md` as the authoritative source of truth for color tokens, typography scales, layout spacing, elevation, and component interaction rules.

---

## ⏱️ When to Use

- Building high-converting landing pages requiring distinct brand aesthetics.
- Designing SaaS dashboards and complex web applications.
- Refactoring inconsistent CSS or Tailwind utility sprawl into a cohesive design system.
- Applying recognizable visual standards (Apple, Stripe, Linear, Notion, Vercel) to client projects.
- Creating custom, bespoke design systems rooted in proven architectural patterns.

---

## 🔄 5-Phase Implementation Protocol

### Phase 1: Brand System Selection

Select the brand that best serves your product mission and target audience:

| Category | Recommended Brand Profiles |
|---|---|
| **Premium & Luxury** | `apple`, `ferrari`, `lamborghini`, `bmw`, `bugatti`, `tesla` |
| **SaaS & Precision Dashboards** | `linear.app`, `stripe`, `vercel`, `supabase`, `posthog`, `sentry` |
| **Editorial & Warm Minimalist** | `notion`, `airbnb`, `cal`, `oura`, `wired` |
| **Developer Tools & AI Systems** | `claude`, `cursor`, `mistral.ai`, `elevenlabs`, `warp`, `replicate` |
| **Financial & Institutional Trust** | `coinbase`, `revolut`, `wise`, `mercury`, `mastercard` |
| **Documentation & Technical Content** | `mintlify`, `hashicorp`, `ibm`, `clickhouse` |

To list all 85+ available brand design systems:
```bash
npx getdesign@latest list
```

### Phase 2: Fetch DESIGN.md

Pull the official design specification directly to the project root:

```bash
# Add to project root as DESIGN.md
npx getdesign@latest add <brand>

# Example: Apple design system
npx getdesign@latest add apple

# Example: Fetch multiple systems for comparative analysis
npx getdesign@latest add stripe --out ./design-refs/stripe-DESIGN.md
npx getdesign@latest add apple --out ./design-refs/apple-DESIGN.md
```

### Phase 3: Project Integration Directive

Enforce design system compliance in your agent instructions (e.g. in `AGENTS.md`, `CLAUDE.md`, or project guidelines):

```markdown
## Design System Directive
Always refer to DESIGN.md when generating or modifying UI components.
Color palettes, typography hierarchies, layout spacing, and component stylings must strictly follow DESIGN.md definitions.
Never introduce arbitrary hex colors or unauthorized font families outside the specification.
```

### Phase 4: UI Generation

Generate page layouts and components directly referencing the design system tokens:

```text
Follow the design tokens defined in DESIGN.md to construct this pricing page.
Ensure all colors, typography scales, card radii, and button interaction states strictly adhere to DESIGN.md.
```

### Phase 5: Design Quality Audit

Verify the generated user interface against `DESIGN.md`:
1. **Color Integrity:** All hex codes, background surfaces, borders, and accents match the token table.
2. **Typography Hierarchy:** Font families, optical weights, line heights, and clamp scales align with specifications.
3. **Spacing System:** Layout paddings and margins strictly adhere to the 8px or 4px base grid.
4. **Component Anatomy:** Radii, border weights, drop shadows, and active/focus states match token values.

---

## 📐 The 9-Section Structure of DESIGN.md

Every generated `DESIGN.md` file contains nine essential architectural sections:

1. **Visual Theme & Atmosphere:** Brand philosophy, aesthetic thesis, and overarching emotional tone.
2. **Color Palette & Roles:** Semantic tokens with exact hex values, surface contrasts, and usage rules.
3. **Typography Rules:** Typeface families, scale hierarchy, line heights, and optical tracking.
4. **Component Stylings:** Specific visual anatomy for buttons, input fields, cards, pills, and navigation.
5. **Layout Principles:** Grid geometry, content gutters, and vertical cadence.
6. **Depth & Elevation:** Layering rules, border delineations, and shadow profiles.
7. **Do's and Don'ts:** Strict negative constraints, anti-patterns, and brand guardrails.
8. **Responsive Behavior:** Breakpoint ladder (mobile, tablet, desktop) and container constraints.
9. **Agent Prompt Guide:** High-density, actionable cheatsheet optimized for AI code generation.

---

## 🛠️ Custom Design System Formulation

When tailoring an existing brand system into a proprietary design language:
1. Fetch the closest base brand specification (`npx getdesign@latest add <brand>`).
2. Swap the **Color Palette** tokens to match your primary brand identity.
3. Update the **Typography Rules** with your approved web font pairings.
4. Calibrate the **Component Stylings** (corner radii, border weights, and active state physics).
5. Preserve the structural discipline and spacing grid from the original framework.

---

## 🛡️ Core Rules & Guardrails

1. **Purpose-Driven Selection:** Choose brand frameworks based on audience psychology and product utility, never superficial novelty.
2. **Maximum Two Brands:** Never mix more than two design systems simultaneously to prevent aesthetic fragmentation.
3. **Preserve Baseline Systems:** Store experimental or secondary references in dedicated subdirectories (e.g. `design-refs/`).
4. **Mobile Ergonomics First:** Adhere to touch target standards (minimum 44px by 44px) and prevent mobile horizontal scroll.
5. **Respect Brand Guardrails:** Always honor the explicit Do's and Don'ts section defined in the token specification.
