// a closure in javascript that remembers and accesses variables from its outer scope even after the outer function has finished executing

// retain access to outer function variables
// preserves the lexical scope
// allow data encapsulation and privacy
// commonly used in callbacks and asynchronous code

// example:-
function outerFun() {
  let outerVar = "i am outside the scope !";
  function innerFun() {
    console.log(outerVar);
    outerVar = "Updated";
    console.log(outerVar);
  }
  return innerFun;
}

const closure = outerFun();
console.log(closure);
// closure var return the function body that is being returned from outerFun
// which was assigned to closure variable
// call the closure variable as it is returnring the function (so function needs to be called)
closure();

// the function innerFun() forms a closure by retaining access to outerVar, which is variable in the scope of outerFun()
// even the though outerFun() has completed execution, innerFun() still has access to outerFun due to the closure

// lexical scope :-
// Closures are rely on lexical scope , which means function scope is determined by where it is defined, not where it is executed , allowing inner function to access variables from their outer function
// scope is fixed at function definition time.
// inner functions can access outer function variables
// enables closures to "remember" their environment

// Private variables :-
// closures allow funciton to keep variables private and accessible only within that funciton, which is commonly used in modules to protect data from being accessed or modified by other parts of programm
// helps achieve data encapsulation
// created private variables
// Prevents accidental data modification
// commonly used in modules patterns

function outerCount() {
  // private variable
  let count = 0;
  return function () {
    // access and modify the private variables
    count++;
    return count;
  };
}

const increment = outerCount();
console.log(increment());
console.log(increment());
console.log(increment());

// closures and IIFE (immediately invoked function expression):-
// immediately invoked function expression use closures to encapsulation data within a function , keepig it private and preventing access from the outside, which helps create self-contained modules
// data is scoped to the IIFE
// prevents global namespace pollution
// useful for creating modular code

const counter = (function () {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    reset: function () {
      count = 0;
      console.log(count);
    },
  };
})();

counter.increment();
counter.reset();

// closure and setTimeout:-
// closures are helpful in asynchronous programming because they preserve access to variables even after a function has finished executing, which is essential for delayed operations like timers or server request
// retain state for delayed execution
// works well with callback and promises
// useful with timers (setTimeout , setInterval)
// helps manage async data flow

function createTimers() {
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
createTimers();

// Closures wuth this keyword:-
// closures can be confusing with the this keyword because this is determined by how a function is called, and not where it is defined, so inside a closure it may not refer to the exepected object

// this is not lexically scoped (except in arrow function)
// its value depends on the calling context.
// closures don't change how this works
// Arrow functions inherit this from their surrounding scope

function Person(name) {
  this.name = name;

  this.sayName = function () {
    console.log(this.name);
  };

  setTimeout(
    function () {
      console.log(this.name);
    }.bind(this),
    1000,
  );
}

const g = new Person("vaibhav");
g.sayName();

// function Currying in javascript( Closure Example )
// function currying is a technique that transform a function with multiple arguments into a sequence of function that each take one arguments at a time, using closures to remember previously passed values

// breaks a multi-arguments function into unary function
// uses closures to retain earlier arguments
// enables partial application of function
// helps create reusable an specialized functions

// normal function

// function add(a, b, c) {
//   return a + b + c;
// }
// console.log("this is teh sum : ", add(1, 2, 3));

// function curraying
function addCurrying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
const result = addCurrying(1)(2)(6);
console.log("this is add through function currying : ", result);

// common pitfalls:-
// memory leaks: excessive use of closures may retain unnecessary references to varibles, causing memory issues 
// performance overhead : overusing closures might lead to larger memory usage due to retained scopes 
