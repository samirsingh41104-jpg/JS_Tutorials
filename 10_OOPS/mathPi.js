const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

// console.log(Math.PI);  // output = 3.141592....
// Math.PI = 5;
// console.log(Math.PI);  // output = 3.141592....

const myObj = {
  name: "Ginger Chai",
  price: 250,
  isAvailable: true,
};

 Object.defineProperty(myObj, "name", {
  writable: false, // cannot change the value of name property
  enumerable: false, // cannot see the name property in for...in loop
  configurable: false, // cannot delete the name property
});
const d2 = (Object.getOwnPropertyDescriptor(myObj, "name"));
console.log(d2);
myObj.name = "Black Coffee";
console.log(myObj.name); // output = Ginger Chai
