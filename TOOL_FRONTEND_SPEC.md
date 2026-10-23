# Website Capture Tool: Frontend UX and Flow Specification

This replaces Part 1 of the earlier spec. Part 3 of that file (the API contract) is unchanged and still decides any disagreement. Field names below match it exactly.

## 1. Design principles

The tool does one job, so the screen does one thing at a time. These rules come first, and every decision below follows them.

1. One card, one primary action. At any moment the user sees exactly one thing they are expected to do.
2. The card changes in place. The form, the running view and the result all live inside the same card, at the same width, so nothing jumps around the page.
3. Defaults are right for most people. All three viewports and all three options start on, so a user can paste a URL and press Capture without touching anything else.
4. Progress is real. Every number on screen comes from the backend. Nothing is faked or estimated.
5. No dead ends. Every error says what happened and gives one clear way forward.
6. The user can always leave and come back. Refreshing or reconnecting resumes the same job.

## 2. The page

A single centred column, maximum width about 720 px, with the card in the middle. Above the card goes a short title and one line of purpose, for example "Website Design Capture" and "Enter a URL and download every page as section by section images." Nothing else. No navigation bar, no footer, no sidebar.

The visual language is already set by the existing design: red accent, dark selected chips, monospace uppercase section labels, rounded white card. Keep it as is.

## 3. The user flow, step by step

### Step 1. Arrive

The URL input is focused automatically. The caret is in the field and the user can paste straight away. The Capture button is disabled until the input has text.

### Step 2. Enter the URL

The user pastes or types a URL. Pressing Enter does the same as clicking Capture. The "Example target" link fills the field when clicked and moves focus back to the input.

Validation runs when the user leaves the field or presses Capture, not on every keystroke, so errors never flash while someone is still typing. If the text has no scheme, https:// is added silently. The field accepts only http and https URLs.

### Step 3. Choose viewports

Desktop, Tablet and Mobile start selected. Each chip toggles on click. A selected chip is dark with a check mark, an unselected chip is outlined with no check. Select All is highlighted only while all three are selected, and clicking it when all are selected clears them.

The counter on the right reads "3 of 3 selected" and updates live. If the user clears everything, Capture is disabled and the counter turns red with the words "Select at least one viewport".

Chip labels show CSS widths: Desktop (1920px), Tablet (768px), Mobile (390px).

### Step 4. Choose options

Three toggle cards, all on by default. The whole card is clickable, not just the switch. Each card keeps its title and its short description. The switch uses role="switch" with aria-checked.

### Step 5. Press Capture

On click, the frontend sends the request from the contract. While waiting for the answer (normally under a second) the button shows a small spinner and the card does not change. If the answer is a 400 or 429, the matching message appears under the input and the card stays on the form. If the answer is 201, the card moves to the Running view.

### Step 6. Running view

The form collapses. In its place:

At the top, a read only summary row shows the URL and small chips for the selected viewports, so the user remembers what is running. These chips are not clickable.

In the centre, a large circular progress indicator, about 160 px. The percentage is inside the circle in large type. The ring fills clockwise.

Under the circle, one line of status text from the stage field, for example "Capturing about page, mobile, section 4 of 9". The line changes as the backend reports new work.

Under that, a small line of counters: "Pages 2 of 6, Images 31, Elapsed 01:24". Elapsed time is counted by the browser. There is no estimated time remaining, because it would be a guess and a wrong guess is worse than none.

Below the counters, a three step phase strip: Finding pages, Capturing, Packaging. The current phase is highlighted, finished phases get a check mark, later phases are dimmed. This tells the user where they are even when the percentage moves slowly.

At the bottom, a single Cancel button in the outlined style. Clicking it asks for no confirmation, since nothing is lost that cannot be re-run, and it stops the job at once.

Before the first progress event arrives, the circle shows an indeterminate spinning ring and the status says "Finding pages". It becomes determinate as soon as the backend reports a percentage.

### Step 7. Done view

The circle completes to 100 percent and changes to a check mark. The status line becomes "Capture complete".

The main element is one large Download ZIP button showing the file name and size, for example "Download robinsweb.net.zip (18.4 MB)". The download does not start by itself, because browsers block unrequested downloads and a surprise download is poor manners.

Under the button, one summary line: "6 pages, 3 viewports, 94 images". If any page failed, a quiet warning line follows: "2 pages could not be captured. The details are in manifest.json inside the ZIP." The warning is not styled as an error, since the job still produced a useful result.

Below, a text link: "Capture another site". It returns to the empty form, with the URL cleared and the previous viewport and option choices kept.

### Step 8. Failed view

A short plain sentence says what happened and one button says Try again. Try again returns to the form with the previous URL and choices filled in. Messages by case:

| Case | Message shown |
| --- | --- |
| INVALID_URL | Enter a full website address, for example https://example.com |
| NO_VIEWPORT | Select at least one viewport. |
| BLOCKED_TARGET | This address can't be captured. Use a public website. |
| 429 too many jobs | The server is busy. Try again in a minute. |
| Site unreachable | We couldn't open this website. Check the address and try again. |
| Every page failed | The site loaded but no pages could be captured. It may block automated browsers. |
| Job lost after refresh | This capture is no longer available. Start a new one. |

### Step 9. Cancelled view

The card returns to the form directly, with the previous inputs filled in and a single line above the button: "Capture cancelled."

## 4. State summary

| State | What the card shows | Primary action |
| --- | --- | --- |
| Idle | Form | Capture |
| Submitting | Form, button with spinner | none |
| Running | Circle, status, counters, phases | Cancel |
| Done | Check mark, summary | Download ZIP |
| Failed | Message | Try again |
| Cancelled | Form with notice | Capture |

Only one state is shown at a time. Switching states uses a short crossfade (about 150 ms) inside a card that keeps a fixed minimum height.

## 5. Connection handling

The frontend listens to the events endpoint. If the connection drops, it shows a small "Reconnecting" note under the status line, retries with a short increasing delay, and falls back to asking GET /api/jobs/:jobId every two seconds. The note disappears as soon as data arrives again. If the job is gone (404), it moves to the Failed view with the "no longer available" message.

The job id is stored in sessionStorage at creation. On page load, if a stored job id exists, the page skips Idle and goes straight to the current state of that job.

While a job is running, the browser tab title shows progress, for example "42% Capturing robinsweb.net". On completion it reads "Done robinsweb.net". This lets the user work in another tab and still see the result.

## 6. Responsive behaviour

At 640 px and above the input and Capture button sit side by side. Below 640 px the button goes under the input at full width. The viewport chips wrap onto a second row if needed. The three option cards sit in one row from 768 px and stack in one column below that. The circle shrinks to about 128 px on small screens. Every tap target is at least 44 px high.

## 7. Accessibility

The input has a visible label (hidden visually only if the design requires it, never removed). The progress circle uses role="progressbar" with aria-valuemin 0, aria-valuemax 100 and aria-valuenow set to the current percent. The status line and the error messages sit in an aria-live="polite" region. When the state changes, focus moves to the new primary element: the Cancel button when running starts, the Download button when done, the message when failed. Every control shows a clear focus ring. Colour is never the only signal, so the red counter also carries text. The animation respects prefers-reduced-motion, in which case the ring jumps between values instead of sweeping.

## 8. What is deliberately left out

These were considered and rejected for this version. Each adds work without helping the core flow.

A live preview of captured images while running. It needs the backend to serve thumbnails and the user cannot act on them anyway. Revisit after the core tool is stable.

A history of past captures. Needs accounts or storage and is outside a single page tool.

Per page selection (choosing which pages to capture). Useful, but it needs a discovery step shown to the user before capture. Plan it as a second version.

Settings for page limit or image format. These stay on the server.

Extra pages such as about, pricing or docs. Not required now.

## 9. Frontend acceptance checks

1. Opening the page puts the caret in the URL field. Pasting a URL and pressing Enter starts a capture.
2. Clearing all viewport chips disables Capture and shows the red message. Select All behaves as described in both directions.
3. All three option cards toggle by clicking anywhere on the card, and by keyboard.
4. The percentage never decreases on screen, even if an older event arrives late.
5. Refreshing mid run returns to the same Running view with the correct percentage.
6. Cancel returns to the form with inputs intact.
7. The Done view shows the correct file size, counts and warning line when a page failed.
8. Every error case in the table shows its exact message and a way forward.
9. The layout works at 360 px width, and the whole flow can be completed with the keyboard alone.
10. The card height does not jump visibly when moving between states.