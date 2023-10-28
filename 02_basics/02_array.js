const marvel_heros=["thor","Ironman","Spiderman"]
const dc_heros=["Superman","flash","Batman"]

//1 
// marvel_heros.push(dc_heros);//[ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'flash', 'Batman' ] ]
//arrays in JS can accept values of any data type
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


//2

// console.log(marvel_heros)
const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);//[ 'thor', 'Ironman', 'Spiderman', 'Superman', 'flash', 'Batman' ]
//[ 'thor', 'Ironman', 'Spiderman', [ 'Superman', 'flash', 'Batman' ] ]
//push will modify the og array.
//concat will produce a new array and merge the two arrays.

const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);

//spread operator will make the items of arrays individual.
//it will function the same as concat

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(2)//write infinity for ease in calc
console.log(real_another_array)

console.log(Array.isArray("Hitesh"))//returns whether the passed value is an array or not
console.log(Array.from("Hitesh"))//converts to an array
console.log(Array.from({name:"Hitesh"}))//interesting 
//returns an empty array since it is not specified if we want an array of keys or values.

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
//when you want to have an array of a set of elements
