//functions


function sayMyName(){ 
    console.log("S");
    console.log("A");
    console.log("M");
}

sayMyName() //Execution

function addTwoNums(number1, number2){
    console.log(number1 + number2);
}
const result = addTwoNums(3, 7)
console.log(result); //undefined

function add2Numbers(num1, num2){
    let res = num1 + num2
    return res
}

const res2 = add2Numbers(3, 7)
console.log(res2); //10


function loginUserMsg(username){
    return `${username} just logged in`
}
console.log(loginUserMsg("sam")); // sam just logged in
console.log(loginUserMsg()); // undefined just logged in



// 2nd PART ------>>>

function calculateCartPrice(...num1){ // ... = Rest Operators
    return num1
}
console.log(calculateCartPrice(200, 400, 550))

const user = {
    username: "Sam",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`);
}

handleObject(user)

const myNewArray = [200, 400, 100, 600]
function returnSecondVal(getArray){
    return getArray[1]
}
console.log(returnSecondVal(myNewArray));
