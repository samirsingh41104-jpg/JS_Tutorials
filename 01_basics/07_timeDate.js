// Current Date and Time
let myDate = new Date();

console.log(myDate.toString());           // e.g., "Mon Jun 15 2026 10:27:30 GMT+0000 (...)"
console.log(myDate.toDateString());       // e.g., "Mon Jun 15 2026" (Date only)
console.log(myDate.toISOString());        // e.g., "2026-06-15T10:27:30.717Z" (ISO Format)

// FIX: These are methods, they must be INVOKED with parentheses ()
console.log(myDate.toJSON());             // e.g., "2026-06-15T10:27:30.717Z"
console.log(myDate.toLocaleDateString()); // e.g., "6/15/2026" (Depends on locale)
console.log(myDate.toLocaleString());     // e.g., "6/15/2026, 10:27:30 AM"
console.log(myDate.toLocaleTimeString()); // e.g., "10:27:30 AM"


// Creating a Specific Date
// QUIRK: Months are 0-indexed in JS (0 = January, 4 = May)
let myCreateDate = new Date(2026, 4, 29); //Month indexed from 0
console.log(myCreateDate.toString()); // "Fri May 29 2026"

let myCreateDate2 = new Date(2026, 4, 29,  12,  30); //Month indexed from 0
console.log(myCreateDate2.toLocaleString());

let myCrDate = new Date("01-14-2026")
console.log(myCrDate.toLocaleDateString());



let myTimeStamp = Date.now()
console.log(myTimeStamp); //1781520510573
console.log(myDate.getTime()); //1781520510573
console.log(Date.now()); //1781520510573

let newDate = new Date()
console.log(newDate.getDay()); //Gets the day of the week, using local time.
console.log(newDate.getFullYear());
console.log(newDate.getMonth()); //0 indexed

newDate.toLocaleString('default',{
    weekday: "long",
    era:"long"
} 
)
console.log(newDate.toLocaleString('default',{
    weekday: "long",
    era:"long"
} ));
