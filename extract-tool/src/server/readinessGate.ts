import { Page, BrowserContext } from 'playwright';

export interface ReadinessResult {
  ready: boolean;
  status: 'ready' | 'stuck' | 'timeout' | 'blocked' | 'gate';
  reason?: 'BOT_PROTECTION' | 'LOADING_TIMEOUT' | 'GATE' | 'NONE';
  waitedMs: number;
  attempt: number;
  signals: string[];
  skipButtonClicked?: boolean;
  reducedMotionUsed?: boolean;
  settled: boolean;
}

// Check A: Challenge & Block Patterns
export const CHALLENGE_PATTERNS = {
  titles: [
    /just a moment/i,
    /attention required/i,
    /access denied/i,
    /checking your browser/i,
    /verifying/i,
    /security check/i,
    /cloudflare/i,
  ],
  phrases: [
    'checking your browser',
    'verify you are human',
    'enable javascript and cookies to continue',
    'please wait for up to',
    'ddos protection by',
    'ray id:',
    'completing the challenge',
  ],
  selectors: [
    '#challenge-running',
    '#challenge-form',
    '#cf-wrapper',
    '#cf-challenge-running',
    '.cf-browser-verification',
    'iframe[src*="challenges.cloudflare.com"]',
    'iframe[src*="turnstile"]',
    '#turnstile-wrapper',
    '.turnstile-container',
  ],
};

// Check if page is currently a challenge or block page
export async function isChallengePage(page: Page): Promise<{ isChallenge: boolean; reason?: string }> {
  try {
    const title = (await page.title()) || '';
    for (const pat of CHALLENGE_PATTERNS.titles) {
      if (pat.test(title)) {
        return { isChallenge: true, reason: `Title matched challenge pattern: "${title}"` };
      }
    }

    const challengeDetected = await page.evaluate((patterns) => {
      // 1. Selector check
      for (const sel of patterns.selectors) {
        if (document.querySelector(sel)) {
          return { detected: true, signal: `Challenge selector found: ${sel}` };
        }
      }

      // 2. Body text check
      const text = (document.body?.innerText || '').toLowerCase();
      for (const phrase of patterns.phrases) {
        if (text.includes(phrase)) {
          return { detected: true, signal: `Challenge phrase found: "${phrase}"` };
        }
      }

      return { detected: false };
    }, CHALLENGE_PATTERNS);

    if (challengeDetected.detected) {
      return { isChallenge: true, reason: challengeDetected.signal };
    }
  } catch {
    // page might be navigating
  }

  return { isChallenge: false };
}

// Check if page contains gate prompts (age gate, login gate, consent blocks)
export async function isGatePage(page: Page): Promise<{ isGate: boolean; reason?: string }> {
  try {
    return await page.evaluate(() => {
      const text = (document.body?.innerText || '').toLowerCase();
      if (
        (text.includes('are you 18') || text.includes('are you 21') || text.includes('age verification')) &&
        (text.includes('yes') || text.includes('enter') || text.includes('i am of legal age'))
      ) {
        return { isGate: true, reason: 'Age verification gate detected' };
      }
      return { isGate: false };
    });
  } catch {
    return { isGate: false };
  }
}

// Check C & D & E: Comprehensive in-page readiness check
export async function inspectPageDOMReadiness(page: Page): Promise<{
  hasLoader: boolean;
  loaderSignals: string[];
  hasRealContent: boolean;
  contentSignals: string[];
  hasSkipButton: boolean;
  skipButtonSelector?: string;
}> {
  try {
    return await page.evaluate(() => {
      const loaderSignals: string[] = [];
      const contentSignals: string[] = [];
      let hasSkip = false;
      let skipSel = '';

      const isVisible = (el: Element): boolean => {
        const style = window.getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden') return false;
        const opacity = parseFloat(style.opacity);
        if (opacity < 0.05) return false;
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return false;
        return true;
      };

      // 1. Check C.1: Element id, class, role matching loading words
      const loaderKeywords = [
        'loader', 'loading', 'preloader', 'pre-loader', 'spinner',
        'splash', 'intro', 'page-loader', 'loading-screen', 'nprogress'
      ];

      const queryCandidates = document.querySelectorAll(
        '[class*="load"], [id*="load"], [class*="spin"], [id*="spin"], [class*="splash"], [role="progressbar"], [aria-busy="true"]'
      );

      for (const el of Array.from(queryCandidates)) {
        if (!isVisible(el)) continue;

        const id = (el.id || '').toLowerCase();
        const cls = (typeof el.className === 'string' ? el.className : '').toLowerCase();
        const ariaBusy = el.getAttribute('aria-busy');

        if (ariaBusy === 'true') {
          loaderSignals.push('aria-busy="true" on screen');
          break;
        }

        const isMatch = loaderKeywords.some((kw) => id.includes(kw) || cls.includes(kw));
        if (isMatch) {
          const rect = el.getBoundingClientRect();
          // Exclude tiny inline loaders inside existing populated buttons
          if (rect.width > 24 && rect.height > 24) {
            loaderSignals.push(`Visible loading element: #${id || 'anon'}.${cls.split(' ')[0]}`);
            break;
          }
        }
      }

      // 2. Check C.2: Large fixed/absolute element covering >= 60% viewport
      const fixedEls = document.querySelectorAll('div, section, aside');
      const vWidth = window.innerWidth;
      const vHeight = window.innerHeight;
      const vArea = vWidth * vHeight;

      for (const el of Array.from(fixedEls)) {
        const style = window.getComputedStyle(el);
        if (style.position === 'fixed' || style.position === 'absolute') {
          if (isVisible(el)) {
            const zIndex = parseInt(style.zIndex, 10);
            if (!isNaN(zIndex) && zIndex > 50) {
              const rect = el.getBoundingClientRect();
              const area = rect.width * rect.height;
              if (area >= vArea * 0.6) {
                // If it contains very little content, it is a loading overlay
                const textLen = (el.textContent || '').trim().length;
                if (textLen < 200) {
                  loaderSignals.push(`High z-index overlay covering ${(area / vArea * 100).toFixed(0)}% viewport`);

                  // Look for skip button inside this overlay
                  const btns = el.querySelectorAll('button, a');
                  for (const b of Array.from(btns)) {
                    const bText = (b.textContent || '').toLowerCase().trim();
                    if (bText.includes('skip') || bText.includes('enter site') || bText.includes('continue')) {
                      hasSkip = true;
                      skipSel = b.id ? `#${b.id}` : 'button';
                      break;
                    }
                  }
                  break;
                }
              }
            }
          }
        }
      }

      // 3. Check C.3: Infinite animation near center while content is sparse
      try {
        if ('getAnimations' in document) {
          const anims = document.getAnimations();
          for (const anim of anims) {
            const effect = anim.effect;
            if (effect && 'getComputedTiming' in effect) {
              const timing = effect.getComputedTiming();
              if (timing.iterations === Infinity && anim.playState === 'running') {
                const target = (effect as KeyframeEffect).target;
                if (target && target instanceof Element && isVisible(target)) {
                  const rect = target.getBoundingClientRect();
                  const cX = rect.left + rect.width / 2;
                  const cY = rect.top + rect.height / 2;
                  const distFromCenter = Math.hypot(cX - vWidth / 2, cY - vHeight / 2);
                  if (distFromCenter < 250 && (document.body?.innerText || '').length < 300) {
                    loaderSignals.push('Infinite animation element running near center');
                    break;
                  }
                }
              }
            }
          }
        }
      } catch {
        // Web Animations fallback
      }

      // 4. Check D: Real content check
      const bodyText = (document.body?.innerText || '').trim();
      if (bodyText.length > 100) {
        contentSignals.push(`Text length ${bodyText.length} > 100`);
      }

      const headings = document.querySelectorAll('h1, h2, h3, nav, header, footer, section');
      if (headings.length >= 2) {
        contentSignals.push(`${headings.length} semantic content elements`);
      }

      const visibleImages = Array.from(document.querySelectorAll('img')).filter(isVisible);
      if (visibleImages.length > 0) {
        contentSignals.push(`${visibleImages.length} visible images`);
      }

      // SPA Root check
      const spaRoot = document.querySelector('#root, #app, #__next, main');
      if (spaRoot && (spaRoot.textContent || '').trim().length > 50) {
        contentSignals.push('Populated SPA root container');
      }

      return {
        hasLoader: loaderSignals.length > 0,
        loaderSignals,
        hasRealContent: contentSignals.length >= 1,
        contentSignals,
        hasSkipButton: hasSkip,
        skipButtonSelector: skipSel,
      };
    });
  } catch (err) {
    return {
      hasLoader: false,
      loaderSignals: [],
      hasRealContent: true,
      contentSignals: ['Evaluation fallback'],
      hasSkipButton: false,
    };
  }
}

// Single Unified Readiness Function (Step 2)
export async function waitUntilReady(
  page: Page,
  context: BrowserContext,
  options: {
    maxTimeoutMs?: number;
    stabilityWindowMs?: number;
    onProgress?: (stage: string) => void;
  } = {}
): Promise<ReadinessResult> {
  const maxTimeoutMs = options.maxTimeoutMs || 30000;
  const stabilityWindowMs = options.stabilityWindowMs || 800;
  const startTime = Date.now();

  let stabilityStartTime: number | null = null;
  let lastStatePassed = false;
  let observedSignals: string[] = [];
  let skipClicked = false;
  let reducedMotionUsed = false;
  let attemptNumber = 1;

  // Track network idle manually
  let inFlightRequests = 0;
  let lastRequestFinishedTime = Date.now();

  const requestListener = (req: unknown) => {
    inFlightRequests++;
  };
  const requestDoneListener = (req: unknown) => {
    inFlightRequests = Math.max(0, inFlightRequests - 1);
    lastRequestFinishedTime = Date.now();
  };

  page.on('request', requestListener);
  page.on('requestfinished', requestDoneListener);
  page.on('requestfailed', requestDoneListener);

  try {
    let lastDomChangeTime = Date.now();

    while (Date.now() - startTime < maxTimeoutMs) {
      const elapsed = Date.now() - startTime;

      // Check A: Is it a challenge page?
      const challenge = await isChallengePage(page);
      if (challenge.isChallenge) {
        options.onProgress?.('Verifying browser security check...');
        observedSignals.push(`Challenge detected: ${challenge.reason}`);
        stabilityStartTime = null;
        lastStatePassed = false;
        await page.waitForTimeout(500);
        continue;
      }

      // Check Gate
      const gate = await isGatePage(page);
      if (gate.isGate) {
        return {
          ready: false,
          status: 'gate',
          reason: 'GATE',
          waitedMs: elapsed,
          attempt: attemptNumber,
          signals: [gate.reason || 'Gate detected'],
          settled: false,
        };
      }

      // Check B: Network quiet
      const networkQuiet = inFlightRequests === 0 || Date.now() - lastRequestFinishedTime >= 800;

      // Check C & D: DOM loader and content inspection
      const domInspect = await inspectPageDOMReadiness(page);

      // Check F: Fonts
      let fontsReady = true;
      try {
        fontsReady = await page.evaluate(async () => {
          if (document.fonts && document.fonts.status !== 'loaded') {
            await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 400))]);
          }
          return true;
        });
      } catch {
        // fallback
      }

      const allChecksPass =
        !challenge.isChallenge &&
        !domInspect.hasLoader &&
        domInspect.hasRealContent &&
        networkQuiet &&
        fontsReady;

      if (allChecksPass) {
        if (!stabilityStartTime) {
          stabilityStartTime = Date.now();
        } else if (Date.now() - stabilityStartTime >= stabilityWindowMs) {
          // Success! Passed continuously through stability window
          return {
            ready: true,
            status: 'ready',
            waitedMs: Date.now() - startTime,
            attempt: attemptNumber,
            signals: domInspect.contentSignals,
            skipButtonClicked: skipClicked,
            reducedMotionUsed,
            settled: true,
          };
        }
      } else {
        // Reset stability window
        stabilityStartTime = null;
        if (domInspect.loaderSignals.length > 0) {
          observedSignals = Array.from(new Set([...observedSignals, ...domInspect.loaderSignals]));
          options.onProgress?.('Waiting for page intro and loading indicator to clear...');
        }
      }

      // Stuck Detection: if loader present and 10s elapsed with no progress -> run recovery steps
      if (domInspect.hasLoader && elapsed > 10000 && !skipClicked) {
        // Recovery 1: Wake the page
        try {
          await page.bringToFront();
          await page.mouse.move(100, 100);
          await page.evaluate(() => {
            window.scrollBy(0, 15);
            window.scrollBy(0, -15);
          });
        } catch {
          // ignore
        }

        // Recovery 2: Skip button
        if (domInspect.hasSkipButton && domInspect.skipButtonSelector) {
          try {
            await page.click(domInspect.skipButtonSelector, { timeout: 1500 });
            skipClicked = true;
            options.onProgress?.('Dismissed intro loading screen...');
            await page.waitForTimeout(500);
            continue;
          } catch {
            // ignore
          }
        }
      }

      await page.waitForTimeout(250);
    }

    // If max timeout reached while challenge is still present
    const finalChallenge = await isChallengePage(page);
    if (finalChallenge.isChallenge) {
      return {
        ready: false,
        status: 'blocked',
        reason: 'BOT_PROTECTION',
        waitedMs: Date.now() - startTime,
        attempt: attemptNumber,
        signals: observedSignals,
        settled: false,
      };
    }

    // If max timeout reached while loader is still present
    return {
      ready: false,
      status: 'timeout',
      reason: 'LOADING_TIMEOUT',
      waitedMs: Date.now() - startTime,
      attempt: attemptNumber,
      signals: observedSignals,
      settled: false,
    };
  } finally {
    page.off('request', requestListener);
    page.off('requestfinished', requestDoneListener);
    page.off('requestfailed', requestDoneListener);
  }
}
