# Array Reduce Method (ES5)

## What it is
The `reduce()` method executes a reducer function on each array element, passing in the return value from the previous calculation. It reduces an array to a single value by accumulating results through iteration.

## Before this feature
Before ES5, reducing arrays required manual accumulation with loops and variables.

```javascript
// ES3 - Manual reduction with for loop
var numbers = [1, 2, 3, 4, 5];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);  // 15

// Finding maximum
var nums = [10, 5, 8, 20, 3];
var max = nums[0];
for (var i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}
console.log(max);  // 20
```

## After this feature
ES5 introduced `reduce()` for powerful array aggregation and transformation.

```javascript
// ES5 - reduce() method
// Sum all numbers
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function(accumulator, current) {
  return accumulator + current;
}, 0);  // 0 is initial value
console.log(sum);  // 15

// Without initial value (uses first element)
var total = [10, 20, 30].reduce(function(acc, curr) {
  return acc + curr;
});
console.log(total);  // 60

// Find maximum value
var numbers = [10, 5, 8, 20, 3];
var max = numbers.reduce(function(acc, curr) {
  return curr > acc ? curr : acc;
});
console.log(max);  // 20

// Flatten array of arrays
var nested = [[1, 2], [3, 4], [5, 6]];
var flat = nested.reduce(function(acc, curr) {
  return acc.concat(curr);
}, []);
console.log(flat);  // [1, 2, 3, 4, 5, 6]

// Count occurrences
var fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
var count = fruits.reduce(function(acc, fruit) {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);  // {apple: 3, banana: 2, orange: 1}

// Group by property
var people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];

var grouped = people.reduce(function(acc, person) {
  var key = person.age;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(person);
  return acc;
}, {});
// Result: { 25: [{name: "Alice"...}], 30: [{name: "John"...}, {name: "Bob"...}] }

// Calculate average
var grades = [85, 90, 78, 92, 88];
var average = grades.reduce(function(acc, grade, index, array) {
  acc += grade;
  if (index === array.length - 1) {
    return acc / array.length;
  }
  return acc;
}, 0);
console.log(average);  // 86.6

// Build object from array
var users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" }
];

var userMap = users.reduce(function(acc, user) {
  acc[user.id] = user.name;
  return acc;
}, {});
console.log(userMap);  // {1: "John", 2: "Alice"}
```

## Why this is better
- **Powerful aggregation** - Combine array elements in any way
- **Single expression** - No need for external variables
- **Flexible** - Can produce any type of result (number, string, object, array)
- **Functional** - Pure function approach to data transformation
- **Composable** - Works well in function pipelines
- **Versatile** - Handles sum, product, min, max, flatten, group, etc.

## Key notes / edge cases
- **Initial value recommended** - Safer to always provide initial value
- **Empty array without initial** - Throws TypeError
- **Empty array with initial** - Returns initial value
- **Accumulator types** - Can be any type (number, object, array, etc.)
- **Index and array** - Third and fourth parameters available
- **Right to left** - Use reduceRight() to iterate backwards
- **This binding** - Not commonly needed since accumulator pattern

## Quick practice

### Practice 1
Given an array of numbers `[2, 4, 6, 8, 10]`, use reduce to calculate: 1) their sum, 2) their product. Write two separate reduce calls.

### Practice 2
Create an array of shopping cart items: `[{name: "book", price: 10}, {name: "pen", price: 2}, {name: "notebook", price: 5}]`. Use reduce to calculate the total cost.

### Practice 3
Given an array of words `["hello", "world", "from", "javascript"]`, use reduce to build a single sentence with spaces between words. Result should be: "hello world from javascript".
