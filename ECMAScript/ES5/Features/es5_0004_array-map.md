# Array Map Method (ES5)

## What it is
The `map()` method creates a new array with the results of calling a provided function on every element in the calling array. It transforms each element and returns a new array of the same length.

## Before this feature
Before ES5, transforming arrays required manual loops and building new arrays element by element.

```javascript
// ES3 - Manual transformation with for loop
var numbers = [1, 2, 3, 4, 5];
var doubled = [];

for (var i = 0; i < numbers.length; i++) {
  doubled[i] = numbers[i] * 2;
}
console.log(doubled);  // [2, 4, 6, 8, 10]

// More complex transformations
var users = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" }
];
var fullNames = [];

for (var i = 0; i < users.length; i++) {
  fullNames[i] = users[i].firstName + " " + users[i].lastName;
}
console.log(fullNames);  // ["John Doe", "Jane Smith"]
```

## After this feature
ES5 introduced `map()` for elegant, functional array transformations.

```javascript
// ES5 - map() method
var numbers = [1, 2, 3, 4, 5];
var doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled);  // [2, 4, 6, 8, 10]
console.log(numbers);  // [1, 2, 3, 4, 5] (original unchanged)

// Transform objects to extract property
var users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 }
];

var names = users.map(function(user) {
  return user.name;
});
console.log(names);  // ["John", "Alice", "Bob"]

// With index and array parameters
var numbers = [10, 20, 30];
var withIndex = numbers.map(function(num, index, array) {
  return num + index;
});
console.log(withIndex);  // [10, 21, 32]

// Transform to different structure
var products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 }
];

var priceLabels = products.map(function(product) {
  return {
    label: product.name,
    value: "$" + product.price
  };
});
// Result: [
//   { label: "Laptop", value: "$1000" },
//   { label: "Mouse", value: "$25" },
//   { label: "Keyboard", value: "$75" }
// ]

// Chaining with other array methods
var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers
  .filter(function(n) { return n % 2 === 0; })  // Keep evens: [2, 4, 6]
  .map(function(n) { return n * 3; });          // Triple them: [6, 12, 18]
console.log(result);

// Parse strings to numbers
var stringNumbers = ["1", "2", "3", "4"];
var integers = stringNumbers.map(function(str) {
  return parseInt(str, 10);
});
console.log(integers);  // [1, 2, 3, 4]

// Common shorthand (ES5)
var stringNums = ["5", "10", "15"];
var nums = stringNums.map(Number);  // Pass Number constructor
console.log(nums);  // [5, 10, 15]
```

## Why this is better
- **Immutable** - Returns new array, doesn't modify original
- **Declarative** - Expresses what you want, not how to do it
- **Chainable** - Easy to combine with filter, reduce, etc.
- **Less code** - No manual index management or array building
- **Fewer bugs** - No off-by-one errors or mutation bugs
- **Clear intent** - Obvious you're transforming an array

## Key notes / edge cases
- **Returns new array** - Original array is never modified
- **Same length** - Output array always has same length as input
- **Undefined returns** - If callback doesn't return, elements become undefined
- **Sparse arrays** - Skips empty slots but preserves them in output
- **Not for side effects** - Use forEach if you don't need the returned array
- **This binding** - Pass second argument to set this context
- **Performance** - Creates new array, so memory overhead

## Quick practice

### Practice 1
Given an array of prices `[10, 25, 50, 100]`, use map to create a new array with a 20% discount applied to each price. Round to 2 decimal places.

### Practice 2
Create an array of person objects with firstName and lastName. Use map to create a new array of full names (firstName + lastName). Test with at least 3 people.

### Practice 3
Given an array of Celsius temperatures `[0, 10, 20, 30, 40]`, use map to convert them to Fahrenheit (formula: F = C * 9/5 + 32). Then chain another map to round each to the nearest integer.
