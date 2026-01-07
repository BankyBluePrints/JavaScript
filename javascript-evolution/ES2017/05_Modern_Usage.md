# ES2017 Modern Usage Guide

## When to Prefer ES2017 Features

### 1. async/await (Always!)

**Use when:**
- ANY asynchronous operation
- API calls, database queries
- File operations
- Any Promise-based code
- **Replace:** .then() chains

**Real-world use cases:**
```javascript
// API calls
async function loadUser(id) {
  const response = await fetch(`/api/users/${id}`);
  return await response.json();
}

// Sequential operations
async function processOrder(order) {
  const validated = await validateOrder(order);
  const payment = await processPayment(validated);
  const confirmation = await sendConfirmation(payment);
  return confirmation;
}

// Parallel operations
async function loadAllData() {
  const [users, products, orders] = await Promise.all([
    fetchUsers(),
    fetchProducts(),
    fetchOrders()
  ]);
  return { users, products, orders };
}

// Error handling
async function safeOperation() {
  try {
    return await riskyOperation();
  } catch (error) {
    console.error(error);
    return null;
  }
}
```

---

### 2. Object.values()

**Use when:**
- Need array of object values
- Aggregating object data
- Iterating without keys

**Real-world use cases:**
```javascript
// Sum all values
const cart = { item1: 10, item2: 20, item3: 15 };
const total = Object.values(cart).reduce((sum, price) => sum + price, 0);

// Check all values
const settings = { sound: true, notifications: true, darkMode: true };
const allEnabled = Object.values(settings).every(v => v === true);

// Get all values for processing
const scores = { math: 95, science: 88, english: 92 };
const average = Object.values(scores).reduce((a, b) => a + b) / Object.values(scores).length;
```

---

### 3. Object.entries()

**Use when:**
- Need both keys and values
- Converting object to Map
- Filtering/transforming objects
- Iterating with destructuring

**Real-world use cases:**
```javascript
// Create Map
const obj = { name: "John", age: 30 };
const map = new Map(Object.entries(obj));

// Filter object
const user = { name: "John", age: 30, password: "secret" };
const safe = Object.fromEntries(
  Object.entries(user).filter(([key]) => key !== "password")
);

// Transform object
const prices = { apple: 1, banana: 2 };
const discounted = Object.fromEntries(
  Object.entries(prices).map(([item, price]) => [item, price * 0.9])
);

// Iterate
for (const [key, value] of Object.entries(config)) {
  console.log(`${key}: ${value}`);
}
```

---

### 4. String Padding

**Use when:**
- Formatting IDs, codes
- Table/column alignment
- Time formatting
- Fixed-width output

**Real-world use cases:**
```javascript
// Format IDs
const orderId = 42;
const formatted = String(orderId).padStart(8, "0"); // "00000042"

// Time formatting
const time = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

// Table columns
const name = "John";
const paddedName = name.padEnd(20); // "John                "

// Credit card masking
const lastFour = "1234";
const masked = lastFour.padStart(16, "*"); // "************1234"
```

---

## Common Mistakes and Pitfalls

### 1. Forgetting await

❌ **Wrong:**
```javascript
async function getData() {
  const data = fetch('/api/data'); // Returns Promise, not data!
  console.log(data); // Promise { <pending> }
}
```

✅ **Correct:**
```javascript
async function getData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  console.log(data); // Actual data
}
```

---

### 2. Not Catching Errors

❌ **Wrong:**
```javascript
async function loadData() {
  const data = await fetchData(); // Unhandled promise rejection!
  return data;
}
```

✅ **Correct:**
```javascript
async function loadData() {
  try {
    const data = await fetchData();
    return data;
  } catch (error) {
    console.error("Error loading data:", error);
    return null;
  }
}
```

---

### 3. Sequential Instead of Parallel

❌ **Wrong (slow):**
```javascript
async function loadAll() {
  const users = await fetchUsers();    // 1 second
  const posts = await fetchPosts();    // 1 second
  const comments = await fetchComments(); // 1 second
  // Total: 3 seconds
}
```

✅ **Correct (fast):**
```javascript
async function loadAll() {
  const [users, posts, comments] = await Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
  ]);
  // Total: 1 second (parallel)
}
```

---

### 4. Using async Without await

❌ **Wrong:**
```javascript
async function doNothing() {
  return 42; // Unnecessary async
}
```

✅ **Correct:**
```javascript
function doNothing() {
  return 42; // No async needed
}

// Only use async if you await something
async function doSomething() {
  const result = await fetchData();
  return result;
}
```

---

### 5. Loops with await

❌ **Wrong (sequential):**
```javascript
async function processItems(items) {
  const results = [];
  for (const item of items) {
    const result = await processItem(item); // One at a time!
    results.push(result);
  }
  return results;
}
```

✅ **Correct (parallel):**
```javascript
async function processItems(items) {
  return await Promise.all(
    items.map(item => processItem(item))
  );
}
```

---

## Browser / Node.js Compatibility

### ES2017 Support

✅ **Excellent Support:**
- Chrome 55+
- Firefox 52+
- Safari 10.1+
- Edge 15+
- Node.js 7.6+ (full async/await)
- Node.js 8+ (complete support)

### Transpilation

For older browsers, use Babel:
```json
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "browsers": ["last 2 versions"]
      }
    }]
  ]
}
```

---

## Migration Strategy

### Replace Promise Chains

```javascript
// Old
function loadData() {
  return fetch('/api/data')
    .then(res => res.json())
    .then(data => processData(data))
    .catch(error => console.error(error));
}

// New
async function loadData() {
  try {
    const res = await fetch('/api/data');
    const data = await res.json();
    return processData(data);
  } catch (error) {
    console.error(error);
  }
}
```

### Use Object Methods

```javascript
// Old
Object.keys(obj).map(key => obj[key])
Object.keys(obj).map(key => [key, obj[key]])

// New
Object.values(obj)
Object.entries(obj)
```

---

## Best Practices

1. **Always use async/await** instead of .then()
2. **Always catch errors** with try/catch
3. **Use Promise.all** for parallel operations
4. **Use Object.entries()** for object iteration
5. **Use Object.values()** when you only need values
6. **Use string padding** instead of custom implementations
7. **Don't mix** async/await and .then() in same function
8. **Use await** in loops only when sequential execution is needed

---

## Performance Tips

- async/await has no overhead vs Promises
- Use Promise.all for parallel operations
- Object.values/entries are optimized
- String padding is faster than custom code

**Bottom line:** ES2017, especially async/await, is **essential** for modern JavaScript. Use it everywhere for async code—it's the standard way to handle asynchronous operations!
