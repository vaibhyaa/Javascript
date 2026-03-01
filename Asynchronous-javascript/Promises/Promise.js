// example

// the resolve and reject are not keyword , you can use any name instead of resolve and reject
// whatever value we passed in resolve will be received in then() and whatever value we passed in reject will be received in catch().
// the resolve and reject are functions that are used to change the state of the Promise. The resolve function is called when the asynchronous operation is successful, and it takes a value as an argument that will be passed to the then() method.
// The reject function is called when the asynchronous operation fails, and it takes an error as an argument that will be passed to the catch() method.
// resolve(value) :- marks the promise fulfilled and provides the value to the then() method.
// reject(error) :- marks the promise rejected and provides the error to the catch() method.

// a new promise is create (checkEven)
// promise maker:-
// let checkEven = new Promise((resolve, reject) => {
//   // here condition is checked
//   let number = 5;
//   if (number % 2 === 0) {
//     resolve("Even number");
//     // the value that is passed in resolve() is "Even number"
//     // here promise state is changed according to condition if it true promise state is changed to fulfilled and value is passed to then() method.
//   } else {
//     // the value that is passed in reject() is "Odd number"
//     // here also promise state is changed according to condition if it false promise state is changed to rejected and error is passed to catch() method.
//     reject("Odd number");
//   }
// });

// console.log(checkEven);

// promise consumer/receiver:-
// checkEven
//   // if the promise if fulfilled/resolved then then() will get executed
//   .then((result) => {
//     console.log(result);
//   })
//   // then wil get skipped if promise is rejected and catch will get executed directly
//   .catch((error) => {
//     console.log(error);
//   });

// their are two parts of a promise :-
// Promise maker :- the function that creates a promise and defines the asynchronous operation. It takes two parameters, resolve and reject, which are functions used to change the state of the promise.
// Promise Receiver :- the code that consumes the promise and handles the result of the asynchronous operation. It uses the then() method to handle successful resolution and the catch() method to handle errors or rejections.




