#!/usr/bin/env node
import { extractDesignFromUrl } from "./extractor/engine.js";
import { searchAwwwards } from "./awwwards/client.js";
import { runMcpServer } from "./mcp-server.js";
async function main() {
    const args = process.argv.slice(2);
    const command = args[0];
    if (command === "help" || command === "--help" || command === "-h") {
        console.log(`
irfanlovefront - Universal Design & Motion Reverse Engineering Engine

Usage:
  irfanlovefront extract <url> [--output <dir>] [--headless]
  irfanlovefront awwwards [query]
  irfanlovefront mcp

Examples:
  irfanlovefront extract https://linear.app
  irfanlovefront extract https://resend.com --output ./designs
  irfanlovefront awwwards "portfolio"
  irfanlovefront mcp (Runs standard stdio MCP Server for AI Agents)
`);
        process.exit(0);
    }
    if (!command || command === "mcp") {
        await runMcpServer();
        return;
    }
    if (command === "extract") {
        const url = args[1];
        if (!url) {
            console.error("Usage: irfanlovefront extract <url> [--output <dir>]");
            process.exit(1);
        }
        let outputDir = "./designs";
        const outIdx = args.indexOf("--output");
        if (outIdx !== -1 && args[outIdx + 1]) {
            outputDir = args[outIdx + 1];
        }
        const isHeadless = args.includes("--headless");
        const captureMobile = args.includes("--mobile");
        console.log(`[irfanlovefront] Extracting design system from: ${url}`);
        const { result, folderPath, files } = await extractDesignFromUrl(url, {
            outputBaseDir: outputDir,
            headless: isHeadless,
            captureMobileViewport: captureMobile,
        });
        console.log(`[irfanlovefront] SUCCESS! Design extracted for ${result.manifest.brand}`);
        console.log(`[irfanlovefront] Output folder: ${folderPath}`);
        console.log(`[irfanlovefront] Files generated:`);
        files.forEach((f) => console.log(`  - ${f}`));
        process.exit(0);
    }
    if (command === "awwwards") {
        const query = args[1];
        console.log(`[irfanlovefront] Searching Awwwards for: ${query || "recent winners"}`);
        const sites = await searchAwwwards(query);
        console.log(`Found ${sites.length} sites:`);
        sites.forEach((s) => console.log(`  - [${s.award}] ${s.title}: ${s.url}`));
        process.exit(0);
    }
    console.log(`Unknown command: ${command}`);
    console.log(`Available commands: extract <url>, awwwards [query], mcp`);
}
main().catch((err) => {
    console.error("[irfanlovefront] Error:", err);
    process.exit(1);
});
