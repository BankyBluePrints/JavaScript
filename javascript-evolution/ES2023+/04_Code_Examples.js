// ES2023 Examples

// Immutable array operations
const original = [1, 2, 3, 4, 5];

const reversed = original.toReversed();
console.log(reversed); // [5, 4, 3, 2, 1]
console.log(original); // [1, 2, 3, 4, 5] - unchanged

const sorted = [3, 1, 4, 1, 5].toSorted();
console.log(sorted); // [1, 1, 3, 4, 5]

const modified = original.with(2, 99);
console.log(modified); // [1, 2, 99, 4, 5]

// Find from end
const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
const lastEven = numbers.findLast(n => n % 2 === 0);
console.log(lastEven); // 2 (the last even number)
