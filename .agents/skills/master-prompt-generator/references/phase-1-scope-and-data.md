# Phase 1: Website Category, Project Mode, Pages & Real User Data

Read this file at the start of **Phase 1**. Check what the user has already provided in their opening prompt, uploaded files, or existing project directory. Confirm known items first, then ask only the missing items below. Every question MUST show selectable options plus `[Custom User Input]` and `[AI Recommended]`.

## Q1. Website Category (Mandatory First Check)
Establish the website category first unless the user already stated it (e.g., if the user says "developer portfolio", confirm `Category: Developer portfolio (Locked)` and do not ask Q1 again).

Present the most relevant categories from this complete 29-item inventory, plus Custom and AI Recommended:
1. Developer portfolio
2. Personal brand or professional profile
3. SaaS marketing website
4. SaaS web application
5. AI product or AI-powered application
6. Ecommerce or online store
7. Marketplace
8. Digital agency or creative studio
9. Corporate or institutional website
10. Dashboard or admin panel
11. Developer tool or API documentation
12. Education, courses or e-learning
13. Healthcare or health and wellness
14. Fintech or financial services
15. Booking, appointments or reservations
16. Travel and hospitality
17. Restaurant or food service
18. Real estate and property
19. Editorial, magazine, blog or news
20. Media, video or entertainment
21. Social or community platform
22. Productivity or collaboration tool
23. HR, recruiting or careers website
24. Event or conference website
25. Nonprofit or community organization
26. Internal business application
27. Landing page or campaign website
28. Multi-category product (specify combination)
29. `[Custom User Input]`: Type any custom website category or niche not listed above.
30. `[AI Recommended]`: Let AI infer the optimal category from your product description.

## Q2. Project Mode & Scope
Identify the intended project mode (skip if already clear from prompt):
- `A)` Build a new website from scratch
- `B)` Improve the existing website without replacing everything
- `C)` Redesign an existing website while preserving selected functionality
- `D)` Audit an existing website before deciding what to change
- `E)` Add new pages, sections or features to an existing website
- `F)` Refactor or migrate an existing frontend while preserving required behavior
- `G)` `[Custom User Input]`: Describe your custom project scope or hybrid mode.

**If Mode is B, C, D, E, or F (Existing Website), also ask:**
- Which existing routes, components, or features MUST be preserved untouched?
- Which pages or sections should change, and can the visual direction change substantially?

## Q3. Website Pages & Route Architecture
Ask the user which pages/routes the website needs:
- `A)` **Single-Page Scroll Architecture**: All sections on `/` with smooth anchor navigation (`#about`, `#services`, `#work`, `#reviews`, `#contact`).
- `B)` **Core Multi-Page Website**: Dedicated routes (e.g., `/`, `/about`, `/services`, `/work`, `/contact`).
- `C)` **SaaS / Product Multi-Page**: `/`, `/features`, `/pricing`, `/docs`, `/blog`, `/changelog`, `/login`, `/signup`.
- `D)` **E-Commerce Storefront Routes**: `/`, `/shop`, `/collections/[slug]`, `/product/[id]`, `/cart`, `/checkout`, `/about`.
- `E)` **Portfolio + Dynamic Case Studies**: `/` main landing page + `/work/[slug]` detailed project case study pages.
- `F)` `[Keep Existing Routes]`: Preserve current project routing structure.
- `G)` `[Custom User Input]`: List the exact pages and URL routes you want on the website.
- `H)` `[AI Recommended]`: Recommend the ideal page structure for the selected category.

## Q4. Real Website Data, Copy & Assets (User Content Intake)
A great website requires real content rather than invented fake data. Ask the user to provide or confirm their actual website data for the pages in scope:

1. **Identity & Hero Data**:
   - Brand or Person Name (e.g., `Raja Irfan Ahmed` or company name)
   - Primary Role / Value Proposition Headline (e.g., `Full-Stack Developer & AI Engineer`)
   - Subheadline / Short Intro Bio & Location / Availability Status
   - Primary & Secondary CTA Button labels and target links
2. **Key Metrics / Marquee / Proof Data**:
   - Exact numbers or ticker items (e.g., `2+ Years Experience`, `14+ Projects Delivered`, `98% Client Satisfaction`, client logos, or tech stack list)
3. **Core Section Content (Provide raw text, bullet points, or resume/doc)**:
   - **Services / Features**: Exact titles, numbering (`01`, `02`...), descriptions, and deliverables
   - **Projects / Products / Case Studies**: Titles, categories, tech tags, live URLs, GitHub links, metrics, and image filenames
   - **Testimonials / Social Proof**: Client names, roles, companies, ratings, and quotes
   - **Pricing / FAQ / Team / Process** (if applicable)
   - **Contact & Footer Info**: Email, phone/WhatsApp, social links (GitHub, LinkedIn, X/Twitter, Instagram), copyright text, and contact form fields (e.g., multi-step budget/service selector vs simple form)
4. **Visual Assets Inventory (Distinguish Supplied vs Needed)**:
   - `[User-Supplied Assets]`: Which actual files exist or will you provide (e.g., `/public/hero-portrait.png` cutout photo, project screenshots, brand logo SVG)?
   - `[Custom User Input]`: Paste all your website text, bio, project list, services, and asset paths here in any format.
   - `[Placeholder / Suggested Asset Plan]`: For any copy or images not yet available, ask if AI should draft category-accurate copy and clean structural asset placeholders (marked explicitly as suggested assets, never faked as existing files).
