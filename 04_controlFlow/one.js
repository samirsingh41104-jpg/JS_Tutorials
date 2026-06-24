//Control Flow or Logic Flow is the order in which the computer executes statements in a script. By default, the computer executes statements from top to bottom. However, we can change this order using control flow statements.

// if statement 

const isUserLoggedIn = true;

if (isUserLoggedIn) {
    console.log('Welcome back, user!');
} 

if(2 !== "2"){
    console.log("executed!");
}

const temperature = 30;

if (temperature > 25) {
    console.log("It's a hot day!");
} else {
    console.log("It's a cool day!");
}

const score = 200
if(score > 100){
    const power = "Fly"
    console.log(`User Power: ${power}`);
} 
const balance = 2000
//if(balance > 500) console.log("test"), console.log("test2");

if(balance < 500){
    log("Balance is low");
} else if (balance < 750){
    console.log("Balance is moderate");
} else if (balance < 900){
    console.log("Balance is good");
} else {
    console.log("Balance is excellent");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInfromGoogle = false;
const loggedInfromEmail = true;

if(userLoggedIn && debitCard){
    console.log("You can make a purchase");
} else {
    console.log("You cannot make a purchase");
}
if(loggedInfromGoogle || loggedInfromEmail){
    console.log("You can access the account");
} else {
    console.log("You cannot access the account");
}