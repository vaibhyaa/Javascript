// an array is an ordered list of values. Each value is assigned a numeric index starting from 0.
// array can hold multiple values of different data types including numbers , strings , objects , and even other arrays


// creating an array :-
// creating an array using array literal syntax:-
let fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);
console.log(fruits[0]);


// create an array using the new keyword (constructor syntax):-
let colors = new Array("red", "green", "blue");
console.log(colors);
console.log(colors[1]);



// basic array operations :-
// 1) accessing elements :- using the index to access specific elements in the array
let firstFruit = fruits[0];
console.log(firstFruit);
console.log(fruits[2]);

// accessing the last element:-
let lastFruit = fruits[fruits.length - 1];
console.log(lastFruit);


// modifying elements :- changing the value at a specific index
fruits[1] = "grape";
console.log(fruits);


// adding elements :- using push() to add elements to the end of the array
fruits.push("kiwi");
console.log(fruits);
// using unshift() to add elements to the beginning of the array
fruits.unshift("strawberry");
console.log(fruits);



// removing elements :- most used and imp methods
// using pop() to remove the last element from the array
// it also returns the removed element
let lastRemovedFruit =fruits.pop(); // removes last element
console.log(fruits);
console.log(lastRemovedFruit);

// using shift() to remove the first element from the array 
let firstRemovedFruit=fruits.shift(); // removes first element and return that removed ele we can store that in variable 
console.log(fruits);
console.log(firstRemovedFruit);

// using splice() to remove elements from a specific index
// it can also be used to add elements at a specific index
// syntax :- array.splice(startIndex, deleteCount, item1, item2, ...)
// remove 2 elements starting from index 1
fruits.splice(1, 2); // 
console.log(fruits);

// add elements at index 2 and ele also mentioned
let arr = [1, 2, 5, 6];
arr.splice(2, 0, 3, 4);
console.log(arr);

// replace elements at index 2
let arr1=[1,1,1,1,1,1]
arr1.splice(2, 2, 3, 4);
console.log(arr1);



// array length :-
fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);
console.log(fruits.length);
// increase and decrease length of array 
fruits.length = 6; 
console.log(fruits);
console.log(fruits.length);

fruits.length = 3;
console.log(fruits);
console.log(fruits.length);





// array iteration :-
fruits = ["apple", "banana", "mango", "orange"];
for (let i = 0; i < fruits.length; i++) {
	const element = fruits[i];
	console.log(element);
}


// using for..of loop
fruits.forEach((fruit) => {
	console.log(fruit);
});




// array concatenation :-
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combinedArray = array1.concat(array2);
console.log(combinedArray);



// conversion of an array to string :-
let stringFruiteArray = fruits.toString();
console.log(stringFruiteArray);


// check the type of an array :-
console.log(typeof fruits); // returns object



// recognizing javascript array :-
// by using Array.isArray() method
console.log(Array.isArray(fruits)); // returns true
console.log(fruits instanceof Array);
