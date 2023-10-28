// //Dates
// let myDate=new Date()//Here we have created an instance of object Date and have assigned it to the variable myDate.
// console.log(myDate);//2023-10-22T05:22:11.481Z
// console.log(myDate.toString());//Sun Oct 22 2023 05:30:21 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Sun Oct 22 2023
// console.log(myDate.toISOString());//2023-10-22T05:22:11.481Z
// console.log(myDate.toJSON());//2023-10-22T05:30:21.973Z
// console.log(myDate.toLocaleDateString());//10/22/2023
// console.log(myDate.toLocaleString());//10/22/2023, 5:30:21 AM
// console.log(myDate.toLocaleTimeString());//5:30:21 AM
// ;
// console.log(typeof myDate);//object

let myCreatedDate=new Date(2024,1,11)//here the month starts from 0.
// let myCreatedDate1=new Date(2024,1,11,5,3)

let myCreatedDate1=new Date("2023-01-14")//here the month starts from 1.
let myCreatedDate2=new Date("01-14-2023")
//gives the same output
// console.log(myCreatedDate1.toLocaleString())//1/14/2023, 12:00:00 AM

// console.log(myCreatedDate2.toLocaleString())//1/14/2023, 12:00:00 AM
//for both of these the the month starts from 1.

let myTimeStamp=Date.now() //or //new Date()
// console.log(myTimeStamp);// 1697956921205 in millisecond from the date till now
// console.log(myCreatedDate2.getTime());//till the date 
// console.log(Math.floor(Date.now()/1000))
//conversion to seconds and removing the decimal value.
let newDate=new Date();
// console.log(newDate.getMonth());//starts from 0 sometimes (newDate.getMont()+1)
// console.log(newDate.getDay());//starts from 0: Sunday
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getSeconds());

// `${newDate.getDay()} and the time`...application 
//the following is a useful method in Dates
newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:''


})
//define an object in this function
//ctrl+space for options list