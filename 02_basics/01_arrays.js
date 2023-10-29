//arrays

const myArr=[0,1,2,3,4,5,true,"Hitesh"]
// console.log(typeof myArr);
//mixed data type is possible in arrays
// [] brackets
// () parenthesis
// {} braces
//resizable
console.log(myArr[0]);
const myHeros=["shaktiman","naagraj"];

const myArr2=new Array(1,2,3,4);//automatically adds the []
//Array operations create shallow copies.
//Shallow Copies: same reference type similar to stack
//Deep Copies:doesn't share the same reference type similar to heap

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//push and pop respectively but in the BEGINNING of the array.
myArr.unshift(9)//adds the element in the beginning of the array.
myArr.shift()//removes the element from the beginning of the array.
// console.log(myArr);

// console.log(myArr.includes(9))//boolean data type
// console.log(myArr.indexOf(19))//-1
// console.log(myArr.indexOf(2))//2

//in the below console.logs it'll return the lengths of the arrays for the push and unshift commands and just return the deleted element in the pop and the shift commands
// console.log(myArr2.push(2))
// console.log(myArr2.pop())
// console.log(myArr2.unshift(2))
// console.log(myArr2.shift())

const newArr= myArr.join()//converts into string and comma separated also



console.log(myArr);
console.log(newArr);
console.log(typeof myArr);//object in []
console.log(typeof newArr);//string not in []

//slice,splice

console.log("A ",myArr)
const myn1=myArr.slice(1,3)//won't include the last element and won't manipulate original string.
console.log(myn1);[1,2]
console.log("B ",myArr) //myArr

const myn2=myArr.splice(1,3);//manipulates the original string by removing the spliced string from the original string
//and the spliced string will include the last element also.
console.log("C ",myArr) //[0,4,5,true,"Hitesh"]
console.log(myn2)//[1,2,3]






