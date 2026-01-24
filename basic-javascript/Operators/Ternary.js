// Ternary Operator is the only javascript operator that takes three operands
// it is a shorthand for if-else statement that takes three operands : a condition , an expression to execute if the condition is true , and another expression if the condition is false
// syntax :- condition ? expression1 : expression2
// example :- 
// check if a number is even or odd
let number = 7;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result); // Odd
// another example :-
// check if a person is eligible to vote
let age = 20;
let isEligible = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(isEligible); // Eligible to vote
// nested ternary operator example :-
// check the grade based on the score
let score = 85;
let grade = (score >= 90) ? "A" :
            (score >= 80) ? "B" :
            (score >= 70) ? "C" :
            (score >= 60) ? "D" : "F";
console.log(grade); // B

// practical application :-
// 1) conditional assignment :- ternary operator is used to assign a value to a variable based on a condition
// 2) inline conditional logic :- ternary operator is used to write inline conditional logic in a concise way
// 3) function return values :- ternary operator is used to return different values from a function based on a condition
// 4) array filtering and mapping :- ternary operator is used in array methods like filter and map to conditionally include or exclude elements
// 5) UI rendering :- ternary operator is used in UI rendering to conditionally render different elements or apply different styles


let Pmark=50;
let res=Pmark>=33 ? "Pass":"Fail";
console.log(res);

// ternary operator in funciton :-
function checkEvenOdd(num){
	return (num % 2 === 0) ? "Even" : "Odd";
}
console.log(checkEvenOdd(4));


// using ternary operator with function calls:-
let isLeaving=true;
let name='Geeks';
function sayHello(personName) {
	console.log(`Hello ${personName}...!`);
}
function sayGoodBye(personName) {
	console.log(`Goodbye ${personName}...!`);
}

isLeaving ? sayGoodBye(name) : sayHello(name);

// a comparasion of ternary operator with if-else statement :-
let marks = 75;
let status;
// using if-else statement
if (marks >= 33) {
	  status = "Pass";
}
else {
	  status = "Fail";
}
console.log(status);
// using ternary operator
status = (marks >= 33) ? "Pass" : "Fail";
console.log(status);

// ternasy operator for array filtering :-
let numbers = [1, 2, 3, 4, 5, 6];
let evenOddArray = numbers.map(num => (num % 2 === 0) ? "Even" : "Odd");
console.log(evenOddArray);

// ternary operator for UI rendering :-
let isLoggedIn = false;
let userGreeting = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(userGreeting);

// ternary operator for function return values :-
function getDiscountedPrice(price, isMember) {
	return isMember ? price * 0.9 : price;
}
console.log(getDiscountedPrice(100, true)); // 90
console.log(getDiscountedPrice(100, false)); // 100
// nested ternary operator for grading system :-
function getGrade(score) {
	return (score >= 90) ? "A" :
	       (score >= 80) ? "B" :
	       (score >= 70) ? "C" :
		   	       (score >= 60) ? "D" : "F";
}
console.log(getGrade(85)); // B
console.log(getGrade(55)); // F