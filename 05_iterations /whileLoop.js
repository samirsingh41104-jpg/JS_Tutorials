//========while loop========
//syntax
// while(condition){
//     //code block to be executed
// }

let index = 0;
while(index <= 20){
//    console.log(`The index is ${index}`);
    index = index + 5;
}
let myHeroes = ["Superman", "Batman", "Wonder Woman", "Flash"       ];
let i = 0;
while(i < myHeroes.length){
//    console.log(myHeroes[i]);
    i++;
}



//========do while loop========
//syntax
// do{
//     //code block to be executed
// }while(condition);

let j = 1;
do{
//    console.log(`The index is ${j}`);
    j = j+ 1;
}while(j < 5);

let j = 11;
do{
//    console.log(`The index is ${j}`); //this will run at least once even if the condition is false
    j = j+ 1;
}while(j < 5);