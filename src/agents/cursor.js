import fs from "fs-extra";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceSkillsDir = path.resolve(__dirname, "../../.agents/skills");

export async function installCursor({ scope, cwd }) {
  const rulesDir = scope === "global"
    ? path.join(os.homedir(), ".cursor", "rules")
    : path.join(cwd, ".cursor", "rules");

  await fs.ensureDir(rulesDir);

  const skillFolders = await fs.readdir(sourceSkillsDir);
  let count = 0;

  for (const folder of skillFolders) {
    const skillMdPath = path.join(sourceSkillsDir, folder, "SKILL.md");
    if (await fs.pathExists(skillMdPath)) {
      const content = await fs.readFile(skillMdPath, "utf-8");

      // Strip existing YAML frontmatter if present and re-wrap in Cursor .mdc format
      let body = content;
      if (content.startsWith("---")) {
        const parts = content.split("---");
        if (parts.length >= 3) {
          body = parts.slice(2).join("---").trim();
        }
      }

      const mdcContent = `---
description: ${folder} - irfanlovefront UI/UX and Frontend Engineering Skill
globs: *
alwaysApply: false
---

${body}
`;

      await fs.writeFile(path.join(rulesDir, `${folder}.mdc`), mdcContent, "utf-8");
      count++;
    }
  }

  return {
    agent: "Cursor (Rules 2.0)",
    path: rulesDir,
    filesCount: count,
  };
}
