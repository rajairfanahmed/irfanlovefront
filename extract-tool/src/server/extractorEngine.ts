import { chromium, Browser, BrowserContext } from 'playwright';
import fs from 'fs';
import JSZip from 'jszip';
import { PageFolder, SectionItem } from '../types/extractor';

export interface ViewportConfig {
  id: string;
  name: string;
  width: number;
  height: number;
  deviceScaleFactor: number;
  isMobile?: boolean;
  hasTouch?: boolean;
}

export const VIEWPORT_DEFS: Record<string, ViewportConfig> = {
  '1440px': {
    id: '1440px',
    name: 'desktop',
    width: 1440,
    height: 900,
    deviceScaleFactor: 2, // 2880px Full HD retina output
  },
  '768px': {
    id: '768px',
    name: 'tablet',
    width: 768,
    height: 1024,
    deviceScaleFactor: 2, // 1536px Full HD retina output
  },
  '390px': {
    id: '390px',
    name: 'mobile',
    width: 390,
    height: 844,
    deviceScaleFactor: 3, // 1170px Full HD crisp mobile output
    isMobile: true,
    hasTouch: true,
  },
};

export interface EngineExtractOptions {
  url: string;
  viewports: string[];
  animatedSite: boolean;
  hideOverlays: boolean;
  flattenStickyNav: boolean;
  onProgress?: (data: {
    percent: number;
    statusText: string;
    section?: SectionItem & { viewport: string; pageName: string };
  }) => void;
}

export interface EngineExtractResult {
  domain: string;
  totalSections: number;
  totalSize: string;
  pages: PageFolder[];
  zipBuffer: Buffer;
  zipBase64: string;
}

// Find local Chrome or Edge executable on Windows
function getChromeExecutablePath(): string | undefined {
  const chromePaths = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  ];

  for (const p of chromePaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  return undefined;
}

export async function runWebsiteExtraction(
  options: EngineExtractOptions
): Promise<EngineExtractResult> {
  const {
    url,
    viewports = ['1440px'],
    animatedSite = true,
    hideOverlays = true,
    flattenStickyNav = true,
    onProgress,
  } = options;

  // Normalize URL
  let targetUrl = url.trim();
  if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
    targetUrl = 'https://' + targetUrl;
  }

  const parsedUrl = new URL(targetUrl);
  const domain = parsedUrl.hostname.replace(/^www\./, '');

  onProgress?.({
    percent: 10,
    statusText: `Initializing Full HD engine for ${domain}...`,
  });

  const chromePath = getChromeExecutablePath();
  const browser: Browser = await chromium.launch({
    executablePath: chromePath,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu',
    ],
  });

  const zip = new JSZip();
  const rootZip = zip.folder(`${domain}-design`) || zip;
  const isMultiViewport = viewports.length > 1;

  const collectedPages: PageFolder[] = [];
  let totalCapturedSections = 0;
  let totalBytes = 0;

  try {
    const activeViewports = viewports
      .map((vp) => VIEWPORT_DEFS[vp])
      .filter(Boolean);

    if (activeViewports.length === 0) {
      activeViewports.push(VIEWPORT_DEFS['1440px']);
    }

    const totalSteps = activeViewports.length;
    let currentVpIdx = 0;

    for (const vp of activeViewports) {
      currentVpIdx++;
      const basePercent = 15 + Math.round((currentVpIdx - 1) * (70 / totalSteps));

      onProgress?.({
        percent: basePercent,
        statusText: `Setting up Full HD ${vp.name.toUpperCase()} viewport (${vp.width}x${vp.height})...`,
      });

      const context: BrowserContext = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: vp.deviceScaleFactor,
        isMobile: vp.isMobile || false,
        hasTouch: vp.hasTouch || false,
        userAgent: vp.isMobile
          ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
          : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      });

      const page = await context.newPage();

      try {
        onProgress?.({
          percent: basePercent + 5,
          statusText: `Navigating to ${domain}...`,
        });

        await page.goto(targetUrl, {
          waitUntil: 'domcontentloaded',
          timeout: 25000,
        });

        // Apply animated site treatment
        if (animatedSite) {
          onProgress?.({
            percent: basePercent + 8,
            statusText: `Triggering scroll animations & settling DOM...`,
          });

          // Fast forward animations
          await page.addStyleTag({
            content: `
              *, *::before, *::after {
                animation-duration: 0.05s !important;
                transition-duration: 0.05s !important;
              }
            `,
          });

          // Smooth scroll down to trigger IntersectionObservers
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
                  window.scrollTo(0, 0);
                  resolve();
                }
              }, 60);
            });
          });

          await page.waitForTimeout(800);
        }

        // Apply hide overlays treatment
        if (hideOverlays) {
          onProgress?.({
            percent: basePercent + 12,
            statusText: `Auto-hiding cookie consent banners & modals...`,
          });

          await page.evaluate(() => {
            const selectors = [
              '#onetrust-consent-sdk',
              '#cookie-notice',
              '.cookie-banner',
              '.cookie-consent',
              '[id*="cookie"]',
              '[class*="cookie"]',
              '[id*="consent"]',
              '[class*="consent"]',
              '[id*="modal-backdrop"]',
              '.modal-backdrop',
              '#hs-eu-cookie-confirmation',
              '.cky-consent-container',
              '[role="dialog"][aria-modal="true"]',
            ];
            selectors.forEach((sel) => {
              try {
                document.querySelectorAll(sel).forEach((el) => {
                  const htmlEl = el as HTMLElement;
                  htmlEl.style.display = 'none';
                  htmlEl.style.opacity = '0';
                  htmlEl.style.pointerEvents = 'none';
                });
              } catch {
                // ignore
              }
            });
          });
        }

        // Apply flatten sticky nav treatment
        if (flattenStickyNav) {
          onProgress?.({
            percent: basePercent + 15,
            statusText: `Flattening sticky navigation elements...`,
          });

          await page.evaluate(() => {
            document
              .querySelectorAll('header, nav, [style*="position: fixed"], [style*="position: sticky"], .sticky, .fixed')
              .forEach((el) => {
                const htmlEl = el as HTMLElement;
                htmlEl.style.position = 'static';
                htmlEl.style.top = 'auto';
              });
          });
        }

        // Detect section candidates on homepage
        const sectionInfos = await page.evaluate(() => {
          const results: {
            name: string;
            selector: string;
            x: number;
            y: number;
            width: number;
            height: number;
          }[] = [];

          const queryAll = (sel: string) => Array.from(document.querySelectorAll(sel));

          // 1. Header / Navbar
          const navEl = document.querySelector('header, nav, [role="banner"], [role="navigation"]');
          if (navEl) {
            const rect = navEl.getBoundingClientRect();
            if (rect.height > 20 && rect.width > 200) {
              results.push({
                name: '01-navbar.png',
                selector: 'header, nav',
                x: rect.x + window.scrollX,
                y: rect.y + window.scrollY,
                width: rect.width,
                height: rect.height,
              });
            }
          }

          // 2. Main sections
          const sectionEls = queryAll('main > section, main > div, section, article, #hero, [id*="hero"]');
          let counter = results.length + 1;

          sectionEls.forEach((el) => {
            const rect = el.getBoundingClientRect();
            // Skip tiny icons, invisible sections, or duplicates of header
            if (rect.height >= 120 && rect.width >= 240 && rect.y >= 0) {
              const id = el.id ? `-${el.id}` : '';
              const prefix = counter < 10 ? `0${counter}` : `${counter}`;
              results.push({
                name: `${prefix}-section${id}.png`,
                selector: el.id ? `#${el.id}` : el.tagName.toLowerCase(),
                x: rect.x + window.scrollX,
                y: rect.y + window.scrollY,
                width: rect.width,
                height: rect.height,
              });
              counter++;
            }
          });

          // 3. Footer
          const footerEl = document.querySelector('footer, [role="contentinfo"]');
          if (footerEl) {
            const rect = footerEl.getBoundingClientRect();
            if (rect.height > 40 && rect.width > 200) {
              const prefix = counter < 10 ? `0${counter}` : `${counter}`;
              results.push({
                name: `${prefix}-footer.png`,
                selector: 'footer',
                x: rect.x + window.scrollX,
                y: rect.y + window.scrollY,
                width: rect.width,
                height: rect.height,
              });
            }
          }

          // Fallback if no clean sections found: chunk page into 800px slices
          if (results.length <= 1) {
            const scrollHeight = Math.max(document.body.scrollHeight, 1800);
            const sliceHeight = 850;
            const slices = Math.min(Math.ceil(scrollHeight / sliceHeight), 6);
            results.length = 0; // clear

            for (let i = 0; i < slices; i++) {
              const prefix = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
              const label = i === 0 ? 'hero' : i === slices - 1 ? 'footer' : `section-${i}`;
              results.push({
                name: `${prefix}-${label}.png`,
                selector: `window.slice-${i}`,
                x: 0,
                y: i * sliceHeight,
                width: window.innerWidth,
                height: Math.min(sliceHeight, scrollHeight - i * sliceHeight),
              });
            }
          }

          return results;
        });

        // Determine destination folder in ZIP
        // If multiple viewports: <domain>/<viewport>/homepage/<filename>
        // If single viewport: <domain>/homepage/<filename>
        const targetZipFolder = isMultiViewport
          ? rootZip.folder(vp.name)?.folder('homepage') || rootZip
          : rootZip.folder('homepage') || rootZip;

        const capturedItems: SectionItem[] = [];

        // Capture each section screenshot in Full HD
        for (let i = 0; i < sectionInfos.length; i++) {
          const sec = sectionInfos[i];
          const clipY = Math.max(0, sec.y);
          const clipHeight = Math.max(60, sec.height);

          onProgress?.({
            percent: Math.min(
              88,
              basePercent + 15 + Math.round((i / sectionInfos.length) * (20 / totalSteps))
            ),
            statusText: `[${vp.name.toUpperCase()}] Snapping ${sec.name} (${Math.round(sec.width)}x${Math.round(sec.height)})...`,
          });

          // Scroll to element to ensure crisp render
          await page.evaluate((y) => window.scrollTo(0, y), clipY);
          await page.waitForTimeout(200);

          let screenshotBuffer: Buffer;
          try {
            screenshotBuffer = await page.screenshot({
              type: 'png',
              clip: {
                x: 0,
                y: clipY,
                width: vp.width,
                height: Math.min(clipHeight, 2400), // Max single section height
              },
            });
          } catch {
            // Fallback: full viewport screenshot
            screenshotBuffer = await page.screenshot({ type: 'png' });
          }

          // Add to ZIP
          targetZipFolder.file(sec.name, screenshotBuffer);
          totalBytes += screenshotBuffer.length;
          totalCapturedSections++;

          const kbSize = `${Math.round(screenshotBuffer.length / 1024)} KB`;
          const dimensions = `${Math.round(sec.width * vp.deviceScaleFactor)} × ${Math.round(
            clipHeight * vp.deviceScaleFactor
          )}`;

          const sectionItem: SectionItem = {
            id: `sec-${vp.name}-${i}`,
            name: sec.name,
            selector: sec.selector,
            dimensions,
            size: kbSize,
            status: 'completed',
          };

          capturedItems.push(sectionItem);

          onProgress?.({
            percent: Math.min(
              90,
              basePercent + 15 + Math.round(((i + 1) / sectionInfos.length) * (20 / totalSteps))
            ),
            statusText: `Captured ${sec.name} [Full HD: ${dimensions}]`,
            section: {
              ...sectionItem,
              viewport: vp.name,
              pageName: 'homepage',
            },
          });
        }

        collectedPages.push({
          id: `page-${vp.name}-homepage`,
          name: isMultiViewport ? `${vp.name}/homepage` : 'homepage',
          path: '/',
          viewport: vp.name,
          sections: capturedItems,
        });
      } finally {
        await context.close();
      }
    }

    onProgress?.({
      percent: 92,
      statusText: 'Assembling Full HD folder hierarchy & ZIP archive...',
    });

    // Add extraction metadata manifest to the root of ZIP
    const manifest = {
      domain,
      extractedUrl: targetUrl,
      extractedAt: new Date().toISOString(),
      viewports: viewports.map((vp) => VIEWPORT_DEFS[vp]?.name || vp),
      isMultiViewport,
      totalSections: totalCapturedSections,
      totalSize: `${(totalBytes / (1024 * 1024)).toFixed(1)} MB`,
      options: {
        animatedSite,
        hideOverlays,
        flattenStickyNav,
      },
      engine: 'SiteRip Full HD Section Extractor v1.0',
    };

    rootZip.file('extraction-manifest.json', JSON.stringify(manifest, null, 2));

    const zipBuffer = await zip.generateAsync({
      type: 'nodebuffer',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 },
    });

    const zipBase64 = zipBuffer.toString('base64');
    const totalSizeFormatted = `${(totalBytes / (1024 * 1024)).toFixed(1)} MB`;

    onProgress?.({
      percent: 100,
      statusText: 'Extraction complete! Ready for download.',
    });

    return {
      domain,
      totalSections: totalCapturedSections,
      totalSize: totalSizeFormatted,
      pages: collectedPages,
      zipBuffer,
      zipBase64,
    };
  } finally {
    await browser.close();
  }
}
