import color from "picocolors";

export function printBanner() {
  console.log("");
  console.log(color.cyan("  ██╗██████╗ ███████╗ █████╗ ███╗   ██╗██╗      ██████╗ ██╗   ██╗███████╗"));
  console.log(color.cyan("  ██║██╔══██╗██╔════╝██╔══██╗████╗  ██║██║     ██╔═══██╗██║   ██║██╔════╝"));
  console.log(color.cyan("  ██║██████╔╝█████╗  ███████║██╔██╗ ██║██║     ██║   ██║██║   ██║█████╗  "));
  console.log(color.cyan("  ██║██╔══██╗██╔══╝  ██╔══██║██║╚██╗██║██║     ██║   ██║╚██╗ ██╔╝██╔══╝  "));
  console.log(color.cyan("  ██║██║  ██║██║     ██║  ██║██║ ╚████║███████╗╚██████╔╝ ╚████╔╝ ███████╗"));
  console.log(color.cyan("  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝ ╚═════╝   ╚═══╝  ╚══════╝"));
  console.log(color.bold(color.yellow("              Anti-Slop UI/UX Agent Skills Suite (v2.0.0)")));
  console.log(color.dim("       Claude Code | Google Antigravity | Cursor | Windsurf | Copilot"));
  console.log("");
}
