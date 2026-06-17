// const tinderUser = new Object() //singleton object
// const tinderUser = {} //non-singleton object
// console.log(tinderUser);

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    //nested objects
    userFullname: {
      firstName: "Sam",
      lastName: "Singh",
    },
  },
};
//console.log(regularUser);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = Object.assign({}, obj1, obj2); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj4 = { obj1, obj2 }; //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj5 = { ...obj1, ...obj2 }; //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
