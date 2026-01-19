// to represent logical values , javascript used the boolean data type , which has two possible values true or false
// these values often result comparasions or logical operation
// additionally the Boolean() function can convert other types of values into boolean , determining their truthy or falsy nature

// the Boolean() function
// it is used to explicity convert a value to its boolean equivalent
// truthy values return true, while falsy value return false
console.log(Boolean("vaibhav"));
console.log(Boolean(0));
// non empty strings like 'Hello' are truthy
// zero is a falsy value

// all objects , array , non-empty strings are considered truthy values
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean("hii"));
// object and arrays alwats evalute to true in boolean contexts

// everything without a value is false
console.log(Boolean("") === false);
console.log(Boolean(undefined));

// javascript booleans as objects
let obj = new Boolean(false);
console.log(obj);
console.log(typeof obj);
console.log(Boolean(obj));

// boolean primitives
// boolean primitives is a simple representation of true or false
let isAvailable = true;
console.log(typeof isAvailable);

// boolean coercion
// javascript implicitly converts to boolean in contexts like conditions and loops
let user = "";
if (user) {
  console.log("Valid input");
} else {
  console.log("InValid input");
}

// constructor and instance
// the boolean constructor can create boolean objects , but primitive booleans are preferred
let primitiveBool = true;
let objBool = new Boolean(false);
console.log(typeof primitiveBool);
console.log(typeof objBool);

// truthy values :-
// values that are evaluated to be true when used in a Boolean context, such as in conditionl statements or logical operations
// non-zero numbers , non-empty strings , Object and array

// falsy values :-
// values that are evaluated as false when used in a boolean. Unlike truthy values, falsy values represent "nothingness," "emptiness" or "failure"
// false , 0 , -0 , null , undefined , NaN , " "(empty string)

// practical Application
// 1)conditional statement
let score = 70;
if (score > 50) {
  console.log("pass");
} else {
  console.log("fail");
}
// 2)ternary operator 
let age =16;
let isAdult=age>=18 ? true:false
console.log(isAdult);
// logical short circuiting 
let defaultName='Guest';
let username= "" || defaultName;
console.log(username);
