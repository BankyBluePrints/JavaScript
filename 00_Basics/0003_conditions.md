# Conditions

## Meaning
Conditional statements allow your code to make decisions and execute different code blocks based on whether certain conditions are true or false. The main conditional statements in JavaScript are `if`, `else if`, `else`, and the ternary operator.

## Examples

### Example 1: Basic if Statement
```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
}

let temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside!");
}
```

### Example 2: if-else Statement
```javascript
let score = 75;

if (score >= 60) {
  console.log("You passed!");
} else {
  console.log("You failed.");
}

let isLoggedIn = false;
if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please log in.");
}
```

### Example 3: if-else if-else Chain
```javascript
let grade = 85;

if (grade >= 90) {
  console.log("A - Excellent!");
} else if (grade >= 80) {
  console.log("B - Good job!");
} else if (grade >= 70) {
  console.log("C - Average");
} else if (grade >= 60) {
  console.log("D - Below average");
} else {
  console.log("F - Failed");
}
```

### Example 4: Ternary Operator
```javascript
// Syntax: condition ? valueIfTrue : valueIfFalse
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status);  // "adult"

let score = 55;
let result = score >= 60 ? "Pass" : "Fail";
console.log(result);  // "Fail"

// Nested ternary (use sparingly)
let num = 0;
let sign = num > 0 ? "positive" : num < 0 ? "negative" : "zero";
```

## Common Mistake + Fix

### Mistake: Using Assignment (=) Instead of Comparison (==, ===)
```javascript
// ❌ Wrong - Assignment instead of comparison
let x = 5;
if (x = 10) {  // This assigns 10 to x, doesn't compare!
  console.log("x is 10");  // This will always run
}
console.log(x);  // 10 (x was changed!)
```

### Fix: Use Comparison Operators
```javascript
// ✅ Correct - Use === for comparison
let x = 5;
if (x === 10) {  // Compares x to 10
  console.log("x is 10");
} else {
  console.log("x is not 10");  // This runs
}
console.log(x);  // 5 (x unchanged)

// Use === for strict equality (recommended)
// Use == for loose equality (type coercion)
let num = "5";
console.log(num == 5);   // true (coerces string to number)
console.log(num === 5);  // false (different types)
```

## Practice

### Practice 1
Write a program that takes a number and checks if it's positive, negative, or zero using if-else statements. Log an appropriate message for each case.

### Practice 2
Create a simple grade calculator that takes a score (0-100) and returns a letter grade (A, B, C, D, F) using if-else if-else statements. A: 90+, B: 80-89, C: 70-79, D: 60-69, F: below 60.

### Practice 3
Rewrite the grade calculator from Practice 2 using nested ternary operators. Then compare the readability of both approaches and decide which one is better in this case.
