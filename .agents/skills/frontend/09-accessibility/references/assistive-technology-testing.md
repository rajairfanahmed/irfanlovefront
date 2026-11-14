# Assistive Technology Testing

## Combine automated and manual methods

Automated tools help detect missing names, invalid relationships, contrast concerns, and common semantic issues. They do not determine whether the experience is understandable or whether a complete workflow can be finished.

## Representative test plan

For important routes and flows:
- navigate using keyboard only;
- inspect accessible names, roles, values, and state changes;
- test with at least one supported screen reader and browser combination where available;
- verify heading and landmark navigation;
- submit invalid and valid forms;
- open and close dialogs, menus, and disclosures;
- test zoom and reflow;
- enable reduced motion;
- verify meaningful images and decorative content are announced correctly.

## Record evidence

Record the operating system, browser, assistive technology and version, route, test steps, expected behavior, actual result, and severity. A test report must not imply broader coverage than was completed.

## Remediation

Fix the semantic or interaction cause where possible. Do not add hidden labels, ARIA attributes, or keyboard handlers as superficial patches when a native element solves the problem more reliably.
