const accountId = 144553;
let accountEmail = "samir@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";

//accountId = 2;
/* 
Try not to use var because of scope issue.
*/
console.log(accountId);
accountEmail = "hchc@email.com";
accountPassword = "68";
accountCity = "pune";

console.table([accountId, accountEmail, accountPassword, accountCity]);
