# ES2022 New Features

## 1. Class Fields
```javascript
class Counter {
  count = 0;  // Public field
  #secret = 42;  // Private field
  
  increment() {
    this.count++;
  }
  
  #privateMethod() {
    return this.#secret;
  }
}
```

## 2. Top-level await
```javascript
// In module
const data = await fetch('/api/data');
export const config = await loadConfig();
```

## 3. .at() Method
```javascript
const arr = [1, 2, 3, 4, 5];
arr.at(-1);  // 5 (last element)
arr.at(-2);  // 4
"hello".at(-1);  // "o"
```

## 4. Object.hasOwn()
```javascript
Object.hasOwn(obj, 'property');
// Safer than obj.hasOwnProperty('property')
```
