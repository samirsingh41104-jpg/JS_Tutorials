class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`My username is ${this.username}`);  
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username); // Call the parent class constructor
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@example.com", "123");
chai.logMe(); // Output: My username is chai
chai.addCourse(); // Output: A new course was added by chai