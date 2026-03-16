// async/await in javascript allows you to write asynchronous code in clean, synchronous-like manner, making it easier to read, understand, and maintain while working with promise

// async function always return promise
// await pauses execution until the promise is resolved or rejected
// improve readability compared to .then() and .catc() chaining
// makes error handling simple using try ..catch
// ideal for managing complex asynchronous flows in s structured way

async function fetchData() {
  try {
    const response = await Promise.resolve({
      json: async () => ({
        userId: 1,
        name: "vaibhav",
        age: 27,
        about: "software engineer",
      }),
    });
    // console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

fetchData();

// await keyword :-
// the await keyword pauses the execution of an async function until a Promise is resolved or rejected. It can only be used inside an async function, making asynchronous code easier to read and manage
// used to wait for a promise to settle
// can only be used inside a asynch function
// prevents callback and .then() /.catch() chaining
// makes asynchronous code cleaner and more readable
// supports error handling with try..catch

const getData = async () => {
  let y = await "Hello world";
  console.log(y);
};
console.log(1);
getData();
console.log(2);

// the async keyword transform a regular javascript function into an asynchronous function, causing it to return a Promise
// the await keyword is used inside an async function to pause its execution and wait for a promise to resolve before continuing

// Error handling in Async/Awit:-
// javascript provides predefined arguments for handling promises: resolve , reject
// resolve:- used when an asynchronous task is completed successfully.
// reject:- used when an asynchronous task is fails, provided the reason for failure

async function fetchDataError() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data : ", error);
  }
}
fetchDataError();

// asynch function fetDataError():- declares an asynchronous function that always return a Promise.
// await fetch():- Sends an HTTP request and waits for the response without blocking the main thread.
// await response.json() : converts the response body into javascript data (JSON format)
// console.log(data); :- Prints the fetched data to console if the request in successful
// try..catch :- Handles errors such as network failure on invalid responses.

// Why do we need response.json()?
// The API does NOT directly give JavaScript objects.
// Instead it returns a Response object that contains the raw body (stream of data).
// response.json() converts it to JavaScript object
// json() reads the body stream and parses JSON → JS object.

// response.json() converts it to JavaScript object

// | Method                   | Converts to       |
// | ------------------------ | ----------------- |
// | `response.json()`        | JavaScript object |
// | `response.text()`        | string            |
// | `response.blob()`        | binary data       |
// | `response.arrayBuffer()` | raw buffer        |
// | `response.formData()`    | form data         |

// Think of API response like a sealed parcel 📦.
// fetch() gives you the parcel.
// response.json() opens the parcel and reads the content.

// what is async/await ?
// it is an syntactic sugar built on top of Promises that allows writing asynchronous-code in a asynchronous-code looking way


// async function getData() {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

// :- equivalent to promises:- 
// fetch(url)
//   .then(res => res.json())
//   .then(data => console.log(data));


// what does async keyword do ?
// It makes a function always return a Promise.


// What does await do?
// await pauses the execution of the async function until the Promise resolves.

// Does await block the JavaScript thread?
// ❌ No. It only pauses that async function, not the entire thread.


// Promise.all() → parallel execution
// multiple await → sequential execution