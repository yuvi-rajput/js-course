//Primitive 
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

//Js is dynamically typed because it assign variable and run timeJavaScript is a dynamic language and not static, 
//which means that variables can hold values of different types during runtime. 
//Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId)

//const bigNumber = 36526987452668742



// Reference Type or Non Primitive
// Array, Objects, Functions

//array
const hero = ["shaktimaan", "naagraj", "doga"];

//object 
let myObj = {
    name: "Yuvraj",
    age: 22,
}

//function
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof hero);
