// Logical Operators in JavaScript are used to combine or invert boolean values (true or false). Here are the most commonly used logical operators:

// AND Operator (&&) :-
// returns true if both operands are true , otherwise returns false
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// practical example
let age = 25;
let hasLicense = true;
// check if person is eligible to drive if age is greater than or equal to 18 and has a license
console.log(age >= 18 && hasLicense); // true
console.log(age >= 18 && 'hasLicense'); // true   (this is used in react like if first left side value is true then print the right side if its component or text )

age=18;
let IdProff=true;
if (age>=18 && IdProff) {
	console.log('Allowed');
} else{
	console.log('Not allowed');
	
}
// it works with number as well , treating 0 as false and non-zero as true
// it treats false , 0 , -0 , null , undefined , NaN , empty string as false and everything else as true
// if the first operand is falsy it returns the first operand otherwise it returns the second operand
// if the first operand is truthy it evaluates the second operand and returns its value 
console.log(0 && "hello"); // 0
console.log(5 && "hello"); // "hello"
console.log(null && 10); // null
console.log("world" && 42); // 42
console.log("hello" && "world"); // "world"
console.log(3 && 0); // 0

// OR Operator (||) :-
// returns true if at least one operand is true , otherwise returns false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
// practical example
let isWeekend = false;
let isHoliday = true;
// check if person can relax if its weekend or holiday
console.log(isWeekend || isHoliday); // true
// it works with number as well , treating 0 as false and non-zero as true
// if the first operand is truthy it returns the first operand otherwise it returns the second operand
console.log(0 || "hello"); // "hello"
// if first operand is truthy it returns the first operand
// if the first operand is falsy it evaluates the second operand and returns its value



// NOT Operator (!) :-
// inverts the boolean value of its operand
console.log(!true); // false
console.log(!false); // true
// practical example
let isRaining = false;
// check if person needs an umbrella
console.log(!isRaining); // true
// it works with number as well , treating 0 as false and non-zero as true
console.log(!0); // true
console.log(!5); // false
console.log(!""); // true
console.log(!"hello"); // false
console.log(!null); // true
console.log(!undefined); // true
console.log(!NaN); // true

let isLoggedIn = false;
if (!isLoggedIn) {
	console.log('Log In!');
} else {
	console.log('welcome back!');
}



// double NOT operator (!!) :-
// converts any value to a boolean value
console.log(!!true); // true
console.log(!!false); // false
console.log(!!0); // false
console.log(!!5); // true
console.log(!!""); // false
console.log(!!"hello"); // true
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false
console.log(!!{}); // true
console.log(!![]); // true
// practical example
let userInput = "some input";
// check if user input is valid (not empty)
console.log(!!userInput); // true
userInput="";
console.log(!!userInput); // false


// nullish Coalescing Operator (??) :-
// returns the right-hand operand when the left-hand operand is null or undefined , otherwise returns the left-hand operand
let username = null;
let defaultName = "Guest";
console.log(username ?? defaultName); // "Guest"
username="Vaibhav";
console.log(username ?? defaultName); // "Vaibhav"






console.log(null && 10);