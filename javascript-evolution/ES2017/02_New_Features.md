# ES2017 New Features

## 1. async/await

**What it is:** Syntactic sugar for writing asynchronous code that looks synchronous.

**Problem it solves:** Promise chains are still harder to read than synchronous code.

**Where it's used:** Everywhere - API calls, file operations, any async code.

```javascript
// Async function returns a Promise
async function fetchUser(id) {
  const response = await fetch(`/api/users/${id}`);
  const user = await response.json();
  return user;
}

// Error handling with try/catch
async function getUserData() {
  try {
    const user = await fetchUser(1);
    const posts = await fetchPosts(user.id);
    return { user, posts };
  } catch (error) {
    console.error("Error:", error);
  }
}
```

---

## 2. Object.values()

**What it is:** Returns an array of object's own property values.

**Problem it solves:** Had to map over Object.keys() to get values.

**Where it's used:** Object iteration, data transformation.

```javascript
const user = {
  name: "John",
  age: 30,
  email: "john@example.com"
};

const values = Object.values(user);
// ["John", 30, "john@example.com"]

// Practical use
const sum = Object.values({ a: 1, b: 2, c: 3 })
  .reduce((total, n) => total + n, 0); // 6
```

---

## 3. Object.entries()

**What it is:** Returns an array of [key, value] pairs.

**Problem it solves:** Converting objects to arrays for iteration.

**Where it's used:** Object iteration, transformations, Map creation.

```javascript
const user = {
  name: "John",
  age: 30,
  email: "john@example.com"
};

const entries = Object.entries(user);
// [["name", "John"], ["age", 30], ["email", "john@example.com"]]

// Convert to Map
const map = new Map(Object.entries(user));

// Iterate
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// Filter object
const filtered = Object.fromEntries(
  Object.entries(user).filter(([key, value]) => typeof value === "string")
);
```

---

## 4. String.prototype.padStart()

**What it is:** Pad a string from the start to a certain length.

**Problem it solves:** Manual string padding implementation.

**Where it's used:** Formatting numbers, timestamps, alignment.

```javascript
"5".padStart(3, "0");        // "005"
"42".padStart(5, "0");       // "00042"
"hello".padStart(10);        // "     hello" (spaces by default)
"world".padStart(10, "*");   // "*****world"

// Practical: Format numbers
const id = 7;
const formattedId = String(id).padStart(6, "0"); // "000007"
```

---

## 5. String.prototype.padEnd()

**What it is:** Pad a string from the end to a certain length.

**Problem it solves:** Manual string padding implementation.

**Where it's used:** Table formatting, text alignment.

```javascript
"5".padEnd(3, "0");        // "500"
"hello".padEnd(10);        // "hello     "
"world".padEnd(10, "!");   // "world!!!!!"

// Practical: Format table
const name = "John";
const paddedName = name.padEnd(15); // "John           "
```

---

## 6. Object.getOwnPropertyDescriptors()

**What it is:** Get all own property descriptors of an object.

**Problem it solves:** Copying objects with getters/setters and property attributes.

**Where it's used:** Object cloning, library development.

```javascript
const obj = {
  get value() { return 42; },
  normal: "property"
};

const descriptors = Object.getOwnPropertyDescriptors(obj);
// {
//   value: { get: [Function: get value], ... },
//   normal: { value: "property", ... }
// }

// Clone with all property attributes
const clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);
```

---

## 7. Trailing Commas in Function Parameters

**What it is:** Allow trailing commas in parameter lists.

**Problem it solves:** Cleaner git diffs, easier to reorder parameters.

**Where it's used:** Function definitions and calls.

```javascript
// Function definition
function doSomething(
  param1,
  param2,
  param3, // trailing comma OK
) {
  // ...
}

// Function call
doSomething(
  arg1,
  arg2,
  arg3, // trailing comma OK
);
```

---

## 8. SharedArrayBuffer and Atomics

**What it is:** Shared memory and atomic operations for parallel computing.

**Problem it solves:** Communication between Web Workers.

**Where it's used:** Advanced parallel computations, Web Workers.

```javascript
// Create shared memory
const buffer = new SharedArrayBuffer(1024);
const view = new Int32Array(buffer);

// Atomic operations
Atomics.add(view, 0, 10);  // Atomically add 10 to index 0
Atomics.load(view, 0);     // Atomically load value at index 0
```

**Note:** SharedArrayBuffer was temporarily disabled in 2018 due to Spectre/Meltdown, but has been re-enabled with security measures.
