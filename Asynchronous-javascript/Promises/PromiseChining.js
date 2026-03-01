// promise chaining :-
function step1(input) {
  //   return Promise.resolve("Hello");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input) {
        resolve(input);
		return ;
      }
      reject("No input");
    }, 2000);
  });
}

function step2(step1value) {
  //   return step1value + " World";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isNaN(Number(step1value))) {
        reject(" number input rejected ");
        return;
      }
      resolve(step1value + " World");
    }, 1000);
  });
}

function finalValue(finalValue) {
  //   console.log(finalValue);
  return new Promise((resolve, reject) => {
    resolve(finalValue);
  });
}

function onSuccess(data) {
  console.log(data);
}
function onError(error) {
  console.log(error);
}

step1("34").then(step2).then(onSuccess).catch(onError);

// Each .then():
// Receives previous result
// Returns a NEW Promise
// Passes value to next .then()

// Promise chaining allows executing asynchronous operations sequentially.
// Each .then() returns a new Promise, enabling the result of one step to be passed to the next.
// Errors automatically propagate to the nearest .catch().

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// this is example of promise chaining:-
// example :-
// function getWeather() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // only the first call matters (resolve/reject)
//       // Once a Promise is settled (resolved or rejected), it cannot change again.
//       //   resolve("sunnyy");
//       reject(`Unable to fetch weather data`);
//     }, 2000);
//     // after 2 sec the promise becomes fulfilled with value='sunnyy'
//   });
// }

// function getweatherIcon(weather) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (weather === "sunny") {
//         resolve(`${weather} : ☀️`);
//       } else if (weather === "rainy") {
//         resolve(`${weather} : 🌧️`);
//       } else if (weather === "cloudy") {
//         resolve(`${weather} : ☁️`);
//       } else {
//         reject("No icon available for this weather condition");
//       }
//     }, 100);
//   });
// }

// function onSuccess(weatherData) {
//   console.log("Success:-", weatherData);
// }

// function onError(error) {
//   console.log("Error:-", error);
// }

// const weatherPromise = getWeather();

// getWeather()
//   .then(
//     (weatherData) => {
//       console.log("success : ", weatherData);
//     },
//     (error) => {
//       console.log("error", error);
//     },
//   )
//   .catch((error) => {
//     console.log("error :", error);
//   });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// when promise is rejected then catch() will be called.
// weatherPromise.catch((error) => {
//   console.log(error);
// });

// weatherPromise
//   // always pass the function reference in then() and catch() do not call the function in then() and catch().
//   // if you call the function in then() and catch() it will execute immediately and it will not wait for the promise to resolve or reject.
//   .then(getweatherIcon)
//   .then(onSuccess, onError)
//   .catch(onError);

// example :-
// function fun1() {
//   console.log("function 1");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // reject("404");
//       resolve("100");
//     }, 2000);
//   });
// }

// function fun2() {
//   console.log("function 2");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("200");
//     }, 2000);
//   });
// }

// function onSuccess(data) {
//   console.log(data);
// }

// function onError(error) {
//   console.log(error);
// }

// fun1().then(fun2).then(onSuccess).catch(onError);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// real world example of promise chaining:-
// fetch("/api/user")
//   .then(response => response.json())
//   .then(user => fetch(`/api/posts/${user.id}`))
//   .then(response => response.json())
//   .then(posts => console.log(posts))
//   .catch(err => console.error(err));
