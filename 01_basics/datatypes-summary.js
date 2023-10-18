//the datatypes have been classified in the way in which the memory is allocated and how the data is accessed
// On the basis of this ,there are two types of data types

// Primitive:
// 7:

// String,Number,Boolean,null,undefined,Symbol: used for making a value unique, BigInt : scientific values, large numbers

// Non Primitive/ Reference type:
//Arrays,Objects,Functions
// Objects and browser events most imp topics in JS.
//JS is a dynamically typed language,all the type checks are performed during the runtime only when the program is executing.
const score=false;
const scoreValue=100.3
const isLoggedIn=false;
const outsideTemp=null;
console.log(typeof score)//boolean
console.log(typeof scoreValue)//number
console.log(typeof isLoggedIn)//boolean
console.log(typeof outsideTemp)//object

let userEmail;
const id=Symbol('123')
const anotherid=Symbol('123')
//even if you pass the same value as the parameter, you'll get different values

// console.log(id==anotherid); //false

const bigNumber=456237443648279897799798827918737371972773882372938n

// . Every BigInt value must contain a lowercase n after the number. Basically that n indicates that it is a bigint number.
const heroes=["shaktiman","nagagraj","doga"]
let myObj={
    name:  "hitesh",
    age :22,

}


//Even an object can be stored inside another object
const myFunction=function(){
    console.log("Hello World")

}
console.log(typeof bigNumber)//bigint
console.log(typeof myObj)//object
console.log(typeof myFunction)//function
// INTERVIEW QUESTION:

//Undefined: undefined
//Null:object
//Boolean:boolean
//Number:Number
//String:string
//Object:object
//Function:function(called as object function)

console.log(typeof anotherid)//symbol



// +++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive): You get the copy of the variable, Heap(Non-Primitive): Changes are made in the original value.Passed by reference
let myYoutubename="hiteshchoudharydot.com"
let anothername=myYoutubename
anothername="chaiaurcode"

console.log(anothername)
console.log(myYoutubename)

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne
userTwo.email="hitesh@google.com"
console.log(userOne.email)
console.log(userTwo.email)



 







