// Truthy in javscript
// truthy values are te values that are evaluated to be true when used in a boolean context
// such as conditional statements or logical operations

// any value that is not explicitly falsy (liek false , 0 , null , undefined , NaN , or empty string "")is considered truthy
// this means numbers (except 0 ) , non-empty strings , objects , arrays , functions , and even some quirky values like "0" are all truthy

// list of truthy values in javscript
// non-zero values
// any number wheather positive or negative is truthy
console.log(Boolean(23));
console.log(Boolean(-23));

// non-empty strings
// any string with at least one char in truthy  including string containing whitespace
if ("hello") {
  console.log("non-empty string are truthy !");
}
if (" ") {
  console.log("even whitespace is truthy !");
}

// OBJECTS
// ALL object (including empty object {}) are truthy.
if ({}) {
  console.log("an empty object is truthy !");
}
if ({ key: "Value" }) {
  console.log("object with prop are truthy  !");
}

// array
// all array (including empty array ) are truthy
if ([]) {
  console.log("an empty array is truthy");
}
if ([1, 2, 3]) {
  console.log("non-empty arrays are truthy");
}

// funciton
// funcitons are truthy even if they do nothing
if (function () {}) {
  console.log("function are truthy..!");
}

// dates
// all javascript date objects are truthy , regardless of their validity
if (new Date()) {
  console.log("dates are truthyy  !");
}

// non zero bigint values , except 0n , are truthyy
if (1n) {
  console.log("bigint is truthy");
}

// symbol
// all symbol values are truthyyy
if (Symbol("id")) {
  console.log("symbols are truthy !");
}
