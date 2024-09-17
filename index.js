//containers

//Number Data types
var age = 40;
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
let user = {
  firstName: "John",
  lastName: "Doe",
  age: 40,
  likedFruits: ["Mango", "Banana"],
};

//Arrays
let fruits = ["Mango", "Banana"];
