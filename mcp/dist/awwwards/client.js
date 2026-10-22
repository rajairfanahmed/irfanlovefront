export const AWWWARDS_BASE_URL = "https://www.awwwards.com";
export const AWWWARDS_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36 irfanlovefront/1.0";
export async function searchAwwwards(query, award) {
    try {
        let target = `${AWWWARDS_BASE_URL}/websites/`;
        if (award === "sotd")
            target = `${AWWWARDS_BASE_URL}/websites/sites_of_the_day/`;
        else if (award === "developer")
            target = `${AWWWARDS_BASE_URL}/websites/developer/`;
        else if (award === "honorable")
            target = `${AWWWARDS_BASE_URL}/websites/honorable/`;
        else if (query)
            target = `${AWWWARDS_BASE_URL}/websites/${encodeURIComponent(query)}/`;
        const res = await fetch(target, {
            headers: {
                "User-Agent": AWWWARDS_USER_AGENT,
                Accept: "text/html,application/xhtml+xml",
            },
        });
        if (!res.ok) {
            return [];
        }
        const html = await res.text();
        // Simple regex parsing for site cards
        const results = [];
        const siteMatches = html.matchAll(/data-model="\{&quot;id&quot;:[^}]+&quot;title&quot;:&quot;([^&]+)&quot;[^}]+&quot;url&quot;:&quot;([^&]+)&quot;/g);
        for (const m of siteMatches) {
            results.push({
                title: m[1],
                slug: m[2],
                url: `${AWWWARDS_BASE_URL}/sites/${m[2]}`,
                author: "Awwwards Winner",
                award: award || "SOTD",
            });
            if (results.length >= 10)
                break;
        }
        return results;
    }
    catch {
        return [];
    }
}
