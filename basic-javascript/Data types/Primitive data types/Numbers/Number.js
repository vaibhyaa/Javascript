// primitive data types represent single values and are immutable

// number :- represent numeric values (intergers and decimals)
// let n=42;
// console.log(n);
// const pi=3.14;
// console.log(pi);

// numeric types in javascript :-
// integers and floating-point numbers are both represented using this format
// the numeric precision is 53 bit, allowing for an accurate representation of integer values ranging from

// scientific notation :-
// javascrip allows writing extra-large or extra -small numbers using (exponent) notation
// let a=156e5;
// console.log(a);
// let b=156e-5;
// console.log(b);

// interger precision :-
// integer (numbers without a period or exponet notation )are accurate up to 15 digit
// let a = 999999999;
// let b = 9999999999999999;
// console.log(a);
// console.log(b);


// floating point precision :-
// floating point arithmetic is NOT ALWAYS 100% ACCURATION DUE to binary representation limitations  
// let x=0.22+0.12;
// console.log(x);
// // correct way to solve this 
// let y =(0.22*10+0.12*10)/10;
// console.log(y);

// adding numbers and stings :-
// javascript uses the + operator for both addition and concatenation 
// numbers are added , when stings are concatenated 
// adding two numbers :-
// let x=10;
// let y=15;
// console.log(x+y);

// concatenation two string :-
// let w='10';
// let e='20';
// console.log(w+e);

// number and string :-
// let t=100;
// let r='1000';
// console.log(t+r);



// numeric string:-
// javascript automatically converts the numeric string to numbers in most opeartion like :
// let x='100'/'10';
// console.log(typeof(x),x);
// let y='100'*'10';
// console.log(typeof(y),y);
// let z='100'-'10';
// console.log(typeof(z),z);
// let a='100'+10;
// console.log(a, typeof(a));
// let b='100'-10;
// console.log(b,typeof(b));
// let c='100'*10;
// console.log(c,typeof(c));
// let d='100'/10;
// console.log(d,typeof(d));




// Number literals :-
// the types of number literals you can use decimal , binary , octal , and hexadecimal 
// 1(Decimal numbers )
// javascript numbers does not have different types of numbers (int , float , long , short )which other programming languages do , it has only one tye of number and it can hold both with or without decimal values 
// let a=33;
// let b=3.3;
// console.log(a);
// console.log(b);

// 2(octal numbers)
// if number starts from with 0 and the following digits are smaller than 8 . it will be parsed as an octal number 
// let o=0667432;
// console.log(o);


// binary numbers :-
// // they start with 0b or 0B folowed by 0's and 0'1
// let x=0b11;
// console.log(x);
// let y=0B0111;
// console.log(y);

// hexadecimal numbers :-
// They start with Ox or OX followed by any digit belonging (0123456789ABCDEF)
// let a=0xfff;
// console.log(a);








// number coersion in javscipt :-
// coersion refers to the automatic or implicit conversion of values from one data type to another
// when different types of operator are applied to values , javascript perform type coersion to ensure that the operation can proceed. 
// 1 undefined to NaN :-
// When you perform an operation involving undefined , javascript returns Nan (not a number)
// const res=undefined+10;
// console.log(res);

// null to 0:-
// the value null is coerced to 0 when used in arihtmatic operation 
// const total =null+5;
// console.log(total);


// boolean to number:-
// boolean values (true or false )are converted to numbers : 1 for true and 0 for false 
// const n1=true+10;
// console.log(n1);
// const n2=false+10;
// console.log(n2);

// string to number:-
// when performing arithmetic operation , javascript converts string to numbers , if the string cannot be parsed a valid number it return NaN 
// const s1='42';
// const s2='hello';
// console.log(Number(s1));
// console.log(Number(s2));


// Bigints and symbol:-
// attempting to coerce Symbol values to numbers results in typeerror 
const symbol=Symbol('mySymbol');
const symToNum=Number(symbol);
console.log(symToNum);
// error :- Cannot convert a Symbol value to a number




// Intger conversion :-
// some operations such as those which work with an array , string indexes or date/time except integers 
// after performing the coercion if the number is greater than 0 it is returned as the same sand if the number Nan or -0 IT IS returned as 0 
// the result is always an integer 



// fixed -width numer conversion :-
// there are some functions that deal with binary encoding of integers such as bitwise operators and typedArray objects.
// the bitwise operators always convert the operands to 32-bit integers 





 


  













