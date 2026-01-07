# Array Push/Pop Methods (ES3)

## What it is
The `push()` and `pop()` methods provide a simple way to add and remove elements from the end of an array, implementing a stack (LIFO - Last In First Out) data structure. `push()` adds one or more elements to the end, while `pop()` removes and returns the last element.

## Before this feature
Before ES3, manipulating array ends required manual index management and length updates, making the code more verbose and error-prone.

```javascript
// ES1/ES2 - Manual array manipulation
var stack = [1, 2, 3];

// Adding to end (push equivalent)
stack[stack.length] = 4;
stack[stack.length] = 5;
console.log(stack);  // [1, 2, 3, 4, 5]

// Removing from end (pop equivalent)
var lastElement = stack[stack.length - 1];
stack.length = stack.length - 1;  // Reduce length
console.log(lastElement);  // 5
console.log(stack);        // [1, 2, 3, 4]
```

## After this feature
ES3 introduced `push()` and `pop()` methods for cleaner and more intuitive array manipulation.

```javascript
// ES3 - Push and Pop methods
var stack = [1, 2, 3];

// Push - add to end
stack.push(4);
console.log(stack);  // [1, 2, 3, 4]

// Push multiple elements
stack.push(5, 6, 7);
console.log(stack);  // [1, 2, 3, 4, 5, 6, 7]

// Pop - remove from end
var last = stack.pop();
console.log(last);   // 7
console.log(stack);  // [1, 2, 3, 4, 5, 6]

// Push returns new length
var newLength = stack.push(8, 9);
console.log(newLength);  // 8
console.log(stack);      // [1, 2, 3, 4, 5, 6, 8, 9]

// Practical: Undo functionality
var history = [];
var currentValue = 0;

function setValue(value) {
  history.push(currentValue);  // Save current state
  currentValue = value;
}

function undo() {
  if (history.length > 0) {
    currentValue = history.pop();  // Restore previous state
  }
}

setValue(10);
setValue(20);
setValue(30);
console.log(currentValue);  // 30
undo();
console.log(currentValue);  // 20
undo();
console.log(currentValue);  // 10

// Building arrays dynamically
var numbers = [];
for (var i = 1; i <= 5; i++) {
  numbers.push(i * 2);
}
console.log(numbers);  // [2, 4, 6, 8, 10]
```

## Why this is better
- **Cleaner syntax** - No manual index or length manipulation
- **Chainable** - Can chain operations (ES5+)
- **Returns useful values** - push returns new length, pop returns removed element
- **Less error-prone** - No off-by-one errors with manual indexing
- **Stack implementation** - Natural LIFO data structure support

## Key notes / edge cases
- **Empty array pop**: Returns undefined (doesn't throw error)
- **Push returns length**: Not the array itself (until ES5 chaining)
- **Modifies original**: Both methods mutate the array in place
- **Multiple push**: Can push multiple elements in one call
- **Performance**: O(1) time complexity for both operations
- **Not for middle insertion**: Use `splice()` to insert in the middle

## Quick practice

### Practice 1
Create an empty array and use push to add the numbers 1 through 10. Then use pop in a loop to remove and log each number. Observe the order.

### Practice 2
Implement a simple browser history using an array. Create functions: `visit(url)` to add a URL, `back()` to go back one page, and `getCurrentPage()` to get the current URL. Use push/pop internally.

### Practice 3
Write a function `reversewithStack(arr)` that reverses an array using push and pop operations with a temporary stack. Don't use the built-in reverse() method.
