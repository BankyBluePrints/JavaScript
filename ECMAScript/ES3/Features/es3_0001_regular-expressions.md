# Regular Expressions (ES3)

## What it is
Regular expressions (regex) are patterns used for matching character combinations in strings. ES3 introduced native regex support with the RegExp object and regex literal notation, allowing developers to perform complex pattern matching, validation, and text manipulation.

## Before this feature
Before ES3, developers had to write complex manual string parsing logic or use third-party libraries to perform pattern matching. This made tasks like validation, searching, and text replacement cumbersome and error-prone.

```javascript
// ES1/ES2 - Manual pattern matching (very limited)
function containsEmail(text) {
  var atPos = text.indexOf("@");
  var dotPos = text.lastIndexOf(".");
  if (atPos > 0 && dotPos > atPos) {
    return true;
  }
  return false;
}

// Very basic and doesn't handle edge cases
console.log(containsEmail("user@domain.com")); // true
console.log(containsEmail("invalid@@test"));    // true (false positive!)
```

## After this feature
ES3 introduced regex literals and the RegExp object, enabling powerful pattern matching with concise syntax.

```javascript
// ES3 - Regular expressions
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function containsEmail(text) {
  return emailPattern.test(text);
}

console.log(containsEmail("user@domain.com")); // true
console.log(containsEmail("invalid@@test"));    // false (correct!)

// Pattern matching with flags
var pattern = /hello/i;  // i = case-insensitive
console.log(pattern.test("Hello World")); // true
console.log(pattern.test("HELLO"));       // true

// Extract matches
var text = "Phone: 123-456-7890";
var phonePattern = /\d{3}-\d{3}-\d{4}/;
var match = text.match(phonePattern);
console.log(match[0]); // "123-456-7890"

// Replace with regex
var str = "Hello World, Hello Universe";
var result = str.replace(/Hello/g, "Hi"); // g = global
console.log(result); // "Hi World, Hi Universe"
```

## Why this is better
- **Powerful pattern matching** - Complex patterns in compact syntax
- **Built-in validation** - Email, phone, URL validation made easy
- **Global search and replace** - Find and replace all occurrences
- **String parsing** - Extract data from unstructured text
- **Cross-platform consistency** - Works same in all ES3+ environments

## Key notes / edge cases
- **Regex flags**: `i` (case-insensitive), `g` (global), `m` (multiline)
- **Escape special characters**: Use backslash `\` for literal dots, brackets, etc.
- **Performance**: Complex regex on large strings can be slow
- **Readability**: Regex can be hard to read - add comments for complex patterns
- **Greedy vs lazy matching**: `.*` is greedy, `.*?` is lazy
- **Test before use**: Always test regex patterns thoroughly with edge cases

## Quick practice

### Practice 1
Create a regex pattern to validate a simple password: at least 8 characters, contains at least one digit and one letter. Test it with "abc123456" (should pass) and "abcdefgh" (should fail).

### Practice 2
Write a regex to extract all hashtags from a tweet string (e.g., "#javascript #coding #ES3"). Use match() with the global flag to get all hashtags.

### Practice 3
Create a function that uses regex to replace all phone numbers in a text with "XXX-XXX-XXXX". Test with: "Contact us at 123-456-7890 or 987-654-3210".
