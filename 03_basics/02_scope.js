// ==========================================
// 1. SCOPE: Global, Block, and Functional
// ==========================================

// Global Scope
let a = 10;
const b = 20;
var c = 30; 

function one() {
    const username = "sam"; // Block-scoped to function 'one'

    function two() {
        const website = "youtube";
        // Parent scope is accessible: 'username' is available via closure
        console.log(username); 
    }
    
    // console.log(website); // ERROR: 'website' is block-scoped to function 'two'
    two();
}
// one();


// ==========================================
// 2. BLOCK SCOPE & THE "TEMPORAL DEAD ZONE"
// ==========================================

if (true) {
    // FIX: Always declare variables using const/let to prevent them from leaking into the global scope.
    const username = "sam"; 
    
    if (username === "sam") {
        const website = " youtube";
        console.log(username + website); // Outputs: "sam youtube"
    }
    // console.log(website); // ERROR: 'website' is block-scoped to the inner 'if'
}
// console.log(username); // ERROR: 'username' is block-scoped to the outer 'if'


// ==========================================
// 3. HOISTING: Function Declaration vs. Expression
// ==========================================

// A. Function Declaration
// Hoisted completely. You can call it BEFORE it is defined in the code.
console.log(addOne(5)); // Outputs: 6

function addOne(num) {
    return num + 1;
}


// B. Function Expression
// The variable declaration is hoisted, but NOT its assignment.
// Trying to call it early results in a ReferenceError because of the Temporal Dead Zone (TDZ).

// console.log(addTwo(5)); // ERROR: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
};

console.log(addTwo(5)); // Outputs: 7