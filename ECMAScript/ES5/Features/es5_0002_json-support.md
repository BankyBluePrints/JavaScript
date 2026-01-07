# JSON Methods (ES5)

## What it is
ES5 introduced native `JSON.parse()` and `JSON.stringify()` methods for converting between JavaScript objects and JSON strings. These methods provide a safe, standardized way to serialize and deserialize data without relying on third-party libraries or dangerous eval().

## Before this feature
Before ES5, developers had to use third-party JSON libraries or unsafe eval() to parse JSON strings, which posed security risks and required additional dependencies.

```javascript
// ES3 - Using eval (dangerous!)
var jsonString = '{"name":"John","age":30}';
var obj = eval("(" + jsonString + ")");  // Security risk!
console.log(obj.name);  // "John"

// Problem: eval executes any JavaScript code
var malicious = '{"name":"John","hack":alert("XSS!")}';
// eval("(" + malicious + ")");  // Executes alert!

// Converting to JSON string required manual building
var person = { name: "John", age: 30 };
var json = "{";
json += '"name":"' + person.name + '",';
json += '"age":' + person.age;
json += "}";
console.log(json);  // '{"name":"John","age":30}'
// Error-prone and doesn't handle special characters
```

## After this feature
ES5 introduced safe, native JSON methods that work consistently across all environments.

```javascript
// ES5 - JSON.stringify() - Object to JSON string
var person = {
  name: "John",
  age: 30,
  city: "New York"
};
var jsonString = JSON.stringify(person);
console.log(jsonString);  // '{"name":"John","age":30,"city":"New York"}'

// JSON.parse() - JSON string to object
var jsonData = '{"name":"Alice","age":25}';
var user = JSON.parse(jsonData);
console.log(user.name);  // "Alice"
console.log(user.age);   // 25

// Pretty printing with indentation
var data = { name: "Bob", hobbies: ["reading", "coding"] };
var formatted = JSON.stringify(data, null, 2);
console.log(formatted);
// {
//   "name": "Bob",
//   "hobbies": [
//     "reading",
//     "coding"
//   ]
// }

// Filtering with replacer function
var obj = { name: "John", password: "secret123", age: 30 };
var safe = JSON.stringify(obj, function(key, value) {
  if (key === "password") return undefined;  // Exclude password
  return value;
});
console.log(safe);  // '{"name":"John","age":30}'

// Custom parsing with reviver function
var jsonDate = '{"name":"John","created":"2023-01-01T00:00:00.000Z"}';
var parsed = JSON.parse(jsonDate, function(key, value) {
  if (key === "created") return new Date(value);  // Convert to Date
  return value;
});
console.log(parsed.created instanceof Date);  // true

// Error handling
try {
  var invalid = JSON.parse('invalid json');
} catch (e) {
  console.log("Parse error:", e.message);
}

// Deep cloning objects
var original = { name: "John", address: { city: "NYC" } };
var clone = JSON.parse(JSON.stringify(original));
clone.address.city = "LA";
console.log(original.address.city);  // "NYC" (unchanged)
```

## Why this is better
- **Security** - No code execution risk like eval()
- **Native support** - No external libraries needed
- **Standardized** - Works consistently everywhere
- **Type safe** - Properly handles strings, numbers, booleans, null, arrays, objects
- **Error handling** - Throws clear errors for invalid JSON
- **Customizable** - Replacer and reviver functions for custom serialization

## Key notes / edge cases
- **Functions not serialized** - JSON.stringify() ignores functions
- **Undefined becomes null** - In arrays, undefined converts to null
- **Symbols ignored** - Symbol properties are not serialized
- **Date objects** - Converted to ISO strings (need reviver to restore)
- **Circular references** - Throw TypeError
- **NaN and Infinity** - Become null
- **Only enumerable properties** - Non-enumerable properties ignored

## Quick practice

### Practice 1
Create an object with various data types (string, number, boolean, array, nested object). Convert it to JSON string with formatting (indent 2 spaces), then parse it back and verify all values.

### Practice 2
Write a function that safely clones an object using JSON methods. Test it with nested objects. What happens with functions and dates in the clone?

### Practice 3
Create an object with sensitive data (like password). Use JSON.stringify() with a replacer function to exclude sensitive fields. Also create a reviver that converts any "created_at" string fields to Date objects.
