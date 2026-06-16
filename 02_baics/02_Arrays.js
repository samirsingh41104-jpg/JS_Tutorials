const marvel = ["Thor", "IronMan", "SpiderMan"];
const dc = ["Batman", "Flash", "Superman"];

// marvel.push(dc) //Araay inside arrray i.e [.., .., .., [.., ....]]
// console.log(marvel);
// console.log(marvel[3][2]); //superman

// const heroes = marvel.concat(dc);
// console.log(heroes);
const allNewHeroes = [...marvel, ...dc] // spread operator
console.log(allNewHeroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array);

console.log(Array.isArray("samir"));
console.log(Array.from("samir"));

console.log(Array.from({name: "samir"})); //??

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
