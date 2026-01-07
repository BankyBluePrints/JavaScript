# ES2016 New Features

## 1. Exponentiation Operator (**)

**What it is:** Operator for calculating powers (exponentiation).

**Problem it solves:** `Math.pow()` is verbose and less readable.

**Where it's used:** Browser and Node.js - mathematical calculations.

```javascript
// Calculate power
const result = 2 ** 8; // 256

// Equivalent to Math.pow(2, 8)
const oldWay = Math.pow(2, 8);

// Can be chained
const chained = 2 ** 3 ** 2; // 512 (right-associative: 2 ** (3 ** 2))

// With variables
const base = 3;
const exponent = 4;
const power = base ** exponent; // 81

// Compound assignment
let num = 2;
num **= 3; // num = 8 (2³)
```

**Benefits:**
- More readable than Math.pow()
- Matches mathematical notation
- Supports compound assignment (**=)
- Right-associative like in mathematics

---

## 2. Array.prototype.includes()

**What it is:** Check if an array contains a specific element.

**Problem it solves:** `indexOf()` comparison with -1 is unintuitive, and it can't find NaN.

**Where it's used:** Browser and Node.js - array searching.

```javascript
const fruits = ["apple", "banana", "orange"];

// Check if element exists
fruits.includes("banana"); // true
fruits.includes("grape");  // false

// With start index
fruits.includes("apple", 1); // false (starts search from index 1)

// Handles NaN correctly
const numbers = [1, 2, NaN, 4];
numbers.includes(NaN); // true
numbers.indexOf(NaN);  // -1 (can't find NaN)

// Case-sensitive for strings
const items = ["Apple", "banana"];
items.includes("apple"); // false
items.includes("Apple"); // true
```

**Benefits:**
- More intuitive than indexOf()
- Returns boolean directly
- Can find NaN values
- Cleaner, more readable code
- More semantic intent

---

## When to Use These Features

**Exponentiation Operator:**
- Mathematical calculations
- Graphics and game development
- Scientific computations
- Any power operation

**Array.includes():**
- Checking membership in arrays
- Validation (whitelist/blacklist)
- Feature detection
- Any "does array contain X?" logic

Both features are widely supported and should be used in all modern JavaScript code.
