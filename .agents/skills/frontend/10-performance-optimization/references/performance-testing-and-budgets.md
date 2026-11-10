# Performance Testing and Budgets

Purpose: how to set a performance budget that actually fits this project, which tools measure what, and how to keep the distinction between measured and assumed results honest throughout. A performance claim without a stated measurement method behind it isn't a verified result.

## Setting a budget from this project's actual context

A performance budget (a maximum bundle size, a target metric value, a maximum number of requests) should be derived from this project's actual target devices, typical network conditions, and audience, not copied from a generic recommendation or a different project's budget. A product whose real users are disproportionately on mid-range mobile devices over cellular connections needs a materially tighter budget than one used primarily on high-end desktops over broadband, set the target from the real distribution, not the development team's own, typically faster, hardware and connection.

## What a budget should cover

A useful budget covers more than one dimension: a size limit for the JavaScript bundle (and ideally broken down by what's loaded on initial load versus deferred), a target value for each Core Web Vitals metric, and often a limit on total page weight or request count for a typical page. A budget covering only one dimension (bundle size alone, say) can be met while the user experience still degrades through an uncontrolled dimension the budget didn't address.

## Lab testing tools

Tools like Lighthouse, WebPageTest, and browser developer tools' own performance panels provide controlled, repeatable measurements under simulated conditions, useful for diagnosing a specific issue and for catching a regression before it reaches real users. Run these under conditions that approximate the project's actual target device and network profile (a throttled CPU and a throttled network connection matching the real audience), not the default, often fast, conditions a tool uses out of the box, a lab result measured on an unthrottled connection tells you very little about what a real target user will experience.

## Field data and real user monitoring

Lab data alone doesn't capture the real variability across actual devices, connections, and usage patterns. Where available, use real user monitoring or aggregated field data (such as the Chrome User Experience Report, if the site has enough traffic to be included, or a project's own real-user-monitoring setup) to see what real visitors are actually experiencing, this is the data Core Web Vitals scoring for search ranking is actually based on, and it's the only way to know whether a lab-verified improvement actually reaches real users at the rate the lab test suggested.

## Being honest about which kind of data a claim rests on

State plainly whether a given performance number comes from a lab test, a specific field data source, or a reasoned estimate with no actual measurement behind it, these are three different levels of confidence and collapsing them into an unqualified claim ("this is fast now") misrepresents what's actually known. A result that hasn't been measured at all should be described as an expectation or a hypothesis, not reported as a confirmed outcome.

## Continuous monitoring and regression prevention

Where the project's tooling supports it, run a performance check as part of the regular build or deployment process, so a regression (a new dependency that grows the bundle significantly, a change that worsens a Core Web Vitals metric in testing) is caught before it reaches production rather than discovered later from a drop in field data. Set the automated check's thresholds from the project's actual budget, not an arbitrary pass-fail line unrelated to what was actually decided mattered.

## Diagnosing a regression

When a metric worsens, identify what actually changed around the time it worsened (a new dependency, a new asset, a changed rendering path) rather than guessing broadly, a bundle analyzer, a performance trace, or a comparison against the last known-good measurement under the same test conditions usually narrows this down quickly. Confirm a fix actually resolves the regression by remeasuring under the same conditions the regression was originally detected under, not a different, more favorable test setup.

## Prioritizing fixes by actual impact

When several performance issues exist, prioritize by their actual measured impact on the metrics and the real user experience that matter most for this project, not by which fix is easiest to implement or most interesting to work on. A single large, measured bottleneck usually matters more than several small, speculative optimizations combined, confirm the priority is grounded in measurement before committing effort to it.

## Reporting results honestly

A performance report should state what was measured, under what conditions, using which tool or data source, and what the result actually was, rather than a general assertion that performance "improved" or "is good now." Include what wasn't measured and remains an open question, if a specific claim (a particular device profile, a particular network condition, a specific page) wasn't actually tested, say so rather than letting the report imply broader coverage than what was actually verified.