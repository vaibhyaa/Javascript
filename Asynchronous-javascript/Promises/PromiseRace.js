// promise Race :-
// promise.race() method return a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with value or reason from that promise


// Runs multiple promises in parallel and:
// returns the result of the first promise that settles
// first settled can be:
// fulfilled ✅
// rejected ❌

// example
const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("one");
    }, 1000);
  });
};

const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("two");
    }, 2000);
  });
};

Promise.race([p1, p2])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// example 2 : -
const tout = (t) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Completed in ${t}`);
    }, t);
  });
};

Promise.race([tout(2000), tout(1000)]).then(console.log);
