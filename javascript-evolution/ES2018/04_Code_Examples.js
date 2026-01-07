// ES2018 Code Examples

// ============================================
// 1. OBJECT SPREAD/REST
// ============================================

// Immutable state updates (React pattern)
const state = {
  user: { name: "John", age: 30 },
  isLoading: false,
  error: null
};

// Update nested object
const newState = {
  ...state,
  user: { ...state.user, age: 31 }
};

// Remove properties
const { error, ...cleanState } = state;

// Merge configurations
const defaultConfig = {
  theme: "light",
  notifications: true,
  lang: "en"
};

const userConfig = {
  theme: "dark",
  fontSize: 14
};

const finalConfig = { ...defaultConfig, ...userConfig };
console.log(finalConfig);
// { theme: "dark", notifications: true, lang: "en", fontSize: 14 }

// ============================================
// 2. FOR AWAIT...OF
// ============================================

// Async generator
async function* fetchPages(url, totalPages) {
  for (let page = 1; page <= totalPages; page++) {
    const response = await fetch(`${url}?page=${page}`);
    const data = await response.json();
    yield data;
  }
}

// Process async iterable
async function processAllPages() {
  for await (const pageData of fetchPages('/api/data', 5)) {
    console.log('Processing page:', pageData);
  }
}

// ============================================
// 3. PROMISE.FINALLY()
// ============================================

async function loadUserData(userId) {
  const loadingIndicator = showLoading();
  
  try {
    const response = await fetch(`/api/users/${userId}`);
    const user = await response.json();
    displayUser(user);
  } catch (error) {
    showError(error);
  } finally {
    hideLoading(loadingIndicator); // Always runs
  }
}

// Helpers
function showLoading() {
  console.log("Loading...");
  return "indicator";
}

function hideLoading(indicator) {
  console.log("Loading complete");
}

function displayUser(user) {
  console.log("User:", user);
}

function showError(error) {
  console.error("Error:", error);
}

// ============================================
// 4. REGEXP NAMED GROUPS
// ============================================

// Parse date
const dateRegex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const dateString = '2023-12-25';
const match = dateString.match(dateRegex);

if (match) {
  const { year, month, day } = match.groups;
  console.log(`Year: ${year}, Month: ${month}, Day: ${day}`);
}

// Format date
const formatted = dateString.replace(
  dateRegex,
  '$<month>/$<day>/$<year>'
);
console.log(formatted); // "12/25/2023"

// Parse email
const emailRegex = /(?<username>[^@]+)@(?<domain>.+)/;
const email = 'user@example.com';
const emailMatch = email.match(emailRegex);

if (emailMatch) {
  const { username, domain } = emailMatch.groups;
  console.log(`Username: ${username}, Domain: ${domain}`);
}

// ============================================
// 5. PRACTICAL EXAMPLE: STATE MANAGEMENT
// ============================================

class StateManager {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }
  
  setState(updates) {
    // Immutable update using spread
    this.state = { ...this.state, ...updates };
    this.notify();
  }
  
  updateNested(path, value) {
    // Deep immutable update
    const keys = path.split('.');
    const newState = { ...this.state };
    
    let current = newState;
    for (let i = 0; i < keys.length - 1; i++) {
      current[keys[i]] = { ...current[keys[i]] };
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
    this.state = newState;
    this.notify();
  }
  
  subscribe(listener) {
    this.listeners.push(listener);
  }
  
  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }
}

const store = new StateManager({
  user: { name: "John", preferences: { theme: "light" } },
  count: 0
});

store.subscribe(state => console.log("State updated:", state));
store.setState({ count: 1 });
store.updateNested('user.preferences.theme', 'dark');
