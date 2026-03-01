// why asynchronous JavaScript?
// Asynchronous JavaScript is essential for creating responsive and efficient web applications. It allows developers to perform tasks without blocking the main thread, ensuring that the user interface remains responsive while waiting for operations to complete. Asynchronous programming enables handling of time-consuming tasks such as network requests, file I/O, and timers without freezing the application, providing a better user experience and improving overall performance.

// Asynchronous JavaScript can be achieved using various techniques, including callbacks, Promises, and async/await. These techniques allow developers to write code that can handle asynchronous operations in a more structured and readable manner, avoiding issues like callback hell and making it easier to manage complex asynchronous workflows. By leveraging asynchronous programming, developers can create web applications that are faster, more efficient, and capable of handling multiple tasks concurrently without compromising user experience.

// Asynchronous JavaScript is crucial for building modern web applications that require real-time updates, efficient data fetching, and smooth user interactions. It allows developers to create applications that can handle multiple tasks simultaneously, improving performance and responsiveness while providing a seamless user experience.

// now we will compare asynch javascript code to asynchronous code to understand the difference between them and why we need asynchronous JavaScript. We will see examples of both synchronous and asynchronous code to illustrate the concepts clearly.

// synchronous code:-
// in synchronous code, the execution of code happens sequentially, meaning that each line of code is executed one after the other. If a line of code takes a long time to execute, it will block the execution of the subsequent lines until it finishes. This can lead to a poor user experience, especially if there are time-consuming operations involved.

// example of synchronous code:-
// console.log("start");
// for (let i = 0; i < 1000000000; i++) {
//   // some time-consuming operation
// }
// console.log("end");

console.log("Start");
function blockingTask() {
  const startTime = Date.now();

  // Block for 5 seconds
  while (Date.now() - startTime < 5000) {}

  console.log("Blocking task finished");
}

blockingTask();
// in this example, the blockingTask function simulates a time-consuming operation by blocking the main thread for 5 seconds. During this time, the user interface will be unresponsive, and the user will not be able to interact with the application until the blocking task is completed. This illustrates the drawbacks of synchronous code and highlights the need for asynchronous JavaScript to improve responsiveness and user experience.
console.log("End");


// in this example, the for loop is a time-consuming operation that blocks the execution of the subsequent console.log("end") until it finishes. As a result, the user will see "start" and then experience a delay before seeing "end", which can be frustrating and lead to a poor user experience.
// Asynchronous code:-
// in asynchronous code, the execution of code can happen out of order, allowing certain operations to run in the background while the main thread continues to execute other tasks. This is particularly useful for tasks that involve waiting for a response, such as network requests or timers, as it prevents the application from freezing and allows for a more responsive user experience.

// example of asynchronous code:-
// console.log("Start");
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("API Data:", data);
//   });
// console.log("End");

// another example of asynchronous code using Promises:-
// function fakeApiCall() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data received");
//     }, 3000);
//   });
// }

// console.log("Start");
// fakeApiCall().then((data) => {
//   console.log(data);
// });
// console.log("End");

// real world example of asynchronous code using async/await:-
// async function getPost() {
//   console.log("Fetching data...");

//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

//   const data = await response.json();
//   console.log("Data:", data);
// }

// console.log("Start");
// getPost();
// console.log("End");
