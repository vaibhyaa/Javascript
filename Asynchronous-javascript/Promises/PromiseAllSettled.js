// Promise.AllSettled():-
// Promise.allSettled() waits for ALL promises to finish, no matter:
// ✅ Resolved
// ❌ Rejected
// It never fails early.

// It returns a new Promise that resolves with an array of result objects.

// Promise.allSettled runs multiple promises in parallel and returns a single promise that resolves after all promises have settled (either fulfilled or rejected ), without stopping early due to failures 
// executes multiple promises cocurrently 
// always resolve wiith an array of result objects
// each result shows the promise status (fulfilled or rejected )
// provides reason for rejected promises 
// does not short-circuit on rejection (unlike promise.all)
// useful when results of all promise are needed, even if some fail 

const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
const p4 = Promise.reject(4);

Promise.allSettled([p1, p2, p3, p4])
  .then(([firstPromise, secondPromise, thirdPromise, fourthPromise]) => {
    console.log(firstPromise, secondPromise, thirdPromise, fourthPromise);
  })
  .catch((error) => {
    console.log(error);
  });

//   Promise.allSettled():
// ✅ NEVER goes to .catch()
// ✅ Always resolves
// ❌ Even if some promises reject

//   Real-World Use Case
// Imagine loading:
// User data
// Notifications
// Messages
// Even if messages API fails,
// you still want to show user + notifications.
