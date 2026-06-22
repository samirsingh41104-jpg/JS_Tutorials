/**
 * 03_arrow.js - Context ('this') and Arrow Functions Revision Guide
 */

// ==========================================
// SECTION 1: 'this' in Object Context
// ==========================================
const user = {
    username: "samir",
    price: 999,

    welcomeMessage: function () {
        // 'this' refers to the current object context (user)
        console.log(`${this.username}, welcome to website`);
        console.log(this); 
    }
};

// Execution test:
// user.welcomeMessage(); // Prints "samir..." and the 'user' object
// user.username = "sam";  // Modifying the context property
// user.welcomeMessage(); // Prints "sam..." and the updated 'user' object

// Global context execution:
// console.log(this); // In Node.js environment, returns empty object {}


// ==========================================
// SECTION 2: 'this' in Standard vs Arrow Functions
// ==========================================
function chai() {
    let username = "sam";
    // 'this' inside a standard global function contains global methods/objects.
    // It cannot access locally scoped function variables.
    console.log(this.username); 
}
// chai(); // Output: undefined

const chai2 = () => {
    let username = "sam";
    // Arrow functions do not bind their own 'this'. 
    // They lexically inherit 'this' from the outer/parent scope.
    console.log(this.username); 
}
// chai2(); // Output: undefined


// ==========================================
// SECTION 3: Arrow Function Syntaxes (Returns)
// ==========================================

// Syntax A: Implicit Return (No curly braces, single line)
const addTwo = (num1, num2) => num1 + num2;

// Syntax B: Explicit Return (Uses curly braces, MUST use 'return' keyword)
const addTwo2 = (num1, num2) => {
    return num1 + num2;
};

console.log(addTwo(3, 4));  // Output: 7
console.log(addTwo2(3, 4)); // Output: 7


// ==========================================
// SECTION 4: Implicitly Returning Objects
// ==========================================

// CRITICAL: To implicitly return an object, wrap it in parentheses ().
// Without (), the interpreter mistakes the object's {} for a function block code.
const addTwo3 = () => ({ username: "samir" });

console.log(addTwo3()); // Output: { username: 'samir' }