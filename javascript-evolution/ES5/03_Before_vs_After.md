# ES5 Before vs After

This document shows how ES5 features improved JavaScript code compared to ES3.

---

## Array.forEach()

### ❌ Before (ES3)
```javascript
var numbers = [1, 2, 3, 4, 5];

// Manual loop
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

### ✅ After (ES5+)
```javascript
var numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});
```

### ✔ Benefits
- No index management
- Clearer intent
- Less error-prone
- More functional style

---

## Array.map()

### ❌ Before (ES3)
```javascript
var numbers = [1, 2, 3, 4, 5];
var doubled = [];

for (var i = 0; i < numbers.length; i++) {
  doubled[doubled.length] = numbers[i] * 2;
}
```

### ✅ After (ES5+)
```javascript
var numbers = [1, 2, 3, 4, 5];

var doubled = numbers.map(function(n) {
  return n * 2;
});
```

### ✔ Benefits
- One expression instead of loop
- Immutable approach
- Self-documenting
- Chainable with other methods

---

## Array.filter()

### ❌ Before (ES3)
```javascript
var numbers = [1, 2, 3, 4, 5, 6];
var evens = [];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens[evens.length] = numbers[i];
  }
}
```

### ✅ After (ES5+)
```javascript
var numbers = [1, 2, 3, 4, 5, 6];

var evens = numbers.filter(function(n) {
  return n % 2 === 0;
});
```

### ✔ Benefits
- Declarative vs imperative
- Much shorter
- Easier to understand intent
- Less boilerplate

---

## Array.reduce()

### ❌ Before (ES3)
```javascript
var numbers = [1, 2, 3, 4, 5];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
```

### ✅ After (ES5+)
```javascript
var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce(function(total, n) {
  return total + n;
}, 0);
```

### ✔ Benefits
- Single expression
- No mutable variable
- Flexible for complex aggregations
- Functional programming pattern

---

## JSON Parsing

### ❌ Before (ES3)
```javascript
// Unsafe - can execute code!
var jsonString = '{"name":"John","age":30}';
var obj = eval("(" + jsonString + ")");

// OR use third-party library
var obj = parseJSON(jsonString); // Required external library
```

### ✅ After (ES5+)
```javascript
var jsonString = '{"name":"John","age":30}';
var obj = JSON.parse(jsonString);

// And stringify
var json = JSON.stringify(obj);
```

### ✔ Benefits
- Native, no library needed
- Safe - doesn't execute code
- Standardized across platforms
- Built-in error handling

---

## Function.bind()

### ❌ Before (ES3)
```javascript
var obj = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

// Lost context!
var greetFunc = obj.greet;
greetFunc(); // "Hello, undefined"

// Manual workaround
var self = obj;
var greetFunc = function() {
  obj.greet.call(self);
};
```

### ✅ After (ES5+)
```javascript
var obj = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

var greetFunc = obj.greet.bind(obj);
greetFunc(); // "Hello, John"
```

### ✔ Benefits
- Preserves context automatically
- Cleaner code
- Standard pattern
- Works with event handlers

---

## Object.keys()

### ❌ Before (ES3)
```javascript
var obj = { a: 1, b: 2, c: 3 };
var keys = [];

for (var key in obj) {
  if (obj.hasOwnProperty(key)) {
    keys[keys.length] = key;
  }
}
```

### ✅ After (ES5+)
```javascript
var obj = { a: 1, b: 2, c: 3 };
var keys = Object.keys(obj);
```

### ✔ Benefits
- One line instead of loop
- Automatically excludes prototype properties
- Returns array (can use array methods)
- More readable

---

## String.trim()

### ❌ Before (ES3)
```javascript
function trim(str) {
  return str.replace(/^\s+|\s+$/g, "");
}

var input = "  hello  ";
var cleaned = trim(input);
```

### ✅ After (ES5+)
```javascript
var input = "  hello  ";
var cleaned = input.trim();
```

### ✔ Benefits
- Built-in method
- No regex needed
- More reliable
- Easier to read

---

## Array.indexOf()

### ❌ Before (ES3)
```javascript
var fruits = ["apple", "banana", "orange"];

function indexOf(arr, item) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}

var index = indexOf(fruits, "banana");
```

### ✅ After (ES5+)
```javascript
var fruits = ["apple", "banana", "orange"];
var index = fruits.indexOf("banana");
```

### ✔ Benefits
- No custom function needed
- Standard behavior
- One line
- Built-in optimization

---

## Strict Mode

### ❌ Before (ES3)
```javascript
// Silent errors
function calculate() {
  result = 10 * 5; // Accidental global!
  return result;
}

var x = 010; // Octal confusion
delete Object.prototype; // Dangerous!
```

### ✅ After (ES5+)
```javascript
"use strict";

function calculate() {
  result = 10 * 5; // ReferenceError: result is not defined
  return result;
}

var x = 010; // SyntaxError: Octal literals not allowed
delete Object.prototype; // TypeError: Cannot delete property
```

### ✔ Benefits
- Catches accidental globals
- Prevents silent errors
- Disallows dangerous operations
- Better optimization

---

## Object Property Descriptors

### ❌ Before (ES3)
```javascript
var config = {
  apiKey: "secret123"
};

// No way to make it read-only
config.apiKey = "hacked"; // Oops!
```

### ✅ After (ES5+)
```javascript
var config = {};

Object.defineProperty(config, "apiKey", {
  value: "secret123",
  writable: false,
  configurable: false
});

config.apiKey = "hacked"; // Silently fails (throws in strict mode)
console.log(config.apiKey); // "secret123"
```

### ✔ Benefits
- Property-level control
- Immutability support
- Hide implementation details
- Better encapsulation

---

## Getters and Setters

### ❌ Before (ES3)
```javascript
var person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var name = person.getFullName(); // Must call as function
```

### ✅ After (ES5+)
```javascript
var person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(name) {
    var parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

var name = person.fullName; // Access like property
person.fullName = "Jane Smith"; // Set like property
```

### ✔ Benefits
- Property-like syntax
- Computed values
- Validation on set
- Cleaner API
