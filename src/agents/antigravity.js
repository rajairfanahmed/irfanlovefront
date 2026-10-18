import fs from "fs-extra";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceSkillsDir = path.resolve(__dirname, "../../.agents/skills");

export async function installAntigravity({ scope, cwd }) {
  const targetDir = scope === "global"
    ? path.join(os.homedir(), ".gemini", "config", "skills")
    : path.join(cwd, ".agents", "skills");

  await fs.ensureDir(targetDir);
  await fs.copy(sourceSkillsDir, targetDir, { overwrite: true });

  return {
    agent: "Google Antigravity / Gemini",
    path: targetDir,
    filesCount: 7,
  };
}
