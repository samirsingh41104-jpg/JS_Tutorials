//========for loop========
//    syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; 
// }
// for(let index = 5 ; index < 12; index++){
//     console.log(index);
//     if(index === 10){
//         console.log("Messi is no. 1");
//     }
// }

// =======Nested for loop========
for(let i = 0; i < 3; i++){
//    console.log(`Outer loop: ${i}`);
    for(let j = 0; j < 3; j++){
//        console.log(`Inner loop: ${j} and Outer loop: ${i}`);
    }
}

let myArray = ["flash", "superman", "batman", "wonderwoman"];
for(let i = 0; i < myArray.length; i++){
//    console.log(`Hero for the index ${i} is ${myArray[i]}`);
}

//break and continue
for(let i = 0; i < 10; i++){
    if(i === 5){
        break; //stops the loop when i is equal to 5
    }
//    console.log(i);
}

for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;  //skips the current iteration and moves to the next iteration
    }
//  console.log(i);
}
