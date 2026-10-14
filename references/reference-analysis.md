# Design Reference Analysis and Visual Reverse Engineering

## 1. Purpose
Establish a professional framework for examining existing websites, applications, screenshots, prototypes, and visual references. The objective is to understand the visible design, infer the decisions that produced it, identify underlying principles, distinguish functional patterns from decorative treatments, and determine what can be learned. Reference analysis must go beyond surface-level observations.

## 2. Scope
Possible reference inputs: single screenshot, multiple screenshots, desktop and mobile screenshots, live website, interactive prototype, screen recording, collection of pages, complete website, source-code repository, design-system document, component library, visual inspiration collection, combination of materials. Different inputs provide different levels of evidence.

## 3. Core Distinctions

### Observation versus interpretation
**Observation** describes what is directly visible. **Interpretation** describes a plausible explanation.

### Design intent versus demonstrated outcome
Appearance does not establish that users actually experience intended benefits.

### Visual appearance versus interaction behaviour
A control's appearance may suggest how it should work, but actual behaviour must be examined separately.

### Design principles versus distinctive expression
A reference may use familiar principles while presenting them through a distinctive visual identity.

## 4. Analysis Dimensions

### Visual composition and layout
Page structure, composition, grid and alignment systems, vertical rhythm.

### Visual hierarchy and information relationships
Primary and secondary focal points, heading relationships, action prominence, grouping, reading flow.

### Typography
Typeface characteristics, typographic hierarchy, typographic responsiveness.

### Colour and surface
Colour roles, colour relationships, surface treatment (solid, border, shadow, transparency, blur, gradients, texture, layering, rounded corners, material separation).

### Imagery, illustration, and iconography
Photography style, illustration style, icon consistency, asset integrity.

### Component anatomy and patterns
Navigation, buttons, forms, cards, tables, tabs, dialogs, tooltips, notifications, charts, pricing, profiles, media, search, AI components.

### Interaction and behaviour
Interaction mechanisms, interaction states, feedback and system status.

### Motion and temporal behaviour
Entry/exit transitions, hover motion, scroll effects, parallax, staggering, loading animations, reduced-motion alternatives.

### Navigation and information architecture
Navigation hierarchy, labels, page grouping, active states, breadcrumbs, tabs, sidebar, dropdown, search, filters, mobile navigation.

### Responsive and adaptive behaviour
Content prioritization, layout transformation, column reduction, navigation changes, image cropping, typography scaling, spacing changes, touch targets.

### Accessibility
Apparent readability, colour contrast, visible focus indicators, semantic structure, keyboard behaviour, screen-reader compatibility.

### Content and brand
Heading specificity, sentence structure, information density, content length, labels, call-to-action wording, brand expression, visual personality, tone.

### Design-system inference
Repeated colour values, typographic scales, spacing patterns, border radii, elevation styles, grid conventions, button variants, component states.

### Technical reverse engineering (when source is available)
HTML structure, CSS layout, design tokens, component architecture, responsive breakpoints, font loading, animation implementation, state management, accessibility semantics.

## 5. Evidence and Confidence Classification
- **Observed:** Directly visible or verified.
- **Strongly inferred:** Supported by multiple consistent observations.
- **Tentative interpretation:** Plausible with limited evidence.
- **Unknown:** Cannot be established from available evidence.
- **Tested or verified:** Established through relevant test or inspection.

## 6. Extracting Transferable Design Knowledge

### Layer A: Observed characteristic — What is visibly present?
### Layer B: Potential design rationale — What might this accomplish?
### Layer C: Applicability conditions — When could a similar approach be useful?
### Layer D: Adaptation requirements — What would change in a different product?

Never assume a reference's exact values should be copied. Transfer the underlying insight where applicable.

## 7. Originality and Intellectual Integrity
Use reference analysis to expand vocabulary without producing imitation. Avoid copying distinctive compositions without justification, reproducing another brand's complete visual identity, treating a gallery design as proof of usability, or reusing third-party assets without appropriate rights.

Do not blindly copy a reference when the user only wants inspiration. If the user explicitly requests a close recreation, follow that scope to the extent permitted by available evidence and applicable rights. Do not invent behaviour that the reference does not reveal. Do not assume exact fonts, colours, spacing values, animation timing, or library choices without evidence.

## 8. Common Reference-Analysis Failures
- Describing appearance without interpreting relationships
- Calling a layout "minimal" without explaining its actual characteristics
- Claiming usability based solely on aesthetics
- Inferring responsiveness from a desktop screenshot
- Guessing exact fonts, colours, or spacing without evidence
- Confusing popularity with quality
- Copying surface appearance without understanding purpose
- Failing to distinguish observations from hypotheses

## 9. Quality Standard
A professional analysis should: describe accurately, explain relationships, distinguish observations from interpretations, connect characteristics with plausible purposes, recognize uncertainty, examine relevant evidence, identify strengths and weaknesses, separate general principles from brand-specific expression, extract transferable lessons, and avoid unsupported claims.

**Foundational principle:** Study the design to understand its decisions, not merely to copy its appearance.
