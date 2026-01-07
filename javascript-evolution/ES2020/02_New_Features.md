# ES2020 New Features

## 1. Optional Chaining (`?.`)
Safely access nested properties.
```javascript
const user = { profile: { name: "John" } };
user?.profile?.name;  // "John"
user?.address?.city;  // undefined (no error!)

// Works with methods and arrays
obj?.method?.();
arr?.[0];
```

## 2. Nullish Coalescing (`??`)
Default only for null/undefined (not 0, false, '').
```javascript
const count = 0;
count || 10;  // 10 (wrong!)
count ?? 10;  // 0 (correct!)

const name = '';
name || 'Guest';  // 'Guest' (wrong!)
name ?? 'Guest';  // '' (correct!)
```

## 3. BigInt
Arbitrary precision integers.
```javascript
const big = 9007199254740991n;
const bigger = BigInt("9007199254740992");
big + 1n; // 9007199254740992n
```

## 4. Promise.allSettled()
Wait for all promises (success or failure).
```javascript
const results = await Promise.allSettled([
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
]);
// Always resolves with status of each promise
```

## 5. globalThis
Universal global object (works everywhere).
```javascript
globalThis.setTimeout === setTimeout; // true
// Works in browser, Node.js, Web Workers, etc.
```

## 6. Dynamic import()
Import modules dynamically.
```javascript
const module = await import('./module.js');
// Lazy load modules
```
