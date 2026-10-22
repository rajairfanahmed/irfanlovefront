import type { ExtractionResult } from "../types/index.js";
export interface ExtractEngineOptions {
    viewport?: {
        width: number;
        height: number;
    };
    timeoutMs?: number;
    captureScreenshots?: boolean;
    captureMobileViewport?: boolean;
    outputBaseDir?: string;
    headless?: boolean;
}
export declare function extractDesignFromUrl(targetUrl: string, options?: ExtractEngineOptions): Promise<{
    result: ExtractionResult;
    folderPath: string;
    files: string[];
}>;
