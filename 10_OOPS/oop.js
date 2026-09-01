const user = {
    username: "Sam",
    loginCount: 8,
    signedIn: true,


    getUserDetails: function() {
        return `Username: ${this.username}, Login Count: ${this.loginCount}, Signed In: ${this.signedIn}`;
    }   
}
// console.log(user.username);
// console.log(user.getUserDetails()); 

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const user1 = new User("Sam", 8, true);
const user2 = new User("John", 5, false);
console.log(user1);
console.log(user2);
