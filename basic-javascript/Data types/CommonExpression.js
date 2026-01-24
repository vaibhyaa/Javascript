// null === undefined 
console.log(null === undefined);
// false
// in javascript , both null and undefined represent "empty" values but are distinct types. null is a special object representing the intentional absence of value ,
// while undefined signifies that a variable has been declared but not assigned with a value.
// despite they are not strictly qual (===) to each other 

console.log(5>3>2);
// at first glance , this expression may appear to be checking > but javscript evaluates it from left-to-right due to its operator precedence 
// first 5>3 i.e true 
// after that true>2 is evaluated which is evaluated to 1<2 which is false 
// so result is false 


console.log([]===[]);
// false
// arrays are object , even if two array have the same content , they are still different objects in memory 
// when you compare two aray with === you are comparing their references , not their contents 
// since [] and [] are different instances in memory , the result is false 
console.log([]==[]);
// false


console.log('10'<'9');
// true
// javascript compares string , it compares their unicode values lexicographically (char by char)
// 10 is compared to 9 , since 1 has lower unicode value than 9 javascript determines that 10 is less than 9 
// this comparasion moght seem counterintutive but its due to javascript string comparasion mechanism 

console.log(NaN===NaN);
// (NaN) is a special value that represents an invalid number or the result of an operation that cannot produce a valid number 
// to check if a value is NaN , use Number.isNan().

console.log(true==1);
// javascript uses type coersion with loose equality operator (==), when comparing true and 1 , javascript converts true to 1 and then compares the values 
// since 1--1 is true , the overall expression evaluates to true 
// this behavior might lead to unexpected result in some cases , so often recommended to use strice equality operator (==) to avoid implicit type coercion 

console.log(undefined > 0);
// when javascript attempts to compare undefined with 0 , it convert undefined to NaN (NOT A NUMBER )
// any expression involving NaN return false 


console.log('5'===5);


console.log([,2]==[1,2]);

console.log(Infinity>1000);




 