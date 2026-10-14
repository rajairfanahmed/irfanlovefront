# UI/UX Principles, Laws, and Heuristics

## Knowledge Type Distinctions

| Type | Meaning | Example |
|---|---|---|
| Usability heuristics | General principles for evaluating interfaces | Jakob Nielsen's 10 heuristics |
| Design principles | Broad guidance for making design decisions | Consistency, hierarchy, feedback |
| Psychological models and laws | Models describing aspects of human perception or behaviour | Fitts's Law, Hick-Hyman Law |
| Accessibility standards | Testable requirements for accessibility conformance | WCAG 2.2 |
| Design patterns | Established solutions to recurring interface problems | Form validation, checkout flows |
| Visual techniques | Methods for creating a particular visual effect | Grid systems, gradients, glassmorphism |

A heuristic is not an absolute law, a visual trend is not a usability principle, and an accessibility requirement should not be treated like a matter of aesthetic preference.

---

## A. Jakob Nielsen's 10 Usability Heuristics

Source: Nielsen Norman Group, originally published 1994, reviewed January 2024.

1. **Visibility of system status:** Keep users informed about what is happening.
2. **Match between the system and the real world:** Use concepts and language familiar to users.
3. **User control and freedom:** Let users cancel, undo, go back, or recover where appropriate.
4. **Consistency and standards:** Maintain predictable behaviour and respect established conventions.
5. **Error prevention:** Prevent foreseeable mistakes instead of only displaying error messages.
6. **Recognition rather than recall:** Keep necessary information and options visible.
7. **Flexibility and efficiency of use:** Accommodate both new and experienced users.
8. **Aesthetic and minimalist design:** Avoid irrelevant information that competes with useful content.
9. **Help users recognize, diagnose, and recover from errors:** Explain problems clearly and provide recovery actions.
10. **Help and documentation:** Make appropriate assistance available when needed.

These heuristics guide design and conduct reviews. They should not force an elaborate UX audit into every simple design request.

Reference: https://www.nngroup.com/articles/ten-usability-heuristics/

---

## B. Don Norman's Design Principles

From Norman's work on human-centered design and human-computer interaction:

- **Discoverability:** Users can determine what actions are possible and how to perform them.
- **Feedback:** The system communicates the results of actions and the current state.
- **Conceptual models:** Users form mental models of how the system works; the design should support accurate models.
- **Affordances:** Properties that determine how something can be used.
- **Signifiers:** Indicators that communicate where and how to act.
- **Mapping:** The relationship between controls and their outcomes.
- **Constraints:** Limitations that guide correct action and prevent errors.
- **Forcing functions and error prevention:** Design features that prevent dangerous actions.
- **Knowledge in the head versus knowledge in the world:** Balance reliance on memory with visible information.

Reference: *The Design of Everyday Things*

---

## C. Shneiderman's Eight Golden Rules

Complementary framework to Nielsen's heuristics:

1. Strive for consistency
2. Seek universal usability
3. Offer informative feedback
4. Design dialogs to yield closure
5. Prevent errors
6. Permit easy reversal of actions
7. Keep users in control
8. Reduce short-term memory load

Reference: *Designing the User Interface*

---

## D. Laws and Principles of UX

### Fitts's Law
The time needed to acquire a target depends on its size and distance. Useful for button sizes, touch targets, and control placement.

### Hick-Hyman Law
Choice time generally increases with the information and complexity involved in choosing. Useful for menus, option selection, and configuration flows. Does not mean every menu must contain fewer items.

### Jakob's Law
Users bring expectations from other products they already know. Familiar conventions often reduce the need to learn an interface from scratch.

### Cognitive Load Theory
Account for the mental effort required to understand information, make decisions, and complete tasks. Improve clarity without assuming all complexity can or should be eliminated.

### Tesler's Law (Law of Conservation of Complexity)
Some complexity is inherent in a task. Design should manage it thoughtfully rather than simply transferring all complexity to users.

### Doherty Threshold
Responsive system feedback helps sustain interaction. Study perceived latency, progress indicators, optimistic updates, and loading feedback rather than applying a single timing threshold indiscriminately.

### Additional concepts
- Miller's Law and its limitations
- Peak-end rule
- Von Restorff effect (isolation effect)
- Aesthetic-usability effect
- Serial-position effect
- Goal-gradient effect
- Progressive disclosure

**Important:** Each entry should explain its original concept, appropriate applications, limitations, and common misinterpretations. Do not turn a psychological observation into a rigid design formula.

---

## E. Gestalt Principles and Visual Perception

- **Proximity:** Nearby elements appear related.
- **Similarity:** Elements with similar visual properties appear related.
- **Common region:** Elements within a shared boundary are perceived as a group.
- **Connectedness:** Visually connected elements appear related.
- **Continuity:** People tend to perceive continuous paths and alignments.
- **Closure:** People mentally complete incomplete shapes.
- **Figure-ground:** People distinguish foreground elements from their backgrounds.
- **Common fate:** Elements moving together appear related.
- **Symmetry and order:** Organized arrangements are often perceived as coherent wholes.
- **Prägnanz:** People tend to perceive patterns in relatively simple, organized forms.

These principles support grouping, alignment, navigation, visual hierarchy, and readability.

Reference: https://www.nngroup.com/articles/gestalt-principles/

---

## F. Foundational Usability Qualities

- Learnability, efficiency, memorability, error prevention, error recovery, accessibility, consistency, discoverability, predictability, user control, user satisfaction

---

## G. Cognitive Considerations

- Cognitive load, working memory, recognition versus recall, mental models, attention management, decision fatigue, information chunking, progressive disclosure, signal-to-noise ratio, choice complexity, feedback and causality, familiarity and conventions

---

## H. Human-Centered Design and Interaction Psychology

### Perception and attention
Visual scanning, attention, salience, contrast sensitivity, recognition, and information grouping.

### Memory and cognition
Working memory, mental models, cognitive load, recognition versus recall, and decision complexity.

### Learning and expectations
Learnability, familiar conventions, consistency, discoverability, and transfer of knowledge from other interfaces.

### Decision-making
Choice architecture, meaningful defaults, understandable trade-offs, progressive disclosure, and decision support.

### Feedback and control
Affordances, signifiers, causal relationships, system status, predictable outcomes, and error recovery.

### Emotional design
Trust, reassurance, frustration, delight, perceived quality, and the relationship between aesthetics and usability.

### Behavioural considerations
Motivation, feedback loops, habits, reminders, incentives, and user autonomy.

Include limitations and relevant evidence where available. Avoid making universal claims about how every person behaves. Human behaviour varies with context, experience, culture, ability, and task.

---

## I. Design-Decision Framework

### Level 1. Requirements and constraints
Explicit user and developer requirements, actual product capabilities, relevant platform constraints, and applicable accessibility obligations.

### Level 2. User and interaction principles
Usability heuristics, cognitive considerations, interaction principles, information architecture, and familiar conventions.

### Level 3. Visual design principles
Composition, hierarchy, colour, typography, Gestalt, spacing, imagery, and motion.

### Level 4. Context-specific design patterns
Patterns chosen for the product, platform, task, and intended audience.

### Level 5. Aesthetic exploration
Original art direction, visual experimentation, style combinations, and expressive details.

### Level 6. Evaluation and refinement
Check the output against its intended purpose, explicit requirements, visual coherence, usability, accessibility, and actual implementation.

This is a conceptual organization, not a rule that every task must move through six sequential stages.

---

## J. Knowledge Documentation Standard

For every major principle, law, standard, or design pattern, capture:

| Field | What to document |
|---|---|
| Name and category | What it is and what type of knowledge it represents |
| Definition | Its original meaning |
| Intended purpose | What design problem it helps address |
| Application | When and how it is useful |
| Examples | Correct application in actual interfaces |
| Misuse | Common misinterpretations or overapplication |
| Limitations | Contexts in which it may not apply |
| Relationships | Related principles or conflicting considerations |
| Source | Authoritative reference and date/version where relevant |
| Evaluation | How an appropriate implementation can be checked |
