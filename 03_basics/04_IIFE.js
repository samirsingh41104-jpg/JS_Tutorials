/**
 * 04_iife.js - Immediately Invoked Function Expressions (IIFE) Revision Guide
 */

// ==========================================
// SECTION 1: Named IIFE
// ==========================================
(function chai() {
    // This is a NAMED IIFE because the function has an explicit identifier ('chai')
    console.log(`DB Connected!`);
})(); 

/**
 * CRITICAL NOTE ON THE SEMICOLON (;):
 * An IIFE executes immediately, but it does not automatically know where to stop execution context.
 * If you do not end the line with a semicolon (;), JavaScript will throw a TypeError when 
 * trying to run any code block or IIFE immediately following it.
 */


// ==========================================
// SECTION 2: Unnamed / Arrow Function IIFE with Arguments
// ==========================================
( (name) => {
    // This is an UNNAMED / SIMPLE IIFE using arrow function syntax
    console.log(`DB Connected Again, ${name}`);
})('Sam'); // Passing 'Sam' as an argument into the function's parameter