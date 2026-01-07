# Arrays

## Meaning
Arrays are ordered collections of values that can hold multiple items in a single variable. Each item in an array has an index (starting from 0), and arrays can store any type of data. They're essential for working with lists and collections.

## Examples

### Example 1: Creating Arrays
```javascript
// Array literal notation
let fruits = ["apple", "banana", "orange"];

// Array with different types
let mixed = [1, "two", true, null, { name: "object" }];

// Empty array
let empty = [];

// Array constructor (less common)
let numbers = new Array(1, 2, 3, 4, 5);

console.log(fruits[0]);  // "apple"
console.log(fruits.length);  // 3
```

### Example 2: Accessing and Modifying Arrays
```javascript
let colors = ["red", "green", "blue"];

// Access by index
console.log(colors[0]);  // "red"
console.log(colors[2]);  // "blue"

// Modify element
colors[1] = "yellow";
console.log(colors);  // ["red", "yellow", "blue"]

// Add element to end
colors.push("purple");
console.log(colors);  // ["red", "yellow", "blue", "purple"]

// Remove last element
let last = colors.pop();
console.log(last);    // "purple"
console.log(colors);  // ["red", "yellow", "blue"]
```

### Example 3: Common Array Methods
```javascript
let numbers = [1, 2, 3, 4, 5];

// Add to beginning
numbers.unshift(0);
console.log(numbers);  // [0, 1, 2, 3, 4, 5]

// Remove from beginning
let first = numbers.shift();
console.log(first);    // 0
console.log(numbers);  // [1, 2, 3, 4, 5]

// Find index
console.log(numbers.indexOf(3));  // 2

// Check if includes
console.log(numbers.includes(4));  // true

// Slice (extract portion)
let slice = numbers.slice(1, 3);
console.log(slice);  // [2, 3]
```

### Example 4: Iterating Arrays
```javascript
let fruits = ["apple", "banana", "orange"];

// Traditional for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for...of loop (ES6)
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach method (ES5)
fruits.forEach(function(fruit) {
  console.log(fruit);
});
```

## Common Mistake + Fix

### Mistake: Accessing Array Length in Loop Repeatedly
```javascript
// ❌ Less efficient - calculates length every iteration
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

### Fix: Cache Array Length
```javascript
// ✅ Better - cache length for performance
let numbers = [1, 2, 3, 4, 5];
let len = numbers.length;
for (let i = 0; i < len; i++) {
  console.log(numbers[i]);
}

// Or use for...of (cleaner and efficient)
for (let num of numbers) {
  console.log(num);
}
```

## Practice

### Practice 1
Create an array of your five favorite foods. Use array methods to: add a new food to the end, remove the first food, and check if "pizza" is in the array.

### Practice 2
Given an array `[10, 20, 30, 40, 50]`, write code to: 1) get elements from index 1 to 3 (using slice), 2) find the index of 30, 3) reverse the array order.

### Practice 3
Create an array of numbers from 1 to 10. Use a loop to create a new array containing only the even numbers from the original array. Don't use filter() method - use a regular loop.
