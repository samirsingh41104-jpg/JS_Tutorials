// ==========================================
// 1. STRING CREATION & CONCATENATION
// ==========================================

// Old/Traditional way (Concatenation)
const name = "Sam";
const repoCount = 2;
// console.log(name + " " + repoCount + " Value"); // Clunky, hard to manage

// Modern way (Template Literals / String Interpolation)
// Backticks (``) allow embedding variables directly using ${}
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`); 

// Declaring as a String Object (Allows treating string like a key-value object)
const gameName = new String('Sam-XLit'); 


// ==========================================
// 2. INSPECTING A STRING
// ==========================================

console.log(gameName[0]);         // 'S'  -> Access character by index (0-based)
console.log(gameName.__proto__);   // {}   -> Shows the prototype object (methods available)
console.log(gameName.length);      // 8    -> Returns total number of characters


// ==========================================
// 3. BASIC TRANSFORMATIONS & LOOKUPS
// ==========================================

console.log(gameName.toUpperCase()); // "SAM-XLIT" -> Original string remains unchanged (Primitive immutable)
console.log(gameName.charAt(2));     // 'm'        -> Returns character at index 2
console.log(gameName.indexOf('t'));  // 7          -> Returns first index where 't' is found


// ==========================================
// 4. EXTRACTING SUBSTRINGS (Crucial Difference!)
// ==========================================

// .substring(start, end) -> Extracts from 'start' up to (but not including) 'end'
// Note: Does NOT accept negative indices (treats negative numbers as 0)
const newStr = gameName.substring(0, 3); 
console.log(newStr); // "Sam"

// .slice(start, end) -> Similar to substring, but ACCEPT negative indices (