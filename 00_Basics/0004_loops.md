# Loops

## Meaning
Loops allow you to execute a block of code multiple times. JavaScript provides several types of loops: `for`, `while`, `do-while`, and specialized loops like `for...in` and `for...of`. They help automate repetitive tasks and iterate through data structures.

## Examples

### Example 1: for Loop
```javascript
// Basic for loop - count from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}
// Output: Count: 1, Count: 2, Count: 3, Count: 4, Count: 5

// Loop through an array
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

### Example 2: while Loop
```javascript
// while loop - executes while condition is true
let count = 0;
while (count < 5) {
  console.log("Count: " + count);
  count++;
}

// Example: Keep doubling until > 100
let num = 1;
while (num <= 100) {
  console.log(num);
  num *= 2;
}
// Output: 1, 2, 4, 8, 16, 32, 64
```

### Example 3: do-while Loop
```javascript
// do-while - executes at least once, then checks condition
let i = 0;
do {
  console.log("Count: " + i);
  i++;
} while (i < 5);

// Useful when you need at least one execution
let input;
do {
  input = prompt("Enter a number greater than 10:");
} while (input <= 10);
```

### Example 4: for...of Loop (ES6)
```javascript
// for...of - iterate over array values
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

// Works with strings too
let name = "JavaScript";
for (let char of name) {
  console.log(char);
}
```

## Common Mistake + Fix

### Mistake: Infinite Loop (Forgetting to Update Counter)
```javascript
// ❌ Wrong - Infinite loop (i never increases)
let i = 0;
while (i < 5) {
  console.log(i);
  // Forgot to increment i!
}
// This will print 0 forever and crash the browser
```

### Fix: Always Update Loop Counter
```javascript
// ✅ Correct - Update counter in loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;  // Increment counter!
}

// Or use for loop (harder to forget)
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Use break as safety net if needed
let count = 0;
while (true) {
  console.log(count);
  count++;
  if (count >= 5) break;  // Exit loop
}
```

## Practice

### Practice 1
Write a for loop that prints all even numbers from 0 to 20. Then modify it to print odd numbers from 1 to 19.

### Practice 2
Create a program using a while loop that calculates the sum of all numbers from 1 to 100. Store the result in a variable and log it at the end.

### Practice 3
Given an array of numbers `[3, 7, 2, 9, 1, 5, 8]`, use a for...of loop to find and log the largest number in the array. Don't use Math.max() - solve it with a loop.
