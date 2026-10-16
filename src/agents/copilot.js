import fs from "fs-extra";
import path from "node:path";

export async function installCopilot({ cwd }) {
  const githubDir = path.join(cwd, ".github");
  await fs.ensureDir(githubDir);

  const copilotMdPath = path.join(githubDir, "copilot-instructions.md");

  const copilotInstructions = `
# irfanlovefront Frontend Engineering Guidelines

When authoring or modifying UI, frontend components, or layouts, strictly follow these rules:

1. **Hero Section Mini-Site**:
   - The hero must be fully visible above the fold without scrolling.
   - It requires four elements: clear headline, supporting context, social proof, and high-contrast CTA.

2. **Visual Hierarchy & Squint Test**:
   - Primary elements must be largest and boldest.
   - Stepped-down weight and size for secondary and meta content.

3. **White Space Restraint**:
   - Maintain generous breathing room (clamp(4rem, 10vw, 9rem) section gaps).
   - Never cram sections with excessive cards or copy.

4. **Contrast and Color (CTA Pop)**:
   - Primary call-to-action buttons must pop with high contrast against a restrained color palette.

5. **Point-of-Doubt Social Proof**:
   - Place testimonials, client logos, star ratings, and review metrics directly beside or beneath decision triggers (CTAs, pricing, forms).

6. **Typography Discipline**:
   - Maximum 1 or 2 font families across the entire project.
   - Prioritize body text readability over decorative styling.

7. **Mobile-First Thumb Ergonomics**:
   - Minimum 44x44px touch targets for all interactive elements.
   - Zero horizontal scrollbars at 320px viewport width.
`;

  if (await fs.pathExists(copilotMdPath)) {
    const existing = await fs.readFile(copilotMdPath, "utf-8");
    if (!existing.includes("irfanlovefront Frontend Engineering Guidelines")) {
      await fs.appendFile(copilotMdPath, `\n\n${copilotInstructions.trimStart()}`);
    }
  } else {
    await fs.writeFile(copilotMdPath, copilotInstructions.trimStart());
  }

  return {
    agent: "GitHub Copilot",
    path: copilotMdPath,
    filesCount: 1,
  };
}
