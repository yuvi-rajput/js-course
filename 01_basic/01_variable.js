const accountId = 1234;
let accountEmail = "yuvi@gmail.com";
var accountPassword = "456987";
accountCity = "Bathinda";
let accountState;

//accountId = 23; // not allowed

accountEmail = "yash@gmail.com";
accountPassword = "2125487963";
accountCity = "Goa";

/*
Prefer not to use var beacuse of issue in block scope and functional scope.
*/ 

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
