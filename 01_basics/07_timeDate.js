// ==========================================
// 1. CURRENT DATE & TIME (Instantiation & Formats)
// ==========================================

const myDate = new Date();

console.log(myDate.toString());           // Full string: "Mon Jun 15 2026 19:59:43 GMT+0530 (India Standard Time)"
console.log(myDate.toDateString());       // Date portion only: "Mon Jun 15 2026"
console.log(myDate.toTimeString());       // Time portion only: "19:59:43 GMT+0530"
console.log(myDate.toISOString());        // ISO Standard (UTC): "2026-06-15T14:29:43.000Z"
console.log(myDate.toJSON());             // Same as ISO string: "2026-06-15T14:29:43.000Z"

// Locale-specific formatting (Highly dependent on system/browser settings)
console.log(myDate.toLocaleDateString()); // e.g., "6/15/2026" (MM/DD/YYYY in US)
console.log(myDate.toLocaleTimeString()); // e.g., "7:59:43 PM"
console.log(myDate.toLocaleString());     // e.g., "6/15/2026, 7:59:43 PM"


// ==========================================
// 2. CREATING SPECIFIC DATES
// ==========================================

// RULE 1: Array-style Argument Instantiation -> MONTHS ARE 0-INDEXED (0 = Jan, 4 = May, 11 = Dec)
const myCreateDate = new Date(2026, 4, 29); 
console.log(myCreateDate.toDateString()); // "Fri May 29 2026"

// Passing hours and minutes as arguments:
const myCreateDate2 = new Date(2026, 4, 29, 12, 30); 
console.log(myCreateDate2.toLocaleString()); // "5/29/2026, 12:30:00 PM"

// RULE 2: String Instantiation ("YYYY-MM-DD" or "MM-DD-YYYY") -> MONTHS ARE 1-INDEXED (01 = Jan)
const myCrDate = new Date("01-14-2026");
console.log(myCrDate.toLocaleDateString()); // "1/14/2026"


// ==========================================
// 3. TIMESTAMPS (Calculated in Milliseconds since Jan 1, 1970)
// ==========================================

const myTimeStamp = Date.now(); // Static method: gets current timestamp *right now*
console.log(myTimeStamp);       // e.g., 1781520510573

// Getting timestamp from a specific date instance
console.log(myDate.getTime());  // e.g., 1781520510573

// USE CASE: Converting milliseconds to seconds for backend databases (like Unix time)
const timestampInSeconds = Math.floor(Date.now() / 1000);


// ==========================================