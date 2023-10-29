//singleton
//when a constructor is used , singleton object is made.
//otherwise when a literal is created then never a singleton object is made
//object literal
// Object.create//constructor method
const mySym=Symbol("key1")
const JsUser={
    name:"Hitesh",//name(key) is processed as string,but any sort of data type can be passed onto it 
    "fullname":"Hitesh Choudhary",
    //mySym:"mykey1",
    [mySym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email)//to access the email from the object
console.log(JsUser["email"])//another way to access it
//in the above case both are applicable
console.log(JsUser["fullname"])
// myArray=["h","i"]
// myArray[1]

//in objects
// console.log(JsUser["full name"])
console.log(JsUser.fullname)
//had there been a space gap between the words full and name , we couldn't have used the . notation , we would have had to stick to [] notation strictly.


//adding the symol to the keys of the object
console.log(JsUser.mySym)
console.log(typeof JsUser.mySym)//string 
//if you want to use it as a symbol use []
console.log(JsUser[mySym])