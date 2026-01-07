# Async/Await (ES2017)

## What it is
Async/await is syntactic sugar built on top of Promises that makes asynchronous code look and behave more like synchronous code. The `async` keyword declares an async function, and `await` pauses execution until a Promise resolves.

## Before this feature
Before ES2017, handling asynchronous code required Promise chains with `.then()`, which could still become nested and hard to follow for complex flows.

```javascript
// ES6 - Promise chains
function fetchUserData() {
  return fetch('/api/user')
    .then(response => response.json())
    .then(user => {
      return fetch(`/api/posts/${user.id}`)
        .then(response => response.json())
        .then(posts => {
          return { user, posts };
        });
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}

// Even with Promises, sequential operations require nesting
function processData() {
  return fetchData()
    .then(data => {
      return validateData(data);
    })
    .then(validData => {
      return saveData(validData);
    })
    .then(result => {
      console.log('Success:', result);
      return result;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
```

## After this feature
ES2017 introduced async/await for clean, synchronous-looking asynchronous code.

```javascript
// ES2017 - Async/await
async function fetchUserData() {
  try {
    const response = await fetch('/api/user');
    const user = await response.json();
    
    const postsResponse = await fetch(`/api/posts/${user.id}`);
    const posts = await postsResponse.json();
    
    return { user, posts };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Sequential operations are natural
async function processData() {
  try {
    const data = await fetchData();
    const validData = await validateData(data);
    const result = await saveData(validData);
    
    console.log('Success:', result);
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Basic async function
async function greet() {
  return 'Hello';  // Automatically wrapped in Promise
}

greet().then(msg => console.log(msg));  // "Hello"

// Async functions always return a Promise
async function getValue() {
  return 42;
}

getValue().then(value => console.log(value));  // 42

// Await pauses execution
async function demo() {
  console.log('Start');
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('After 1 second');
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('After 2 seconds');
}

// Error handling with try-catch
async function fetchData(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
    return null;
  }
}

// Parallel execution with Promise.all
async function fetchMultiple() {
  const [users, posts, comments] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/posts').then(r => r.json()),
    fetch('/api/comments').then(r => r.json())
  ]);
  
  return { users, posts, comments };
}

// Sequential vs Parallel
async function sequential() {
  const user = await fetchUser();      // Wait
  const posts = await fetchPosts();    // Then wait
  return { user, posts };
  // Total time: time1 + time2
}

async function parallel() {
  const [user, posts] = await Promise.all([
    fetchUser(),
    fetchPosts()
  ]);
  return { user, posts };
  // Total time: max(time1, time2)
}

// Loop with await
async function processItems(items) {
  for (const item of items) {
    await processItem(item);  // Process one at a time
    console.log(`Processed: ${item}`);
  }
}

// Map with async
async function processAll(items) {
  const promises = items.map(async item => {
    return await processItem(item);
  });
  
  return await Promise.all(promises);  // Wait for all
}

// Practical: API call with retry
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}

// Conditional await
async function getData(useCache) {
  if (useCache) {
    return getCachedData();  // Synchronous
  }
  
  return await fetchData();  // Asynchronous
}

// Await in arrow function
const fetchUser = async () => {
  const response = await fetch('/api/user');
  return response.json();
};
```

## Why this is better
- **Synchronous-looking** - Code reads top-to-bottom naturally
- **Better error handling** - Standard try-catch works
- **Debugging** - Easier to debug than Promise chains
- **No callback hell** - Flat structure for any nesting level
- **Clear flow** - Sequential operations obvious
- **Combines with Promises** - Can use Promise.all, etc.

## Key notes / edge cases
- **Always returns Promise** - Async functions return Promise automatically
- **Top-level await** - Not available until ES2022 (modules only)
- **Error handling** - Must use try-catch or .catch()
- **Await only in async** - Can't use await outside async function
- **Parallel execution** - Use Promise.all() for parallel operations
- **Blocking** - Await blocks execution in that function (but not global)
- **Memory** - Long-awaited operations hold memory

## Quick practice

### Practice 1
Convert this Promise chain to async/await: `fetch(url).then(r => r.json()).then(data => console.log(data)).catch(e => console.error(e))`.

### Practice 2
Write an async function that waits 2 seconds, then returns "Done". Call it and log the result. Add error handling with try-catch.

### Practice 3
Create two async functions that return after different delays (1s and 2s). Write an async function that calls both: first sequentially (total 3s), then in parallel with Promise.all (total 2s). Time both and compare.
