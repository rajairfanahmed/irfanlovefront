# User Flows and Information Architecture

Purpose: how to map a task from the user's entry point to a completed goal, and how to organize content and features so users can find what they need by a path that matches how they'd actually think to look for it. Flows are about a single task's sequence; information architecture is about the structure that connects many tasks and sections together. Where navigation elements physically sit on a page belongs to Structural Layout, and how they're implemented as components belongs to UI Components.

## Part 1: User flows and task completion

### Start from the task, not the screens

Define a flow by what the user is trying to accomplish, not by the screens that happen to exist already. "Complete a purchase" is a task; "the checkout page" is one possible screen in service of it. Starting from screens tends to produce a flow shaped by what's easy to build rather than what's easy to complete.

### Entry points

A task can usually be entered from more than one place: a direct link, a search result, a call to action elsewhere in the product, a returning user picking up where they left off. Map every realistic entry point, not just the primary one, and check the flow makes sense regardless of which one the user actually arrived from, someone arriving mid-flow from a shared link needs different context than someone who clicked a button on the step before.

### The happy path

Lay out the shortest sequence of steps that gets a prepared, motivated user to success. This is the baseline the rest of the flow design departs from when a real complication requires it, not a complete flow on its own.

### Branches and decision points

Identify every point where the path genuinely forks, based on something the user chooses or something the system already knows about them (an existing account versus a new one, an eligible versus ineligible case). Each branch needs its own path to completion, not just a note that it exists. A flow that handles the common case well and leaves every branch as an afterthought will fail exactly the users who needed the branch.

### Ways back and out

Every step should have a way to go back without losing the user's progress, and a way to leave the flow entirely without the product acting as though they'd abandoned something they never intended to finish. A flow with no way out, or one where going back silently clears everything already entered, pushes users toward completing something they weren't actually ready to commit to.

### Partial completion and returning later

Decide explicitly what happens if a user stops partway through and comes back, does the flow resume where they left off, restart, or expire. This matters most for longer flows (an application, a multi-item setup) and matters less for a quick, low-stakes action where simply restarting is no real cost. State which applies and why, don't leave it to whatever the implementation happens to default to.

### Defining completion

State concretely what marks the task as done, not just what the last screen looks like. A flow can show a success screen and still have failed the user if the underlying action didn't actually complete, or if "done" is ambiguous. Completion criteria should be checkable, not just visually implied.

### Step count and necessity

Each step in a flow needs to earn its place: a genuine decision the user needs to make, information the product can't proceed without, or a point where confirming intent actually matters. A step that exists only because similar products have a similar step, or because it makes the flow look more thorough, is a cost without a benefit.

### Progressive disclosure within a flow

Ask for information and present choices when they're needed, not all at once up front. A long flow can often be shortened in perceived effort, even without changing what's ultimately required, by only surfacing a question when the answer to the previous one makes it relevant. Don't use this to hide genuinely required steps, only to sequence optional or conditional ones sensibly.

### Flows for different user states

The same task can need a different flow depending on who's doing it, a first-time user needs more context than a returning one, an authenticated user skips steps an anonymous one needs. Design the flow for the states that actually occur in this product rather than assuming one flow fits every visitor.

### Multi-actor and asynchronous flows

Some tasks don't complete in one sitting by one person, an approval that waits on someone else, an invitation accepted later, a process with a waiting period. Map what each party sees at each stage, and make sure the person waiting has a way to know the current state without having to ask.

### Verifying a flow

A flow can be checked on paper for completeness (every branch has a path, every step has a way back) and for necessity (nothing is required that doesn't need to be), but whether it's actually clear to a real user usually needs more than reasoning alone, real usage, a walkthrough with someone unfamiliar with the product, or data from an existing version. State plainly which kind of check was actually done.

## Part 2: Information architecture and navigation models

### Organize around the user's mental model, not the org chart

Group content and features by how users think about their own goals, not by how the product's internal teams or data model happen to be organized. A grouping that makes perfect sense internally can be confusing externally if users think about it differently. Check the grouping against how someone would actually describe what they're looking for, not against how it's built.

### Depth versus breadth

A hierarchy that's very deep forces users to make many sequential decisions, each one a chance to pick wrong. One that's very broad can overwhelm with too many choices at once. Neither is inherently correct, match the shape to how many things actually need organizing and how distinct the categories genuinely are.

### Labeling

Label sections and navigation items with words the user would actually use, not internal terminology or vague abstractions that don't tell someone what they'll find there. When a clearer label exists, use it even if it's less common in the product category.

### Findability through multiple paths

Users look for the same thing in different ways, some browse a hierarchy, some search, some arrive from an external link straight into the middle of the structure. Don't design only for the browsing path; check that search surfaces the same content, and that a direct link into a deep page still gives the user enough context and navigation to understand where they are.

### Navigation models

Choose a model based on the product's actual shape, not a default:

- **Hierarchical** (a tree of sections and subsections) suits content or features with a genuine parent-child structure, most of it.
- **Hub and spoke** (a central starting point users return to between tasks) suits products built around a small number of independent, roughly equal-weight tasks.
- **Flat** (everything reachable in one or two steps from anywhere) suits a small product where a deeper hierarchy would just add friction.
- **Sequential** (a fixed path through a process, with limited lateral movement) suits a task that genuinely has to happen in order, like a multi-step setup.
- **Faceted** (filtering and narrowing a large set by independent attributes) suits a large catalog or dataset where users approach it with different, combinable criteria in mind.

A real product often combines these, a hierarchical structure for content with a sequential flow for a specific task inside it. Pick deliberately per section rather than forcing the whole product into one model.

### Wayfinding

A user should be able to answer, at any point: where am I, how did I get here, and where can I go next. This comes from consistent labeling, a visible indication of current location, and predictable relationships between levels of the hierarchy. Don't add a wayfinding element just because similar products have one, add it when the structure is actually deep or complex enough that users would otherwise lose track of where they are.

### Search versus browse

Decide whether the product needs search at all based on the volume and variability of what's being looked for, a small, stable set of options is often better served by clear browsing than by a search box that returns zero results half the time. When search exists, it needs to be genuinely reliable or it actively damages trust more than not having it at all.

### Cross-linking and related content

Decide where it genuinely helps a user move between related tasks or content versus where it's just decoration competing with the primary task for attention. A product trying to surface everything tangentially related usually ends up surfacing nothing effectively.

### Consistency across the structure

The same kind of relationship (a section to its subsections, an item to its detail page) should be navigable the same way everywhere it occurs. A structure that's hierarchical in one area and flat in another, with no reason for the difference, breaks the mental model users build as they use the product.

### Scaling the structure

Design the information architecture to accommodate realistic growth without needing to be rebuilt. A structure that only works for the current, small amount of content is fragile; check it against what the content inventory is expected to look like, not just what it looks like today.

### Verifying the structure

Whether a structure is logically consistent (every item has exactly one clear home, no orphaned or duplicated categories) can be checked by inspection. Whether it actually matches how real users think can't be fully confirmed without testing it against people unfamiliar with the internal reasoning behind it, state plainly which kind of check was actually performed.
