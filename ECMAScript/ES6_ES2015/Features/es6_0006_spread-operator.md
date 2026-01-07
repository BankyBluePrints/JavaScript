# Spread Operator (ES6)

## What it is
The spread operator (`...`) allows an iterable (like an array or string) to be expanded in places where zero or more arguments or elements are expected. It's used for copying arrays, combining arrays, passing array elements as function arguments, and more.

## Before this feature
Before ES6, operations like copying arrays, combining arrays, or converting array-like objects required verbose methods or loops.

```javascript
// ES5 - Copying arrays
var original = [1, 2, 3];
var copy = original.slice();  // or concat()

// Combining arrays
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var combined = arr1.concat(arr2);

// Passing array as function arguments
var numbers = [5, 10, 15];
var max = Math.max.apply(null, numbers);

// Converting array-like to array
function example() {
  var args = Array.prototype.slice.call(arguments);
}
```

## After this feature
ES6 introduced the spread operator for elegant array and object operations.

```javascript
// ES6 - Spread operator with arrays
const original = [1, 2, 3];
const copy = [...original];
console.log(copy);  // [1, 2, 3]
console.log(copy === original);  // false (different reference)

// Combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);  // [1, 2, 3, 4, 5, 6]

// Insert in middle
const start = [1, 2];
const end = [7, 8];
const result = [...start, 3, 4, 5, 6, ...end];
console.log(result);  // [1, 2, 3, 4, 5, 6, 7, 8]

// Function arguments
const numbers = [5, 10, 15, 20];
const max = Math.max(...numbers);
console.log(max);  // 20

const min = Math.min(...numbers);
console.log(min);  // 5

// Spreading strings
const str = "hello";
const chars = [...str];
console.log(chars);  // ['h', 'e', 'l', 'l', 'o']

// Copying with modification
const nums = [1, 2, 3, 4, 5];
const doubled = [...nums].map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]
console.log(nums);     // [1, 2, 3, 4, 5] (unchanged)

// Removing duplicates (with Set)
const withDuplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(withDuplicates)];
console.log(unique);  // [1, 2, 3, 4, 5]

// Rest parameter in functions
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4, 5));  // 15

// Destructuring with rest
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]

// Object spread (ES2018, but commonly used with ES6)
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged);  // { a: 1, b: 2, c: 3, d: 4 }

// Shallow copy object
const original2 = { x: 1, y: 2 };
const copy2 = { ...original2 };
console.log(copy2);  // { x: 1, y: 2 }

// Override properties
const defaults = { theme: "light", size: "medium" };
const userPrefs = { size: "large" };
const config = { ...defaults, ...userPrefs };
console.log(config);  // { theme: "light", size: "large" }

// Conditional spreading
const includeExtra = true;
const data = {
  name: "John",
  ...(includeExtra && { extra: "data" })
};
console.log(data);  // { name: "John", extra: "data" }

// Array push multiple items
const arr = [1, 2, 3];
const newItems = [4, 5, 6];
arr.push(...newItems);
console.log(arr);  // [1, 2, 3, 4, 5, 6]
```

## Why this is better
- **Concise syntax** - Clean one-liner for common operations
- **Immutability** - Easy to create copies instead of mutating
- **Readability** - Intent clearer than slice/concat
- **Versatile** - Works with arrays, strings, sets, maps
- **Function arguments** - Natural way to pass array elements
- **Composable** - Easy to combine with other ES6 features

## Key notes / edge cases
- **Shallow copy** - Nested objects/arrays still share references
- **Order matters** - Later values override earlier ones in objects
- **Iterable only** - Only works with iterables (arrays, strings, sets, etc.)
- **Performance** - Creates new arrays/objects, consider for large data
- **Not for objects in ES6** - Object spread added in ES2018
- **Arguments vs rest** - Spread expands, rest collects
- **Empty spread** - `[...arr]` where arr is empty gives empty array

## Quick practice

### Practice 1
Create two arrays: `fruits = ['apple', 'banana']` and `vegetables = ['carrot', 'celery']`. Use the spread operator to create a new array containing all items with 'orange' in the middle.

### Practice 2
Write a function that takes any number of numbers as arguments using rest parameters, then returns the average. Test it with different amounts of numbers.

### Practice 3
Given an array `[3, 5, 1, 8, 2]`, use the spread operator with Math.max() and Math.min() to find both the maximum and minimum values in one line each.
