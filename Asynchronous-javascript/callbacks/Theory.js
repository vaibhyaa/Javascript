// asynchronus JavaScript
// is a programming approach that enables the non-blocking execution of tasks, allowing concurrent operations , improved responsiveness, and efficient handling of time-consuming operations in web applications.
// javascript in single-threaded and synchronous by default, meaning that it executes code sequentially, blocking the execution of other tasks until the current task is completed.
// Asynchronous JavaScript allows developers to perform tasks such as making API calls, handling user interactions, and processing data without freezing the user interface or blocking other operations.
// Asynchronous JavaScript can be achieved using various techniques, including:

//1. callbacks: Functions that are passed as arguments to other functions and are executed when a specific event occurs or when a task is completed.
// 2. Promises: Objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a more structured way to handle asynchronous code and avoid callback hell.
// 3. async/await: A syntactic sugar built on top of Promises that allows developers to write asynchronous code in a more synchronous and readable manner. The async keyword is used to declare an asynchronous function, and the await keyword is used to pause the execution of the function until a Promise is resolved or rejected.

// examples :-
function checkInventory(callback) {
  setTimeout(() => {
    console.log("checking the inventory");

    const error = null; // simulate success
    callback(error);
  }, 2000);
}

function createOrder(callback) {
  setTimeout(() => {
    console.log("creating an order");

    const error = null;
    callback(error);
  }, 1000);
}

function chargePayment(callback) {
  setTimeout(() => {
    console.log("charging payment");

    const error = null;
    const chargedAmount = 100;

    callback(error, chargedAmount);
  }, 2000);
}

function sendMail(callback) {
  setTimeout(() => {
    console.log("sending the invoice");

    const error = null;
    callback(error);
  }, 1000);
}

function main() {
  checkInventory((error) => {
    if (error) return console.log("Error:", error.message);

    createOrder((error) => {
      if (error) return console.log("Error:", error.message);

      chargePayment((error, chargedAmount) => {
        if (error) return console.log("Error:", error.message);

        console.log("Charged:", chargedAmount);

        sendMail((error) => {
          if (error) return console.log("Error:", error.message);

          console.log("all tasks completed");
        });
      });
    });
  });
}

main();






