import fs from "fs-extra";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceSkillsDir = path.resolve(__dirname, "../../.agents/skills");

export async function installClaude({ scope, cwd }) {
  const baseDir = scope === "global"
    ? path.join(os.homedir(), ".claude")
    : path.join(cwd, ".claude");

  const skillsTargetDir = path.join(baseDir, "skills");
  await fs.ensureDir(skillsTargetDir);
  await fs.copy(sourceSkillsDir, skillsTargetDir, { overwrite: true });

  const claudeMdPath = scope === "global"
    ? path.join(os.homedir(), ".claude", "CLAUDE.md")
    : path.join(cwd, "CLAUDE.md");

  const claudeInstructions = `
# irfanlovefront UI/UX Agent Suite

This project is supercharged with the irfanlovefront progressive frontend engineering suite.

## Available Slash Commands & Skills
- \`/1-prompt-generator\`: Interactive 8-Phase Master Prompt Architect generating dedicated prompt blueprints (prompts/phase-1 to phase-8).
- \`/2-setup-foundation\`: Step 1 - Tech stack, :root CSS tokens, font configuration, siteData population, and Foundation Preview Card.
- \`/3-build-components\`: Step 2 - Atomic UI primitives, form controls, marquee, and Interactive UI Showroom.
- \`/4-cards-and-layout\`: Step 3 - Structural layout grids, layered hero architecture, card archetypes, and Hero + Cards Showroom.
- \`/5-navbar-and-footer\`: Step 4 - Desktop navbar, animated menu curtain state machine, contact wizard, and giant hover-glow footer watermark.
- \`/6-build-pages\`: Step 5 - Complete production Home page and multi-page sub-routes with 100% human copy.
- \`/7-animate-website\`: Step 6 - Lenis smooth scrolling, GSAP ScrollTrigger, Framer Motion, and physics interactions.
- \`/8-responsive-and-qa\`: Step 7 - Multi-breakpoint responsive audit (375px/768px/1440px), touch targets, WCAG AA, and QA checklist.
- \`/9-seo-and-aeo\`: Step 8 (Final) - Technical SEO, Schema.org Knowledge Graph, OpenGraph, public/llms.txt + llms-full.txt for AEO/GEO, and production build verification.
- \`/github-readme-writer\`: Authoritative Daytona-framework documentation, case studies, and launch copy with zero em-dashes.

Detailed skill instructions are stored in \`.claude/skills/<skill-name>/SKILL.md\`.
`;

  if (await fs.pathExists(claudeMdPath)) {
    const existing = await fs.readFile(claudeMdPath, "utf-8");
    if (!existing.includes("irfanlovefront UI/UX Agent Suite")) {
      await fs.appendFile(claudeMdPath, `\n\n${claudeInstructions}`);
    }
  } else {
    await fs.writeFile(claudeMdPath, claudeInstructions.trimStart());
  }

  const skillFolders = await fs.readdir(sourceSkillsDir);
  return {
    agent: "Claude Code",
    path: skillsTargetDir,
    filesCount: skillFolders.length,
  };
}
