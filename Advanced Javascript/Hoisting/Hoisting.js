// Hoisting referes to the behavior where javascript moves declarations of varibles , function , classes to the top of their scope during the compilation phase.
// this can sometimes lead to surprising results, especially when using var, let, const or function expression

// hoisting applies to variables and function declaration
// initializations are not hoisted; they are only declarations
// var variables are hoisted with undefined, while let and const are hoisted but remain in the temporal dead zone until initialized

// Before going to learn more about hoisting , its important first to understand the temporal dead zone

// TEMPORAL DEAD ZONE:-
// it is a critical concept in javascript hoisting. it refers to the period between the entering of the scope (such as function or block) and the actual initialization of the variable declared with let or const.
// during this time, any reference to the variable before its initialization will throw a ReferenceError

// Working of TDZ:-
// variables declared with let and const are hoisted to the top of their scope, but they are not initialized until their declaration line is reached
// any attempt to access these variables before their declarations will result in an error.
// the TDZ exists only for varibales declared using let and const. Variables declared with var do not have this issues, as they are hoisted and initialized to undefined

// hello();
// var hello = function () {
//   console.log("hiii");
// };

// gives error (the variable hello is hoisted , but it is not initialized until the assignement line is reached since it holds a function expression ) Thus, calling hello() before its initialization throws a typeError

// varibable hoisting with var:-
// when you use var to declare a variable, the declaration is hoited to the top, but its value is not assigned until the code execution reaches the variable's initialization.
// This result in the variable being assigned undefined during the hoisting phase.
// var hoisting lifts declarations, not initalizations
console.log(a);
var a = 5;

// variable hoisting with let and const :-
// unlike var, let and const are also hoisted, but they remain in Temporal Dead Zone (TDZ) from the start of the block until their declaration is encountered.
// accessing them before their declaration will throw a Reference Error
// console.log(b);
// let b=20;

// function declaration hoisting :-
// function declaration are hoisted with bot their name and the function body. This means the function can be called before its defination in the code
greet();
function greet() {
  console.log("Hello , Mahima !");
}
// the function declaration is hoisted, and the entire function definition is available before its position in the code

// function expression hoisting :-
// function expression are treated likely variable declaration, the variable itself is hoisted, but the function expression is not assigned until line of execution. this means calling the function before its assignment will result in an error
// hello();
// var hello=function () {
// 	console.log('hiii');
// }
// the variable hello is hoistedm but since its a function expression its not initialized until the line is executed

// Hoisting with let and const in function :-
// variables declared with let and const inside a function are hoisted to the top of the function scope, but they remain in the TDZ.
// This prevents access to them before they are initialized.
// function test() {
// 	console.log(x);
// 	let x=100;
// }
// test()
// the variable x is hoisted inside the function but cannot be accessed until its declaration line due to the TDZ

// hoisting with classes:-
// classes are hoisted but they cannot be accessed before they are declared, resulting in a reference Error
// const obj = new MyClass();
// class Mayclass {
// 	constructor() {
// 		this.name='Vaibhav shinde'
// 	}
// }
// althought the class MyClass is hoisted, it cannot be accessed before its declaration due to TDZ, which is why the code thrown ReferenceError

// re-declaring variables with var
// with var, you redeclare a variable within the same scope. this is a unique behavior compared to let and const
var a = 100;
var a = 200;
console.log(a);

// accessing variables declared later in loops :-
// when using var in loops, the loop variable is hoisted to the function or global scope, which can cause unexpected behavior. if you use let, the variable is block-scoped and behaves as expected

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 100);
}

// using hoisted function with parameters :-
// function can be hoisted with their parameters, but any parameter passed to te function are still determined by the invocation, not by the hoisting
test1(100);
function test1(num) {
  console.log(num);
}

// hoisting in Nested function :-
// hoisting works within nested function as well. Variables declared with var inside a function are hoisted to the top of the function scope
function outer() {
  console.log(a);
  var a = 5;
  function inner() {
    console.log(b);
    var b = 10;
  }
  inner();
}

outer();
