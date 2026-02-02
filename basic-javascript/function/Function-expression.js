//  a function expression is a way to define a function by assigning it to a variable or using it within expression , 
// allowing the function to be stored , passed as an argument or executed immediately 

// function expression can be named or anonymous 
// they are not hoisted , meaning they are accessible only after their definition 
// frequently used in callbacks , closures and dynamic function creation 
// enable encapsulation of functionality with a limited scope 

const greet=function (name) {
	return `hello , ${name}`
}

console.log(greet('vaibhav'));
// the function(name){} creates an anonymous function assigned to the greet variable 
// the function takes name as an parameter and returns a greeting string 
// calling greet('vaibhav') invokes the function and outputs the greetings 

// syntax :-
// const fName=function (params) {
	// function body 
// }

// fname : variable storing the funciton 
// function (params): defines the funciton , parameters are optional 
// {//funciton body}: contains the logic to execute when the function is called 
// a function expression is way to define a function as part of an expression making it versatile for assigning to variable . passing as arguments or invoking immediatley 


// named vs anonymous function expression 
// anonymous function expression :-
// the funciton has no name and is typically assigned to a variable 
const sum=function (a,b) {
	return a+b;
}
console.log(sum(5,7));




// Named funciton expression :-
// the function is given a name , which is useful for recursion or degugging 
const factorial=function fact(n) {
	if (n===0) {
		return 1;
	}
	return n*fact(n-1);
}
console.log(factorial(5));



// use cases of function expression :-
// 1)storing in variable :-
// funciton expression can be stored in varibbles so they can be reused easlily whenever needed

// 2)callback function :-
// callback function:-
// callback funciton are function passed as arguments to other function and executed later when needed.
setTimeout(() => {
	console.log('the message appears in 3 seconds..!');
}, 3000); 

// 3)event handlers :-
// function expression are useful for event listeners because they allow you to define a function directly where it is needed 

// 4) self invoking function :-
// funciton expression can be immediately executed 
(function () {
	console.log('executed immediately ');
})();

// advantage of function expression :-
// flexibility : can be used as callbacks , event handlers , or part of expression 
// encapsulation : keeps the scope limited and avoids pulluting the global namespace 
// control over execution :executes only when explicitly invoked 



// arrow function :-
// arrow function are the concise and modern way to define function expression . they are particularly useful short , single-purpose function 
const arrowFun=(num1,num2)=>console.log(num1+num2);
arrowFun(4,5)
