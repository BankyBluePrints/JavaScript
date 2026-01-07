// ES3 Code Examples
// This file demonstrates ES3 features with realistic, runnable examples

// ============================================
// 1. TRY/CATCH EXCEPTION HANDLING
// ============================================

// OLD APPROACH (ES1/ES2): No error handling
function oldParseJSON(jsonString) {
  // This could crash the entire script
  var result = eval("(" + jsonString + ")");
  return result;
}

// MODERN APPROACH (ES3+): With error handling
function modernParseJSON(jsonString) {
  try {
    var result = eval("(" + jsonString + ")");
    return result;
  } catch (error) {
    console.log("Invalid JSON: " + error.message);
    return null;
  }
}

// Why modernization matters:
// - Prevents script crashes
// - Provides useful error messages
// - Allows application to continue running

// Example usage:
try {
  var validData = modernParseJSON('{"name": "John"}');
  console.log("Valid:", validData);
  
  var invalidData = modernParseJSON('{"name": invalid}');
  console.log("Invalid:", invalidData); // Returns null instead of crashing
} catch (e) {
  console.log("Caught error:", e.message);
}

// ============================================
// 2. REGULAR EXPRESSIONS
// ============================================

// OLD APPROACH: Manual string parsing
function oldValidatePhone(phone) {
  if (phone.length !== 12) return false;
  if (phone.charAt(3) !== "-") return false;
  if (phone.charAt(7) !== "-") return false;
  
  for (var i = 0; i < phone.length; i++) {
    var char = phone.charAt(i);
    if (i !== 3 && i !== 7) {
      if (char < "0" || char > "9") return false;
    }
  }
  return true;
}

// MODERN APPROACH (ES3+): Regular expressions
function modernValidatePhone(phone) {
  var pattern = /^\d{3}-\d{3}-\d{4}$/;
  return pattern.test(phone);
}

// Why modernization matters:
// - 2 lines vs 11 lines
// - Easier to modify pattern
// - Industry standard approach

// Example usage:
console.log(modernValidatePhone("123-456-7890")); // true
console.log(modernValidatePhone("invalid"));      // false

// ============================================
// 3. ARRAY METHODS
// ============================================

// OLD APPROACH: Manual array manipulation
var oldArray = ["a", "b", "c"];

// Adding to end manually
oldArray[oldArray.length] = "d";

// Removing from end manually
var lastItem = oldArray[oldArray.length - 1];
oldArray.length = oldArray.length - 1;

// MODERN APPROACH (ES3+): Array methods
var modernArray = ["a", "b", "c"];

modernArray.push("d");        // Add to end
var lastItem = modernArray.pop();  // Remove from end
modernArray.unshift("z");     // Add to beginning
var firstItem = modernArray.shift(); // Remove from beginning

// Why modernization matters:
// - Self-documenting code
// - Less error-prone
// - Consistent across all JavaScript environments

// Example: Building a shopping cart
function ShoppingCart() {
  this.items = [];
  
  this.addItem = function(item) {
    this.items.push(item);
  };
  
  this.removeLastItem = function() {
    return this.items.pop();
  };
  
  this.getItemCount = function() {
    return this.items.length;
  };
}

var cart = new ShoppingCart();
cart.addItem({ name: "Book", price: 20 });
cart.addItem({ name: "Pen", price: 5 });
console.log("Items in cart:", cart.getItemCount());

// ============================================
// 4. STRING METHODS
// ============================================

// OLD APPROACH: Manual string manipulation
function oldCreateSlug(title) {
  var result = "";
  for (var i = 0; i < title.length; i++) {
    var char = title.charAt(i);
    if (char === " ") {
      result = result + "-";
    } else if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      result = result + char;
    } else if (char >= "A" && char <= "Z") {
      result = result + String.fromCharCode(char.charCodeAt(0) + 32);
    }
  }
  return result;
}

// MODERN APPROACH (ES3+): String methods
function modernCreateSlug(title) {
  return title.toLowerCase()
              .split(" ")
              .join("-")
              .replace(/[^a-z0-9-]/g, "");
}

// Why modernization matters:
// - Much more readable
// - Easier to maintain
// - Leverages built-in optimizations

// Example usage:
console.log(modernCreateSlug("Hello World 123")); // "hello-world-123"

// ============================================
// 5. SWITCH STATEMENT
// ============================================

// OLD APPROACH: Multiple if/else
function oldGetStatusMessage(code) {
  if (code === 200) {
    return "OK";
  } else if (code === 404) {
    return "Not Found";
  } else if (code === 500) {
    return "Server Error";
  } else if (code === 403) {
    return "Forbidden";
  } else {
    return "Unknown Status";
  }
}

// MODERN APPROACH (ES3+): Switch statement
function modernGetStatusMessage(code) {
  switch (code) {
    case 200:
      return "OK";
    case 404:
      return "Not Found";
    case 500:
      return "Server Error";
    case 403:
      return "Forbidden";
    default:
      return "Unknown Status";
  }
}

// Why modernization matters:
// - Clearer intent for multiple conditions
// - Easier to scan and understand
// - Better suited for many cases

// Example usage:
console.log(modernGetStatusMessage(200)); // "OK"
console.log(modernGetStatusMessage(999)); // "Unknown Status"

// ============================================
// 6. PRACTICAL EXAMPLE: FORM VALIDATION
// ============================================

function FormValidator() {
  // Using ES3 features for robust validation
  
  this.validateEmail = function(email) {
    try {
      if (!email || email.length === 0) {
        throw new Error("Email is required");
      }
      
      var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pattern.test(email)) {
        throw new Error("Invalid email format");
      }
      
      return { valid: true, message: "Valid email" };
    } catch (error) {
      return { valid: false, message: error.message };
    }
  };
  
  this.validateAge = function(age) {
    try {
      var numAge = parseInt(age, 10);
      
      if (isNaN(numAge)) {
        throw new Error("Age must be a number");
      }
      
      switch (true) {
        case (numAge < 0):
          throw new Error("Age cannot be negative");
        case (numAge < 13):
          throw new Error("Must be at least 13 years old");
        case (numAge > 120):
          throw new Error("Invalid age");
        default:
          return { valid: true, message: "Valid age" };
      }
    } catch (error) {
      return { valid: false, message: error.message };
    }
  };
}

// Example usage:
var validator = new FormValidator();

var emailResult = validator.validateEmail("user@example.com");
console.log("Email validation:", emailResult);

var ageResult = validator.validateAge(25);
console.log("Age validation:", ageResult);
