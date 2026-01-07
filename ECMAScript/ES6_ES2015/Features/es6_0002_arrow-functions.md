# Arrow Functions (ES6)

## What it is
Arrow functions provide a concise syntax for writing function expressions. They use the `=>` syntax and have lexical `this` binding, meaning they inherit `this` from their enclosing scope rather than defining their own.

## Before this feature
Before ES6, function expressions were verbose, and `this` binding in callbacks often required workarounds.

```javascript
// ES5 - Traditional function expressions
var numbers = [1, 2, 3, 4, 5];
var doubled = numbers.map(function(n) {
  return n * 2;
});

// 'this' problem in callbacks
var person = {
  name: "John",
  hobbies: ["reading", "coding"],
  showHobbies: function() {
    var self = this;  // Save 'this' reference
    this.hobbies.forEach(function(hobby) {
      console.log(self.name + " likes " + hobby);
    });
  }
};

// Or use bind
var person2 = {
  name: "Alice",
  hobbies: ["gaming", "cooking"],
  showHobbies: function() {
    this.hobbies.forEach(function(hobby) {
      console.log(this.name + " likes " + hobby);
    }.bind(this));
  }
};
```

## After this feature
ES6 introduced arrow functions with concise syntax and lexical `this`.

```javascript
// ES6 - Arrow functions
var numbers = [1, 2, 3, 4, 5];
var doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// Single parameter - parentheses optional
const square = n => n * n;
console.log(square(5));  // 25

// Multiple parameters - need parentheses
const add = (a, b) => a + b;
console.log(add(3, 4));  // 7

// No parameters - need empty parentheses
const greet = () => "Hello!";
console.log(greet());  // "Hello!"

// Multi-line body - need braces and explicit return
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

// Returning object literal - wrap in parentheses
const makePerson = (name, age) => ({
  name: name,
  age: age
});
console.log(makePerson("John", 30));  // {name: "John", age: 30}

// Lexical 'this' - inherits from enclosing scope
const person = {
  name: "John",
  hobbies: ["reading", "coding"],
  showHobbies: function() {
    this.hobbies.forEach(hobby => {
      console.log(this.name + " likes " + hobby);  // 'this' works!
    });
  }
};
person.showHobbies();

// Practical examples
const users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 }
];

// Concise array operations
const names = users.map(user => user.name);
const adults = users.filter(user => user.age >= 30);
const totalAge = users.reduce((sum, user) => sum + user.age, 0);

// Chaining
const result = [1, 2, 3, 4, 5, 6]
  .filter(n => n % 2 === 0)
  .map(n => n * 3)
  .reduce((sum, n) => sum + n, 0);
console.log(result);  // 36

// setTimeout with lexical this
const counter = {
  count: 0,
  start: function() {
    setInterval(() => {
      this.count++;  // 'this' refers to counter
      console.log(this.count);
    }, 1000);
  }
};

// Higher-order functions
const multiplyBy = factor => number => number * factor;
const double = multiplyBy(2);
const triple = multiplyBy(3);
console.log(double(5));  // 10
console.log(triple(5));  // 15
```

## Why this is better
- **Concise syntax** - Less code for simple functions
- **Lexical this** - No more `var self = this` or `.bind(this)`
- **Cleaner callbacks** - Especially with array methods
- **Implicit return** - Single expression returns automatically
- **Better readability** - Intent clearer for short operations
- **Function composition** - Natural for functional programming

## Key notes / edge cases
- **No own this** - Inherits from enclosing scope (can't use bind/call/apply to change it)
- **Not for methods** - Don't use as object methods (use regular functions)
- **No arguments object** - Use rest parameters instead
- **Can't be constructors** - Can't use with `new` keyword
- **Parentheses for objects** - Must wrap object literals: `() => ({ key: value })`
- **Single parameter** - Parentheses optional: `x => x * 2`
- **Multiple statements** - Need braces and explicit return

## Quick practice

### Practice 1
Rewrite these ES5 functions as arrow functions: `function add(a, b) { return a + b; }`, `function square(n) { return n * n; }`, `function greet() { return "Hi"; }`.

### Practice 2
Given an array of numbers `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, use arrow functions with map, filter, and reduce to: filter even numbers, square them, then sum the results.

### Practice 3
Create an object with a counter property and a start method. The start method should use setInterval with an arrow function to increment the counter every second. Observe how `this` behaves compared to using a regular function.
