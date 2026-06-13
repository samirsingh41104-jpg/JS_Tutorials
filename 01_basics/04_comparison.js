//console.log(2 > 1); //true
// same as cpp (> , < , >=, <=, == , !=)

// these do not give predictable result
console.log("2" > 1); //true
console.log(("02" > 1)); //true
console.log(null == 0); //false
console.log(null >= 0); //true
console.log(undefined == 0); //false

// === (it checks the datatype as well)
console.log("2" === 2); //false
