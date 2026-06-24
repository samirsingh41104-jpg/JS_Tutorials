const userEmail = "h@sam.ai.in"
if(userEmail) {
    console.log("You have an email");
} else {
    console.log("Please provide an email");
}

//Falsy values:
false, 0, -0, BigInt(0n), "", null, undefined, NaN

//Truthy values:
true, 1, -1, "0", "false", [], {}, function(){}, new Date(), Infinity, -Infinity, " "


// Nullish Coalescing Operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1 ;
val1 = 5 ?? 10;
//val1 = null ?? 10; // Output: 
console.log(val1); // Output: 5


//Terniary Operator (?:) is a conditional operator that takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.
// Syntax: condition ? expressionIfTrue : expressionIfFalse

const age = 18;
const canVote = (age >= 18) ? "You can vote" : "You cannot vote";
console.log(canVote); // Output: You can vote