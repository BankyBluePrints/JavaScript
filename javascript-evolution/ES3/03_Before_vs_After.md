# ES3 Before vs After

This document shows how ES3 features improved JavaScript code compared to earlier versions.

---

## Try/Catch Exception Handling

### ❌ Before (ES1/ES2)
```javascript
// No proper error handling - code just breaks
function divideNumbers(a, b) {
  // If b is 0, this returns Infinity or causes issues
  return a / b;
}

var result = divideNumbers(10, 0); // Infinity - silent problem
```

### ✅ After (ES3+)
```javascript
function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (error) {
    console.log("Error: " + error.message);
    return null;
  }
}

var result = divideNumbers(10, 0); // null, with error message
```

### ✔ Benefits
- Prevents crashes
- Provides meaningful error messages
- Allows graceful error recovery
- Makes debugging easier

---

## Regular Expressions

### ❌ Before (ES1/ES2)
```javascript
// Manual email validation - error-prone
function isValidEmail(email) {
  var atIndex = -1;
  var dotIndex = -1;
  
  for (var i = 0; i < email.length; i++) {
    if (email.charAt(i) === "@") {
      atIndex = i;
    }
    if (email.charAt(i) === "." && i > atIndex) {
      dotIndex = i;
    }
  }
  
  return atIndex > 0 && dotIndex > atIndex && dotIndex < email.length - 1;
}
```

### ✅ After (ES3+)
```javascript
function isValidEmail(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
```

### ✔ Benefits
- Much shorter code
- More reliable pattern matching
- Easier to maintain
- Industry-standard approach

---

## Array Methods (push, pop, splice)

### ❌ Before (ES1/ES2)
```javascript
// Adding item to array - manual approach
var fruits = ["apple", "banana"];
fruits[fruits.length] = "orange"; // Manual addition

// Removing last item - manual approach
var lastItem = fruits[fruits.length - 1];
fruits.length = fruits.length - 1;
```

### ✅ After (ES3+)
```javascript
var fruits = ["apple", "banana"];
fruits.push("orange"); // Simple addition

var lastItem = fruits.pop(); // Simple removal
```

### ✔ Benefits
- Cleaner syntax
- Less error-prone
- Self-documenting code
- Standard methods everyone knows

---

## String Methods (split, join)

### ❌ Before (ES1/ES2)
```javascript
// Splitting a CSV string manually
function splitCSV(str) {
  var result = [];
  var current = "";
  
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === ",") {
      result[result.length] = current;
      current = "";
    } else {
      current = current + str.charAt(i);
    }
  }
  result[result.length] = current;
  
  return result;
}

var values = splitCSV("a,b,c");
```

### ✅ After (ES3+)
```javascript
var values = "a,b,c".split(",");
```

### ✔ Benefits
- One line instead of many
- No loop logic needed
- Handles edge cases automatically
- Much more readable

---

## Switch Statement

### ❌ Before (ES1/ES2)
```javascript
function getDayName(day) {
  if (day === 0) {
    return "Sunday";
  } else if (day === 1) {
    return "Monday";
  } else if (day === 2) {
    return "Tuesday";
  } else if (day === 3) {
    return "Wednesday";
  } else if (day === 4) {
    return "Thursday";
  } else if (day === 5) {
    return "Friday";
  } else if (day === 6) {
    return "Saturday";
  } else {
    return "Invalid day";
  }
}
```

### ✅ After (ES3+)
```javascript
function getDayName(day) {
  switch (day) {
    case 0: return "Sunday";
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    default: return "Invalid day";
  }
}
```

### ✔ Benefits
- More readable for multiple conditions
- Easier to maintain
- Shows intent clearly
- Better performance in some engines

---

## In Operator

### ❌ Before (ES1/ES2)
```javascript
// Checking if property exists
var user = { name: "John", age: 30 };

if (user.email !== undefined) {
  console.log(user.email);
}
// Problem: this doesn't distinguish between undefined and missing property
```

### ✅ After (ES3+)
```javascript
var user = { name: "John", age: 30 };

if ("email" in user) {
  console.log(user.email);
} else {
  console.log("Email not provided");
}
```

### ✔ Benefits
- Correctly distinguishes missing properties
- Clearer intent
- Checks prototype chain properly
- More reliable property checking
