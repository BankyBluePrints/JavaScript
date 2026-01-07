# ES6/ES2015 Overview

## What JavaScript Code Looked Like Before ES6

Before ES6, JavaScript code was verbose and had many pain points:

```javascript
// No block scope
var name = "Global";
if (true) {
  var name = "Block"; // Overwrites global!
}
console.log(name); // "Block" - unexpected!

// Verbose functions
var add = function(a, b) {
  return a + b;
};

// Confusing 'this' binding
var obj = {
  name: "John",
  greet: function() {
    setTimeout(function() {
      console.log(this.name); // undefined! 'this' is lost
    }, 100);
  }
};

// No string interpolation
var greeting = "Hello, " + name + "! You have " + count + " messages.";

// Callback hell
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      getMoreData(c, function(d) {
        // ...and so on
      });
    });
  });
});
```

## Common Problems and Limitations

1. **Variable Scoping** - `var` hoisting caused bugs
2. **Function Verbosity** - Functions were wordy
3. **'this' Binding** - Constantly losing context
4. **String Building** - Concatenation was messy
5. **Async Code** - Callback pyramids (hell)
6. **No Modules** - Required external module systems (CommonJS, AMD)
7. **OOP Syntax** - Prototypes were confusing
8. **Parameter Handling** - No defaults, rest params were manual

## Why ES6 Was Introduced

ES6 was a complete modernization of JavaScript:

- **Fix longstanding issues** with scoping and context
- **Match modern languages** in syntax and features
- **Enable large applications** with classes and modules
- **Improve async code** with Promises
- **Reduce boilerplate** with destructuring and defaults
- **Better developer experience** overall

## Impact on Browser, Node.js, and Tooling

- **Browsers:** Chrome 51+, Firefox 54+, Safari 10+, Edge 14+ (full support)
- **Node.js:** Full support in Node.js 6+ (2016)
- **Tooling:** Babel became essential for transpiling ES6 to ES5
- **Build Tools:** Webpack, Rollup emerged for module bundling
- **Standard Target:** Most modern projects use ES6 as minimum

ES6 fundamentally changed how JavaScript is written and taught. It's now considered the baseline for modern JavaScript development.
