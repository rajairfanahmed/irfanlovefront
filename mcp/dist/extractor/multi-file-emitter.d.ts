import type { ExtractionResult } from "../types/index.js";
export interface EmitterOptions {
    outputBaseDir?: string;
}
export declare function emitMultiFileDesign(result: ExtractionResult, options?: EmitterOptions): {
    folderPath: string;
    files: string[];
};
