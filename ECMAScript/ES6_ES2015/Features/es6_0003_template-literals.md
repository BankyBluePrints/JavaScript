# Template Literals (ES6)

## What it is
Template literals (template strings) provide an easy way to create strings with embedded expressions, multi-line strings, and string interpolation. They use backticks (\`) instead of quotes and allow ${} for embedding expressions.

## Before this feature
Before ES6, string concatenation and multi-line strings were verbose and error-prone.

```javascript
// ES5 - String concatenation
var name = "John";
var age = 30;
var message = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(message);

// Multi-line strings required escape characters
var html = "<div>\n" +
           "  <h1>Title</h1>\n" +
           "  <p>Content</p>\n" +
           "</div>";

// Complex expressions were messy
var price = 100;
var tax = 0.08;
var total = "Total: $" + (price + (price * tax)).toFixed(2);
```

## After this feature
ES6 introduced template literals for clean string interpolation and multi-line strings.

```javascript
// ES6 - Template literals
const name = "John";
const age = 30;
const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);

// Multi-line strings (no escape characters)
const html = `
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
`;

// Embedded expressions
const price = 100;
const tax = 0.08;
const total = `Total: $${(price + price * tax).toFixed(2)}`;
console.log(total);  // "Total: $108.00"

// Expression evaluation
const a = 5;
const b = 10;
console.log(`Sum: ${a + b}`);  // "Sum: 15"
console.log(`Product: ${a * b}`);  // "Product: 50"

// Function calls in templates
function getGreeting(name) {
  return `Hello, ${name}!`;
}
console.log(`${getGreeting("Alice")}`);  // "Hello, Alice!"

// Nested templates
const isActive = true;
const user = {
  name: "Bob",
  role: "admin"
};
const status = `User ${user.name} is ${isActive ? "active" : "inactive"}`;

// Object property access
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
const intro = `${person.firstName} ${person.lastName} is ${person.age} years old`;

// Multi-line with preserved formatting
const poem = `
  Roses are red,
  Violets are blue,
  Template literals are great,
  And so are you!
`;

// Building HTML dynamically
const items = ["Apple", "Banana", "Orange"];
const listHTML = `
  <ul>
    ${items.map(item => `<li>${item}</li>`).join('')}
  </ul>
`;

// Tagged templates (advanced)
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? `<strong>${values[i]}</strong>` : '');
  }, '');
}

const product = "laptop";
const discount = 20;
const ad = highlight`Get your ${product} with ${discount}% off!`;
// Result: "Get your <strong>laptop</strong> with <strong>20</strong>% off!"

// Practical examples
const user2 = { name: "Alice", score: 95 };
const report = `
  Student Report:
  Name: ${user2.name}
  Score: ${user2.score}
  Grade: ${user2.score >= 90 ? 'A' : user2.score >= 80 ? 'B' : 'C'}
  Status: ${user2.score >= 60 ? 'PASS' : 'FAIL'}
`;

// URL building
const baseURL = "https://api.example.com";
const endpoint = "users";
const id = 123;
const url = `${baseURL}/${endpoint}/${id}`;
console.log(url);  // "https://api.example.com/users/123"
```

## Why this is better
- **Cleaner syntax** - No more string concatenation with +
- **Multi-line support** - Natural multi-line strings without escape characters
- **Expression embedding** - Any JavaScript expression works in ${}
- **Better readability** - Intent clearer than concatenation
- **HTML templates** - Natural fit for building HTML/XML strings
- **Tagged templates** - Advanced string processing capabilities

## Key notes / edge cases
- **Backticks required** - Use \` not ' or "
- **Expression evaluation** - ${} evaluates JavaScript expressions
- **Whitespace preserved** - Indentation and newlines are kept
- **Nested templates** - Can embed template literals inside each other
- **Escape backticks** - Use \\` to include literal backtick
- **No automatic HTML escaping** - Must escape manually for security
- **toString() called** - Non-string values converted to strings

## Quick practice

### Practice 1
Create variables for a product name, price, and quantity. Use a template literal to create a message: "You ordered [quantity] [product](s) for $[total]". Calculate the total within the template.

### Practice 2
Build a simple HTML card using template literals for a person with name, title, and email. Include proper indentation and multiple lines. Make it look like a business card in HTML.

### Practice 3
Create a function `createQuery(table, conditions)` that uses template literals to build SQL-like query strings. Example: `createQuery('users', {age: 25, city: 'NYC'})` should return `"SELECT * FROM users WHERE age = 25 AND city = 'NYC'"`.
