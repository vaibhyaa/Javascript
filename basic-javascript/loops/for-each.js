// the javascript array foreach() mathod is build in function that executes a provided function once for array element
// it does not return a new arrya and doesnot modify the original array
// its commonly used for iteration and performing actiosn on each array  ele

// const arr=[1,2,3,4,5];
// arr.forEach((eachItem)=>console.log(eachItem));

// copy every ele from one array to another array using array.foreach method

// const items = [12, 24, 36];
// let copyArr = [];

// items.forEach((eachItem) => {
//   copyArr.push(eachItem);
//   console.log(copyArr);
// });

// console.log(copyArr);

// calcute the square of every ele of array using foreach() method
const item = [1, 29, 47];
const squareofitem = [];

item.forEach((eachItem) => {
  squareofitem.push(eachItem * eachItem);
});

console.log(squareofitem);



// limitations of foreach method
// no break or continue :-
// unlike for loops, you cannot break foreach() loop or use continue to skip to the next iteration . it will always iterate over all elements.
// no return value:- the forEach() does not return new array , it return undefined 
// asynchronous issues :- The forEach () koop does not handle asynchrornous operations well. if you need to perform asynchronous operations , consider using for..of with aynch/await or promise all


