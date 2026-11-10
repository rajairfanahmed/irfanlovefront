# AI Search and Agent Discovery

Purpose: how AI-based search tools, answer engines, and autonomous agents find, read, and cite web content, a newer and less settled area than classic technical SEO. Treat this file's guidance with the honesty its subject actually deserves, some of it rests on well-established technical fact, some on emerging convention that may still change, state which is which rather than presenting all of it with equal confidence.

## How AI search and answer engines actually find content

AI-based search tools and answer engines (AI-generated search overviews, conversational answer engines, and similar tools) generally rely on a combination of their own crawlers, licensed or indexed data, and in some cases real-time retrieval from a traditional search index. This means the technical SEO foundation, actual crawlability, correct rendering, accurate structured data, matters at least as much for AI discovery as for classic search, an AI tool can't cite or extract content it can't access any more reliably than a traditional crawler can. Everything in `technical-seo.md` is a prerequisite here, not a separate concern.

## Crawler access for AI-specific user agents

Several AI companies operate their own named crawlers (used for search indexing, for training data collection, or both, and the distinction between these purposes isn't always clearly separated by the crawler's name alone). A site can choose to allow or block each one specifically via `robots.txt`, this is a genuine content and business decision, not a purely technical one, weigh the value of being discoverable and citable by a given AI tool against any concern about how the content might be used, and make the choice deliberately rather than leaving it to whatever a template or a copied `robots.txt` happens to already specify. State this as a decision for the site owner to make explicitly, this skill can lay out the tradeoff, not make the call unilaterally.

## The llms.txt convention

An emerging, not yet universally adopted convention, a file (commonly `llms.txt`) intended to give AI tools a concise, curated summary of a site's content and structure, similar in spirit to a sitemap but written for an AI consumer rather than a crawler. Treat this as a reasonable, low-cost addition for a site that wants to support AI discovery, but be clear that it's not yet a broadly required or universally respected standard the way `robots.txt` or an XML sitemap is, don't present adopting it as guaranteed to produce a specific result.

## Making content genuinely extractable

Content that's clearly structured, with direct, unambiguous statements of fact, clear attribution of claims, and a logical heading hierarchy, is easier for an AI tool to extract and cite accurately than content that's vague, heavily qualified, or where the actual information is buried in marketing language. This is largely the same correct semantic structure already required by `on-page-seo-and-metadata.md` and the accessibility skill's heading guidance, there isn't a separate, competing structure to optimize for AI extraction specifically, the same clear, well-organized content serves every consumer, human, traditional search, and AI alike.

## Structured data's role in AI citation

Accurate structured data (see `structured-data-and-indexing.md`) gives an AI tool a reliable, machine-readable source for specific facts, a price, an author, a publication date, rather than requiring it to infer the fact from prose, which is both less reliable and more prone to the AI tool getting it wrong. The same requirement that structured data must match visible content applies here with extra weight, an AI tool citing inaccurate structured data as settled fact is a more consequential and more visible failure than a traditional search snippet being slightly off.

## Authoritative sourcing within content

Content that clearly states its own sources, its author's relevant expertise, and the basis for factual claims is more likely to be treated as a trustworthy source by an AI tool evaluating what to cite, the same signals that have always mattered for credibility now feed directly into automated evaluation as well as human judgment. This isn't a new requirement invented for AI search, it's the same honest sourcing practice that's always been good content practice, now with an additional, more mechanical consumer checking for it.

## Avoiding content written differently for AI than for humans

Don't create a separate, differently optimized version of content specifically to game AI extraction or citation while showing something different to human visitors, this is the AI-era equivalent of cloaking, serving different content to a crawler than to a user, and carries the same reputational and potentially technical risk. Write one genuinely good version of the content that serves every consumer honestly.

## Agentic browsing and automated interaction

Beyond search and citation, an increasing amount of traffic to a site may come from an AI agent browsing on a user's behalf, filling a form, extracting specific information, or completing a task. This makes the same correct semantic HTML and accessible structure required elsewhere in this skill set doubly valuable, an agent navigating a page programmatically benefits from the same clear structure, correct labels, and logical hierarchy that a screen reader user relies on. There isn't yet a separate, established standard specifically for agentic interaction beyond building the page correctly by existing technical and accessibility standards, note this honestly as an area where the correct general practice already covers most of what's currently known to matter, rather than inventing agent-specific requirements that aren't yet established.

## Honesty about this area's maturity

State plainly, when giving guidance here, which recommendations rest on established technical mechanisms (crawler access, structured data accuracy, content clarity, all well understood) versus which rest on emerging or still-evolving convention (`llms.txt`, specific AI citation behavior, which changes as these tools themselves change). Don't present a guess about how a specific AI tool behaves as settled fact, and don't promise a specific citation or visibility outcome in any AI tool, that's no more verifiable or guaranteed than a traditional search ranking promise would be.