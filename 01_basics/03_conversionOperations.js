// ==========================================
// 1. DATA TYPES & TYPE CHECKING (typeof)
// ==========================================

let score = "33abc";
let scoreA = null;
let scoreB = undefined;

console.log(typeof score);   // "string"
console.log(typeof scoreA);  // "object"    <-- Crucial JS Quirk: null is officially an object type
console.log(typeof scoreB);  // "undefined"


// ==========================================
// 2. STRING TO NUMBER CONVERSION
// ==========================================

let valueInNumber = Number(score); 

console.log(typeof valueInNumber); // "number" <-- Even NaN is technically a "number" type
console.log(valueInNumber);        // NaN      <-- Fails parsing because of the "abc" letters

// Quick Conversion Cheat Sheet for Numbers:
// "33"       => 33
// "33abc"    => NaN
// null       => 0
// undefined  => NaN


// ==========================================
// 3. BOOLEAN TO NUMBER CONVERSION
// ==========================================

let sco = true;
console.log(Number(sco)); // 1 (false converts to 0)


// ==========================================
// 4. VALUE TO BOOLEAN CONVERSION
// ==========================================

let boolvar = 1;
let booleanConv = Boolean(boolvar);
console.log(booleanConv); // true

// Quick Conversion Cheat Sheet for Booleans:
// 1 or any non-zero number => true
// 0                        => false
// "" (empty string)        => false
// "hello" (filled string)  => true
// null, undefined, NaN     => false


// ==========================================
// 5. VALUE TO STRING CONVERSION
// ==========================================

let someNum = 33;

let stringNum = String(someNum);
console.log(typeof stringNum); // "string"
console.log(stringNum);        // "33"

// Quick Conversion Cheat Sheet for Strings:
// 33        => "33"
// true      => "true"
// null      => "null"
// undefined => "undefined"


// ==========================================
// 6. OPERATORS & STRING CONCATENATION
// ==========================================

let value = 3;
let negValue = -value;
console.log(negValue); // -3

// Basic Math Operations:
// + (Addition), - (Subtraction), * (Multiplication)
// / (Division), % (Modulus/Remainder)
// ** (Exponentiation/Power -> e.g., 2 ** 3 = 8)

let str1 = "Hello!";
let str2 = " Samir";
let str3 = str1 + str2;
console.log(str3); // "Hello! Samir"


// ==========================================
// 7. COMPLEX TRICKY COERCION (ECMA Standards)
// ==========================================

console.log(1 + "2");     // "12"
console.log("1" + "2");   // "12"
console.log("1" + 2 + 2); // "122" <-- If string is first, everything after is treated as string concatenation
console.log(1 + 2 + "2"); // "32"  <-- Evaluates (1 + 2 = 3) first, then concatenates with "2"

// Rule: JavaScript evaluates from left to right. 
// From the exact moment it encounters a string, it treats all subsequent additions as string operations.
// Clean Code Rule: Always use parenthesis -> (1 + 2) + "2" to keep operations explicit.


// ==========================================
// 8. UNARY OPERATOR CONVERSIONS
// ==========================================

console.log(true);   // true
console.log(+true);  // 1  <-- Unary plus forces numeric conversion
console.log(+"");    // 0  <-- Unary plus on empty string evaluates to 0
// console.log(true+); <-- Syntax Error


// ==========================================
// 9. INCREMENT OPERATORS (Prefix vs Postfix)
// ==========================================

let gameCtr = 100;

// Postfix Increment (ctr++)
// Evaluates/returns the current value first, THEN increments it behind the scenes.
console.log(gameCtr++); // Outputs: 100 (Now gameCtr becomes 101)

// Prefix Increment (++ctr)
// Increments the value first, THEN evaluates/returns the new value.
console.log(++gameCtr); // Outputs: 102 (Value was 101, immediately bumped to 102)

// Bad Practice Warning:
// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2; <-- Avoid chaining assignments. It hurts code readability.
//Learn increment from mdnt 


// ==========================================
// 5. SYMBOLS (Guaranteed Uniqueness)
// ==========================================
// Symbol() creates a completely unique, immutable primitive value.
// The string passed inside 'Symbol()' is just a description, not the value itself.

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId);  // false -> Even with identical descriptions, they are unique tokens
console.log(id === anotherId); // false

// Use Case: Ideal for creating hidden, collision-free object properties.