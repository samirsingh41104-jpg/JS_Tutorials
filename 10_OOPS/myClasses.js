// ES6

class user{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const chai = new user("chai", "chai@example.com", 123);

console.log(chai.encryptPassword()); 

//behind the scenes, the class is converted to a function constructor and methods are added to the prototype of the function constructor.
function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`;
};