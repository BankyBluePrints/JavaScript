# ES5 Overview

## What JavaScript Code Looked Like Before ES5

Before ES5 (in the ES3 era), JavaScript had limitations:

- **Manual loops everywhere** - No array iteration methods
- **No JSON support** - Had to use `eval()` or third-party libraries
- **Loose error handling** - Silent failures and unexpected behavior
- **Limited object control** - Couldn't make properties read-only or non-enumerable
- **Verbose array operations** - Simple filtering required complex loops

Example of verbose pre-ES5 code:
```javascript
// Filtering an array in ES3
var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = [];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers[evenNumbers.length] = numbers[i];
  }
}
```

## Common Problems and Limitations

1. **Array Processing** - Required manual loops for filtering, mapping, reducing
2. **No Standard JSON** - Each project used different JSON libraries
3. **Context Binding** - `this` keyword caused constant confusion
4. **Object Immutability** - No way to create read-only properties
5. **Debugging** - Errors were harder to catch without strict mode

## Why ES5 Was Introduced

ES5 was created to:

- **Add functional programming capabilities** with array methods
- **Standardize JSON** across all implementations
- **Make JavaScript safer** with strict mode
- **Improve object manipulation** with fine-grained property control
- **Maintain backward compatibility** while adding power

## Impact on Browser, Node.js, and Tooling

- **Browsers:** Fully supported in IE9+, Chrome 5+, Firefox 4+, Safari 5+
- **Node.js:** Fully supported from Node.js 0.10+ (all current versions)
- **Tooling:** ES5 is the default target for most transpilers when supporting older browsers
- **Standard Target:** For many years, ES5 was the compilation target for production code

ES5 bridged the gap between ES3 and modern JavaScript, making it possible to write cleaner, more maintainable code while still supporting a wide range of browsers.
