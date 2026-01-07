# Array Filter Method (ES5)

## What it is
The `filter()` method creates a new array with all elements that pass a test implemented by a provided function. It's used to select a subset of elements from an array based on a condition.

## Before this feature
Before ES5, filtering arrays required manual loops to build a new array with only matching elements.

```javascript
// ES3 - Manual filtering with for loop
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evens = [];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i]);
  }
}
console.log(evens);  // [2, 4, 6, 8, 10]

// Filtering objects
var users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 17 },
  { name: "Bob", age: 25 }
];
var adults = [];

for (var i = 0; i < users.length; i++) {
  if (users[i].age >= 18) {
    adults.push(users[i]);
  }
}
console.log(adults);  // [{name: "John", age: 30}, {name: "Bob", age: 25}]
```

## After this feature
ES5 introduced `filter()` for clean, declarative array filtering.

```javascript
// ES5 - filter() method
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evens = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evens);  // [2, 4, 6, 8, 10]
console.log(numbers);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (unchanged)

// Filter objects by property
var users = [
  { name: "John", age: 30, active: true },
  { name: "Alice", age: 25, active: false },
  { name: "Bob", age: 35, active: true }
];

var activeUsers = users.filter(function(user) {
  return user.active;
});
console.log(activeUsers);  // [{name: "John"...}, {name: "Bob"...}]

// Filter with multiple conditions
var products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true }
];

var availableAffordable = products.filter(function(product) {
  return product.inStock && product.price < 500;
});
console.log(availableAffordable);  // [{name: "Keyboard"...}]

// With index parameter
var numbers = [10, 5, 8, 3, 15, 2];
var afterIndex2 = numbers.filter(function(num, index) {
  return index > 2;
});
console.log(afterIndex2);  // [3, 15, 2]

// Remove duplicates (using indexOf)
var numbers = [1, 2, 2, 3, 4, 4, 5];
var unique = numbers.filter(function(num, index, array) {
  return array.indexOf(num) === index;
});
console.log(unique);  // [1, 2, 3, 4, 5]

// Remove falsy values
var mixed = [1, 0, "hello", "", true, false, null, undefined, "world"];
var truthy = mixed.filter(function(value) {
  return value;  // Implicit boolean conversion
});
console.log(truthy);  // [1, "hello", true, "world"]

// Chaining with map
var numbers = [1, 2, 3, 4, 5, 6];
var result = numbers
  .filter(function(n) { return n > 3; })     // [4, 5, 6]
  .map(function(n) { return n * 2; });       // [8, 10, 12]
console.log(result);

// Search/find items
var users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "John" }
];

var johnsOnly = users.filter(function(user) {
  return user.name === "John";
});
console.log(johnsOnly);  // All users named John
```

## Why this is better
- **Immutable** - Returns new array, original unchanged
- **Declarative** - Expresses filtering intent clearly
- **Chainable** - Combines easily with map, reduce, etc.
- **Less code** - No manual array building or index management
- **Fewer bugs** - No mutation or off-by-one errors
- **Reusable predicates** - Filter functions can be extracted and reused

## Key notes / edge cases
- **Returns new array** - Original array is never modified
- **Shorter or empty** - Result length ≤ input length (can be 0)
- **Boolean coercion** - Return value is converted to boolean
- **Sparse arrays** - Skips empty slots
- **Not for finding one** - Use find() (ES6) for single item
- **This binding** - Pass second argument to set this context
- **Performance** - O(n) complexity, efficient for most use cases

## Quick practice

### Practice 1
Given an array of numbers `[3, 10, 5, 18, 2, 25, 7]`, use filter to create a new array containing only numbers greater than 10.

### Practice 2
Create an array of student objects with name and grade (0-100). Use filter to get all students who passed (grade >= 60). Then chain map to extract just their names.

### Practice 3
Write a function that takes an array of strings and returns a new array with only strings longer than 5 characters, excluding any empty strings. Test with: `["hi", "hello", "world", "", "JavaScript", "a"]`.
