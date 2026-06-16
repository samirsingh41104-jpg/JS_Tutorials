/**
 * REVISION SHEET: JAVASCRIPT OBJECTS (LITERALS VS SINGLETONS)
 * * Note on Creation:
 * 1. Object.create() -> Creates a 'Singleton' object via constructor.
 * 2. const Obj = {}   -> Creates an 'Object Literal' (Not a singleton).
 */

// ==========================================
// 1. SYMBOL AS AN OBJECT KEY
// ==========================================
// To use a Symbol as an object key, it must be declared first 
// and wrapped in square brackets [] inside the object literal.
const mySym = Symbol("key1");

const JsUser = {
    name: "Samir",
    age: 22,
    "Full name": "Samir Singh", // Multi-word keys must be strings
    [mySym]: "myKey1",          // Correct Symbol implementation
    location: "Lucknow",
    email: "samir@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// ==========================================
// 2. PROPERTY ACCESS & MODIFICATION
// ==========================================

// Modifying a property value
JsUser.email = "samir@ietl.ac.in"; 

/**
 * THE FREEZE RULE:
 * If you uncomment Object.freeze(), the object becomes immutable.
 * Any subsequent modifications will be silently ignored (or throw an error in strict mode).
 */
// Object.freeze(JsUser);

JsUser.email = "samir@ms.com"; // This works because freeze is commented out.

// ------------------------------------------
// REVISION: Output Analysis
// ------------------------------------------
console.log("--- Property Access ---");

// Dot vs Bracket Notation
console.log(JsUser.email);          // Output: samir@ms.com
console.log(JsUser["email"]);       // Output: samir@ms.com (Best practice for dynamic keys)
console.log(JsUser["Full name"]);   // Output: Samir Singh (Dot notation e.g., JsUser.Full name fails here)

// Accessing the Symbol key correctly
console.log(JsUser[mySym]);         // Output: myKey1


// ==========================================
// 3. OBJECT METHODS & 'this' KEYWORD
// ==========================================
console.log("\n--- Object Methods ---");

// Adding a basic method
JsUser.greeting = function() {
    console.log("Hello! JS User...");
};

// Adding a method that references internal properties using 'this'
JsUser.greetingTwo = function() {
    console.log(`Hello! JS User..., my name is ${this["Full name"]}`);
};

/**
 * REVISION CRITICAL POINT:
 * - JsUser.greeting -> References the function definition itself.
 * - JsUser.greeting() -> Invokes/Executes the function.
 */
JsUser.greeting();    // Output: Hello! JS User...
JsUser.greetingTwo(); // Output: Hello! JS User..., my name is Samir Singh


// ==========================================
// 4. OBJECT INSPECTION
// ==========================================
console.log("\n--- Full Object State ---");
console.log(JsUser); 
// Notice that the output clearly shows [Symbol(key1)]: 'myKey1' 
// proving it is kept as a Symbol type, not a string.