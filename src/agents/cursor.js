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

export async function installCursor({ scope, cwd }) {
  const rulesDir = scope === "global"
    ? path.join(os.homedir(), ".cursor", "rules")
    : path.join(cwd, ".cursor", "rules");

  await fs.ensureDir(rulesDir);

  const skills = await discoverSkills(sourceSkillsDir);
  let count = 0;

  for (const skill of skills) {
    const content = await fs.readFile(skill.path, "utf-8");

    // Strip existing YAML frontmatter if present and re-wrap in Cursor .mdc format
    let body = content;
    if (content.startsWith("---")) {
      const parts = content.split("---");
      if (parts.length >= 3) {
        body = parts.slice(2).join("---").trim();
      }
    }

    const mdcContent = `---
description: ${skill.name} - irfanlovefront Engineering Skill
globs: *
alwaysApply: false
---

${body}
`;

    await fs.writeFile(path.join(rulesDir, `${skill.name}.mdc`), mdcContent, "utf-8");
    count++;
  }

  return {
    agent: "Cursor (Rules 2.0)",
    path: rulesDir,
    filesCount: count,
  };
}
