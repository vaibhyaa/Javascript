// to help you perform common tasks effectively , javascript provides a wide range variety array methods

// | Method         | What It Does                           |
// | -------------- | -------------------------------------- |
// | `push()`       | Adds element at end                    |
// | `pop()`        | Removes last element                   |
// | `shift()`      | Removes first element                  |
// | `unshift()`    | Adds element at beginning              |
// | `splice()`     | Add/remove elements at specific index  |
// | `sort()`       | Sorts array (modifies original ⚠️)     |
// | `reverse()`    | Reverses array                         |
// | `fill()`       | Fills array with static value          |
// | `copyWithin()` | Copies part of array within same array |

// javascript array length:-
// let a = ["html", "css", "javascript", "react"];
// console.log(a.length);
// the a.length returns the number of ele in the array

// javascript Array toString() method:-
// convert the given value into string with each ele seperated by commas,
// let a = ["html", "css", "javascript", "react"];
// console.log(a.toString());
// let stringOfArray = a.toString();
// console.log(stringOfArray);
// the toString() method converts the array 'a' into a string

// javascript array join() method:-
// thsi join() method creates and returns a new string by concatenating all ele of an array
// it uses a specified seperator between each ele in the resulting string
// let a = ["html", "css", "javascript", "react"];
// console.log(a.join("|"));
// console.log(a.join("]"));
// console.log(a.join("+"));

// javascript array delete operator:-
// the delete operator is used to delete the given value which can be an object, array , or anything
// let emp = {
//   firstName: "Vaibhav",
//   lastName: "shinde",
//   salaray: 30000,
// };
// console.log(delete emp.salaray);
// console.log(emp);
// let a = ["html", "css", "javascript", "react"];
// console.log(delete a[0]);
// console.log(a);

// javascript array concate method:-
// it is used to concatenate two or more arrays and it gives the merged array.
// let a1 = [11, 12, 13];
// let a2 = [14, 15, 16];
// let a3 = [17, 18, 19];
// console.log(a1.concat(a2, a3));
// let newArr = a1.concat(a2, a3);

// javascript array flat method:-
// it is used to flatten the array i.e it merges all the given array and reduces all the nesting present in it
// const a1 = [
//   ["1", "2"],
//   ["3", "4", "5", ["6"], "7"],
// ];
// console.log(a1);
// console.log(a1.flat(Infinity));

// javascript array push method:-
// this method is used to add an ele at the end of an array
// as array in javascript re mutable object , we can easily add or remove ele from the array
// let a = [10, 20, 30, 40, 50];
// a.push(60);
// a.push(70, 80, 90);
// console.log(a);

// javascript array unshift() method:-
// the unshift method is used to add ele to the front of an array
// let a = [20, 30, 40];
// a.unshift(10);
// a.unshift(-10, 0);
// console.log(a);

// javascript array pop method:-
// it is used to remove ele from the end of an array
// pop methos also return the ele which was removed from end of an array
// let a=[20,30,40,50];
// console.log(a.pop());
// console.log(a);

// javascript array.shift() method:-
// it is used to remove ele from the beginning of an array
// this method also return the removed ele
// let a = [20, 30, 40, 50, 60];
// console.log(a.shift());
// console.log(a);

// javascript array reverse method:-
// let a = [1, 2, 3, 4, 5, 6];
// console.log(a.reverse());

// important
// javascript array splice method:-
// this method is used to insert and remove ele in between array
// let a = [20, 30, 40, 50, 60];
// console.log(a);
// // this removes 3 ele from array a starting index at 1
// console.log(a.splice(1, 3));
// console.log(a);
// //this is the way this method insert 3 ele at index 1 witghout removing anything (0)
// a.splice(1, 0, 300, 400, 500);
// console.log(a);

// javascript array slice method :-
// this method returns a new array containing a portion of the original array , based on the start and end index provided as arguments
// const a = [1, 2, 3, 4, 5, 6];
// const result = a.slice(1, 4);
// the slice method creates a new array by extracting ele from index 1 to 3 (exclusice of 4 ) from the original array , the original array remains unchanged
// console.log(result);
// console.log(a);

// | Method        | What It Does                    |
// | ------------- | ------------------------------- |
// | `map()`       | Transforms each element         |
// | `filter()`    | Filters elements                |
// | `reduce()`    | Reduces to single value         |
// | `slice()`     | Returns portion of array        |
// | `concat()`    | Merges arrays                   |
// | `includes()`  | Checks existence                |
// | `indexOf()`   | Finds index                     |
// | `find()`      | Returns first matched element   |
// | `findIndex()` | Returns index of first match    |
// | `every()`     | Checks if all satisfy condition |
// | `some()`      | Checks if any satisfy condition |
// | `join()`      | Converts to string              |
// | `flat()`      | Flattens nested array           |
// | `flatMap()`   | map + flat                      |

//javascript array some() method:-
// the some method checks whether a lease one of the ele of the array satisfies the condition checked by the argument function
// const a = [1, 2, 3, 4, 5];
// let result = a.some((eachVal) => eachVal > 4);
// console.log(result);
// this method checks if at least one ele in the array satisfies the provied condition.
// this method stops as soon as it finds the first matching ele , making it efficient for large arrays

// javascript array map() method:-
// map mathod creates an array by calling a specific funciton on each ele present in the parent array.it is non-mutating method
// like if we want to perform some operation on each ele we dont want to skip any ele from parent array
// let a = [4, 9, 16, 25];
// let result = a.map((eachele) => eachele+2);
// console.log(result);
// console.log(a);

// javascript filter method :-
// this method in javascript creates a new array with all the ele that pass the test/codition implemented by the provided funciton
// it does not modify the original array leaving the original one unchanged
// let a1 = [1, 2, 3, 4, 5, 6];
// let result = a1.filter((eachEle) => eachEle > 2);
// console.log(result);

// javscript array reduce method :-
// the reduce method is used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) and the return balue of the function is stored in an accumulator

// javascript array values method:-
// this method returns a new array iterator object that contains the values for each index in the array
const a = ["apple", "banana", "cherry"];
const res = a.values();
for (const ele of res) {
  console.log(ele);
}
