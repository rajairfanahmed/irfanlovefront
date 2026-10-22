import type { SurfaceTokens } from "../types/index.js";
import { parseColor, rgbToHex, relativeLuminance } from "./colors.js";

export interface RawSurfaceData {
  observedBorderRadii: string[];
  observedShadows: string[];
  observedBorders: string[];
  observedCardBgs: string[];
}

export function buildSurfaceLadder(
  canvasHex: string,
  isDarkCanvas: boolean,
  rawData?: Partial<RawSurfaceData>
): SurfaceTokens {
  const canvasRgb = parseColor(canvasHex) || { r: 9, g: 9, b: 11 };

  // Calculate dynamic ladder steps based on canvas luminance
  const step = isDarkCanvas ? 10 : -8;
  const clampRgb = (n: number) => Math.max(0, Math.min(255, Math.round(n)));

  const s1Rgb = {
    r: clampRgb(canvasRgb.r + step),
    g: clampRgb(canvasRgb.g + step),
    b: clampRgb(canvasRgb.b + step),
  };
  const s2Rgb = {
    r: clampRgb(canvasRgb.r + step * 2),
    g: clampRgb(canvasRgb.g + step * 2),
    b: clampRgb(canvasRgb.b + step * 2),
  };
  const s3Rgb = {
    r: clampRgb(canvasRgb.r + step * 3),
    g: clampRgb(canvasRgb.g + step * 3),
    b: clampRgb(canvasRgb.b + step * 3),
  };
  const s4Rgb = {
    r: clampRgb(canvasRgb.r + step * 4),
    g: clampRgb(canvasRgb.g + step * 4),
    b: clampRgb(canvasRgb.b + step * 4),
  };

  const hairlineRgb = {
    r: clampRgb(canvasRgb.r + (isDarkCanvas ? 28 : -25)),
    g: clampRgb(canvasRgb.g + (isDarkCanvas ? 28 : -25)),
    b: clampRgb(canvasRgb.b + (isDarkCanvas ? 32 : -25)),
  };
  const hairlineStrongRgb = {
    r: clampRgb(canvasRgb.r + (isDarkCanvas ? 45 : -40)),
    g: clampRgb(canvasRgb.g + (isDarkCanvas ? 45 : -40)),
    b: clampRgb(canvasRgb.b + (isDarkCanvas ? 50 : -40)),
  };
  const hairlineTertiaryRgb = {
    r: clampRgb(canvasRgb.r + (isDarkCanvas ? 18 : -15)),
    g: clampRgb(canvasRgb.g + (isDarkCanvas ? 18 : -15)),
    b: clampRgb(canvasRgb.b + (isDarkCanvas ? 20 : -15)),
  };

  // If cards had observed backgrounds, prioritize them for surface1
  const surface1 = rawData?.observedCardBgs?.[0] || rgbToHex(s1Rgb);
  const surface2 = rawData?.observedCardBgs?.[1] || rgbToHex(s2Rgb);

  // Parse distinct radii
  const distinctRadii = Array.from(
    new Set(
      (rawData?.observedBorderRadii || ["0px", "6px", "8px", "12px", "16px", "9999px"])
        .filter((r) => r && r !== "0" && r !== "none")
        .map((r) => (r.includes("px") ? r : `${parseFloat(r)}px`))
    )
  ).sort((a, b) => parseFloat(a) - parseFloat(b));

  const radii = {
    none: "0px",
    sm: distinctRadii[0] || "4px",
    md: distinctRadii[1] || "8px",
    lg: distinctRadii[2] || "12px",
    xl: distinctRadii[3] || "16px",
    full: distinctRadii.find((r) => parseFloat(r) > 100) || "9999px",
  };

  // Parse distinct shadows
  const shadows = Array.from(
    new Set(
      (rawData?.observedShadows || [])
        .filter((s) => s && s !== "none")
        .slice(0, 4)
    )
  );

  if (shadows.length === 0) {
    if (isDarkCanvas) {
      shadows.push(
        "0 1px 2px 0 rgba(0, 0, 0, 0.4)",
        "0 4px 16px -2px rgba(0, 0, 0, 0.6)",
        "0 12px 32px -4px rgba(0, 0, 0, 0.8)"
      );
    } else {
      shadows.push(
        "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "0 4px 12px -2px rgba(0, 0, 0, 0.08)",
        "0 12px 32px -4px rgba(0, 0, 0, 0.12)"
      );
    }
  }

  return {
    canvas: canvasHex,
    surface1,
    surface2,
    surface3: rgbToHex(s3Rgb),
    surface4: rgbToHex(s4Rgb),
    hairline: rgbToHex(hairlineRgb),
    hairlineStrong: rgbToHex(hairlineStrongRgb),
    hairlineTertiary: rgbToHex(hairlineTertiaryRgb),
    radii,
    shadows,
  };
}
