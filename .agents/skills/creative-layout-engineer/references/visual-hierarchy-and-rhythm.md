# Visual Hierarchy, Rhythm & Spatial Pacing

**Scope:** Information Priority, Typographic Scaling, White Space Density & Section Transitions  
**Owner:** `creative-layout-engineer`  
**Load Condition:** Loaded during Step 6 of Stage 2 when engineering layout compositions  

---

## 1. Purpose & Problem Solved
AI layouts often suffer from visual monotony: every section uses the exact same vertical padding, the same heading font size, the same card corner radii, and the same center-aligned text. This reference establishes rules for intentional visual hierarchy, varied pacing, and mathematical spatial rhythm.

---

## 2. Information Priority & The 3 Tiers of Content

Every section must establish a clear hierarchy before code is written:
1. **Tier 1 (The Primary Anchor):** The single element that must be comprehended within 2 seconds (e.g. the bold headline, live metric, or interactive model). There is only ONE Tier 1 element per viewport.
2. **Tier 2 (The Supporting Logic):** Contextual explanations, supporting data points, or category labels.
3. **Tier 3 (The Action / Detail):** Tertiary links, metadata, micro-captions, or secondary CTAs.

**The Competing Focal Points Law:** If two large elements compete for equal visual weight on the same screen, the hierarchy has failed. One must be subordinated in scale, contrast, or position.

---

## 3. Typographic Scale & Measure (Line Length)

- **Display Scale:** Use fluid clamp math (`clamp(2.5rem, 5vw + 1rem, 5.5rem)`) for display headlines.
- **Heading Scale:** Section titles should step down progressively (`clamp(1.75rem, 3vw + 0.5rem, 3rem)`).
- **Readable Measure (The 65-Character Law):**
  - Body paragraphs must NEVER span the full width of a 1280px or 1440px desktop screen.
  - Constrain text blocks to `max-w-xl` or `max-w-2xl` (45 to 75 characters per line). Unconstrained full-width text causes severe eye fatigue and looks amateurish.

---

## 4. Spacing Pacing & Variable Section Density

Do NOT apply the exact same `py-20` to every section across the entire page. Modulate the vertical breathing room to create pacing:
- **Hero & Key Milestones (Airy Pacing):** `py-24 md:py-32` (`clamp(5rem, 10vw, 9rem)`) to give critical ideas maximum gravitas.
- **Feature & Content Sections (Balanced Pacing):** `py-16 md:py-24` (`clamp(4rem, 6vw, 6rem)`).
- **Dense Telemetry & Data Rails (Compact Pacing):** `py-8 md:py-12` (`clamp(2rem, 4vw, 3.5rem)`).
- **Section Transition Contrast:** Alternate between an airy, spacious section and a dense, high-information section to keep the user engaged.

---

## 5. Alignment, Grouping & Proximity (Gestalt Law)

- **Law of Proximity:** Elements that relate to each other (e.g. an icon and its label, a metric and its caption) must sit significantly closer to each other (`gap-2` to `gap-4`) than to unrelated sibling elements (`gap-8` to `gap-12`).
- **Consistent Alignment Axes:** Align content to an intentional vertical baseline. If the headline is left-aligned, its supporting paragraph and CTA button must share the exact same left margin. Do not mix left-aligned text with centered buttons in the same container.

---

## 6. The Squint Test Verification

Before finalizing any section composition, perform the mental Squint Test:
1. When visual details blur, is the visual pathway immediately clear?
2. Does the primary focal point pop with the highest contrast?
3. Does the eye naturally flow from Anchor -> Context -> Action?

If the page blurs into an undifferentiated grey soup of identical boxes, increase size contrast, deepen white space, and sharpen the hierarchy.
