import { Page } from 'playwright';

export type SiteProfile =
  | 'smooth-scroll'
  | 'webgl'
  | 'pinned'
  | 'horizontal'
  | 'preloader';

export async function detectSiteProfiles(page: Page): Promise<SiteProfile[]> {
  try {
    return await page.evaluate(() => {
      const detected: SiteProfile[] = [];

      // 1. Smooth scroll signal
      const htmlClasses = document.documentElement.className || '';
      const bodyClasses = document.body?.className || '';
      const hasLenis =
        htmlClasses.includes('lenis') ||
        bodyClasses.includes('lenis') ||
        document.querySelector('[data-scroll-container], [data-scroll-section], [data-lenis-prevent]') !== null;

      if (hasLenis) {
        detected.push('smooth-scroll');
      }

      // 2. WebGL signal
      const canvases = Array.from(document.querySelectorAll('canvas'));
      const hasLargeCanvas = canvases.some((c) => {
        const rect = c.getBoundingClientRect();
        return rect.width > 300 && rect.height > 200;
      });
      if (hasLargeCanvas) {
        detected.push('webgl');
      }

      // 3. GSAP pinned elements signal
      const hasPins =
        document.querySelector('.pin-spacer, [data-scroll-trigger], [data-pin]') !== null;
      if (hasPins) {
        detected.push('pinned');
      }

      // 4. Horizontal scroll container signal
      const wideContainers = Array.from(document.querySelectorAll('div, section')).some((el) => {
        const rect = el.getBoundingClientRect();
        return el.scrollWidth > window.innerWidth * 1.5 && rect.height > 200;
      });
      if (wideContainers) {
        detected.push('horizontal');
      }

      // 5. Preloader signal
      const preloader = document.querySelector('[class*="preloader"], [id*="preloader"], [class*="loader-overlay"]');
      if (preloader) {
        detected.push('preloader');
      }

      return detected;
    });
  } catch {
    return [];
  }
}
