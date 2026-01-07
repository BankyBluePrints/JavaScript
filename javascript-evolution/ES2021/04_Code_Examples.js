// ES2021 Examples

// replaceAll
const text = "JavaScript is great. JavaScript is fun.";
const updated = text.replaceAll("JavaScript", "JS");

// Logical assignment
const config = {};
config.port ??= 3000;
config.host ??= 'localhost';

// Numeric separators
const billion = 1_000_000_000;
const fileSize = 1_073_741_824; // 1GB

// Promise.any
async function fetchFromMirrors() {
  return await Promise.any([
    fetch('https://mirror1.com/data'),
    fetch('https://mirror2.com/data'),
    fetch('https://mirror3.com/data')
  ]);
}
