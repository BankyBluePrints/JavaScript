# ES2018 Overview

## What JavaScript Code Looked Like Before ES2018

Before ES2018, object spreading required workarounds, and async iteration was complex:

```javascript
// Object copying - used Object.assign()
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original);

// Merging objects
const defaults = { theme: "light" };
const user = { name: "John" };
const config = Object.assign({}, defaults, user);

// Async iteration - no built-in support
function processAsyncIterator(iterator) {
  return iterator.next().then(function handleNext(result) {
    if (result.done) {
      return;
    }
    processItem(result.value);
    return iterator.next().then(handleNext);
  });
}
```

## Common Problems and Limitations

1. **No Object Spread** - Object.assign() was verbose
2. **No Async Iteration** - Manual promise chains for async loops
3. **No Promise.finally()** - Cleanup code was duplicated
4. **RegExp Limitations** - Complex patterns were hard to write

## Why ES2018 Was Introduced

ES2018 completed patterns started in ES6:

- **Object spread/rest** to match array spread
- **Async iteration** to match regular iteration
- **Promise.finally()** for proper cleanup
- **RegExp improvements** for modern text processing

## Impact on Browser, Node.js, and Tooling

- **Browsers:** Chrome 60+, Firefox 55+, Safari 11.1+, Edge 79+
- **Node.js:** Node.js 8.6+ (object spread), Node.js 10+ (full support)
- **React/Vue:** Object spread immediately essential for state management
- **Standard:** Object spread is now ubiquitous in modern code

ES2018 features, especially object spread, are fundamental to modern JavaScript.
