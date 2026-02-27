// basic operation of a string
// you can find length of a string using the length property
// let s ='javascript';
// console.log(s.length);

// string concatentaion
// can combine two or more string using +
// let s1='java';
// let s2='script'
// console.log(s1+s2);

// escape characters
//  \' insert a single quote
//  \" insert a double quate
// \\ insert a backlash
// const s3=" \'GFG' is a learning protal"
// console.log(s3);
// const s4=" \"GFg\" is a learning protal"
// console.log(s4);
// const s5=" \\GFg\\ is a learning protal"
// console.log(s5);

// breaking ling string
// using backlash \ to break long string is not recommended , as it is not supported in strict mode. instead use template literals or string concatentaion
// const s6=" 'Geeksforgeeks' \ is a learnring portal";
// console.log(s6);

// find substring of a string
// we can extract a portion of a string using the substring() method
// let ss1='javascript Tutorial';
// String.substring(start: number, end?: number | undefined): string
// let ss2=ss1.substring(0,10);
// console.log(ss2);

// convert strign to uppercase and lowercase
// convert string to uppercase and lowercase usign toUpperCase and toLowerCase() methods
// let sss1='Javascript';
// let ucase=sss1.toUpperCase();
// let lcase=sss1.toLowerCase();
// console.log(lcase);
// console.log(ucase);

// string search in javascript
// find the first index of a substring within string using indexOf() method
// let sss3='def abc adc';
// let i =sss3.indexOf('abc');
// console.log(i);

// string replace in javascript
// replace occurance of substring using the replace() method
// by default, replace() only replaces the first occurance to replace all occurances , use a regular expression with the g flag
// let ssss1='Learn HTML at GFG and HTML is useful';
// let ssss2=ssss1.replace(/HTML/g, 'Javascript');
// console.log(ssss2);

// trimming whitespaces from string
// let ssss3='     learn javascript     ';
// console.log(ssss3);
// let ssss4=ssss3.trim();
// console.log(ssss4);

// access characters from string
// access individual char in a string using bracket notation and charAt method
// let ssss5='Learn javscript';
// let ss6=ssss5[6];
// console.log(ss6);
// let sss7=ssss5.charAt(6);
// console.log(sss7);

// string comparasion in javascript
// let ss8='vaibhav';
// let ss9=new String('vaibhav');

// console.log(ss8==ss9);
// console.log(ss8===ss9);
// console.log(ss8.localeCompare(ss9))
// 0 means they are equal lexicographically

// // passign javscript string as objects
// const str=new String("GeeksForGeeks");
// console.log(str);

// the string created by the new keyword is an object and is not same as normal string
// const str2=new String('vaibhav');
// const strr2='vaibhav';
// console.log(str2==strr2);
// console.log(str2===strr2);

// javascript string methods are of two types
// Instance methods → Called on a string value
// Static methods → Called on the String class itself

// static methods :- if the method is called using the string class itself then it is called a static method
// example :- fromCharCode(), fromCodePoint()
// | Method                   | What It Does                  |
// | ------------------------ | ----------------------------- |
// | `String.fromCharCode()`  | Converts char codes to string |
// | `String.fromCodePoint()` | Unicode support               |
// | `String.raw()`           | Used with template literals   |

// instance method:-if the method is called on an instance of a string then it is called an instance method
// These are methods available on string objects / string values.
// | Method          | What It Does          |
// | --------------- | --------------------- |
// | `toUpperCase()` | Converts to uppercase |
// | `toLowerCase()` | Converts to lowercase |
// | `slice()`       | Extract part          |
// | `substring()`   | Extract part          |
// | `includes()`    | Check existence       |
// | `indexOf()`     | Find position         |
// | `replace()`     | Replace text          |
// | `trim()`        | Remove spaces         |
// | `split()`       | Convert to array      |

// javascript string methods :-
// javascript provides a variety of built-in methods to work with strings-allowing you to extract , modify , search and format text with ease.

// slice():-
// this method extract a part of the string based on the given stating-index and ending-index and return a new string
let A = "Geeks for geeks";
let b = A.slice(0, 5);
// slice the string from 0 index to 4 index (5th index in ignored)
console.log(b);
let c = A.slice(6, 9);
console.log(c);
let d = A.slice(10);
console.log(d);

// substring():-
// substring return a part of given string from the start index to the end index
// indexing starts from xero (0)
// let str = "Mind, Power, Soul";
// let part = str.substring(6, 12);
// console.log(part);

// substr():-/ this method return the specified number of character from the specified index from the given string.
// it extracts a part of the original string
let str = "Mind, Power, Soul,";
let part1 = str.substr(13, 5);
console.log(str.substr(0, 5));
console.log(str.substr(4, 8));
console.log(part1);

// replace:-
// replace a part of the given string with another string or a regular expression
// the original string will remain unchanged
let str2 = "Mind, Power, Soul";
console.log(str2.replace("Power", "POWER"));

// reaplceAll:-
// replaceAll returns a new string after replacing all the matches of a string with a specified string or regular expression
// the original string is left unchanged after this operation
let str3 = "Mind, Power, Soul, Power";
console.log(str3.replaceAll("Power", "POWER"));

// toUpperCase():-
// this method converts all the characters present in the string to uppercase and returns a new string will all character in uppercase
// this method accepts single parameter stringvariable  string that you want to convert in upper case
let gfg = "geeks for geeks";
let GFG = gfg.toUpperCase();
// console.log(gfg.toUpperCase());
console.log(GFG);

// toLowerCase():-
// this method converts all the character present in the lower case and returns a new string with all the character in lowercase
console.log(GFG.toLocaleLowerCase());

// concate():-
// this method combines the text of two string and returns a new combbined or joined string
// to concatenate two string , we use concat() method on on obbject of string and send another object of string as a paramete
// this method accepts one argument
// the variable contains text in double quotes or single quotes
let gfg1 = "GFG ";
let geeks = "stands for GeeksForGeeks";
console.log(gfg1.concat(geeks));

// trim():-
// this method is used to remove either white spaces from the given string
// this method returns a new string with removed white spaces
// this method is called on string gobject and it does not accept any parameter
// Removes whitespace from the beginning and end
// ❌ Does NOT remove spaces in between words
let ex = "vaibhav shinde            ";
console.log(ex.trim());

// trimStart():-
// this removes whitespaces from the beginning of the string
// the value of string is not modified in any manner , including any whitespace present after the string
let str1 = "           soul";
console.log(str1);
console.log(str1.trimStart());

// trimEnd():-
// this removes white spaces from the end of string
// the value of string is not modified in any manner, including any white-space present before string
let myName = "vaibhav          ";
console.log(myName, myName.length);
console.log(myName.trimEnd(), myName.trimEnd().length);

// padStart():-
// this is the string with another string until it reaches the given length
// the padding is applied from left end of the string
let stone = "soul";
console.log(stone.padStart(9, "mind "));

// add more content from javascript string reference and intersting facts aboou string
