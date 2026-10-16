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

This project is supercharged with the irfanlovefront 5-stage frontend engineering lifecycle.

## Available Slash Commands & Skills
- \`/irfanlovefront\`: Master orchestrator coordinating the full 5-stage lifecycle.
- \`/taste-design-engineer\`: Stage 0 taste formulation, Apple fluid principles, and conversion rules.
- \`/frontend-architect\`: Stage 1 design system, 1 to 2 fonts ceiling, and high-contrast CTA tokens.
- \`/creative-layout-engineer\`: Stage 2 bespoke hero mini-site, squint test, and white space restraint.
- \`/interactive-component-engineer\`: Stage 3 motion choreography, point-of-doubt trust proof, and thumb ergonomics.
- \`/experience-qa-auditor\`: Stage 4 responsive audit (320px to 1440px), WCAG AA, 404, and SEO JSON-LD.
- \`/build-error-resolver\`: TypeScript error healing with zero architectural regressions.
- \`/github-readme-writer\`: Authoritative documentation and launch copy.

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

  return {
    agent: "Claude Code",
    path: skillsTargetDir,
    filesCount: 8,
  };
}
