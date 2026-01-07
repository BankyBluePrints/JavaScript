# ES2019 New Features

## 1. Array.flat()
Flatten nested arrays to specified depth.
```javascript
[1, [2, [3, [4]]]].flat();    // [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(2);   // [1, 2, 3, [4]]
[1, [2, [3, [4]]]].flat(Infinity); // [1, 2, 3, 4]
```

## 2. Array.flatMap()
Map then flatten by one level.
```javascript
[1, 2, 3].flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
```

## 3. Object.fromEntries()
Convert key-value pairs to object (inverse of Object.entries()).
```javascript
const entries = [['a', 1], ['b', 2]];
Object.fromEntries(entries); // { a: 1, b: 2 }
```

## 4. String.trimStart() / trimEnd()
Trim from specific side.
```javascript
'  hello  '.trimStart(); // "hello  "
'  hello  '.trimEnd();   // "  hello"
```

## 5. Optional catch Binding
Catch without parameter when you don't need the error.
```javascript
try {
  riskyOperation();
} catch {
  // No error parameter needed
  handleError();
}
```
