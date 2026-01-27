// this javascript for..of loop is a modern , iteration statement introduced in ECMAScript 2025 (ES6)
// works for iterable objects such as array , string , maps , sets an dmore
// it is better choice for traversing items of iterables compared to traditional for and for in loops
// especialllly when we have break or continue statements . if we just want to perform an operation on all items , we prefer foreach

// for objects for ..in lopp is better suited
// and for..of is better suited for array , map ,set
// for for..of if we need to put continue or break in the loop we can

// for each if we need execute something for all elements without any condition

// for of loop if we need to put continue or break in the loop
// for each if we need to execute something for all elements without any condition

// iteration over an array using for ..of
// const arr=[1,2,3,4,5];
// for (const item of arr) {
// 	console.log(item);
// }

// string
// const str='vaibhav shinde';
// for (const char of str) {
// 	console.log(char);
// }

// map
const m = new Map([
  ["name", "akash"],
  ["age", 25],
  ["city", "noida"],
]);

for (let [key, value] of m) {
  console.log(`${key}: ${value}`);
}

// set
// iterating over a set using for ...of
let s = new Set([1, 2, 3, 4, 5]);
for (let value of s) {
  console.log(value);
}

// iterating over an objects properties using for ...of
let person = {
  name: "akash",
  age: 25,
  city: "noida",
};

for (let key of Object.keys(person)) {
  console.log(`${key} : ${person[key]}`);
}
