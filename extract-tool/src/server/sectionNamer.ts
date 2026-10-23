export type NameSource =
  | 'id'
  | 'data-attribute'
  | 'aria-label'
  | 'class'
  | 'tag'
  | 'heading'
  | 'position';

export interface SectionRawCandidate {
  id?: string;
  dataAttributes?: Record<string, string>;
  ariaLabel?: string;
  ariaLabelledByText?: string;
  classNames?: string[];
  tagName: string;
  headingText?: string;
  isHeaderOrNav?: boolean;
  isFooter?: boolean;
}

export interface ResolvedSectionName {
  cleanName: string;
  filename: string;
  nameSource: NameSource;
  headingText: string;
}

const GENERIC_LAYOUT_WORDS = new Set([
  'container',
  'wrapper',
  'inner',
  'outer',
  'row',
  'col',
  'column',
  'content',
  'block',
  'box',
  'main',
  'page',
  'section',
  'group',
  'stack',
  'layout',
  'w-container',
  'flex',
  'grid',
  'inline',
  'card',
  'item',
  'items',
]);

const GENERATED_PREFIXES = ['css-', 'sc-', 'jsx-', 'emotion', 'framer-', 'comp-'];

// Check if string is a generated hash, UUID, or utility class
export function isMeaninglessOrUtility(str: string): boolean {
  if (!str) return true;

  // Utility classes (Tailwind style with colon, bracket, or standard tokens)
  if (str.includes(':') || str.includes('[') || str.includes(']') || str.includes('/')) {
    return true;
  }

  // Common Tailwind / Utility prefix tokens
  if (/^(px|py|pt|pb|pl|pr|mx|my|mt|mb|ml|mr|p|m)-\d+/.test(str)) return true;
  if (/^(w|h|max-w|min-w|max-h|min-h)-/.test(str)) return true;
  if (/^(bg|text|border|rounded|shadow|opacity|z|flex|grid|gap|space|overflow|align|justify)-/.test(str)) return true;
  if (/^(items|justify|content|self|place)-(start|end|center|between|around|evenly|stretch)/.test(str)) return true;

  // UUID pattern
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(str)) {
    return true;
  }

  // Builder style ids such as comp-xxxxxxx
  if (/^comp-[0-9a-z]+/i.test(str)) {
    return true;
  }

  // Generated class prefixes
  if (GENERATED_PREFIXES.some((pre) => str.toLowerCase().startsWith(pre))) {
    return true;
  }

  // Digits ratio > 1/3 (e.g. hash strings like 3f9a8d2e1b4)
  const digits = (str.match(/\d/g) || []).length;
  if (digits / str.length > 0.33) {
    return true;
  }

  // Long hex string
  if (/^[0-9a-f]{10,}$/i.test(str)) {
    return true;
  }

  return false;
}

// Clean and sanitize string into valid slug
export function sanitizeSlug(raw: string): string {
  let cleaned = raw
    .toLowerCase()
    .replace(/[_\s]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  return cleaned.slice(0, 40);
}

// Clean class or id token removing generic wrapper words and "section"
export function cleanClassToken(rawToken: string): string | null {
  if (!rawToken || isMeaninglessOrUtility(rawToken)) return null;

  // Handle component style classes such as Hero_root__x7d2a or Hero__container
  // Strip trailing __hash or _root__hash
  let normalized = rawToken
    .replace(/__.*$/, '')
    .replace(/_root.*$/, '')
    .replace(/--.*$/, '');

  // Convert to slug: section_hero, hero-section, hero_section -> section-hero, hero-section
  let slug = sanitizeSlug(normalized);
  if (!slug) return null;

  // Remove generic words like 'section', 'container', 'wrapper' from edges
  // e.g. section-hero -> hero, hero-section -> hero, about-us-section -> about-us
  let stripped = slug;
  const prefixes = ['section-', 'container-', 'wrapper-', 'block-'];
  const suffixes = ['-section', '-container', '-wrapper', '-block'];

  for (const pre of prefixes) {
    if (stripped.startsWith(pre)) {
      const candidate = stripped.slice(pre.length);
      if (candidate && !GENERIC_LAYOUT_WORDS.has(candidate)) {
        stripped = candidate;
      }
    }
  }

  for (const suf of suffixes) {
    if (stripped.endsWith(suf)) {
      const candidate = stripped.slice(0, -suf.length);
      if (candidate && !GENERIC_LAYOUT_WORDS.has(candidate)) {
        stripped = candidate;
      }
    }
  }

  if (stripped && !GENERIC_LAYOUT_WORDS.has(stripped)) {
    return stripped;
  }

  if (!GENERIC_LAYOUT_WORDS.has(slug)) {
    return slug;
  }

  return null;
}

export class SectionNameResolver {
  private usedNames: Set<string> = new Set();

  public resolve(
    candidate: SectionRawCandidate,
    positionIndex: number
  ): ResolvedSectionName {
    let chosenName = '';
    let chosenSource: NameSource = 'position';
    const heading = (candidate.headingText || '').trim();

    // Special rule: Navbar and Footer are ALWAYS named navbar and footer
    if (candidate.isHeaderOrNav || candidate.tagName === 'NAV' || candidate.tagName === 'HEADER') {
      chosenName = 'navbar';
      chosenSource = 'tag';
    } else if (candidate.isFooter || candidate.tagName === 'FOOTER') {
      chosenName = 'footer';
      chosenSource = 'tag';
    }

    // 1. Element's id
    if (!chosenName && candidate.id) {
      const cleanId = cleanClassToken(candidate.id);
      if (cleanId) {
        chosenName = cleanId;
        chosenSource = 'id';
      }
    }

    // 2. Section naming attributes in order
    if (!chosenName && candidate.dataAttributes) {
      const attributeKeys = [
        'data-framer-name',
        'data-section-name',
        'data-section',
        'data-name',
        'data-component',
        'data-block-name',
      ];
      for (const key of attributeKeys) {
        const val = candidate.dataAttributes[key];
        if (val) {
          const cleanAttr = cleanClassToken(val);
          if (cleanAttr) {
            chosenName = cleanAttr;
            chosenSource = 'data-attribute';
            break;
          }
        }
      }
    }

    // 3. aria-label or aria-labelledby text
    if (!chosenName) {
      const ariaText = candidate.ariaLabel || candidate.ariaLabelledByText;
      if (ariaText) {
        const cleanAria = cleanClassToken(ariaText);
        if (cleanAria) {
          chosenName = cleanAria;
          chosenSource = 'aria-label';
        }
      }
    }

    // 4. Meaningful class name token
    if (!chosenName && candidate.classNames && candidate.classNames.length > 0) {
      for (const cls of candidate.classNames) {
        const cleanCls = cleanClassToken(cls);
        if (cleanCls) {
          chosenName = cleanCls;
          chosenSource = 'class';
          break;
        }
      }
    }

    // 5. Semantic tag check
    if (!chosenName) {
      if (candidate.tagName === 'NAV' || candidate.tagName === 'HEADER') {
        chosenName = 'navbar';
        chosenSource = 'tag';
      } else if (candidate.tagName === 'FOOTER') {
        chosenName = 'footer';
        chosenSource = 'tag';
      }
    }

    // 6. First heading text (shortened to about 4 words) - LAST RESORT
    if (!chosenName && heading) {
      const fourWords = heading
        .split(/\s+/)
        .slice(0, 4)
        .join(' ');
      const cleanHeading = sanitizeSlug(fourWords);
      if (cleanHeading && !GENERIC_LAYOUT_WORDS.has(cleanHeading)) {
        chosenName = cleanHeading;
        chosenSource = 'heading';
      }
    }

    // 7. Fallback word "section"
    if (!chosenName) {
      chosenName = 'section';
      chosenSource = 'position';
    }

    // Duplicate Handling: add -2, -3 if name repeats in page order
    let finalBase = chosenName;
    let duplicateCounter = 2;
    while (this.usedNames.has(finalBase)) {
      finalBase = `${chosenName}-${duplicateCounter}`;
      duplicateCounter++;
    }
    this.usedNames.add(finalBase);

    // Two-digit position prefix
    const posPrefix = positionIndex < 10 ? `0${positionIndex}` : `${positionIndex}`;
    const filename = `${posPrefix}-${finalBase}.png`;

    return {
      cleanName: finalBase,
      filename,
      nameSource: chosenSource,
      headingText: heading,
    };
  }
}
