# Creative Diversity, Anti-Repetition & Structural Divergence

**Scope:** Detecting AI-Generated Repetitive Patterns, Structural Divergence & Anti-Slop Audit  
**Owner:** `creative-layout-engineer`  
**Load Condition:** Loaded during Step 4 & 9 of Stage 2 to review draft layouts for template repetition  

---

## 1. Purpose & Problem Solved
AI models have an overwhelming statistical bias toward repeating the same visual formulas: the centered headline with two buttons, floating pill navbar, rounded card grid, and decorative glowing blurs. Changing hex colors from blue to orange does NOT constitute design diversity. This reference provides an automated self-audit to detect repetitive AI patterns and enforce true structural originality.

---

## 2. When to Load This Reference
- Loaded when developing initial layout directions (Step 4).
- Loaded as a self-review gate before committing or handing off any page composition (Step 9).

---

## 3. The Anti-Repetition Self-Audit Checklist

Before approving any page composition, the layout engineer must check for these 8 telltale AI template traps:

### 1. The Centered Headline + Two-Button Trap
- **The Pattern:** A big centered H1, centered 2-line paragraph directly below it, and two generic rounded buttons side-by-side ("Get Started" and "Learn More") applied mindlessly to every project.
- **Correction:** Treat this as a template trap, not a universal ban. If a centered entry is contextually best for the product, execute it with distinctive typography and authentic proof. Otherwise, explore: Does this product benefit from an asymmetric split? An off-center display headline with a right-aligned telemetry monitor? An editorial masthead? A full-canvas visual anchor?

### 2. The Obligatory Floating Pill Navbar
- **The Pattern:** A tiny rounded pill floating in the top center with heavy backdrop blur, regardless of whether the site is an enterprise console or an editorial journal.
- **Correction:** Consider a crisp docked full-width bar, a minimalist single-line rail, an asymmetric bracket layout, or a persistent side rail.

### 3. The 3-Column Card Grid Cliché
- **The Pattern:** 3 identical rounded cards in a horizontal row, each with an icon at the top, a 2-word title, and a short generic sentence.
- **Correction:** Use variable-width asymmetric grids, horizontal snapshot tracks, dense telemetry tables, or alternating narrative blocks.

### 4. Excessive Corner Radii & "Card Overdose"
- **The Pattern:** Every single sentence, image, and button is enclosed inside a pill or heavily rounded `rounded-2xl` card.
- **Correction:** Remove unnecessary enclosing containers. Let typography and whitespace create structure. Use 1px physical hairline dividers or borderless flow.

### 5. Decorative AI Slop Elements
- **The Pattern:** Purple/cyan radial glows pasted in dark corners, floating abstract 3D geometric shapes, or fake analytics dashboard mockups with arbitrary bar charts.
- **Correction:** Eliminate all non-functional decoration. Replace fake mockups with real architecture diagrams, authentic code snippets, or actual product interface viewports.

### 6. Repetitive Section Sequencing
- **The Pattern:** Hero -> 3 Features -> Testimonials Carousel -> Pricing -> FAQ -> Footer.
- **Correction:** Sequence sections strictly around the product's authentic narrative. A portfolio needs deep case studies; an infrastructure tool needs live telemetry and benchmarks.

---

## 4. Single-Project Consistency vs Cross-Project Divergence

Creativity does not mean random chaos within the same website:

### Cross-Project Divergence (Radical Variety Between Different Sites)
- Two different websites (e.g. an e-commerce shop vs an engineering portfolio) must NEVER look identical.
- They must use completely different layout families, spatial densities, and section sequences.

### Single-Project Spatial Consistency (Harmonious Rhythm Within One Site)
- Across routes of the same web application (`/`, `/about`, `/projects`, `/contact`):
  - Shared navigation shell and persistent footer.
  - Consistent layout container margins (`max-w-6xl` or `max-w-7xl`).
  - Standardized typographic scale and base spacing increment.
  - Consistent header vertical anchor (zero jumping or shifting between route transitions).

---

## 5. Output Artifact
- Documents creative diversity evaluation and anti-template corrections in `frontend/PLAN.md`.

---

## 6. Validation Criteria
- None of the 6 AI template traps are present without explicit, justified product necessity.
- Layout possesses intentional structural originality tailored directly to the client's mission.
