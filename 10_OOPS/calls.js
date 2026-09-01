function setUserName(username){
    this.username = username;
}
function createUser(username, email, password){
//    setUserName(username); // Call the setUserName function to set the username
    setUserName.call(this, username); // Call the setUserName function to set the username
    this.email = email; 
    this.password = password;       
}

const chai = new createUser('Chai', "chai@example.com", "chai123");