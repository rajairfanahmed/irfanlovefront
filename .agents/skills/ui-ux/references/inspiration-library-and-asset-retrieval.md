# Inspiration Library Integration, Asset Retrieval, and Creative Intelligence

## Purpose
Govern how the agent discovers, queries, and learns from the 124 curated design assets in the `designs/` inspiration library. Ensure visual references inform original creative reasoning rather than serving as templates to clone.

---

## 1. Core Rule: References as Design Evidence, Never Templates to Clone

The `designs/` library exists to expand the agent's visual vocabulary and provide concrete design evidence. For every design task:

- **Extract transferable principles:** Isolate structural grammar, spatial rhythm, typographic scale relationships, color balance, density, and interaction feedback.
- **Separate observations from decisions:** Maintain a strict distinction between what is directly visible in a reference, the plausible design rationale, and the new design decisions made for the user's project.
- **Never clone pixels or proprietary identity:** Do not reproduce the exact layout, unique copy, proprietary brand artwork, or pixel-level composition of a reference. Apply the extracted principles to the user's authentic content, brand identity, and project constraints.
- **No forced references:** If a task has a strictly locked brief or none of the references solve the specific problem, proceed with original creative reasoning from the core knowledge base. Never force an unrelated visual reference into a project.

---

## 2. Framework, Motion, and Bento Grid Restraint

> **Critical Rule:** Never force GSAP, Lenis, bento grids, or specific frameworks onto every project. Every architectural, animation, or structural choice must be justified by the user's explicit requirements, the existing project stack, web performance, and accessibility. This keeps the design engine advanced without making projects unnecessarily complicated.

### Motion Restraint (GSAP & Lenis)
- **Animation is a capability, not an obligation:** Some of the most refined, professional interfaces use little or no animation.
- **Native scrolling is preferred:** Native browser scrolling is resilient, fast, and fully accessible.
- **Lenis smooth-scrolling criteria:** Only consider Lenis when the experience materially benefits from coordinated storytelling and its behavior is verified to not break keyboard navigation, anchor jumps, browser history, touch devices, reduced-motion preferences, or sticky headers. Never hijack scroll in a way that degrades user control.
- **GSAP criteria:** Use GSAP when complex sequenced timelines or SVG path animations are explicitly requested. For ordinary transitions (hover states, fading dialogs, simple collapses), standard CSS transitions or lightweight utility classes are more performant and maintainable.
- **Always support reduced motion:** Every motion implementation must be wrapped with `@media (prefers-reduced-motion: reduce)` alternatives.

### Structural Restraint (Bento Grids & Cards)
- **Bento grids are an option, not a universal template:** Do not default to bento grids or card clusters for every page.
- **Evaluate content relationships first:** Ask whether content naturally forms a modular matrix, a linear narrative, an asymmetric split, a dense data table, or an editorial article. Choose the macrostructure that serves the content.

---

## 3. 4-Step Context-Aware Inspiration Retrieval Process

When creative inspiration is needed for a design task, follow this workflow:

```
[1. Analyze Problem & Constraints] 
       ↓
[2. Query designs/ Index for Targeted Assets] 
       ↓
[3. Extract Transferable Principles] 
       ↓
[4. Synthesize Project-Specific Art Direction]
```

1. **Analyze problem and constraints:** Identify the product domain, target audience, reading context, platform, and explicit constraints before browsing inspiration.
2. **Query `designs/README.md`:** Query the index for 2 to 3 assets that solve complementary design challenges (e.g. one reference for a clean industrial color palette, another for tabular data hierarchy).
3. **Extract transferable principles:** Formulate a brief inspiration summary:
   - What structural idea works well (e.g. 2:1 editorial column split; hairline divider rules).
   - What color or surface logic is effective (e.g. warm stone background paired with deep charcoal typography).
   - What should **not** be copied (e.g. proprietary brand logo, decorative geometric shapes).
4. **Synthesize original art direction:** Combine the extracted principles with the product's real content, existing assets, and chosen design thesis to create a completely original composition.

---

## 4. Color Intelligence: Intentional Selection Across a Broad Range

Do not allow the design engine to fall into a default color rut (such as default dark navy with neon purple/cyan accents). Utilize the inspiration library to explore varied palette families:

- **Earthy and mineral:** Warm clay, sand, olive, terracotta, stone, and unbleached paper tones (e.g. `sustainable-farming-website-agriculture-.jpg`).
- **Restrained monochrome:** Pure black, crisp neutral white, slate dividers, and high-contrast typographic hierarchy (e.g. `black-website-design-desain-ux-sites-lay.jpg`).
- **Technical enterprise:** Steel grey, charcoal, and surgical cobalt blue accents (e.g. `tech-brand-colour-palette-tech-brand-col.jpg`).
- **Subdued luxury:** Warm dark charcoal, muted gold/bronze hairline accents, and deep olive surfaces (e.g. `luxury-ui-color-palette-for-premium-webs.jpg`).
- **High-contrast industrial:** Matte black paired with sharp industrial yellow or safety amber (e.g. `neon-yellow-black-black-yellow-color-pal.jpg`).

### Palette Selection Rules:
1. Always preserve existing project brand colors and locked design tokens.
2. For unconstrained projects, internally evaluate multiple candidate palettes differing in hue family, warmth, chroma, and surface lightness.
3. Test all text, border, button, and focus state combinations against WCAG AA contrast (4.5:1 minimum).

---

## 5. Typography Intelligence: Role-Based Hierarchy and Restraint

Use typographic references (e.g. `curated-typography-library-typography-fo.jpg`, `okine-sans-modern-sansserif-font-family-.jpg`) to guide role-based type pairing:
- **Display role:** Sets personality and tone; used sparingly on high-impact headings.
- **Heading role:** Provides scannable structural anchors across sections.
- **Body role:** Prioritizes effortless legibility, comfortable line lengths (60–75 characters), and generous line heights (1.5–1.6).
- **Mono / Utility role:** Reserved for code, data metrics, timestamps, and technical tags.
- **Weight discipline:** Restrict font weights to 2 or 3 per family (e.g. Regular 400, Medium 500, Bold 700) to protect page load speed and prevent layout shifts.
