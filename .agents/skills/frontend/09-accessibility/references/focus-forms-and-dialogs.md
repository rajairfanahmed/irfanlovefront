# Focus, Forms, and Dialogs

## Focus indicators

Provide visible, high-contrast focus indicators for all keyboard-operable controls. Avoid clipping, covering, or removing focus. Sticky headers and fixed footers must not obscure focused elements.

## Forms

Associate labels and instructions with fields. Identify errors in text and relate them programmatically to the affected input. Preserve entered values after validation or server errors. Provide an understandable error summary for complex forms.

## Dialogs

When a modal dialog opens, move focus into it according to the interaction pattern, keep focus within the modal while it is modal, support appropriate keyboard dismissal, and return focus to the invoking control on close. Non-modal panels should not trap focus.

## Dynamic feedback

Announce important asynchronous status changes without moving focus unnecessarily. Do not announce every minor visual update. Ensure live regions are present before the message is inserted where required by the tested technology.

## Testing

Test the complete flow, not only the opening state: launch, navigate, validate, submit, fail, recover, and close.
