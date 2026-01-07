# ES2017 Overview

## What JavaScript Code Looked Like Before ES2017

Before ES2017, asynchronous code used Promises with `.then()` chains:

```javascript
// Promise chains - hard to read
function getUserData(userId) {
  return fetchUser(userId)
    .then(user => {
      return fetchPosts(user.id)
        .then(posts => {
          return fetchComments(posts[0].id)
            .then(comments => {
              return { user, posts, comments };
            });
        });
    })
    .catch(error => {
      console.error(error);
    });
}

// Object iteration
const obj = { a: 1, b: 2, c: 3 };
const values = Object.keys(obj).map(key => obj[key]);
```

## Common Problems and Limitations

1. **Promise Chains** - Still better than callbacks but not ideal
2. **Error Handling** - Multiple catch blocks or complex error flow
3. **No Object.values()** - Had to map over keys
4. **No Object.entries()** - Converting objects to arrays was verbose
5. **String Padding** - Manual implementation required

## Why ES2017 Was Introduced

ES2017 addressed async code readability:

- **async/await** makes async code look synchronous
- **Better error handling** with standard try/catch
- **Object helpers** for common operations
- **String utilities** for formatting

## Impact on Browser, Node.js, and Tooling

- **Browsers:** Chrome 55+, Firefox 52+, Safari 10.1+, Edge 15+
- **Node.js:** Node.js 7.6+ (full async/await support in 8+)
- **Tooling:** Babel made async/await available earlier
- **Standard:** async/await is now the default async pattern

ES2017, specifically async/await, is essential for all modern JavaScript development.
