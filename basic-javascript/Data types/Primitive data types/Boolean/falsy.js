// values that are evaluated as false when used in a boolean .
// unlike truthy values , falsy values  represent "nothingness" , "emptiness","failure"

// false , 0 , -0 , null , undefined , NaN , ""  

// list of falsy values in javascript
// zero (0)
// the number zero is falsy , regardless of wheather its positive or negative
if (0) {
  console.log("true");
} else {
  console.log("false ");
}

// BigInt zero
// the bigint value 0n is falsy
if (0n) {
  console.log("true");
} else {
  console.log("false ");
}

// empty string "" without any char are falsy , but strings with whitespace or content are truthy
if (" ") {
	console.log('true');
} else {
	console.log('false');	
}

// null represent the intentional absence of any object vlaue and is falsy 
if (null) {
	console.log('this will not run ');
} else {
	console.log('false');
}

// undefined represents a variable that has been declared but not assigned a value. it is falsy 
let value;
if (value) {
	console.log('true');
} else {
	console.log('false');
} 

// NaN (not a number ) is the result of invalid or undefined mathematical operations and is falsy 
if (NaN) {
	console.log('true');
} else {
	console.log('false');
}

// WHY FALSY VALUES MATTER ?
// understanding falsy values can help avoid common pitfalls in javascript 
// default values with ||
// you can use || to provide a default value if the left operand is falsy 
let username='';
// If username has a truthy value, use it. Otherwise, use "Guest"
let displayName=username || "Guest";
console.log(displayName); 


// short-circuit evaluation
// falsy values cause logical operations to short circuit 
// && returns the first falsy value, or the last value if all are truthy.
let result=0 && "this wont be evaluated "
console.log(result);

// conditional statements 
let config=null;
if (!config) {
	console.log('configuration is missing ..!');
}



// null ve defined 
// although both are falsy , they are used differently . null often represents a absence of a value , while undefined usuallly indicates it is not yet initialize 

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean([]));
console.log(!!null);
console.log(!!"hello");



// concept of truthy and falsy value sin javascript.



