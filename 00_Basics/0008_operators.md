# Operators

## Meaning
Operators are symbols that perform operations on values and variables. JavaScript has arithmetic operators (+, -, *, /), comparison operators (==, ===, <, >), logical operators (&&, ||, !), and assignment operators (=, +=, -=). They're fundamental for performing calculations and making decisions.

## Examples

### Example 1: Arithmetic Operators
```javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13 (addition)
console.log(a - b);   // 7 (subtraction)
console.log(a * b);   // 30 (multiplication)
console.log(a / b);   // 3.333... (division)
console.log(a % b);   // 1 (modulus - remainder)
console.log(a ** b);  // 1000 (exponentiation - ES2016)

// Increment and decrement
let count = 5;
count++;  // 6
count--;  // 5
```

### Example 2: Comparison Operators
```javascript
let x = 5;
let y = "5";

console.log(x == y);    // true (loose equality - type coercion)
console.log(x === y);   // false (strict equality - no coercion)
console.log(x != y);    // false (loose inequality)
console.log(x !== y);   // true (strict inequality)

console.log(x > 3);     // true
console.log(x < 10);    // true
console.log(x >= 5);    // true
console.log(x <= 4);    // false
```

### Example 3: Logical Operators
```javascript
let age = 25;
let hasLicense = true;

// AND (&&) - both must be true
if (age >= 18 && hasLicense) {
  console.log("Can drive");
}

// OR (||) - at least one must be true
let isWeekend = false;
let isHoliday = true;
if (isWeekend || isHoliday) {
  console.log("Day off!");
}

// NOT (!) - inverts boolean
let isRaining = false;
if (!isRaining) {
  console.log("Go outside");
}
```

### Example 4: Assignment Operators
```javascript
let num = 10;

num += 5;   // num = num + 5; (15)
num -= 3;   // num = num - 3; (12)
num *= 2;   // num = num * 2; (24)
num /= 4;   // num = num / 4; (6)
num %= 4;   // num = num % 4; (2)

// Logical assignment (ES2021)
let value = null;
value ??= 10;  // Assign if nullish (null or undefined)
console.log(value);  // 10

let count = 0;
count ||= 5;  // Assign if falsy
console.log(count);  // 5
```

## Common Mistake + Fix

### Mistake: Using == Instead of ===
```javascript
// ❌ Problematic - loose equality causes unexpected results
console.log(0 == false);      // true (type coercion!)
console.log("" == false);     // true
console.log(null == undefined);  // true
console.log("5" == 5);        // true

// This can cause bugs
let userInput = "0";
if (userInput == 0) {  // true! String "0" coerced to number
  console.log("Input is zero");
}
```

### Fix: Use === for Strict Equality
```javascript
// ✅ Correct - strict equality avoids coercion
console.log(0 === false);      // false
console.log("" === false);     // false
console.log(null === undefined);  // false
console.log("5" === 5);        // false

// More predictable behavior
let userInput = "0";
if (userInput === 0) {  // false - different types
  console.log("Input is zero");
} else {
  console.log("Input is not zero");  // This runs
}

// If you need to compare values of different types, convert first
if (Number(userInput) === 0) {
  console.log("Input is zero");
}
```

## Practice

### Practice 1
Create variables for price (100), discount (20), and tax rate (0.08). Calculate the final price: apply discount percentage, then add tax. Use compound assignment operators where possible.

### Practice 2
Write conditions using logical operators to check: 1) if a number is between 10 and 20 (inclusive), 2) if a string is either "yes" or "y", 3) if a value is NOT null or undefined.

### Practice 3
Compare the following pairs using both == and ===, predict the results, then verify: (1, "1"), (true, 1), (false, 0), (null, undefined), ([], false). Explain why the results differ.
