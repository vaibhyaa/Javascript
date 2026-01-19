// javascript string is a sequence of character , typically used to represent text 
// in javascript there is no char type , so single char string is used when we need a chart

// string in javascript are immutable 
// string are immutable since once a string is created it will reeive a reference in the memory and its value will never change
// this means that any opeartion on a string may give the new string without mutating the main string 
// there are some misconceptions that the string can be conversted to uppercase or lowercase but in reality , if we apply these methods to string the original string will not be changed instead a new string with applied changes will be returned which can be stored inside a new varible 
// so in general if we use any string method on string a new string object will e returned 

let str="Hello vaibhav";
console.log(str);
str.replace("hello","hiii..!");
console.log(str);
str[0]="HH"
console.log(str);

let str1=str.toUpperCase();
console.log(str1);




// create using literals 
// we can either use a single quote or a doube quote to create a string 
// we can use either of the two but it is recommended to be consistent with your choices throughtout your code 
// using single quote 
let s1='String'
console.log(s1);
let s2="double string"
console.log(s2);


// creating using constructor 
let s =new String("abcdef");
console.log(s);


// template literals (string interpolation )
// you can create string templates literals . Temaplate literals allow you to embed expression within backticks(` `) for dynamic string creation , making it more readable and versatile 
let s3='gfg';
let stringLiteral=`you are learnring from ${s3}`
console.log(stringLiteral);


// empty string 
// you can create empty string by assigning either single or double quotes with no char in between 
let s4=''
let s5=""

// muitiple strings(es6 and later)
// you can create a multiple string usin backticks (``) with tmplate literals
// the backticks allows you to span string across multiple lines , preserving the line breaks within the string 
let s6=`this is 
mutiple 
line string`
console.log(s6);
 

 

 
