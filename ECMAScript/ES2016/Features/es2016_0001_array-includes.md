# Array.includes (ES2016)

## What it is
The `Array.prototype.includes()` method determines whether an array contains a specific element, returning `true` or `false`. It provides a cleaner and more semantic alternative to `indexOf()` for checking array membership.

## Before this feature
Before ES2016, checking if an array contained an element required using `indexOf()` and comparing to -1, which was less intuitive.

```javascript
// ES5/ES6 - Using indexOf
var fruits = ['apple', 'banana', 'orange'];

if (fruits.indexOf('banana') !== -1) {
  console.log('Found banana');
}

if (fruits.indexOf('grape') === -1) {
  console.log('No grape');
}

// Problem with indexOf and NaN
var numbers = [1, 2, NaN, 4];
console.log(numbers.indexOf(NaN));  // -1 (can't find NaN!)

// Verbose and easy to forget the !== -1
var hasItem = fruits.indexOf('apple') !== -1;
```

## After this feature
ES2016 introduced `includes()` for clearer and more semantic array membership checking.

```javascript
// ES2016 - includes method
const fruits = ['apple', 'banana', 'orange'];

if (fruits.includes('banana')) {
  console.log('Found banana');
}

if (!fruits.includes('grape')) {
  console.log('No grape');
}

// Returns boolean directly
const hasBanana = fruits.includes('banana');  // true
const hasGrape = fruits.includes('grape');     // false

// Works with NaN!
const numbers = [1, 2, NaN, 4];
console.log(numbers.includes(NaN));  // true (correctly finds NaN)

// Case sensitive
const words = ['Hello', 'World'];
console.log(words.includes('hello'));  // false (case sensitive)

// Starting index (fromIndex)
const nums = [1, 2, 3, 4, 5, 3, 2, 1];
console.log(nums.includes(3));      // true
console.log(nums.includes(3, 4));   // true (searches from index 4)
console.log(nums.includes(3, 6));   // false (searches from index 6)

// Negative index (counts from end)
console.log(nums.includes(2, -3));  // true (starts 3 from end)

// Practical examples
const userRoles = ['admin', 'editor', 'viewer'];

function hasPermission(role) {
  return userRoles.includes(role);
}

console.log(hasPermission('admin'));    // true
console.log(hasPermission('guest'));    // false

// Validation
function validateInput(value) {
  const validOptions = ['yes', 'no', 'maybe'];
  
  if (!validOptions.includes(value)) {
    throw new Error('Invalid option');
  }
  
  return value;
}

// Filtering with includes
const allowedTags = ['javascript', 'react', 'node'];
const postTags = ['javascript', 'python', 'react', 'ruby'];

const validTags = postTags.filter(tag => allowedTags.includes(tag));
console.log(validTags);  // ['javascript', 'react']

// Checking multiple values
const values = [1, 2, 3, 4, 5];
const hasAny = [3, 6, 9].some(num => values.includes(num));
console.log(hasAny);  // true (3 is in values)

const hasAll = [1, 2, 3].every(num => values.includes(num));
console.log(hasAll);  // true (all are in values)

// Empty array
const empty = [];
console.log(empty.includes(1));  // false

// With undefined
const mixed = [1, undefined, 3];
console.log(mixed.includes(undefined));  // true
```

## Why this is better
- **More readable** - Intent clearer than `indexOf() !== -1`
- **Returns boolean** - Direct true/false, no comparison needed
- **Handles NaN** - Correctly finds NaN (unlike indexOf)
- **Semantic** - Method name clearly indicates what it does
- **Less error-prone** - Can't forget the `!== -1` check
- **Consistent** - Works like String.includes() (also ES6)

## Key notes / edge cases
- **Strict equality** - Uses SameValueZero (like ===, but NaN equals NaN)
- **Case sensitive** - 'Hello' !== 'hello'
- **No predicate** - Can't use custom comparison function (use `some()` for that)
- **Sparse arrays** - Treats holes as undefined
- **Object comparison** - Compares by reference, not value
- **String.includes** - Similar method exists for strings
- **fromIndex** - Can search from specific position

## Quick practice

### Practice 1
Create an array of programming languages. Write a function that checks if a given language is in the array. Test with 'JavaScript', 'Python', and 'Ruby' (where only JavaScript and Python are in the array).

### Practice 2
Given two arrays: `allowed = ['read', 'write', 'delete']` and `requested = ['read', 'execute', 'write']`, write code to find which requested permissions are allowed. Use `includes()` with `filter()`.

### Practice 3
Create an array with some numbers including NaN: `[1, 2, NaN, 4, 5]`. Compare the results of using `indexOf(NaN)` vs `includes(NaN)` and explain the difference.
