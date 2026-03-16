// Promise.any():-
// is a static method that takes an array of promises as a parameter and returns the first fulfilled promise.
// it returns a rejected value when all of the promise in the array return reject or of the array is empty
// when all the promise are rejected an aggregateError is returned which contains the reason for rejection

// let p1 = new Promise((resolve, reject) => {
//   reject("failure");
// });

// let p2 = new Promise((resolve, reject) => {
//   reject("failed to load ");
// });

// let p3 = new Promise((resolve, reject) => {
//   resolve("worked");
// });

// let p4 = new Promise((resolve, reject) => {
//   resolve("successful");
// });

// Promise.any([p1, p2, p3, p4])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// the first two promises were rejected and the first successful promise which was prom3 was returned whose value is captured using then and printed in the console

// exaple :- all rejected
let p1 = new Promise((resolve, reject) => {
  reject("failure");
});

let p2 = new Promise((resolve, reject) => {
  reject("failed to load ");
});

let p3 = new Promise((resolve, reject) => {
  reject("unsuccessful");
});

let p4 = new Promise((resolve, reject) => {
  reject("rejected");
});

Promise.any([p1, p2, p3, p4])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

Promise.any([])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

//  when we pass as empty array in any method it is automatically rejected and [AggregateError: All promises were rejected]  is returned
// also if all the promise passed in an array  return a rejected same output is shown :
//  [AggregateError: All promises were rejected] {
//   [errors]: [ 'failure', 'failed to load ', 'unsuccessful', 'rejected' ]
// }
