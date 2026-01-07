# ES2022 Before vs After

## Private Fields

### ❌ Before
```javascript
class User {
  constructor() {
    this._password = '';  // Convention, not enforced
  }
}
```

### ✅ After
```javascript
class User {
  #password = '';  // Truly private
  
  setPassword(pwd) {
    this.#password = pwd;
  }
}
```

## Negative Indexing

### ❌ Before
```javascript
const arr = [1, 2, 3, 4, 5];
const last = arr[arr.length - 1];
const secondLast = arr[arr.length - 2];
```

### ✅ After
```javascript
const arr = [1, 2, 3, 4, 5];
const last = arr.at(-1);
const secondLast = arr.at(-2);
```
