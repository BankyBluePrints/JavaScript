# Array forEach Method (ES5)

## What it is
The `forEach()` method executes a provided function once for each array element. It provides a cleaner, more functional way to iterate through arrays compared to traditional for loops.

## Before this feature
Before ES5, developers had to use traditional for loops to iterate through arrays, which was more verbose and error-prone.

```javascript
// ES3 - Traditional for loop
var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// More verbose for simple operations
var fruits = ["apple", "banana", "orange"];
for (var i = 0; i < fruits.length; i++) {
  console.log("I like " + fruits[i]);
}

// Easy to make mistakes with indices
var items = [10, 20, 30];
for (var i = 0; i <= items.length; i++) {  // Bug: <= instead of <
  console.log(items[i]);  // Last iteration: undefined
}
```

## After this feature
ES5 introduced `forEach()` for cleaner, more expressive array iteration.

```javascript
// ES5 - forEach method
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});

// With index and array parameters
var fruits = ["apple", "banana", "orange"];
fruits.forEach(function(fruit, index, array) {
  console.log(index + ": " + fruit + " (total: " + array.length + ")");
});
// Output:
// 0: apple (total: 3)
// 1: banana (total: 3)
// 2: orange (total: 3)

// Practical example: Process user data
var users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 }
];

users.forEach(function(user) {
  console.log(user.name + " is " + user.age + " years old");
});

// Using with this context
var multiplier = {
  factor: 2,
  multiply: function(numbers) {
    var results = [];
    numbers.forEach(function(num) {
      results.push(num * this.factor);
    }, this);  // Pass 'this' as second argument
    return results;
  }
};

var doubled = multiplier.multiply([1, 2, 3]);
console.log(doubled);  // [2, 4, 6]

// Side effects (modify external variables)
var sum = 0;
[1, 2, 3, 4, 5].forEach(function(num) {
  sum += num;
});
console.log(sum);  // 15

// Note: Can't break out of forEach
var found = false;
[1, 2, 3, 4, 5].forEach(function(num) {
  if (num === 3) {
    found = true;
    // break;  // SyntaxError - can't use break
    return;  // Only skips current iteration
  }
  console.log(num);  // Still logs 4 and 5
});
```

## Why this is better
- **Cleaner syntax** - No index management needed
- **Less error-prone** - No off-by-one errors
- **More readable** - Intent is clearer
- **Functional style** - Promotes functional programming patterns
- **Access to index** - Still available when needed
- **Consistent iteration** - Always iterates all elements (can't accidentally skip)

## Key notes / edge cases
- **No return value** - forEach always returns undefined
- **Can't break** - Use regular for loop or for...of if you need to break
- **Doesn't skip empty slots** - Actually, it does skip them (sparse arrays)
- **Doesn't mutate array** - The method doesn't, but your callback can
- **This binding** - Pass second argument to forEach to set this
- **Performance** - Slightly slower than for loops (usually negligible)
- **Arrow functions** - ES6 arrow functions make forEach even cleaner

## Quick practice

### Practice 1
Given an array of numbers `[5, 10, 15, 20, 25]`, use forEach to log each number multiplied by 2. Then modify it to also log the index of each element.

### Practice 2
Create an array of product objects with name and price. Use forEach to calculate the total price of all products. Store the result in a variable outside the forEach.

### Practice 3
Write a function that takes an array of strings and uses forEach to create a new array where each string is prefixed with its position (e.g., ["apple", "banana"] becomes ["1. apple", "2. banana"]).
