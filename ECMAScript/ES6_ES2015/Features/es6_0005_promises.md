# Promises (ES6)

## What it is
Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a cleaner alternative to callback-based asynchronous code, making it easier to handle async operations and avoid callback hell.

## Before this feature
Before ES6, asynchronous operations relied on callbacks, leading to nested callback structures (callback hell) that were hard to read and maintain.

```javascript
// ES5 - Callback hell
function fetchUser(userId, callback) {
  setTimeout(function() {
    callback({ id: userId, name: "John" });
  }, 100);
}

function fetchPosts(userId, callback) {
  setTimeout(function() {
    callback([{ id: 1, title: "Post 1" }]);
  }, 100);
}

// Nested callbacks
fetchUser(1, function(user) {
  console.log("User:", user);
  fetchPosts(user.id, function(posts) {
    console.log("Posts:", posts);
    // Even more nesting for additional operations...
  });
});

// Error handling is complicated
function getData(callback) {
  setTimeout(function() {
    var error = Math.random() > 0.5;
    if (error) {
      callback(new Error("Failed"), null);
    } else {
      callback(null, { data: "success" });
    }
  }, 100);
}
```

## After this feature
ES6 introduced Promises for cleaner asynchronous code with chaining and better error handling.

```javascript
// ES6 - Promises
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: userId, name: "John" });
    }, 100);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: 1, title: "Post 1" }]);
    }, 100);
  });
}

// Promise chaining (no nesting!)
fetchUser(1)
  .then(user => {
    console.log("User:", user);
    return fetchPosts(user.id);
  })
  .then(posts => {
    console.log("Posts:", posts);
  })
  .catch(error => {
    console.error("Error:", error);
  });

// Creating promises
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Promise.all - wait for multiple promises
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results);  // [1, 2, 3]
  });

// Promise.race - first to complete wins
const slow = new Promise(resolve => setTimeout(() => resolve("slow"), 200));
const fast = new Promise(resolve => setTimeout(() => resolve("fast"), 100));

Promise.race([slow, fast])
  .then(result => {
    console.log(result);  // "fast"
  });

// Error handling
function riskyOperation() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) {
      resolve("Success!");
    } else {
      reject(new Error("Failed!"));
    }
  });
}

riskyOperation()
  .then(result => console.log(result))
  .catch(error => console.error("Caught:", error.message));

// Chaining with transformation
fetch('https://api.example.com/data')  // Hypothetical
  .then(response => response.json())
  .then(data => data.items)
  .then(items => items.filter(item => item.active))
  .then(activeItems => console.log(activeItems))
  .catch(error => console.error("Error:", error));

// Promise utilities
Promise.resolve(42).then(value => console.log(value));  // 42
Promise.reject("Error").catch(err => console.error(err));  // "Error"
```

## Why this is better
- **No callback hell** - Flat chaining instead of nested callbacks
- **Better error handling** - Single .catch() for entire chain
- **Composable** - Easy to combine multiple async operations
- **Readable** - Code flows naturally from top to bottom
- **Standardized** - Consistent API across libraries
- **Built-in utilities** - Promise.all, Promise.race, etc.

## Key notes / edge cases
- **States**: Pending, fulfilled, or rejected (immutable once settled)
- **Always async**: .then() callbacks execute asynchronously
- **Error propagation**: Errors bubble down to nearest .catch()
- **Return promises**: Return promises in .then() for chaining
- **Memory leaks**: Unhandled rejections can cause issues
- **finally()**: ES2018 added .finally() for cleanup
- **Async/await**: ES2017 provides even cleaner syntax

## Quick practice

### Practice 1
Create a Promise that resolves after 2 seconds with the message "Done!". Use .then() to log the message and .catch() to handle any errors.

### Practice 2
Write two functions that return promises: `fetchUser()` resolves with a user object after 1 second, `fetchOrders(userId)` resolves with orders after 1 second. Chain them to fetch a user then their orders.

### Practice 3
Create three promises that resolve at different times (100ms, 200ms, 300ms) with values 1, 2, 3. Use Promise.all() to wait for all of them and log the combined results. Then use Promise.race() and see which one wins.
