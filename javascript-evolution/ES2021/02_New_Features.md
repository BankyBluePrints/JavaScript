# ES2021 New Features

## 1. String.replaceAll()
```javascript
"hello world world".replaceAll("world", "there");
// "hello there there"
```

## 2. Logical Assignment Operators
```javascript
x ||= y;  // x = x || y
x &&= y;  // x = x && y
x ??= y;  // x = x ?? y
```

## 3. Numeric Separators
```javascript
const billion = 1_000_000_000;
const bytes = 0xFF_FF_FF;
```

## 4. Promise.any()
```javascript
const first = await Promise.any([fetch1(), fetch2(), fetch3()]);
// Returns first fulfilled promise
```
