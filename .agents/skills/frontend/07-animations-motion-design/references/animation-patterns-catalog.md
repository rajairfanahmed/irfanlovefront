# Animation Patterns Catalog

| Pattern | Appropriate use | Review point |
|---|---|---|
| State transition | toggles, selected controls, disclosures | state must remain clear without motion |
| Dialog entrance | opening a short focused task | focus must move correctly and not wait on animation |
| Toast or status entry | brief confirmation | do not hide important errors after a timer |
| Skeleton shimmer | temporary content placeholder | static skeleton must remain useful with reduced motion |
| Scroll reveal | narrative emphasis | content must not be hidden before trigger |
| Shared-element transition | continuity between related views | avoid layout mismatch and focus confusion |
| Progress animation | ongoing known work | represent truthful progress, not invented percentages |
| Drag or reorder feedback | direct manipulation | keyboard alternative and touch behavior required |
| Page transition | route continuity where justified | preserve browser navigation and responsiveness |

Use the smallest implementation that communicates the state. A CSS transition is often sufficient. A timeline library is justified only for coordinated sequences or interactions that are cumbersome to maintain otherwise.
