# Function.prototype.bind (ES5)

## What it is
The `bind()` method creates a new function that, when called, has its `this` keyword set to a specific value. It also allows you to preset arguments. This solves the common problem of losing the `this` context in callbacks and event handlers.

## Before this feature
Before ES5, developers had to use workarounds like storing `this` in a variable or creating wrapper functions to preserve context.

```javascript
// ES3 - Losing 'this' context in callbacks
var person = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet();  // "Hello, John" - works fine

// But when used as callback, 'this' is lost
setTimeout(person.greet, 100);  // "Hello, undefined"

// Workaround 1: Store 'this' in a variable
var person2 = {
  name: "Alice",
  delayedGreet: function() {
    var self = this;  // Save 'this' reference
    setTimeout(function() {
      console.log("Hello, " + self.name);
    }, 100);
  }
};

// Workaround 2: Wrapper function
setTimeout(function() {
  person.greet();
}, 100);  // "Hello, John"
```

## After this feature
ES5 introduced `bind()` to explicitly set `this` context for functions.

```javascript
// ES5 - bind() method
var person = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

// Create bound function with specific 'this'
var boundGreet = person.greet.bind(person);
setTimeout(boundGreet, 100);  // "Hello, John"

// Bind in one step
setTimeout(person.greet.bind(person), 100);  // "Hello, John"

// Partial application - preset arguments
function multiply(a, b) {
  return a * b;
}

var double = multiply.bind(null, 2);  // Preset first argument
console.log(double(5));   // 10 (2 * 5)
console.log(double(10));  // 20 (2 * 10)

var triple = multiply.bind(null, 3);
console.log(triple(4));   // 12 (3 * 4)

// Practical: Event handlers
var counter = {
  count: 0,
  increment: function() {
    this.count++;
    console.log("Count:", this.count);
  }
};

// In browser (example)
// button.addEventListener("click", counter.increment.bind(counter));

// Object method with context
var user = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var getNameFunc = user.getFullName.bind(user);
console.log(getNameFunc());  // "John Doe"

// Bind with different context
var anotherUser = {
  firstName: "Jane",
  lastName: "Smith"
};

var getJaneName = user.getFullName.bind(anotherUser);
console.log(getJaneName());  // "Jane Smith"

// Combining bind with array methods
var obj = {
  multiplier: 10,
  multiply: function(num) {
    return num * this.multiplier;
  }
};

var numbers = [1, 2, 3, 4, 5];
var result = numbers.map(obj.multiply.bind(obj));
console.log(result);  // [10, 20, 30, 40, 50]

// Partial application with multiple arguments
function greet(greeting, punctuation) {
  return greeting + ", " + this.name + punctuation;
}

var person = { name: "Alice" };
var casualGreet = greet.bind(person, "Hi");
var formalGreet = greet.bind(person, "Hello");

console.log(casualGreet("!"));     // "Hi, Alice!"
console.log(formalGreet("."));     // "Hello, Alice."
```

## Why this is better
- **Preserves context** - Ensures `this` is correct in callbacks
- **Partial application** - Create specialized functions from general ones
- **Cleaner code** - No need for `var self = this` pattern
- **Reusable functions** - Bind once, use many times
- **Event handlers** - Safer event handler binding
- **Functional programming** - Enables currying and composition

## Key notes / edge cases
- **Creates new function** - Returns a new function, doesn't modify original
- **Permanent binding** - Can't re-bind or change `this` later
- **Performance** - Slight overhead from creating new functions
- **Arrow functions** - ES6 arrow functions handle `this` differently (lexical)
- **Null/undefined this** - Use `null` when you don't care about `this`
- **Constructor functions** - Bound functions can't be used with `new`
- **Already bound** - Binding a bound function doesn't change original binding

## Quick practice

### Practice 1
Create an object with a name property and a method that logs "My name is [name]". Use bind to create a bound version that works when passed to setTimeout.

### Practice 2
Write a function `add(a, b, c)` that returns the sum of three numbers. Use bind to create two specialized functions: `add5(b, c)` that always adds 5 as the first argument, and `add10(c)` that adds 5 and 5.

### Practice 3
Create a calculator object with a `value` property and methods for add, subtract, multiply. Create bound versions of these methods that can be used as callbacks, maintaining access to the calculator's value.
