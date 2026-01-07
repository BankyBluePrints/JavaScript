# ES2018 New Features

## 1. Rest/Spread Properties for Objects

**What it is:** `...` operator for objects (like arrays in ES6).

**Problem it solves:** Object.assign() verbosity, immutable updates.

**Where it's used:** Everywhere - React state, object manipulation.

```javascript
// Spread - copy and merge objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3 }

// Copy object
const copy = { ...obj1 };

// Override properties
const updated = { ...obj1, b: 99 }; // { a: 1, b: 99 }

// Rest - collect remaining properties
const { a, ...rest } = { a: 1, b: 2, c: 3 };
// a = 1, rest = { b: 2, c: 3 }
```

---

## 2. for await...of

**What it is:** Async iteration over async iterables.

**Problem it solves:** Complex async iteration patterns.

**Where it's used:** Streams, batch processing, async generators.

```javascript
async function processAsyncData(asyncIterable) {
  for await (const item of asyncIterable) {
    console.log(item);
  }
}

// With async generator
async function* generateData() {
  yield await fetchData1();
  yield await fetchData2();
  yield await fetchData3();
}

for await (const data of generateData()) {
  console.log(data);
}
```

---

## 3. Promise.finally()

**What it is:** Cleanup callback that runs regardless of success/failure.

**Problem it solves:** Duplicated cleanup code in then/catch.

**Where it's used:** Resource cleanup, loading indicators.

```javascript
fetchData()
  .then(data => processData(data))
  .catch(error => handleError(error))
  .finally(() => {
    hideLoadingSpinner(); // Always runs
  });

// Common pattern: loading states
setLoading(true);
fetchData()
  .then(data => setData(data))
  .catch(error => setError(error))
  .finally(() => setLoading(false)); // Always stop loading
```

---

## 4. RegExp Named Capture Groups

**What it is:** Name regex capture groups for clarity.

**Problem it solves:** Hard-to-remember numbered groups.

**Where it's used:** Text parsing, data extraction.

```javascript
// Before: numbered groups
const re = /(\d{4})-(\d{2})-(\d{2})/;
const match = '2023-12-25'.match(re);
const year = match[1];   // Hard to remember
const month = match[2];
const day = match[3];

// After: named groups
const reNamed = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const matchNamed = '2023-12-25'.match(reNamed);
const { year, month, day } = matchNamed.groups; // Clear!
```

---

## 5. RegExp Lookbehind Assertions

**What it is:** Match based on what comes before.

**Problem it solves:** Complex pattern matching.

**Where it's used:** Text processing, validation.

```javascript
// Positive lookbehind: (?<=...)
const price = /(?<=\$)\d+/;
'$100'.match(price); // ["100"] - matches number after $

// Negative lookbehind: (?<!...)
const notPrice = /(?<!\$)\d+/;
'100$'.match(notPrice); // ["100"] - matches number NOT after $
```

---

## 6. RegExp dotAll Mode

**What it is:** `.` matches any character including newlines.

**Problem it solves:** `.` doesn't match line terminators by default.

**Where it's used:** Multi-line text processing.

```javascript
// Before: . doesn't match newlines
/foo.bar/.test('foo\nbar'); // false

// After: s flag makes . match everything
/foo.bar/s.test('foo\nbar'); // true
```

---

## 7. RegExp Unicode Property Escapes

**What it is:** Match characters by Unicode properties.

**Problem it solves:** Hard to match emoji, scripts, etc.

**Where it's used:** Internationalization, emoji handling.

```javascript
// Match any emoji
const emojiRegex = /\p{Emoji}/u;
emojiRegex.test('😀'); // true

// Match Greek letters
const greekRegex = /\p{Script=Greek}/u;
greekRegex.test('α'); // true

// Match letters from any script
const letterRegex = /\p{Letter}/u;
```
