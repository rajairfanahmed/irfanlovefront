import { chromium, type Browser, type Page } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { deduplicateAndRankColors, assignColorRoles, contrastRatio, parseColor } from "./colors.js";
import { buildTypographyScale, type RawTypographyStyle } from "./typography.js";
import { buildSurfaceLadder } from "./surfaces.js";
import { detectLayoutType } from "./structure.js";
import { emitMultiFileDesign } from "./multi-file-emitter.js";
import type { ExtractionResult, SectionBand, ComponentObserved, MotionDnaRecord } from "../types/index.js";

export interface ExtractEngineOptions {
  viewport?: { width: number; height: number };
  timeoutMs?: number;
  captureScreenshots?: boolean;
  captureMobileViewport?: boolean;
  outputBaseDir?: string;
  headless?: boolean;
}

export async function extractDesignFromUrl(
  targetUrl: string,
  options: ExtractEngineOptions = {}
): Promise<{ result: ExtractionResult; folderPath: string; files: string[] }> {
  let url = targetUrl.trim();
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }

  const viewport = options.viewport || { width: 1440, height: 900 };
  const timeoutMs = options.timeoutMs || 35000;
  const isHeadless = options.headless !== undefined ? options.headless : false;

  let browser: Browser | null = null;

  try {
    // Launch Chrome if available, fallback to Chromium
    try {
      browser = await chromium.launch({
        channel: "chrome",
        headless: isHeadless,
        args: ["--start-maximized", "--no-sandbox", "--disable-setuid-sandbox", "--disable-blink-features=AutomationControlled"],
      });
    } catch {
      browser = await chromium.launch({
        headless: isHeadless,
        args: ["--start-maximized", "--no-sandbox", "--disable-setuid-sandbox"],
      });
    }

    const context = await browser.newContext({
      viewport,
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    });

    const page: Page = await context.newPage();

    // 1. Navigate to target URL
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: timeoutMs });

    // Wait for fonts, stylesheets, and scripts to settle
    await page.waitForTimeout(2000);

    // Page metadata
    const pageTitle = (await page.title()) || new URL(url).hostname;
    const canonicalUrl =
      (await page.$eval('link[rel="canonical"]', (el) => (el as HTMLLinkElement).href).catch(() => null)) || url;

    const brandSlug = new URL(url).hostname.replace(/^www\./, "").replace(/[^a-zA-Z0-9_-]/g, "-").toLowerCase();
    const brandName = pageTitle.split(/[-|\u2014\u2013\u00B7]/)[0].trim() || brandSlug;

    // 2. Interactive Full-Page Smooth Scroll (triggers lazy loads, GSAP ScrollTriggers, and reach footer)
    await page.evaluate(async () => {
      await new Promise<void>((resolve) => {
        let totalHeight = 0;
        const distance = 400;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            window.scrollTo({ top: 0, behavior: "smooth" });
            setTimeout(resolve, 800);
          }
        }, 120);
      });
    });
    await page.waitForTimeout(1000);

    // 3. Live Hover Interaction Testing across interactive controls
    const observedComponents: ComponentObserved[] = [];
    const interactiveElements = await page.$$(
      'button, a[role="button"], .btn, [class*="button" i], nav a, header a, [class*="card" i], article'
    );

    const elementsToTest = interactiveElements.slice(0, 8);
    for (let i = 0; i < elementsToTest.length; i++) {
      const el = elementsToTest[i];
      try {
        const isVisible = await el.isVisible();
        if (!isVisible) continue;

        // Default computed style
        const defaultStyle = await el.evaluate((node) => {
          const s = window.getComputedStyle(node);
          const tag = node.tagName.toLowerCase();
          const id = node.id ? `#${node.id}` : "";
          const cls = node.className && typeof node.className === "string" ? `.${node.className.split(" ")[0]}` : "";
          return {
            selector: tag + id + cls,
            backgroundColor: s.backgroundColor,
            color: s.color,
            borderColor: s.borderColor,
            borderRadius: s.borderRadius,
            padding: `${s.paddingTop} ${s.paddingRight} ${s.paddingBottom} ${s.paddingLeft}`,
            fontSize: s.fontSize,
            fontWeight: parseInt(s.fontWeight, 10) || 400,
            shadow: s.boxShadow !== "none" ? s.boxShadow : undefined,
            transform: s.transform !== "none" ? s.transform : undefined,
          };
        });

        // Hover over the element in Chrome
        await el.hover({ force: true, timeout: 2000 }).catch(() => {});
        await page.waitForTimeout(250);

        // Measured hover computed style
        const hoverStyle = await el.evaluate((node) => {
          const s = window.getComputedStyle(node);
          return {
            backgroundColor: s.backgroundColor,
            color: s.color,
            borderColor: s.borderColor,
            shadow: s.boxShadow !== "none" ? s.boxShadow : undefined,
            transform: s.transform !== "none" ? s.transform : undefined,
            transition: s.transition !== "all 0s ease 0s" ? s.transition : undefined,
          };
        });

        const hasHoverEffect =
          hoverStyle.backgroundColor !== defaultStyle.backgroundColor ||
          hoverStyle.color !== defaultStyle.color ||
          hoverStyle.borderColor !== defaultStyle.borderColor ||
          hoverStyle.transform !== defaultStyle.transform ||
          hoverStyle.shadow !== defaultStyle.shadow;

        observedComponents.push({
          type: "button",
          name: `Interactive Element ${i + 1}`,
          selector: defaultStyle.selector,
          defaultState: {
            backgroundColor: defaultStyle.backgroundColor,
            color: defaultStyle.color,
            borderColor: defaultStyle.borderColor,
            borderRadius: defaultStyle.borderRadius,
            padding: defaultStyle.padding,
            fontSize: defaultStyle.fontSize,
            fontWeight: defaultStyle.fontWeight,
            shadow: defaultStyle.shadow,
          },
          hoverState: hasHoverEffect ? hoverStyle : undefined,
        });

        // Reset cursor position
        await page.mouse.move(0, 0);
      } catch {
        // Individual element testing handled gracefully
      }
    }

    // 4. Live Click State Machine Testing (Hamburger Menu & Overlay Curtain)
    let observedMenuOverlay: ExtractionResult["menuOverlay"] = undefined;
    const menuButton = await page.$(
      'button[aria-label*="menu" i], button[aria-expanded], [class*="hamburger" i], [class*="menu-btn" i], [class*="menu-toggle" i], header button:has(svg), nav button:has(svg)'
    );

    if (menuButton && (await menuButton.isVisible())) {
      try {
        await menuButton.click({ timeout: 2500 });
        await page.waitForTimeout(600);

        observedMenuOverlay = await page.evaluate(() => {
          const overlays = Array.from(
            document.querySelectorAll(
              '[role="dialog"], [aria-modal="true"], nav[class*="open" i], [class*="overlay" i], [class*="curtain" i], [class*="menu-container" i]'
            )
          );
          for (const o of overlays) {
            const s = window.getComputedStyle(o);
            if (s.display !== "none" && s.visibility !== "hidden" && parseFloat(s.opacity) > 0.1) {
              const links = Array.from(o.querySelectorAll("a"))
                .map((a) => a.textContent?.trim())
                .filter(Boolean);
              return {
                detected: true,
                selector: o.tagName.toLowerCase() + (o.id ? `#${o.id}` : ""),
                backgroundColor: s.backgroundColor,
                backdropFilter: (s as any).backdropFilter || "none",
                linksCount: links.length,
                sampleLinks: links.slice(0, 6) as string[],
              };
            }
          }
          return undefined;
        });

        // Close overlay to return to resting state
        const closeBtn = await page.$('button[aria-label*="close" i], [class*="close" i]');
        if (closeBtn && (await closeBtn.isVisible())) {
          await closeBtn.click().catch(() => {});
        } else {
          await menuButton.click().catch(() => {});
        }
        await page.waitForTimeout(400);
      } catch {
        // Overlay inspection handled gracefully
      }
    }

    // 5. Evaluate DOM for Colors, Surfaces, Typography, Sections, and Motion Engines
    const domInspection = await page.evaluate(() => {
      const allElements = Array.from(document.querySelectorAll("*"));
      const totalNodes = allElements.length;
      const stylesheetsCount = document.styleSheets.length;

      // Runtime stack
      const stack: string[] = [];
      const win = window as any;
      if (document.querySelector("#__next") || win.__NEXT_DATA__) stack.push("Next.js");
      if (document.querySelector("[data-reactroot]") || win.React) stack.push("React");
      if (win.__vue__ || document.querySelector("[data-v-]")) stack.push("Vue.js");
      if (win.angular || document.querySelector("[ng-version]")) stack.push("Angular");
      if (
        document.querySelector('script[src*="tailwind"]') ||
        Array.from(document.styleSheets).some((s) => {
          try {
            return Array.from(s.cssRules || []).some(
              (r) => r.cssText.includes("--tw-") || r.cssText.includes("@theme")
            );
          } catch {
            return false;
          }
        })
      ) {
        stack.push("Tailwind CSS");
      }

      // Motion engines
      const motionEngines = {
        gsap: Boolean(win.gsap || win.TweenMax),
        scrollTrigger: Boolean(win.ScrollTrigger || (win.gsap && win.gsap.plugins?.ScrollTrigger)),
        lenis: Boolean(win.Lenis || win.__lenis || document.querySelector(".lenis")),
        threejs: Boolean(win.THREE || document.querySelector("canvas")),
        framerMotion: Boolean(
          document.querySelector('[class*="framer-"]') || document.querySelector("[data-framer-name]")
        ),
      };

      // Color sampling
      const rawColors: { hex: string; source: string; count: number }[] = [];
      const colorMap = new Map<string, { source: string; count: number }>();

      const addColor = (c: string, src: string) => {
        if (!c || c === "transparent" || c === "rgba(0, 0, 0, 0)") return;
        const key = c.toLowerCase();
        const existing = colorMap.get(key);
        if (existing) {
          existing.count++;
        } else {
          colorMap.set(key, { source: src, count: 1 });
        }
      };

      const bodyStyle = window.getComputedStyle(document.body);
      const rootBg = bodyStyle.backgroundColor;
      addColor(rootBg, "root-bg");

      const rawTypography: any[] = [];
      const observedRadii: string[] = [];
      const observedShadows: string[] = [];
      const observedCardBgs: string[] = [];
      const observedTransitions: string[] = [];
      const observedEasings: string[] = [];

      allElements.slice(0, 800).forEach((el) => {
        const style = window.getComputedStyle(el);
        const tag = el.tagName.toLowerCase();

        if (style.backgroundColor && style.backgroundColor !== "rgba(0, 0, 0, 0)") {
          const isButton = tag === "button" || el.getAttribute("role") === "button" || el.classList.contains("btn");
          addColor(style.backgroundColor, isButton ? "button" : "bg");
          if (el.clientWidth > 200 && el.clientHeight > 150) {
            observedCardBgs.push(style.backgroundColor);
          }
        }
        if (style.color) {
          addColor(style.color, "text");
        }
        if (style.borderColor && style.borderWidth !== "0px") {
          addColor(style.borderColor, "border");
        }

        if (
          ["h1", "h2", "h3", "h4", "h5", "h6", "p", "a", "button", "span"].includes(tag) &&
          el.textContent?.trim()
        ) {
          rawTypography.push({
            fontFamily: style.fontFamily,
            fontSize: style.fontSize,
            fontWeight: style.fontWeight,
            lineHeight: style.lineHeight,
            letterSpacing: style.letterSpacing,
            tag,
            sampleText: el.textContent.trim().slice(0, 40),
            count: 1,
          });
        }

        if (style.borderRadius && style.borderRadius !== "0px") {
          observedRadii.push(style.borderRadius);
        }
        if (style.boxShadow && style.boxShadow !== "none") {
          observedShadows.push(style.boxShadow);
        }

        if (style.transitionDuration && style.transitionDuration !== "0s") {
          observedTransitions.push(style.transitionDuration);
        }
        if (style.transitionTimingFunction) {
          observedEasings.push(style.transitionTimingFunction);
        }
      });

      colorMap.forEach((val, hex) => {
        rawColors.push({ hex, source: val.source, count: val.count });
      });

      // Section bands
      const sectionsData: any[] = [];
      const topContainers = Array.from(
        document.querySelectorAll("body > *, main > *, #__next > *, header, nav, footer, section")
      );
      let bandIndex = 1;

      topContainers.slice(0, 15).forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.height > 60 && rect.width > 300) {
          const s = window.getComputedStyle(sec);
          const tag = sec.tagName.toLowerCase();
          const isCollapsedGiantBand = rect.height > 5000;
          const id = sec.id ? `#${sec.id}` : `${tag}-${bandIndex}`;
          sectionsData.push({
            id,
            title: `Band ${bandIndex}: ${tag.toUpperCase()}${isCollapsedGiantBand ? " [COLLAPSED BAND >5000px: Use Explicit Child Selectors]" : ""}`,
            selector: tag + (sec.id ? `#${sec.id}` : ""),
            bandIndex,
            isCollapsedGiantBand,
            dimensions: {
              width: Math.round(rect.width),
              height: Math.round(rect.height),
              top: Math.round(rect.top + window.scrollY),
            },
            backgroundColor: s.backgroundColor !== "rgba(0, 0, 0, 0)" ? s.backgroundColor : rootBg,
            hasGrid: s.display === "grid" || s.display === "flex",
          });
          bandIndex++;
        }
      });

      return {
        totalNodes,
        stylesheetsCount,
        stack,
        motionEngines,
        rootBg,
        rawColors,
        rawTypography,
        observedRadii,
        observedShadows,
        observedCardBgs,
        observedTransitions,
        observedEasings,
        sectionsData,
      };
    });

    // 6. Color Processing & Ranking
    const rankedColors = deduplicateAndRankColors(domInspection.rawColors, 12);
    const { swatches, canvasHex, isDarkCanvas } = assignColorRoles(rankedColors, domInspection.rootBg);

    // 7. Typography Scale
    const typography = buildTypographyScale(domInspection.rawTypography as RawTypographyStyle[]);

    // 8. Surface Ladder
    const surfaces = buildSurfaceLadder(canvasHex, isDarkCanvas, {
      observedBorderRadii: domInspection.observedRadii,
      observedShadows: domInspection.observedShadows,
      observedCardBgs: domInspection.observedCardBgs,
    });

    // 9. Section Bands
    const sections: SectionBand[] = domInspection.sectionsData.map((s) => ({
      id: s.id,
      title: s.title,
      selector: s.selector,
      bandIndex: s.bandIndex,
      dimensions: s.dimensions,
      backgroundColor: s.backgroundColor,
      layoutType: detectLayoutType(s.selector, s.bandIndex - 1, s.dimensions.height, s.hasGrid),
    }));

    // 10. Motion DNA
    const durationScale = Array.from(new Set(domInspection.observedTransitions)).slice(0, 5);
    const easingCurves = Array.from(new Set(domInspection.observedEasings)).slice(0, 4);

    const motion: MotionDnaRecord = {
      durationScale: durationScale.length ? durationScale : ["160ms", "240ms"],
      easingCurves: easingCurves.length ? easingCurves : ["cubic-bezier(0.16, 1, 0.3, 1)"],
      detectedEngines: domInspection.motionEngines,
      keyframes: [],
      scrollTriggers: [],
      hoverTransitions: observedComponents
        .filter((c) => c.hoverState?.transform || c.hoverState?.transition)
        .map((c) => ({
          selector: c.selector,
          transition: c.hoverState?.transition || "160ms ease",
          transform: c.hoverState?.transform || "translateY(-1px)",
        })),
    };

    // 11. WCAG AA Contrast Evaluation
    const canvasRgb = parseColor(canvasHex) || { r: 9, g: 9, b: 11 };
    const wcagFindings: ExtractionResult["wcagFindings"] = [];

    const primaryColor = swatches.find((s) => s.role === "primary");
    const inkColor = swatches.find((s) => s.role === "ink");

    if (inkColor) {
      const inkRgb = parseColor(inkColor.hex);
      if (inkRgb) {
        const cr = Math.round(contrastRatio(inkRgb, canvasRgb) * 10) / 10;
        wcagFindings.push({
          severity: cr >= 4.5 ? "pass" : "error",
          pair: `Ink (${inkColor.hex}) on Canvas (${canvasHex})`,
          contrast: cr,
          required: 4.5,
          message: cr >= 4.5 ? "Passes WCAG AA standard text legibility" : "Fails WCAG AA contrast for regular text",
        });
      }
    }

    if (primaryColor) {
      const pRgb = parseColor(primaryColor.hex);
      if (pRgb) {
        const cr = Math.round(contrastRatio(pRgb, canvasRgb) * 10) / 10;
        wcagFindings.push({
          severity: cr >= 3.0 ? "pass" : "warn",
          pair: `Primary Accent (${primaryColor.hex}) on Canvas (${canvasHex})`,
          contrast: cr,
          required: 3.0,
          message:
            cr >= 3.0
              ? "Passes WCAG AA graphical objects & large interactive targets"
              : "Subtle contrast ratio: ensure text labels inside buttons have high contrast",
        });
      }
    }

    // 12. Synthesize extraction manifest
    const manifest = {
      brand: brandName,
      brandSlug,
      url,
      canonicalUrl,
      pageTitle,
      timestamp: new Date().toISOString(),
      viewport: `${viewport.width}x${viewport.height}`,
      domNodesInspected: domInspection.totalNodes,
      stylesheetsInspected: domInspection.stylesheetsCount,
      runtimeStack: domInspection.stack,
      extractionEngine: "Live Google Chrome + Full Page Scroll + Hover Testing + Click State Machine",
      version: "1.0.0",
      filesGenerated: [],
    };

    const extractionResult: ExtractionResult = {
      manifest,
      colors: swatches,
      surfaces,
      typography,
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
      },
      components: observedComponents,
      sections,
      motion,
      menuOverlay: observedMenuOverlay,
      wcagFindings,
    };

    // 13. Emit multi-file design system into designs/<brand-slug>/
    const { folderPath, files } = emitMultiFileDesign(extractionResult, {
      outputBaseDir: options.outputBaseDir,
    });

    // 14. Capture Full Page and Hero Screenshots if requested or default
    try {
      const assetsDir = path.join(folderPath, "assets");
      if (!fs.existsSync(assetsDir)) {
        fs.mkdirSync(assetsDir, { recursive: true });
      }
      await page.screenshot({ path: path.join(assetsDir, "hero.png"), fullPage: false }).catch(() => {});
      await page.screenshot({ path: path.join(assetsDir, "fullpage.png"), fullPage: true }).catch(() => {});

      if (options.captureMobileViewport) {
        await page.setViewportSize({ width: 390, height: 844 });
        await page.waitForTimeout(500);
        await page.screenshot({ path: path.join(assetsDir, "mobile-hero.png"), fullPage: false }).catch(() => {});
        await page.screenshot({ path: path.join(assetsDir, "mobile-fullpage.png"), fullPage: true }).catch(() => {});
      }
    } catch {
      // Screenshot write handled gracefully
    }

    return {
      result: extractionResult,
      folderPath,
      files,
    };
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
