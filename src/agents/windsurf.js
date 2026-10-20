import fs from "fs-extra";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceSkillsDir = path.resolve(__dirname, "../../.agents/skills");

export async function installWindsurf({ scope, cwd }) {
  const rulesDir = scope === "global"
    ? path.join(os.homedir(), ".codeium", "windsurf", "memories")
    : path.join(cwd, ".windsurf", "rules");

  await fs.ensureDir(rulesDir);

  const skillFolders = await fs.readdir(sourceSkillsDir);
  let count = 0;

  for (const folder of skillFolders) {
    const skillMdPath = path.join(sourceSkillsDir, folder, "SKILL.md");
    if (await fs.pathExists(skillMdPath)) {
      const content = await fs.readFile(skillMdPath, "utf-8");
      await fs.writeFile(path.join(rulesDir, `${folder}.md`), content, "utf-8");
      count++;
    }
  }

  // Create root .windsurfrules summary if local workspace
  if (scope !== "global") {
    const summaryFile = path.join(cwd, ".windsurfrules");
    const summaryText = `# irfanlovefront Windsurf Rules\n\nThis workspace enforces the irfanlovefront frontend engineering suite:\n- /master-prompt-generator: Interactive product discovery, 4 progressive phases, 29 categories, and locked MASTER_PROMPT.md\n- /master-implementer: Progressive 4-batch frontend implementation (Foundation, Nav & Hero, Sections & Footer, Motion & QA Audit)\n- /github-readme-writer: Authoritative Daytona-framework documentation with zero em-dashes\n\nDetailed specifications are located in .windsurf/rules/.\n`;
    if (!(await fs.pathExists(summaryFile))) {
      await fs.writeFile(summaryFile, summaryText, "utf-8");
    }
  }

  return {
    agent: "Windsurf / Cascade",
    path: rulesDir,
    filesCount: count,
  };
}
