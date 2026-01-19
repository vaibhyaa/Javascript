// we will use number methods such as toString, toEXxponential, toPrecision, isInteger , toLocalSting method
// lets see the exa,ple of these Number methods

let x = 21;
// console.log(x.toString());
//the toString() method in javascript returns a number as a string. It allows converting numerical values to string representation, enabling operations like formatting output, displaying number in various formats, and facilitating string manipulation based on numeric values
// this method accepts a single optional parameter \
// Return Value :- the num.toString() method returns a string representing the specified number object.
// example 1:
// converting a number to a string with base 2, we will have to call the toString() method by passing 2 as parameter
let num = 213;
console.log("output :" + num.toString(2));
// converting a number to a string with base 8, we will have to call the toString() method by passing 8 as parameter
console.log("output :" + num.toString(8));
// converting a number to a string with base 16, we will have to call the toString() method by passing 16 as parameter
console.log("output :" + num.toString(8));
console.log("output :" + num.toString(), typeof num.toString());

console.log(x.toExponential());
// javascript Number toExponential() method is used to convert a number to its exponential form.
// it return a string representing the number object in exponential notation.
// toExponential() method will convert a number to its exponential form
// it accepts a single parameter value
// value:- it is an optional parameter and it represents the value specifying the number of digits after the decimal point
// return value :-this method in javascript returns a string representing the given number below in exponential notation with one digit before the decimal point
let num1 = 212.12456;
console.log(num.toExponential(4));
// passing a number as an argument in toExponential() method. If a number is passed as an argument to the toExponential() method then it represents the number of digits after the decimal point.
let num2 = 2.12456;
console.log(num2.toExponential(2));
// PASSING no parameter in the toExponential() method.
let num3 = 2.12456;
console.log(num2.toExponential());
let num4 = 212.12456;
console.log(num4.toExponential());
console.log(num4.toExponential(0));

// range Error :-
// this exception is thrown when the value parameter passed is too small or too large
// values between 0 and 20 inclusive will not cause rangeerror
// if you want to pass larger or smaller values than specific by this range then you have to accordingly implement the toExponential() method

// type error :-
// this exception is thrown when the tofixed method is invoked on an object that is not the type number

console.log(x.toPrecision(4));
// this method is used to format a number to a specific precision or length.
// if the formatted number requires more digit than the original number then decimals and nulls are also added to create the specified length
// parameter :- the method accepts a single optional parameter
// value :-the parameter represents the value of the number of significant digit in the formatted number.
// Return value :- the toPrecision() method in javascript returns a string in which the number id formatted to the specific precision
let preNum = 231.45689;
console.log("Precision : ", preNum.toPrecision(3));
console.log("Precision :", preNum.toPrecision());
console.log("Precision :", preNum.toPrecision(4));
console.log("Precision :", preNum.toPrecision(12));
let preNum2 = 123;
console.log("Precision :", preNum2.toPrecision(12));




// console.log(Number.isInteger(x));
// this method is useful for checking whether a number is a whole number or not
// Number.isInteger(value);
// value :- the value to be checked
// return value :-it return a boolean value eith true or false it will true if the passed value is of the type Number and an integer , it returns false
console.log(Number.isInteger(-2));
console.log(Number.isInteger(0));
console.log(Number.isInteger(2));
console.log(Number.isInteger(-2.2345));
console.log(Number.isInteger("HIIIII..!"));




// console.log(x.toLocaleString("bn-BO"));
// this method converts a number into a sting , using a local language format.
// the language depends on the local setup on your computer
// parameter :- this method accepts two parameter locals and optiosn.
// locals :-this is optional parameter . it specifies the language format to be used
// options :- this parameter is also an optional one.
// it includes maximumFractionDigits that represent a number from 0 to 20 (default is 3)
// it includes maximumFractionDigits that represent a number from 1 to 21 (default is 21)
// return value :- the return value can be a string that represents a number
let n = new Number(705870689);
console.log("ar-SA: " + n.toLocaleString("ar-SA"));
console.log("bn-BD " + n.toLocaleString("bn-BD"));
console.log("bn-IN " + n.toLocaleString("bn-IN"));
console.log("cs-CZ " + n.toLocaleString("bn-CZ"));

let money = new Number(159900);
let myObj = {
  style: "currency",
  currency: "EUR",
};

console.log(money.toLocaleString("en-GB", myObj));

let a = new Number(159900);
