# Functions

## Meaning
Functions are reusable blocks of code that perform a specific task. They help organize code, avoid repetition, and make programs more modular. Functions can accept inputs (parameters) and return outputs (return values).

## Examples

### Example 1: Function Declaration
```javascript
// Basic function
function greet() {
  console.log("Hello, World!");
}
greet();  // Call the function

// Function with parameters
function greetUser(name) {
  console.log("Hello, " + name + "!");
}
greetUser("Alice");  // "Hello, Alice!"
greetUser("Bob");    // "Hello, Bob!"
```

### Example 2: Function with Return Value
```javascript
// Return a value
function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log(sum);  // 8

// Use return value directly
console.log(add(10, 20));  // 30

// Function with multiple returns
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  return "F";
}
```

### Example 3: Function Expression
```javascript
// Function stored in a variable
let multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5));  // 20

// Anonymous function as callback
setTimeout(function() {
  console.log("This runs after 1 second");
}, 1000);
```

### Example 4: Default Parameters (ES6)
```javascript
// Default parameter values
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet("Alice");  // "Hello, Alice!"
greet();         // "Hello, Guest!"

// Multiple defaults
function createUser(name = "Anonymous", age = 18, country = "USA") {
  return { name, age, country };
}

console.log(createUser());                    // { name: "Anonymous", age: 18, country: "USA" }
console.log(createUser("John", 25));          // { name: "John", age: 25, country: "USA" }
console.log(createUser("Jane", 30, "UK"));   // { name: "Jane", age: 30, country: "UK" }
```

## Common Mistake + Fix

### Mistake: Forgetting to Return a Value
```javascript
// ❌ Wrong - Function doesn't return anything
function calculateTotal(price, quantity) {
  let total = price * quantity;
  // Forgot to return!
}

let cost = calculateTotal(10, 5);
console.log(cost);  // undefined
```

### Fix: Always Return When You Need a Value
```javascript
// ✅ Correct - Return the calculated value
function calculateTotal(price, quantity) {
  let total = price * quantity;
  return total;
}

let cost = calculateTotal(10, 5);
console.log(cost);  // 50

// Or return directly
function calculateTotal(price, quantity) {
  return price * quantity;
}
```

## Practice

### Practice 1
Create a function called `isEven` that takes a number as a parameter and returns `true` if the number is even, `false` if odd. Test it with numbers 4, 7, and 0.

### Practice 2
Write a function called `getMax` that takes two numbers as parameters and returns the larger one. Don't use Math.max() - use an if statement. Test it with different pairs of numbers.

### Practice 3
Create a function called `calculateCircleArea` that takes the radius as a parameter and returns the area of a circle (area = π × r²). Use 3.14159 for π. Add a default parameter value of 1 for the radius. Test it with and without arguments.
