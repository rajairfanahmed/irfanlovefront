export interface ColorSwatch {
    role: string;
    name: string;
    hex: string;
    rgb: string;
    luminance: number;
    contrastWithCanvas: number;
    confidence: "high" | "medium" | "low";
    sources: string[];
}
export interface TypographyToken {
    name: string;
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
    letterSpacing?: string;
    fontStyle?: string;
    sampleText?: string;
}
export interface SurfaceTokens {
    canvas: string;
    surface1: string;
    surface2: string;
    surface3: string;
    surface4: string;
    hairline: string;
    hairlineStrong: string;
    hairlineTertiary: string;
    radii: {
        none: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        full: string;
    };
    shadows: string[];
}
export interface ComponentObserved {
    type: "button" | "input" | "card" | "badge" | "link" | "modal";
    name: string;
    selector: string;
    defaultState: {
        backgroundColor: string;
        color: string;
        borderColor?: string;
        borderRadius: string;
        padding: string;
        fontSize?: string;
        fontWeight?: number;
        shadow?: string;
        height?: string;
    };
    hoverState?: {
        backgroundColor?: string;
        color?: string;
        borderColor?: string;
        transform?: string;
        shadow?: string;
        transition?: string;
    };
    activeState?: {
        transform?: string;
        backgroundColor?: string;
    };
    focusState?: {
        outline?: string;
        boxShadow?: string;
    };
}
export interface SectionBand {
    id: string;
    title: string;
    selector: string;
    bandIndex: number;
    dimensions: {
        width: number;
        height: number;
        top: number;
    };
    backgroundColor: string;
    layoutType: "hero" | "navbar" | "bento" | "split" | "marquee" | "cards-grid" | "footer" | "content";
    screenshotFile?: string;
}
export interface MotionDnaRecord {
    durationScale: string[];
    easingCurves: string[];
    detectedEngines: {
        gsap: boolean;
        framerMotion: boolean;
        lenis: boolean;
        threejs: boolean;
        scrollTrigger: boolean;
    };
    keyframes: {
        name: string;
        css: string;
    }[];
    scrollTriggers: {
        selector: string;
        start: string;
        end: string;
        animation: string;
    }[];
    hoverTransitions: {
        selector: string;
        transition: string;
        transform: string;
    }[];
}
export interface ExtractionManifest {
    brand: string;
    brandSlug: string;
    url: string;
    canonicalUrl: string;
    pageTitle: string;
    timestamp: string;
    viewport: string;
    domNodesInspected: number;
    stylesheetsInspected: number;
    runtimeStack: string[];
    extractionEngine: string;
    version: string;
    filesGenerated: string[];
}
export interface ExtractionResult {
    manifest: ExtractionManifest;
    colors: ColorSwatch[];
    surfaces: SurfaceTokens;
    typography: TypographyToken[];
    spacing: Record<string, string>;
    components: ComponentObserved[];
    sections: SectionBand[];
    motion: MotionDnaRecord;
    menuOverlay?: {
        detected: boolean;
        selector?: string;
        backgroundColor?: string;
        backdropFilter?: string;
        linksCount?: number;
        sampleLinks?: string[];
    };
    wcagFindings: {
        severity: "error" | "warn" | "pass";
        pair: string;
        contrast: number;
        required: number;
        message: string;
    }[];
}
