# ES2020 Before vs After

## Optional Chaining

### ❌ Before (ES2019)
```javascript
// Defensive null checking
const city = user && user.address && user.address.city;

// Method calls
const result = obj && obj.method && obj.method();

// Array access
const first = arr && arr[0];
```

### ✅ After (ES2020+)
```javascript
const city = user?.address?.city;
const result = obj?.method?.();
const first = arr?.[0];
```

---

## Nullish Coalescing

### ❌ Before (ES2019)
```javascript
// Problem: 0, false, '' are falsy
const count = userInput || 10;
// If userInput is 0, count becomes 10 (wrong!)

// Workaround
const count = userInput !== null && userInput !== undefined 
  ? userInput 
  : 10;
```

### ✅ After (ES2020+)
```javascript
const count = userInput ?? 10;
// If userInput is 0, count is 0 (correct!)
```

