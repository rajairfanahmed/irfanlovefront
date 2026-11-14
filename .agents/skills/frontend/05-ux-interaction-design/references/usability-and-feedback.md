# Usability and Feedback

## Make system status visible

Every action should produce an understandable response. Users should know whether a request started, completed, failed, or requires further input. Long-running work needs progress or a clear indication that the system is still working.

## Reduce memory burden

Keep relevant context near the decision. Preserve field values, selected filters, and safe draft state where appropriate. Use clear labels rather than forcing users to remember hidden rules.

## Prevent and recover from errors

Prevent common mistakes with helpful constraints and sensible defaults. When an error occurs, explain what happened, what was affected, and how to recover. Avoid exposing raw stack traces or unexplained status codes.

## Feedback placement

Use inline messages for local issues, summaries for multi-field errors, banners for page-level conditions, and notifications for results that users need to notice outside the immediate control. Do not send the same message through several channels without a reason.

## Validate with realistic use

Test realistic content, slow connections, empty accounts, large datasets, keyboard-only input, and interrupted tasks. A smooth ideal path can conceal confusing or incomplete behavior.
