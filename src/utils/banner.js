import color from "picocolors";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pkg = JSON.parse(readFileSync(join(__dirname, "../../package.json"), "utf8"));

export function printBanner() {
  console.log("");
  console.log(color.cyan("  ██╗██████╗ ███████╗ █████╗ ███╗   ██╗██╗      ██████╗ ██╗   ██╗███████╗"));
  console.log(color.cyan("  ██║██╔══██╗██╔════╝██╔══██╗████╗  ██║██║     ██╔═══██╗██║   ██║██╔════╝"));
  console.log(color.cyan("  ██║██████╔╝█████╗  ███████║██╔██╗ ██║██║     ██║   ██║██║   ██║█████╗  "));
  console.log(color.cyan("  ██║██╔══██╗██╔══╝  ██╔══██║██║╚██╗██║██║     ██║   ██║╚██╗ ██╔╝██╔══╝  "));
  console.log(color.cyan("  ██║██║  ██║██║     ██║  ██║██║ ╚████║███████╗╚██████╔╝ ╚████╔╝ ███████╗"));
  console.log(color.cyan("  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝ ╚═════╝   ╚═══╝  ╚══════╝"));
  console.log(color.bold(color.yellow(`              Anti-Slop UI/UX Agent Skills Suite (v${pkg.version})`)));
  console.log(color.dim("       Claude Code | Google Antigravity | Cursor | Windsurf | Copilot"));
  console.log("");
}
