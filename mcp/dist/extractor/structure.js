export function detectLayoutType(selector, index, height, hasGrid) {
    const sel = selector.toLowerCase();
    if (sel.includes("nav") || sel.includes("header") || (index === 0 && height < 120)) {
        return "navbar";
    }
    if (sel.includes("footer") || sel.includes("cta")) {
        return "footer";
    }
    if (sel.includes("hero") || (index <= 1 && height >= 500 && !sel.includes("logo"))) {
        return "hero";
    }
    if (sel.includes("marquee") || sel.includes("logo") || (height <= 180 && !hasGrid)) {
        return "marquee";
    }
    if (sel.includes("bento") || sel.includes("caps") || sel.includes("tools")) {
        return "bento";
    }
    if (sel.includes("work") || sel.includes("rec") || sel.includes("grid") || sel.includes("portfolio")) {
        return "cards-grid";
    }
    if (sel.includes("statement") || sel.includes("approach") || sel.includes("split") || sel.includes("bth")) {
        return "split";
    }
    if (hasGrid) {
        return "bento";
    }
    return "content";
}
