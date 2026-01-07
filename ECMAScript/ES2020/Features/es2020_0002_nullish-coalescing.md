# Nullish Coalescing (ES2020)

## What it is
The nullish coalescing operator (`??`) returns the right operand when the left operand is `null` or `undefined`, and returns the left operand otherwise. Unlike the OR operator (`||`), it only checks for nullish values, not all falsy values.

## Before this feature
Before ES2020, developers used the OR operator (`||`) for default values, but it treated all falsy values (0, '', false, etc.) the same as null/undefined, causing bugs.

```javascript
// ES6 - Using OR operator (problematic)
const port = process.env.PORT || 3000;  // Works for undefined/null

// But has problems with falsy values
const count = 0;
const displayCount = count || 10;  // 10 (wanted 0!)

const name = "";
const displayName = name || "Anonymous";  // "Anonymous" (wanted "")

const isEnabled = false;
const enabled = isEnabled || true;  // true (wanted false!)

// Verbose alternative
const timeout = process.env.TIMEOUT !== undefined && process.env.TIMEOUT !== null
  ? process.env.TIMEOUT
  : 5000;
```

## After this feature
ES2020 introduced the nullish coalescing operator for precise default values.

```javascript
// ES2020 - Nullish coalescing
const port = process.env.PORT ?? 3000;

// Preserves 0
const count = 0;
const displayCount = count ?? 10;  // 0 (correct!)

// Preserves empty string
const name = "";
const displayName = name ?? "Anonymous";  // "" (correct!)

// Preserves false
const isEnabled = false;
const enabled = isEnabled ?? true;  // false (correct!)

// Only null/undefined trigger default
const value1 = null ?? "default";       // "default"
const value2 = undefined ?? "default";  // "default"
const value3 = 0 ?? "default";          // 0
const value4 = "" ?? "default";         // ""
const value5 = false ?? "default";      // false
const value6 = NaN ?? "default";        // NaN

// Practical examples

// Configuration with defaults
const config = {
  timeout: 0,        // Valid: no timeout
  retries: null,     // Invalid: use default
  cache: false       // Valid: caching disabled
};

const timeout = config.timeout ?? 5000;    // 0 (respects 0)
const retries = config.retries ?? 3;       // 3 (null triggers default)
const cacheEnabled = config.cache ?? true; // false (respects false)

// User input
function processInput(input) {
  // input might be 0, "", false (all valid)
  const value = input ?? "no input provided";
  return value;
}

console.log(processInput(0));          // 0
console.log(processInput(""));         // ""
console.log(processInput(false));      // false
console.log(processInput(null));       // "no input provided"
console.log(processInput(undefined));  // "no input provided"

// API responses
async function fetchData() {
  const response = await fetch('/api/data');
  const data = await response.json();
  
  // These might legitimately be 0 or false
  const count = data.count ?? 0;
  const isActive = data.isActive ?? false;
  const message = data.message ?? "No message";
  
  return { count, isActive, message };
}

// Combining with optional chaining
const user = {
  settings: {
    notifications: false,  // Intentionally disabled
    theme: null            // Not set
  }
};

const notifications = user?.settings?.notifications ?? true;  // false
const theme = user?.settings?.theme ?? "light";               // "light"

// Short-circuit evaluation
let expensive = null;
const result = expensive ?? (expensive = computeExpensiveValue());
// Only computes if expensive is null/undefined

// Chaining nullish coalescing
const value = a ?? b ?? c ?? "default";
// Uses first non-nullish value

// Function parameters with defaults
function greet(name) {
  const displayName = name ?? "Guest";
  return `Hello, ${displayName}!`;
}

console.log(greet("Alice"));      // "Hello, Alice!"
console.log(greet(""));           // "Hello, !" (empty string preserved)
console.log(greet(null));         // "Hello, Guest!"
console.log(greet(undefined));    // "Hello, Guest!"

// Numeric operations
const width = userWidth ?? defaultWidth ?? 100;
const height = userHeight ?? defaultHeight ?? 100;

// Database queries
const searchQuery = {
  limit: 0,      // Valid: return no results
  offset: null,  // Invalid: use default
  includeArchived: false  // Valid: exclude archived
};

const limit = searchQuery.limit ?? 10;                    // 0
const offset = searchQuery.offset ?? 0;                   // 0
const includeArchived = searchQuery.includeArchived ?? true;  // false

// Comparing with OR operator
const val = 0;

console.log(val || 100);   // 100 (treats 0 as falsy)
console.log(val ?? 100);   // 0 (only null/undefined are nullish)

const str = "";
console.log(str || "default");   // "default" (treats "" as falsy)
console.log(str ?? "default");   // "" (only null/undefined are nullish)

// Can't mix with && or || without parentheses
// const bad = a && b ?? c;  // SyntaxError
const good = (a && b) ?? c;  // OK
const also = a && (b ?? c);  // OK
```

## Why this is better
- **Precise** - Only checks null/undefined, not all falsy values
- **Preserves 0** - 0 is a valid value, not a "missing" value
- **Preserves empty string** - "" might be intentional
- **Preserves false** - false is a valid boolean value
- **Clear intent** - Specifically for null/undefined defaults
- **Safer** - Reduces bugs from falsy value coercion

## Key notes / edge cases
- **Only null/undefined** - NaN, 0, "", false don't trigger default
- **Operator precedence** - Lower than || and &&
- **Can't mix** - Can't mix with && or || without parentheses
- **Short-circuit** - Right side only evaluated if left is nullish
- **Not a replacement for ||** - Use || when you want falsy check
- **With optional chaining** - Natural combination: `obj?.prop ?? default`
- **Assignment operator** - ES2021 added `??=` for assignment

## Quick practice

### Practice 1
Create a function that takes a config object. Use `??` to set defaults for: port (default 3000), debug (default false), maxConnections (default 100). Test with configs that have 0, false, and null values.

### Practice 2
Compare `||` vs `??` behavior with these values: 0, false, "", null, undefined. Create a table showing what each operator returns when combined with a default value of "default".

### Practice 3
Write a function that processes user preferences. Some preferences might be explicitly set to 0 or false. Use `??` with optional chaining to safely access nested preferences with appropriate defaults.
