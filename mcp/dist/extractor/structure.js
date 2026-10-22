export function detectLayoutType(selector, index, height, hasGrid) {
    const sel = selector.toLowerCase();
    if (sel.includes("nav") || sel.includes("header") || index === 0 && height < 120) {
        return "navbar";
    }
    if (index === 0 || (index === 1 && height > 400) || sel.includes("hero")) {
        return "hero";
    }
    if (sel.includes("footer")) {
        return "footer";
    }
    if (sel.includes("marquee") || sel.includes("logo") || height < 160) {
        return "marquee";
    }
    if (hasGrid || sel.includes("bento") || sel.includes("feature")) {
        return "bento";
    }
    return "content";
}
