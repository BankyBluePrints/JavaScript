# ES2022 (ECMAScript 2022)

**Release Year:** 2022

## Major Highlights

- **Class Fields** - Public and private instance fields
- **Private Methods and Accessors** - `#privateMethod()`
- **Static Class Fields** - Static public and private fields
- **Static Initialization Blocks** - `static { }`
- **Top-level await** - await at module top level
- **`.at()` Method** - Negative indexing for arrays/strings
- **Object.hasOwn()** - Safer hasOwnProperty
- **Error.cause** - Chain error causes
- **RegExp Match Indices** - Get match positions

## Why This Version Changed How JavaScript Is Written

ES2022 brought true **private fields and methods** to classes:

- **Private fields** (`#field`) with real privacy
- **Top-level await** simplified module initialization
- **`.at()` method** enabled negative indexing like Python
- **Class static blocks** for complex initialization

Private fields changed how OOP is done in JavaScript, providing encapsulation that was previously impossible.
