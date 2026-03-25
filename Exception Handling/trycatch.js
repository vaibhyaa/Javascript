// javascript errors throw and try to catch :

// javascript uses throw to create custom errors and try..catch to handle them, preventing the programm from crashing
// the finally block ensures that code runs after error handling, regardless of success or failure

// throw : create custom error and stops code execution
// try ..catch : catches and handles errors to prevent crashes
// finally : runs code after try and catch , regardless of error
// custom error: creates custom error type by extending the error class

// try {
//   dadalert("welcome fello student ");
// } catch (error) {
//   console.error(error);
// }

// the try statement allows you to check wheather a specific block of code contains an error or not.
// the catch statement allows you to display the error if any are found in the try block.

// try {
// try block to check for error
// } catch (error) {
// catch block to display error
// }

// javascript throws blockThe throw statement :-
// the throw statement allows YOU to create custom error messages and throw exceptions manually
// throw new Error("Error Message");
// key points :-
// throw create a custom error
// it can be used to stop the exception of a programm and pass control to error handling mechanism
// you can throw any type of object (string, number, object, etc ). but its common to throw an instance of error

try {
  throw new Error("sorry....! ");
} catch (error) {
  console.log(error.message);
  console.log(error.name);

  //   error → whole object
  // error.message → only "sorry....!"
  // error.name → "Error"
  // error.stack → full stack trace
}

// the finally block :- the finally statement runs unconditionally after the execution of the try/catch block.
// its syntax is

try {
  console.log("try");
} catch (error) {
  console.log("catch");
} finally {
  console.log("finally");
}

// Creating custom error types :-
// you can create custom error types by extending the built-in-error class. This can be useful for more specific error handling

function validateInput(input) {
  if (input < 0) {
    throw new validationError("input must be a positive number");
  }
  return "valid input";
}
console.log(validateInput(1));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// How to create custom error in javascript ?
// error represents the state of being wrong in condition. javascript handles a predefined set of errors by itself but if you want to create youe own error handling mechanism you can do that with custom error functionality available in javascript
// we make use of OPPS concept called an inheritance to implement custom error. All the types of standard error like RangeError, TypeError, etc inherit a main class called Error ,

// new Error(meg,filename,lineno);
// msg :- the error message
// filename:- the file where the error occurs
// lineno:- line number of the error

// the error class consists of properties like name, message and method like captureStackTrace, and toString(), but again it is different in different browsers
// you can use this error class to construct your own error object prototype which is called as custom error .
// custom error :- custom error can be constructed in two ways, which are
// 1) class constructor extending error class
// 2) function constructor inheriting errror class

// class constructor extending error class: Here we define a class that extends the error class,
// class CustomErrorName extends Error{
//   constructor() {
//     super()
//   }
// }

// class CheckCondition extends Error {
//   constructor(msg) {
//     super(msg);
//   }
// }

// try {
//   if (10 != 20) {
//     throw new CheckCondition("10 is not equal to 20 ")
//   }
// } catch (error) {
//   console.error(error);
// }

// function constructor inheriting error class :-
// here the function inherits the prototype the error class. we can then create other custom properties and methods to handle the application-specific error

function CheckCondition(msg = "") {
  this.msg = msg;
  this.name = "checkCondition";
}
CheckCondition.prototype = Error.prototype;

try {
  if (10 != 20) {
    throw new CheckCondition("10 is not equal to 20 ");
  }
} catch (error) {
  console.log(error);
}
