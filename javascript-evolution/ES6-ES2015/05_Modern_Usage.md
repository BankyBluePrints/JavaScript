# ES6/ES2015 Modern Usage Guide

## When to Prefer ES6 Features

ES6 is the foundation of modern JavaScript. Use these features everywhere:

### 1. Always Use let/const (Never var)

**Use when:**
- Declaring any variable (replace all `var` usage)
- Use `const` by default, `let` when reassignment is needed

**Real-world use cases:**
```javascript
// Constants
const API_URL = "https://api.example.com";
const MAX_RETRIES = 3;

// Block-scoped loops
for (let i = 0; i < 10; i++) {
  // i is block-scoped
}

// Reassignable values
let count = 0;
count++;
```

---

### 2. Arrow Functions

**Use when:**
- Array methods (map, filter, reduce)
- Short callbacks
- You need lexical `this` binding
- **Don't use for:** Methods in objects, constructors

**Real-world use cases:**
```javascript
// Array operations
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);

// Event handlers with preserved context
button.addEventListener('click', () => {
  this.handleClick(); // 'this' from enclosing scope
});

// Promises
fetchData()
  .then(data => processData(data))
  .catch(error => console.error(error));
```

---

### 3. Template Literals

**Use when:**
- Building strings with variables
- Multi-line strings
- HTML/SQL templates
- **Replace:** All string concatenation

**Real-world use cases:**
```javascript
// API URLs
const url = `${API_BASE}/users/${userId}/posts`;

// HTML templates
const html = `
  <div class="user">
    <h2>${user.name}</h2>
    <p>${user.email}</p>
  </div>
`;

// SQL queries
const query = `
  SELECT * FROM users
  WHERE age > ${minAge}
  AND city = '${city}'
`;

// Logging
console.log(`User ${name} logged in at ${timestamp}`);
```

---

### 4. Destructuring

**Use when:**
- Extracting multiple properties
- Function parameters with many options
- Swapping variables
- Working with arrays/objects from APIs

**Real-world use cases:**
```javascript
// React props
function UserCard({ name, email, avatar }) {
  return <div>{name}</div>;
}

// API responses
const { data, error, loading } = await fetchUser();

// Config objects
function createServer({ port = 3000, host = 'localhost', ssl = false }) {
  // ...
}

// Swapping
[a, b] = [b, a];
```

---

### 5. Rest/Spread Operators

**Use when:**
- Copying arrays/objects
- Merging collections
- Variable-length function parameters
- **Replace:** concat, slice, apply

**Real-world use cases:**
```javascript
// React state updates (immutable)
setState({ ...state, user: newUser });

// Array manipulation
const allItems = [...oldItems, ...newItems];
const copy = [...original];

// Function arguments
function log(level, ...messages) {
  console[level](...messages);
}

// Removing elements
const [first, ...rest] = array;
const { password, ...safeUser } = user;
```

---

### 6. Classes

**Use when:**
- Creating reusable components
- Need inheritance
- Organizing related functionality
- React components (class components)

**Real-world use cases:**
```javascript
// React component
class UserProfile extends React.Component {
  render() {
    return <div>{this.props.user.name}</div>;
  }
}

// Service class
class APIClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  
  async get(endpoint) {
    return fetch(`${this.baseURL}${endpoint}`);
  }
}

// Data model
class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
  }
  
  save() {
    return api.put(`/users/${this.id}`, this);
  }
}
```

---

### 7. Promises

**Use when:**
- Any asynchronous operation
- API calls
- File operations
- Multiple parallel operations
- **Replace:** Callbacks

**Real-world use cases:**
```javascript
// Fetch API
fetch('/api/users')
  .then(res => res.json())
  .then(users => displayUsers(users))
  .catch(error => showError(error));

// Parallel requests
Promise.all([
  fetchUser(1),
  fetchUser(2),
  fetchUser(3)
])
  .then(users => console.log(users));

// Race condition (timeout)
Promise.race([
  fetchData(),
  new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Timeout')), 5000)
  )
]);
```

---

### 8. Modules

**Use when:**
- Every modern JavaScript project
- Organizing code into files
- Creating reusable utilities
- **Required for:** React, Vue, Angular, Node.js (ESM)

**Real-world use cases:**
```javascript
// Utility module
// utils.js
export const formatDate = (date) => { /* ... */ };
export const capitalize = (str) => { /* ... */ };

// Component
// UserCard.js
import React from 'react';
export default function UserCard({ user }) {
  return <div>{user.name}</div>;
}

// App
// app.js
import UserCard from './UserCard.js';
import { formatDate, capitalize } from './utils.js';
```

---

## Common Mistakes and Pitfalls

### 1. const Misunderstanding

❌ **Wrong:** Thinking const makes objects immutable
```javascript
const user = { name: "John" };
user.name = "Jane"; // This works! Object is mutable
user = {}; // This fails - can't reassign
```

✅ **Correct:** Use Object.freeze() for immutability
```javascript
const user = Object.freeze({ name: "John" });
user.name = "Jane"; // Silently fails (throws in strict mode)
```

---

### 2. Arrow Function as Method

❌ **Wrong:** Using arrow functions as object methods
```javascript
const obj = {
  name: "John",
  greet: () => {
    console.log(this.name); // undefined! No 'this' binding
  }
};
```

✅ **Correct:** Use regular functions for methods
```javascript
const obj = {
  name: "John",
  greet() {
    console.log(this.name); // "John"
  }
};
```

---

### 3. Destructuring with Default vs Existing Property

❌ **Wrong:** Default doesn't override undefined
```javascript
const { name = "Guest" } = { name: undefined };
console.log(name); // "Guest" - default used for undefined

const { age = 18 } = { age: null };
console.log(age); // null - not undefined!
```

✅ **Correct:** Know when defaults apply
```javascript
// Defaults only for undefined or missing
const { name = "Guest" } = { }; // "Guest"
const { name = "Guest" } = { name: undefined }; // "Guest"
const { name = "Guest" } = { name: null }; // null
```

---

### 4. Spread Shallow Copy

❌ **Wrong:** Assuming spread does deep copy
```javascript
const original = { a: 1, nested: { b: 2 } };
const copy = { ...original };
copy.nested.b = 999; // Modifies original.nested.b!
```

✅ **Correct:** Use deep clone when needed
```javascript
const copy = JSON.parse(JSON.stringify(original));
// Or use lodash cloneDeep, or structuredClone (modern)
```

---

### 5. Class Constructor Return

❌ **Wrong:** Returning from constructor
```javascript
class User {
  constructor(name) {
    return { name }; // Don't do this!
  }
}
```

✅ **Correct:** Assign to this
```javascript
class User {
  constructor(name) {
    this.name = name;
  }
}
```

---

### 6. Promise Error Handling

❌ **Wrong:** Forgetting to catch errors
```javascript
fetchData()
  .then(data => processData(data));
// Unhandled promise rejection!
```

✅ **Correct:** Always handle errors
```javascript
fetchData()
  .then(data => processData(data))
  .catch(error => console.error(error));
```

---

## Browser / Node.js Compatibility

### ES6 Support

**Excellent Support (95%+):**
- Chrome 51+
- Firefox 54+
- Safari 10+
- Edge 14+
- Node.js 6+ (full support in Node.js 8+)

### Partial Support

**IE11:** No support - requires transpilation

### Transpilation

For older browsers, use **Babel**:
```json
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "browsers": ["last 2 versions", "ie >= 11"]
      }
    }]
  ]
}
```

### Module Support

**ES Modules in browsers:**
```html
<script type="module" src="app.js"></script>
```

**Node.js:**
- Use `.mjs` extension, or
- Set `"type": "module"` in package.json

---

## Migration Strategy

### 1. Gradual Migration

```javascript
// Step 1: var → const/let
var x = 10;  →  const x = 10;
var y = 20;  →  let y = 20;

// Step 2: function → arrow
array.map(function(x) { return x * 2; })  →  array.map(x => x * 2)

// Step 3: Concatenation → template literals
"Hello, " + name  →  `Hello, ${name}`

// Step 4: Callbacks → Promises
func(callback)  →  func().then(...)
```

### 2. Linting Rules

Use ESLint to enforce modern syntax:
```json
{
  "rules": {
    "prefer-const": "error",
    "prefer-arrow-callback": "error",
    "prefer-template": "error",
    "prefer-destructuring": "warn"
  }
}
```

### 3. Code Modernization Tools

- **lebab** - Transpile ES5 → ES6
- **eslint --fix** - Auto-fix issues
- **prettier** - Code formatting

---

## Performance Considerations

- **Classes:** Same performance as prototypes
- **Arrow functions:** Slight overhead for lexical this, negligible
- **Spread:** Can be slower for large arrays (use concat for huge arrays)
- **Destructuring:** No overhead after optimization
- **Template literals:** Same as concatenation after compilation

**Bottom line:** Use ES6 features freely. Performance differences are negligible, and code readability matters more.

---

## Best Practices

1. **Use const by default**, let when needed, never var
2. **Use arrow functions** for callbacks, regular functions for methods
3. **Use template literals** for all string building
4. **Destructure** function parameters with many options
5. **Use spread** for copying and merging
6. **Use classes** for components and models
7. **Use Promises** (or async/await) for all async code
8. **Use modules** to organize code
9. **Always catch** Promise errors
10. **Transpile** for older browser support

ES6 is the baseline for modern JavaScript. Master these features—they're essential for all current development!
