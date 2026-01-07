# ES2023 Before vs After

## Immutable Reverse

### ❌ Before
```javascript
const arr = [1, 2, 3];
const reversed = [...arr].reverse();
```

### ✅ After
```javascript
const arr = [1, 2, 3];
const reversed = arr.toReversed();
```

## Immutable Sort

### ❌ Before
```javascript
const arr = [3, 1, 2];
const sorted = [...arr].sort();
```

### ✅ After
```javascript
const arr = [3, 1, 2];
const sorted = arr.toSorted();
```
