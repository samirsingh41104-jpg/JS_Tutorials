// ==========================================
// 1. STANDARD COMPARISONS (Predictable)
// ==========================================
// Relational operators work exactly like C++ when types match
console.log(2 > 1);   // true
console.log(2 !== 1); // true


// ==========================================
// 2. IMPLICIT TYPE COERCION (The Tricky Parts)
// ==========================================
// String vs. Number: JavaScript converts the string to a number before comparing
console.log("2" > 1);  // true  -> "2" becomes 2
console.log("02" > 1); // true  -> "02" becomes 2


// ==========================================
// 3. THE NULL & UNDEFINED ANOMALIES
// ==========================================
// Why does null >= 0 happen?
// Equality (==) and Relational comparisons (<, >, <=, >=) work differently:
// - Relational operators convert null to a number (0).
// - Equality operators do NOT convert null to a number for comparison with 0.

console.log(null == 0);      // false -> null only equals null or undefined under ==
console.log(null >= 0);      // true  -> null is converted to 0, so 0 >= 0 is true

// Undefined yields false for almost all numeric comparisons
console.log(undefined == 0); // false -> undefined is not converted to 0 here
console.log(undefined > 0);  // false -> undefined becomes NaN in relational math


// ==========================================
// 4. STRICT EQUAL (The Golden Rule)
// ==========================================
// ==  (Abstract Equality): Coerces types before comparing
// === (Strict Equality):   Checks value AND datatype (No coercion)

console.log("2" == 2);   // true  -> (Coerced: string becomes number)
console.log("2" === 2);  // false -> (Strict: string is not a number)