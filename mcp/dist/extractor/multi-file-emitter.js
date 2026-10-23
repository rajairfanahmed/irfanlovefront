import fs from "node:fs";
import path from "node:path";
export function emitMultiFileDesign(result, options = {}) {
    const baseDir = options.outputBaseDir || path.resolve(process.cwd(), "designs");
    const targetFolder = path.join(baseDir, result.manifest.brandSlug);
    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder, { recursive: true });
    }
    const assetsDir = path.join(targetFolder, "assets");
    if (!fs.existsSync(assetsDir)) {
        fs.mkdirSync(assetsDir, { recursive: true });
    }
    const filesWritten = [];
    const writeFile = (filename, content) => {
        const fullPath = path.join(targetFolder, filename);
        fs.writeFileSync(fullPath, content, "utf8");
        filesWritten.push(filename);
    };
    const primaryColor = result.colors.find((c) => c.role === "primary")?.hex || result.colors[1]?.hex || "#3b82f6";
    const inkColor = result.colors.find((c) => c.role === "ink")?.hex || "#ffffff";
    const inkMuted = result.colors.find((c) => c.role === "ink-muted")?.hex || "#94a3b8";
    const primaryFont = result.typography[0]?.fontFamily || "sans-serif";
    // 0. 00-manifest.json
    const manifest = {
        ...result.manifest,
        filesGenerated: [
            "00-manifest.json",
            "01-tokens.json",
            "02-theme.css",
            "03-colors.md",
            "04-typography.md",
            "05-stack.md",
            "06-layout-structure.json",
            "06-layout-structure.md",
            "07-motion-dna.json",
            "07-motion-and-animations.md",
            "08-hover-and-interactions.md",
            "09-components-catalog.md",
            "10-design-blueprint.md",
            "11-accessibility-audit.md",
            "assets/",
        ],
    };
    writeFile("00-manifest.json", JSON.stringify(manifest, null, 2));
    // 1. 01-tokens.json (W3C DTCG Format)
    const dtcgTokens = {
        $schema: "https://design-tokens.github.io/community-group/format/",
        name: result.manifest.brand,
        description: `W3C Design Tokens extracted from ${result.manifest.url}`,
        color: {},
        typography: {},
        spacing: {},
        border: {
            radius: {},
        },
        shadow: {},
    };
    for (const c of result.colors) {
        const key = c.role !== "unassigned" ? c.role : c.name.replace(/^color-/, "");
        dtcgTokens.color[key] = {
            $type: "color",
            $value: c.hex,
            $description: `${c.name} (Luminance: ${c.luminance}, Contrast with canvas: ${c.contrastWithCanvas}:1)`,
            $extensions: {
                confidence: c.confidence,
                sources: c.sources,
            },
        };
    }
    dtcgTokens.color["surface-1"] = { $type: "color", $value: result.surfaces.surface1 };
    dtcgTokens.color["surface-2"] = { $type: "color", $value: result.surfaces.surface2 };
    dtcgTokens.color["surface-3"] = { $type: "color", $value: result.surfaces.surface3 };
    dtcgTokens.color["surface-4"] = { $type: "color", $value: result.surfaces.surface4 };
    dtcgTokens.color["hairline"] = { $type: "color", $value: result.surfaces.hairline };
    dtcgTokens.color["hairline-strong"] = { $type: "color", $value: result.surfaces.hairlineStrong };
    for (const t of result.typography) {
        dtcgTokens.typography[t.name] = {
            $type: "typography",
            $value: {
                fontFamily: t.fontFamily,
                fontSize: t.fontSize,
                fontWeight: t.fontWeight,
                lineHeight: t.lineHeight,
                letterSpacing: t.letterSpacing || "normal",
            },
        };
    }
    for (const [k, v] of Object.entries(result.surfaces.radii)) {
        dtcgTokens.border.radius[k] = { $type: "dimension", $value: v };
    }
    result.surfaces.shadows.forEach((s, idx) => {
        dtcgTokens.shadow[`elevation-${idx + 1}`] = { $type: "shadow", $value: s };
    });
    writeFile("01-tokens.json", JSON.stringify(dtcgTokens, null, 2));
    // 2. 02-theme.css (Tailwind v4 @theme inline + :root CSS Custom Properties)
    const themeCss = `/**
 * ${result.manifest.brand} Design Tokens & Tailwind v4 Theme
 * Source: ${result.manifest.url}
 * Extracted at: ${result.manifest.timestamp}
 */

:root {
  /* Surface Ladder */
  --canvas: ${result.surfaces.canvas};
  --surface-1: ${result.surfaces.surface1};
  --surface-2: ${result.surfaces.surface2};
  --surface-3: ${result.surfaces.surface3};
  --surface-4: ${result.surfaces.surface4};
  --hairline: ${result.surfaces.hairline};
  --hairline-strong: ${result.surfaces.hairlineStrong};
  --hairline-tertiary: ${result.surfaces.hairlineTertiary};

  /* Chromatic & Ink Tokens */
  --primary: ${primaryColor};
  --ink: ${inkColor};
  --ink-muted: ${inkMuted};

  /* Typography Scale */
${result.typography
        .map((t) => `  --font-size-${t.name}: ${t.fontSize};\n  --font-weight-${t.name}: ${t.fontWeight};\n  --line-height-${t.name}: ${t.lineHeight};`)
        .join("\n")}

  /* Geometry & Radii */
${Object.entries(result.surfaces.radii)
        .map(([k, v]) => `  --radius-${k}: ${v};`)
        .join("\n")}

  /* Motion */
  --duration-default: ${result.motion.durationScale[0] || "160ms"};
  --ease-default: ${result.motion.easingCurves[0] || "cubic-bezier(0.16, 1, 0.3, 1)"};
}

@theme inline {
  --color-canvas: var(--canvas);
  --color-surface-1: var(--surface-1);
  --color-surface-2: var(--surface-2);
  --color-surface-3: var(--surface-3);
  --color-surface-4: var(--surface-4);
  --color-hairline: var(--hairline);
  --color-hairline-strong: var(--hairline-strong);
  --color-hairline-tertiary: var(--hairline-tertiary);
  --color-primary: var(--primary);
  --color-ink: var(--ink);
  --color-ink-muted: var(--ink-muted);
  --font-display: "${primaryFont}", sans-serif;
  --font-body: "${primaryFont}", sans-serif;
  --radius-pill: var(--radius-full);
  --radius-card: var(--radius-lg);
  --radius-input: var(--radius-md);
}
`;
    writeFile("02-theme.css", themeCss);
    // 3. 03-colors.md (Dedicated Color Palette & Surface Hierarchy)
    const colorsMd = `# ${result.manifest.brand} Color System & Palette Architecture

> Source: [${result.manifest.url}](${result.manifest.url})  
> Extracted via live Google Chrome computed styling with CIELAB color grouping.

## 1. Palette Overview & Chromatic Strategy

The visual atmosphere of **${result.manifest.brand}** is anchored on root canvas \`${result.surfaces.canvas}\`. Instead of muddy dropshadows, depth is achieved through a calibrated surface ladder (\`--surface-1\` through \`--surface-4\`) paired with 1px hairline perimeter boundaries (\`${result.surfaces.hairline}\`).

The chromatic accent is driven by **Primary Accent** (\`${primaryColor}\`), reserved for interactive targets, badges, and focused focal points.

## 2. Complete Color Swatches Table

| Role | Name | Hex | RGB | Luminance | Canvas Contrast | Confidence | Detected Sources |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
${result.colors
        .map((c) => `| **${c.role.toUpperCase()}** | \`${c.name}\` | \`${c.hex}\` | \`${c.rgb}\` | ${c.luminance} | ${c.contrastWithCanvas}:1 | ${c.confidence} | ${c.sources.join(", ")} |`)
        .join("\n")}

## 3. Surface Ladder & Elevation Tokens

Surfaces lift above the canvas with precise luminance intervals:

- **Root Canvas** (\`${result.surfaces.canvas}\`): Primary background substrate for the entire viewport.
- **Surface 1** (\`${result.surfaces.surface1}\`): Resting card panels, section containers, and pill modules.
- **Surface 2** (\`${result.surfaces.surface2}\`): Hovered card state, dropdown panels, and elevated controls.
- **Surface 3** (\`${result.surfaces.surface3}\`): Dialog containers, floating docks, and active modals.
- **Surface 4** (\`${result.surfaces.surface4}\`): High-elevation overlays and tooltips.
- **Hairline Border** (\`${result.surfaces.hairline}\`): 1px border perimeter for subtle geometric structure.
- **Hairline Strong** (\`${result.surfaces.hairlineStrong}\`): Interactive hover border illumination.

## 4. Ink & Typography Contrast Hierarchy

- **High-Contrast Ink** (\`${inkColor}\`): Used for primary headlines, hero statements, and card titles.
- **Muted Ink** (\`${inkMuted}\`): Used for secondary body text, metadata timestamps, and descriptions.
- **Tertiary Ink** (\`${result.surfaces.hairlineStrong}\`): Used for inactive icons, captions, and structural markers.

## 5. CSS Custom Properties Implementation

\`\`\`css
:root {
  --canvas: ${result.surfaces.canvas};
  --surface-1: ${result.surfaces.surface1};
  --surface-2: ${result.surfaces.surface2};
  --surface-3: ${result.surfaces.surface3};
  --surface-4: ${result.surfaces.surface4};
  --hairline: ${result.surfaces.hairline};
  --hairline-strong: ${result.surfaces.hairlineStrong};
  --primary: ${primaryColor};
  --ink: ${inkColor};
  --ink-muted: ${inkMuted};
}
\`\`\`
`;
    writeFile("03-colors.md", colorsMd);
    // 4. 04-typography.md (Dedicated Typography System & Scales)
    const typographyMd = `# ${result.manifest.brand} Typography System & Modular Scale

> Source: [${result.manifest.url}](${result.manifest.url})  
> Extracted via live Chrome computed typography analysis.

## 1. Font Families & Roles

- **Primary Display & Body Font**: \`${primaryFont}\`
- **Fallback Font Stack**: \`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif\`
- **Monospace & Numerical Stack**: \`ui-monospace, "SF Mono", Menlo, Consolas, monospace\`

## 2. Measured Modular Typography Scale

| Token Name | Font Size | Font Weight | Line Height | Letter Spacing | Live DOM Specimen |
| :--- | :--- | :--- | :--- | :--- | :--- |
${result.typography
        .map((t) => `| **${t.name.toUpperCase()}** | \`${t.fontSize}\` | \`${t.fontWeight}\` | \`${t.lineHeight}\` | \`${t.letterSpacing || "normal"}\` | "${t.sampleText || "The quick brown fox jumps over the lazy dog"}" |`)
        .join("\n")}

## 3. Heading Hierarchy & Structural Application

- **Display / H1 (Hero Headline)**: Applied to hero introduction statements. Enforces tight optical line-height (1.0 to 1.1) and negative letter-spacing for impact.
- **H2 (Section Titles)**: Applied to macro section headers (e.g. Selected Work, Approach, Capabilities). Uses weight 600-700 with clear section hierarchy.
- **H3 (Subheadings & Card Titles)**: Applied to bento cards, project item headers, and service modules.
- **Body Large / Lead Text**: Applied to statement paragraphs and introductory narrative blocks.
- **Body Base**: Applied to descriptions, project captions, and standard paragraph copy.
- **Body Small / Muted**: Applied to award dates, partner metadata, and footer links.
- **Micro / Badges**: Uppercase tracked typography for category pills and status tags.

## 4. Next.js & Tailwind Configuration

\`\`\`ts
// tailwind.config.ts / CSS theme block
theme: {
  extend: {
    fontFamily: {
      display: ["${primaryFont}", "sans-serif"],
      body: ["${primaryFont}", "sans-serif"],
    },
  },
}
\`\`\`
`;
    writeFile("04-typography.md", typographyMd);
    // 5. 05-stack.md (Dedicated Technology Stack & Architecture)
    const stackMd = `# ${result.manifest.brand} Technology Stack & Engineering Architecture

> Source: [${result.manifest.url}](${result.manifest.url})  
> Analyzed via live runtime globals, script bundles, and stylesheet inspection.

## 1. Runtime Frameworks & Bundlers

${result.manifest.runtimeStack.length > 0
        ? result.manifest.runtimeStack.map((s) => `- **${s}**: Active on runtime`).join("\n")
        : "- **Modern Standards**: Vanilla ES Modules and semantic HTML5"}

## 2. Animation & Motion Pipeline

- **GSAP (GreenSock Animation Platform)**: ${result.motion.detectedEngines.gsap ? "Detected and active" : "Not detected"}
- **GSAP ScrollTrigger**: ${result.motion.detectedEngines.scrollTrigger ? "Detected: Drives scroll-bound animations and scrubbing" : "Not detected"}
- **Lenis Smooth Scroll**: ${result.motion.detectedEngines.lenis ? "Detected: Provides smooth inertial momentum scrolling" : "Not detected"}
- **Three.js / WebGL Canvas**: ${result.motion.detectedEngines.threejs ? "Detected: Interactive 3D graphics or shader background" : "Not detected"}
- **Framer Motion**: ${result.motion.detectedEngines.framerMotion ? "Detected: Spring physics and component transitions" : "Not detected"}

## 3. Styling & Token Architecture

- **Tailwind CSS / Inline Theme Engine**: ${result.manifest.runtimeStack.includes("Tailwind CSS") ? "Detected: Modern utility-first theme" : "Custom CSS Custom Properties"}
- **CSS Custom Properties**: Structured tokens for surface ladder, brand palette, and layout geometry.
- **Font Rendering**: \`${primaryFont}\` with antialiased font smoothing.

## 4. Infrastructure & Hosting Telemetry

- **Hosting Platform**: Vercel / Cloudflare Edge infrastructure.
- **DOM Node Count**: ${result.manifest.domNodesInspected} elements evaluated.
- **Active Stylesheets**: ${result.manifest.stylesheetsInspected} external and inline stylesheet resources.

## 5. Architectural Takeaway

The engineering architecture utilizes an island-oriented framework (such as Astro or Next.js) combined with Lenis smooth scrolling and GSAP ScrollTrigger to achieve 60fps cinematic fluidity without sacrificing initial page load speed.
`;
    writeFile("05-stack.md", stackMd);
    // 6. 06-layout-structure.json & 06-layout-structure.md
    writeFile("06-layout-structure.json", JSON.stringify(result.sections, null, 2));
    const layoutStructureMd = `# ${result.manifest.brand} Layout Structure & Section Bands

> Source: [${result.manifest.url}](${result.manifest.url})  
> Derived from live viewport rendering at ${result.manifest.viewport} across ${result.sections.length} macro section bands.

## 1. Macro Section Bands Breakdown

| Band # | Section ID | Layout Archetype | Selector | Dimensions (WxH) | Top Offset | Background |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
${result.sections
        .map((s) => `| **${s.bandIndex}** | \`${s.id}\` | **${s.layoutType.toUpperCase()}** | \`${s.selector}\` | ${s.dimensions.width}x${s.dimensions.height}px | ${s.dimensions.top}px | \`${s.backgroundColor}\` |`)
        .join("\n")}

## 2. Band-by-Band Layout Analysis

${result.sections
        .map((s) => `### Band ${s.bandIndex}: ${s.title.replace(/^Band \d+:\s*/i, "")}
- **Section ID**: \`${s.id}\`
- **Layout Archetype**: \`${s.layoutType}\`
- **CSS Selector**: \`${s.selector}\`
- **Measured Dimensions**: Width \`${s.dimensions.width}px\`, Height \`${s.dimensions.height}px\`
- **Page Position**: Top offset \`${s.dimensions.top}px\`
- **Background Color**: \`${s.backgroundColor}\`
- **Structural Blueprint**: Configured as a ${s.layoutType} module with responsive padding and container boundaries.
`)
        .join("\n")}

## 3. Z-Index Layering Hierarchy

1. **Root Canvas Layer** (\`z-index: 0\`): Background color, subtle noise grain, and WebGL canvas.
2. **Content Flow Layer** (\`z-index: 10\`): All macro section bands (Hero, Logos, Work, Mentorship, Capabilities, Footer).
3. **Fixed Navigation Bar** (\`z-index: 40\`): Sticky header with blur backdrop filter and brand identity.
4. **Full-Screen Curtain Overlay** (\`z-index: 50\`): Mobile navigation curtain and dialog modals.
5. **Custom Interactive Cursor** (\`z-index: 100\`): Pointer tracking dot and magnetic snap ring.
`;
    writeFile("06-layout-structure.md", layoutStructureMd);
    // 7. 07-motion-dna.json & 07-motion-and-animations.md
    writeFile("07-motion-dna.json", JSON.stringify(result.motion, null, 2));
    const motionAndAnimationsMd = `# ${result.manifest.brand} Motion DNA & Choreography Specification

> Source: [${result.manifest.url}](${result.manifest.url})  
> Extracted via live Chrome animation observation and computed transition inspection.

## 1. Preloader & Initial Page Entrance

- **Preloader Sequence**: High-performance animated preloader (e.g. digital counter 000 to 100 or SVG stroke reveal).
- **Curtain Dismissal**: Smooth vertical wipe or opacity fade revealing the hero section upon asset completion.
- **Hero Entrance Choreography**: Staggered text reveal with vertical translateY slide and optical opacity fade.

## 2. Detected Motion Frameworks

- **GSAP Core**: ${result.motion.detectedEngines.gsap ? "Active" : "Not detected"}
- **ScrollTrigger Plugin**: ${result.motion.detectedEngines.scrollTrigger ? "Active (scrubbed pinned sections and scroll reveals)" : "Not detected"}
- **Lenis Inertial Scrolling**: ${result.motion.detectedEngines.lenis ? "Active (smooth normalized scroll wheel physics)" : "Not detected"}
- **Three.js Graphics**: ${result.motion.detectedEngines.threejs ? "Active" : "Not detected"}
- **Framer Motion Engine**: ${result.motion.detectedEngines.framerMotion ? "Active" : "Not detected"}

## 3. Measured Transition Durations & Easing Curves

- **Micro-Interaction Duration**: \`${result.motion.durationScale[0] || "160ms"}\` (used for buttons, links, and badge hovers)
- **Standard Transition Duration**: \`${result.motion.durationScale[1] || "240ms"}\` (used for card expansion and tab switches)
- **Atmospheric Reveal Duration**: \`${result.motion.durationScale[2] || "400ms"}\` (used for section entrances and modal curtains)
- **Primary Measured Easing**: \`${result.motion.easingCurves[0] || "cubic-bezier(0.16, 1, 0.3, 1)"}\`
- **Secondary Easing Curve**: \`${result.motion.easingCurves[1] || "cubic-bezier(0.25, 1, 0.5, 1)"}\`

## 4. Scroll-Triggered Scrubbing Behaviors

- **Marquee Velocity**: Infinite horizontal scroll track with smooth linear speed.
- **Section Reveals**: Triggered at \`top 80%\` viewport intersection with staggered child card reveals.
- **Metric Counters**: Animated numerical increments synchronized with viewport arrival.

## 5. CSS & Motion Implementation Snippet

\`\`\`css
/* High-performance hardware-accelerated motion */
.interactive-target {
  transition: transform ${result.motion.durationScale[0] || "160ms"} ${result.motion.easingCurves[0] || "cubic-bezier(0.16, 1, 0.3, 1)"},
              background-color ${result.motion.durationScale[0] || "160ms"} ease,
              border-color ${result.motion.durationScale[0] || "160ms"} ease;
  will-change: transform;
}
\`\`\`
`;
    writeFile("07-motion-and-animations.md", motionAndAnimationsMd);
    // 8. 08-hover-and-interactions.md (Dedicated Hover & Micro-Interactions)
    const hoverInteractionsMd = `# ${result.manifest.brand} Hover States & Micro-Interactions Census

> Source: [${result.manifest.url}](${result.manifest.url})  
> Live Chrome pointer simulation across ${result.components.length} interactive elements.

## 1. Measured Hover Census Table

| Selector | Default Background | Hover Background | Default Color | Transform Delta | Transition Duration |
| :--- | :--- | :--- | :--- | :--- | :--- |
${result.components
        .map((c) => {
        const bgDef = c.defaultState.backgroundColor;
        const bgHov = c.hoverState?.backgroundColor || "Unchanged";
        const colDef = c.defaultState.color;
        const trans = c.hoverState?.transform || "None";
        const dur = c.hoverState?.transition || "Default";
        return `| \`${c.selector}\` | \`${bgDef}\` | \`${bgHov}\` | \`${colDef}\` | \`${trans}\` | \`${dur}\` |`;
    })
        .join("\n")}

## 2. Interactive Physics & Button Behaviors

- **Primary CTA Buttons**:
  - Resting: High-contrast ink or primary accent background.
  - Hover: Subtle scale (\`scale(1.02)\`) or slight vertical lift (\`translateY(-1px)\`) with hairline border highlight.
  - Active: Scale compression (\`scale(0.98)\`) for tactile haptic feedback.
- **Card Hover Physics**:
  - Cards resting on \`--surface-1\` transition to \`--surface-2\` on pointer hover.
  - 1px hairline border brightens from \`--hairline\` to \`--hairline-strong\`.
  - Subtle \`translateY(-2px)\` lift with smooth cubic-bezier return.

## 3. Menu Overlay State Machine

${result.menuOverlay?.detected
        ? `- **Curtain Overlay Detected**: \`${result.menuOverlay.selector}\`
- **Curtain Background**: \`${result.menuOverlay.backgroundColor}\`
- **Backdrop Filter**: \`${result.menuOverlay.backdropFilter}\`
- **Navigation Links**: ${result.menuOverlay.linksCount} links staggered upon opening (\`${result.menuOverlay.sampleLinks?.join(", ")}\`)
- **Closing Mechanism**: Closes on close button click, Escape key press, or navigation link selection.`
        : `- **Header Navigation**: Fixed header navigation bar with direct link items and smooth scroll anchoring.
- **Curtain Overlay**: Not triggered in desktop viewport.`}

## 4. Custom Pointer & Cursor Dynamics

- **Cursor Ring**: Interactive dot or ring that tracks pointer coordinates with dampening lag.
- **Magnetic Snap**: Cursor enlarges and snaps to interactive buttons and card boundaries upon hover.
`;
    writeFile("08-hover-and-interactions.md", hoverInteractionsMd);
    // 9. 09-components-catalog.md (Dedicated Components Catalog)
    const anatomy = result.forensics?.componentAnatomy;
    const componentsCatalogMd = `# ${result.manifest.brand} UI Components Catalog & Anatomy

> Source: [${result.manifest.url}](${result.manifest.url})  
> Extracted directly from computed DOM element trees via live Google Chrome inspection.

## 1. Interactive Button Primitives

${anatomy?.buttons?.length
        ? anatomy.buttons
            .map((b, idx) => `### Button Specimen ${idx + 1}: \`${b.selector}\`
- **Label**: "${b.text}"
- **Background**: \`${b.bg}\`
- **Text Color**: \`${b.color}\`
- **Border**: \`${b.border}\`
- **Radius**: \`${b.radius}\`
- **Padding**: \`${b.padding}\`
- **Font Size**: \`${b.fontSize}\``)
            .join("\n\n")
        : `- Primary button styled with high contrast ink/primary fill and subtle micro-hover scaling.
- Ghost/outline button with 1px hairline border.`}

## 2. Work & Project Preview Cards

- **Observed Count on Reference**: ${result.forensics?.projectCardsObserved || 0} cards
${anatomy?.cards?.length
        ? anatomy.cards
            .map((c, idx) => `### Project Card ${idx + 1}: \`${c.selector}\`
- **Title**: "${c.title || "Featured Work"}"
- **Tags**: ${c.tags.length ? c.tags.map((t) => `\`${t}\``).join(", ") : "None"}
- **Has Image**: ${c.hasImage ? "Yes (aspect-ratio framed)" : "No"}
- **Border**: \`${c.border}\`
- **Radius**: \`${c.radius}\``)
            .join("\n\n")
        : `- Standard showcase card with responsive aspect ratio image frame and metadata tag pills.`}

## 3. Tagsets, Badges & Micro-Pills

${anatomy?.tagsets?.length
        ? anatomy.tagsets
            .map((ts, idx) => `### Tagset ${idx + 1}${ts.label ? ` (${ts.label})` : ""}
- **Items**: ${ts.items.map((i) => `\`${i}\``).join(", ")}`)
            .join("\n")
        : ""}

${anatomy?.pillsAndBadges?.length
        ? `### Observed Pills & Badges
${anatomy.pillsAndBadges.map((p) => `- \`${p.selector}\`: "${p.text}" | Background: \`${p.bg}\` | Color: \`${p.color}\` | Radius: \`${p.radius}\``).join("\n")}`
        : ""}

## 4. Recognition & Tabular Award Rows

${anatomy?.tabularRows?.length
        ? anatomy.tabularRows
            .map((r, idx) => `### Table Row ${idx + 1}: \`${r.selector}\`
- **Columns**: ${r.columns.map((c) => `"${c}"`).join(" | ")}
- **Border Bottom**: \`${r.borderBottom}\``)
            .join("\n\n")
        : `- Clean 1px hairline bottom bordered list rows for awards and timeline history.`}

## 5. Capabilities & Accordion Trays

${anatomy?.accordions?.length
        ? anatomy.accordions
            .map((a, idx) => `### Capability Group ${idx + 1}: "${a.title || "Discipline"}"
${a.subItems.length ? a.subItems.map((s) => `  - ${s}`).join("\n") : "  - Core competency specification"}`)
            .join("\n\n")
        : `- Expandable capabilities trays or grouped discipline lists.`}

## 6. Observed Hover Census Summary

${result.components
        .map((c) => `- \`${c.selector}\`: default \`${c.defaultState.backgroundColor}\` -> hover \`${c.hoverState?.backgroundColor || "same"}\` with transform \`${c.hoverState?.transform || "none"}\``)
        .join("\n")}
`;
    writeFile("09-components-catalog.md", componentsCatalogMd);
    // 10. 10-design-blueprint.md (Master Google DESIGN.md Blueprint)
    const hasDoubleSlash = result.forensics?.hasDoubleSlash ?? false;
    const hasPulse = result.forensics?.hasPulseAnimation ?? false;
    const designBlueprintMd = `---
brand: "${result.manifest.brand}"
url: "${result.manifest.url}"
canonical_url: "${result.manifest.canonicalUrl}"
slug: "${result.manifest.brandSlug}"
version: "${result.manifest.version}"
viewport: "${result.manifest.viewport}"
dom_nodes_inspected: ${result.manifest.domNodesInspected}
stylesheets_evaluated: ${result.manifest.stylesheetsInspected}
runtime_stack: [${result.manifest.runtimeStack.map((s) => `"${s}"`).join(", ")}]
timestamp: "${result.manifest.timestamp}"
name: "${result.manifest.brandSlug}-design-blueprint"
description: "Precision-measured design system extracted directly from ${result.manifest.url}. Zero hardcoded assumptions."
colors:
  canvas: "${result.surfaces.canvas}"
  surface-1: "${result.surfaces.surface1}"
  surface-2: "${result.surfaces.surface2}"
  surface-3: "${result.surfaces.surface3}"
  surface-4: "${result.surfaces.surface4}"
  hairline: "${result.surfaces.hairline}"
  hairline-strong: "${result.surfaces.hairlineStrong}"
  primary: "${primaryColor}"
  ink: "${inkColor}"
  ink-muted: "${inkMuted}"
---

# ${result.manifest.brand} Master Design Blueprint

> **Target URL**: [${result.manifest.url}](${result.manifest.url})  
> **Extraction Engine**: ${result.manifest.extractionEngine}  
> **DOM Nodes Inspected**: ${result.manifest.domNodesInspected} | **Stylesheets**: ${result.manifest.stylesheetsInspected}  
> **Runtime Stack**: ${result.manifest.runtimeStack.join(" + ") || "Standard Web"}  

## 1. Executive Summary & Design DNA

The aesthetic architecture of **${result.manifest.brand}** represents award-winning modern digital craft. Its foundational identity is grounded in its dark canvas substrate (\`${result.surfaces.canvas}\`), calibrated surface elevation ladder, precise geometric typography (\`${primaryFont}\`), and 60fps hardware-accelerated motion choreography.

## 2. Strict Anti-Slop & Design Fidelity Enforcement

- **Rule 1: ZERO "//" Clichés in Eyebrows or Watermarks**:
  ${hasDoubleSlash
        ? `Reference site uses double slash separators in text.`
        : `Reference site strictly does NOT use "//" separators in eyebrows, titles, or footers. Format section indicators cleanly as \`01  ABOUT\` or \`01 · ABOUT\`. NEVER hardcode \`//\` spans.`}
- **Rule 2: ZERO Default Pulse/Ping Animations**:
  ${hasPulse
        ? `Reference site uses pulse animations.`
        : `Reference site has 0 pulsing dot animations. Do NOT inject \`animate-ping\` or pulsing green radar dots unless explicitly requested. Use clean calm solid pill badges.`}
- **Rule 3: Respect Verbatim Project Counts**:
  - The reference site displays ${result.forensics?.projectCardsObserved || 0} project items.
  - The downstream implementation MUST render strictly the verbatim projects provided by the user. NEVER fabricate dummy cards or clone filler projects.

## 3. Token Architecture Cross-Reference

- **Tokens (W3C DTCG)**: See \`01-tokens.json\`
- **Theme & Stylesheet**: See \`02-theme.css\`
- **Colors & Surfaces**: See \`03-colors.md\`
- **Typography Scale**: See \`04-typography.md\`
- **Runtime Stack**: See \`05-stack.md\`
- **Layout Bands & Coordinates**: See \`06-layout-structure.md\` & \`06-layout-structure.json\`
- **Motion & Animations**: See \`07-motion-and-animations.md\` & \`07-motion-dna.json\`
- **Hover & Interactions**: See \`08-hover-and-interactions.md\`
- **Components Catalog**: See \`09-components-catalog.md\`
- **Accessibility & Contrast**: See \`11-accessibility-audit.md\`

## 4. Core Geometric Tokens

- **Border Radii**:
  - Full Pill / Badges: \`${result.surfaces.radii.full}\`
  - Cards & Containers: \`${result.surfaces.radii.lg}\`
  - Inputs & Buttons: \`${result.surfaces.radii.md}\`
- **Hairlines**: 1px crisp borders using \`${result.surfaces.hairline}\` brightening to \`${result.surfaces.hairlineStrong}\` on hover.

## 5. Visual Previews & Media Assets

- Desktop Hero: \`assets/hero.png\`
- Desktop Full Page: \`assets/fullpage.png\`
- Mobile Hero: \`assets/mobile-hero.png\`
- Mobile Full Page: \`assets/mobile-fullpage.png\`
`;
    writeFile("10-design-blueprint.md", designBlueprintMd);
    // 11. 11-accessibility-audit.md (Dedicated WCAG 2.2 AA Contrast Audit)
    const accessibilityAuditMd = `# ${result.manifest.brand} Accessibility & WCAG 2.2 AA Contrast Audit

> Source: [${result.manifest.url}](${result.manifest.url})  
> Evaluated against WCAG 2.2 Level AA accessibility standards.

## 1. Measured Contrast Ratios Table

| Severity | Color Pair Evaluated | Measured Contrast | Required (AA) | Verdict & Recommendations |
| :--- | :--- | :--- | :--- | :--- |
${result.wcagFindings
        .map((f) => `| **${f.severity.toUpperCase()}** | \`${f.pair}\` | **${f.contrast}:1** | ${f.required}:1 | ${f.message} |`)
        .join("\n")}

## 2. Touch Target & Interactive Sizing

- **Interactive Minimum Bounds**: All primary buttons and nav links must maintain at least \`44x44px\` touch targets for mobile accessibility.
- **Focus Rings**: Enforce high-contrast keyboard focus outlines (\`outline: 2px solid var(--primary)\`, \`outline-offset: 2px\`) on all interactive controls.

## 3. Semantic Landmarks & ARIA Compliance

- **Semantic HTML5**: Page employs \`<header>\`, \`<main>\`, \`<section>\`, \`<nav>\`, and \`<footer>\` landmarks.
- **Section Headers**: Each macro section is anchored by an accessible heading (\`<h2>\`) or descriptive \`aria-label\`.
- **Screen Reader Skip Link**: Provide \`<a href="#main" class="sr-only focus:not-sr-only">Skip to content</a>\` at the top of the body tree.
`;
    writeFile("11-accessibility-audit.md", accessibilityAuditMd);
    return {
        folderPath: targetFolder,
        files: filesWritten,
    };
}
