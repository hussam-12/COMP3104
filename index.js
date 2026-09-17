console.log("Hello, World! ");
var a = 100;
var a = "Test ";

console.log(a);
let sayHello = function(){
    console.log("Hello, World! Again");
}
sayHello();

//Declaring a function using arrow function
let greet = () =>{
    console.log("Hello, World! Again using Arrow Function");
}
greet();
// let arr = [1, 2, 3, 4, 5]
// console.log(arr)

//Array Handling
let arr = [1, "two", 3, 4, "Five", null, false, {}, []]
console.log(arr)
console.log(arr[1])
console.log(arr.length)

var name
console.log(name) // this will give undefined as there is no 
                 // value initialized

console.log(typeof name)                 

let city = {} //Object type
console.log(city)
console.log(typeof city)

// high order function ( map , filter ) it means the function that 
// accepts another function as parameter

let numbers = [1, 2, 3, 4, 5]
console.log(numbers)
console.log(numbers.length)

//map
let newNumbers = numbers.map((num) => num * 2)
console.log(newNumbers)

//filter
let evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers)

//reduce
let sum = numbers.reduce ((accumulator, currentValue) => accumulator + currentValue)
console.log("sum is " + sum)

//forEach
numbers.map((num)=>num * 2)
        .filter((n)=> n > 2)
        .forEach((num)=>console.log(num))

const outNumbers = numbers.map((num) => num * 2)
    .filter((n)=> n> 2)// this will make them print as array
 
console.log(outNumbers)