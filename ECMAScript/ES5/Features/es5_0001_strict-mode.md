# Strict Mode (ES5)

## What it is
Strict mode is a way to opt into a restricted variant of JavaScript that catches common coding mistakes and prevents unsafe actions. It's enabled by adding `"use strict";` at the beginning of a file or function, making JavaScript more predictable and secure.

## Before this feature
Before ES5, JavaScript was very permissive and allowed many problematic patterns that could lead to bugs: accidental global variables, silent failures, and unsafe operations.

```javascript
// ES3 - No strict mode, problematic code runs silently
function calculate() {
  result = 42;  // Forgot 'var' - creates global variable!
}
calculate();
console.log(result);  // 42 (global pollution)

// Deleting variables allowed (but does nothing)
var x = 10;
delete x;  // Silently fails
console.log(x);  // 10 (still exists)

// Writing to read-only properties fails silently
var obj = {};
Object.defineProperty(obj, "name", {
  value: "John",
  writable: false
});
obj.name = "Jane";  // Silently fails
console.log(obj.name);  // "John" (unchanged, but no error!)
```

## After this feature
ES5 introduced strict mode to catch these errors and enforce better coding practices.

```javascript
// ES5 - Strict mode catches errors
"use strict";

function calculate() {
  // result = 42;  // ReferenceError: result is not defined
  var result = 42;  // Must declare variables
  return result;
}

// Can't delete variables
var x = 10;
// delete x;  // SyntaxError in strict mode

// Writing to read-only properties throws error
var obj = {};
Object.defineProperty(obj, "name", {
  value: "John",
  writable: false
});
// obj.name = "Jane";  // TypeError: Cannot assign to read only property
console.log(obj.name);  // "John"

// Function-level strict mode
function strictFunction() {
  "use strict";
  // undeclaredVar = 10;  // Error only in this function
  var declaredVar = 10;
}

// Other strict mode benefits
"use strict";

// this is undefined in regular functions (not window)
function showThis() {
  console.log(this);  // undefined (not global object)
}

// Prevents duplicate parameter names
// function bad(a, a, b) {  // SyntaxError in strict mode
//   return a + b;
// }

// Octal literals not allowed
// var num = 010;  // SyntaxError (octal not allowed)
var num = 8;  // Use decimal instead

// Can't assign to eval or arguments
// eval = 10;  // SyntaxError
// arguments = 10;  // SyntaxError
```

## Why this is better
- **Catches errors early** - Turns silent failures into thrown errors
- **Prevents globals** - Undeclared variables throw errors instead of creating globals
- **Safer this** - `this` is undefined in functions (not global object)
- **Better performance** - Engines can optimize strict mode code better
- **Future-proof** - Reserves keywords for future JavaScript features
- **Secure eval** - Eval doesn't introduce variables into surrounding scope

## Key notes / edge cases
- **File or function scope** - Apply to entire file or individual functions
- **Concatenation issues** - Be careful when concatenating strict and non-strict files
- **Module default** - ES6 modules are always in strict mode automatically
- **Not retroactive** - Only affects code within strict scope
- **Third-party code** - Libraries may not be strict-mode compatible
- **Browser console** - Some browser consoles don't enforce strict mode

## Quick practice

### Practice 1
Write a function without strict mode that accidentally creates a global variable. Then add strict mode and observe the error. Fix the error by properly declaring the variable.

### Practice 2
Create an object with a read-only property using `Object.defineProperty()`. Try to modify it without strict mode (silent fail) and with strict mode (error). Handle the error with try-catch.

### Practice 3
Write two functions: one with strict mode and one without. In each, log the value of `this` when called normally (not as a method). Observe the difference.
