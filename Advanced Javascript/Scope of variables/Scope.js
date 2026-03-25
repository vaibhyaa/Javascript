// scope determines where a variable can be accessed or used within a javascript program.
// it helps control the visiblity and lifetime of variables in different parts of the code.

// declaraing a global varibale
let x = 10;

function fun() {
  // declaraing a local variable
  let y = 20;

  // accessing local and global
  // variables
  console.log(x, " ", y);
}
fun();

// global scope :-
// a global variable refers to a variable that is declared outside any function or block, so it can be used anywhere in the programm, both inside function and in the main code
const z = 10;

function fun1() {
  console.log(z);
}
fun1();
// in the programm, the variable outside the function and now we can access thosde variables from anywhere in the javascript programm

// local scope :-
// a local function is a variable declared inside a function. making it accessiable only within that function. It cannot be used outside the function
// function and objects are also variable in javascript
function fun2() {
  // this variable is local to fun2() and cannot be accessed outside this function
  let x = 10;
  console.log(x);
}
fun2();
// before ES6, variables were declared only with var,which is function-scoped (accessible within the function) and globally scoped (Accessible everywhere) and prone to issues like hoisting and global pollution
// let and const were introduced with ES6, variables declared with let and const are either block scoped or global-scoped

// block and lexical scoped :-
// in javascript, block scope refers to variables declared with let or const inside {} block
// this variables are accessible only within that block and not outside it.
// variables declared with var do not have block scope. a var variable declared inside a function is accessible throughtout that entire function, regardless of any blocks (like if statements or for loops) within the function. If var is declared used outside of any function , it creates a global variables

{
  var xx = 10;

  // let and const accessible only inside the block scope
  const yy = 20;
  const zz = 30;

  console.log(xx);
  console.log(yy);
  console.log(zz);
}
console.log(xx);

// lexical scope :-
// the variable is declared inside the function and can only be accessed inside that block or nested block is called lexical scope
// the code demonstrates lexical scope, where fun2 accesses the variable x from func and prints '10' and '20'
function func1() {
  const x = 10;
  function fun2() {
    const y = 20;
    console.log("x ", x);
    console.log("y ", y);
  }
  fun2();
}
func1();

// modular scope :- module scope refers to variable and function that are accessible only with a specific javascript module.
// it helps keep code organized and prevents variables from affecting the global scope

// math.js
export const number = 10;
export function add(a, b) {
  return a + b;
}

// main.js
import { number, add } from "./math.js";
console.log(number);
console.log(add(1, 2));
