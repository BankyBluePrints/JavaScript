# Optional Chaining (ES2020)

## What it is
Optional chaining (`?.`) allows you to safely access deeply nested object properties without explicitly checking if each reference in the chain is valid. If any part of the chain is `null` or `undefined`, the expression short-circuits and returns `undefined` instead of throwing an error.

## Before this feature
Before ES2020, accessing nested properties required verbose null/undefined checks to avoid errors.

```javascript
// ES6 - Manual null checking
const user = {
  name: "John",
  address: {
    street: "Main St",
    city: "Boston"
  }
};

// Verbose null checking
let city;
if (user && user.address && user.address.city) {
  city = user.address.city;
}

// Or with ternary
const zipCode = user && user.address && user.address.zipCode;

// Function calls
let result;
if (user && user.getProfile && typeof user.getProfile === 'function') {
  result = user.getProfile();
}

// Array access
let firstItem;
if (data && data.items && data.items[0]) {
  firstItem = data.items[0];
}
```

## After this feature
ES2020 introduced optional chaining for safe, concise property access.

```javascript
// ES2020 - Optional chaining
const user = {
  name: "John",
  address: {
    street: "Main St",
    city: "Boston"
  }
};

// Safe property access
const city = user?.address?.city;  // "Boston"
const zipCode = user?.address?.zipCode;  // undefined (no error!)

// Non-existent nested path
const user2 = null;
const street = user2?.address?.street;  // undefined (no error!)

// Optional function call
const result = user.getProfile?.();  // undefined if method doesn't exist

// Real method call
const person = {
  getName: () => "Alice"
};
const name = person.getName?.();  // "Alice"

// Optional array access
const data = {
  items: [1, 2, 3]
};

const firstItem = data?.items?.[0];  // 1
const tenthItem = data?.items?.[10];  // undefined

// Combining with nullish coalescing
const displayName = user?.profile?.name ?? "Guest";

// Complex example
const config = {
  server: {
    host: "localhost",
    port: 3000
  }
};

const port = config?.server?.port ?? 8080;  // 3000
const timeout = config?.server?.timeout ?? 5000;  // 5000 (doesn't exist)

// With function calls
const api = {
  getData: () => ({ value: 42 })
};

const value = api?.getData?.()?.value;  // 42

// Array of objects
const users = [
  { id: 1, profile: { name: "John" } },
  { id: 2 },  // No profile
  { id: 3, profile: { name: "Alice" } }
];

const names = users.map(user => user?.profile?.name ?? "Unknown");
// ["John", "Unknown", "Alice"]

// Optional deletion
delete user?.address?.temporaryField;  // Safe even if address doesn't exist

// With dynamic properties
const key = "address";
const userAddress = user?.[key]?.city;

// Function chain
const result2 = obj?.method1?.()?.method2?.()?.value;

// Real-world: API response handling
async function fetchUser(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    const data = await response.json();
    
    // Safe access to potentially missing data
    const userName = data?.user?.profile?.displayName ?? "Anonymous";
    const email = data?.user?.contact?.email;
    const isVerified = data?.user?.contact?.verified ?? false;
    
    return { userName, email, isVerified };
  } catch (error) {
    return { userName: "Error", email: null, isVerified: false };
  }
}

// Event handler
document.querySelector('#button')?.addEventListener?.('click', () => {
  console.log('Clicked');
});

// localStorage access
const theme = localStorage?.getItem?.('theme') ?? 'light';

// Optional chaining with arrays and functions
const callbacks = {
  onSuccess: (data) => console.log('Success:', data)
};

callbacks?.onSuccess?.({ message: "Done" });  // Logs if exists
callbacks?.onError?.({ message: "Failed" });   // Silent if doesn't exist

// Nested arrays
const matrix = [[1, 2], [3, 4]];
const value2 = matrix?.[0]?.[1];  // 2
const missing = matrix?.[5]?.[10];  // undefined
```

## Why this is better
- **Concise** - No verbose if chains
- **Safe** - Never throws on null/undefined access
- **Readable** - Intent clear at a glance
- **Flexible** - Works with properties, methods, arrays
- **Prevents crashes** - Gracefully handles missing data
- **Natural flow** - Reads left-to-right naturally

## Key notes / edge cases
- **Returns undefined** - Not null, always undefined on failure
- **Short-circuits** - Stops at first null/undefined
- **Only null/undefined** - Doesn't check for other falsy values (0, '', false)
- **Can't assign** - Can't use on left side of assignment
- **Delete operator** - Works with delete for safe deletion
- **Parentheses** - `obj.method?.()` not `obj.method?()`
- **Performance** - Tiny overhead, negligible in practice

## Quick practice

### Practice 1
Create a nested object representing a company with employees. Some employees have addresses, some don't. Use optional chaining to safely access `employee?.address?.city` for multiple employees, providing "N/A" as default.

### Practice 2
Write a function that safely calls a callback if it exists. The function should accept an object with optional `onSuccess` and `onError` callbacks, and call the appropriate one based on a condition.

### Practice 3
Create an array of API response objects where some have `data.result.value` and others don't. Use map with optional chaining to extract all values, defaulting to 0 for missing ones.
