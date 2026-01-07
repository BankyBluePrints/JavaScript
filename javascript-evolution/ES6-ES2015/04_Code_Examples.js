// ES6/ES2015 Code Examples
// This file demonstrates ES6 features with realistic, runnable examples

// ============================================
// 1. LET, CONST, AND BLOCK SCOPE
// ============================================

// OLD APPROACH (ES5): var with function scope
function oldCounterExample() {
  var counters = [];
  for (var i = 0; i < 3; i++) {
    counters.push(function() {
      console.log(i); // All print 3!
    });
  }
  counters.forEach(c => c());
}

// MODERN APPROACH (ES6+): let with block scope
function modernCounterExample() {
  const counters = [];
  for (let i = 0; i < 3; i++) {
    counters.push(() => {
      console.log(i); // Prints 0, 1, 2
    });
  }
  counters.forEach(c => c());
}

modernCounterExample();

// ============================================
// 2. ARROW FUNCTIONS
// ============================================

// Practical example: Array transformations
const products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Phone", price: 500, category: "Electronics" },
  { name: "Desk", price: 300, category: "Furniture" }
];

// OLD APPROACH (ES5)
const expensiveProductsOld = products
  .filter(function(p) { return p.price > 400; })
  .map(function(p) { return p.name; });

// MODERN APPROACH (ES6+)
const expensiveProducts = products
  .filter(p => p.price > 400)
  .map(p => p.name);

console.log("Expensive products:", expensiveProducts);

// Lexical 'this' binding
const timer = {
  seconds: 0,
  start() {
    setInterval(() => {
      this.seconds++; // 'this' refers to timer object
      console.log(this.seconds);
    }, 1000);
  }
};

// ============================================
// 3. TEMPLATE LITERALS
// ============================================

const user = {
  name: "John Doe",
  age: 30,
  email: "john@example.com"
};

// OLD APPROACH (ES5)
const oldGreeting = "Hello, " + user.name + "!\n" +
  "You are " + user.age + " years old.\n" +
  "Email: " + user.email;

// MODERN APPROACH (ES6+)
const greeting = `
Hello, ${user.name}!
You are ${user.age} years old.
Email: ${user.email}
`;

// Tagged template literals
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? `<strong>${values[i]}</strong>` : '');
  }, '');
}

const message = highlight`User ${user.name} is ${user.age} years old`;
console.log(message);

// ============================================
// 4. DESTRUCTURING
// ============================================

// Object destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    city: "New York",
    country: "USA"
  }
};

// Extract properties
const { firstName, lastName, age } = person;

// Nested destructuring
const { address: { city, country } } = person;

// Renaming
const { firstName: first, lastName: last } = person;

// Default values
const { phone = "N/A" } = person;

// Array destructuring
const coordinates = [40.7128, -74.0060];
const [latitude, longitude] = coordinates;

// Skipping elements
const numbers = [1, 2, 3, 4, 5];
const [first, , third] = numbers;

// Rest in destructuring
const [head, ...tail] = numbers;
console.log("Head:", head, "Tail:", tail);

// Function parameter destructuring
function createUser({ name, email, age = 18 }) {
  return {
    name,
    email,
    age,
    createdAt: new Date()
  };
}

const newUser = createUser({
  name: "Jane",
  email: "jane@example.com"
});

// ============================================
// 5. REST AND SPREAD OPERATORS
// ============================================

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// Spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
const copy = [...arr1];

// Spread in function calls
const nums = [5, 2, 8, 1, 9];
console.log(Math.max(...nums)); // 9

// Spread in objects (ES2018+)
const defaults = { theme: "light", lang: "en" };
const userSettings = { lang: "es", fontSize: 14 };
const settings = { ...defaults, ...userSettings };
console.log(settings); // { theme: "light", lang: "es", fontSize: 14 }

// ============================================
// 6. CLASSES
// ============================================

// OLD APPROACH (ES5): Prototype-based
function AnimalOld(name) {
  this.name = name;
}
AnimalOld.prototype.speak = function() {
  console.log(this.name + " makes a sound");
};

// MODERN APPROACH (ES6+): Class syntax
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a sound`);
  }
  
  // Static method
  static create(name) {
    return new Animal(name);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() {
    console.log(`${this.name} barks`);
  }
  
  // Getter
  get info() {
    return `${this.name} is a ${this.breed}`;
  }
  
  // Setter
  set info(value) {
    const [name, breed] = value.split(" is a ");
    this.name = name;
    this.breed = breed;
  }
}

const dog = new Dog("Max", "Golden Retriever");
dog.speak(); // "Max barks"
console.log(dog.info); // "Max is a Golden Retriever"

// ============================================
// 7. PROMISES
// ============================================

// OLD APPROACH (ES5): Callbacks
function fetchUserOld(id, callback) {
  setTimeout(() => {
    callback(null, { id, name: "John" });
  }, 1000);
}

// MODERN APPROACH (ES6+): Promises
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "John" });
      } else {
        reject(new Error("Invalid ID"));
      }
    }, 1000);
  });
}

// Using promises
fetchUser(1)
  .then(user => {
    console.log("User:", user);
    return fetchPosts(user.id);
  })
  .then(posts => {
    console.log("Posts:", posts);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });

// Helper function
function fetchPosts(userId) {
  return Promise.resolve([
    { id: 1, userId, title: "Post 1" },
    { id: 2, userId, title: "Post 2" }
  ]);
}

// Promise.all - parallel execution
Promise.all([
  fetchUser(1),
  fetchUser(2),
  fetchUser(3)
])
  .then(users => {
    console.log("All users:", users);
  })
  .catch(error => {
    console.error("Error fetching users:", error);
  });

// Promise.race - first to complete
Promise.race([
  fetchUser(1),
  fetchUser(2)
])
  .then(user => {
    console.log("First user:", user);
  });

// ============================================
// 8. MODULES (Conceptual - requires module system)
// ============================================

// math.js
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export default class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(n) {
    this.result += n;
    return this;
  }
  
  multiply(n) {
    this.result *= n;
    return this;
  }
  
  getResult() {
    return this.result;
  }
}

// app.js (usage)
// import Calculator, { PI, add, multiply } from './math.js';
// const calc = new Calculator();
// calc.add(5).multiply(2).getResult(); // 10

// ============================================
// 9. MAP AND SET
// ============================================

// Map - key-value pairs with any type of key
const userMap = new Map();
userMap.set('name', 'John');
userMap.set(1, 'number key');
userMap.set({ id: 1 }, 'object key');

console.log(userMap.get('name')); // "John"
console.log(userMap.has('name')); // true
console.log(userMap.size); // 3

// Iterating Map
for (const [key, value] of userMap) {
  console.log(key, value);
}

// Set - unique values
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
console.log(uniqueNumbers); // Set {1, 2, 3, 4}

uniqueNumbers.add(5);
uniqueNumbers.delete(1);
console.log(uniqueNumbers.has(2)); // true

// Set operations
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

// Union
const union = new Set([...setA, ...setB]); // {1, 2, 3, 4, 5}

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x))); // {3}

// Difference
const difference = new Set([...setA].filter(x => !setB.has(x))); // {1, 2}

// ============================================
// 10. GENERATORS
// ============================================

// Generator function
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generateSequence();
console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }

// Infinite generator
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const ids = idGenerator();
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2

// Practical example: Pagination
function* paginate(array, pageSize) {
  for (let i = 0; i < array.length; i += pageSize) {
    yield array.slice(i, i + pageSize);
  }
}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pages = paginate(items, 3);

for (const page of pages) {
  console.log("Page:", page);
}

// ============================================
// 11. PRACTICAL EXAMPLE: E-COMMERCE CART
// ============================================

class ShoppingCart {
  constructor() {
    this.items = new Map();
  }
  
  addItem(product, quantity = 1) {
    const existing = this.items.get(product.id);
    if (existing) {
      this.items.set(product.id, {
        ...existing,
        quantity: existing.quantity + quantity
      });
    } else {
      this.items.set(product.id, { ...product, quantity });
    }
    return this;
  }
  
  removeItem(productId) {
    this.items.delete(productId);
    return this;
  }
  
  getTotal() {
    return [...this.items.values()]
      .reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  
  getItemCount() {
    return [...this.items.values()]
      .reduce((count, item) => count + item.quantity, 0);
  }
  
  *[Symbol.iterator]() {
    yield* this.items.values();
  }
}

const cart = new ShoppingCart();
cart
  .addItem({ id: 1, name: "Laptop", price: 1000 }, 1)
  .addItem({ id: 2, name: "Mouse", price: 25 }, 2);

console.log(`Total: $${cart.getTotal()}`);
console.log(`Items: ${cart.getItemCount()}`);

for (const item of cart) {
  console.log(`${item.name}: ${item.quantity} x $${item.price}`);
}
