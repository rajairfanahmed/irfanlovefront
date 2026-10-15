# 06 · Design Inspiration & Portfolio Extraction Workflow
**Status:** Mandatory Frontend Engineering Rule  
**Enforcement:** Must be executed in Phase 1 before proposing design plans or generating code

The `designs/` folder contains **our studio's own award-winning design portfolio** (124 curated assets). When designing a project, you must draw inspiration directly from these real visual works — extracting layout structures, typography treatments, spacing rhythm, and palette relationships.

---

## 1. Why Inspecting Our Portfolio Works

When you skip looking at visual references, your neural weights fall back to the most common generic code from GitHub: a dark background with cyan glow and centered cards.

By actively viewing real design work in `designs/`, you immediately absorb:
- Unconventional hero arrangements (e.g. giant typography with offset imagery)
- Sophisticated section pacing (e.g. alternating wide and narrow widths)
- Elegant micro-details (e.g. hairline borders, monospace tags, understated action links)

---

## 2. The 3-Step Extraction Protocol

### Step 1: Open the Portfolio Catalog
Call `view_file` on `designs/quick-lookup.md`. This compact catalog organizes all 124 design works by aesthetic genre and layout archetype.

### Step 2: Select 3 to 5 Relevant Works & View Them
Call `view_file` on the exact image paths:
```
view_file(AbsolutePath="d:/uiux/.agents/skills/ui-ux/designs/<filename>.jpg")
```
Choose designs that match the client's industry, audience, or desired mood.

### Step 3: Extract the Visual DNA (Do NOT Clone Templates!)
From each viewed image, analyze and record 4 concrete attributes:
1. **Macro-Layout:** How is the space divided? (e.g. 50/50 split, asymmetric column, magazine grid, tabular directory).
2. **Typographic Hierarchy:** What is the relationship between the headline and the body? What is the size ratio? How are labels/tags styled?
3. **Palette & Contrast:** What is the background surface tone? How is the accent color distributed? (Is it surgical and restrained, or broad?)
4. **Interactive Treatment:** How are links, buttons, and section transitions constructed?

---

## 3. Synthesizing into the Project Design Thesis

Translate the extracted DNA into a project-specific plan:
- *"Inspired by `che-marketing-agency-landing-page-karina.jpg`, we will use an asymmetric 5fr/7fr editorial split for the Hero and About sections."*
- *"Inspired by `minimal-website-with-oversize-typography.jpg`, we will pair Space Grotesk display headers with Plus Jakarta Sans body copy and a Swiss high-contrast monochrome palette."*
- *"Inspired by `contemporary-figma-portfolio-website-tem.jpg`, we will present featured work in a tabular index with hairline divider rules instead of boxed cards."*

This guarantees a **custom, human-designed result** every single time, with zero template feel!
