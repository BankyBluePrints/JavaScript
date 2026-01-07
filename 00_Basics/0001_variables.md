# Variables

## Meaning
Variables are containers for storing data values. In JavaScript, you can declare variables using `var`, `let`, or `const`. They allow you to store and manipulate data throughout your program.

## Examples

### Example 1: Basic Variable Declaration
```javascript
var name = "John";
let age = 25;
const PI = 3.14159;

console.log(name);  // "John"
console.log(age);   // 25
console.log(PI);    // 3.14159
```

### Example 2: Variable Reassignment
```javascript
let score = 0;
score = 10;      // Allowed with let
score = 20;      // Can reassign multiple times

const MAX_SCORE = 100;
// MAX_SCORE = 200;  // Error! Cannot reassign const
```

### Example 3: Multiple Variable Declaration
```javascript
let firstName = "John", lastName = "Doe", age = 30;

// Or on separate lines
let city = "New York";
let country = "USA";
let zipCode = "10001";
```

### Example 4: Undefined Variables
```javascript
let x;
console.log(x);  // undefined

let y = undefined;  // Explicitly set to undefined
console.log(y);     // undefined
```

## Common Mistake + Fix

### Mistake: Forgetting to Declare Variables
```javascript
// ❌ Wrong - Creates global variable accidentally
function calculateTotal() {
  total = 100;  // No var/let/const - becomes global!
  return total;
}
```

### Fix: Always Declare Variables
```javascript
// ✅ Correct - Use let or const
function calculateTotal() {
  let total = 100;  // Properly scoped to function
  return total;
}

// Or use const if the value won't change
function getMaxScore() {
  const MAX = 100;
  return MAX;
}
```

## Practice

### Practice 1
Create three variables: one for your name (string), one for your age (number), and one for whether you like JavaScript (boolean). Log all three to the console.

### Practice 2
Declare a variable with `let` and reassign it three times with different values. Then try the same with `const` and observe what happens.

### Practice 3
Create a function that calculates the area of a rectangle. Use appropriate variable declarations (const for fixed values, let for values that change). The function should take length and width as parameters and return the area.
