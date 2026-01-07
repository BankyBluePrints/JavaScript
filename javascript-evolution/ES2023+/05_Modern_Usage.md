# ES2023 Modern Usage

## Immutable Array Methods

Use when you need to preserve original arrays:
- React/Vue state management
- Functional programming
- Any immutable data patterns

```javascript
// React pattern
const newItems = items.toSorted((a, b) => a.price - b.price);
setState({ items: newItems });
```

## findLast/findLastIndex

Use when searching from the end is more efficient or semantically correct.

Support: Chrome 110+, Firefox 104+, Safari 16+, Node.js 20+
