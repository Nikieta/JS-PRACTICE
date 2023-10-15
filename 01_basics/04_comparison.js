// console.log("2">"-1")
// console.log("2">1)
// console.log("02">1) //typescript doesn't allow to change the datatype

// ****Confusing comparisons to be avoided*****
// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)

//the reason being that the comparison operators and == work differently.What the comparison operators do ids that they change the value of null to number that is 0.then the comparison takes place.console.log(null>0)
// console.log(undefined==0)
// console.log(undefined>=0)
// console.log(undefined>=0)

// ****Confusing operators ended****

//=== checks fo the datatype also

console.log("2"===2) //false
console.log("2"==2) //true

// try keeping the datatype same for the things you're comparing