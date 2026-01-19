// var keyword (function-scoped)
// var a="Hello javascript";
// var b =0;
// console.log(a);
// console.log(b);

// feature of var keyword :-
// 1 funciton scope:-
// variables declared using var are function-scoped, This means they are accessible anywhere within the funciton they are declared , even brfore their declaration due to hoisting 


// What is a Block?
// A block is just code inside { }

// What is a Scope?
// A scope decides: Where a variable can be accessed

// if, for, while, {}
// ➡️ do NOT create scope for var

// function
// ➡️ creates scope for var

// function testVar() {
// 	console.log(x);
// 	var x =10;
// 	console.log(x);	
// }
// testVar();
// console.log(x);

// the variable x is declared using var inside the testvAr function, so it is only accessible within that function. trying to access x outside the function results in an error.
// since x is not defined globally, calling console.log(x); outsie testVar causes a referenceError ,as x doesnot exist in global scope  

// global scope :-
// if var is used outside of any function, it creates a global variable , accessible anywhere in the script 


// re-declaration of variables :-
// var allows you to re-declare variable within teh same scope without throwing any error, which can lead to unintended behavior 

// hoisting :-
// variables declared with var are hoisted to the top of their scope, meaning the declaration part is moved to the top, but not te initialization, This can result in undefined behavior if not understood properly 

// console.log(hoistedVar);
// var hoistedVar="Hoisted ..!"


// no block scope : -
// unlike let and const ,var does not have block scope. Variables declared with var inside block are accessible oside that block 

// global object property:-
// varibles declared with var in global scope become properties of the window object 
// this behavior can lead to conflicts of not carefully managed, as globalVar is both directly accessible and part of the global window object 

// performance cosiderations :-
// through modern javascript engines optimize the use of var , let and const are typically preferred for better perdictability and readibility Using var can sometimes lead to unnecessary recalculations in loops or complex code 

// backward compatability :-
// the var keyword is fully supported in all version of javascript making it essential for maintaining older codebases 

// var use with setTimeout():-
// when used inside loppps wth setTimeout var can cause unexpected behavior sue to its function scope.
// the value of the variable will be shared across all iteration of the loop leading to the same result for each setTimeput() call

// for (var i = 0; i <= 5; i++) {
// setTimeout(() => {
// 	console.log(i);
// }, 1000);	
// }

// so here what will happen forst memory is allocated to i ==undefined 
// first iteration   :0 
//  (1st loop )
// setTimeout is called
// Callback function is registered
// Timer = 1000ms
// Callback is sent to Web APIs
// Loop continues (JS does NOT wait)

// 2nd iteration :- 1
// Another setTimeout registered
// Same callback reference
// Loop continues

//same happens will i=6 which is false i becomes 6
// Call Stack is Empty
// Loop finished
// Nothing left to execute synchronously 
// after 1000 ms 
// Moves to Callback Queue
// Event Loop checks:
// Call stack empty? ✅
// Then pushes callback to stack
// Only ONE i exists
// Current value of i is 6




// if (true) {
// 	var blockVar='I am not block scoped ..!'
// }
// console.log(blockVar);



// intresting facts about var :-
// closure issue in loops 
// lack of block scope
// hoistig nehavior 
// global object attachment 
// fixes of var issues 

// drawbacks of using var :-
// no block scope 
// hoisting can cause unexpected issues 
// re-declaration allowed 
// attached to the global object 
// issues with asynchronous code 
// while var is still valid and widely supported ,it is generally better to use let and const in modern code to avoid pitflls like hoisting and lack of block scope. However , a thorough understand of var is indispensable for debugging and maintaining legacy javascript projects 






