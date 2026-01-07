# ES2023 New Features

## Immutable Array Methods

### 1. toReversed()
```javascript
const arr = [1, 2, 3];
const reversed = arr.toReversed(); // [3, 2, 1]
// arr is still [1, 2, 3]
```

### 2. toSorted()
```javascript
const arr = [3, 1, 2];
const sorted = arr.toSorted(); // [1, 2, 3]
// arr is still [3, 1, 2]
```

### 3. toSpliced()
```javascript
const arr = [1, 2, 3, 4];
const spliced = arr.toSpliced(1, 2, 'a', 'b');
// [1, 'a', 'b', 4]
```

### 4. with()
```javascript
const arr = [1, 2, 3];
const newArr = arr.with(1, 99); // [1, 99, 3]
```

### 5. findLast() / findLastIndex()
```javascript
[1, 2, 3, 4].findLast(x => x % 2 === 0); // 4
[1, 2, 3, 4].findLastIndex(x => x % 2 === 0); // 3
```
