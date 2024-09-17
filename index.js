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
};

//Arrays
var fruits = ["Mango", "Banana"];

const PI = 3.142;
pi = 3242; //throws an error

let x = 5;
let y = 10;
let div = x / y;
console.log(div);