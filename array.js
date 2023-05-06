//Given an array of strings, use a function
 //to reverse all the elements in the string in 
// ascending order and 
//the specific elements in descending order
function sorted(strArr1){
let strArr1 = ["Banana", "Orange", "Apple", "Mango"];
strArr1.sort().reverse();
 strArr1.reverse();
}
// console.log(sorted);
// const strArr1 = ['a', 'c', 'z', 'f'];
// const descArr = strArr1.sort().reverse();
// console.log(descArr); // 👉️ ['z', 'f', 'c', 'a']

// console.log(strArr1);



//Given an array of objects, each object representing 
//a person with a name and age property, write a 
//function that returns the sum of all people who are 
//less than 18 years.

let people = [
  { name: 'Alice', age: 17 },
 { name: 'Eunice', age: 22 },
 { name: 'Charlie', age: 14 },
 { name: 'Max', age: 19 },
];

let sum=0
let sumOfAge=age.map(item=>{
    if(item.age<18){
 sum++
    }
    return item
});
console.log({sumOfAge});




//Using JS functions and an array of numbers, return 
//positive if an element within the array is positive, 
//negative if an element is negative,
// else zero

//Given an array of objects, where each object 
//represents an employee with an id, name, and salary 
//property, write a function that returns a new array of 
//employee objects sorted by their salary 
//in ascending order.