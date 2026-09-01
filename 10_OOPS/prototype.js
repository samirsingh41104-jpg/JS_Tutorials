let myName = "Sam"
// console.log(myName.trueLength); // undefined


let myHeros = ["thor", "spiderman"];
let heroPower = {
    thor: "hammer",
    spiderman: "web",

    getSpiderPower: function(){
        console.log(`Spiderman's power is ${this.spiderman}`);
    }
}
Object.prototype.sam = function(){
    console.log("Sam is everywhere");
}

heroPower.sam(); // Sam is everywhere
myHeros.sam(); // Sam is everywhere 