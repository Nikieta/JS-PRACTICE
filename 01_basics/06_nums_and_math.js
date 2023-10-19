const score=400;
console.log(score);//400
const balance=new Number(100);//100
// console.log(balance)

// console.log(balance)//[Number:100] basically explicitly defining that balance is of Number type.
// console.log(typeof(balance.toString()));//there are less properties for Numbers as compared to strings.
// //here the numbers are converted to string and now the string functions are applicable on this number
// console.log(typeof(balance))
// //Property applicable on number,upto 2 decimal places.
// console.log(balance.toFixed(2))
// console.log(balance.toString().length);

//INTERVIEW QUESTION PRECISION
const otherNumber=1123.8966 //SIG FIGS
// console.log(otherNumber.toPrecision(3))//returns a string,accepts 1 to 21 sig figs


const hundreds=1000000;
// console.log(hundreds.toLocaleString()) //1,000,000 by default U.S standard
// console.log(hundreds.toLocaleString('en-IN')) //10,00,000 //conversion to Indian Standard
//Many functions can be performed on the Numbers like
// Number.MIN_VALUE
// Number.MAX_VALUE
// Number.MIN_SAFE_INTEGER
// Number.MAX_SAFE_INTEGER

//+++++++++++++++++++ Maths +++++++++++++++++++++

console.log(Math)//Object [Math] {}

//Contains properties and functions
// console.log(Math.abs(4))//mod function.
// console.log(Math.round(4.5));//5

// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8)); calculating the minimum and maximum value in an array.
console.log(Math.random())//will always lie between 0 and 1 both inclusive.
console.log(Math.floor((Math.random()*10)+1))//for min value 1.

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min)








