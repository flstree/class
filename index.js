//containers

//Number Data types
var temperature = 98.6;

//Strings
var char = "o";
var character = "c";
var name = "Micheal";
// console.log("name: ", name); // Micheal

//Boolean
var isBoolean = false;
var isLoggedin = true;
// console.log("isLoggedin: ", isLoggedin); // true

//Undefined
var user;
// console.log("user: ", user); // undefined

//NULL
var selectedItem = null;
// console.log("selected item: ", selectedItem); // null

//Symbol
var id = Symbol("id");
// console.log("id: ", id); // id

//BIGINT
var bigNumber = BigInt(9007199254740991) * 103n;
//var bigNumber = 9007199254740991 * 103;
// console.log("Big Number: ", bigNumber); // 9007199254740991

//This works but don't do this
var string = 40;

//Object
var user = {
  firstName: "John",
  lastName: "Doe",
  age: 40,
  likedFruits: ["Mango", "Banana"],
}; // use curly braces

//Arrays
// var fruits = ["Mango", "Banana"];
var numbers = [40, 20, 22];

const PI = 3.142;
pi = 3242; //throws an error


//Mathematical operators
let x = 10;
let y = 10;
let div = x / y; // division /
let mult = x * y; // multiply *
div = x + y; // addition +
div = x - y; // subtraction -
div = x % y; // modulus % (remainder) 5%2 = 1
div = x++; // post increment +1
div = x--; //post decrement -1

//Comparison operators (mostly boolean values)
x == y // equal to without type checking
x > y // greater than
x < y // less than
x <= y //less than or equal to 
x >= y // greater than or equal to
10 === '10' //equal to but also check its type

//Logical Operations
// isLoggedIn && isDeveloper // and operator, both conditions are true
//false || false // or operator, if any value is true then it returns true
// isMember // not operator

// Assignment Operators
let z = y + 3;
z += y // z = z + y
z -= y // z = z - y
z *= y // z = z * y
z /= y // z = z / y
z %= y // z = z % y  10%7  

// Assignment review
// test data1

// Control Flow
// if (condition) {
//   //Run everything inside the braces
// }

// let age = 15;
// if(age >= 21){
//   console.log("you are an adult and you can drink alcohol");
// } else if (age >=18){
//   console.log("You are an adult but you cannot drink");
// }else {
//   console.log("you are a minor");
// }

// let color = "yellow";
// switch(color){
//   case "red":
//     console.log("Stop");
//     break;
//   case "yellow":
//     console.log("Caution");
//     break;
//   case "green":
//     console.log("Go");
//     break;
// }

// Loops
// for(let i=1; i <= 10; i % 2){
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   console.log('Number: ', i);
//   i++;
// }

// let i = 0;
// do {
//   console.log('Number: ', i);
//   i++;
// } while (i < 10);

let fruits = ["apple", "banana", "mango", "cherry", "grapes", "orange"];

// console.log('Length of array: ', fruits.length);
// for(let i = 0; i < fruits.length; i++){
//   console.log(fruits[i]);
// }

// let i = 0;
// while(i < fruits.length){
//   console.log(fruits[i]);
//   i++;
// }

// for(let index in fruits){
//   console.log(fruits[index]);
// }

// for(let index of fruits){
//   console.log(fruit);
// }

const user1Data1 = {
  firstName: 'mark',
  weight: 78, 
  height: 1.69,
}

const user2Data1 = {
  firstName: 'john',
  weight: 92,
  height: 1.95,
}

const user1Data2 = {
  firstName: 'mark',
  weight: 95, 
  height: 1.88,
}

const user2Data2 = {
  firstName: 'john',
  weight: 85,
  height: 1.76,
}


function calculateBMI(user){
  return user.weight / ( user.height * user.height )
}

const calculateMarksBMI = calculateBMI(user1Data2);
const calculateJohnsBMI = calculateBMI(user2Data2);
const bmiDifference = Math.round(calculateMarksBMI, 2) - Math.round(calculateJohnsBMI, 2);
// console.log('BMI Difference: ', bmiDifference);

// if(bmiDifference > 0){
//   console.log("Mark has a higher BMI");
// }else if(bmiDifference == 0){
//   console.log("They have equal BMIS");
// }
// else{
//   console.log("John's BMI is higher");
// }

// Functions
// function createGreeting(){
//   console.log('Hello world');
// }

// function greet(name, age, shoeSize){
//   return 'Hello ' + name + ', age: ' + age + ', shoe: ' + shoeSize;
// }

// const value = greet('Micheal', 24, 45);
// console.log(value);

// Objects and Array
// let car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2020,
//   start: function() {
//     console.log("Car started");
//     return 'Car';
//   }
// };
// console.log(car['make'])
// car.start()

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers[0]); // 1

// numbers.length
// numbers.push(6) //add to array  [1, 2, 3, 4, 5, 6]
// numbers.pop(); // remove the last item from the array [1, 2, 3, 4, 5]

//Modern Javascript Features
// let name = "John";
// let greeting = `Hello ${name}`; 

// let [a, b] = [1, 2];
// let {name, age} = {name: "Jane", age: 25};

// let arr = [1, 2, 3];
// let arr2 = [...arr, 4, 5];

// function greet(name = "Guest") {
//   return `Hello, ${name}`;
// }

try {
  // Code that might throw an error
  let result = riskyOperation();
} catch (error) {
  console.error("An error occurred:", error.message);
}

//RUN COMMAND: node index.js


