# Design Reference Research: Brand Systems, Image Inspection & Category Gate

**Scope:** Operational Reference Extraction, Visual Inspection & Interactive Selection Gate  
**Owner:** `taste-design-engineer`  
**Load Condition:** Loaded during Step 2 of Stage 0 or whenever references are being evaluated  

---

## 1. Purpose & Problem Solved
AI agents frequently hallucinate arbitrary hex colors and generic layout templates out of thin air. This reference enforces an operational, verifiable reference protocol: the agent actively inspects battle-tested brand specifications from local `design-refs/`, ingests user-provided `.md` files or visual images, and halts execution if references are missing or unconfirmed.

---

## 2. When to Load This Reference
- Loaded immediately after project domain classification.
- Loaded whenever the user provides an external `.md` design spec or image reference.

---

## 3. Inputs & Prerequisites
- Local repository of 85+ brand specifications in `./design-refs/` (co-located inside skill).
- User-provided reference files (`.md` design briefs or brand guidelines).
- User-provided image references (screenshots, UI mockups, or inspiration photos).
- Output from `references/discovery-protocol.md`.

---

## 4. The Interactive Category Gate (Proactive Selection & Hard Pause)

Before synthesizing tokens or writing code, `taste-design-engineer` must execute this deterministic gate:

### Step 1: Proactive Category Matching from `design-refs/`
Match the classified domain against the local `design-refs/` library:
- **SaaS & Developer Tools:** `linear.app-DESIGN.md`, `stripe-DESIGN.md`, `supabase-DESIGN.md`, `warp-DESIGN.md`.
- **Awwwards & High-Craft Portfolio:** `apple-DESIGN.md`, `framer-DESIGN.md`, `raycast-DESIGN.md`, `webflow-DESIGN.md`.
- **E-Commerce & Showcase:** `nike-DESIGN.md`, `shopify-DESIGN.md`, `ferrari-DESIGN.md`, `oura-DESIGN.md`.
- **Editorial & Minimalist:** `notion-DESIGN.md`, `wired-DESIGN.md`, `theverge-DESIGN.md`, `cal-DESIGN.md`.

### Step 2: Proactive User Inquiry & Recommendation
The agent presents its diagnosis and asks for explicit alignment:
```text
Platform Domain Identified: [e.g. High-Craft Portfolio / SaaS Platform]
Recommended Reference: .agents/skills/taste-design-engineer/design-refs/[brand]-DESIGN.md

Available Options:
1. Confirm the recommended reference from design-refs/.
2. Provide your own design specification file (.md).
3. Provide your own visual reference images / screenshots.
4. Request a different category reference from design-refs/.
```

### Step 3: The Hard Stop Gate
**If no reference is confirmed by the user and no existing specification file is present:**
The agent **MUST STOP IMMEDIATELY**. It is strictly forbidden from guessing tokens or continuing without a confirmed visual reference anchor.

---

## 5. Visual Reference & Image Inspection Protocol

When the user provides visual images or UI screenshots:
1. **Visual Inspection:** The agent must inspect the image asset directly using available viewing tools.
2. **Multi-Image Rigor (Up to 10 Images):** For major new designs where multiple images are provided, inspect up to 10 relevant images.
3. **Deconstruction Elements:**
   - Extract exact canvas substrate (light, dark, OLED, warm paper).
   - Extract primary display typography hierarchy and weight contrast.
   - Extract macro-layout geometry (column ratios, asymmetric splits, white space density).
   - Extract tactile component treatments (hairline borders, shadow depth, corner radii).
4. **Failure Handling:** If image inspection tools are unavailable or an image cannot be parsed, the agent must explicitly state this limitation in the brief and request text/hex specifications rather than hallucinating visual details.

---

## 6. The Verifiable Reference-to-Decision Mapping Table

Every brief generated must include a populated audit table documenting concrete derivations:

| Reference File / Asset Path | Extracted Principle / Visual Token | Concrete Decision Applied in This Project |
| :--- | :--- | :--- |
| `design-refs/linear.app-DESIGN.md` | Dark obsidian canvas `#0B0F17`, 1px hairline border | Applied to global `--canvas` and elevated panel dividers |
| `design-refs/apple-DESIGN.md` | Display typography negative kerning, generous whitespace | Applied to hero masthead scale and section padding |
| `[User-Provided Asset / Image]` | Asymmetric 60/40 sticky column layout | Applied to desktop hero and project showcase grid |

---

## 7. Output Artifact
- Populates Section 2 (Operational Reference Audit & Token Adoption) in `frontend/DESIGN_ENGINEERING_BRIEF.md`.

---

## 8. Validation Criteria
- At least 1 primary and up to 2 secondary references are explicitly cited with exact local paths.
- The Reference-to-Decision table connects every cited reference to a concrete downstream architectural choice.
- Zero invented colors or arbitrary fonts: all tokens are grounded in verified reference data.

---

## 9. Downstream Dependencies
- Feeds `references/creative-direction.md` to establish the 3 visual directions.
- Feeds `references/visual-system.md` to construct the unified substrate tokens.
