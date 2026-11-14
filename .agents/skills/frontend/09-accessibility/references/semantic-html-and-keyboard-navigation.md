# Semantic HTML and Keyboard Navigation

## Native semantics first

Choose elements according to purpose: headings for structure, buttons for actions, anchors for navigation, labels for form controls, lists for grouped items, and tables for tabular data. Use ARIA only when native semantics do not express the required relationship or state.

## Landmarks and headings

Provide a meaningful page title, main landmark, navigation landmarks where needed, and a logical heading hierarchy. Landmark labels should distinguish multiple regions with the same role.

## Keyboard operation

Every interactive control must be reachable and operable by keyboard. Use native tab order unless the interaction pattern requires a specific managed model. Ensure focus is visible, predictable, and not trapped.

## Custom widgets

Menus, tabs, comboboxes, dialogs, and tree-like controls require their expected keyboard behavior. Do not add ARIA roles without implementing the associated interaction model.

## Focus order

The focus order must follow a logical task sequence and remain understandable when visual layouts reflow. CSS ordering must not create a confusing mismatch with DOM and focus order.
