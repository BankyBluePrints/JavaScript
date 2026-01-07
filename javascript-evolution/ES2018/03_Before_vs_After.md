# ES2018 Before vs After

## Object Spread

### ❌ Before (ES6)
```javascript
const user = { name: "John", age: 30 };

// Copy object
const copy = Object.assign({}, user);

// Merge objects
const defaults = { theme: "light", lang: "en" };
const settings = { lang: "es" };
const config = Object.assign({}, defaults, settings);

// Update object immutably
const updated = Object.assign({}, user, { age: 31 });

// Remove property (complex)
const { age, ...rest } = user; // Still need destructuring for rest
const removed = Object.assign({}, rest);
```

### ✅ After (ES2018+)
```javascript
const user = { name: "John", age: 30 };

// Copy object
const copy = { ...user };

// Merge objects
const defaults = { theme: "light", lang: "en" };
const settings = { lang: "es" };
const config = { ...defaults, ...settings };

// Update object immutably
const updated = { ...user, age: 31 };

// Remove property
const { age, ...removed } = user;
```

### ✔ Benefits
- Cleaner, more readable syntax
- Immutable by default
- Matches array spread pattern
- Less verbose than Object.assign()

---

## Promise.finally()

### ❌ Before (ES2017)
```javascript
function fetchDataWithLoading() {
  setLoading(true);
  
  return fetchData()
    .then(data => {
      setLoading(false); // Duplicate!
      return processData(data);
    })
    .catch(error => {
      setLoading(false); // Duplicate!
      throw error;
    });
}
```

### ✅ After (ES2018+)
```javascript
function fetchDataWithLoading() {
  setLoading(true);
  
  return fetchData()
    .then(data => processData(data))
    .catch(error => { throw error; })
    .finally(() => {
      setLoading(false); // One place!
    });
}
```

### ✔ Benefits
- No code duplication
- Cleaner cleanup logic
- Always runs (success or failure)
- Standard pattern for resource cleanup

---

## for await...of

### ❌ Before (ES2017)
```javascript
// Manual promise iteration
async function processStreamOld(stream) {
  let result = await stream.next();
  
  while (!result.done) {
    await processItem(result.value);
    result = await stream.next();
  }
}

// Or with recursion
async function processRecursive(iterator) {
  const { value, done } = await iterator.next();
  
  if (done) return;
  
  await processItem(value);
  return processRecursive(iterator);
}
```

### ✅ After (ES2018+)
```javascript
async function processStream(stream) {
  for await (const item of stream) {
    await processItem(item);
  }
}
```

### ✔ Benefits
- Natural loop syntax
- Easier to read
- Familiar for...of pattern
- Less error-prone

---

## RegExp Named Groups

### ❌ Before (ES2017)
```javascript
const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;
const match = '2023-12-25'.match(dateRegex);

// Hard to remember what each index means
const year = match[1];
const month = match[2];
const day = match[3];

// Replace with numbered groups
const formatted = '2023-12-25'.replace(
  /(\d{4})-(\d{2})-(\d{2})/,
  '$2/$3/$1'  // Cryptic!
);
```

### ✅ After (ES2018+)
```javascript
const dateRegex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = '2023-12-25'.match(dateRegex);

// Clear and self-documenting
const { year, month, day } = match.groups;

// Replace with named groups
const formatted = '2023-12-25'.replace(
  /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/,
  '$<month>/$<day>/$<year>'  // Clear!
);
```

### ✔ Benefits
- Self-documenting code
- No magic numbers
- Easier to maintain
- Clear intent
