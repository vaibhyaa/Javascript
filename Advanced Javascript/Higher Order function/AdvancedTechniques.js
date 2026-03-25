// advanced techniques with higher order function :-
// function composition is the process of combining multiple functions to create a new function.
// the composed function applies multiple operations in sequence
function addTwo(x) {
  return x + 2;
}

function multiThree(x) {
  return x * 3;
}

function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

let result = compose(addTwo, multiThree)(4);
console.log(result);
// compose combines add and multiply, so that output of multiply is passe as input to add .
// the result of compose(addTwo, multiThree)(4) is 14 because 4 is first mutiplyed by 3 and then 2 is added

// currying :-
// it transform a function that takes multiple arguments into series of function that each take one argument
// this allows partial application of the function
function mul(x) {
  return function (y) {
    return x * y;
  };
}
let mulFn = mul(2)(5);
console.log(mulFn);
// this multiple function is curried, returning a new function each time it is called with argument

// memoization :-
// it is a technique where function result are cached so that repreated calls with the same arguments return faster
// this is particularly useful for expensive function calls

function memoize(func) {
  var cache = {};
  return function (arg) {
    if (cache[arg]) {
      return cache[arg];
    } else {
      var res = func(arg);
      cache[arg] = res;
      return res;
    }
  };
}

function slow(num) {
  console.log("....computing");
  return num * 2;
}

var fast = memoize(slow);
console.log(fast(5));
console.log(fast(5));
// memoize caches the result of slowfunction calls. the second time fast(5) is called, the result is fetched from the cache, avoiding recomputation 
// this optimization improves performance by saving on redundant calculation.
