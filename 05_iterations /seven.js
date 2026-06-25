const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myNumbers.map( (num) => num + 10 ); 
//console.log(myNumbers); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] because map does not modify the original array.    
let updatedNumbers = myNumbers.map( (num) => num + 10 );
//console.log(updatedNumbers); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]


// +++__Chaining__+++

const newNums = myNumbers
  .map( (num) => num * 10 )
  .map( (num) => num + 5 )   
  .filter( (num) => num >= 40 ); 
console.log(newNums); // [ 45, 55, 65, 75, 85, 95, 105 ]