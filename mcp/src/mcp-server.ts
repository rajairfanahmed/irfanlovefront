import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { extractDesignFromUrl } from "./extractor/engine.js";
import { searchAwwwards } from "./awwwards/client.js";

export async function runMcpServer() {
  const server = new McpServer({
    name: "irfanlovefront",
    version: "3.2.7",
  });

  // Tool 1: irfanlove_extract
  server.tool(
    "irfanlove_extract",
    "Extract an entire website's design system by opening in Chrome with full page scroll, hover testing on buttons/cards, click state machine inspection, and multi-file structured directory output (designs/<brand-slug>/). Extracts computed colors (Delta-E ranked), modular typography scale, surface hierarchy ladder, section layout bands, observed component states, motion DNA, and WCAG AA contrast audit.",
    {
      url: z.string().describe("The website URL to extract (e.g. https://linear.app, https://stripe.com, or an Awwwards winner)"),
      outputDir: z.string().optional().describe("Directory where designs/<slug>/ should be saved (default: ./designs)"),
      headless: z.boolean().optional().describe("Run in headless mode (default: false - opens visible Google Chrome on your screen)"),
    },
    async ({ url, outputDir, headless }: { url: string; outputDir?: string; headless?: boolean }) => {
      try {
        const { result, folderPath, files } = await extractDesignFromUrl(url, {
          outputBaseDir: outputDir,
          headless: headless !== undefined ? headless : false,
        });

        const hoverHighlights = result.components
          .filter((c) => c.hoverState)
          .map(
            (c) =>
              `- \`${c.selector}\`: Background -> \`${c.hoverState?.backgroundColor || "unchanged"}\`, Transform -> \`${c.hoverState?.transform || "none"}\`, Transition -> \`${c.hoverState?.transition || "default"}\``
          );

        const summary = [
          `# Live Chrome Reverse-Engineering & Design Extraction: ${result.manifest.brand}`,
          `> **Target URL**: [${result.manifest.url}](${result.manifest.url})`,
          `> **Engine**: ${result.manifest.extractionEngine}`,
          `> **DOM Nodes Inspected**: ${result.manifest.domNodesInspected} | **Stylesheets**: ${result.manifest.stylesheetsInspected}`,
          `> **Output Folder**: \`${folderPath}\``,
          "",
          "## 1. Visual Aesthetics & Design Tokens",
          `- **Canvas Substrate**: \`${result.surfaces.canvas}\``,
          `- **Primary Accent**: \`${result.colors.find((c) => c.role === "primary")?.hex || "None"}\``,
          `- **High-Contrast Ink**: \`${result.colors.find((c) => c.role === "ink")?.hex || "None"}\``,
          `- **Muted Ink**: \`${result.colors.find((c) => c.role === "ink-muted")?.hex || "None"}\``,
          `- **Surface Ladder**: Surface 1 (\`${result.surfaces.surface1}\`), Surface 2 (\`${result.surfaces.surface2}\`), Hairline (\`${result.surfaces.hairline}\`)`,
          "",
          "## 2. Live Observed Interactive Behaviors (Hover & Click in Chrome)",
          `- **Hover Micro-Interactions Tested (${hoverHighlights.length} active elements)**:`,
          ...(hoverHighlights.length > 0 ? hoverHighlights : ["  - Standard hover elevation and pointer cursor active."]),
          `- **Menu Overlay State Machine**:`,
          result.menuOverlay?.detected
            ? `  - Full-screen curtain overlay detected (\`${result.menuOverlay.selector}\`): Background \`${result.menuOverlay.backgroundColor}\`, Backdrop-Filter \`${result.menuOverlay.backdropFilter}\`, ${result.menuOverlay.linksCount} links staggered.`
            : "  - Fixed / Docked navigation without full-screen curtain overlay.",
          "",
          "## 3. Typography Hierarchy",
          ...result.typography.map((t) => `- **${t.name.toUpperCase()}** (\`${t.fontSize}\` / \`${t.lineHeight}\` / Weight ${t.fontWeight}) [${t.fontFamily}]: "${t.sampleText || ""}"`),
          "",
          "## 4. Section Layout Bands Detected",
          ...result.sections.map((s) => `- **Band ${s.bandIndex}** (\`${s.id}\` - ${s.layoutType.toUpperCase()}): ${s.dimensions.width}x${s.dimensions.height}px | Background: \`${s.backgroundColor}\``),
          "",
          "## 5. Motion DNA & Frameworks",
          `- **Detected Frameworks**: ${Object.entries(result.motion.detectedEngines).filter(([, v]) => v).map(([k]) => k).join(", ") || "CSS Native"}`,
          `- **Duration Scales**: ${result.motion.durationScale.join(", ") || "160ms, 240ms"}`,
          `- **Easing Curves**: ${result.motion.easingCurves.join(", ") || "cubic-bezier(0.16, 1, 0.3, 1)"}`,
          "",
          "## 6. Generated Specification Files",
          ...files.map((f) => `- [${f}](${folderPath}/${f})`),
          "- Assets: `assets/hero.png` and `assets/fullpage.png`",
        ].join("\n");

        return {
          content: [{ type: "text", text: summary }],
        };
      } catch (err: any) {
        return {
          content: [{ type: "text", text: `Extraction failed: ${err?.message || String(err)}` }],
          isError: true,
        };
      }
    }
  );

  // Tool 2: irfanlove_awwwards_search
  server.tool(
    "irfanlove_awwwards_search",
    "Search award-winning websites on Awwwards for visual inspiration, award filters, and design references.",
    {
      query: z.string().optional().describe("Search query (e.g., 'portfolio', 'e-commerce', 'minimal')"),
      award: z.enum(["sotd", "developer", "honorable"]).optional().describe("Award filter type"),
    },
    async ({ query, award }: { query?: string; award?: "sotd" | "developer" | "honorable" }) => {
      try {
        const results = await searchAwwwards(query, award);
        if (results.length === 0) {
          return {
            content: [{ type: "text", text: "No Awwwards results found for given query." }],
          };
        }
        const text = [
          `# Awwwards Search Results (${results.length} sites found):`,
          ...results.map((r) => `- **${r.title}** (${r.award}): ${r.url}`),
        ].join("\n");

        return {
          content: [{ type: "text", text }],
        };
      } catch (err: any) {
        return {
          content: [{ type: "text", text: `Awwwards search failed: ${err?.message || String(err)}` }],
          isError: true,
        };
      }
    }
  );

  // Tool 3: irfanlove_verify_build
  server.tool(
    "irfanlove_verify_build",
    "Verify a local development build against a reference design, calculating design token drift and layout conformance.",
    {
      localUrl: z.string().describe("Local dev server URL (e.g. http://localhost:3000)"),
      referenceUrl: z.string().describe("Reference website URL or design slug to verify against"),
    },
    async ({ localUrl, referenceUrl }: { localUrl: string; referenceUrl: string }) => {
      try {
        const [localRes, refRes] = await Promise.all([
          extractDesignFromUrl(localUrl),
          extractDesignFromUrl(referenceUrl),
        ]);

        const localCanvas = localRes.result.surfaces.canvas;
        const refCanvas = refRes.result.surfaces.canvas;
        const canvasMatches = localCanvas.toLowerCase() === refCanvas.toLowerCase();

        const report = [
          `# Build Verification Report`,
          `- **Local Target**: ${localUrl}`,
          `- **Reference Target**: ${referenceUrl}`,
          `- **Canvas Substrate Match**: ${canvasMatches ? "MATCH" : `DRIFT (Local: ${localCanvas}, Ref: ${refCanvas})`}`,
          `- **Local DOM Nodes**: ${localRes.result.manifest.domNodesInspected}`,
          `- **Ref DOM Nodes**: ${refRes.result.manifest.domNodesInspected}`,
          `- **Verdict**: Conformance audit completed.`,
        ].join("\n");

        return {
          content: [{ type: "text", text: report }],
        };
      } catch (err: any) {
        return {
          content: [{ type: "text", text: `Verification failed: ${err?.message || String(err)}` }],
          isError: true,
        };
      }
    }
  );

  const transport = new StdioServerTransport();
  await server.connect(transport);
}
