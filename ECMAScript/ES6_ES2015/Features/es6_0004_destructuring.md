# Destructuring Assignment (ES6)

## What it is
Destructuring is a syntax for extracting values from arrays or properties from objects into distinct variables. It provides a concise way to unpack values, making code more readable and reducing repetitive property access.

## Before this feature
Before ES6, extracting multiple values from objects or arrays required verbose property access or indexing.

```javascript
// ES5 - Manual extraction from objects
var user = {
  name: "John",
  age: 30,
  email: "john@example.com"
};

var name = user.name;
var age = user.age;
var email = user.email;

// Manual extraction from arrays
var numbers = [1, 2, 3, 4, 5];
var first = numbers[0];
var second = numbers[1];
var third = numbers[2];

// Function parameters
function displayUser(user) {
  console.log(user.name);
  console.log(user.age);
  console.log(user.email);
}
```

## After this feature
ES6 introduced destructuring for elegant value extraction.

```javascript
// ES6 - Object destructuring
const user = {
  name: "John",
  age: 30,
  email: "john@example.com"
};

const { name, age, email } = user;
console.log(name);   // "John"
console.log(age);    // 30
console.log(email);  // "john@example.com"

// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;
console.log(first);   // 1
console.log(second);  // 2
console.log(third);   // 3

// Skip elements
const [a, , c] = [1, 2, 3];
console.log(a);  // 1
console.log(c);  // 3

// Rest pattern
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head);  // 1
console.log(tail);  // [2, 3, 4, 5]

// Default values
const { name2 = "Anonymous", age2 = 0 } = { name2: "Alice" };
console.log(name2);  // "Alice"
console.log(age2);   // 0 (default, property doesn't exist)

// Renaming variables
const { name: userName, age: userAge } = user;
console.log(userName);  // "John"
console.log(userAge);   // 30

// Nested destructuring
const person = {
  name: "Bob",
  address: {
    city: "New York",
    country: "USA"
  }
};

const { address: { city, country } } = person;
console.log(city);     // "New York"
console.log(country);  // "USA"

// Function parameters
function displayUser({ name, age, email }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Email: ${email}`);
}

displayUser(user);

// With defaults in parameters
function greet({ name = "Guest", greeting = "Hello" } = {}) {
  return `${greeting}, ${name}!`;
}

console.log(greet({ name: "Alice" }));        // "Hello, Alice!"
console.log(greet({ greeting: "Hi" }));       // "Hi, Guest!"
console.log(greet());                         // "Hello, Guest!"

// Swapping variables
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x);  // 2
console.log(y);  // 1

// Multiple return values
function getCoordinates() {
  return { x: 10, y: 20 };
}

const { x: coordX, y: coordY } = getCoordinates();

// Array destructuring in loops
const users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 }
];

users.forEach(({ name, age }) => {
  console.log(`${name} is ${age} years old`);
});

// Mixed destructuring
const data = {
  id: 1,
  info: {
    title: "JavaScript",
    tags: ["programming", "web", "ES6"]
  }
};

const {
  id,
  info: {
    title,
    tags: [primaryTag, ...otherTags]
  }
} = data;

console.log(id);          // 1
console.log(title);       // "JavaScript"
console.log(primaryTag);  // "programming"
console.log(otherTags);   // ["web", "ES6"]
```

## Why this is better
- **Concise syntax** - Extract multiple values in one line
- **Clearer intent** - Obvious which properties you're using
- **Less repetition** - No repeated object.property access
- **Function parameters** - Clean parameter extraction
- **Swapping values** - Swap variables without temp variable
- **Default values** - Built-in support for defaults

## Key notes / edge cases
- **Undefined handling** - Accessing undefined properties gives undefined
- **Null throws error** - Can't destructure null (TypeError)
- **Must match structure** - Object keys or array positions must exist
- **Computed property names** - Can use `[expression]` for dynamic keys
- **Assignment vs declaration** - Works with both let/const/var and existing variables
- **Parentheses for assignment** - Use `({ a, b } = obj)` when assigning to existing vars
- **Deep nesting** - Be careful with deeply nested destructuring (can be hard to read)

## Quick practice

### Practice 1
Create an object with properties: firstName, lastName, age, city. Use destructuring to extract all properties into variables, and rename firstName to first and lastName to last.

### Practice 2
Given an array `[10, 20, 30, 40, 50]`, use destructuring to: 1) get the first element as 'a', 2) skip the second, 3) get the third as 'b', 4) collect the rest in an array called 'others'.

### Practice 3
Write a function `getFullName({ firstName, lastName })` that uses destructuring in the parameter. Call it with an object and also provide default values for cases where properties might be missing.
