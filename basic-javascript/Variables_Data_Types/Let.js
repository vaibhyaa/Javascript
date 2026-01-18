// let keyword
// a let keyword is a modern way to declare variables in javascript and was introduced in ECMAScript 6 Unlike car, let provides block-level scoping.
// this behavior helps developers avoid unintended issues caused by variable hoisting and scope leakage that are common with var 

// Key feaures:-
// Block scope :-
// variables declared with let kwyeord are block -scoped meaning they are only accessible within the block , statement , or expression where they are defined .
// this is significant improvement over var , which has function scope and can lean to unexpected behavior 

if (true) {
	let x=10;
	console.log(x);
}
// console.log(x);
// here x is accessible only with in the block , leading to reference error acessed outside of it .


// no hoisting issues :-
// while variables declared with let are hsoisted , they are not initialized . This creates temporal dead zone (TDZ) where accessing the varaible before its declaration results in a referenceError , helping prevent unintended access 
// variables declared with let are hoisted but remain unitialized , avoiding accidental access before declaration 
//  this ensures no unexpected behavior , unlike var , where the variable can be accessed before its actual declaration 

// no Redeclaration :- 
// a major benefit of let is that it does not allow redeclaration of the same variable in the same scope .
// this prevents accidental overwrites of variable , reducing bugs and improving code readibility 
// attempting to redeclare z results in a syntex errro , which helps catch issues in early development 


// suitable for loops :-
// using let in loops is particularly beneficial because the varible declared with let is scoped to the loop block , and each iteration gets a new instance of the varible 
// for (let i = 0; i < 3; i++) {
// 	console.log(i);
// } 
// here let insures each loop iteration has its own i so te settimeout callback correctly lopgs 

// cleaner syntax:-
// because let has bock-level scope , it prevents variable declaration  from 'leaking' outside of their intended scope this makes code cleaner and easier to debug 

// temporal dead zone :-
// when using let accessing a variable before its declaration results in a temporal dead zone 
// which prevents accidental access to uninitialized variables


// safer closure behavior :-
// with let , closure work as expected , providing a sepearte instance of the variable for each iteration in a loop 
// this avoids the common issue where the last value of loop variable is captured by closures when using var 
// each function is the func array captures its own i due to lets block scopig , providing the expected behavior in closures 

// integration wit modern javascript :-
// the use of let aligns with modern javascript best practices , supporting compatability with modules , destructuring , and es6 + features 
// let {name , age }={name:'Vaibhav',age:28};
// console.log(name ,age);
// this code uses destructuring assignment to extract the name ad age properties from the object and assign them to correspnding variables
// the console.log will output, as the values of name an age are successfully assigned from the object 

// interstign facts about let :-
// block scope
// no re-declaration 
// hoisted , but not initialized  
// temporal dead zone 
// works well with loops 

// drawbacks of using let :-
// limited browser support in older version :-
// no hoisting initialization 
// cannot re-declare in the same scope 
// can cause tdz confusion 
// increased memory usage 


//let keyword is  modern and safer way to declare varibles in javascript , it eliminates many pitfalls associated with var and provides developers with clearer and more robust way to manage scope 
// by understanding and leveraging the features of let , developers can write more maintainable and error-free code 






// let is used to declare variables and it is block-scoped and not hoisted to the top , suitables for mutable varibles :-
// let al=12;
// let bl='Hello javascriiiiiiiiipt'
// console.log(al, bl);