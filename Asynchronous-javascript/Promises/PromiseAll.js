// Promise.all():-
// Promise.all is used to run multiple promises in parallel and wait for all of them to complete
// Resolves when ALL promises resolve
// ❌ Rejects immediately if ANY promise rejects
// Promise.all() is a method that takes an array of promises and returns a single promise that resolves when all the promises in the array have resolved, or rejects if any of the promises in the array reject.
// the resolved value of the returned promise is an array of the resolved values of the input promises, in the same order as the input promises. If any of the input promises reject, the returned promise will reject with the reason of the first promise that rejects.

// Accepts an array or iterable of promises
// resolves with an array of results in the same order
// rejects immediately if any promise is rejected

// Start all promises at same time
//         ↓
// Wait until ALL complete
//         ↓
// Return array of results

// example 1:-
// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);
// const p4 = Promise.resolve(4);
// Promise.all([p1, p2, p3, p4])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// example 2:-
// even if order is reversed :- even if promises resolved at different time
// Order depends on array position, not timing.
// const p1 = new Promise((res) => setTimeout(() => res("First"), 2000));
// const p2 = new Promise((res) => setTimeout(() => res("Second"), 1000));

// Promise.all([p1, p2]).then(console.log);
// Promise.all([p2, p1]).then(console.log);

// example 3:-
// if one of the promise is rejected
// const p1 = Promise.resolve("A");
// const p2 = Promise.reject("Error in B");
// const p3 = Promise.resolve("C");
// Promise.all([p1, p2, p3]).then(console.log).catch(console.log);

//   It stops immediately.
// 👉 Other results are ignored.

// real world example :-
// Promise.all([fetchUser(), fetchPosts(), fetchComments()]).then(
//   ([user, posts, comments]) => {
//     console.log(user, posts, comments);
//   },
// );

// example 4:-
// const promise1 = Promise.resolve(10);
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(20);
//   }, 2000);
// });
// const promise3 = Promise.resolve(30);

// function onSuccess(data) {
//   console.log(data);
// }
// function onError(error) {
//   console.log(error);
// }

// Promise.all([promise1, promise2, promise3]).then(onSuccess).catch(onError);

// example : waiting fir all promise to resolved
// const pr1 = Promise.resolve({ name: "Vaibhav" });
// const pr2 = Promise.resolve({ age: "27" });
// const pr3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({ lang: "marathi" });
//   }, 2000);
// });

// Promise.all([pr1, pr2, pr3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   example 2:-
// Handling Promise with timeputs
// const tout = (t) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Completed in ${t}`);
//     }, t);
//   });
// };

// Promise.all([tout(2000), tout(1000)])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// example 3:- array of promises with varying timeouts
// const pt1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`Resolved after 1 sec`);
//   }, 1000);
// });
// const pt2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`Resolved after 3 sec`);
//   }, 3000);
// });
// const pt3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`Resolved after 1.5 sec`);
//   }, 1500);
// });
// Promise.all([pt1, pt2, pt3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// example 4 :- handling error in promise
const pt = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (time === 2000) {
        reject(`rejected in ${time}`);
      } else {
        resolve(`completed in ${time}`);
      }
    }, time);
  });
};

Promise.all([pt(1000), pt(2000), pt(3000)])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise.all([promise1, promise2, promise3]).then(onSuccess).catch(onError);
// iterable :- An array or other iterable object containing promises or other values .Non-promise values are treated as resolved promises.
// RETURN VALUE :- it follows some rules to return a single promise :-
// if passed arguments is empty , it returns a Promise that is already resoved
// if the passed iterable cotnains no promise, it retunrns a promise that is reolved asynchronously with an array of the values from the iterable.
// for all other cases , it return a pending promise

// interview :-
// Promise.all() takes an array of promises and returns a new promise that resolves when all promises resolve, or rejects immediately if any promise rejects. It preserves order and runs promises in parallel.

// | Method             | If one fails        |
// | ------------------ | ------------------- |
// | Promise.all        | Rejects immediately |
// | Promise.allSettled | Waits for all       |
