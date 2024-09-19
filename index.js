//containers

//Number Data types
var temperature = 98.6;

//Strings
var char = "o";
var character = "c";
var name = "Micheal";
console.log("name: ", name); // Micheal

//Boolean
var isBoolean = false;
var isLoggedin = true;
console.log("isLoggedin: ", isLoggedin); // true

//Undefined
var user;
console.log("user: ", user); // undefined

//NULL
var selectedItem = null;
console.log("selected item: ", selectedItem); // null

//Symbol
var id = Symbol("id");
console.log("id: ", id); // id

//BIGINT
var bigNumber = BigInt(9007199254740991) * 103n;
//var bigNumber = 9007199254740991 * 103;
console.log("Big Number: ", bigNumber); // 9007199254740991

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
var fruits = ["Mango", "Banana"];
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
isLoggedIn && isDeveloper // and operator, both conditions are true
false || false // or operator, if any value is true then it returns true
!isMember // not operator

// Assignment Operators
z = y + 3
z += y // z = z + y
z -= y // z = z - y
z *= y // z = z * y
z /= y // z = z / y
z %= y // z = z % y  10%7   


//RUN COMMAND: node index.js


