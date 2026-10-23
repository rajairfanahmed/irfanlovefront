import { Page } from 'playwright';

export interface DiscoveredPage {
  url: string;
  path: string;
  folderName: string;
}

const SKIP_EXTENSIONS = [
  '.pdf', '.zip', '.tar', '.gz', '.rar', '.7z',
  '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico',
  '.mp4', '.webm', '.mov', '.mp3', '.wav',
  '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
  '.xml', '.json', '.txt', '.css', '.js'
];

const SKIP_PATH_KEYWORDS = [
  '/admin', '/login', '/logout', '/signup', '/register',
  '/signin', '/auth', '/cart', '/checkout', '/account',
  '/wp-admin', '/wp-login', '/dashboard'
];

export function pathToFolderName(pathname: string): string {
  // Normalize path
  let cleaned = pathname.replace(/^\/+|\/+$/g, '');
  if (!cleaned) {
    return 'home-page';
  }

  // Convert slashes and non-alphanumeric to hyphens
  cleaned = cleaned
    .toLowerCase()
    .replace(/[^\w\d\-_/]/g, '')
    .replace(/\//g, '-')
    .replace(/-+/g, '-');

  return `${cleaned}-page`;
}

function cleanUrl(rawUrl: string, baseOrigin: string): string | null {
  try {
    const parsed = new URL(rawUrl, baseOrigin);

    // Protocol must be http or https
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
      return null;
    }

    // Treat www and non-www as the same origin
    const parsedHost = parsed.hostname.replace(/^www\./, '');
    const baseHost = new URL(baseOrigin).hostname.replace(/^www\./, '');
    if (parsedHost !== baseHost) {
      return null;
    }

    // Strip hash fragment
    parsed.hash = '';

    // Strip tracking query parameters
    const searchParams = new URLSearchParams(parsed.search);
    const trackingKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid', 'gclid', 'ref', 'source'];
    for (const key of trackingKeys) {
      searchParams.delete(key);
    }
    parsed.search = searchParams.toString() ? `?${searchParams.toString()}` : '';

    // Normalize trailing slash: root has slash, subroutes have no trailing slash for uniform matching
    let pathname = parsed.pathname;
    if (pathname !== '/' && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }
    parsed.pathname = pathname;

    // Check file extensions
    const lowerPath = pathname.toLowerCase();
    if (SKIP_EXTENSIONS.some((ext) => lowerPath.endsWith(ext))) {
      return null;
    }

    // Check blocked keywords
    if (SKIP_PATH_KEYWORDS.some((kw) => lowerPath.includes(kw))) {
      return null;
    }

    return parsed.toString();
  } catch {
    return null;
  }
}

// Parse URLs from XML sitemap content
function parseSitemapUrls(xmlText: string, baseOrigin: string): string[] {
  const urls: string[] = [];
  const locRegex = /<loc>(.*?)<\/loc>/gi;
  let match: RegExpExecArray | null;

  while ((match = locRegex.exec(xmlText)) !== null) {
    const rawLoc = match[1]?.trim();
    if (rawLoc) {
      const cleaned = cleanUrl(rawLoc, baseOrigin);
      if (cleaned && !urls.includes(cleaned)) {
        urls.push(cleaned);
      }
    }
  }

  return urls;
}

export async function discoverPages(
  homeUrl: string,
  playwrightPage: Page,
  maxPages: number = 20
): Promise<DiscoveredPage[]> {
  const baseOrigin = new URL(homeUrl).origin;
  const discoveredMap = new Map<string, DiscoveredPage>();

  // Rule: Home page is always first!
  const homeCleanUrl = cleanUrl(homeUrl, baseOrigin) || homeUrl;
  const homeParsed = new URL(homeCleanUrl);
  discoveredMap.set(homeCleanUrl, {
    url: homeCleanUrl,
    path: homeParsed.pathname || '/',
    folderName: 'home-page',
  });

  // Attempt 1: Fetch /sitemap.xml
  try {
    const sitemapResponse = await fetch(`${baseOrigin}/sitemap.xml`, {
      signal: AbortSignal.timeout(4000),
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SiteRip/1.0)' },
    });

    if (sitemapResponse.ok) {
      const xml = await sitemapResponse.text();
      const sitemapUrls = parseSitemapUrls(xml, baseOrigin);

      for (const u of sitemapUrls) {
        if (discoveredMap.size >= maxPages) break;
        if (!discoveredMap.has(u)) {
          const parsed = new URL(u);
          discoveredMap.set(u, {
            url: u,
            path: parsed.pathname,
            folderName: pathToFolderName(parsed.pathname),
          });
        }
      }
    }
  } catch {
    // Sitemap discovery failed or absent, proceed to crawling
  }

  // If sitemap didn't yield enough pages, crawl homepage internal links
  if (discoveredMap.size < maxPages) {
    try {
      const linksOnPage = await playwrightPage.evaluate(() => {
        const anchors = Array.from(document.querySelectorAll('a[href]'));
        return anchors
          .map((a) => (a as HTMLAnchorElement).href)
          .filter(Boolean);
      });

      for (const link of linksOnPage) {
        if (discoveredMap.size >= maxPages) break;
        const cleaned = cleanUrl(link, baseOrigin);
        if (cleaned && !discoveredMap.has(cleaned)) {
          const parsed = new URL(cleaned);
          discoveredMap.set(cleaned, {
            url: cleaned,
            path: parsed.pathname,
            folderName: pathToFolderName(parsed.pathname),
          });
        }
      }
    } catch {
      // Ignore evaluation error
    }
  }

  return Array.from(discoveredMap.values()).slice(0, maxPages);
}
