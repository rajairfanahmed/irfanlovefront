import fs from "fs-extra";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceSkillsDir = path.resolve(__dirname, "../../.agents/skills");

async function countSkills(dir) {
  let count = 0;
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const skillPath = path.join(dir, entry.name, "SKILL.md");
      if (await fs.pathExists(skillPath)) {
        count++;
      } else {
        count += await countSkills(path.join(dir, entry.name));
      }
    }
  }
  return count;
}

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
# irfanlovefront Backend + Frontend Engineering Suite

This project is configured with the irfanlovefront engineering suite.

## Architecture & Workflow (Backend First, then Frontend)
1. **Backend**: Run \`backend-engineering\` first to design and implement APIs, database schemas, and contracts in \`docs/\`.
2. **Frontend Orchestrator**: Run \`00-design-engineer\` to read backend \`docs/api-contract.md\` and produce the 10 specialist specs in \`docs/\`.
3. **Numbered Frontend Pipeline (Strict Order)**:
   - Foundation: \`01-frontend-architecture\` -> \`02-visual-design\` -> \`03-structural-layout\`
   - Components & Pages: \`04-ui-components\` -> \`05-ux-interaction-design\`
   - Enhancement: \`06-responsive-design\` -> \`07-animations-motion-design\` -> \`08-seo\` -> \`09-accessibility\` -> \`10-performance-optimization\`
4. **Documentation**: \`github-readme-writer\`

Detailed skill instructions are stored in \`.claude/skills/\`. All generated specs live in \`docs/\`.
`;

  if (await fs.pathExists(claudeMdPath)) {
    const existing = await fs.readFile(claudeMdPath, "utf-8");
    if (!existing.includes("irfanlovefront Backend + Frontend Engineering Suite")) {
      await fs.appendFile(claudeMdPath, `\n\n${claudeInstructions}`);
    }
  } else {
    await fs.writeFile(claudeMdPath, claudeInstructions.trimStart());
  }

  const totalSkills = await countSkills(sourceSkillsDir);
  return {
    agent: "Claude Code",
    path: skillsTargetDir,
    filesCount: totalSkills,
  };
}
