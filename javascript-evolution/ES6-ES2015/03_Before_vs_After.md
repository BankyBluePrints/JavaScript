# ES6/ES2015 Before vs After

This document shows how ES6 features dramatically improved JavaScript code compared to ES5.

---

## let and const

### ❌ Before (ES5)
```javascript
var count = 0;
var MAX = 100; // Can be reassigned accidentally

// No block scope - leaks
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // Always prints 5!
  }, 100);
}
console.log(i); // 5 - leaked from loop!
```

### ✅ After (ES6+)
```javascript
let count = 0;
const MAX = 100; // Cannot be reassigned

// Block scoped - no leak
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // Prints 0, 1, 2, 3, 4
  }, 100);
}
// console.log(i); // Error: i is not defined
```

### ✔ Benefits
- Block scoping prevents bugs
- const prevents accidental reassignment
- More predictable code
- No hoisting confusion

---

## Arrow Functions

### ❌ Before (ES5)
```javascript
// Verbose function syntax
var numbers = [1, 2, 3];
var doubled = numbers.map(function(n) {
  return n * 2;
});

// 'this' binding problems
var person = {
  name: "John",
  friends: ["Jane", "Bob"],
  printFriends: function() {
    var self = this; // Workaround!
    this.friends.forEach(function(friend) {
      console.log(self.name + " knows " + friend);
    });
  }
};
```

### ✅ After (ES6+)
```javascript
// Concise syntax
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);

// Lexical 'this' - no workaround needed
const person = {
  name: "John",
  friends: ["Jane", "Bob"],
  printFriends() {
    this.friends.forEach(friend => {
      console.log(`${this.name} knows ${friend}`);
    });
  }
};
```

### ✔ Benefits
- Much shorter syntax
- Automatic 'this' binding
- Cleaner callbacks
- Implicit return for single expressions

---

## Template Literals

### ❌ Before (ES5)
```javascript
var name = "John";
var age = 30;
var greeting = "Hello, " + name + "! You are " + age + " years old.";

// Multi-line strings
var html = "<div>\n" +
  "  <h1>" + title + "</h1>\n" +
  "  <p>" + content + "</p>\n" +
  "</div>";
```

### ✅ After (ES6+)
```javascript
const name = "John";
const age = 30;
const greeting = `Hello, ${name}! You are ${age} years old.`;

// Multi-line strings
const html = `
  <div>
    <h1>${title}</h1>
    <p>${content}</p>
  </div>
`;
```

### ✔ Benefits
- No concatenation needed
- Expressions in strings
- Natural multi-line strings
- Much more readable

---

## Destructuring

### ❌ Before (ES5)
```javascript
// Extracting from objects
var user = { name: "John", age: 30, email: "john@example.com" };
var name = user.name;
var age = user.age;
var email = user.email;

// Extracting from arrays
var coords = [10, 20];
var x = coords[0];
var y = coords[1];

// Function with many parameters
function createUser(name, age, email, city, country) {
  // ...
}
createUser("John", 30, "john@example.com", "NYC", "USA");
```

### ✅ After (ES6+)
```javascript
// Object destructuring
const user = { name: "John", age: 30, email: "john@example.com" };
const { name, age, email } = user;

// Array destructuring
const coords = [10, 20];
const [x, y] = coords;

// Function with object parameter
function createUser({ name, age, email, city, country }) {
  // ...
}
createUser({
  name: "John",
  age: 30,
  email: "john@example.com",
  city: "NYC",
  country: "USA"
});
```

### ✔ Benefits
- Less repetitive code
- Named function parameters
- Easier to read
- Swap variables easily

---

## Default Parameters

### ❌ Before (ES5)
```javascript
function greet(name, greeting) {
  name = name || "Guest";
  greeting = greeting || "Hello";
  return greeting + ", " + name + "!";
}

// Problem: 0, false, "" are falsy!
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}
```

### ✅ After (ES6+)
```javascript
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

// Correctly handles falsy values
function multiply(a, b = 1) {
  return a * b;
}
multiply(5, 0); // 0 (correct!)
```

### ✔ Benefits
- Clearer intent
- Handles falsy values correctly
- Less boilerplate
- Self-documenting

---

## Rest and Spread

### ❌ Before (ES5)
```javascript
// Variable arguments
function sum() {
  var numbers = Array.prototype.slice.call(arguments);
  return numbers.reduce(function(total, n) {
    return total + n;
  }, 0);
}

// Combining arrays
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var combined = arr1.concat(arr2);

// Copying arrays
var original = [1, 2, 3];
var copy = original.slice();
```

### ✅ After (ES6+)
```javascript
// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

// Copying arrays
const original = [1, 2, 3];
const copy = [...original];
```

### ✔ Benefits
- Natural array syntax
- No arguments object needed
- Cleaner array operations
- More intuitive

---

## Classes

### ❌ Before (ES5)
```javascript
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return "Hello, I'm " + this.name;
};

// Inheritance
function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  return this.name + " is studying";
};
```

### ✅ After (ES6+)
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return `Hello, I'm ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  
  study() {
    return `${this.name} is studying`;
  }
}
```

### ✔ Benefits
- Familiar OOP syntax
- Much cleaner inheritance
- Easier to understand
- Less boilerplate

---

## Promises

### ❌ Before (ES5)
```javascript
// Callback hell
function getUserData(userId, callback) {
  fetchUser(userId, function(err, user) {
    if (err) {
      callback(err);
      return;
    }
    fetchPosts(user.id, function(err, posts) {
      if (err) {
        callback(err);
        return;
      }
      fetchComments(posts[0].id, function(err, comments) {
        if (err) {
          callback(err);
          return;
        }
        callback(null, { user: user, posts: posts, comments: comments });
      });
    });
  });
}
```

### ✅ After (ES6+)
```javascript
function getUserData(userId) {
  return fetchUser(userId)
    .then(user => fetchPosts(user.id))
    .then(posts => fetchComments(posts[0].id))
    .then(comments => ({ user, posts, comments }))
    .catch(error => console.error(error));
}
```

### ✔ Benefits
- Flat, readable structure
- Better error handling
- Chainable operations
- No callback pyramids

---

## Modules

### ❌ Before (ES5)
```javascript
// In math.js - Using IIFE and global object
(function(global) {
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  global.Math = {
    add: add,
    subtract: subtract
  };
})(window);

// In app.js
var result = Math.add(1, 2);

// OR using CommonJS (Node.js)
// math.js
module.exports = {
  add: function(a, b) { return a + b; }
};

// app.js
var math = require('./math');
```

### ✅ After (ES6+)
```javascript
// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export default class Calculator {
  // ...
}

// app.js
import Calculator, { add, subtract } from './math.js';
const result = add(1, 2);
```

### ✔ Benefits
- Native module system
- Clear dependencies
- Tree-shakeable
- No global pollution

---

## for...of Loop

### ❌ Before (ES5)
```javascript
var arr = [10, 20, 30];

// for loop - verbose
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// forEach - no break/continue
arr.forEach(function(value) {
  console.log(value);
  // Can't break or continue!
});
```

### ✅ After (ES6+)
```javascript
const arr = [10, 20, 30];

for (const value of arr) {
  console.log(value);
  // Can use break and continue!
}

// Works with strings, Maps, Sets, etc.
for (const char of "hello") {
  console.log(char);
}
```

### ✔ Benefits
- Cleaner syntax
- Works with any iterable
- Can use break/continue
- More readable than for loop

---

## Object Enhancements

### ❌ Before (ES5)
```javascript
var name = "John";
var age = 30;

var person = {
  name: name,
  age: age,
  greet: function() {
    return "Hello";
  }
};

// Computed keys
var key = "dynamicKey";
var obj = {};
obj[key] = "value";
```

### ✅ After (ES6+)
```javascript
const name = "John";
const age = 30;

const person = {
  name,  // Shorthand
  age,
  greet() {  // Method shorthand
    return "Hello";
  }
};

// Computed property names
const key = "dynamicKey";
const obj = {
  [key]: "value"
};
```

### ✔ Benefits
- Less repetition
- Cleaner syntax
- Computed keys inline
- More concise
