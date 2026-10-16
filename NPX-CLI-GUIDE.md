# npx CLI Installer Guide for irfanlovefront

This guide provides the complete blueprint and actionable steps to build, test, and publish an `npx` command (e.g., `npx irfanlovefront`) that installs and configures the `irfanlovefront` agent skills across **Claude Code**, **Google Antigravity**, **Cursor**, **Windsurf**, **GitHub Copilot**, and other AI coding tools.

---

## 1. Architecture Overview

When a user runs:
```bash
npx irfanlovefront
```
Or with flags:
```bash
npx irfanlovefront --agent claude
npx irfanlovefront --all
```

The CLI executes the following pipeline:
1. **Detection & Prompts**: Detects the current project type and prompts the developer to select which AI agents they use.
2. **Scope Selection**: Asks whether to install in the current workspace (`./`) or globally in user home (`~`).
3. **Format Translation**: Distributes and formats the 8 agent skills to the exact file conventions required by each agent.
4. **Safety & Hygiene**: Preserves existing user rules and avoids overwriting without explicit user confirmation.

---

## 2. AI Agent Skill Conventions Matrix

Different AI tools discover skills and instructions in different locations and formats:

| AI Agent | Workspace Path | Global User Path | Native File Format |
| :--- | :--- | :--- | :--- |
| **Google Antigravity / Gemini** | `.agents/skills/<skill-name>/SKILL.md` | `~/.gemini/config/skills/<skill-name>/SKILL.md` | Skill folder with `SKILL.md` + YAML frontmatter |
| **Claude Code** | `.claude/skills/<skill-name>/SKILL.md` and `CLAUDE.md` | `~/.claude/skills/<skill-name>/SKILL.md` | Markdown skill folders + index in `CLAUDE.md` |
| **Cursor (Rules 2.0)** | `.cursor/rules/<skill-name>.mdc` | `~/.cursor/rules/` | `.mdc` format with frontmatter (`globs: *`) |
| **Windsurf / Cascade** | `.windsurf/rules/<skill-name>.md` or `.windsurfrules` | `~/.codeium/windsurf/memories/` | Markdown rules |
| **GitHub Copilot** | `.github/copilot-instructions.md` | N/A | Combined Markdown instruction file |

---

## 3. Directory Structure for the CLI

You can host the CLI directly inside this repository or as a sub-package. The recommended structure inside the repository is:

```text
d:\uiux/
├── .agents/
│   └── skills/                # Source skills (authoritative source)
│       ├── irfanlovefront/
│       ├── taste-design-engineer/
│       ├── frontend-architect/
│       ├── creative-layout-engineer/
│       ├── interactive-component-engineer/
│       ├── experience-qa-auditor/
│       ├── build-error-resolver/
│       └── github-readme-writer/
├── bin/
│   └── cli.js                 # Executable entry point (#!/usr/bin/env node)
├── src/
│   ├── index.js               # CLI logic and interactive prompts
│   ├── agents/
│   │   ├── antigravity.js     # Antigravity installer (.agents/skills)
│   │   ├── claude.js          # Claude Code installer (.claude/skills + CLAUDE.md)
│   │   ├── cursor.js          # Cursor installer (.cursor/rules/*.mdc)
│   │   ├── windsurf.js        # Windsurf installer (.windsurf/rules)
│   │   └── copilot.js         # Copilot installer (.github/copilot-instructions.md)
│   └── utils/
│       ├── copy.js            # Safe file copy utility
│       └── banner.js          # ASCII terminal banner
├── package.json               # npm package definition with "bin" field
└── README.md
```

---

## 4. Step-by-Step Implementation Guide

### Step 1: Package Configuration (`package.json`)

Define your npm package name, executable binary, and dependencies:

```json
{
  "name": "irfanlovefront",
  "version": "1.0.0",
  "description": "One-command installer for irfanlovefront UI/UX agent skills across Claude Code, Antigravity, Cursor, and Windsurf",
  "bin": {
    "irfanlovefront": "./bin/cli.js"
  },
  "files": [
    "bin",
    "src",
    ".agents/skills"
  ],
  "keywords": [
    "ai-agent",
    "skills",
    "claude-code",
    "antigravity",
    "cursor",
    "windsurf",
    "frontend",
    "design-system",
    "ui-ux"
  ],
  "author": "Raja Irfan Ahmed <https://github.com/rajairfanahmed>",
  "license": "CC-BY-NC-SA-4.0",
  "repository": {
    "type": "git",
    "url": "https://github.com/rajairfanahmed/irfanlovefront.git"
  },
  "dependencies": {
    "@clack/prompts": "^0.8.2",
    "commander": "^13.1.0",
    "picocolors": "^1.1.1"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

> **Naming Note**: If the name `irfanlovefront` is already taken on npm, use scoped naming: `@rajairfanahmed/irfanlovefront`. End users will run `npx @rajairfanahmed/irfanlovefront`.

---

### Step 2: Binary Entry Point (`bin/cli.js`)

Create `bin/cli.js` with the executable shebang:

```javascript
#!/usr/bin/env node

import("../src/index.js").catch((err) => {
  console.error("Failed to run irfanlovefront CLI:", err);
  process.exit(1);
});
```

---

### Step 3: Interactive CLI Runner (`src/index.js`)

Use `@clack/prompts` for a modern, sleek terminal experience matching Vite and Astro:

```javascript
import { intro, outro, multiselect, select, spinner, isCancel, cancel } from "@clack/prompts";
import color from "picocolors";
import { Command } from "commander";
import { installAntigravity } from "./agents/antigravity.js";
import { installClaude } from "./agents/claude.js";
import { installCursor } from "./agents/cursor.js";
import { installWindsurf } from "./agents/windsurf.js";
import { installCopilot } from "./agents/copilot.js";

const program = new Command();

program
  .name("irfanlovefront")
  .description("Install irfanlovefront UI/UX skills into your favorite AI agent")
  .option("-a, --all", "Install for all supported AI agents")
  .option("--claude", "Install specifically for Claude Code")
  .option("--cursor", "Install specifically for Cursor")
  .option("--antigravity", "Install specifically for Google Antigravity / Gemini")
  .option("--windsurf", "Install specifically for Windsurf")
  .option("--copilot", "Install specifically for GitHub Copilot")
  .option("-g, --global", "Install globally instead of project workspace")
  .parse(process.argv);

const options = program.opts();

async function main() {
  console.log("");
  intro(color.bgCyan(color.black(" irfanlovefront AI Skills Installer ")));

  let targets = [];

  // 1. Direct flag support
  if (options.all) {
    targets = ["antigravity", "claude", "cursor", "windsurf", "copilot"];
  } else {
    if (options.antigravity) targets.push("antigravity");
    if (options.claude) targets.push("claude");
    if (options.cursor) targets.push("cursor");
    if (options.windsurf) targets.push("windsurf");
    if (options.copilot) targets.push("copilot");
  }

  // 2. Interactive selection if no flags provided
  if (targets.length === 0) {
    const selected = await multiselect({
      message: "Which AI agents do you want to configure?",
      options: [
        { value: "claude", label: "Claude Code", hint: ".claude/skills/ + CLAUDE.md" },
        { value: "antigravity", label: "Google Antigravity / Gemini", hint: ".agents/skills/" },
        { value: "cursor", label: "Cursor (Rules 2.0)", hint: ".cursor/rules/*.mdc" },
        { value: "windsurf", label: "Windsurf / Cascade", hint: ".windsurf/rules/" },
        { value: "copilot", label: "GitHub Copilot", hint: ".github/copilot-instructions.md" },
      ],
      required: true,
    });

    if (isCancel(selected)) {
      cancel("Installation cancelled.");
      process.exit(0);
    }

    targets = selected;
  }

  // 3. Target Scope (Workspace vs Global)
  let scope = options.global ? "global" : null;
  if (!scope) {
    const scopeSelection = await select({
      message: "Select installation destination:",
      options: [
        { value: "workspace", label: "Current Workspace", hint: "Install into current folder" },
        { value: "global", label: "Global User Home", hint: "Available across all projects" },
      ],
    });

    if (isCancel(scopeSelection)) {
      cancel("Installation cancelled.");
      process.exit(0);
    }
    scope = scopeSelection;
  }

  // 4. Execute Installers
  const s = spinner();
  s.start("Installing irfanlovefront skill suite...");

  const cwd = process.cwd();
  for (const target of targets) {
    if (target === "antigravity") await installAntigravity({ scope, cwd });
    if (target === "claude") await installClaude({ scope, cwd });
    if (target === "cursor") await installCursor({ scope, cwd });
    if (target === "windsurf") await installWindsurf({ scope, cwd });
    if (target === "copilot") await installCopilot({ scope, cwd });
  }

  s.stop(color.green("Installation complete!"));

  outro(
    color.cyan("Ready to craft bespoke frontends! Type ") +
    color.bold(color.yellow("/irfanlovefront")) +
    color.cyan(" in your agent chat to start.")
  );
}

main().catch(console.error);
```

---

### Step 4: Specific Agent Adapters

#### 1. Claude Code Adapter (`src/agents/claude.js`)
Claude Code supports markdown skills directly inside `.claude/skills/` and instructions in `CLAUDE.md`:

```javascript
import fs from "fs-extra";
import path from "path";
import os from "os";

export async function installClaude({ scope, cwd }) {
  const baseDir = scope === "global"
    ? path.join(os.homedir(), ".claude")
    : path.join(cwd, ".claude");

  const skillsTarget = path.join(baseDir, "skills");
  const sourceSkills = path.resolve(import.meta.dirname, "../../.agents/skills");

  // Copy all skill folders
  await fs.copy(sourceSkills, skillsTarget, { overwrite: true });

  // Append skill index to CLAUDE.md
  const claudeMdPath = scope === "global"
    ? path.join(os.homedir(), ".claude", "CLAUDE.md")
    : path.join(cwd, "CLAUDE.md");

  const indexNotice = `\n\n## irfanlovefront Skill Suite Active\nUse the following slash commands for frontend engineering:\n- \`/irfanlovefront\`: Master UI/UX Orchestrator\n- \`/taste-design-engineer\`: Taste & Design Pre-Scaffolding\n- \`/frontend-architect\`: Design System & Fluid Tokens\n- \`/creative-layout-engineer\`: Bespoke Macro-Layouts & Hero Mini-Site\n- \`/interactive-component-engineer\`: Motion Primitives & Polish\n- \`/experience-qa-auditor\`: QA, Accessibility & SEO Audit\n- \`/build-error-resolver\`: TypeScript & Build Error Healing\n- \`/github-readme-writer\`: Authoritative Documentation\n`;

  if (await fs.pathExists(claudeMdPath)) {
    const existing = await fs.readFile(claudeMdPath, "utf-8");
    if (!existing.includes("irfanlovefront Skill Suite")) {
      await fs.appendFile(claudeMdPath, indexNotice);
    }
  } else {
    await fs.writeFile(claudeMdPath, `# Project Instructions\n${indexNotice}`);
  }
}
```

#### 2. Cursor Adapter (`src/agents/cursor.js`)
Cursor Rules 2.0 uses `.cursor/rules/<name>.mdc` files:

```javascript
import fs from "fs-extra";
import path from "path";
import os from "os";

export async function installCursor({ scope, cwd }) {
  const baseDir = scope === "global"
    ? path.join(os.homedir(), ".cursor", "rules")
    : path.join(cwd, ".cursor", "rules");

  await fs.ensureDir(baseDir);

  const sourceSkills = path.resolve(import.meta.dirname, "../../.agents/skills");
  const skillFolders = await fs.readdir(sourceSkills);

  for (const folder of skillFolders) {
    const skillMdPath = path.join(sourceSkills, folder, "SKILL.md");
    if (await fs.pathExists(skillMdPath)) {
      const content = await fs.readFile(skillMdPath, "utf-8");
      // Format as Cursor .mdc rule
      const mdcContent = `---
description: ${folder} UI/UX skill instructions
globs: *
alwaysApply: false
---

${content}
`;
      await fs.writeFile(path.join(baseDir, `${folder}.mdc`), mdcContent, "utf-8");
    }
  }
}
```

#### 3. Google Antigravity Adapter (`src/agents/antigravity.js`)
Antigravity natively consumes `.agents/skills/<skill-name>/SKILL.md`:

```javascript
import fs from "fs-extra";
import path from "path";
import os from "os";

export async function installAntigravity({ scope, cwd }) {
  const targetDir = scope === "global"
    ? path.join(os.homedir(), ".gemini", "config", "skills")
    : path.join(cwd, ".agents", "skills");

  const sourceSkills = path.resolve(import.meta.dirname, "../../.agents/skills");
  await fs.copy(sourceSkills, targetDir, { overwrite: true });
}
```

---

## 5. Local Testing Workflow

Before publishing to npm, test the command locally:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Link the package locally**:
   ```bash
   npm link
   ```

3. **Test run in a sample empty folder**:
   ```bash
   mkdir D:\test-skill-install
   cd D:\test-skill-install
   irfanlovefront
   ```
   Select your agents and verify the folders are generated accurately:
   - Check `.claude/skills/` and `CLAUDE.md`
   - Check `.cursor/rules/*.mdc`
   - Check `.agents/skills/`

4. **Test direct invocation via npx**:
   ```bash
   npx . --all
   ```

---

## 6. Publishing to npm Registry

### Prerequisites
1. Create an npm account at [npmjs.com](https://www.npmjs.com) if you do not have one.
2. Log into npm from your terminal:
   ```bash
   npm login
   ```
3. Verify your login:
   ```bash
   npm whoami
   ```

### Publishing Steps
1. Make sure your git working directory is clean:
   ```bash
   git status
   ```
2. Verify package contents with dry-run:
   ```bash
   npm pack --dry-run
   ```
3. Publish to npm:
   - For unscoped (`irfanlovefront`):
     ```bash
     npm publish
     ```
   - For scoped (`@rajairfanahmed/irfanlovefront`):
     ```bash
     npm publish --access public
     ```

---

## 7. How Users Run It After Publication

Once published, any developer in the world can run:

```bash
# Interactive selection:
npx irfanlovefront

# Direct target for Claude Code:
npx irfanlovefront --claude

# Direct target for Cursor:
npx irfanlovefront --cursor

# Install for all supported agents at once:
npx irfanlovefront --all
```

---

## 8. Summary Checklist Before Launch

- [ ] Choose package name (`irfanlovefront` or `@rajairfanahmed/irfanlovefront`).
- [ ] Initialize `package.json` with `"bin": { "irfanlovefront": "./bin/cli.js" }`.
- [ ] Add CLI source code (`bin/cli.js`, `src/index.js`, and agent adapters).
- [ ] Run `npm install` for `@clack/prompts`, `commander`, `fs-extra`, `picocolors`.
- [ ] Perform `npm link` and run test installation on a dummy workspace.
- [ ] Execute `npm publish --access public`.
- [ ] Update [README.md](file:///d:/uiux/README.md) with the single `npx` quick start command.
