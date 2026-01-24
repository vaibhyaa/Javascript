// Operators in JavaScript
// Operators are special symbols or keywords that perform operations on operands (values or variables) to produce a result.
// JavaScript supports various types of operators, including:
// 1) Arithmetic Operators :-
// used to perform mathematical operations like addition , subtraction , multiplication , division , modulus etc
// 2) Logical Operators :-
// used to combine or invert boolean values (true or false) such as AND , OR , NOT
// 3)ternary Operator :-
// a shorthand for if-else statement that takes three operands : a condition , an expression to execute if the condition is true , and another expression if the condition is false
//4) Assignment Operators :-
// used to assign values to variables such as = , += , -= , *= , /= etc
//5) unary Operators :-
// operate on a single operand to perform operations like negation ( - ) , increment ( ++ ) , decrement ( -- ) , typeof etc
// 6)  Bigint Operators :-
// used to perform operations on BigInt values such as addition , subtraction , multiplication , division , modulus etc
// 7) comparison Operators :-
// used to compare two values and return a boolean result such as == , === , != , !== , > , < , >= , <= etc
// 8) bitwise Operators :-
// used to perform operations on the binary representations of numbers such as AND ( & ) , OR ( | ) , XOR ( ^ ) , NOT ( ~ ) , left shift ( << ) , right shift ( >> ) etc
// 9)Comma Operator :-
// used to evaluate multiple expressions and return the value of the last expression
// 10)relational Operators :-
// used to compare two values and determine their relationship such as in ( instanceof ) , in ( property in object )


// Arithmatic Operators Examples:-
console.log(2 + 3); // addition
console.log(5 - 2); // subtraction
console.log(4 * 3); // multiplication
console.log(10 / 2); // division


// assignment Operators Examples:-
let x = 10; // assignment
x += 5; // addition assignment
console.log(x);
x *= 2; // multiplication assignment
console.log(x);
x -= 4; // subtraction assignment
console.log(x);
x /= 2; // division assignment
console.log(x);


// comparison Operators Examples:- 
// returns boolean values (true or false)
console.log(5 == 5); // equality
console.log(5===5); // strict equality (type of variable also checked)
console.log(5 != 3); // inequality
console.log(10 > 5); // greater than
console.log(5 < 10); // less than
console.log(10 >= 10); // greater than or equal to
console.log(5 <= 10); // less than or equal to


// logical Operators Examples:-
console.log(true && false); // logical AND
console.log(true || false); // logical OR

// ternary Operator Example:-
let age = 18;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult);

// bitwise Operators Examples:-
// perform operations on binary representations of numbers
console.log(5 & 3); // bitwise AND

// comma Operator Example:-
let a = (1, 2, 3);
console.log(a); // outputs 3 (value of the last expression)


// Unary Operators Examples:-
let b = 5;
console.log(b++);
console.log(b--);

// relational Operators Examples:-
const obj = { name: "Alice" };
console.log("name" in obj);
console.log([] instanceof Array);


// Bigint Operators Examples:-
const big1=9007199254741991n;
const big2=10n;
console.log(big1+big2);



// string operators Examples:-
console.log("Hello" + " World"); // concatenation
console.log("Repeat ".repeat(3)); // repetition



// javscript chainig operators :-
const info={name:"Vaibhav",address:{city:{state:"Maharashtra",}}};
console.log(info.address?.city?.state);
console.log(info.address?.city?.pincode);

