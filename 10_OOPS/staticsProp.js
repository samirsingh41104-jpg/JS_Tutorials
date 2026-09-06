class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`My username is ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const chai = new user("chai");
console.log(chai.createId()); // Output: TypeError: chai.createId is not a function

class Teacher extends user{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "iphone@example.com");
iphone.logMe(); // Output: My username is iphone
console.log(Teacher.createId()); // Output: same error as above, because static methods are not inherited by subclasses.
