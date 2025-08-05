const accountId = 143258
let accountEmail = "jay@business.com"
var accountPassword = "justsaythepasswords"
accountCity = "banglore"
let accountState;

// accountId = 14320; not allowed to change this 

accountEmail = "jay@sales.com" // it will allow to change the data 

accountPassword = "12563"// this too is allowed 

accountCity = "tumkur" // same as the above one 

/*
prefer not to use var
because of issue with the block scope and the functional scope 

*/ 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

