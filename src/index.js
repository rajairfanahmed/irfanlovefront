import { intro, outro, multiselect, select, spinner, isCancel, cancel, note } from "@clack/prompts";
import color from "picocolors";
import { Command } from "commander";
import { printBanner } from "./utils/banner.js";
import { installAntigravity } from "./agents/antigravity.js";
import { installClaude } from "./agents/claude.js";
import { installCursor } from "./agents/cursor.js";
import { installWindsurf } from "./agents/windsurf.js";
import { installCopilot } from "./agents/copilot.js";

const program = new Command();

program
  .name("irfanlovefront")
  .description("Install irfanlovefront UI/UX agent skills across Claude Code, Antigravity, Cursor, Windsurf, and Copilot")
  .version("2.0.1")
  .option("-a, --all", "Install for all supported AI agents")
  .option("--claude", "Install specifically for Claude Code")
  .option("--cursor", "Install specifically for Cursor")
  .option("--antigravity", "Install specifically for Google Antigravity / Gemini")
  .option("--windsurf", "Install specifically for Windsurf")
  .option("--copilot", "Install specifically for GitHub Copilot")
  .option("-g, --global", "Install globally instead of current project workspace")
  .option("-y, --yes", "Skip interactive prompts and install with defaults")
  .parse(process.argv);

const options = program.opts();

async function main() {
  printBanner();
  intro(color.bgCyan(color.black(" irfanlovefront AI Skills Installer ")));

  let targets = [];

  if (options.all) {
    targets = ["antigravity", "claude", "cursor", "windsurf", "copilot"];
  } else {
    if (options.antigravity) targets.push("antigravity");
    if (options.claude) targets.push("claude");
    if (options.cursor) targets.push("cursor");
    if (options.windsurf) targets.push("windsurf");
    if (options.copilot) targets.push("copilot");
  }

  // Interactive selection if no flags provided
  if (targets.length === 0) {
    if (options.yes) {
      targets = ["claude", "antigravity", "cursor"];
    } else {
      const selected = await multiselect({
        message: "Select target AI coding tools:",
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
  }

  // Select Scope (Workspace vs Global)
  let scope = options.global ? "global" : null;
  if (!scope) {
    if (options.yes) {
      scope = "workspace";
    } else {
      const scopeSelection = await select({
        message: "Where would you like to install the skills?",
        options: [
          { value: "workspace", label: "Current Workspace", hint: "Install into current folder" },
          { value: "global", label: "Global User Config", hint: "Available across all projects" },
        ],
      });

      if (isCancel(scopeSelection)) {
        cancel("Installation cancelled.");
        process.exit(0);
      }
      scope = scopeSelection;
    }
  }

  const s = spinner();
  s.start("Installing irfanlovefront v2 skills suite...");

  const cwd = process.cwd();
  const results = [];

  try {
    for (const target of targets) {
      if (target === "antigravity") results.push(await installAntigravity({ scope, cwd }));
      if (target === "claude") results.push(await installClaude({ scope, cwd }));
      if (target === "cursor") results.push(await installCursor({ scope, cwd }));
      if (target === "windsurf") results.push(await installWindsurf({ scope, cwd }));
      if (target === "copilot") results.push(await installCopilot({ scope, cwd }));
    }
    s.stop(color.green("All skills installed successfully!"));
  } catch (error) {
    s.stop(color.red("Failed to install skills."));
    console.error(error);
    process.exit(1);
  }

  // Summary note
  const summaryLines = results
    .map((r) => `${color.cyan(r.agent)}: ${color.dim(r.path)}`)
    .join("\n");

  note(
    summaryLines,
    "Configured AI Agents"
  );

  outro(
    color.green("Ready to craft bespoke frontends! Type ") +
    color.bold(color.yellow("/irfanlovefront")) +
    color.green(" in your agent chat to initiate the 5-stage pipeline.")
  );
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
