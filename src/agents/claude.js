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
- \`/taste-design-engineer\`: Stage 0 taste formulation, brand reference analysis, and creative direction.
- \`/frontend-architect\`: Stage 1 design system tokens, 1 to 2 fonts ceiling, and Next.js 15 architecture.
- \`/creative-layout-engineer\`: Stage 2 bespoke layout composition, 4-element hero, squint test, and visual rhythm.
- \`/interactive-component-engineer\`: Stage 3 tactile component engineering, real state handling, and thumb ergonomics.
- \`/experience-qa-auditor\`: Stage 4 responsive audit (320px to 1440px), WCAG AA, defect triage, and truth in verification.
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
    filesCount: 7,
  };
}
