export declare const AWWWARDS_BASE_URL = "https://www.awwwards.com";
export declare const AWWWARDS_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36 irfanlovefront/1.0";
export interface AwwwardsSiteSummary {
    title: string;
    slug: string;
    url: string;
    author: string;
    award?: string;
    score?: number;
    thumbnail?: string;
    tags?: string[];
}
export declare function searchAwwwards(query?: string, award?: "sotd" | "developer" | "honorable"): Promise<AwwwardsSiteSummary[]>;
