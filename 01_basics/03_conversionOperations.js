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