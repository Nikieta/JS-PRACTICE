//Single or double quotes don't make a difference in JS.
const name="hitesh"
const repoCount=50;
console.log(name+repoCount+" Value")//outdated format
//Modern format:
//using string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

 
//another syntax by creating an object
const gameName=new String('hitesh-hc-com')
//when put into console, we get key value pairs of the string
// console.log(gameName[0]); //h
// console.log(gameName.__proto__); //{} looks empty but not actually empty
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
//for reverse operation:
console.log(gameName.indexOf('t'))

//The more you know about string functions the better
//Slicing in JS.
const newString=gameName.substring(0,-1)
console.log(newString)

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

//The difference between substring and slice is theat cannot use negative indices in substring , even if you put it won't obey.

const newStringOne="  hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

//study these from MDN docs
const url="https://hitesh.com/hitesh%20choudhary"
//explore string methods-most useful in any language
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))
console.log(gameName.split('-'))




