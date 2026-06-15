// ==========================================
// 1. ARRAY DECLARATION & ACCESS
// ==========================================

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Iron-man", "Spider-man", "Thor"];

// Instantiation via Constructor
const myArr2 = new Array(1, 2, 3, 4, 5, 6);

console.log(myArr[0]);     // Access via Index -> 0
console.log(myArr2.length); // Property (not a method) -> 6

// Note: JS arrays are resizable and can contain a mix of different data types.
// JS array-copy operations create SHALLOW COPIES (sharing the same references).


// ==========================================
// 2. BASIC ARRAY METHODS (MUTATORS)
// ==========================================

myArr.push(6);     // Adds element to the END -> [0, 1, 2, 3, 4, 5, 6]
myArr.pop();      // Removes the LAST element -> [0, 1, 2, 3, 4, 5]

myArr.unshift(9);  // Adds element to the FRONT -> [9, 0, 1, 2, 3, 4, 5]
                   // Warning: .unshift() is computer-expensive because it shifts all other elements' indices.

myArr.shift();    // Removes the FIRST element -> [0, 1, 2, 3, 4, 5]
                   // CORRECTION: .shift() does NOT take parameters to remove internal items. It always removes index 0.


// ==========================================
// 3. UTILITY & CONVERSIONS
// ==========================================

console.log(myArr.includes(9)); // Returns boolean -> false
console.log(myArr.indexOf(9));  // Returns index of element, or -1 if not found -> -1
console.log(myArr.indexOf(3));  // -> 3

// .join() binds elements together and flattens them into a string
const newArr = myArr.join(); 
console.log(newArr);        // "0,1,2,3,4,5"
console.log(typeof newArr); // "string"


// ==========================================
// 4. CRITICAL INTERVIEW TOPIC: SLICE VS SPLICE
// ==========================================

const testArr = [0, 1, 2, 3, 4, 5];
console.log("Original:", testArr); // [0, 1, 2, 3, 4, 5]

// --- SLICE ---
// Syntax: .slice(startIndex, endIndex) -> Excludes endIndex
const myN1 = testArr.slice(1, 3); 

console.log("After slice (myN1):", myN1);      // [1, 2]
console.log("Original array after slice:", testArr); // [0, 1, 2, 3, 4, 5] -> DOES NOT MUTATE original array


// --- SPLICE ---
// Syntax: .splice(startIndex, deleteCount, item1, item2...)
const myN2 = testArr.splice(1, 3); 

console.log("After splice (myN2):", myN2);      // [1, 2, 3] -> Returns the deleted items
console.log("Original array after splice:", testArr); // [0, 4, 5]    -> MUTATES original array!