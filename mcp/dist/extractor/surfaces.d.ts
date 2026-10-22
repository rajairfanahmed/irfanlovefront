import type { SurfaceTokens } from "../types/index.js";
export interface RawSurfaceData {
    observedBorderRadii: string[];
    observedShadows: string[];
    observedBorders: string[];
    observedCardBgs: string[];
}
export declare function buildSurfaceLadder(canvasHex: string, isDarkCanvas: boolean, rawData?: Partial<RawSurfaceData>): SurfaceTokens;
