# Let and Const (ES6)

## What it is
ES6 introduced `let` and `const` as new ways to declare variables with block scope. `let` allows reassignment while `const` creates read-only references. They replace the problematic `var` keyword for modern JavaScript development.

## Before this feature
Before ES6, `var` was the only way to declare variables, causing issues with function-scoping, hoisting, and accidental global pollution.

```javascript
// ES5 - var with problems
function example() {
  var x = 10;
  if (true) {
    var x = 20;  // Same variable! Overwrites outer x
    console.log(x);  // 20
  }
  console.log(x);  // 20 (not 10!)
}

// Hoisting confusion
console.log(y);  // undefined (not error)
var y = 5;

// Loop variable leaking
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);  // 3, 3, 3 (not 0, 1, 2)
  }, 100);
}
console.log(i);  // 3 (i leaked out of loop!)

// Accidental globals
function oops() {
  result = 42;  // Forgot var, creates global!
}
```

## After this feature
ES6 introduced `let` and `const` with block scope and temporal dead zone.

```javascript
// ES6 - let and const with block scope
function example() {
  let x = 10;
  if (true) {
    let x = 20;  // Different variable, block-scoped
    console.log(x);  // 20
  }
  console.log(x);  // 10 (outer x unchanged)
}

// const for constants
const PI = 3.14159;
// PI = 3.14;  // TypeError: Assignment to constant variable

const user = { name: "John" };
user.name = "Jane";  // OK - object properties can change
// user = {};  // TypeError - can't reassign const

// No hoisting access (temporal dead zone)
// console.log(z);  // ReferenceError (not undefined)
let z = 5;

// Loop with let - each iteration gets new binding
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);  // 0, 1, 2 (correct!)
  }, 100);
}
// console.log(i);  // ReferenceError: i not defined

// Block scope examples
{
  let blockScoped = "inside";
  const BLOCK_CONST = 42;
  console.log(blockScoped);  // "inside"
}
// console.log(blockScoped);  // ReferenceError

// Practical: Function parameters
function processItems(items) {
  for (let i = 0; i < items.length; i++) {
    let item = items[i];  // New binding each iteration
    // Process item
  }
  // i and item not accessible here
}

// const with arrays
const numbers = [1, 2, 3];
numbers.push(4);  // OK - array can be modified
console.log(numbers);  // [1, 2, 3, 4]
// numbers = [];  // TypeError - can't reassign

// Best practice: Default to const
const MAX_USERS = 100;
const API_URL = "https://api.example.com";
let currentCount = 0;  // Use let only when reassignment needed

// Switch case block scope
const value = 2;
switch (value) {
  case 1: {
    const result = "one";  // Block-scoped to this case
    break;
  }
  case 2: {
    const result = "two";  // Different result variable
    console.log(result);
    break;
  }
}
```

## Why this is better
- **Block scope** - Variables scoped to nearest `{}` block, not function
- **No hoisting access** - Can't use before declaration (temporal dead zone)
- **Immutable bindings** - const prevents reassignment accidents
- **Loop closures work** - Each iteration gets new binding with let
- **Clearer intent** - const signals "won't change", let signals "may change"
- **Fewer bugs** - Prevents accidental reassignment and scope leaks

## Key notes / edge cases
- **const is not immutable** - Object/array contents can still change
- **Temporal dead zone** - ReferenceError if accessed before declaration
- **No redeclaration** - Can't redeclare let/const in same scope
- **Block scope everywhere** - if, for, while, try/catch, switch, standalone blocks
- **Performance** - Engines can optimize const better
- **Best practice** - Use const by default, let when reassignment needed, avoid var
- **Destructuring** - Works with const/let for clean assignments

## Quick practice

### Practice 1
Write a function with an if statement. Declare a variable with var in the if block, then with let. Try to access both outside the if block and observe the difference.

### Practice 2
Create a loop that creates 5 setTimeout calls. Use var for the loop variable first (observe the bug), then fix it with let. Explain why the behavior changes.

### Practice 3
Declare a const object with properties name and age. Try to: 1) change a property value, 2) add a new property, 3) reassign the entire object. Note which operations succeed and which fail.
