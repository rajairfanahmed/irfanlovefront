# Content & Component Mapping: Real Information Architecture

**Scope:** Component Topology Selection, Real Content Mapping & Component Inventory  
**Owner:** `creative-layout-engineer`  
**Load Condition:** Loaded during Step 6 & 8 of Stage 2 when assigning components to sections  

---

## 1. Purpose & Problem Solved
AI generators often design in an abstract vacuum, dropping generic card boxes into layouts and leaving "Lorem ipsum dolor sit amet" for the next agent to figure out. This reference ensures that layout architecture is derived directly from authentic product content, user journeys, and intentional component topologies.

---

## 2. When to Load This Reference
- Loaded when mapping section requirements to concrete UI components.
- Loaded before writing the component inventory for downstream engineers.

---

## 3. Real Content Dictates Layout Geometry

Never create a container without knowing what content will live inside it:
1. **Short Form vs Long Form:** A 3-word metric callout requires a completely different container topology than a 4-paragraph engineering case study.
2. **Visual Evidence vs Textual Proof:** If the product proof is a live code snippet, provide a 16:9 syntax container with dark background styling; do not force it into an avatar testimonial box.
3. **Zero Lorem Ipsum:** All page skeletons and layout templates must use real, draft production copy representing the actual domain. Placeholder Latin text hides layout defects like line wrapping and container overflow.

---

## 4. Selecting the Correct Component Topology

Do not default to the same rounded box for every piece of content:

### Topology 1: Borderless Flow Cards
- **Structure:** Content sits directly on the canvas without surrounding borders or background fills. Separation is achieved purely through negative space and typographic scale.
- **Best For:** High-taste editorial pages, image galleries, and minimalist portfolios.

### Topology 2: Hairline Physical Dividers
- **Structure:** Containers separated by crisp 1px borders (`border-t`, `border-l`) using `--border-subtle` with zero outer card shadow.
- **Best For:** Developer consoles, architectural broadsheets, high-density data matrices.

### Topology 3: Tactile Recessed Wells
- **Structure:** Containers featuring a slightly darker/recessed substrate (`--surface-recessed`) with a subtle 1px inner border.
- **Best For:** Code viewports, search inputs, interactive playground sandboxes.

### Topology 4: Elevated Action Panels
- **Structure:** Containers using `--surface-1` with 12px corner radii and a subtle contrast border.
- **Best For:** Primary pricing tiers, key featured case studies, conversion anchors.

---

## 5. Component Inventory & Handoff Schema

For every section engineered, record the required component inventory:
- **Component Identifier:** e.g. `<HeroAsymmetricSplit />`, `<MetricTelemetryRow />`, `<ProjectSnapCard />`.
- **Component Responsibility:** What data it renders and what interactions it must support.
- **Substrate Coupling:** Which background token it binds to (`--canvas` vs `--surface-1`).
- **Responsive Behavior:** How it reflows between mobile, tablet, and desktop viewports.
