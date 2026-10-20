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

This project is supercharged with the irfanlovefront frontend engineering suite.

## Available Slash Commands & Skills
- \`/master-prompt-generator\`: Interactive product discovery, 4 progressive phases, 29 categories, 85 brand references in design-refs/, and zero-ambiguity MASTER_PROMPT.md output.
- \`/master-implementer\`: Principal Frontend Implementation Engineer executing MASTER_PROMPT.md across 4 verified batches without generic template substitution.
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

  return {
    agent: "Claude Code",
    path: skillsTargetDir,
    filesCount: 7,
  };
}
