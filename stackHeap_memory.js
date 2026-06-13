// ==========================================
// 6. MEMORY MANAGEMENT: STACK VS. HEAP
// ==========================================

// ------------------------------------------
// STACK MEMORY (Primitive Types)
// ------------------------------------------
// Strings, Numbers, Booleans, Symbols, Null, Undefined.
// You get a COPY of the actual value. Modifying the copy does NOT affect the original.

let myYoutubeName = "Motivational Freak"; 
let anothername = myYoutubeName;         // A copy of the value is created in the stack
anothername = "fables byte";            // Only the copy is updated

console.log(myYoutubeName); // "Motivational Freak" (Original remains untouched)
console.log(anothername);   // "fables byte"


// ------------------------------------------
// HEAP MEMORY (Non-Primitive / Reference Types)
// ------------------------------------------
// Objects, Arrays, Functions.
// You get a REFERENCE (pointer) to the same memory location in the heap. 
// Modifying the copy WILL affect the original because they point to the same data.

let userOne = {
    email: "user@gmail.com",
    upi: "user@axl"
};

let userTwo = userOne; // userTwo gets a reference to the same object in the heap

// Modifying the property via userTwo changes the shared object in the heap
userTwo.email = "sam@google.com";

console.log(userOne.email); // "sam@google.com" (Original changed!)
console.log(userTwo.email); // "sam@google.com"