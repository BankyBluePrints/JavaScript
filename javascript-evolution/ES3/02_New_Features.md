# ES3 New Features

## 1. Regular Expressions

**What it is:** Pattern matching for strings using special syntax.

**Problem it solves:** Before regex, you had to write complex string parsing logic manually.

**Where it's used:** Browser and Node.js - everywhere you need to validate, search, or manipulate text.

```javascript
var pattern = /hello/i; // Case-insensitive search
var result = pattern.test("Hello World"); // true
```

---

## 2. Try/Catch Exception Handling

**What it is:** A way to handle errors gracefully without crashing.

**Problem it solves:** Prevents the entire script from failing when an error occurs.

**Where it's used:** Browser and Node.js - critical for production applications.

```javascript
try {
  riskyOperation();
} catch (error) {
  console.log("An error occurred: " + error.message);
}
```

---

## 3. Array Methods

**What it is:** Built-in methods to manipulate arrays.

**Problem it solves:** Eliminates the need for manual loops for common operations.

**Where it's used:** Browser and Node.js - fundamental to all JavaScript programming.

**Key methods:**
- `push()` / `pop()` - Add/remove from end
- `shift()` / `unshift()` - Add/remove from beginning
- `splice()` - Insert/remove at any position
- `concat()` - Combine arrays
- `join()` - Convert array to string
- `reverse()` - Reverse array order
- `sort()` - Sort array elements

---

## 4. String Methods

**What it is:** Built-in methods for string manipulation.

**Problem it solves:** Makes text processing easier and more consistent.

**Where it's used:** Browser and Node.js - essential for all text handling.

**Key methods:**
- `split()` - Split string into array
- `concat()` - Combine strings
- `slice()` - Extract part of string
- `toLowerCase()` / `toUpperCase()` - Change case
- `charAt()` - Get character at position
- `indexOf()` - Find substring position
- `match()` - Match against regex
- `replace()` - Replace text

---

## 5. Switch Statement

**What it is:** Multi-way conditional branching.

**Problem it solves:** Cleaner alternative to multiple if/else statements.

**Where it's used:** Browser and Node.js - for handling multiple conditions.

```javascript
switch (value) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  default:
    console.log("Other");
}
```

---

## 6. Do-While Loop

**What it is:** A loop that executes at least once.

**Problem it solves:** When you need the loop body to run before checking the condition.

**Where it's used:** Browser and Node.js - for specific loop scenarios.

```javascript
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

---

## 7. In Operator

**What it is:** Check if a property exists in an object.

**Problem it solves:** Safely check for property existence.

**Where it's used:** Browser and Node.js - for object property checks.

```javascript
var obj = { name: "John" };
console.log("name" in obj); // true
console.log("age" in obj);  // false
```
