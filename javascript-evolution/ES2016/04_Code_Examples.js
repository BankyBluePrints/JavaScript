// ES2016 Code Examples
// This file demonstrates ES2016 features with realistic, runnable examples

// ============================================
// 1. EXPONENTIATION OPERATOR (**)
// ============================================

// OLD APPROACH (ES5/ES6): Math.pow()
function calculateCompoundInterestOld(principal, rate, years) {
  return principal * Math.pow(1 + rate, years);
}

// MODERN APPROACH (ES2016+): ** operator
function calculateCompoundInterest(principal, rate, years) {
  return principal * (1 + rate) ** years;
}

// Example: $1000 at 5% for 10 years
const investment = calculateCompoundInterest(1000, 0.05, 10);
console.log(`Investment value: $${investment.toFixed(2)}`); // $1628.89

// Practical example: Calculate area of square
const sideLength = 5;
const area = sideLength ** 2;
console.log(`Area: ${area} square units`); // 25

// Practical example: Volume of cube
const cubeVolume = sideLength ** 3;
console.log(`Volume: ${cubeVolume} cubic units`); // 125

// Compound assignment
let value = 2;
console.log(`Initial: ${value}`); // 2
value **= 3;
console.log(`After **= 3: ${value}`); // 8
value **= 2;
console.log(`After **= 2: ${value}`); // 64

// ============================================
// 2. ARRAY.INCLUDES()
// ============================================

// OLD APPROACH (ES5/ES6): indexOf
const allowedRolesOld = ["admin", "editor", "viewer"];

function hasPermissionOld(role) {
  return allowedRolesOld.indexOf(role) !== -1;
}

// MODERN APPROACH (ES2016+): includes
const allowedRoles = ["admin", "editor", "viewer"];

function hasPermission(role) {
  return allowedRoles.includes(role);
}

console.log(hasPermission("admin"));    // true
console.log(hasPermission("guest"));    // false

// Practical example: Form validation
function validateEmail(email) {
  const blockedDomains = ["tempmail.com", "throwaway.email", "spam.com"];
  const domain = email.split("@")[1];
  
  if (blockedDomains.includes(domain)) {
    return { valid: false, error: "Email domain is blocked" };
  }
  
  return { valid: true };
}

console.log(validateEmail("user@example.com"));    // { valid: true }
console.log(validateEmail("user@tempmail.com"));   // { valid: false, error: ... }

// Practical example: Feature flags
const enabledFeatures = ["dark-mode", "notifications", "analytics"];

function isFeatureEnabled(feature) {
  return enabledFeatures.includes(feature);
}

if (isFeatureEnabled("dark-mode")) {
  console.log("Dark mode is enabled");
}

// Handling NaN correctly
const measurements = [10.5, 22.3, NaN, 45.8];

// OLD: indexOf can't find NaN
console.log(measurements.indexOf(NaN) !== -1);  // false (wrong!)

// NEW: includes handles NaN
console.log(measurements.includes(NaN));  // true (correct!)

// Practical example: Checking user permissions
class User {
  constructor(name, permissions) {
    this.name = name;
    this.permissions = permissions;
  }
  
  can(action) {
    return this.permissions.includes(action);
  }
}

const user = new User("John", ["read", "write", "delete"]);
console.log(user.can("write"));   // true
console.log(user.can("admin"));   // false

// ============================================
// 3. COMBINED PRACTICAL EXAMPLE: GAME SCORING
// ============================================

class GameScore {
  constructor() {
    this.baseScore = 100;
    this.multiplier = 1;
    this.bonusItems = [];
  }
  
  // Using exponentiation
  calculateScore(level) {
    // Score increases exponentially with level
    return this.baseScore * (this.multiplier ** level);
  }
  
  // Using includes
  addBonusItem(item) {
    const validItems = ["coin", "star", "powerup"];
    
    if (validItems.includes(item)) {
      this.bonusItems.push(item);
      return true;
    }
    
    return false;
  }
  
  hasBonusItem(item) {
    return this.bonusItems.includes(item);
  }
  
  applyBonus() {
    if (this.hasBonusItem("powerup")) {
      this.multiplier **= 2; // Square the multiplier
    }
  }
}

const game = new GameScore();
console.log(`Level 1 score: ${game.calculateScore(1)}`); // 100
console.log(`Level 5 score: ${game.calculateScore(5)}`); // 100

game.addBonusItem("powerup");
game.applyBonus();
console.log(`After powerup - Level 5 score: ${game.calculateScore(5)}`); // 3200

// ============================================
// 4. PRACTICAL EXAMPLE: ACCESS CONTROL
// ============================================

class AccessControl {
  constructor() {
    this.allowedIPs = [
      "192.168.1.1",
      "192.168.1.100",
      "10.0.0.5"
    ];
    this.blockedPaths = [
      "/admin",
      "/config",
      "/internal"
    ];
  }
  
  isIPAllowed(ip) {
    return this.allowedIPs.includes(ip);
  }
  
  isPathBlocked(path) {
    return this.blockedPaths.includes(path);
  }
  
  canAccess(ip, path) {
    return this.isIPAllowed(ip) && !this.isPathBlocked(path);
  }
  
  // Calculate retry delay with exponential backoff
  getRetryDelay(attemptNumber) {
    const baseDelay = 1000; // 1 second
    return baseDelay * (2 ** attemptNumber); // Exponential backoff
  }
}

const access = new AccessControl();
console.log(access.canAccess("192.168.1.1", "/home")); // true
console.log(access.canAccess("192.168.1.1", "/admin")); // false
console.log(access.canAccess("203.0.113.1", "/home")); // false

console.log("Retry delays:");
for (let i = 0; i < 5; i++) {
  console.log(`Attempt ${i + 1}: ${access.getRetryDelay(i)}ms`);
}
// Attempt 1: 1000ms
// Attempt 2: 2000ms
// Attempt 3: 4000ms
// Attempt 4: 8000ms
// Attempt 5: 16000ms

// ============================================
// 5. MIGRATION EXAMPLE
// ============================================

// Before ES2016
function oldCode() {
  // Power calculation
  var squared = Math.pow(5, 2);
  
  // Array checking
  var colors = ["red", "green", "blue"];
  var hasRed = colors.indexOf("red") !== -1;
  
  // Compound
  var value = 2;
  value = Math.pow(value, 3);
  
  return { squared: squared, hasRed: hasRed, value: value };
}

// After ES2016
function modernCode() {
  // Power calculation
  const squared = 5 ** 2;
  
  // Array checking
  const colors = ["red", "green", "blue"];
  const hasRed = colors.includes("red");
  
  // Compound
  let value = 2;
  value **= 3;
  
  return { squared, hasRed, value };
}

console.log("Old:", oldCode());
console.log("Modern:", modernCode());
