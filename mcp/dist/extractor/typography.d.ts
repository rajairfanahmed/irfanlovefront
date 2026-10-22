import type { TypographyToken } from "../types/index.js";
export interface RawTypographyStyle {
    fontFamily: string;
    fontSize: string;
    fontWeight: string | number;
    lineHeight: string;
    letterSpacing: string;
    tag: string;
    sampleText?: string;
    count: number;
}
export declare function cleanFontFamily(raw: string): string;
export declare function normalizeFontSizePx(val: string): number;
export declare function buildTypographyScale(rawList: RawTypographyStyle[]): TypographyToken[];
