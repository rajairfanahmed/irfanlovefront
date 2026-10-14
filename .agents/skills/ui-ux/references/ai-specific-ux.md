# AI-Specific UX Patterns

## Purpose
Establish design knowledge for interfaces that involve AI-generated content, AI-assisted actions, AI agents, and machine-learning-powered features.

---

## AI Interaction Categories

### Conversational AI
Chat interfaces, prompt composition, conversation history, context management, multi-turn interactions, system messages, suggested prompts, conversation branching

### Generative AI
Text generation, image generation, code generation, content summarization, translation, rewriting, creative generation, multi-modal generation

### AI-Assisted Actions
Smart suggestions, autocomplete, recommendations, predictive input, anomaly detection, automated classification, intelligent search, content moderation

### AI Agents
Autonomous task execution, multi-step workflows, tool use, approval checkpoints, progress monitoring, error recovery, human-in-the-loop review

### Analytical AI
Pattern recognition, trend analysis, forecasting, risk scoring, sentiment analysis, clustering, anomaly alerts

---

## AI Interface Components

### Input components
- Prompt composers and text areas
- Context attachments (files, images, URLs, code)
- System instruction configuration
- Parameter controls (temperature, length, style)
- Conversation history and context windows
- Suggested prompts and templates
- Voice input where applicable

### Output components
- Streaming text display
- Generated content preview
- Source citations and references
- Confidence indicators where appropriate
- Comparison views (multiple outputs)
- Edit and regenerate controls
- Copy, save, and export actions
- Inline annotations and corrections

### Process components
- Generation progress indicators
- Tool-use status and step tracking
- Approval and review checkpoints
- Task queue and history
- Cost and usage indicators where relevant
- Model and version indicators

---

## AI-Specific States

### Generation states
Idle, composing, submitting, generating (streaming), complete, partially complete, failed, cancelled, rate limited, quota exceeded

### Agent states
Planning, executing step, waiting for tool response, waiting for approval, completed, failed, partially completed, cancelled

### Review states
Pending review, approved, rejected, modified, escalated

---

## Trust and Reliability

### Transparency
- Clear distinction between AI-generated and human-created content
- Source attribution and provenance where available
- Visible uncertainty when relevant
- Explanation of what the AI did and why (when useful, not always)
- Clear indication of which actions were performed versus suggested

### User control
- Ability to review before consequential actions
- Edit, regenerate, and undo capabilities
- Approval checkpoints for multi-step workflows
- Cancel and interrupt generation
- Control over AI behaviour parameters when appropriate
- Opt-out of AI features

### Honesty
- Do not present generated text as verified fact
- Do not hide which actions were performed autonomously
- Do not show fake progress or fabricated confidence
- Do not claim external actions succeeded without confirmation
- Distinguish suggestions from completed operations
- Acknowledge limitations and failure modes

### Safety
- Human oversight for consequential AI actions
- Confirmation before irreversible operations
- Clear recovery paths when AI output is incorrect
- Appropriate content filtering and safety measures
- Privacy-respecting data handling
- Transparent about what data is sent to AI services

---

## Common AI UX Failures

- Presenting generated content as authoritative without verification
- Hiding autonomous actions from the user
- Fake streaming or progress animations
- Unclear tool failures buried in conversation
- Loss of user input during generation
- No way to compare or iterate on outputs
- Overwhelming users with AI capabilities without clear entry points
- Claiming 100% accuracy or reliability
- No graceful degradation when AI services are unavailable
- Confusing AI suggestions with confirmed actions

---

## Design Considerations

- AI interfaces should feel like tools that augment human capability, not black boxes
- The interface should make the AI's behaviour predictable and its limitations understandable
- Users should always know what the AI did, what it is doing, and what it will do next
- Error states for AI failures should be as carefully designed as success states
- The design should support iterative workflows: generate, review, refine, approve
- AI-powered features should integrate naturally with the product's existing interaction patterns

**Foundational principle:** AI interfaces must be honest about what they produce, transparent about what they do, and respectful of user control over consequential decisions.
