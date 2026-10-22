export function cleanFontFamily(raw) {
    if (!raw)
        return "sans-serif";
    const first = raw.split(",")[0].trim().replace(/^['"]|['"]$/g, "");
    return first || "sans-serif";
}
export function normalizeFontSizePx(val) {
    if (!val)
        return 16;
    const num = parseFloat(val);
    if (val.includes("rem"))
        return num * 16;
    return num || 16;
}
export function buildTypographyScale(rawList) {
    // Sort distinct observed styles by font size descending
    const sorted = [...rawList].sort((a, b) => {
        return normalizeFontSizePx(b.fontSize) - normalizeFontSizePx(a.fontSize);
    });
    const tokens = [];
    const addedSizes = new Set();
    for (const item of sorted) {
        const px = Math.round(normalizeFontSizePx(item.fontSize));
        // Group sizes that are within 2px of each other
        const isDuplicate = Array.from(addedSizes).some((s) => Math.abs(s - px) <= 2);
        if (isDuplicate)
            continue;
        addedSizes.add(px);
        let name = "body";
        if (px >= 64)
            name = "display-xl";
        else if (px >= 48)
            name = "display-lg";
        else if (px >= 36)
            name = "display-md";
        else if (px >= 28)
            name = "headline";
        else if (px >= 22)
            name = "subhead";
        else if (px >= 18)
            name = "body-lg";
        else if (px >= 15)
            name = "body";
        else if (px >= 13)
            name = "body-sm";
        else
            name = "caption";
        // Deduplicate names
        let finalName = name;
        let counter = 2;
        while (tokens.some((t) => t.name === finalName)) {
            finalName = `${name}-${counter++}`;
        }
        const weightNum = typeof item.fontWeight === "number" ? item.fontWeight : parseInt(item.fontWeight, 10) || 400;
        tokens.push({
            name: finalName,
            fontFamily: cleanFontFamily(item.fontFamily),
            fontSize: `${px}px`,
            fontWeight: weightNum,
            lineHeight: item.lineHeight || "1.4",
            letterSpacing: item.letterSpacing || "normal",
            sampleText: item.sampleText?.slice(0, 50) || undefined,
        });
    }
    // Ensure minimum essential tokens exist if page was sparse
    if (!tokens.some((t) => t.name.startsWith("body"))) {
        tokens.push({
            name: "body",
            fontFamily: cleanFontFamily(rawList[0]?.fontFamily || "Inter"),
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "1.5",
            letterSpacing: "0px",
        });
    }
    return tokens;
}
