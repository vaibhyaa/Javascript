// a higher order function is function that does one fo the following
// takes another function as an argument
// returns another function as its result

// higher order functions help make your code more reusable and modular by allowing you to work with function like any other value

function fun() {
  console.log("Hello, world");
}

function fun2(action) {
  action();
  action();
}

fun2(fun);

// fun2 is a higher-order function because it takes another function (action) as an argument
// it call the function twice

// Popular Higher order function in javascript :-
// Map:-
// the map function is used to transform as array by applying a callback function to each element. it return a new array
const n = [1, 2, 3, 4, 5];
const square = n.map((num) => num * num);
console.log(square);

// filter :-
// the filter function is used to create new array containing elements that satisfy a given condition.
const n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const even = n1.filter((num) => num % 2 === 0);
console.log(even);
// the callback (num)=>num%2===0 filters out elements not divisible by 2
// the resulting array contains only even numbers

// reduce:-
// the reduce function accumulates array ele into a single value based on a callback function
const n3 = [1, 2, 3, 4, 5];
const sum = n3.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
// the callback (acc,curr)=>acc+curr adds all elements
// 0 is the initial value of acc.

// foreach:-
// the foreach function executes a provided function once for each array ele
// const n4 = [1, 2, 3, 4, 5, 6, 7];
// n4.forEach((num) => console.log(num * num));
// for each performs the side effect of printing each ele squared
// it does not return a new arraly like map

// find:-
// the find method returns a first ele in the array that satisfy a given condition.
const n5 = [1, 2, 3, 4, 5, 6];
const firstEven = n5.find((num) => num % 2 === 0);
console.log(firstEven);

// some :-
// the some function checks if at least one array ele satisfy a condition
const n6 = [1, 2, 3, -1, 4, 5, 6, -2];
const hasNegative = n6.some((num) => num < 0);
console.log(hasNegative);
// it returns true if any ele passed the condition , false otherwise

// every:-
// the every, function checks if all array elements satisfy a condition
const n7 = [1, 2, 3, 4, 5, 6,-1];
const all = n7.every((num) => num > 0);
console.log(all);
// it returns true only if all ele pass the condition 




