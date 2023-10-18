console.log("2">"-1")
console.log("2">1)
console.log("02">1) //typescript doesn't allow to change the datatype

// ****Confusing comparisons to be avoided*****

    // Whenever you have null, and comparison operators , consider the null value as 0.Otherwise for all cases the answer will be false since null with relational operators gives false and undefined always gives false.
// console.log(null>0)//false
// console.log(null==0)//works differently
// console.log(null>=0)//true

//the reason being that the comparison operators and == work differently.What the comparison operators do is that they change the value of null to number that is 0.then the comparison takes place.
//console.log(null>0)//false
// console.log(undefined==0)
// console.log(undefined>=0)
// console.log(undefined>=0)

// ****Confusing operators ended****

//=== checks fo the datatype also

console.log("2"===2) //false
console.log("2"==2) //true


// try keeping the datatype same for the things you're comparing

console.log(undefined==null) //false