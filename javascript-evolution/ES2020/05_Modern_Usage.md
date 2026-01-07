# ES2020 Modern Usage Guide

## Essential Features

### 1. Optional Chaining (`?.`) - Use Everywhere!
Replace all defensive null checks:
```javascript
// OLD: Multiple checks
if (user && user.profile && user.profile.name) {
  console.log(user.profile.name);
}

// NEW: One expression
console.log(user?.profile?.name);
```

### 2. Nullish Coalescing (`??`) - Use for Defaults
Replace `||` when 0/false/'' are valid:
```javascript
// Use ?? for numbers, booleans, strings
const port = config.port ?? 3000;
const enabled = settings.enabled ?? true;
const name = formData.name ?? '';
```

## Best Practices

1. **Always use `?.`** instead of `&& &&` chains
2. **Use `??`** for defaults (not `||`)
3. **Combine them**: `obj?.prop ?? defaultValue`
4. **Use Promise.allSettled()** when all results matter
5. **Use dynamic import()** for code splitting

## Browser Support

Excellent support: Chrome 80+, Firefox 72+, Safari 13.1+, Edge 80+, Node.js 14+

**Bottom line:** Optional chaining and nullish coalescing are game-changers. Use them everywhere!
