// let str1 = "Hello!"
// let str2 = ' World'
// let str3 = str1+str2 //Hello! World
// console.log(str3);

const name = "Sam"
const repoCount = 2
// console.log(name + " "+ repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`); //string interpolation

const gameName =  new String('Sam-XLit')
console.log(gameName); 
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newStr = gameName.substring(0, 3)
console.log(newStr);

const slicedStr = gameName.slice(-6, -2)
console.log(slicedStr);

const strii = "     Sam      "
console.log(strii);
console.log(strii.trim()); //trim(), trimEnd(), trimStart()

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));
console.log(url.includes('hitesh'));//true

console.log(url.split('h'));
