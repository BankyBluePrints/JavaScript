# ES2018 (ECMAScript 2018)

**Release Year:** 2018

## Major Highlights

- **Rest/Spread Properties for Objects** - `...` operator for objects
- **Asynchronous Iteration** - `for await...of` loop
- **Promise.finally()** - Cleanup after Promise resolution/rejection
- **RegExp Improvements** - Named capture groups, lookbehind assertions, dotAll mode, Unicode property escapes

## Why This Version Changed How JavaScript Is Written

ES2018 brought async iteration and object spread/rest, filling important gaps:

- **Object spread** (`{...obj}`) was long-awaited after array spread in ES6
- **for await...of** made async iteration natural
- **Promise.finally()** provided proper cleanup mechanism
- **RegExp enhancements** made complex patterns easier

Object spread/rest became immediately essential for React and immutable state management patterns. Async iteration enabled cleaner streaming and batch processing code.
