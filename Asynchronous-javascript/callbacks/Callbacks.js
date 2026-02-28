// a callback is a funciton that is passed as an argument to another function and is executed when a specific event occurs or when a task is completed.

// a function can accept another function as a parameter and can call that function at a later time, allowing for asynchronous behavior in JavaScript.
// a callbacks allow one function to call another at a later time.
// a callback funciton can execute after another funciton has finished

// example
// function greet(name, callbackfn) {
//   console.log("hello", name);
//   callbackfn();
// }
// function saybye() {
//   console.log("goodbye");
// }

// greet("john", saybye);
// here , sayBye is passed as a callback function to greet, and it will be executed after the greeting message is logged.

// working of callback function:-
// javascript executes code line by line (synchronously) but sometimes we need to delay execution or wait for task to complete before running next line of code/funciton.
// in such cases we can use callback functions to handle asynchronous operations, allowing us to execute code after a certain task is completed without blocking the main thread of execution.

// callback functions are commonly used in scenarios such as handling user interactions, making API calls, processing data, and managing timers. They allow developers to write code that can respond to events or perform actions after certain operations are completed, enhancing the interactivity and responsiveness of web applications.

// callbacks for anychronous execution:-
// console.log("start");
// setTimeout(() => {
//   console.log("inside settimeout");
// }, 2000);

// console.log("end");
// setTimeout() is a built-in JavaScript function that allows you to execute a callback function after a specified delay (in milliseconds). In this example, the callback function is an arrow function that logs "inside settimeout" to the console after a delay of 2000 milliseconds (2 seconds). The output will be:
// the rest of the code will continue executing without waiting for the setTimeout to complete, so "end" will be logged immediately after "start", and then after 2 seconds, "inside settimeout" will be logged. This demonstrates how callbacks enable asynchronous execution in JavaScript.

// callbacks in function handling operations:-
// when a function needs to execute different behaviors based in input, callbacks make the function flexible
// function cal(a, b, callbackfn) {
//   callbackfn(a, b);
// }

// function add(x, y) {
//   console.log("the sum is", x + y);
// }

// function multiply(x, y) {
//   console.log("the product is", x * y);
// }

// function divide(x, y) {
//   console.log("the quotient is", x / y);
// }

// function subtract(x, y) {
//   console.log("the difference is", x - y);
// }

// cal(10, 5, add);
// cal(10, 5, multiply);
// cal(10, 5, divide);
// cal(10, 5, subtract);

// callbacks in api calls :-
// in real world applications, we often need to fetch data from a server or an API, which is an asynchronous operation. Callbacks are commonly used to handle the response from the server once the data is fetched.
// example using fetch API:-
// function fetchData(url, callbackfn) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => callbackfn(null, data))
//     .catch((error) => callbackfn(error, null));
// }

// function handleData(error, data) {
//   if (error) {
//     console.error("Error fetching data:", error);
//   } else {
//     console.log("Data fetched successfully:", data);
//   }
// }

// fetchData("https://jsonplaceholder.typicode.com/posts/1", handleData);

// explanation:-
// Fetches data from an API
// Converts response to JSON
// Handles success or error
// Uses a callback function pattern

// part 1:-
// We are creating a function called fetchData that takes a URL and a callback function as parameters. This function will be responsible for fetching data from the specified URL and then invoking the callback function with the results.
// fetch :-
// We use the fetch function to make an HTTP request to the provided URL. The fetch function  doen not return the data it returns a Promise that resolves to the Response object representing the response to the request.
// then() : -
// We chain a then() method to handle the response from the fetch call. The first then() takes the response and converts it to JSON format using the json() method, which also returns a Promise that resolves to the parsed data.
// We chain another then() to handle the parsed data. In this second then(), we call the callback function (callbackfn) and pass null as the first argument to indicate that there was no error, and we pass the parsed data as the second argument.
// catch() :-
// We also chain a catch() method to handle any errors that may occur during the fetch operation. If an error occurs, we call the callback function with the error as the first argument and null as the second argument to indicate that there was no data.

// fetchData() runs
// 2️⃣ fetch() sends request
// 3️⃣ Server responds
// 4️⃣ .then() converts to JSON
// 5️⃣ callbackfn(null, data) runs
// 6️⃣ handleData() executes

// deep dive into then() an catch() :-
// then() and catch() are methods used to handle the results of Promises in JavaScript. They allow you to specify what should happen when a Promise is fulfilled (resolved) or rejected (encountered an error).
// then() and catch() ALWAYS return a new Promise. This allows for chaining multiple then() and catch() calls together, enabling you to handle asynchronous operations in a more readable and structured way.

// example :-
// let query = fetch("https://jsonplaceholder.typicode.com/posts/1");
// let newPromise = query.then((response) => response.json());
// console.log(newPromise);
// newPromise.then((data) => console.log(data));
// console.log(data);

// fetch() → Promise<Response>
//         ↓
// then(response) → response.json()
//         ↓
// Promise<Data>
//         ↓
// then(data) → console.log(data)
//         ↓
// Promise<void>

// callback Hell:-
// when callback are nested deely, the code becomes unreadable and hard to maintain.
// example of callback hell:-

function step1(callback) {
  setTimeout(() => {
    console.log("step 1 completed ");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("step 2 completed ");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("step 3 completed ");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("all steps completed ");
    });
  });
});
