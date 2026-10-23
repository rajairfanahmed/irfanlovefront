import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { deduplicateAndRankColors, assignColorRoles, contrastRatio, parseColor } from "./colors.js";
import { buildTypographyScale } from "./typography.js";
import { buildSurfaceLadder } from "./surfaces.js";
import { detectLayoutType } from "./structure.js";
import { emitMultiFileDesign } from "./multi-file-emitter.js";
export async function extractDesignFromUrl(targetUrl, options = {}) {
    let url = targetUrl.trim();
    if (!/^https?:\/\//i.test(url)) {
        url = "https://" + url;
    }
    const viewport = options.viewport || { width: 1440, height: 900 };
    const timeoutMs = options.timeoutMs || 35000;
    const isHeadless = options.headless !== undefined ? options.headless : false;
    let browser = null;
    try {
        // Launch Chrome if available, fallback to Chromium
        try {
            browser = await chromium.launch({
                channel: "chrome",
                headless: isHeadless,
                args: ["--start-maximized", "--no-sandbox", "--disable-setuid-sandbox", "--disable-blink-features=AutomationControlled"],
            });
        }
        catch {
            browser = await chromium.launch({
                headless: isHeadless,
                args: ["--start-maximized", "--no-sandbox", "--disable-setuid-sandbox"],
            });
        }
        const context = await browser.newContext({
            viewport,
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        });
        const page = await context.newPage();
        // 1. Navigate to target URL
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: timeoutMs });
        // 1.1 Active Preloader Dismissal Wait (poll until animated counting preloader completes or fades out)
        await page.evaluate(async () => {
            const preloaderSelectors = [
                ".preloader",
                '[class*="preloader" i]',
                '[id*="preloader" i]',
                ".loader",
                '[class*="loader" i]',
                '[id*="loader" i]',
                '[class*="curtain" i]',
                "[data-preloader]",
                "#loading",
                ".loading-screen",
            ];
            const startTime = Date.now();
            while (Date.now() - startTime < 8000) {
                let active = false;
                for (const sel of preloaderSelectors) {
                    const el = document.querySelector(sel);
                    if (el) {
                        const s = window.getComputedStyle(el);
                        if (s.display !== "none" && s.visibility !== "hidden" && parseFloat(s.opacity || "1") > 0.05) {
                            active = true;
                            break;
                        }
                    }
                }
                if (!active)
                    break;
                await new Promise((r) => setTimeout(r, 200));
            }
        });
        // 1.2 Dismiss Cookie Consent Popups if visible
        try {
            const cookieBtn = await page.$('button[id*="cookie" i], button[class*="cookie" i], button:has-text("Accept"), button:has-text("Allow"), button:has-text("I agree"), [aria-label*="cookie" i] button');
            if (cookieBtn && (await cookieBtn.isVisible())) {
                await cookieBtn.click().catch(() => { });
                await page.waitForTimeout(400);
            }
        }
        catch {
            // Cookie banner dismissal handled gracefully
        }
        // Wait for fonts and hero elements to settle
        await page.waitForTimeout(1200);
        // Page metadata
        const pageTitle = (await page.title()) || new URL(url).hostname;
        const canonicalUrl = (await page.$eval('link[rel="canonical"]', (el) => el.href).catch(() => null)) || url;
        const sourceHostname = (canonicalUrl && !canonicalUrl.includes("localhost") && !canonicalUrl.includes("127.0.0.1"))
            ? new URL(canonicalUrl).hostname
            : new URL(url).hostname;
        const brandSlug = sourceHostname.replace(/^www\./, "").replace(/[^a-zA-Z0-9_-]/g, "-").toLowerCase();
        const brandName = pageTitle.split(/[-|\u2014\u2013\u00B7]/)[0].trim() || brandSlug;
        // 2. Interactive Full-Page Smooth Scroll (triggers lazy loads, GSAP ScrollTriggers, and reaches footer)
        await page.evaluate(async () => {
            await new Promise((resolve) => {
                let currentPos = 0;
                const step = 350;
                const getScrollHeight = () => Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, window.innerHeight);
                const timer = setInterval(() => {
                    window.scrollBy(0, step);
                    currentPos += step;
                    const maxScroll = getScrollHeight();
                    if (currentPos >= maxScroll) {
                        clearInterval(timer);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setTimeout(resolve, 800);
                    }
                }, 90);
            });
        });
        await page.waitForTimeout(1000);
        // 3. Live Hover Interaction Testing across interactive controls
        const observedComponents = [];
        const interactiveElements = await page.$$('button, a[role="button"], .btn, [class*="button" i], nav a, header a, [class*="card" i], article');
        const elementsToTest = interactiveElements.slice(0, 8);
        for (let i = 0; i < elementsToTest.length; i++) {
            const el = elementsToTest[i];
            try {
                const isVisible = await el.isVisible();
                if (!isVisible)
                    continue;
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
                await el.hover({ force: true, timeout: 2000 }).catch(() => { });
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
                const hasHoverEffect = hoverStyle.backgroundColor !== defaultStyle.backgroundColor ||
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
            }
            catch {
                // Individual element testing handled gracefully
            }
        }
        // 4. Live Click State Machine Testing (Hamburger Menu & Overlay Curtain)
        let observedMenuOverlay = undefined;
        const menuButton = await page.$('button[aria-label*="menu" i], button[aria-expanded], [class*="hamburger" i], [class*="menu-btn" i], [class*="menu-toggle" i], header button:has(svg), nav button:has(svg)');
        if (menuButton && (await menuButton.isVisible())) {
            try {
                await menuButton.click({ timeout: 2500 });
                await page.waitForTimeout(600);
                observedMenuOverlay = await page.evaluate(() => {
                    const overlays = Array.from(document.querySelectorAll('[role="dialog"], [aria-modal="true"], nav[class*="open" i], [class*="overlay" i], [class*="curtain" i], [class*="menu-container" i]'));
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
                                backdropFilter: s.backdropFilter || "none",
                                linksCount: links.length,
                                sampleLinks: links.slice(0, 6),
                            };
                        }
                    }
                    return undefined;
                });
                // Close overlay to return to resting state
                const closeBtn = await page.$('button[aria-label*="close" i], [class*="close" i]');
                if (closeBtn && (await closeBtn.isVisible())) {
                    await closeBtn.click().catch(() => { });
                }
                else {
                    await menuButton.click().catch(() => { });
                }
                await page.waitForTimeout(400);
            }
            catch {
                // Overlay inspection handled gracefully
            }
        }
        // 5. Evaluate DOM for Colors, Surfaces, Typography, Sections, and Motion Engines
        const domInspection = await page.evaluate(() => {
            const allElements = Array.from(document.querySelectorAll("*"));
            const totalNodes = allElements.length;
            const stylesheetsCount = document.styleSheets.length;
            // Runtime stack
            const stack = [];
            const win = window;
            const doc = document;
            // Astro
            if (doc.querySelector("[data-astro-cid-]") ||
                doc.querySelector("astro-island") ||
                Array.from(doc.querySelectorAll("script")).some((s) => s.src && s.src.includes("_astro/"))) {
                stack.push("Astro");
            }
            // Next.js
            if (doc.querySelector("#__next") || win.__NEXT_DATA__)
                stack.push("Next.js");
            // React
            if (doc.querySelector("[data-reactroot]") ||
                win.React ||
                doc.querySelector("[data-astro-cid-] [data-react-component]")) {
                stack.push("React");
            }
            // Vue.js
            if (win.__vue__ || doc.querySelector("[data-v-]"))
                stack.push("Vue.js");
            // Angular
            if (win.angular || doc.querySelector("[ng-version]"))
                stack.push("Angular");
            // Svelte
            if (doc.querySelector('[class*="svelte-"]') || win.__svelte)
                stack.push("Svelte");
            // Vite
            if (Array.from(doc.querySelectorAll("script")).some((s) => (s.src && (s.src.includes("@vite") || s.src.includes("/vite/"))) || s.type === "module")) {
                stack.push("Vite");
            }
            // Webflow
            if (doc.querySelector("html[data-wf-page]") || win.Webflow)
                stack.push("Webflow");
            // Tailwind CSS
            if (doc.querySelector('script[src*="tailwind"]') ||
                Array.from(doc.styleSheets).some((s) => {
                    try {
                        return Array.from(s.cssRules || []).some((r) => r.cssText.includes("--tw-") || r.cssText.includes("@theme"));
                    }
                    catch {
                        return false;
                    }
                })) {
                stack.push("Tailwind CSS");
            }
            // GSAP
            if (win.gsap ||
                win.TweenMax ||
                Array.from(doc.querySelectorAll("script")).some((s) => s.src && s.src.includes("gsap"))) {
                stack.push("GSAP");
            }
            // Lenis Smooth Scroll
            if (win.Lenis ||
                win.__lenis ||
                doc.querySelector(".lenis") ||
                Array.from(doc.querySelectorAll("script")).some((s) => s.src && s.src.includes("lenis"))) {
                stack.push("Lenis Smooth Scroll");
            }
            // Three.js / WebGL Canvas
            if (win.THREE || doc.querySelector("canvas")) {
                stack.push("Three.js / WebGL Canvas");
            }
            // Framer Motion
            if (doc.querySelector('[class*="framer-"]') || doc.querySelector("[data-framer-name]")) {
                stack.push("Framer Motion");
            }
            // Vercel Analytics / Speed Insights
            if (doc.querySelector("vercel-analytics") || doc.querySelector("vercel-speed-insights")) {
                stack.push("Vercel Analytics");
            }
            // Motion engines
            const motionEngines = {
                gsap: Boolean(win.gsap ||
                    win.TweenMax ||
                    Array.from(doc.querySelectorAll("script")).some((s) => s.src && s.src.includes("gsap"))),
                scrollTrigger: Boolean(win.ScrollTrigger ||
                    (win.gsap && win.gsap.plugins?.ScrollTrigger) ||
                    Array.from(doc.querySelectorAll("script")).some((s) => s.src && s.src.includes("ScrollTrigger"))),
                lenis: Boolean(win.Lenis ||
                    win.__lenis ||
                    doc.querySelector(".lenis") ||
                    Array.from(doc.querySelectorAll("script")).some((s) => s.src && s.src.includes("lenis"))),
                threejs: Boolean(win.THREE || doc.querySelector("canvas")),
                framerMotion: Boolean(doc.querySelector('[class*="framer-"]') || doc.querySelector("[data-framer-name]")),
            };
            // Color sampling
            const rawColors = [];
            const colorMap = new Map();
            const addColor = (c, src) => {
                if (!c || c === "transparent" || c === "rgba(0, 0, 0, 0)")
                    return;
                const key = c.toLowerCase();
                const existing = colorMap.get(key);
                if (existing) {
                    existing.count++;
                }
                else {
                    colorMap.set(key, { source: src, count: 1 });
                }
            };
            const bodyStyle = window.getComputedStyle(document.body);
            const rootBg = bodyStyle.backgroundColor;
            addColor(rootBg, "root-bg");
            const rawTypography = [];
            const observedRadii = [];
            const observedShadows = [];
            const observedCardBgs = [];
            const observedTransitions = [];
            const observedEasings = [];
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
                if (["h1", "h2", "h3", "h4", "h5", "h6", "p", "a", "button", "span"].includes(tag) &&
                    el.textContent?.trim()) {
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
            // Macro Section Bands
            const candidates = [];
            // A. Header
            const header = document.querySelector("header");
            if (header)
                candidates.push(header);
            // B. Top-level sections (sections not nested inside another section)
            const allSections = Array.from(document.querySelectorAll("section"));
            const topSections = allSections.filter((sec) => {
                let parent = sec.parentElement;
                while (parent) {
                    if (parent.tagName.toLowerCase() === "section")
                        return false;
                    parent = parent.parentElement;
                }
                return true;
            });
            candidates.push(...topSections);
            // C. Standalone marquees, partner logo strips, or divider banners outside sections
            const marquees = Array.from(document.querySelectorAll('.marquee, [class*="marquee" i], .logos, [class*="logos" i]')).filter((m) => {
                let parent = m.parentElement;
                while (parent) {
                    if (parent.tagName.toLowerCase() === "section")
                        return false;
                    parent = parent.parentElement;
                }
                return true;
            });
            candidates.push(...marquees);
            // D. Footer
            const footer = document.querySelector("footer");
            if (footer)
                candidates.push(footer);
            // E. Fallback: If site doesn't use semantic <section> tags (e.g. only div containers)
            if (candidates.length <= 2) {
                const mainEl = document.querySelector("main, #__next, #root, #app, body");
                if (mainEl) {
                    const mainChildren = Array.from(mainEl.children).filter((c) => {
                        const s = window.getComputedStyle(c);
                        const rect = c.getBoundingClientRect();
                        return (s.display !== "none" &&
                            rect.height > 100 &&
                            rect.width > 300 &&
                            c.tagName.toLowerCase() !== "header" &&
                            c.tagName.toLowerCase() !== "footer");
                    });
                    candidates.push(...mainChildren);
                }
            }
            // Filter visible content elements
            const valid = candidates.filter((el) => {
                const s = window.getComputedStyle(el);
                const rect = el.getBoundingClientRect();
                if (s.display === "none" || s.visibility === "hidden")
                    return false;
                if (rect.height < 40 || rect.width < 250)
                    return false;
                if (s.position === "fixed" && rect.height >= window.innerHeight)
                    return false; // Curtain overlay / modal
                if (el.classList.contains("preloader") || el.id.includes("preloader") || el.classList.contains("loader"))
                    return false;
                return true;
            });
            // Deduplicate: remove any candidate that is nested inside another selected candidate
            const deduplicated = valid.filter((el) => {
                return !valid.some((other) => other !== el && other.contains(el));
            });
            const unique = Array.from(new Set(deduplicated));
            // Sort by vertical document scroll position
            unique.sort((a, b) => {
                const topA = a.getBoundingClientRect().top + window.scrollY;
                const topB = b.getBoundingClientRect().top + window.scrollY;
                return topA - topB;
            });
            const sectionsData = unique.map((el, idx) => {
                const rect = el.getBoundingClientRect();
                const s = window.getComputedStyle(el);
                const tag = el.tagName.toLowerCase();
                const id = el.id ? `#${el.id}` : "";
                const cls = el.className && typeof el.className === "string"
                    ? "." + el.className.trim().split(/\s+/).slice(0, 2).join(".")
                    : "";
                const aria = el.getAttribute("aria-label");
                const heading = el.querySelector("h1, h2, h3, h4")?.textContent?.trim().slice(0, 45);
                const title = aria || heading || (el.id ? el.id : cls.replace(/^\./, "")) || tag;
                return {
                    id: el.id ? `#${el.id}` : `${tag}-${idx + 1}`,
                    title: `Band ${idx + 1}: ${title.toUpperCase()}`,
                    selector: `${tag}${id}${id ? "" : cls}`,
                    bandIndex: idx + 1,
                    isCollapsedGiantBand: false,
                    dimensions: {
                        width: Math.round(rect.width),
                        height: Math.round(rect.height),
                        top: Math.round(rect.top + window.scrollY),
                    },
                    backgroundColor: s.backgroundColor !== "rgba(0, 0, 0, 0)" ? s.backgroundColor : rootBg,
                    hasGrid: s.display === "grid" || s.display === "flex",
                };
            });
            // Deep Component & Forensics Evaluation
            const doubleSlashElements = allElements
                .filter((el) => {
                if (el.children.length > 0 || !el.textContent)
                    return false;
                const tag = el.tagName.toLowerCase();
                if (["script", "style", "noscript"].includes(tag))
                    return false;
                const t = el.textContent.trim();
                return t.includes("//") && !t.includes("http://") && !t.includes("https://");
            })
                .map((el) => ({
                tag: el.tagName.toLowerCase(),
                text: el.textContent.trim().slice(0, 80),
            }));
            const pulseElements = allElements
                .filter((el) => {
                const cls = typeof el.className === "string" ? el.className : "";
                const s = window.getComputedStyle(el);
                return (cls.includes("pulse") ||
                    cls.includes("ping") ||
                    (s.animationName && (s.animationName.includes("pulse") || s.animationName.includes("ping"))));
            })
                .map((el) => ({
                tag: el.tagName.toLowerCase(),
                class: typeof el.className === "string" ? el.className.slice(0, 60) : "",
            }));
            const buttonsList = Array.from(document.querySelectorAll('button, .btn, [class*="btn"], .pill, [class*="pill"], a[role="button"]'))
                .map((el) => {
                const s = window.getComputedStyle(el);
                return {
                    selector: el.tagName.toLowerCase() +
                        (el.className && typeof el.className === "string" ? "." + el.className.trim().split(/\s+/)[0] : ""),
                    text: el.textContent?.trim().slice(0, 40) || "",
                    bg: s.backgroundColor,
                    color: s.color,
                    border: `${s.borderWidth} ${s.borderStyle} ${s.borderColor}`,
                    radius: s.borderRadius,
                    padding: `${s.paddingTop} ${s.paddingRight} ${s.paddingBottom} ${s.paddingLeft}`,
                    fontSize: s.fontSize,
                };
            })
                .filter((b) => b.text.length > 0)
                .slice(0, 10);
            const cardsList = Array.from(document.querySelectorAll('.preview__item, .preview, [class*="preview"], [class*="work"] article, [class*="card"]'))
                .map((el) => {
                const s = window.getComputedStyle(el);
                const title = el.querySelector('h1, h2, h3, h4, [class*="title"]')?.textContent?.trim();
                const tags = Array.from(el.querySelectorAll('.tag, [class*="tag"], li'))
                    .map((t) => t.textContent?.trim())
                    .filter(Boolean);
                const img = el.querySelector("img");
                return {
                    selector: el.tagName.toLowerCase() +
                        (el.className && typeof el.className === "string" ? "." + el.className.trim().split(/\s+/)[0] : ""),
                    title: title || undefined,
                    tags: tags.slice(0, 6),
                    hasImage: !!img,
                    border: `${s.borderWidth} ${s.borderColor}`,
                    radius: s.borderRadius,
                };
            })
                .slice(0, 10);
            const pillsAndBadgesList = Array.from(document.querySelectorAll('.pill, [class*="pill"], .badge, [class*="badge"], [class*="chip"]'))
                .map((el) => {
                const s = window.getComputedStyle(el);
                return {
                    selector: el.tagName.toLowerCase() +
                        (el.className && typeof el.className === "string" ? "." + el.className.trim().split(/\s+/)[0] : ""),
                    text: el.textContent?.trim().slice(0, 30) || "",
                    bg: s.backgroundColor,
                    color: s.color,
                    radius: s.borderRadius,
                };
            })
                .filter((p) => p.text.length > 0)
                .slice(0, 10);
            const tabularRowsList = Array.from(document.querySelectorAll('.rec__row, [class*="rec__row"], .row, [class*="table"] tr'))
                .map((el) => {
                const s = window.getComputedStyle(el);
                const cols = Array.from(el.children).map((c) => c.textContent?.trim()).filter(Boolean);
                return {
                    selector: el.tagName.toLowerCase() +
                        (el.className && typeof el.className === "string" ? "." + el.className.trim().split(/\s+/)[0] : ""),
                    columns: cols.slice(0, 5),
                    borderBottom: s.borderBottom,
                };
            })
                .filter((r) => r.columns.length > 0)
                .slice(0, 8);
            const tagsetsList = Array.from(document.querySelectorAll('.tagset, [class*="tagset"], .tagsets'))
                .map((el) => {
                const label = el.querySelector('.label, [class*="label"]')?.textContent?.trim();
                const items = Array.from(el.querySelectorAll("*"))
                    .filter((c) => c.children.length === 0 && c.textContent?.trim())
                    .map((c) => c.textContent.trim())
                    .filter((t) => t !== label);
                return {
                    label: label || undefined,
                    items: items.slice(0, 10),
                };
            })
                .slice(0, 6);
            const accordionsList = Array.from(document.querySelectorAll('.caps__item, .caps li, [class*="caps"] li, details, [class*="accordion"]'))
                .map((el) => {
                const title = el.querySelector("h1, h2, h3, h4, summary, strong, span")?.textContent?.trim();
                const subItems = Array.from(el.querySelectorAll("p, li, span"))
                    .map((s) => s.textContent?.trim())
                    .filter(Boolean);
                return {
                    title: title || undefined,
                    subItems: subItems.slice(0, 5),
                };
            })
                .slice(0, 6);
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
                forensics: {
                    hasDoubleSlash: doubleSlashElements.length > 0,
                    doubleSlashOccurrences: doubleSlashElements.slice(0, 10),
                    hasPulseAnimation: pulseElements.length > 0,
                    pulseOccurrences: pulseElements.slice(0, 10),
                    projectCardsObserved: cardsList.length,
                    componentAnatomy: {
                        buttons: buttonsList,
                        cards: cardsList,
                        pillsAndBadges: pillsAndBadgesList,
                        tabularRows: tabularRowsList,
                        tagsets: tagsetsList,
                        accordions: accordionsList,
                    },
                },
            };
        });
        // 6. Color Processing & Ranking
        const rankedColors = deduplicateAndRankColors(domInspection.rawColors, 12);
        const { swatches, canvasHex, isDarkCanvas } = assignColorRoles(rankedColors, domInspection.rootBg);
        // 7. Typography Scale
        const typography = buildTypographyScale(domInspection.rawTypography);
        // 8. Surface Ladder
        const surfaces = buildSurfaceLadder(canvasHex, isDarkCanvas, {
            observedBorderRadii: domInspection.observedRadii,
            observedShadows: domInspection.observedShadows,
            observedCardBgs: domInspection.observedCardBgs,
        });
        // 9. Section Bands
        const sections = domInspection.sectionsData.map((s) => ({
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
        const motion = {
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
        const wcagFindings = [];
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
                    message: cr >= 3.0
                        ? "Passes WCAG AA graphical objects & large interactive targets"
                        : "Subtle contrast ratio: ensure text labels inside buttons have high contrast",
                });
            }
        }
        // 12. Synthesize extraction manifest
        const manifest = {
            brand: brandName,
            brandSlug,
            url: (url.includes("localhost") || url.includes("127.0.0.1")) && canonicalUrl ? canonicalUrl : url,
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
        const extractionResult = {
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
            forensics: domInspection.forensics,
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
            await page.screenshot({ path: path.join(assetsDir, "hero.png"), fullPage: false }).catch(() => { });
            await page.screenshot({ path: path.join(assetsDir, "fullpage.png"), fullPage: true }).catch(() => { });
            if (options.captureMobileViewport) {
                await page.setViewportSize({ width: 390, height: 844 });
                await page.waitForTimeout(500);
                await page.screenshot({ path: path.join(assetsDir, "mobile-hero.png"), fullPage: false }).catch(() => { });
                await page.screenshot({ path: path.join(assetsDir, "mobile-fullpage.png"), fullPage: true }).catch(() => { });
            }
        }
        catch {
            // Screenshot write handled gracefully
        }
        return {
            result: extractionResult,
            folderPath,
            files,
        };
    }
    finally {
        if (browser) {
            await browser.close();
        }
    }
}
