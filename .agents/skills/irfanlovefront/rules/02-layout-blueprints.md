# 02 · Layout & Composition Blueprints
**Status:** Professional Best Practices & Architectural Archetypes  
**Philosophy:** Total Creative Freedom with High Craft Standards. These blueprints are proven starting paradigms, but you have the complete freedom to invent unique layouts, interactive scrolling mechanisms, dynamic navbars, and bespoke animations that make each project stand out.

Senior frontend engineers create **dynamic visual rhythm** by letting the content dictate the layout. Rather than forcing every section into a default formula, apply these blueprints or craft bespoke architectural structures.

---

## Blueprint A: The Asymmetric Editorial Split (Award-Winning Portfolio / Agency)

A high-impact, asymmetric composition that creates immediate tension and prestige.

### Structure:
- **Left Column (45%-50% width, sticky or anchored):**
  - Oversized typographic statement (`clamp(2.5rem, 6vw, 5rem)`)
  - Project identity or core manifesto
  - Subtle meta details (tags, year, role, live links) with monospace styling
- **Right Column (50%-55% width, scrolling stream):**
  - High-resolution work showcases, narrative paragraphs, case study deep-dives
  - Borderless imagery with fine hairline dividing rules (`border-bottom: 1px solid var(--border-hairline)`)

```css
.editorial-split {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

@media (min-width: 1024px) {
  .editorial-split {
    grid-template-columns: 5fr 7fr;
    gap: 5rem;
  }
  .split-sticky {
    position: sticky;
    top: 5rem;
    align-self: start;
  }
}
```

---

## Blueprint B: The Minimalist Index / Tabular Directory (Technical / Engineering)

Replaces repetitive project cards with a clean, high-density index table or interactive directory.

### Structure:
- Horizontal rows separated by delicate hairlines (`border-bottom: 1px solid var(--border)`)
- Columns: `[Year / Index] | [Project / Skill Title] | [Category / Role] | [Technologies] | [Action Link]`
- Hover interaction: Row background subtly shifts, action indicator slides or rotates (`transform: translateX(4px)`)
- Zero bulky card containers! Content breathes through typography and tabular alignment.

```css
.index-table {
  width: 100%;
  border-collapse: collapse;
}

.index-row {
  display: grid;
  grid-template-columns: 60px 1.5fr 1fr 1fr auto;
  align-items: center;
  padding: 1.25rem 0.5rem;
  border-bottom: 1px solid var(--border-subtle);
  transition: background-color 0.2s ease, padding-left 0.2s ease;
}

.index-row:hover {
  background-color: var(--surface-hover);
  padding-left: 1rem;
}
```

---

## Blueprint C: The Magazine Multi-Scale Grid (Editorial / SaaS Showcase)

Instead of 3 equal-sized cards, arrange content with intentional visual hierarchy:

### Structure:
- **Hero Item (Spans 2 columns & 2 rows):** The flagship case study or primary capability with large visuals and deep narrative.
- **Secondary Items (Single column):** Supporting features with concise summaries.
- **Tertiary Items (Full-width banner row):** Metrics, quotes, or technology highlights.

```css
.magazine-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .magazine-grid {
    grid-template-columns: repeat(12, 1fr);
  }
  .grid-featured {
    grid-column: span 8;
    grid-row: span 2;
  }
  .grid-sidebar {
    grid-column: span 4;
  }
  .grid-full {
    grid-column: span 12;
  }
}
```

---

## Blueprint D: The Narrative Linear Stream (Personal / Story-Driven)

Replaces disjointed cards with a continuous, beautifully typeset reading experience.

### Structure:
- Centered narrow reading column (`max-width: 680px` to `760px`) for optimal reading rhythm (55-75 characters per line).
- Breakout elements (diagrams, pull quotes, code blocks, screenshots) expand to `max-width: 1100px`.
- High vertical rhythm with generous whitespace (`margin-bottom: 4rem` to `6rem`).

```css
.narrative-container {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.narrative-breakout {
  width: 100vw;
  max-width: 1200px;
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 3rem 1.5rem;
}
```

---

## Rules for Section Flow & Rhythm:
1. **Never repeat the same layout twice consecutively:** If Section 1 is an Asymmetric Split, Section 2 must be an Index Table or Narrative Stream - NEVER another 3-column grid!
2. **Use whitespace for separation:** Separate sections with `clamp(4rem, 10vw, 8rem)` of padding, NOT by wrapping every section in a bordered card box.
3. **Contrast density:** Follow a dense data section with an expansive, quiet typographic section.
