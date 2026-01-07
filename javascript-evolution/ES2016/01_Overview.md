# ES2016 Overview

## What JavaScript Code Looked Like Before ES2016

Before ES2016, common operations required more verbose syntax:

```javascript
// Power calculations
var result = Math.pow(2, 8); // 256

// Checking if array contains element
var fruits = ["apple", "banana", "orange"];
var hasBanana = fruits.indexOf("banana") !== -1; // true
var hasGrape = fruits.indexOf("grape") !== -1;   // false
```

## Common Problems and Limitations

1. **Math.pow() Verbosity** - Less readable than mathematical notation
2. **indexOf() for Checking** - Comparing with -1 is unintuitive
3. **NaN Handling** - indexOf() can't properly find NaN values

## Why ES2016 Was Introduced

ES2016 established the **annual release cycle**:

- Small, focused improvements
- Faster feature adoption
- Less breaking changes
- Yearly predictable updates

The features addressed real pain points with minimal syntax additions.

## Impact on Browser, Node.js, and Tooling

- **Browsers:** Chrome 52+, Firefox 48+, Safari 10+, Edge 14+
- **Node.js:** Node.js 7+ (full support)
- **Tooling:** Easy to polyfill, widely supported
- **Adoption:** Quick adoption due to simplicity

ES2016 features are safe to use in all modern environments.
