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
export declare function parseColor(colorStr: string): RGB | null;
export declare function rgbToHex(rgb: RGB): string;
export declare function relativeLuminance(rgb: RGB): number;
export declare function contrastRatio(rgb1: RGB, rgb2: RGB): number;
export declare function rgbToLab(rgb: RGB): Lab;
export declare function deltaE(rgb1: RGB, rgb2: RGB): number;
export declare function getSaturation(rgb: RGB): number;
export interface RawObservedColor {
    hex: string;
    source: string;
    count: number;
}
export declare function deduplicateAndRankColors(rawColors: RawObservedColor[], thresholdDeltaE?: number): ColorSwatch[];
export declare function assignColorRoles(swatches: ColorSwatch[], observedRootBg?: string): {
    swatches: ColorSwatch[];
    canvasHex: string;
    isDarkCanvas: boolean;
};
