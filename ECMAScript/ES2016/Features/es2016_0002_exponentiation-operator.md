# Exponentiation Operator (ES2016)

## What it is
The exponentiation operator (`**`) provides a cleaner syntax for raising a number to a power. It's equivalent to `Math.pow()` but more concise and readable, similar to operators in Python and other languages.

## Before this feature
Before ES2016, calculating powers required using the `Math.pow()` function, which was more verbose especially for simple operations.

```javascript
// ES5/ES6 - Using Math.pow()
var squared = Math.pow(5, 2);     // 25
var cubed = Math.pow(2, 3);       // 8
var result = Math.pow(10, -2);    // 0.01

// Complex expressions
var formula = Math.pow(2, Math.pow(3, 2));  // 2^(3^2) = 512

// In calculations
var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
```

## After this feature
ES2016 introduced the `**` operator for cleaner exponentiation.

```javascript
// ES2016 - Exponentiation operator
const squared = 5 ** 2;      // 25
const cubed = 2 ** 3;        // 8
const result = 10 ** -2;     // 0.01

console.log(2 ** 4);         // 16
console.log(3 ** 3);         // 27
console.log(10 ** 6);        // 1000000

// Negative exponents
console.log(2 ** -1);        // 0.5
console.log(10 ** -3);       // 0.001

// Fractional exponents (roots)
console.log(9 ** 0.5);       // 3 (square root)
console.log(8 ** (1/3));     // 2 (cube root)
console.log(16 ** 0.25);     // 2 (fourth root)

// Complex expressions
const nested = 2 ** (3 ** 2);     // 2^(3^2) = 512
console.log(nested);

// Right associative
console.log(2 ** 3 ** 2);         // 512 (same as 2 ** (3 ** 2))

// In formulas
const x1 = 3, y1 = 4;
const x2 = 6, y2 = 8;
const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log(distance);  // 5

// Assignment operator
let base = 2;
base **= 3;  // base = base ** 3
console.log(base);  // 8

let num = 5;
num **= 2;  // num = num ** 2
console.log(num);  // 25

// Practical examples

// Calculate compound interest
const principal = 1000;
const rate = 0.05;
const years = 10;
const amount = principal * (1 + rate) ** years;
console.log(amount);  // 1628.89

// Binary to decimal
const binary = '1011';
const decimal = binary
  .split('')
  .reverse()
  .reduce((sum, bit, i) => sum + bit * (2 ** i), 0);
console.log(decimal);  // 11

// Area of circle
const radius = 5;
const area = Math.PI * radius ** 2;
console.log(area);  // 78.54

// Volume of sphere
const volume = (4/3) * Math.PI * radius ** 3;
console.log(volume);  // 523.60

// Comparing with Math.pow()
console.log(2 ** 10 === Math.pow(2, 10));        // true
console.log(5 ** 3 === Math.pow(5, 3));          // true
console.log(10 ** -2 === Math.pow(10, -2));      // true

// In array operations
const powers = [1, 2, 3, 4, 5].map(n => 2 ** n);
console.log(powers);  // [2, 4, 8, 16, 32]

// Scientific notation
const scientific = 1.5 * 10 ** 8;  // 150,000,000
console.log(scientific);

// Geometric series
function geometricSum(a, r, n) {
  return a * (1 - r ** n) / (1 - r);
}
console.log(geometricSum(2, 3, 5));  // Sum of 2 + 6 + 18 + 54 + 162
```

## Why this is better
- **Concise syntax** - `a ** b` vs `Math.pow(a, b)`
- **More readable** - Especially in complex formulas
- **Familiar** - Similar to Python, Ruby, and other languages
- **Operator precedence** - Works naturally in expressions
- **Assignment operator** - Can use `**=` for compound assignment
- **Chainable** - Right-associative for natural exponentiation chains

## Key notes / edge cases
- **Right associative** - `2 ** 3 ** 2` equals `2 ** (3 ** 2)`, not `(2 ** 3) ** 2`
- **Unary minus** - Can't use directly: `(-5) ** 2` not `-5 ** 2` (SyntaxError)
- **Precedence** - Higher than `*`, `/`, `%` but lower than unary operators
- **BigInt support** - Works with BigInt in ES2020+
- **NaN results** - Negative base with fractional exponent gives NaN
- **Infinity** - Very large exponents can produce Infinity
- **Performance** - Similar to Math.pow() in modern engines

## Quick practice

### Practice 1
Calculate the following using the `**` operator: 2 to the 8th power, 10 to the -3rd power, and the square root of 144 (hint: use fractional exponent).

### Practice 2
Write a function `calculateCompoundInterest(principal, rate, years)` that calculates compound interest using the exponentiation operator. Formula: A = P(1 + r)^t. Test with principal=1000, rate=0.06, years=5.

### Practice 3
Create an array of numbers [1, 2, 3, 4, 5]. Use map() with the ** operator to create a new array where each number is raised to its own power (1^1, 2^2, 3^3, etc.). Log the result.
