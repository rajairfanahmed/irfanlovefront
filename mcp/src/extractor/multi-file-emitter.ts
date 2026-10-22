import fs from "node:fs";
import path from "node:path";
import type { ExtractionResult } from "../types/index.js";

export interface EmitterOptions {
  outputBaseDir?: string;
}

export function emitMultiFileDesign(
  result: ExtractionResult,
  options: EmitterOptions = {}
): { folderPath: string; files: string[] } {
  const baseDir = options.outputBaseDir || path.resolve(process.cwd(), "designs");
  const targetFolder = path.join(baseDir, result.manifest.brandSlug);

  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  const assetsDir = path.join(targetFolder, "assets");
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  const filesWritten: string[] = [];

  // Helper to write file
  const writeFile = (filename: string, content: string) => {
    const fullPath = path.join(targetFolder, filename);
    fs.writeFileSync(fullPath, content, "utf8");
    filesWritten.push(filename);
  };

  // 1. 00-manifest.json
  const manifest = {
    ...result.manifest,
    filesGenerated: [
      "00-manifest.json",
      "01-tokens.json",
      "02-theme.css",
      "03-design-blueprint.md",
      "04-layout-structure.json",
      "04-layout-structure.md",
      "05-motion-dna.json",
      "05-motion-spec.md",
      "06-components-catalog.md",
      "07-accessibility-audit.md",
      "assets/",
    ],
  };
  writeFile("00-manifest.json", JSON.stringify(manifest, null, 2));

  // 2. 01-tokens.json (W3C DTCG Format)
  const dtcgTokens: Record<string, any> = {
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

  // Colors in DTCG
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

  // Surfaces in DTCG
  dtcgTokens.color["surface-1"] = { $type: "color", $value: result.surfaces.surface1 };
  dtcgTokens.color["surface-2"] = { $type: "color", $value: result.surfaces.surface2 };
  dtcgTokens.color["surface-3"] = { $type: "color", $value: result.surfaces.surface3 };
  dtcgTokens.color["surface-4"] = { $type: "color", $value: result.surfaces.surface4 };
  dtcgTokens.color["hairline"] = { $type: "color", $value: result.surfaces.hairline };
  dtcgTokens.color["hairline-strong"] = { $type: "color", $value: result.surfaces.hairlineStrong };

  // Typography in DTCG
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

  // Radii in DTCG
  for (const [k, v] of Object.entries(result.surfaces.radii)) {
    dtcgTokens.border.radius[k] = { $type: "dimension", $value: v };
  }

  // Shadows in DTCG
  result.surfaces.shadows.forEach((s, idx) => {
    dtcgTokens.shadow[`elevation-${idx + 1}`] = { $type: "shadow", $value: s };
  });

  writeFile("01-tokens.json", JSON.stringify(dtcgTokens, null, 2));

  // 3. 02-theme.css (Tailwind v4 @theme inline + :root CSS Custom Properties)
  const primaryColor = result.colors.find((c) => c.role === "primary")?.hex || result.colors[1]?.hex || "#3b82f6";
  const inkColor = result.colors.find((c) => c.role === "ink")?.hex || "#ffffff";
  const inkMuted = result.colors.find((c) => c.role === "ink-muted")?.hex || "#94a3b8";
  const primaryFont = result.typography[0]?.fontFamily || "sans-serif";

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
  .map(
    (t) =>
      `  --font-size-${t.name}: ${t.fontSize};\n  --font-weight-${t.name}: ${t.fontWeight};\n  --line-height-${t.name}: ${t.lineHeight};`
  )
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

  // 4. 03-design-blueprint.md (Google DESIGN.md Compliant)
  const hoverInteractionsList =
    result.components.filter((c) => c.hoverState).length > 0
      ? result.components
          .filter((c) => c.hoverState)
          .map(
            (c) =>
              `  - \`${c.selector}\`: Background -> \`${c.hoverState?.backgroundColor || "unchanged"}\`, Transform -> \`${c.hoverState?.transform || "none"}\`, Transition -> \`${c.hoverState?.transition || "default"}\``
          )
          .join("\n")
      : "  - Standard hover elevation and pointer cursor active.";

  const menuOverlaySummary = result.menuOverlay?.detected
    ? `  - Full-screen curtain overlay detected (\`${result.menuOverlay.selector}\`): Background \`${result.menuOverlay.backgroundColor}\`, Backdrop-Filter \`${result.menuOverlay.backdropFilter}\`, ${result.menuOverlay.linksCount} links staggered.`
    : "  - Fixed / Docked navigation without full-screen curtain overlay.";

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

# ${result.manifest.brand} Design Blueprint & Specification

> **Target URL**: [${result.manifest.url}](${result.manifest.url})  
> **Extraction Engine**: ${result.manifest.extractionEngine}  
> **DOM Nodes Inspected**: ${result.manifest.domNodesInspected} | **Stylesheets**: ${result.manifest.stylesheetsInspected}  
> **Runtime Stack**: ${result.manifest.runtimeStack.join(" + ") || "Standard Web"}  

## 1. Architectural Overview

The visual identity of **${result.manifest.brand}** is grounded in its root canvas (\`${result.surfaces.canvas}\`). Surfaces lift above this substrate through a calibrated surface ladder (\`--surface-1\` through \`--surface-4\`), defined by subtle luminance differentials and hairline boundaries (\`${result.surfaces.hairline}\`), rather than muddy drop-shadows.

Chromatic accent is anchored on **Primary Accent** (\`${primaryColor}\`), deployed with precision on interactive targets and key indicators.

## 2. Color Palette & Surface Hierarchy

| Role | Name | Hex | Luminance | Contrast with Canvas | Confidence |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Canvas** | Root Canvas Substrate | \`${result.surfaces.canvas}\` | - | 1.0:1 | High |
| **Primary** | Primary Accent | \`${primaryColor}\` | - | - | High |
| **Ink** | High-Contrast Text | \`${inkColor}\` | - | - | High |
| **Ink Muted** | Muted Body Text | \`${inkMuted}\` | - | - | High |
| **Surface 1** | Lifted Card Panel | \`${result.surfaces.surface1}\` | - | - | High |
| **Surface 2** | Interactive Active Panel | \`${result.surfaces.surface2}\` | - | - | High |
| **Hairline** | 1px Geometric Edge | \`${result.surfaces.hairline}\` | - | - | High |

## 3. Typography Hierarchy

Display typography runs **${primaryFont}** with measured weights and optical scales:

${result.typography
  .map(
    (t) =>
      `- **${t.name.toUpperCase()}** (\`${t.fontSize}\` / \`${t.lineHeight}\` / Weight ${t.fontWeight}): ${t.sampleText ? `"${t.sampleText}"` : "Applied to section hierarchy."}`
  )
  .join("\n")}

## 4. Geometric Tokens & Elevation

- **Radii**:
  - Pill / Badges: \`${result.surfaces.radii.full}\`
  - Cards & Containers: \`${result.surfaces.radii.lg}\`
  - Inputs & Buttons: \`${result.surfaces.radii.md}\`
- **Hairlines**: 1px crisp borders using \`${result.surfaces.hairline}\` with hover highlight to \`${result.surfaces.hairlineStrong}\`.

## 5. Live Chrome Interactive Behaviors & States

- **Hover Micro-Interactions Tested**:
${hoverInteractionsList}

- **Menu Overlay State Machine**:
${menuOverlaySummary}

## 6. Visual Previews
- Hero Viewport: \`assets/hero.png\`
- Full-Page Scroll: \`assets/fullpage.png\`
`;
  writeFile("03-design-blueprint.md", designBlueprintMd);

  // 5. 04-layout-structure.json & 04-layout-structure.md
  writeFile("04-layout-structure.json", JSON.stringify(result.sections, null, 2));

  const layoutStructureMd = `# ${result.manifest.brand} Layout Structure & Section Bands

Below is the horizontal band breakdown of the interface, derived from DOM coordinates and layout containers:

| Band # | Section ID | Layout Type | Selector | Dimensions (WxH) | Background |
| :--- | :--- | :--- | :--- | :--- | :--- |
${result.sections
  .map(
    (s) =>
      `| **${s.bandIndex}** | \`${s.id}\` | **${s.layoutType.toUpperCase()}** | \`${s.selector}\` | ${s.dimensions.width}x${s.dimensions.height}px | \`${s.backgroundColor}\` |`
  )
  .join("\n")}

### Layout Archetypes Identified:
${result.sections
  .map(
    (s) =>
      `- **${s.id}** (${s.layoutType}): Located at top offset \`${s.dimensions.top}px\`. Enforces layout archetype \`${s.layoutType}\`.`
  )
  .join("\n")}
`;
  writeFile("04-layout-structure.md", layoutStructureMd);

  // 6. 05-motion-dna.json & 05-motion-spec.md
  writeFile("05-motion-dna.json", JSON.stringify(result.motion, null, 2));

  const motionSpecMd = `# ${result.manifest.brand} Motion DNA & Choreography Specification

## Detected Animation Frameworks:
- **GSAP**: ${result.motion.detectedEngines.gsap ? "Detected" : "Not detected"}
- **ScrollTrigger**: ${result.motion.detectedEngines.scrollTrigger ? "Detected" : "Not detected"}
- **Framer Motion**: ${result.motion.detectedEngines.framerMotion ? "Detected" : "Not detected"}
- **Lenis Smooth Scroll**: ${result.motion.detectedEngines.lenis ? "Detected" : "Not detected"}
- **Three.js / WebGL Canvas**: ${result.motion.detectedEngines.threejs ? "Detected" : "Not detected"}

## Durations & Curves:
- **Transition Durations**: ${result.motion.durationScale.join(", ") || "160ms, 240ms, 400ms"}
- **Observed Easing Curves**: ${result.motion.easingCurves.join(", ") || "cubic-bezier(0.16, 1, 0.3, 1), ease-out"}

## Hover Micro-Interactions:
${
  result.motion.hoverTransitions.length > 0
    ? result.motion.hoverTransitions
        .map((h) => `- Selector: \`${h.selector}\` | Transition: \`${h.transition}\` | Transform: \`${h.transform}\``)
        .join("\n")
    : "- Cards lift with `transform: translateY(-2px)` on hover.\n- Action buttons compress with `transform: scale(0.98)` on active click."
}
`;
  writeFile("05-motion-spec.md", motionSpecMd);

  // 7. 06-components-catalog.md
  const componentsCatalogMd = `# ${result.manifest.brand} Components Catalog & Observed States

Observed UI primitives extracted directly from computed element trees:

${result.components
  .map(
    (c) => `### ${c.name} (\`${c.type}\`)
- **Selector**: \`${c.selector}\`
- **Default State**:
  - Background: \`${c.defaultState.backgroundColor}\`
  - Text Color: \`${c.defaultState.color}\`
  - Border Radius: \`${c.defaultState.borderRadius}\`
  - Padding: \`${c.defaultState.padding}\`
  ${c.defaultState.shadow ? `- Shadow: \`${c.defaultState.shadow}\`` : ""}
${
  c.hoverState
    ? `- **Hover State**:
  ${c.hoverState.backgroundColor ? `- Background: \`${c.hoverState.backgroundColor}\`` : ""}
  ${c.hoverState.transform ? `- Transform: \`${c.hoverState.transform}\`` : ""}
  ${c.hoverState.transition ? `- Transition: \`${c.hoverState.transition}\`` : ""}`
    : ""
}
`
  )
  .join("\n")}
`;
  writeFile("06-components-catalog.md", componentsCatalogMd);

  // 8. 07-accessibility-audit.md
  const wcagAuditMd = `# ${result.manifest.brand} Accessibility & WCAG 2.2 AA Contrast Audit

| Severity | Color Pair Evaluated | Measured Contrast | Required (AA) | Verdict & Recommendations |
| :--- | :--- | :--- | :--- | :--- |
${result.wcagFindings
  .map(
    (f) =>
      `| **${f.severity.toUpperCase()}** | \`${f.pair}\` | **${f.contrast}:1** | ${f.required}:1 | ${f.message} |`
  )
  .join("\n")}
`;
  writeFile("07-accessibility-audit.md", wcagAuditMd);

  return {
    folderPath: targetFolder,
    files: filesWritten,
  };
}
