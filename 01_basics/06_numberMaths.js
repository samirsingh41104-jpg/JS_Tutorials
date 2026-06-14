// ==========================================
// 1. NUMBERS IN JAVASCRIPT
// ==========================================

// Primitive number definition
const score = 400;
console.log(score); // Output: 400

// Explicitly defining Number as an Object (provides access to specific prototypes)
const balance = new Number(100);
console.log(balance); // Output: [Number: 100]

// Common Number Methods
console.log(balance.toString().length); // Converts to string, outputs length: 3
console.log(balance.toFixed(2));        // Fixes decimal places. Output: "100.00"

const otherNumber = 23.89956;
// toPrecision(n) returns a string represented in precise total 'n' digits (rounds off)
console.log(otherNumber.toPrecision(3)); // Output: "23.9"

const hundreds = 1000000;
// formats numbers based on geographical regions ('en-IN' is Indian standard)
console.log(hundreds.toLocaleString('en-IN')); // Output: 10,00,000

// Useful Number Properties (Constants)
console.log(Number.MAX_VALUE); // Maximum safe numeric value in JS
console.log(Number.MIN_VALUE); // Minimum positive numeric value in JS


// ==========================================
// 2. MATH OBJECT IN JAVASCRIPT
// ==========================================

console.log(Math); // Object containing various mathematical properties and methods

// Absolute Value (converts negative to positive)
console.log(Math.abs(-4)); // Output: 4

// Rounding Methods
console.log(Math.round(4.6)); // Standard rounding. Output: 5
console.log(Math.ceil(4.2));  // Ceil -> Ceiling (Rounds UP to next integer). Output: 5
console.log(Math.floor(4.9)); // Floor -> Ground (Rounds DOWN to previous integer). Output: 4

// Min and Max
console.log(Math.max(4, 3, 6, 8)); // Output: 8
console.log(Math.min(4, 3, 6, 8)); // Output: 3


// ==========================================
// 3. RANDOM GENERATION (CRITICAL CONCEPT)
// ==========================================

// Math.random() takes NO arguments. It ALWAYS returns a value between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()); 

// Shifting the decimal point to get values between 1 and 10
// (+1 ensures we don't get 0 if Math.random() outputs 0.000...)
console.log((Math.random() * 10) + 1);

// Standard Formula: Generating a random integer between a Min and Max range (inclusive)
const min = 10;
const max = 20;

// Formula: Math.floor(Math.random() * (max - min + 1)) + min
const randomRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomRange); // Output: Random integer between 10 and 20