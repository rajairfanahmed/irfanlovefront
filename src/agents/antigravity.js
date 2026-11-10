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

export async function installAntigravity({ scope, cwd }) {
  const targetDir = scope === "global"
    ? path.join(os.homedir(), ".gemini", "config", "skills")
    : path.join(cwd, ".agents", "skills");

  await fs.ensureDir(targetDir);
  await fs.copy(sourceSkillsDir, targetDir, { overwrite: true });

  const totalSkills = await countSkills(sourceSkillsDir);
  return {
    agent: "Google Antigravity / Gemini",
    path: targetDir,
    filesCount: totalSkills,
  };
}
