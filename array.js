//Given an array of strings, use a function
 //to reverse all the elements in the string in 
// ascending order and 
//the specific elements in descending order
function sorted(strArr1){

strArr1.sort().reverse("");
 strArr1.reverse();
}
strArr1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(sorted(strArr1));
// console.log(sorted);
// const strArr1 = ['a', 'c', 'z', 'f'];
// const descArr = strArr1.sort().reverse();
// console.log(descArr); 

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
// function sumOfAge(array){
  console.log(people.filter(function(i){return i.age<18}));
// }
 


// function sumOfAge(i){
//   return i.age<18;
  
// }
// var youngpeople=people.filter(sumOfAge);




//Using JS functions and an array of numbers, return 
//positive if an element within the array is positive, 
//negative if an element is negative,
// else zero
function countElements(array){
var counter=[0,0,0]
}



//Given an array of objects, where each object 
//represents an employee with an id, name, and salary 
//property, write a function that returns a new array of 
//employee objects sorted by their salary 
//in ascending order.

let employee=[{
  name:"Emma",id:"334412",salary:70000
},
{
  name:"Winner",id:"378673",salary:80000
},
{
  name:"Dola",id:"3341128",salary:60000
},
]

// let salary=employee.filter("").sort(employee)(item=>item.salary);
// console.log({salary});
let sorttest2=employee.sort((a,b)=>(a.id<b.id? -1:
  Number(a.id>b.id)));
console.log("sort test 2 ",sorttest2);


