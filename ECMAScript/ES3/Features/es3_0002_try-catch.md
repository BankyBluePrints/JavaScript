# Try/Catch Exception Handling (ES3)

## What it is
Try/catch is an error handling mechanism that allows you to catch and handle runtime errors gracefully without crashing your entire application. The try block contains code that might throw an error, and the catch block handles the error if one occurs.

## Before this feature
Before ES3, runtime errors would crash the entire script with no way to recover. Developers had to rely on extensive validation and defensive programming, but errors could still cause complete failures.

```javascript
// ES1/ES2 - No error handling
function divide(a, b) {
  return a / b;  // Division by zero returns Infinity, but other errors crash
}

var obj = null;
// This crashes the entire script with no recovery
var value = obj.property;  // Uncaught TypeError - script stops here
console.log("This never executes");
```

## After this feature
ES3 introduced try/catch/finally for structured error handling, allowing applications to continue running even when errors occur.

```javascript
// ES3 - Try/catch error handling
function safelyAccessProperty(obj, property) {
  try {
    return obj[property];
  } catch (error) {
    console.log("Error accessing property: " + error.message);
    return null;
  }
}

var obj = null;
var value = safelyAccessProperty(obj, "name");
console.log("Script continues executing"); // This runs!

// Try/catch/finally
function fetchData() {
  var isLoading = true;
  try {
    // Risky operation
    var data = JSON.parse('{"name":"John"}');
    console.log("Success:", data);
    return data;
  } catch (error) {
    console.log("Error parsing JSON:", error.message);
    return null;
  } finally {
    // Always executes, even if return in try/catch
    isLoading = false;
    console.log("Cleanup complete");
  }
}

// Handling different error types
function processUserInput(input) {
  try {
    if (!input) {
      throw new Error("Input cannot be empty");
    }
    if (typeof input !== "string") {
      throw new TypeError("Input must be a string");
    }
    return input.toUpperCase();
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("Type error:", error.message);
    } else {
      console.log("General error:", error.message);
    }
    return "";
  }
}
```

## Why this is better
- **Graceful degradation** - Application continues running despite errors
- **Better user experience** - Show friendly error messages instead of crashes
- **Debugging** - Capture error information for logging and diagnosis
- **Resource cleanup** - Finally block ensures cleanup code always runs
- **Error recovery** - Attempt alternative approaches when errors occur

## Key notes / edge cases
- **Performance**: Try/catch has slight overhead - don't wrap everything
- **Scope**: Variables declared in try block are accessible in catch
- **Finally always executes**: Even with return statements in try/catch
- **Throw custom errors**: Use `throw new Error("message")` for custom errors
- **Don't catch all errors**: Let critical errors propagate when appropriate
- **Async errors**: Try/catch doesn't catch async callback errors (use Promises/async-await in modern JS)

## Quick practice

### Practice 1
Write a function that safely parses JSON strings. If parsing fails, return an empty object and log the error. Test with valid JSON `'{"name":"Alice"}'` and invalid JSON `'{invalid}'`.

### Practice 2
Create a function that divides two numbers. Use try/catch to handle cases where: 1) arguments aren't numbers (throw TypeError), 2) divisor is zero (throw Error). Return appropriate error messages.

### Practice 3
Write a function that reads from localStorage (use a try/catch/finally). In the finally block, log "Operation completed". Test when localStorage is available and when it's not (some browsers block it in certain modes).
