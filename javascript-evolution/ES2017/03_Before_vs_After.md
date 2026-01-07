# ES2017 Before vs After

## async/await

### ❌ Before (ES6 with Promises)
```javascript
// Promise chains
function getUserData(userId) {
  return fetchUser(userId)
    .then(user => {
      console.log("User:", user);
      return fetchPosts(user.id);
    })
    .then(posts => {
      console.log("Posts:", posts);
      return fetchComments(posts[0].id);
    })
    .then(comments => {
      console.log("Comments:", comments);
      return comments;
    })
    .catch(error => {
      console.error("Error:", error);
      throw error;
    });
}

// Sequential operations with Promises
function processData() {
  return step1()
    .then(result1 => step2(result1))
    .then(result2 => step3(result2))
    .then(result3 => result3)
    .catch(error => console.error(error));
}
```

### ✅ After (ES2017+)
```javascript
// async/await - looks synchronous
async function getUserData(userId) {
  try {
    const user = await fetchUser(userId);
    console.log("User:", user);
    
    const posts = await fetchPosts(user.id);
    console.log("Posts:", posts);
    
    const comments = await fetchComments(posts[0].id);
    console.log("Comments:", comments);
    
    return comments;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// Sequential operations with async/await
async function processData() {
  try {
    const result1 = await step1();
    const result2 = await step2(result1);
    const result3 = await step3(result2);
    return result3;
  } catch (error) {
    console.error(error);
  }
}
```

### ✔ Benefits
- Reads like synchronous code
- Natural try/catch error handling
- No callback nesting or chains
- Easier to debug
- More intuitive control flow

---

## Object.values()

### ❌ Before (ES6)
```javascript
const scores = {
  math: 95,
  science: 88,
  english: 92
};

// Get all values
const values = Object.keys(scores).map(key => scores[key]);

// Calculate average
const total = Object.keys(scores)
  .map(key => scores[key])
  .reduce((sum, score) => sum + score, 0);
const average = total / Object.keys(scores).length;
```

### ✅ After (ES2017+)
```javascript
const scores = {
  math: 95,
  science: 88,
  english: 92
};

// Get all values
const values = Object.values(scores);

// Calculate average
const total = Object.values(scores)
  .reduce((sum, score) => sum + score, 0);
const average = total / Object.values(scores).length;
```

### ✔ Benefits
- Direct access to values
- No need to map over keys
- More readable
- One method call instead of two

---

## Object.entries()

### ❌ Before (ES6)
```javascript
const user = {
  name: "John",
  age: 30,
  city: "NYC"
};

// Iterate over object
Object.keys(user).forEach(key => {
  console.log(`${key}: ${user[key]}`);
});

// Convert to array of pairs
const pairs = Object.keys(user).map(key => [key, user[key]]);

// Create Map
const map = new Map();
Object.keys(user).forEach(key => {
  map.set(key, user[key]);
});
```

### ✅ After (ES2017+)
```javascript
const user = {
  name: "John",
  age: 30,
  city: "NYC"
};

// Iterate over object
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// Convert to array of pairs
const pairs = Object.entries(user);

// Create Map
const map = new Map(Object.entries(user));
```

### ✔ Benefits
- Direct key-value pairs
- Works with destructuring
- Cleaner iteration
- Easy Map creation

---

## String Padding

### ❌ Before (ES6)
```javascript
// Manual padding implementation
function padStart(str, targetLength, padString) {
  str = String(str);
  padString = String(padString || " ");
  
  if (str.length >= targetLength) {
    return str;
  }
  
  targetLength = targetLength - str.length;
  if (targetLength > padString.length) {
    padString += padString.repeat(targetLength / padString.length);
  }
  
  return padString.slice(0, targetLength) + str;
}

const id = 42;
const formatted = padStart(id, 6, "0"); // "000042"
```

### ✅ After (ES2017+)
```javascript
const id = 42;
const formatted = String(id).padStart(6, "0"); // "000042"
```

### ✔ Benefits
- Built-in method
- No custom implementation
- One line
- More reliable

---

## Parallel async Operations

### ❌ Before (ES6 Promises)
```javascript
// Using Promise.all - harder to understand
function loadAllData() {
  return Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
  ])
    .then(([users, posts, comments]) => {
      return { users, posts, comments };
    })
    .catch(error => {
      console.error("Error loading data:", error);
    });
}
```

### ✅ After (ES2017+)
```javascript
// async/await with Promise.all - clearer
async function loadAllData() {
  try {
    const [users, posts, comments] = await Promise.all([
      fetchUsers(),
      fetchPosts(),
      fetchComments()
    ]);
    
    return { users, posts, comments };
  } catch (error) {
    console.error("Error loading data:", error);
  }
}
```

### ✔ Benefits
- Clearer intent
- Natural error handling
- Better variable naming
- Easier to modify

---

## Complex async Flow

### ❌ Before (ES6)
```javascript
function complexOperation() {
  let user;
  let posts;
  
  return authenticate()
    .then(authToken => {
      return fetchUser(authToken);
    })
    .then(userData => {
      user = userData;
      return fetchPosts(user.id);
    })
    .then(postsData => {
      posts = postsData;
      return validatePosts(posts);
    })
    .then(isValid => {
      if (!isValid) {
        throw new Error("Invalid posts");
      }
      return { user, posts };
    })
    .catch(error => {
      console.error("Operation failed:", error);
      throw error;
    });
}
```

### ✅ After (ES2017+)
```javascript
async function complexOperation() {
  try {
    const authToken = await authenticate();
    const user = await fetchUser(authToken);
    const posts = await fetchPosts(user.id);
    const isValid = await validatePosts(posts);
    
    if (!isValid) {
      throw new Error("Invalid posts");
    }
    
    return { user, posts };
  } catch (error) {
    console.error("Operation failed:", error);
    throw error;
  }
}
```

### ✔ Benefits
- Linear, top-to-bottom flow
- No variable hoisting needed
- Clearer logic
- Standard if/else works
- Easier to debug
