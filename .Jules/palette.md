## 2025-05-15 - [Sidebar & Search UX Enhancements]
**Learning:** [UX/a11y insight]
Interactive elements implemented as `div` or other non-semantic tags MUST have `role="button"`, `tabIndex={0}`, and keyboard event handlers (like `onKeyDown` for 'Enter') to be accessible. Simply adding `aria-label` is not enough for keyboard-only users.
**Action:** [How to apply next time]
Always use semantic elements like `<button>` when possible, or ensure full ARIA roles and keyboard support for custom interactive components.

## 2025-05-15 - [Global Shortcut Pattern]
**Learning:** [UX/a11y insight]
The '/' key is a standard and highly intuitive shortcut for focusing search. Providing a visual hint (like a '/' badge) inside the search bar significantly improves discoverability without cluttering the UI.
**Action:** [How to apply next time]
Implement a similar shortcut and visual hint for primary search interfaces across applications to improve power-user experience.
