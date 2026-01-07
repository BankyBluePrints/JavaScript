// ES2020 Code Examples

// Optional Chaining - API response handling
async function getUserCity(userId) {
  const response = await fetch(`/api/users/${userId}`);
  const user = await response.json();
  
  // No need for multiple null checks
  return user?.profile?.address?.city ?? 'Unknown';
}

// Nullish Coalescing - Form defaults
function processFormData(formData) {
  return {
    name: formData.name ?? 'Guest',
    age: formData.age ?? 18,
    count: formData.count ?? 0,  // 0 is valid!
    enabled: formData.enabled ?? true  // false is valid!
  };
}

// Combined: Optional chaining + Nullish coalescing
const settings = {
  volume: config?.audio?.volume ?? 50,
  theme: config?.display?.theme ?? 'light'
};

// Promise.allSettled() - Handle multiple API calls
async function loadAllData() {
  const results = await Promise.allSettled([
    fetch('/api/users'),
    fetch('/api/posts'),
    fetch('/api/comments')
  ]);
  
  results.forEach((result, i) => {
    if (result.status === 'fulfilled') {
      console.log(`API ${i} succeeded:`, result.value);
    } else {
      console.log(`API ${i} failed:`, result.reason);
    }
  });
}

// BigInt - Large number calculations
const maxSafeInt = 9007199254740991n;
const larger = maxSafeInt + 1000n;
console.log(larger); // 9007199254740992000n

// Dynamic import - Code splitting
async function loadFeature() {
  if (userWantsFeature) {
    const module = await import('./heavy-feature.js');
    module.initialize();
  }
}
