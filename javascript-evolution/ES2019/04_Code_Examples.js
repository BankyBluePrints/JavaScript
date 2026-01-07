// ES2019 Code Examples

// Array.flat() - Process nested data
const responses = [
  [{ id: 1 }, { id: 2 }],
  [{ id: 3 }, { id: 4 }],
  [{ id: 5 }]
];

const allItems = responses.flat();
console.log(allItems); // All items in one array

// Array.flatMap() - Transform and flatten
const sentences = ["Hello world", "How are you"];
const words = sentences.flatMap(s => s.split(' '));
console.log(words); // ["Hello", "world", "How", "are", "you"]

// Object.fromEntries() - Transform object
const prices = { apple: 100, banana: 200, orange: 150 };
const discounted = Object.fromEntries(
  Object.entries(prices).map(([item, price]) => [item, price * 0.9])
);
console.log(discounted);

// String.trimStart/trimEnd() - Parse formatted text
const formatted = "   Name: John   ";
const cleaned = formatted.trimStart().trimEnd();
console.log(cleaned);

// Optional catch binding - Simple error handling
function parseJSON(str) {
  try {
    return JSON.parse(str);
  } catch {
    return null; // Don't need error details
  }
}
