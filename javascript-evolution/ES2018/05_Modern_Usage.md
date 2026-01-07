# ES2018 Modern Usage Guide

## When to Prefer ES2018 Features

### 1. Object Spread/Rest (Use Everywhere!)

**Use when:**
- Copying objects
- Merging objects
- Immutable updates (React, Redux)
- Removing properties
- **Replace:** Object.assign()

**Real-world use cases:**
```javascript
// React state updates
this.setState(prevState => ({
  ...prevState,
  user: { ...prevState.user, age: 31 }
}));

// Redux reducers
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

// API response filtering
const { password, ...safeUser } = user;

// Configuration merging
const config = { ...defaults, ...userSettings, ...overrides };
```

---

### 2. for await...of

**Use when:**
- Processing async iterables
- Streaming data
- Batch processing
- Async generators

**Real-world use cases:**
```javascript
// Process paginated API
async function* fetchAllPages(url) {
  let page = 1;
  while (true) {
    const data = await fetch(`${url}?page=${page++}`);
    const json = await data.json();
    if (json.length === 0) break;
    yield* json;
  }
}

for await (const item of fetchAllPages('/api/items')) {
  process(item);
}

// Read file stream (Node.js)
for await (const chunk of readStream) {
  processChunk(chunk);
}
```

---

### 3. Promise.finally()

**Use when:**
- Resource cleanup
- Loading indicators
- Logging
- Any "always execute" code

**Real-world use cases:**
```javascript
// Loading states
setLoading(true);
fetchData()
  .then(data => setData(data))
  .catch(error => setError(error))
  .finally(() => setLoading(false));

// Database connections
connectToDatabase()
  .then(db => performQuery(db))
  .finally(() => closeConnection());

// File operations
openFile()
  .then(file => processFile(file))
  .finally(() => closeFile());
```

---

### 4. RegExp Named Groups

**Use when:**
- Complex regex patterns
- Data extraction
- Text parsing
- Pattern replacement

**Real-world use cases:**
```javascript
// Parse URLs
const urlRegex = /(?<protocol>https?):\/\/(?<domain>[^\/]+)(?<path>\/.*)?/;
const { protocol, domain, path } = url.match(urlRegex).groups;

// Extract data from text
const logRegex = /(?<timestamp>\d{2}:\d{2}:\d{2}) - (?<level>\w+) - (?<message>.*)/;
const { timestamp, level, message } = logLine.match(logRegex).groups;

// Format strings
text.replace(
  /(?<first>\w+) (?<last>\w+)/,
  '$<last>, $<first>'
);
```

---

## Best Practices

1. **Always use object spread** instead of Object.assign()
2. **Use finally()** for cleanup, not then/catch
3. **Use named regex groups** for complex patterns
4. **Use for await...of** for async iteration
5. **Prefer immutable updates** with spread

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11.1+
- Edge 79+
- Node.js 8.6+ (spread), Node.js 10+ (all features)

**Bottom line:** ES2018 features, especially object spread, are essential for modern JavaScript. Use them everywhere!
