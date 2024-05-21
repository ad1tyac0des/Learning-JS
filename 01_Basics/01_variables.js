const accountId = 553344;
let accountEmail = "xyz@mail.com";
var accountPassword = "password";
accountCity = "Lucknow"; //this is not a recommended way to declare a variable; use 'let', 'const', or 'var' instead
let accountState; //Variable declared, but not initialized(currently undefined); can be assigned any value later



/* 
Prefer not to use "var"
because of issue in block scope and functional scope
*/



// accountId = 2; //This is not possible, as value of const can't changed
accountEmail = "mail@femail.com";
accountPassword = "passwordChanged"

console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);