// ==========================================
// 1. MERGING ARRAYS: Push vs. Concat vs. Spread
// ==========================================
const marvel = ["Thor", "IronMan", "SpiderMan"];
const dc = ["Batman", "Flash", "Superman"];

// ❌ The Push Issue: Mutates original array, creates nesting
// marvel.push(dc); // -> ["Thor", "IronMan", "SpiderMan", ["Batman", "Flash", "Superman"]]

// 🔗 The Concat Way: Returns a NEW flat array, doesn't mutate originals
// const heroes = marvel.concat(dc);

// ✨ The Spread Operator (Modern & Preferred Approach)
const allNewHeroes = [...marvel, ...dc]; 
console.log(allNewHeroes); 
// Output: ["Thor", "IronMan", "SpiderMan", "Batman", "Flash", "Superman"]


// ==========================================
// 2. FLATTENING NESTED ARRAYS
// ==========================================
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// .flat(depth) cleans up nested arrays. 'Infinity' flattens all depths automatically.
const usable_another_array = another_array.flat(Infinity);
console.log(usable_another_array);
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// ==========================================
// 3. ARRAY UTILITY METHODS (Checking & Converting)
// ==========================================

// Array.isArray() -> Returns boolean checking if the target is an actual array
console.log(Array.isArray("samir")); // Output: false

// Array.from() -> Converts iterable/array-like elements (Strings, NodeLists) into an array
console.log(Array.from("samir")); // Output: ['s', 'a', 'm', 'i', 'r']


// 🚨 THE CRITICAL INTERVIEW GOTCHA:
// Why does this output an empty array [] ?
console.log(Array.from({ name: "samir" })); // Output: []

/* 💡 REVISION NOTE: 
Array.from() needs an iterable object or something with a '.length' property. 
For a plain object, JavaScript doesn't know whether you want an array of its 
KEYS or its VALUES. Since it can't figure it out, it safely returns [].

To convert objects, you must be explicit:
-> Object.keys({name: "samir"})   => ["name"]
-> Object.values({name: "samir"}) => ["samir"]
*/


// ==========================================
// 4. CREATING ARRAYS FROM VARIABLES
// ==========================================
let score1 = 100;
let score2 = 200;
let score3 = 300;

// Array.of() -> Packs individual elements/variables into a single brand-new array
console.log(Array.of(score1, score2, score3)); 
// Output: [100, 200, 300]