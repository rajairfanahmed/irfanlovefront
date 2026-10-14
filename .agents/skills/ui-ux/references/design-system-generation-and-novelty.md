# Design System Generation, Novelty Engine, and Token Contracts

## Purpose
Guide the compilation of coherent, project-specific design systems, establish semantic token contracts, and govern creative novelty. Ensure visual diversity across independent projects while maintaining strict consistency within multi-page applications.

---

## 1. The Design Fingerprint Mechanism

A design fingerprint tracks the fundamental structural and visual choices of a design to prevent unconscious repetition across projects. A difference in accent hex value alone does not constitute a different design if the structure remains identical.

### Fingerprint Dimensions

Every page concept or system architecture can be characterized by these 11 dimensions:

1. **Macrostructure:** Overall compositional strategy (e.g. split asymmetric screen, full-bleed vertical narrative, structured modular grid, multi-column editorial canvas, focused horizontal card-rail, dense dashboard shell).
2. **Hero archetype and focal point:** Placement and nature of the primary anchor (e.g. left-aligned typographic statement, right-aligned interactive artifact, centered title with offset media, full-width ambient backdrop, media-first split, high-density data summary).
3. **Grid logic and proportions:** Column distribution, alignment anchors, fluid versus fixed measurements, asymmetry ratios (e.g. 1:1, 1:2, golden ratio split, 12-column equal grid).
4. **Section sequence and rhythm:** Pacing and alternation of dense versus quiet zones, full-width shifts, background transitions, and breathing room between content blocks.
5. **Navigation and footer archetypes:** Position and character (e.g. floating pill, full-width header with hairline rule, sticky sidebar drawer, minimalist top-bar with anchor links, multi-column directory footer, minimal single-line footer).
6. **Typographic hierarchy and voice:** Pairing logic, contrast between display and body faces (e.g. high-contrast editorial serif display with clean grotesque sans body; technical mono display with neutral sans body; geometric sans display with humanistic body).
7. **Palette characteristics:**
   - Surface lightness band: deep dark, muted dark, true neutral light, warm cream/beige, high-contrast monochrome.
   - Anchor hue family: earth tones, slate/cool greys, warm terracotta, forest greens, muted ambers, bespoke brand primaries.
   - Chroma and saturation: low-chroma desaturated, vibrant selective accents, atmospheric monochrome.
   - Accent distribution: single surgical accent, dual-tone functional accents, monochromatic hierarchy.
8. **Imagery and media treatment:** Framing, border treatments, aspect ratios, background integration (e.g. raw unframed screenshots, subtle bordered containers, full-bleed hero visuals, schematic technical diagrams).
9. **Component form and geometry:** Corner radius strategy (sharp 0px, subtle 4px–6px, rounded 12px+), border weight (hairline 1px, solid 2px, borderless surface contrast), elevation (flat layered, soft diffused shadows, high-contrast borders).
10. **CTA and interactive affordance:** Primary button shape and contrast, secondary link styles, micro-state feedback language.
11. **Motion and interaction voice:** Transition personality (sharp and immediate 150ms, calm and fluid 300ms–400ms, spatial layout shifts, or strictly static when reduced motion is preferred).

---

## 2. Cross-Project Novelty versus Intra-Product Consistency

The novelty engine operates under two distinct rules depending on project scope:

### Across Independent Projects
- Avoid reusing the same full fingerprint by default when the brief grants creative freedom.
- Do not automatically fall back on the familiar AI default: dark navy background, cyan/purple gradient glow, centered hero, clustered pill buttons, and three-column rounded card grids.
- Generate alternatives that differ in macrostructure, typography voice, spatial rhythm, and palette logic.

### Within One Product or Brand
- Maintain strict systemic coherence: shared brand palette, locked design tokens, consistent navigation shells, unified typography scales, and standardized component behaviors.
- Achieve variety through **role-specific page composition**: a home page, about page, technology directory, project showcase, and contact form should each have a unique layout grammar suited to their specific information hierarchy, while sharing identical tokens, fonts, and borders.

---

## 3. Deliberate Palette Generation Process

Follow this sequential method for color selection:

1. **Check brand constraints:** Identify whether a brand palette, existing logo, or user-specified color is mandatory. Locked brand tokens must be preserved.
2. **Separate locked tokens from free variables:** Lock brand colors into primary roles; select background, surface, text, and border tones that complement them.
3. **Specify measurable palette attributes:**
   - Background lightness (e.g. Light L* > 95, Dark L* < 15, Mid-tone L* 20–30)
   - Dominant hue family and warmth (cool blue-grey, warm neutral olive, stone beige, crisp monochromatic)
   - Accent role and contrast ratio (ensuring minimum 4.5:1 against surfaces for text, 3:1 for graphical UI elements)
4. **Avoid repetitive global defaults:** Reject the automatic reflex to use cyan, violet, neon blue, or purple accents unless explicitly required by brand identity.
5. **Convert into semantic tokens:** Every color must map to a semantic token name, never raw hardcoded hex codes in components.

---

## 4. The Multi-Page Semantic Token Contract

When building or updating multi-page applications, compile a central token contract (e.g. in CSS custom properties, Tailwind theme configuration, or a `design.md` file):

```css
:root {
  /* Surfaces & Backgrounds */
  --color-background: #fbfbfb;
  --color-surface: #ffffff;
  --color-surface-subtle: #f4f4f5;
  --color-surface-elevated: #ffffff;
  
  /* Foreground & Typography */
  --color-foreground: #18181b;
  --color-foreground-muted: #71717a;
  --color-foreground-subtle: #a1a1aa;
  
  /* Brand & Accents */
  --color-primary: #18181b;
  --color-primary-foreground: #fafafa;
  --color-accent: #2563eb;
  --color-accent-foreground: #ffffff;
  
  /* Borders & Dividers */
  --color-border: #e4e4e7;
  --color-border-subtle: #f4f4f5;
  --color-focus: #2563eb;
  
  /* Feedback States */
  --color-success: #16a34a;
  --color-warning: #d97706;
  --color-error: #dc2626;
  --color-info: #2563eb;

  /* Typography Scales & Roles */
  --font-display: 'Inter', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing & Geometry */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --container-max-width: 1200px;
}
```

### Token Rules:
- Never scatter raw hex values, arbitrary font families, or ad-hoc magic numbers across components.
- If a new color or spacing value is needed, declare it as a named token in the system first.
- In dark mode, invert lightness values systematically while preserving hue relationships and contrast ratios.

---

## 5. Candidate Direction Comparison (Stage 3)

For substantial creative briefs where the user has not locked down a specific layout:
1. **Formulate 3 distinct candidate directions internally:**
   - Candidate 1: Typographic & Editorial (content-led, distinct serif/sans pairing, asymmetrical text columns, high whitespace).
   - Candidate 2: Structured & Technical (clear modular grid, hairline dividers, mono accents, high density, explicit data anchors).
   - Candidate 3: Visual & Spatial (prominent visual framing, full-bleed hero storytelling, horizontal balance, fluid card-less transitions).
2. **Compare candidates against the brief:** Evaluate user persona, task speed, readability, responsive feasibility, and brand resonance.
3. **Select the strongest candidate:** Formulate the concise **design thesis** from this selection and proceed to implementation.
