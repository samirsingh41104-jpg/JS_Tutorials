// for of
//syntax
// for(variable of iterable){
//     //code block to be executed
// }
const arr = [1, 2, 3, 4, 5];
for (const num of arr){
//    console.log(num);
}

const greetings = "Hello";
for (const greet of greetings){
//    console.log(greet);
}
// ===Maps===
const myMap = new Map();
myMap.set('IN', "INDIA");
myMap.set('US', "UNITED STATES");
myMap.set('UK', "UNITED KINGDOM");
//console.log(myMap);
for(const [key, value] of myMap){
//    console.log(key, ':', value);
}

const myObject = {
    'game1': 'Super Mario Bros',
    'game2': 'The Legend of Zelda',
    'game3': 'Metroid'  
}
// for(const [key, value] of myObject){
// //    console.log(key, ':', value);
// } 