// ES5 Code Examples
// This file demonstrates ES5 features with realistic, runnable examples

"use strict"; // ES5 strict mode

// ============================================
// 1. ARRAY METHODS - FUNCTIONAL PROGRAMMING
// ============================================

// Practical example: Processing user data
var users = [
  { name: "John", age: 25, active: true },
  { name: "Jane", age: 30, active: false },
  { name: "Bob", age: 35, active: true },
  { name: "Alice", age: 28, active: true }
];

// OLD APPROACH (ES3): Manual loops
function getActiveUserNamesOld(users) {
  var names = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].active) {
      names[names.length] = users[i].name;
    }
  }
  return names;
}

// MODERN APPROACH (ES5+): Chained array methods
function getActiveUserNames(users) {
  return users
    .filter(function(user) {
      return user.active;
    })
    .map(function(user) {
      return user.name;
    });
}

console.log("Active users:", getActiveUserNames(users));
// ["John", "Bob", "Alice"]

// Calculate average age of active users
var averageAge = users
  .filter(function(user) { return user.active; })
  .map(function(user) { return user.age; })
  .reduce(function(sum, age) { return sum + age; }, 0) / 
  users.filter(function(user) { return user.active; }).length;

console.log("Average age of active users:", averageAge);

// ============================================
// 2. JSON - DATA SERIALIZATION
// ============================================

// OLD APPROACH (ES3): eval() or third-party libraries
function serializeOld(obj) {
  // Unsafe and limited
  return "{name:'" + obj.name + "',age:" + obj.age + "}";
}

function deserializeOld(str) {
  // Dangerous - can execute arbitrary code!
  return eval("(" + str + ")");
}

// MODERN APPROACH (ES5+): Native JSON
var userData = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  preferences: {
    theme: "dark",
    notifications: true
  }
};

// Serialize to JSON string
var jsonString = JSON.stringify(userData);
console.log("JSON:", jsonString);

// Pretty print with indentation
var prettyJson = JSON.stringify(userData, null, 2);
console.log("Pretty JSON:\n", prettyJson);

// Parse JSON string back to object
var parsedData = JSON.parse(jsonString);
console.log("Parsed:", parsedData.name);

// Custom serialization with replacer
var filtered = JSON.stringify(userData, ["name", "email"]);
console.log("Filtered:", filtered); // Only name and email

// ============================================
// 3. FUNCTION.BIND() - CONTEXT PRESERVATION
// ============================================

var person = {
  name: "John",
  age: 30,
  greet: function(greeting) {
    console.log(greeting + ", I'm " + this.name);
  },
  greetDelayed: function() {
    // OLD APPROACH: Using a closure variable
    var self = this;
    setTimeout(function() {
      console.log("Hello from " + self.name);
    }, 100);
    
    // MODERN APPROACH: Using bind
    setTimeout(function() {
      console.log("Hi from " + this.name);
    }.bind(this), 100);
  }
};

// bind() creates a new function with fixed context
var greetFunc = person.greet.bind(person, "Hello");
greetFunc(); // "Hello, I'm John"

// Useful for event handlers
var button = {
  text: "Click me",
  handleClick: function() {
    console.log(this.text + " was clicked");
  }
};

// Without bind, 'this' would be wrong in callback
// setTimeout(button.handleClick, 100); // Wrong!
setTimeout(button.handleClick.bind(button), 100); // Correct!

// ============================================
// 4. OBJECT METHODS - ENHANCED CONTROL
// ============================================

// Object.create() - Prototypal inheritance
var animal = {
  speak: function() {
    console.log(this.sound);
  }
};

var dog = Object.create(animal);
dog.sound = "Woof!";
dog.speak(); // "Woof!"

// Object.keys() - Get object properties
var config = {
  host: "localhost",
  port: 3000,
  debug: true
};

var keys = Object.keys(config);
console.log("Config keys:", keys);

// Iterate over object properties
Object.keys(config).forEach(function(key) {
  console.log(key + ": " + config[key]);
});

// Object.defineProperty() - Fine-grained control
var product = {};

Object.defineProperty(product, "price", {
  value: 99.99,
  writable: false,  // Read-only
  enumerable: true,
  configurable: false
});

console.log(product.price); // 99.99
product.price = 49.99; // Silently fails (throws in strict mode)
console.log(product.price); // Still 99.99

// Object.seal() - Prevent additions/deletions
var sealedObj = { name: "John" };
Object.seal(sealedObj);
sealedObj.name = "Jane"; // OK - can modify existing
sealedObj.age = 30; // Fails in strict mode - cannot add

// Object.freeze() - Complete immutability
var frozenConfig = { apiKey: "secret123" };
Object.freeze(frozenConfig);
frozenConfig.apiKey = "hacked"; // Fails in strict mode

// ============================================
// 5. GETTERS AND SETTERS
// ============================================

var temperature = {
  celsius: 20,
  get fahrenheit() {
    return (this.celsius * 9/5) + 32;
  },
  set fahrenheit(value) {
    this.celsius = (value - 32) * 5/9;
  }
};

console.log(temperature.fahrenheit); // 68
temperature.fahrenheit = 86;
console.log(temperature.celsius); // 30

// Practical example: Validation in setters
var user = {
  _age: 0,
  get age() {
    return this._age;
  },
  set age(value) {
    if (value < 0 || value > 150) {
      throw new Error("Invalid age");
    }
    this._age = value;
  }
};

user.age = 25; // OK
console.log(user.age); // 25
// user.age = -5; // Throws error

// ============================================
// 6. STRICT MODE - SAFER CODE
// ============================================

function demonstrateStrictMode() {
  "use strict";
  
  // Prevents accidental globals
  try {
    undeclaredVar = 10; // ReferenceError
  } catch (e) {
    console.log("Caught error:", e.message);
  }
  
  // Prevents deleting variables
  var x = 10;
  // delete x; // SyntaxError
  
  // Prevents duplicate parameters
  // function duplicate(a, a) {} // SyntaxError
  
  // Prevents octal literals
  // var octal = 010; // SyntaxError
}

demonstrateStrictMode();

// ============================================
// 7. PRACTICAL EXAMPLE: DATA PROCESSING PIPELINE
// ============================================

var orders = [
  { id: 1, customer: "John", amount: 100, status: "completed" },
  { id: 2, customer: "Jane", amount: 250, status: "completed" },
  { id: 3, customer: "Bob", amount: 75, status: "pending" },
  { id: 4, customer: "Alice", amount: 300, status: "completed" }
];

// Calculate total revenue from completed orders
var totalRevenue = orders
  .filter(function(order) {
    return order.status === "completed";
  })
  .map(function(order) {
    return order.amount;
  })
  .reduce(function(sum, amount) {
    return sum + amount;
  }, 0);

console.log("Total revenue:", totalRevenue); // 650

// Get unique customers with completed orders
var completedCustomers = orders
  .filter(function(order) {
    return order.status === "completed";
  })
  .map(function(order) {
    return order.customer;
  })
  .filter(function(customer, index, self) {
    return self.indexOf(customer) === index;
  });

console.log("Customers with completed orders:", completedCustomers);

// Check if all orders are over $50
var allOverFifty = orders.every(function(order) {
  return order.amount > 50;
});
console.log("All orders over $50:", allOverFifty); // true

// Check if any order is pending
var hasPending = orders.some(function(order) {
  return order.status === "pending";
});
console.log("Has pending orders:", hasPending); // true

// ============================================
// 8. PRACTICAL EXAMPLE: FORM VALIDATION
// ============================================

var FormValidator = {
  rules: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{3}-\d{3}-\d{4}$/
  },
  
  validate: function(formData) {
    var errors = [];
    
    Object.keys(formData).forEach(function(field) {
      var value = formData[field];
      
      // Required field check
      if (value.trim().length === 0) {
        errors.push(field + " is required");
        return;
      }
      
      // Pattern validation
      if (this.rules[field] && !this.rules[field].test(value)) {
        errors.push(field + " format is invalid");
      }
    }.bind(this));
    
    return {
      isValid: errors.length === 0,
      errors: errors
    };
  }
};

var form = {
  email: "user@example.com",
  phone: "123-456-7890"
};

var validationResult = FormValidator.validate(form);
console.log("Validation:", validationResult);
