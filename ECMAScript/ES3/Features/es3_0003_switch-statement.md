# Switch Statement (ES3)

## What it is
The switch statement provides a clean way to execute different code blocks based on multiple possible values of an expression. It's an alternative to writing multiple if-else statements when comparing one variable against several values.

## Before this feature
Before ES3, developers had to use lengthy if-else chains to handle multiple conditions, which became verbose and harder to maintain as the number of conditions grew.

```javascript
// ES1/ES2 - Multiple if-else statements
var day = 3;
var dayName;

if (day === 1) {
  dayName = "Monday";
} else if (day === 2) {
  dayName = "Tuesday";
} else if (day === 3) {
  dayName = "Wednesday";
} else if (day === 4) {
  dayName = "Thursday";
} else if (day === 5) {
  dayName = "Friday";
} else if (day === 6) {
  dayName = "Saturday";
} else if (day === 7) {
  dayName = "Sunday";
} else {
  dayName = "Invalid day";
}
```

## After this feature
ES3 introduced the switch statement, making multi-way branching more readable and maintainable.

```javascript
// ES3 - Switch statement
var day = 3;
var dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

// Fall-through behavior (intentional)
var month = "January";
var season;

switch (month) {
  case "December":
  case "January":
  case "February":
    season = "Winter";
    break;
  case "March":
  case "April":
  case "May":
    season = "Spring";
    break;
  case "June":
  case "July":
  case "August":
    season = "Summer";
    break;
  case "September":
  case "October":
  case "November":
    season = "Fall";
    break;
  default:
    season = "Unknown";
}

// With expressions
var score = 85;
var grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}
```

## Why this is better
- **Readability** - Easier to understand at a glance than if-else chains
- **Maintainability** - Adding or removing cases is straightforward
- **Fall-through support** - Multiple cases can share the same code
- **Default handling** - Built-in default case for unmatched values
- **Performance** - Can be optimized by JavaScript engines for many cases

## Key notes / edge cases
- **Break statements are crucial** - Forgetting break causes fall-through
- **Strict equality** - Switch uses === for comparison (not ==)
- **Any expression** - Switch can evaluate any expression, not just variables
- **Default placement** - Default can be anywhere but conventionally goes last
- **Fall-through is a feature** - Use intentionally for multiple cases
- **Block scope** - Variables declared in cases need braces for block scope (ES6+)

## Quick practice

### Practice 1
Create a switch statement that takes an HTTP status code and returns a message. Handle: 200 ("OK"), 404 ("Not Found"), 500 ("Server Error"), and a default case for other codes.

### Practice 2
Write a function that converts a number grade (0-100) to a letter grade using switch. Group scores: 90-100 = "A", 80-89 = "B", 70-79 = "C", 60-69 = "D", below 60 = "F". Hint: Use `switch(true)`.

### Practice 3
Create a simple calculator using switch that takes an operator (+, -, *, /) and two numbers, then returns the result. Include error handling for division by zero and unknown operators.
