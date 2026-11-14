# Forms, Validation, and Error Recovery

## Form structure

Group fields by meaning and task sequence. Provide persistent labels, concise instructions, input types, autocomplete hints, required indicators, and help text where needed. Do not rely on placeholder text as the only label.

## Validation timing

Use immediate validation only when it helps users correct a clear input constraint. Validate complete submissions on submit and preserve valid input when a request fails. Avoid displaying errors before users have had a fair chance to provide a value.

## Backend validation

The server remains authoritative. Map documented backend field errors to the relevant input and provide a form-level summary when multiple fields fail. Do not create a second set of business validation rules that can drift from the backend.

## Async behavior

Show pending state, prevent duplicate submission when unsafe, handle timeout and network failure, and retain entered values when retry is possible. Confirm success clearly and explain the next step.

## Sensitive and destructive actions

Explain consequences before irreversible actions. Ask for confirmation only when the consequence warrants it. Provide undo where the system can safely support it. Never imply an action succeeded before the backend confirms it.
