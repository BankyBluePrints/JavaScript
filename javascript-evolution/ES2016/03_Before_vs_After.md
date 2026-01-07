# ES2016 Before vs After

## Exponentiation Operator

### ❌ Before (ES5/ES6)
```javascript
// Using Math.pow()
var squared = Math.pow(2, 2);     // 4
var cubed = Math.pow(3, 3);        // 27
var result = Math.pow(5, 10);      // 9765625

// Compound operation
var num = 2;
num = Math.pow(num, 3); // 8

// Chaining
var complex = Math.pow(Math.pow(2, 3), 2); // 64
```

### ✅ After (ES2016+)
```javascript
// Using ** operator
const squared = 2 ** 2;     // 4
const cubed = 3 ** 3;       // 27
const result = 5 ** 10;     // 9765625

// Compound assignment
let num = 2;
num **= 3; // 8

// Cleaner chaining
const complex = (2 ** 3) ** 2; // 64
```

### ✔ Benefits
- Shorter, more readable syntax
- Matches mathematical notation (2³)
- Supports compound assignment (**=)
- No function call overhead

---

## Array.includes()

### ❌ Before (ES5/ES6)
```javascript
var fruits = ["apple", "banana", "orange"];

// Check if element exists - unintuitive
var hasBanana = fruits.indexOf("banana") !== -1;
var hasGrape = fruits.indexOf("grape") !== -1;

// Problem: Can't find NaN
var numbers = [1, 2, NaN, 4];
var hasNaN = numbers.indexOf(NaN) !== -1; // false (incorrect!)

// Custom helper function needed
function arrayIncludes(arr, element) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === element || (element !== element && arr[i] !== arr[i])) {
      return true;
    }
  }
  return false;
}

var hasNaN = arrayIncludes(numbers, NaN); // true (correct)
```

### ✅ After (ES2016+)
```javascript
const fruits = ["apple", "banana", "orange"];

// Intuitive boolean check
const hasBanana = fruits.includes("banana"); // true
const hasGrape = fruits.includes("grape");   // false

// Correctly handles NaN
const numbers = [1, 2, NaN, 4];
const hasNaN = numbers.includes(NaN); // true

// No custom function needed!
```

### ✔ Benefits
- Returns boolean directly
- More semantic and readable
- Correctly handles NaN
- No comparison with -1
- Intent is clear

---

## Practical Examples

### Calculator Function

#### ❌ Before
```javascript
function calculatePower(base, exponent) {
  return Math.pow(base, exponent);
}

var result = calculatePower(2, 10); // 1024
```

#### ✅ After
```javascript
function calculatePower(base, exponent) {
  return base ** exponent;
}

const result = calculatePower(2, 10); // 1024
```

---

### Validation Function

#### ❌ Before
```javascript
function isValidStatus(status) {
  var validStatuses = ["pending", "active", "completed", "cancelled"];
  return validStatuses.indexOf(status) !== -1;
}

var isValid = isValidStatus("active"); // true
```

#### ✅ After
```javascript
function isValidStatus(status) {
  const validStatuses = ["pending", "active", "completed", "cancelled"];
  return validStatuses.includes(status);
}

const isValid = isValidStatus("active"); // true
```

---

### Compound Assignment

#### ❌ Before
```javascript
var value = 2;
value = Math.pow(value, 8); // 256

var another = 3;
another = Math.pow(another, another); // 27
```

#### ✅ After
```javascript
let value = 2;
value **= 8; // 256

let another = 3;
another **= another; // 27
```
