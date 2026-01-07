# ES3 Modern Usage Guide

## When to Prefer ES3 Features

Even though JavaScript has evolved significantly, ES3 features remain fundamental and should be used when:

### 1. Try/Catch Exception Handling
**Use when:**
- Handling operations that might fail (file I/O, network requests, parsing)
- You need to prevent errors from crashing your application
- You want to provide user-friendly error messages

**Real-world use cases:**
```javascript
// API calls
try {
  var data = fetchDataFromAPI();
  processData(data);
} catch (error) {
  showUserError("Could not load data. Please try again.");
  logError(error);
}

// User input validation
try {
  var userAge = parseInt(userInput);
  if (isNaN(userAge)) {
    throw new Error("Invalid age");
  }
  processAge(userAge);
} catch (error) {
  alert("Please enter a valid age");
}
```

---

### 2. Regular Expressions
**Use when:**
- Validating input (email, phone, zip code)
- Searching and replacing text patterns
- Parsing structured text data
- Extracting information from strings

**Real-world use cases:**
```javascript
// Form validation
function validateForm(data) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
  
  return emailPattern.test(data.email) && 
         phonePattern.test(data.phone);
}

// Extracting URLs from text
var urlPattern = /https?:\/\/[^\s]+/g;
var urls = text.match(urlPattern);
```

---

### 3. Array Methods
**Use when:**
- Managing collections of data
- Building dynamic lists
- Implementing queues or stacks
- Any time you need to add/remove items

**Real-world use cases:**
```javascript
// Task queue
var taskQueue = [];
taskQueue.push(task1);  // Add tasks
taskQueue.push(task2);
var nextTask = taskQueue.shift();  // Process first task

// History tracking
var history = [];
history.push(currentState);  // Save state
var previousState = history.pop();  // Undo
```

---

### 4. String Methods
**Use when:**
- Processing user input
- Formatting display text
- Parsing CSV or similar formats
- Building URLs or slugs

**Real-world use cases:**
```javascript
// CSV parsing
var csvLine = "John,Doe,john@example.com";
var fields = csvLine.split(",");
var firstName = fields[0];

// URL building
var baseUrl = "https://api.example.com";
var endpoint = "/users";
var url = baseUrl.concat(endpoint);
```

---

### 5. Switch Statement
**Use when:**
- Handling multiple specific cases
- State machines
- Command routing
- Status code handling

**Real-world use cases:**
```javascript
// State machine
function handleUserState(state) {
  switch (state) {
    case "GUEST":
      showLoginPrompt();
      break;
    case "LOGGED_IN":
      showDashboard();
      break;
    case "ADMIN":
      showAdminPanel();
      break;
    default:
      showErrorPage();
  }
}

// Command routing
function executeCommand(cmd) {
  switch (cmd) {
    case "save":
      saveDocument();
      break;
    case "load":
      loadDocument();
      break;
    case "exit":
      closeApplication();
      break;
  }
}
```

---

## Common Mistakes and Pitfalls

### 1. Try/Catch Pitfalls

❌ **Wrong:** Catching everything and ignoring errors
```javascript
try {
  doSomething();
} catch (e) {
  // Silent failure - bad!
}
```

✅ **Correct:** Handle or log errors appropriately
```javascript
try {
  doSomething();
} catch (error) {
  console.error("Error in doSomething:", error.message);
  // Take appropriate action
}
```

---

### 2. Regular Expression Pitfalls

❌ **Wrong:** Overly complex regex that's hard to maintain
```javascript
var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
```

✅ **Correct:** Break into smaller checks with clear names
```javascript
function validatePassword(password) {
  var hasLowerCase = /[a-z]/.test(password);
  var hasUpperCase = /[A-Z]/.test(password);
  var hasNumber = /\d/.test(password);
  var hasSpecialChar = /[@$!%*?&]/.test(password);
  var isLongEnough = password.length >= 8;
  
  return hasLowerCase && hasUpperCase && hasNumber && 
         hasSpecialChar && isLongEnough;
}
```

---

### 3. Switch Statement Pitfalls

❌ **Wrong:** Forgetting break statements
```javascript
switch (day) {
  case "Monday":
    console.log("Start of week");
    // Falls through to Tuesday!
  case "Tuesday":
    console.log("It's Tuesday");
    break;
}
```

✅ **Correct:** Always use break (unless fall-through is intentional)
```javascript
switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Tuesday":
    console.log("It's Tuesday");
    break;
}
```

---

### 4. Array Method Pitfalls

❌ **Wrong:** Modifying array while iterating
```javascript
var arr = [1, 2, 3, 4];
for (var i = 0; i < arr.length; i++) {
  arr.pop(); // Length changes during loop!
}
```

✅ **Correct:** Store length or use appropriate method
```javascript
var arr = [1, 2, 3, 4];
var length = arr.length;
for (var i = 0; i < length; i++) {
  // Safe iteration
}
```

---

## Browser / Node.js Compatibility Notes

### ES3 Support

✅ **Universal Support:**
- All modern browsers (Chrome, Firefox, Safari, Edge)
- Internet Explorer 5.5+
- All versions of Node.js
- All mobile browsers

### Key Points

1. **ES3 is the baseline** - If you need maximum compatibility (including IE8 and below), ES3 is your target.

2. **No transpilation needed** - ES3 code runs everywhere without transformation.

3. **Production safe** - All ES3 features are battle-tested and stable.

4. **Performance** - ES3 features are highly optimized in all engines.

### When Targeting ES3

If your project needs to support very old browsers:

```javascript
// ES3-safe code
var data = {
  name: "John",
  age: 30
};

try {
  var json = JSON.stringify(data); // JSON added in ES5!
  // Fallback for ES3:
  if (typeof JSON === "undefined") {
    json = "{name:'" + data.name + "',age:" + data.age + "}";
  }
} catch (error) {
  console.log("Serialization failed");
}
```

### Modern Context

In modern development:
- ES3 features are still used daily
- They form the foundation of JavaScript
- Understanding them is essential for reading legacy code
- They're combined with newer features for better code

**Bottom line:** ES3 features aren't outdated—they're fundamental building blocks that every JavaScript developer uses, even in the most modern applications.
