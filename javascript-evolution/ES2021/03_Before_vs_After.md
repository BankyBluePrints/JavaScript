# ES2021 Before vs After

## String.replaceAll()

### ❌ Before
```javascript
"test test test".replace(/test/g, "quiz");
// or
"test test test".split("test").join("quiz");
```

### ✅ After
```javascript
"test test test".replaceAll("test", "quiz");
```

## Logical Assignment

### ❌ Before
```javascript
if (!settings.theme) {
  settings.theme = 'light';
}
```

### ✅ After
```javascript
settings.theme ??= 'light';
```
