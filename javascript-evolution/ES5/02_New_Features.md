# ES5 New Features

## 1. Strict Mode

**What it is:** A way to opt into a restricted variant of JavaScript.

**Problem it solves:** Catches common mistakes and prevents unsafe actions.

**Where it's used:** Browser and Node.js - essential for production code.

```javascript
"use strict";
// Prevents accidental globals
x = 10; // ReferenceError: x is not defined
```

---

## 2. JSON Methods

**What it is:** Native `JSON.parse()` and `JSON.stringify()` methods.

**Problem it solves:** No need for third-party JSON libraries or unsafe `eval()`.

**Where it's used:** Browser and Node.js - critical for data exchange.

```javascript
var obj = { name: "John", age: 30 };
var json = JSON.stringify(obj); // Convert to JSON string
var parsed = JSON.parse(json);   // Convert back to object
```

---

## 3. Array Iteration Methods

**What it is:** Built-in methods for working with arrays functionally.

**Problem it solves:** Eliminates need for manual loops in common operations.

**Where it's used:** Browser and Node.js - fundamental to modern JavaScript.

### forEach()
Loop through array items:
```javascript
var arr = [1, 2, 3];
arr.forEach(function(item) {
  console.log(item);
});
```

### map()
Transform each item:
```javascript
var numbers = [1, 2, 3];
var doubled = numbers.map(function(n) {
  return n * 2;
}); // [2, 4, 6]
```

### filter()
Select items matching condition:
```javascript
var numbers = [1, 2, 3, 4, 5];
var evens = numbers.filter(function(n) {
  return n % 2 === 0;
}); // [2, 4]
```

### reduce()
Combine array items into single value:
```javascript
var numbers = [1, 2, 3, 4];
var sum = numbers.reduce(function(total, n) {
  return total + n;
}, 0); // 10
```

### every()
Check if all items match condition:
```javascript
var numbers = [2, 4, 6];
var allEven = numbers.every(function(n) {
  return n % 2 === 0;
}); // true
```

### some()
Check if any item matches condition:
```javascript
var numbers = [1, 2, 3];
var hasEven = numbers.some(function(n) {
  return n % 2 === 0;
}); // true
```

---

## 4. Array Methods (indexOf, lastIndexOf)

**What it is:** Find index of an element in array.

**Problem it solves:** No need to loop to find elements.

**Where it's used:** Browser and Node.js - for array searching.

```javascript
var fruits = ["apple", "banana", "orange"];
var index = fruits.indexOf("banana"); // 1
var notFound = fruits.indexOf("grape"); // -1
```

---

## 5. String Methods

**What it is:** `trim()` removes whitespace from both ends.

**Problem it solves:** Easy cleanup of user input.

**Where it's used:** Browser and Node.js - form processing.

```javascript
var str = "  hello  ";
var cleaned = str.trim(); // "hello"
```

---

## 6. Function.prototype.bind()

**What it is:** Create a function with a specific `this` context.

**Problem it solves:** Solves the common problem of losing `this` in callbacks.

**Where it's used:** Browser and Node.js - event handlers, callbacks.

```javascript
var obj = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

var greetFunc = obj.greet.bind(obj);
setTimeout(greetFunc, 1000); // "Hello, John" after 1 second
```

---

## 7. Object Methods

**What it is:** Enhanced object manipulation capabilities.

**Problem it solves:** Fine-grained control over object properties.

**Where it's used:** Browser and Node.js - library development, frameworks.

### Object.create()
Create object with specific prototype:
```javascript
var person = {
  greet: function() {
    console.log("Hello");
  }
};
var john = Object.create(person);
john.greet(); // "Hello"
```

### Object.keys()
Get array of object's own property names:
```javascript
var obj = { a: 1, b: 2, c: 3 };
var keys = Object.keys(obj); // ["a", "b", "c"]
```

### Object.defineProperty()
Define property with specific attributes:
```javascript
var obj = {};
Object.defineProperty(obj, "name", {
  value: "John",
  writable: false,  // Read-only
  enumerable: true,
  configurable: false
});
```

### Object.seal()
Prevent adding/removing properties:
```javascript
var obj = { name: "John" };
Object.seal(obj);
obj.age = 30; // Fails in strict mode
```

### Object.freeze()
Make object completely immutable:
```javascript
var obj = { name: "John" };
Object.freeze(obj);
obj.name = "Jane"; // Fails in strict mode
```

---

## 8. Property Getters and Setters

**What it is:** Define computed properties with custom logic.

**Problem it solves:** Encapsulation and validation when accessing properties.

**Where it's used:** Browser and Node.js - object-oriented programming.

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

console.log(person.fullName); // "John Doe"
person.fullName = "Jane Smith";
console.log(person.firstName); // "Jane"
```

---

## 9. Array.isArray()

**What it is:** Reliable way to check if value is an array.

**Problem it solves:** `typeof` returns "object" for arrays.

**Where it's used:** Browser and Node.js - type checking.

```javascript
Array.isArray([1, 2, 3]); // true
Array.isArray("hello");    // false
Array.isArray({ length: 0 }); // false
```

---

## 10. Date.now()

**What it is:** Get current timestamp quickly.

**Problem it solves:** Simpler than `new Date().getTime()`.

**Where it's used:** Browser and Node.js - timing, timestamps.

```javascript
var timestamp = Date.now(); // 1234567890123
```
