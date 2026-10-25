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
# irfanlovefront Full-Stack & AI Agent Suite

This project is supercharged with the irfanlovefront full-stack and AI engineering suite.

## Flagship Specialist Agents
- \`/frontend-craftsman\`: Master UI/UX & Frontend Craft Specialist (Bespoke Anti-Slop, 15 Hero Archetypes, 60fps Micro-Interactions, AEO/SEO 5/5).
- \`/backend-architect\`: Master Backend Systems & API Architect (Clean Architecture, REST/tRPC, Drizzle/Prisma, Auth, Queues, Docker).
- \`/ai-engineer\`: Master AI/ML & LLM Systems Engineer (Multi-Provider Fallbacks, SSE Streaming, Structured Tools, RAG, Evals).

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

  const skillFolders = await fs.readdir(sourceSkillsDir);
  return {
    agent: "Claude Code",
    path: skillsTargetDir,
    filesCount: skillFolders.length,
  };
}
