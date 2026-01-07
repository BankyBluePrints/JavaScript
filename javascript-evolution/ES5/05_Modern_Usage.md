# ES5 Modern Usage Guide

## When to Prefer ES5 Features

ES5 features are fundamental to modern JavaScript and should be used extensively:

### 1. Array Methods
**Use when:**
- Processing collections of data
- Filtering, transforming, or aggregating arrays
- You want declarative, readable code
- Building data pipelines

**Real-world use cases:**
```javascript
// E-commerce: Filter and calculate
var cart = [
  { name: "Book", price: 20, quantity: 2 },
  { name: "Pen", price: 5, quantity: 10 }
];

var total = cart
  .map(function(item) { return item.price * item.quantity; })
  .reduce(function(sum, price) { return sum + price; }, 0);

// Data validation: Check conditions
var allInStock = products.every(function(p) { 
  return p.stock > 0; 
});

var hasDiscounted = products.some(function(p) { 
  return p.discount > 0; 
});
```

---

### 2. JSON Methods
**Use when:**
- Sending/receiving data from APIs
- Storing data in localStorage
- Deep cloning objects (with limitations)
- Logging structured data

**Real-world use cases:**
```javascript
// API communication
function saveUser(user) {
  var json = JSON.stringify(user);
  fetch("/api/users", {
    method: "POST",
    body: json,
    headers: { "Content-Type": "application/json" }
  });
}

// LocalStorage
localStorage.setItem("user", JSON.stringify(userData));
var user = JSON.parse(localStorage.getItem("user"));

// Deep clone (simple objects only)
var clone = JSON.parse(JSON.stringify(original));
```

---

### 3. Strict Mode
**Use when:**
- Starting any new JavaScript file or function
- You want to catch errors early
- Building production applications
- Working in a team (consistency)

**Real-world use cases:**
```javascript
"use strict";

// Catches typos
function calculateTotal(price, quantity) {
  // Without strict mode, this creates a global variable
  // With strict mode, this throws an error
  totle = price * quantity; // ReferenceError!
  return total;
}

// Prevents silent failures
var obj = {};
Object.defineProperty(obj, "x", { value: 42, writable: false });
obj.x = 100; // Throws TypeError in strict mode
```

---

### 4. Function.bind()
**Use when:**
- Passing methods as callbacks
- Event handlers that need context
- Partial application of arguments
- Creating bound methods

**Real-world use cases:**
```javascript
// Event handlers
var button = document.getElementById("myButton");
button.addEventListener("click", this.handleClick.bind(this));

// Timers
setTimeout(this.update.bind(this), 1000);

// Partial application
function multiply(a, b) {
  return a * b;
}
var double = multiply.bind(null, 2);
console.log(double(5)); // 10
```

---

### 5. Object Methods
**Use when:**
- Creating immutable configurations
- Implementing inheritance
- Building frameworks/libraries
- Need fine-grained property control

**Real-world use cases:**
```javascript
// Configuration management
var config = {};
Object.defineProperty(config, "API_KEY", {
  value: process.env.API_KEY,
  writable: false,
  configurable: false
});

// Prevent modifications
var appState = { user: null, loggedIn: false };
Object.freeze(appState);

// Simple inheritance
var baseModel = {
  save: function() { /* ... */ },
  delete: function() { /* ... */ }
};
var userModel = Object.create(baseModel);
```

---

## Common Mistakes and Pitfalls

### 1. Array Method Pitfalls

❌ **Wrong:** Forgetting return in map/filter
```javascript
var doubled = [1, 2, 3].map(function(n) {
  n * 2; // Missing return!
}); // [undefined, undefined, undefined]
```

✅ **Correct:** Always return value
```javascript
var doubled = [1, 2, 3].map(function(n) {
  return n * 2;
});
```

---

### 2. JSON Pitfalls

❌ **Wrong:** Assuming JSON handles everything
```javascript
var obj = {
  name: "John",
  greet: function() { return "Hi"; },
  date: new Date()
};
var json = JSON.stringify(obj);
// Functions are lost, dates become strings!
```

✅ **Correct:** Know JSON limitations
```javascript
// JSON doesn't preserve:
// - Functions
// - undefined values
// - Symbols
// - Circular references
// Only serialize data, not behavior
```

---

### 3. bind() Pitfalls

❌ **Wrong:** Binding repeatedly
```javascript
// Each call creates a NEW function
button.addEventListener("click", handler.bind(this));
button.removeEventListener("click", handler.bind(this)); // Doesn't work!
```

✅ **Correct:** Store bound function
```javascript
this.boundHandler = handler.bind(this);
button.addEventListener("click", this.boundHandler);
button.removeEventListener("click", this.boundHandler); // Works!
```

---

### 4. Strict Mode Pitfalls

❌ **Wrong:** Mixing strict and non-strict
```javascript
// File with strict mode
"use strict";
// ...

// Concatenating with non-strict file can cause issues
```

✅ **Correct:** Use function-level strict mode when needed
```javascript
function myFunction() {
  "use strict";
  // Strict mode only in this function
}
```

---

### 5. Object.freeze() Pitfalls

❌ **Wrong:** Assuming deep freeze
```javascript
var obj = {
  name: "John",
  address: { city: "NYC" }
};
Object.freeze(obj);
obj.address.city = "LA"; // This works! Only shallow freeze
```

✅ **Correct:** Implement deep freeze if needed
```javascript
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.keys(obj).forEach(function(key) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });
  return obj;
}
```

---

## Browser / Node.js Compatibility Notes

### ES5 Support

✅ **Excellent Support:**
- IE9+ (full support)
- IE10+ (complete support including strict mode)
- All modern browsers (Chrome 23+, Firefox 21+, Safari 6+)
- Node.js 0.10+ (all versions)
- All mobile browsers

### Partial Support (IE9-10)
Some features have quirks:
- `Function.prototype.bind()` - Fully supported IE9+
- Strict mode - Fully supported IE10+ (partial IE9)
- `Object.create()` - IE9+ (with limitations in IE9)

### Production Ready

ES5 is production-ready for:
- ✅ All modern web applications
- ✅ Enterprise applications
- ✅ Node.js backend services
- ✅ Mobile apps (Cordova, React Native)

### When to Transpile

You typically DON'T need to transpile ES5 unless:
- Supporting IE8 and below
- Using ES6+ features that compile to ES5

### Best Practices

1. **Target ES5 for maximum compatibility**
   ```javascript
   // Babel/TypeScript config
   {
     "target": "ES5"
   }
   ```

2. **Use ES5 as baseline in libraries**
   - Most libraries compile to ES5
   - Ensures widest compatibility

3. **Polyfills for edge cases**
   ```javascript
   // For IE8, you might need polyfills:
   // - Array.prototype.forEach
   // - Array.prototype.map
   // - Function.prototype.bind
   // - Object.keys
   ```

4. **Feature Detection**
   ```javascript
   if (!Array.prototype.forEach) {
     // Provide polyfill
   }
   ```

---

## Migration from ES3 to ES5

### Gradual Approach

1. **Start with strict mode**
   ```javascript
   "use strict";
   ```

2. **Replace loops with array methods**
   ```javascript
   // Old
   for (var i = 0; i < arr.length; i++) { }
   
   // New
   arr.forEach(function(item) { });
   ```

3. **Use JSON instead of eval**
   ```javascript
   // Old
   var data = eval("(" + jsonString + ")");
   
   // New
   var data = JSON.parse(jsonString);
   ```

4. **Use Object methods for better control**
   ```javascript
   // Old
   for (var key in obj) { }
   
   // New
   Object.keys(obj).forEach(function(key) { });
   ```

---

## Performance Considerations

- **Array methods** are often faster than manual loops (engine optimizations)
- **JSON.parse()** is highly optimized in all engines
- **bind()** has small overhead but negligible in practice
- **Strict mode** can enable better optimizations

**Bottom line:** ES5 features are the foundation of modern JavaScript. They're well-supported, well-optimized, and essential for writing clean, maintainable code. Use them liberally!
