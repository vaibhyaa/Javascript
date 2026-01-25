// it work on a single operand and perform various operation like incrementing / decrementing , evaluting data type , negation of a value etc

// the unary (+) converts an operand into a number , if possibel. It is commonly used to ensure numerical operations on variables that may contain numeric string
// if the operand is the string that represent a valid number , it will be converted to a number , or it will evaluate to NaN (Not a number)
// let s1='12'
// let x=+s1;
// console.log(x);

// console.log(typeof x);

// let s2=+"geeks";
// console.log(s2);

// the unary negative (-) operator is used to convert its operand to a negative number if it isnt already a negative number
// let s1='12';
// let x=-s1;
// console.log(x);

// console.log(typeof x);

// unary increment operator :-
// the unary increment operator (++) adds 1 to its operand value and evalutes to the updated value .
// postfix:in postfix the current value of the variable is used in the expression , and then the variables value is incremented by 1
// let x= 12;
// let y=x++;
// console.log(x);
// console.log(y);
// prefix:- in prefix , the variables value is first incremented by 1 , and then the updated value is used in the expression
// let z=13;
// let v=++z;
// console.log(z);
// console.log(v);

// the unary decrement operator :-
// the unary increment operator (--) substract 1 to its operand value and evalutes to the updated value
// postfix:in postfix the current value of the variable is used in the expression , and then the variables value is decrementeded by 1
// let x= 12;
// let y=x--;
// console.log(x);
// console.log(y);

// prefix:- in prefix , the variables value is first incremented by 1 , and then the updated value is used in the expression
// let z=13;
// let v=--z;
// console.log(z);
// console.log(v);

// logical NOT (!) OPERATOR
// the logical NOT(!) is unary operator that negates the boolean value of an oprand , converting true to false an vice versa
// let x=false;
// let y=!x;
// console.log(x);
// console.log(y);

// bitwisw NOT (~)
// the bitwise NOT (~) is a unary operator that inverts all the bits of tis operand, converting each 0 to 1 and each 1 to 0
// let x=10;
// let y=~x;
// console.log(y);

// typeof Operator:-
// the javascript typeof operator returns the data type of ots operand in form of the string, The operand can be any object , function , or variable
let x = 18;
let s = "vaibhav shinde";
let isTrue = true;
let obj = { name: "vaibhav shinde", age: 18 };
let undefinedVar;
const Funciton = async (params) => {
  console.log();
};
console.log(typeof x);
console.log(typeof s);
console.log(typeof isTrue);
console.log(typeof obj);
console.log(typeof undefinedVar);
console.log(typeof Funciton);

// delete operator
// the delete operator in javascript removes a property from a object. if no other references exist , the proprty memory is automatically released.
let person = {
  name: "vaibhav shinde",
  age: 23,
  city: "pune",
};
console.log(person);

let deleteObj=delete person.age;
console.log(person);
console.log(deleteObj);



// void operator 
// the void operator evalutes the given expression and then returns undefined
function myFunction() {
	return void 0;
} 
console.log(myFunction());

