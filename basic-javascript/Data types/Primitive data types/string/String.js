// javascript string is a sequence of character , typically used to represent text
// in javascript there is no char type , so single char string is used when we need a chart

// string in javascript are immutable
// NO — Arrays and Objects are MUTABLE
// string are immutable since once a string is created it will recive a reference in the memory and its value will never change
// this means that any opeartion on a string may give the new string without mutating the main string
// there are some misconceptions that the string can be conversted to uppercase or lowercase but in reality , if we apply these methods to string the original string will not be changed instead a new string with applied changes will be returned which can be stored inside a new varible
// so in general if we use any string method on string a new string object will e returned

// let str="Hello vaibhav";
// console.log(str);
// str.replace("hello","hiii..!");
// console.log(str);
// str[0]="HH"
// console.log(str);

// let str1=str.toUpperCase();
// console.log(str1);

// create using literals
// we can either use a single quote or a doube quote to create a string
// we can use either of the two but it is recommended to be consistent with your choices throughtout your code
// using single quote
// let s1='String'
// console.log(s1);
// let s2="double string"
// console.log(s2);

// creating using constructor
// let s =new String("abcdef");
// console.log(s);

// template literals (string interpolation )
// you can create string templates literals . Temaplate literals allow you to embed expression within backticks(` `) for dynamic string creation , making it more readable and versatile
// let s3='gfg';
// let stringLiteral=`you are learnring from ${s3}`
// console.log(stringLiteral);

// empty string
// you can create empty string by assigning either single or double quotes with no char in between
// let s4=''
// let s5=""

// muitiple strings(es6 and later)
// you can create a multiple string usin backticks (``) with tmplate literals
// the backticks allows you to span string across multiple lines , preserving the line breaks within the string
// let s6=`this is
// mutiple
// line string`
// console.log(s6);

// this is concatenation
// console.log('some'+'more'+'text');

// types of value
// console.log(typeof 2);
// console.log(typeof 'string');

// type coersion / automatic type conversion
// console.log('string'+2);

//practical example
// first it calculates $+20.94 and becomes string and agan that string added to 7.99
// console.log('$'+20.94+7.99);
// console.log('$'+(20.94+7.99));

// console.log('Items (' + (1 + 1) + ') $' +(2095+799)/100);
// console.log('Items (' + (1 + 1) + ') $' + ((2095 + 799) / 100));

// 3 WAYS TO CREATE STRING
// SINGLE QUOTE
// DOUBLE QUOTE
// BACKTICKS `` TEMPLATE STRINGS
// SPECIAL FEATURE OF TEMPLATE STRINGS
// INTERPOLATION == insert value directly into a string
// console.log(`Items (${1+1}): $${(2095 + 799) / 100}`);

// Basic operation on javascript string :-
// finding the length of a string
// you can find the length of a string using the length property
let s = "javascript";
console.log(s.length);

// string concatenation :-
// you can combine two or more string using + operator
let s1 = "java";
let s2 = "script";
console.log(s1 + s2);
console.log((s1 + s2).length);

// find substring of a string :-
// we can extract a portaion of a string using the substring() method.
let string = "javascript tutorial";
let string2 = string.substring(0, 10);
console.log(string2);

// string search in javascript :-
// find the first index of a substring within a string using indexOf method
let s3 = "def abc abc vai bhav";
let i = s3.indexOf("bhav");
console.log(i);

// string replace in javascript :-
// replace occurrences of a substring using the replace() method.
// by default , replace() only replaces the first occurrences .
// to replace all occurrences , use a regular expression with the g flag.
let ss1 = "learn HTML at gfg and HTML is useful";
let ss2 = ss1.replace(/HTML/g, "javascript");
console.log(ss2);

// Without Regex
let str = "HTML HTML HTML";
console.log(str.replace("HTML", "JS"));

// trimming whitespace from string
// remove leading and trailing whitespaces using trim() method
let sss1 = "    learn javascript";
console.log(sss1);
let sss2 = sss1.trim();
console.log(sss2);

// string comparison in javascript:-
// there are some inbuilt methods that can be used to compare string such as equality operator and another like localeCompare() method
let name = "Vaibhav";
let name2 = new String("Vaibhav");
console.log(name == name2);
console.log(name === name2);
console.log(name.localeCompare(name2)); //0 means they are equal lexicographically)
// the equality operator (==) may return true when comparing a string object with a primitive string due to type coersion 
// the === strict equality returns false because objects and primitives are different types 
// the localeCompare() method compares string lexicographically 
