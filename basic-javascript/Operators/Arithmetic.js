// Arithmatic Operators in detail:-
// addition:-
// number + number :- adds two numbers
console.log(10 + 5); 
// string + string :- concatenates two strings
console.log('hello'+'world');
// string + number :- converts number to string and concatenates
console.log('age: '+25);


// subtraction:-
// number - number :- subtracts second number from first
console.log(10 - 5);
// string - number :- converts string to number and subtracts
console.log('10' - 5);
console.log('hello'-1);  //NaN


// multiplication:-
// number * number :- multiplies two numbers
console.log(4 * 3);
// string * number :- converts string to number and multiplies
console.log('5'*4);
console.log('hello'*3); //NaN
// string * string :- converts both strings to numbers and multiplies
console.log('6'*'7');
console.log(Infinity*0);
console.log(Infinity*Infinity);



// division:-
// number / number :- divides first number by second
console.log(10 / 5);
// string / number :- converts string to number and divides
console.log('10' / 5);
console.log('hello'/1);  //NaN
console.log(3.0/3);
console.log(3.0/0.0); //Infinity
console.log(2.0/-0.0); //-Infinity
console.log(2.0/1.0);



// modulus :-
// number % number :- returns remainder of division of first number by second
console.log(9%5);
console.log(-12%5);
console.log(12%-5);
console.log(NaN%2);
console.log(Infinity%2);



// exponentiation :-
// number ** number :- raises first number to the power of second number
console.log(2**3);
console.log(5**2);
console.log(4**0.5);
console.log(Infinity**0);
console.log(NaN**2);


// increment:-
// ++number :- increments number by 1 and returns new value
let a=5;
console.log(++a); //6
// number++ :- returns current value of number and then increments by 1
let b=5;
console.log(b++); //5
console.log(b); //6



// decrement:-
// --number :- decrements number by 1 and returns new value
let c=5;
console.log(--c); //4
// number-- :- returns current value of number and then decrements by 1
let d=5;
console.log(d--); //5
console.log(d); //4