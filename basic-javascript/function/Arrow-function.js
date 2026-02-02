// arrow function were introduced in ES6 and are commonly used in javascript
// arrow function allow a shorter syntax for function expression
let myArrowfun = (a, b) => console.log(a + b);
myArrowfun(3, 6);

// arrow function with on parameter :-
// with parenthesis :-
// let square =(x)=>console.log(x*x);
// without parenthesis:-
let square = (x) => console.log(x * x);
square(5);

// arrow function has only one statement that returns a value
let hello = () => "hello world ...!";
console.log(hello());

// arrow function are not declarations:-
// arrow function are always expression and must be assigned to a variable
// they cannot be used before they are defined

// arroe function and the this keyword :-
// arrow function do not have their own this value
// they inherit this from the surrounding code.

// funciton declaration
// const person={
// 	name:'vaibhav',
// 	greet:function () {
// 		return this.name
// 	}
// }
// console.log(person.greet());

// arrow funciton :-
const person = {
  name: "vaibhav",
  greet: () => {
    return this.name;
  },
};
console.log(person.greet());


// when to use arrow function :-
// for short circuiting 
// for callbacks and array methods 
// when you do not need you own this 

// when not to use Arrow function :-
// as objects method 
// when you need you own this 
// when using function declaration,
