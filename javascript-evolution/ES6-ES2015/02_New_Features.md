# ES6/ES2015 New Features

## 1. let and const

**What it is:** Block-scoped variable declarations.

**Problem it solves:** `var` hoisting and function-only scoping.

**Where it's used:** Everywhere - replaces `var` in modern code.

```javascript
let count = 0;        // Reassignable
const MAX = 100;      // Constant (cannot reassign)

if (true) {
  let blockScoped = "inside";
  console.log(blockScoped); // Works
}
// console.log(blockScoped); // Error: not defined
```

---

## 2. Arrow Functions

**What it is:** Concise function syntax with lexical `this` binding.

**Problem it solves:** Verbose function syntax and `this` confusion.

**Where it's used:** Callbacks, array methods, event handlers.

```javascript
// Concise syntax
const add = (a, b) => a + b;

// Lexical this
const obj = {
  name: "John",
  greet: function() {
    setTimeout(() => {
      console.log(this.name); // 'this' preserved!
    }, 100);
  }
};
```

---

## 3. Template Literals

**What it is:** String interpolation and multi-line strings.

**Problem it solves:** Messy string concatenation.

**Where it's used:** Any string building, HTML templates.

```javascript
const name = "John";
const age = 30;

// String interpolation
const greeting = `Hello, ${name}! You are ${age} years old.`;

// Multi-line
const html = `
  <div>
    <h1>${name}</h1>
    <p>Age: ${age}</p>
  </div>
`;
```

---

## 4. Destructuring

**What it is:** Extract values from arrays/objects into variables.

**Problem it solves:** Verbose property/element access.

**Where it's used:** Function parameters, importing, data extraction.

```javascript
// Array destructuring
const [first, second] = [1, 2, 3];

// Object destructuring
const { name, age } = { name: "John", age: 30 };

// Function parameters
function greet({ name, age }) {
  console.log(`${name} is ${age}`);
}
```

---

## 5. Default Parameters

**What it is:** Default values for function parameters.

**Problem it solves:** Manual default value checking.

**Where it's used:** Functions with optional parameters.

```javascript
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

greet(); // "Hello, Guest!"
greet("John"); // "Hello, John!"
```

---

## 6. Rest Parameters

**What it is:** Collect remaining arguments into an array.

**Problem it solves:** Using `arguments` object.

**Where it's used:** Variable-length parameter lists.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3, 4); // 10
```

---

## 7. Spread Operator

**What it is:** Expand arrays/objects into individual elements.

**Problem it solves:** Manual array/object copying and merging.

**Where it's used:** Array manipulation, function calls, object merging.

```javascript
// Array spreading
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Object spreading (ES2018+)
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

// Function arguments
const numbers = [1, 2, 3];
Math.max(...numbers); // 3
```

---

## 8. Classes

**What it is:** Syntactic sugar for prototype-based OOP.

**Problem it solves:** Confusing prototype syntax.

**Where it's used:** Object-oriented programming, React components.

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
}
```

---

## 9. Promises

**What it is:** Native asynchronous programming primitive.

**Problem it solves:** Callback hell, error handling in async code.

**Where it's used:** API calls, file operations, any async operation.

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Chaining
fetchUser()
  .then(user => fetchPosts(user.id))
  .then(posts => console.log(posts))
  .catch(error => console.error(error));
```

---

## 10. Modules

**What it is:** Import/export system for code organization.

**Problem it solves:** Global namespace pollution, dependency management.

**Where it's used:** All modern JavaScript projects.

```javascript
// Export
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}
export default class Calculator {}

// Import
import Calculator, { PI, add } from './math.js';
```

---

## 11. for...of Loop

**What it is:** Iterate over iterable objects.

**Problem it solves:** Verbose array/string iteration.

**Where it's used:** Arrays, strings, Maps, Sets, any iterable.

```javascript
const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value); // 10, 20, 30
}

const str = "hello";
for (const char of str) {
  console.log(char); // h, e, l, l, o
}
```

---

## 12. Map and Set

**What it is:** New data structures.

**Problem it solves:** Objects as maps have limitations, arrays aren't unique.

**Where it's used:** Key-value storage, unique collections.

```javascript
// Map - any type as key
const map = new Map();
map.set('name', 'John');
map.set(1, 'number key');
map.get('name'); // "John"

// Set - unique values
const set = new Set([1, 2, 2, 3]);
console.log(set); // Set {1, 2, 3}
```

---

## 13. Symbols

**What it is:** Unique, immutable primitive values.

**Problem it solves:** Private-like object properties, avoiding name collisions.

**Where it's used:** Library development, meta-programming.

```javascript
const sym = Symbol('description');
const obj = {
  [sym]: 'value'
};

// Symbols don't appear in normal iteration
Object.keys(obj); // []
obj[sym]; // 'value'
```

---

## 14. Generators

**What it is:** Functions that can pause and resume execution.

**Problem it solves:** Complex iteration, lazy evaluation.

**Where it's used:** Custom iterators, async flows (before async/await).

```javascript
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generateNumbers();
gen.next(); // { value: 1, done: false }
gen.next(); // { value: 2, done: false }
gen.next(); // { value: 3, done: false }
gen.next(); // { value: undefined, done: true }
```

---

## 15. Enhanced Object Literals

**What it is:** Shorthand for object properties and methods.

**Problem it solves:** Verbose object creation.

**Where it's used:** Object creation throughout code.

```javascript
const name = "John";
const age = 30;

// Property shorthand
const person = { name, age }; // Same as { name: name, age: age }

// Method shorthand
const obj = {
  greet() {  // Instead of greet: function()
    return "Hello";
  }
};

// Computed property names
const key = "dynamicKey";
const obj2 = {
  [key]: "value"
};
```
