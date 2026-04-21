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





// | Method                 | Success Condition         | Failure Condition            | Returns                           |
// | ---------------------- | ------------------------- | ---------------------------- | --------------------------------- |
// | `Promise.all()`        | All promises must resolve | Fails if **one** rejects     | Array of resolved values          |
// | `Promise.allSettled()` | Waits for all             | Never fails early            | Array of `{status, value/reason}` |
// | `Promise.race()`       | First settled promise     | If first settled is reject   | First settled result/error        |
// | `Promise.any()`        | First fulfilled promise   | Fails only if **all** reject | First successful value            |





// promise.all([allpromises])first it wait for all the promises to get resolved  if one of the promise is rejected it stops and return the result 
// promise.allSettled ([takes an array of promises ]) it waits for all the promises to get settled  
// irrespective of resolved or rejected  returns state of each promise 
// promise.race([takes an array of promises]) it retruns the result of promise which gets settled   first irrespective of rsolved or reject
// Promise.any([takes an array of promises]) . it returs the success if the first promise get resolved  rejects only if all promises fail