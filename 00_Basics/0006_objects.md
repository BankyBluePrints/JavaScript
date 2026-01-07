# Objects

## Meaning
Objects are collections of key-value pairs that represent real-world entities or complex data structures. They allow you to group related data and functionality together. Objects are one of the fundamental data types in JavaScript.

## Examples

### Example 1: Creating Objects
```javascript
// Object literal notation
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log(person.name);  // "John"
console.log(person.age);   // 30

// Empty object
let emptyObj = {};

// Object with methods
let calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};
```

### Example 2: Accessing Properties
```javascript
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};

// Dot notation
console.log(car.brand);  // "Toyota"

// Bracket notation
console.log(car["model"]);  // "Camry"

// Dynamic property access
let prop = "year";
console.log(car[prop]);  // 2020
```

### Example 3: Modifying Objects
```javascript
let user = {
  name: "Alice",
  age: 25
};

// Update property
user.age = 26;

// Add new property
user.email = "alice@example.com";

// Delete property
delete user.age;

console.log(user);  // { name: "Alice", email: "alice@example.com" }
```

### Example 4: Nested Objects
```javascript
let company = {
  name: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "Boston",
    country: "USA"
  },
  employees: 100
};

console.log(company.address.city);  // "Boston"
console.log(company.address.country);  // "USA"
```

## Common Mistake + Fix

### Mistake: Confusing Objects with Arrays
```javascript
// ❌ Wrong - Using object when array is better
let users = {
  0: "Alice",
  1: "Bob",
  2: "Charlie"
};

// Can't use array methods
// users.push("David");  // Error!
```

### Fix: Use Arrays for Ordered Lists
```javascript
// ✅ Correct - Use array for ordered list
let users = ["Alice", "Bob", "Charlie"];
users.push("David");  // Works!

console.log(users.length);  // 4
console.log(users[0]);      // "Alice"

// Use objects for named properties
let userInfo = {
  name: "Alice",
  role: "admin",
  active: true
};
```

## Practice

### Practice 1
Create an object representing a book with properties: title, author, pages, and published year. Log each property using both dot and bracket notation.

### Practice 2
Create an object representing a student with name, age, and grades (array of numbers). Add a method called `getAverage` that calculates and returns the average grade.

### Practice 3
Create a nested object representing a restaurant with: name, location (object with street, city, state), and menu (object with categories like appetizers, mains, desserts - each an array of items). Access and log at least 3 deeply nested values.
