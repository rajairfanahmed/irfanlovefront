import type { ColorSwatch } from "../types/index.js";

export interface RGB {
  r: number;
  g: number;
  b: number;
  a?: number;
}

export interface Lab {
  l: number;
  a: number;
  b: number;
}

export function parseColor(colorStr: string): RGB | null {
  if (!colorStr) return null;
  const str = colorStr.trim().toLowerCase();

  // Hex (#rgb, #rgba, #rrggbb, #rrggbbaa)
  if (str.startsWith("#")) {
    const raw = str.slice(1);
    if (raw.length === 3) {
      return {
        r: parseInt(raw[0] + raw[0], 16),
        g: parseInt(raw[1] + raw[1], 16),
        b: parseInt(raw[2] + raw[2], 16),
        a: 1,
      };
    }
    if (raw.length === 6) {
      return {
        r: parseInt(raw.slice(0, 2), 16),
        g: parseInt(raw.slice(2, 4), 16),
        b: parseInt(raw.slice(4, 6), 16),
        a: 1,
      };
    }
    if (raw.length === 8) {
      return {
        r: parseInt(raw.slice(0, 2), 16),
        g: parseInt(raw.slice(2, 4), 16),
        b: parseInt(raw.slice(4, 6), 16),
        a: parseInt(raw.slice(6, 8), 16) / 255,
      };
    }
    return null;
  }

  // rgb(r, g, b) or rgba(r, g, b, a)
  const matchRgb = str.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/);
  if (matchRgb) {
    return {
      r: Math.round(parseFloat(matchRgb[1])),
      g: Math.round(parseFloat(matchRgb[2])),
      b: Math.round(parseFloat(matchRgb[3])),
      a: matchRgb[4] !== undefined ? parseFloat(matchRgb[4]) : 1,
    };
  }

  return null;
}

export function rgbToHex(rgb: RGB): string {
  const toHex = (n: number) => Math.max(0, Math.min(255, Math.round(n))).toString(16).padStart(2, "0");
  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
}

export function relativeLuminance(rgb: RGB): number {
  const norm = (c: number) => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * norm(rgb.r) + 0.7152 * norm(rgb.g) + 0.0722 * norm(rgb.b);
}

export function contrastRatio(rgb1: RGB, rgb2: RGB): number {
  const l1 = relativeLuminance(rgb1);
  const l2 = relativeLuminance(rgb2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Convert RGB to CIELAB for perceptual color distance (Delta-E)
export function rgbToLab(rgb: RGB): Lab {
  let r = rgb.r / 255;
  let g = rgb.g / 255;
  let b = rgb.b / 255;

  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

  // D65 reference white
  let x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  let y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
  let z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

  x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
  y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
  z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

  return {
    l: 116 * y - 16,
    a: 500 * (x - y),
    b: 200 * (y - z),
  };
}

export function deltaE(rgb1: RGB, rgb2: RGB): number {
  const lab1 = rgbToLab(rgb1);
  const lab2 = rgbToLab(rgb2);
  const dl = lab1.l - lab2.l;
  const da = lab1.a - lab2.a;
  const db = lab1.b - lab2.b;
  return Math.sqrt(dl * dl + da * da + db * db);
}

export function getSaturation(rgb: RGB): number {
  const max = Math.max(rgb.r, rgb.g, rgb.b);
  const min = Math.min(rgb.r, rgb.g, rgb.b);
  return max === 0 ? 0 : (max - min) / max;
}

export interface RawObservedColor {
  hex: string;
  source: string;
  count: number;
}

export function deduplicateAndRankColors(
  rawColors: RawObservedColor[],
  thresholdDeltaE: number = 10
): ColorSwatch[] {
  const parsedColors: { hex: string; rgb: RGB; count: number; sources: Set<string> }[] = [];

  for (const item of rawColors) {
    const rgb = parseColor(item.hex);
    if (!rgb || (rgb.a !== undefined && rgb.a < 0.1)) continue;
    const hex = rgbToHex(rgb);

    const existing = parsedColors.find((p) => deltaE(p.rgb, rgb) < thresholdDeltaE);
    if (existing) {
      existing.count += item.count;
      existing.sources.add(item.source);
    } else {
      parsedColors.push({
        hex,
        rgb,
        count: item.count,
        sources: new Set([item.source]),
      });
    }
  }

  // Sort by occurrence frequency
  parsedColors.sort((a, b) => b.count - a.count);

  return parsedColors.map((c) => {
    const lum = relativeLuminance(c.rgb);
    const sat = getSaturation(c.rgb);
    let confidence: "high" | "medium" | "low" = "low";
    if (c.count >= 10 || c.sources.has("button") || c.sources.has("root-bg")) {
      confidence = "high";
    } else if (c.count >= 3) {
      confidence = "medium";
    }

    return {
      role: "unassigned",
      name: `color-${c.hex.slice(1)}`,
      hex: c.hex,
      rgb: `rgb(${c.rgb.r}, ${c.rgb.g}, ${c.rgb.b})`,
      luminance: Math.round(lum * 1000) / 1000,
      contrastWithCanvas: 1,
      confidence,
      sources: Array.from(c.sources),
    };
  });
}

export function assignColorRoles(
  swatches: ColorSwatch[],
  observedRootBg?: string
): { swatches: ColorSwatch[]; canvasHex: string; isDarkCanvas: boolean } {
  if (swatches.length === 0) {
    return {
      swatches: [],
      canvasHex: "#000000",
      isDarkCanvas: true,
    };
  }

  // 1. Identify Canvas
  let canvas = swatches.find((s) => s.sources.includes("root-bg"));
  if (!canvas && observedRootBg) {
    const parsed = parseColor(observedRootBg);
    if (parsed) {
      const hex = rgbToHex(parsed);
      canvas = swatches.find((s) => s.hex.toLowerCase() === hex.toLowerCase());
    }
  }
  if (!canvas) {
    // Pick the most frequent color that is neutral/substrate (very low saturation)
    const neutrals = [...swatches].sort((a, b) => {
      const rgbA = parseColor(a.hex)!;
      const rgbB = parseColor(b.hex)!;
      return getSaturation(rgbA) - getSaturation(rgbB);
    });
    canvas = neutrals[0] || swatches[0];
  }

  const canvasRgb = parseColor(canvas.hex)!;
  const canvasLum = relativeLuminance(canvasRgb);
  const isDarkCanvas = canvasLum < 0.5;

  canvas.role = "canvas";
  canvas.name = "Canvas Substrate";

  // 2. Identify Primary Accent
  // Filter out colors too close to canvas
  const accentCandidates = swatches
    .filter((s) => s.hex !== canvas?.hex && deltaE(parseColor(s.hex)!, canvasRgb) > 20)
    .sort((a, b) => {
      const rgbA = parseColor(a.hex)!;
      const rgbB = parseColor(b.hex)!;
      const satA = getSaturation(rgbA);
      const satB = getSaturation(rgbB);
      const isButtonA = a.sources.includes("button") ? 1 : 0;
      const isButtonB = b.sources.includes("button") ? 1 : 0;
      // High saturation + button presence heavily boosts accent score
      return satB * 50 + isButtonB * 100 - (satA * 50 + isButtonA * 100);
    });

  const primaryAccent = accentCandidates[0] || null;
  if (primaryAccent) {
    primaryAccent.role = "primary";
    primaryAccent.name = "Primary Accent";
  }

  // 3. Identify Ink (Text with highest contrast against canvas)
  const inkCandidates = swatches
    .filter((s) => s.hex !== canvas?.hex && s.hex !== primaryAccent?.hex)
    .map((s) => {
      const rgb = parseColor(s.hex)!;
      return {
        swatch: s,
        contrast: contrastRatio(rgb, canvasRgb),
      };
    })
    .sort((a, b) => b.contrast - a.contrast);

  const primaryInk = inkCandidates[0]?.swatch || null;
  if (primaryInk) {
    primaryInk.role = "ink";
    primaryInk.name = "Primary Text";
  }

  const mutedInk = inkCandidates.find((c) => c.contrast >= 4.5 && c.contrast <= 9.0)?.swatch || null;
  if (mutedInk && mutedInk !== primaryInk) {
    mutedInk.role = "ink-muted";
    mutedInk.name = "Muted Text";
  }

  // Update contrast ratios against canvas
  for (const s of swatches) {
    const rgb = parseColor(s.hex);
    if (rgb) {
      s.contrastWithCanvas = Math.round(contrastRatio(rgb, canvasRgb) * 10) / 10;
    }
  }

  return {
    swatches,
    canvasHex: canvas.hex,
    isDarkCanvas,
  };
}
