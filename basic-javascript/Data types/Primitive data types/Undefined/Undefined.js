// Undefined is a type of data type in javascript.
// it is primitive value undefined , when variable is declared and not initialized or not assigned with any value . by default the variable was stored with an undefined value

// undefined is a global read-only variable that represent the value undefined
// undefined is a type of primitive type

let variable = undefined;
let x;
console.log(variable, x);
// both no and variable contain an undefined value

// undefined value in variables :-
// when a variable is declared or not initialized but not assigned with any value then javascript automatically assigns it an "undefined" value
let newVar;
console.log(newVar);

// undefined value in funcitons
// a method or statement also returns undefined If a variable was assigned with fucntion that does not return any value , then javascript assigns an undefined value to that variable

function sayHi(name) {
  console.log(`Hii ${name}`);
}

x = sayHi("vaibhav");
console.log(x);

// undefined value in object properties
// accessing a property that doesnot exist in an object returns undefined
// lets understand with the below
const person = { name: "Vaibhav" };
console.log(person.age);



// practical use case of undefined values 
// handle optional function parameters 
// check if an object property exists before accessing it.
// detect uninitialized variable during debugging 

// understanding undefined is essential for writing reliable and bug-free javascript code 
