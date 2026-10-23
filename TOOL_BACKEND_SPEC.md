# Backend Update Instructions: Challenge Pages, Section Naming, Animation Heavy Sites

This is an update to the existing backend. The current capture pipeline works. Testing on robinsweb.net showed three problems, and a fourth case (award style sites) that needs a different approach. Keep everything that already works. The API contract does not change except for one new error code, described in section 6.

Read the whole file before changing anything. Sections 1 and 4 affect every site. Sections 2 and 3 change how images are named and how sections are found.

---

## 1. Verification gate: never save a page that is not the real page

### What went wrong

Some screenshots, in desktop, tablet and mobile, show a "Checking your browser before accessing robinsweb.net" screen. The capture started while the site's browser check was still running, so the image shows the waiting screen instead of the site. The same can happen with any interstitial: Cloudflare style checks, other firewalls, age gates, maintenance pages and preloaders.

### Required behaviour

Add a verification gate that runs after every navigation and again immediately before the first section screenshot of each page and viewport. If the gate fails, no image is saved for that page.

A page counts as a challenge or block page if any of these is true:

1. The document title matches known patterns, for example "Just a moment", "Attention Required", "Access denied", "Checking your browser", "Verifying".
2. The visible text contains phrases such as "Checking your browser", "Verify you are human", "Enable JavaScript and cookies to continue", "Please wait for up to".
3. The DOM contains known challenge markers, such as a challenge iframe, a Turnstile widget, or the usual challenge container ids and classes of the common firewalls.
4. The response status is 403, 429 or 503 together with any of the above.

Keep these patterns in one configuration list so they can be extended without touching the capture code.

### Waiting for the automatic check to finish

The check shown in the screenshot is an automatic one. It normally clears by itself within a few seconds and then redirects to the real page. So the correct behaviour is to wait, not to capture.

1. When the gate detects a challenge, poll every 500 ms until the gate passes or the wait limit is reached. Wait limit: 20 seconds (assumption, keep configurable).
2. When the gate passes, wait for the real page to settle: load event, network idle, fonts ready. Then continue with the normal preparation steps.
3. Reuse the clearance across the whole job. After the first page passes, save the browser storage state (cookies included) and load it into every later context of the same job, for every viewport. Use the same user agent string in all contexts of the job, because clearance cookies are usually tied to the user agent and the IP address. This avoids repeating the check on every page and every viewport.
4. If the gate still fails at the limit, retry the page once with a fresh context and a longer limit (40 seconds). If it still fails, mark the page as failed with the reason BOT_PROTECTION.

### What must not be added

Do not add CAPTCHA solving, interactive challenge solving, stealth or fingerprint spoofing plugins, or proxy rotation to get around blocks. These are workarounds against a site owner's protection, they break whenever the vendor updates, and they would make the tool unreliable in a way no test can catch. When a site refuses an automated browser, the correct result is an honest failure, not a fake image.

The practical fix for sites the user owns is on the site's side: allow the capture server's IP address in the firewall or add a rule that skips the check for it. Mention this in the failure message (see section 6).

### Failure rules

A failed page never produces an image file. It is recorded in manifest.json with status failed and reason BOT_PROTECTION. If the home page fails this way, the whole job ends as failed with the error code BOT_PROTECTION. If only some pages fail, the job finishes as done with those pages listed as failed.

---

## 2. Section file names must come from the original site

### What went wrong

Files were named from the visible heading text inside each section. The user wants the names the site's own code uses for those sections, so the output reads like the original project structure (hero, about, services, footer), not like page copy.

### New naming order

For each section element, collect name candidates in this order and use the first one that survives the cleaning rules below.

1. The element's id.
2. A section naming attribute, checked in this order: data-framer-name, data-section-name, data-section, data-name, data-component, data-block-name.
3. aria-label, or the text of the element that aria-labelledby points to.
4. A meaningful class name token (rules below).
5. The tag. A nav, or a header at the top of the page, is named navbar. A footer is named footer. A main child with no other name stays unnamed at this step.
6. The first heading text inside the section, shortened to about four words. This is the last resort, not the first choice.
7. The word section.

The navbar and footer are always named navbar and footer, whatever the markup says. The user expects those two names in every folder.

### Cleaning rules

Convert to lowercase. Replace spaces and underscores with hyphens. Remove everything except letters, digits and hyphens. Collapse repeated hyphens. Limit to 40 characters.

Reject a candidate and move to the next one if it is any of these.

Generated or meaningless: hashed ids and classes, UUIDs, long hex strings, anything where more than a third of the characters are digits, builder style ids such as comp-xxxxxxx, and generated class prefixes such as css-, sc-, jsx-, emotion and framer- followed by a hash.

Utility classes: Tailwind style tokens (for example px-4, flex, grid, text-lg, bg-white, md:flex, anything containing a colon or square brackets).

Generic layout words on their own: container, wrapper, inner, outer, row, col, column, content, block, box, main, page, section, group, stack, layout, w-container.

Cleaning a class token: remove generic words and the word section when something meaningful remains, so section_hero, hero-section and hero_section all become hero, and about-us-section becomes about-us. For component style classes such as Hero_root__x7d2a, keep the readable leading part and drop the hash, giving hero.

If several class tokens are valid, prefer the one found on the section element itself over its children, and the first one in the class list over later ones.

### Duplicates and order

If two sections end up with the same name, add -2, -3 and so on in page order. Keep the two digit position prefix on every file so folders sort in page order, for example 02-hero.png, 03-about.png, 09-footer.png.

### Manifest

For each section record the final name, the nameSource (id, data-attribute, aria-label, class, tag, heading or position), the original selector, and the heading text. This keeps the heading text available for reference without using it in the file name.

Expected limit: some sites, especially those made with certain site builders, have no readable names in their markup at all. For those, the name falls back to the heading text or to section-N. That is correct behaviour and should not be treated as a bug.

---

## 3. Animation heavy and award style sites

Sites featured on design award lists are built differently from ordinary sites, so the standard path produces broken output on them. They typically use intro loaders, smooth scroll libraries, WebGL canvases, sections that pin while the user scrolls, horizontal scrolling, custom cursors and page transitions. Sections are often plain divs with no ids.

Add site profile detection and adjust the capture per profile. Detection runs once per page after the first load. A page can match more than one profile.

### Profiles and what changes

| Signal found | Profile | Adjustment |
| --- | --- | --- |
| Lenis, Locomotive Scroll or a similar library (html class lenis, data-scroll-container, data-scroll-section) | smooth scroll | Scroll with real mouse wheel events in steps, not scrollTo. If the content moves by transform inside a container, measure that container's height instead of the document height. |
| One or more large canvas elements | webgl | Launch Chromium with software GL enabled so canvases do not render black. Wait for two consecutive identical frames before capturing. |
| GSAP ScrollTrigger pins or pin spacer elements | pinned | Capture the pinned block at the moment it is fully in view. Do not capture the whole scroll distance. Flag it in the manifest. |
| Content wider than the viewport inside a pinned or overflow container | horizontal | Capture the container at its settled starting state. Flag it in the manifest. |
| Full viewport overlay at load that disappears later | preloader | Wait until the overlay is gone before anything else. |

### Viewport heights

Sections sized as 100vh depend on the viewport height. Use these heights with the widths already defined: desktop 1920 by 1080, tablet 768 by 1024, mobile 390 by 844 (assumptions, keep configurable).

### Preloader and settle wait

Intro animations can run for several seconds. Treat the page as ready only when all of the following hold: the load event has fired, fonts are ready, no fixed element covers more than about 80 percent of the viewport (except the verified background canvas), and two screenshots taken 500 ms apart are identical. Poll up to 30 seconds on a detected animation heavy page (assumption), then continue and flag the page in the manifest if it never settled.

### Flatten sticky nav must be restricted

This matters for every site and especially for award style ones. Never flatten a fixed or sticky element that covers more than about 80 percent of the viewport, that contains a canvas, or that is a background layer. Flattening those moves or hides the whole visual. Only flatten elements that behave like a navbar or a bar: attached to the top or bottom edge, a small share of the viewport height, containing links or buttons.

### Hide overlays additions

Also hide custom cursor elements (class or id containing cursor) and fixed grain or noise layers that sit on top of content, but only when they are not a full page background that the design depends on.

### WebGL rendering

Headless Chromium often has no GPU. Launch with software rendering enabled (for example the SwiftShader or ANGLE software options available in the installed Chromium version, verify the exact flags against the Chromium version in use). Test with a known WebGL site and confirm canvases are not black.

### Section detection ladder

Use the first step that gives at least three sections, and fall through otherwise.

1. Semantic elements and children of main (existing behaviour).
2. Elements carrying a section attribute such as data-scroll-section, data-section or data-framer-name, plus ids on large top level blocks.
3. Direct children of the real scroll container (the transformed container for smooth scroll sites).
4. Viewport sized slices of the page, named frame-01, frame-02 and so on. This is the last resort and guarantees the output is never empty.

For pinned sections, use the pin spacer's child as the section, not the spacer, so the image is one viewport tall and not thousands of pixels of blank scroll distance.

### Links and page transitions

Award sites often change pages with a client side transition and may have no real links in the first HTML. Discover links from the rendered DOM after the page has settled, as well as from the sitemap. Open each discovered page by navigating to its URL directly. Do not click through transitions.

### Time limits

Animation heavy pages are slower. Raise the per page limit to 90 seconds when the animation profiles are detected (assumption, keep configurable). The job limit stays as set, and pages beyond it are listed in the manifest as skipped.

### Honest expectation

These sites cannot be captured with the same certainty as ordinary ones. Scroll scrubbed scenes, 3D scenes and horizontal journeys do not map cleanly to one still image per section. The goal is to never silently produce a wrong image: every page captured with a special profile is marked in the manifest, and a page that could not be settled is marked as flagged.

---

## 4. Quality gate on every image

After each section screenshot, check the image before keeping it.

1. Reject an image that is a single flat colour or nearly so, unless the section is genuinely a plain spacer under 120 px tall.
2. Reject an image whose page text now matches the challenge patterns from section 1 (the page can change between sections).
3. Reject an image whose size is below the minimum (assumption: under 40 px in either direction).

A rejected image is retried once after a short wait. If it is rejected again, keep the file but mark it flagged in the manifest with the reason, so the user is told and nothing is hidden. Challenge page rejections are never kept.

---

## 5. Manifest additions

Add these fields to manifest.json. Existing fields stay.

For each page: status (ok, flagged, failed, skipped), reason when not ok, siteProfiles (list of detected profiles), settled (true or false).

For each section: name, nameSource, selector, headingText, flagged, flagReason.

At the top level: a summary with counts of ok, flagged, failed and skipped pages.

---

## 6. API and frontend impact

The events and download endpoints stay as they are. One new value is added to the error code list in the failed event: BOT_PROTECTION. The frontend shows this message for it: "This website blocks automated browsers. Try another site, or allow this server in the site's firewall if you own it." The Done view's existing warning line also counts flagged pages: "N pages need review. Details are in manifest.json."

---

## 7. Acceptance checks

1. Capture robinsweb.net with all three viewports. No image shows a browser check screen. The first image of every folder is the real navbar.
2. Capture the same site twice in a row. The second run succeeds on the same terms, and within one run the check appears at most once per viewport (clearance is reused).
3. Point the tool at a site that keeps blocking. The job reports BOT_PROTECTION, creates no images of the block page, and the frontend shows the message above.
4. Section file names use the site's own ids, section attributes or class names. Open the site's source and confirm at least three section names match what is in the markup. Confirm none of the names is a hash, a utility class or a generic word.
5. A section without any usable markup name gets its heading text as name, and the manifest shows nameSource heading.
6. Capture an animation heavy site that uses a smooth scroll library. Every folder has navbar, content sections and footer, with no blank or half faded images, and the manifest lists the detected profiles.
7. Capture a site with a full screen canvas background. The canvas is visible in the images (not black), and the background layer was not flattened.
8. Capture a site with pinned sections. Each pinned section is one viewport tall, not several thousand pixels.
9. If a page cannot be settled, it still produces output, and the manifest marks it flagged.
10. Run all earlier checks from the first spec again. Nothing that worked before has regressed.




# Backend Upgrade: Page Readiness and Loading Screens

This upgrade replaces the waiting logic in the backend. It supersedes section 1 (waiting part) and the "Preloader and settle wait" part of section 3 in backend-update-instructions.md. Everything else in that file and in the first spec stays.

## 1. The problem

A tested site was captured while its loading screen was showing: a white page with a small spinning ring in the centre. The same family of problem appeared earlier with the "Checking your browser" screen. In both cases the tool took the picture before the real page existed.

The previous rule for animation heavy sites waited until two screenshots in a row were identical. That rule cannot work here, because a spinner never stops moving, so two frames are never identical. Preloader handling was also only switched on after a site was detected as animation heavy, and a plain site with a spinner never reaches that branch. Both gaps are closed below.

Which site this screenshot came from, and why its loader was still visible, cannot be told from the image alone. It may be a normal loader that needed more time, a loader waiting for something the capture environment withheld, or a page that never finishes in an automated browser. The design below handles all three, and records which one happened.

## 2. One readiness function for every page

Create a single function, waitUntilReady, used on every page, in every viewport, for every site. It replaces the separate checks. It returns whether the page is ready, the reason if not, and the signals it observed. Challenge page detection from the earlier update becomes one of its checks.

A page is ready only when all checks below pass together and stay passing for a stability window of 800 ms (assumption, configurable). If any check flips back during the window, the window restarts.

### Check A. Not a block or challenge page

The existing patterns from section 1 of the earlier update.

### Check B. Network is quiet

The load event has fired and no tracked request has been in flight for 1000 ms. Do not count long lived connections (websockets, event streams, video and audio streaming, long polling) or requests that match the analytics list. Track requests through the browser's request events, not by guessing with sleeps.

### Check C. No loading indicator is on screen

A loading indicator exists if any of these is found and visible (not display none, not visibility hidden, opacity above 0.05, and inside the viewport or covering it):

1. An element whose id, class, role or aria attributes match loading words: loader, loading, preloader, pre-loader, spinner, splash, intro, page-loader, loading-screen, nprogress, progressbar with no completed value, aria-busy true.
2. An element that covers about 60 percent or more of the viewport, is fixed or absolute, has a high z-index, and sits above the main content. This catches loaders with no helpful class name.
3. A small element near the centre of the viewport with an infinite running animation (found through the Web Animations API, where an animation has infinite iterations), while the rest of the page has little content.
4. Skeleton or shimmer placeholders (class names containing skeleton, shimmer, placeholder, or lds- spinner families).

The indicator must be gone, meaning removed, hidden, faded to nothing or moved off screen, before this check passes. This is the check that handles spinners, because it looks at what the element is, not at whether pixels move.

### Check D. The page has real content

At least one of these holds: the visible text is longer than about 100 characters (assumption), or there are visible images or a canvas of meaningful size, together with at least one heading, link group or section. The root container of single page apps (for example the element with id root, app or __next) must not be empty.

### Check E. The picture does not look like a loading screen

Take a downscaled screenshot. If more than 95 percent of the pixels are the same background colour and the other pixels sit in a small region near the centre, treat it as a loading screen look and fail this check, unless Check D passed with real text. This catches loaders built in ways Check C could not name.

### Check F. Visuals are loaded

Fonts are ready. Images that are in or near the viewport are complete and decoded. Videos in view have a poster or a first frame. After the scroll pass (see below) the same check runs for newly revealed content.

### Adaptive timing

Do not use fixed sleeps. Poll every 250 ms and proceed the moment all checks have held for the stability window. A normal site is therefore ready within about a second of loading. Long waits happen only when a loader is actually detected.

Budget: 30 seconds for a normal page (assumption). When a loader is detected and the page is still making progress (requests, DOM changes, or the loader fading), extend up to 60 seconds. Budgets are configurable on the server.

Stuck detection: if for 10 seconds nothing changes (no requests, no DOM mutations, no visual change outside the loader) and the loader is still there, the page is stuck. Do not keep waiting. Move to the recovery steps below.

## 3. Recovery steps for a stuck or slow loader

Run them in this order, stopping as soon as the page becomes ready.

1. Wake the page. Bring it to the front, move the mouse once, and scroll by a few pixels and back. Some loaders wait for any user activity.
2. Skip button. If the loader overlay contains a clearly labelled button such as skip intro, skip, enter site or continue, click it, and flag the page in the manifest. Do not click age confirmation, consent or login prompts. Those are not loaders. If one blocks the page, fail it with the reason GATE.
3. Retry in a fresh context with all request blocking switched off, a doubled budget, and the same user agent. Mark attempt 2 in the manifest.
4. As a last attempt, retry with reduced motion emulation switched on. Some sites skip intro animations in that mode. This can change the look of the page, so any image taken this way must be flagged with the reason reducedMotionUsed.

If the page is still not ready after step 4, fail it with LOADING_TIMEOUT. Never save an image of a loading screen to make a result look complete.

## 4. Environment causes that create endless loaders

These are the usual reasons a loader never finishes in an automated browser, and each needs a fix in the backend, not in the checks.

Request blocking. Blocking analytics, tag manager or ad requests can hang sites whose loader waits for those scripts. Change blocked requests from aborted to answered: fulfil them with an empty 200 response of the right type, so the page's own load handlers still fire. Never abort font, stylesheet, image or media requests.

Background throttling. When several pages run in parallel, Chromium can throttle timers and animation frames on pages that are not in front, which stalls loaders driven by JavaScript animation. Launch with the flags that disable background timer throttling, renderer backgrounding and occluded window backgrounding (verify the exact flag names against the installed Chromium version), and bring each page to the front before waiting on it.

No GPU. Loaders and sites that use WebGL need software rendering enabled, as described in the previous update.

Too much parallel load. If a page is slow because the server is busy, loaders run slower than in real life. When a loader is detected, lower the parallel page count for that job (assumption: from 3 to 1) until it has been captured.

Clearance and stored state. Keep reusing the saved cookies and local storage from the first passed page for the later pages of the same job, so intro sequences that only show once per visitor are not repeated needlessly.

## 5. Loading states after the first load

A page that was ready at the top can show new loading states further down, for example lazy sections with a spinner or skeleton.

1. Run the scroll pass first (stepwise, as already specified), and run Checks C and F again after it.
2. Before each section screenshot, check that section for spinners and skeletons. If found, wait up to 10 seconds (assumption) for them to go away.
3. If it never clears, capture it anyway and flag the section with the reason section-still-loading. Do not discard it, since the rest of the page is valid.
4. On single page apps that change routes without a full reload, run the full readiness function again after every navigation.

## 6. Image level safety net

After each section screenshot, the quality gate from the earlier update also runs Check E on the image. An image that looks like a loading screen is retried once, then failed or flagged as above. This is the last line of defence, and it protects the output even if a detector above misses a case.

## 7. Manifest additions

For each page record: readiness result (ready, stuck, timeout), waitedMs, attempt number, the signals that blocked readiness at the start (for example loader selector, network busy, no content), whether a skip button was clicked, whether reduced motion was used, and the final reason code for failures.

For each section record: stillLoading true or false.

Top level summary gets a count of pages that needed recovery.

## 8. API and frontend impact

The endpoints and the events shape stay unchanged. One new error code is added: LOADING_TIMEOUT. A second, GATE, is added for pages blocked by consent or age prompts.

Status text can now say "Waiting for the page to finish loading" during a long wait. This uses the existing stage field, so no contract change is needed.

Frontend messages for the new codes:

| Code | Message |
| --- | --- |
| LOADING_TIMEOUT | This page never finished loading, so it was skipped instead of saving empty images. |
| GATE | This page asks for a confirmation (such as age or consent) that the tool cannot answer. |

When some pages end this way and the job finishes anyway, they are counted in the existing "pages need review" line in the Done view.

## 9. Test pages to build first

Build a small set of local test pages. They make the readiness function testable without depending on live sites.

1. A loader that disappears after 3 seconds.
2. A loader that lasts 12 seconds and is animated with JavaScript.
3. A page that shows skeleton blocks and fills them after a delayed request.
4. A page with a spinner that never ends.
5. A page with an intro that needs a click on a button labelled Enter.
6. A page whose loader waits for a script from a blocked analytics domain.
7. A page with a lazy section that shows a spinner when scrolled into view.
8. A normal fast page with no loader.

Also keep the site that produced the red spinner screenshot as a live test case.

## 10. Acceptance checks

1. Pages 1, 2, 3, 5, 6 and 7 become ready and capture real content. No image contains a spinner or skeleton, except page 7 where the section is flagged if it never cleared.
2. Page 4 fails with LOADING_TIMEOUT within the budget, produces no images, and the job still finishes if other pages exist.
3. Page 8 is captured with no extra delay: readiness is reached about one second after load.
4. The live site with the red spinner produces real section images in all three viewports, or a clear failure code. Never an image of the spinner.
5. The manifest shows what was waited for and why, for every page that needed recovery.
6. With blocking turned on for analytics, page 6 still loads, and no font, image or stylesheet request is ever aborted.
7. Running two jobs at once does not make loaders stall.
8. Earlier acceptance checks from the first spec and the previous update all still pass.