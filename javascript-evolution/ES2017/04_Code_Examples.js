// ES2017 Code Examples
// async/await and other ES2017 features

// ============================================
// 1. ASYNC/AWAIT - API CALLS
// ============================================

// OLD APPROACH (ES6): Promise chains
function fetchUserDataOld(userId) {
  return fetch(`/api/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      return fetch(`/api/posts?userId=${user.id}`)
        .then(postsResponse => postsResponse.json())
        .then(posts => {
          return { user, posts };
        });
    })
    .catch(error => {
      console.error("Error:", error);
      throw error;
    });
}

// MODERN APPROACH (ES2017+): async/await
async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    const user = await response.json();
    
    const postsResponse = await fetch(`/api/posts?userId=${user.id}`);
    const posts = await postsResponse.json();
    
    return { user, posts };
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// ============================================
// 2. PARALLEL ASYNC OPERATIONS
// ============================================

async function loadDashboardData() {
  try {
    // Run all requests in parallel
    const [users, posts, comments, stats] = await Promise.all([
      fetch('/api/users').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/comments').then(r => r.json()),
      fetch('/api/stats').then(r => r.json())
    ]);
    
    console.log("All data loaded");
    return { users, posts, comments, stats };
  } catch (error) {
    console.error("Failed to load dashboard:", error);
  }
}

// Sequential vs Parallel
async function demonstrateSequentialVsParallel() {
  console.time("Sequential");
  const user1 = await fetchUser(1);
  const user2 = await fetchUser(2);
  const user3 = await fetchUser(3);
  console.timeEnd("Sequential"); // ~3 seconds
  
  console.time("Parallel");
  const [p1, p2, p3] = await Promise.all([
    fetchUser(1),
    fetchUser(2),
    fetchUser(3)
  ]);
  console.timeEnd("Parallel"); // ~1 second
}

// Helper
async function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, name: `User${id}` }), 1000);
  });
}

// ============================================
// 3. ERROR HANDLING WITH TRY/CATCH
// ============================================

async function processPayment(userId, amount) {
  try {
    const user = await fetchUser(userId);
    
    if (user.balance < amount) {
      throw new Error("Insufficient funds");
    }
    
    const transaction = await createTransaction(userId, amount);
    await updateBalance(userId, user.balance - amount);
    await sendConfirmationEmail(user.email, transaction);
    
    return {
      success: true,
      transactionId: transaction.id
    };
  } catch (error) {
    console.error("Payment failed:", error.message);
    await logError(error);
    
    return {
      success: false,
      error: error.message
    };
  }
}

// Helpers
async function createTransaction(userId, amount) {
  return { id: Date.now(), userId, amount };
}

async function updateBalance(userId, newBalance) {
  console.log(`Updated balance for user ${userId}: ${newBalance}`);
}

async function sendConfirmationEmail(email, transaction) {
  console.log(`Email sent to ${email}`);
}

async function logError(error) {
  console.log("Logged error:", error.message);
}

// ============================================
// 4. OBJECT.VALUES() AND OBJECT.ENTRIES()
// ============================================

const products = {
  laptop: 1000,
  phone: 500,
  tablet: 300,
  watch: 200
};

// Object.values() - get all prices
const prices = Object.values(products);
console.log("Prices:", prices); // [1000, 500, 300, 200]

const totalValue = Object.values(products)
  .reduce((sum, price) => sum + price, 0);
console.log("Total value:", totalValue); // 2000

// Object.entries() - iterate with destructuring
for (const [product, price] of Object.entries(products)) {
  console.log(`${product}: $${price}`);
}

// Filter object
const expensive = Object.fromEntries(
  Object.entries(products).filter(([name, price]) => price >= 500)
);
console.log("Expensive products:", expensive);

// Transform object
const discounted = Object.fromEntries(
  Object.entries(products).map(([name, price]) => [name, price * 0.9])
);
console.log("Discounted prices:", discounted);

// ============================================
// 5. STRING PADDING
// ============================================

// padStart - Format IDs
function formatId(id) {
  return String(id).padStart(8, "0");
}

console.log(formatId(42));      // "00000042"
console.log(formatId(1234));    // "00001234"

// padEnd - Table formatting
function formatTable(data) {
  const nameWidth = 20;
  const emailWidth = 30;
  
  console.log(
    "Name".padEnd(nameWidth) + 
    "Email".padEnd(emailWidth) + 
    "Age"
  );
  console.log("-".repeat(55));
  
  data.forEach(person => {
    console.log(
      person.name.padEnd(nameWidth) +
      person.email.padEnd(emailWidth) +
      person.age
    );
  });
}

formatTable([
  { name: "John Doe", email: "john@example.com", age: 30 },
  { name: "Jane Smith", email: "jane@example.com", age: 25 }
]);

// Format time
function formatTime(hours, minutes, seconds) {
  return [
    String(hours).padStart(2, "0"),
    String(minutes).padStart(2, "0"),
    String(seconds).padStart(2, "0")
  ].join(":");
}

console.log(formatTime(9, 5, 3));   // "09:05:03"
console.log(formatTime(14, 30, 45)); // "14:30:45"

// ============================================
// 6. PRACTICAL EXAMPLE: DATA FETCHER SERVICE
// ============================================

class DataFetcher {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.cache = new Map();
  }
  
  async get(endpoint) {
    // Check cache
    if (this.cache.has(endpoint)) {
      console.log(`Cache hit: ${endpoint}`);
      return this.cache.get(endpoint);
    }
    
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      // Cache result
      this.cache.set(endpoint, data);
      
      return data;
    } catch (error) {
      console.error(`Failed to fetch ${endpoint}:`, error.message);
      throw error;
    }
  }
  
  async getMultiple(endpoints) {
    return await Promise.all(
      endpoints.map(endpoint => this.get(endpoint))
    );
  }
  
  clearCache() {
    this.cache.clear();
  }
  
  getCacheStats() {
    return {
      size: this.cache.size,
      endpoints: Array.from(this.cache.keys())
    };
  }
}

// Usage
async function demonstrateDataFetcher() {
  const api = new DataFetcher("https://jsonplaceholder.typicode.com");
  
  try {
    // Single request
    const user = await api.get("/users/1");
    console.log("User:", user);
    
    // Multiple parallel requests
    const [users, posts] = await api.getMultiple([
      "/users",
      "/posts"
    ]);
    
    console.log(`Loaded ${users.length} users and ${posts.length} posts`);
    
    // Cache stats
    console.log("Cache stats:", api.getCacheStats());
  } catch (error) {
    console.error("Error:", error);
  }
}

// ============================================
// 7. PRACTICAL EXAMPLE: FORM VALIDATOR
// ============================================

class AsyncFormValidator {
  async validateUsername(username) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const takenUsernames = ["admin", "root", "test"];
    
    if (username.length < 3) {
      throw new Error("Username must be at least 3 characters");
    }
    
    if (takenUsernames.includes(username)) {
      throw new Error("Username is already taken");
    }
    
    return true;
  }
  
  async validateEmail(email) {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!pattern.test(email)) {
      throw new Error("Invalid email format");
    }
    
    return true;
  }
  
  async validateForm(formData) {
    const errors = {};
    
    // Validate all fields in parallel
    const results = await Promise.allSettled([
      this.validateUsername(formData.username)
        .catch(error => { errors.username = error.message; }),
      this.validateEmail(formData.email)
        .catch(error => { errors.email = error.message; })
    ]);
    
    const isValid = Object.keys(errors).length === 0;
    
    return {
      isValid,
      errors: isValid ? null : errors
    };
  }
}

// Usage
async function demonstrateValidator() {
  const validator = new AsyncFormValidator();
  
  const formData = {
    username: "john",
    email: "john@example.com"
  };
  
  console.log("Validating form...");
  const result = await validator.validateForm(formData);
  console.log("Validation result:", result);
}

// Run examples (uncomment to test)
// demonstrateDataFetcher();
// demonstrateValidator();
