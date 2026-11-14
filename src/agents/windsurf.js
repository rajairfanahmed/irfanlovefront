import fs from "fs-extra";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceSkillsDir = path.resolve(__dirname, "../../.agents/skills");

async function discoverSkills(dir) {
  const skills = [];

  // backend skill
  const backendSkill = path.join(dir, "backend", "SKILL.md");
  if (await fs.pathExists(backendSkill)) {
    skills.push({ name: "backend-engineering", path: backendSkill });
  }

  // frontend skills
  const frontendDir = path.join(dir, "frontend");
  if (await fs.pathExists(frontendDir)) {
    const feEntries = await fs.readdir(frontendDir, { withFileTypes: true });
    for (const entry of feEntries) {
      if (entry.isDirectory()) {
        const skillPath = path.join(frontendDir, entry.name, "SKILL.md");
        if (await fs.pathExists(skillPath)) {
          skills.push({ name: entry.name, path: skillPath });
        }
      }
    }
  }

  // flat fallback
  const topEntries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of topEntries) {
    if (entry.isDirectory() && entry.name !== "backend" && entry.name !== "frontend") {
      const skillPath = path.join(dir, entry.name, "SKILL.md");
      if (await fs.pathExists(skillPath)) {
        skills.push({ name: entry.name, path: skillPath });
      }
    }
  }

  return skills;
}

export async function installWindsurf({ scope, cwd }) {
  const rulesDir = scope === "global"
    ? path.join(os.homedir(), ".codeium", "windsurf", "memories")
    : path.join(cwd, ".windsurf", "rules");

  await fs.ensureDir(rulesDir);

  const skills = await discoverSkills(sourceSkillsDir);
  let count = 0;

  for (const skill of skills) {
    const content = await fs.readFile(skill.path, "utf-8");
    await fs.writeFile(path.join(rulesDir, `${skill.name}.md`), content, "utf-8");
    count++;
  }

  // Create root .windsurfrules summary if local workspace
  if (scope !== "global") {
    const summaryFile = path.join(cwd, ".windsurfrules");
    const summaryText = `# irfanlovefront Windsurf Rules

This workspace enforces the irfanlovefront product & engineering suite:
- prd-engineer: Interactive Full-Stack Product Discovery, Scoping & PRD Engineering (MASTER_PRD, FRONTEND_PRD, BACKEND_PRD)
- backend-engineering: Stack-Agnostic Backend Engineering (APIs, Database, Auth, Security)
- 00-design-engineer: Master Design Orchestrator (reads backend contracts, produces frontend specs)
- 01-frontend-architecture through 10-performance-optimization: Numbered step-by-step frontend pipeline
- github-readme-writer: Daytona-framework documentation with zero em-dashes

Detailed specifications are located in .windsurf/rules/. All generated specs live in docs/.
`;
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
