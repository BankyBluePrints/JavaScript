# Data Types

## Meaning
Data types specify what kind of values a variable can hold. JavaScript has primitive types (String, Number, Boolean, Undefined, Null, Symbol, BigInt) and reference types (Objects, Arrays, Functions). Understanding data types is fundamental to writing correct JavaScript code.

## Examples

### Example 1: Primitive Data Types
```javascript
// String - text data
let name = "Alice";
let message = 'Hello World';

// Number - integers and decimals
let age = 25;
let price = 19.99;
let negative = -10;

// Boolean - true or false
let isActive = true;
let hasPermission = false;

// Undefined - variable declared but not assigned
let notAssigned;
console.log(notAssigned);  // undefined

// Null - intentional absence of value
let emptyValue = null;

// Symbol - unique identifier (ES6)
let id = Symbol('id');

// BigInt - large integers (ES2020)
let bigNumber = 9007199254740991n;
```

### Example 2: Reference Types
```javascript
// Object - collection of key-value pairs
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Array - ordered list of values
let colors = ["red", "green", "blue"];
let mixed = [1, "two", true, null];

// Function - reusable code block
function greet(name) {
  return "Hello, " + name;
}
```

### Example 3: Type Checking
```javascript
console.log(typeof "hello");      // "string"
console.log(typeof 42);            // "number"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof null);          // "object" (JavaScript quirk!)
console.log(typeof {});            // "object"
console.log(typeof []);            // "object" (arrays are objects)
console.log(typeof function(){}); // "function"
```

### Example 4: Type Coercion
```javascript
// Implicit conversion
console.log("5" + 3);      // "53" (number converted to string)
console.log("5" - 3);      // 2 (string converted to number)
console.log(true + 1);     // 2 (true converted to 1)
console.log(false + 1);    // 1 (false converted to 0)

// Explicit conversion
console.log(Number("42"));    // 42
console.log(String(42));      // "42"
console.log(Boolean(1));      // true
console.log(Boolean(0));      // false
```

## Common Mistake + Fix

### Mistake: Confusing null and undefined
```javascript
// ❌ Wrong - Using null check for potentially undefined
let user;
if (user === null) {  // This won't catch undefined!
  console.log("No user");
}
```

### Fix: Check for Both null and undefined
```javascript
// ✅ Correct - Check for both
let user;
if (user === null || user === undefined) {
  console.log("No user");
}

// Or use loose equality
if (user == null) {  // Catches both null and undefined
  console.log("No user");
}

// Or check truthiness
if (!user) {  // Catches null, undefined, 0, "", false
  console.log("No user");
}
```

## Practice

### Practice 1
Create variables of each primitive type (string, number, boolean, undefined, null) and use `typeof` to verify their types. Log the results.

### Practice 2
Create an object representing a book with properties: title, author, pages, and isAvailable. Then create an array of 3 such book objects.

### Practice 3
Experiment with type coercion by adding, subtracting, and comparing different data types (e.g., string + number, boolean + number). Write down what you expect before running the code, then verify your predictions.
