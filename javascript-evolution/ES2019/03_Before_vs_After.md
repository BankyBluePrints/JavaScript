# ES2019 Before vs After

## Array.flat()

### ❌ Before (ES2018)
```javascript
const nested = [1, [2, 3], [4, [5, 6]]];

// Manual flattening
function flatten(arr) {
  return arr.reduce((acc, val) => 
    Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []
  );
}

const flat = flatten(nested);
```

### ✅ After (ES2019+)
```javascript
const nested = [1, [2, 3], [4, [5, 6]]];
const flat = nested.flat(Infinity);
```

---

## Object.fromEntries()

### ❌ Before (ES2018)
```javascript
const entries = [['name', 'John'], ['age', 30]];

// Manual conversion
const obj = {};
entries.forEach(([key, value]) => {
  obj[key] = value;
});
```

### ✅ After (ES2019+)
```javascript
const entries = [['name', 'John'], ['age', 30]];
const obj = Object.fromEntries(entries);
```

