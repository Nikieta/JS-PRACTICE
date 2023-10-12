const accountId=144553;
let accountEmail="nikieta@google.com";
var accountPassword="12345"
accountCity="Jaipur"

// accountId=2 Not Allowed
accountEmail="hc@hc.com"
accountPassword="21212121"
accountCity="Bengaluru"
let accountState;


console.log(accountId);
console.log(accountEmail);


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/* 
Prefer not to use var because ogf issue in block scope and functional scope
*/


