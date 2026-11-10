# Images, Fonts, and Assets

Purpose: delivering images, fonts, icons, and other media efficiently without changing what Visual Design and UI Components have already decided they should look like. This file owns the delivery mechanism, format, compression, loading strategy, not the visual treatment itself.

## Responsive image delivery

Serve an image sized appropriately for the viewport and display density it's actually being shown at, using `srcset` and `sizes` (or the equivalent in the project's image pipeline or framework) rather than relying on a single large image scaled down by CSS. A narrow mobile viewport downloading a desktop-sized hero image pays a real, avoidable cost in load time and data usage, coordinate the actual breakpoints and sizes with Responsive Design rather than defining a separate set here.

## Modern image formats

Use a modern, more efficient format (WebP or AVIF) with an appropriate fallback for the project's actually required browser support, rather than defaulting to an older format out of habit. Check the real compression gain for this project's actual images, the benefit varies by image content, and verify visual quality at the chosen compression level, especially for images with fine detail or text, rather than assuming maximum compression is free.

## Image compression

Compress every image to the point where visual quality is still acceptable for its actual use (a large hero image can usually tolerate more compression than a small, detail-critical product photo), rather than shipping an unoptimized source file directly. Automate this in the build or asset pipeline where possible so it happens consistently rather than depending on someone remembering to do it manually for each new image.

## Lazy loading versus eager loading

Load images that are visible without scrolling (especially the one that's likely the page's LCP element) eagerly and with high priority, since delaying it directly hurts LCP. Load images further down the page lazily, so they don't compete for bandwidth and priority with what the user actually sees first. Getting this backward, lazy-loading the actual LCP image, is a common and directly measurable mistake, confirm which image is likely the LCP element and make sure it's not inadvertently deferred.

## Reserving space to prevent layout shift

Every image needs its aspect ratio or dimensions specified before it loads, so the browser reserves the correct space and avoids a layout shift when the image arrives, this is the same requirement covered from a design perspective in Responsive Design and Visual Design's guidance, implemented here as an actual, verified attribute or CSS property on every image, not assumed to happen automatically.

## Font loading strategy

Specify a font-display strategy (commonly swap, so text remains visible in a fallback font while the real font loads, rather than invisible text blocking render) unless the project has a specific reason to prefer a different behavior. Preload a critical font (one used for above-the-fold text) so it starts loading as early as possible rather than being discovered late in the loading sequence. Choose a fallback font stack that closely matches the real font's metrics to minimize the visible shift when the real font swaps in, coordinate with Visual Design's typography work for what the real font actually is.

## Font subsetting and variable fonts

Subset a font file to only the character sets and weights the project actually needs rather than shipping every weight and script a font family offers by default, this can substantially reduce the font payload. A variable font, if the project uses one, can replace several separate static font files with a single file supporting the full weight range, check whether the variable font file's total size is actually smaller than the specific static weights it would replace, this isn't automatic for every typeface.

## Icon and SVG optimization

Serve icons as optimized SVG (stripped of unnecessary metadata and editor cruft) or an appropriately sized icon font or sprite sheet, whichever the project's existing approach uses, rather than an unoptimized export straight from a design tool. Inline a small number of critical, frequently reused icons directly in markup when that avoids an extra network request for very small assets, but don't inline every icon indiscriminately, that can bloat the HTML payload instead.

## Video and other heavy media

Serve video in an efficient, modern codec with an appropriate resolution for how it's actually displayed, and avoid autoplaying video with sound or at a large size on initial load, since it competes directly with the page's actual content for bandwidth and main-thread resources. Use a poster image and load the video itself only when the user is likely to actually watch it, not unconditionally on page load.

## Third-party assets and scripts

A third-party script (analytics, a chat widget, an ad network, an embedded social media post) often carries a real, sometimes substantial performance cost beyond the control of the project's own code. Audit what's actually loaded and whether each one earns its cost for this specific product, load non-critical third-party scripts asynchronously or deferred rather than blocking the page's own content, and reconsider or remove a third-party script whose cost isn't justified by its actual value to the product.

## Caching and CDN delivery

Serve static assets (images, fonts, compiled bundles) with appropriate cache headers so a returning visitor doesn't redownload something that hasn't changed, and use a content delivery network where available so assets are served from a location close to the actual user rather than a single, potentially distant origin server. Confirm cache invalidation actually works correctly when an asset changes, a cache that's too aggressive can serve a stale asset indefinitely, which is its own kind of bug.