// basic operation of a string 
// you can find length of a string using the length property 
let s ='javascript';
console.log(s.length);


// string concatentaion 
// can combine two or more string using + 
let s1='java';
let s2='script'
console.log(s1+s2);

// escape characters 
//  \' insert a single quote 
//  \" insert a double quate
// \\ insert a backlash
const s3=" \'GFG' is a learning protal" 
console.log(s3);
const s4=" \"GFg\" is a learning protal" 
console.log(s4);
const s5=" \\GFg\\ is a learning protal" 
console.log(s5);



// breaking ling string
// using backlash \ to break long string is not recommended , as it is not supported in strict mode. instead use template literals or string concatentaion 
// const s6=" 'Geeksforgeeks' \ is a learnring portal";
// console.log(s6);
  

// find substring of a string 
// we can extract a portion of a string using the substring() method 
let ss1='javascript Tutorial';
// String.substring(start: number, end?: number | undefined): string
let ss2=ss1.substring(0,10);
console.log(ss2);



// convert strign to uppercase and lowercase
// convert string to uppercase and lowercase usign toUpperCase and toLowerCase() methods 
let sss1='Javascript';
let ucase=sss1.toUpperCase();
let lcase=sss1.toLowerCase();
console.log(lcase);
console.log(ucase);



// string search in javascript
// find the first index of a substring within string using indexOf() method 
let sss3='def abc adc';
let i =sss3.indexOf('abc');
console.log(i);

// string replace in javascript 
// replace occurance of substring using the replace() method 
// by default, replace() only replaces the first occurance to replace all occurances , use a regular expression with the g flag 
let ssss1='Learn HTML at GFG and HTML is useful';
let ssss2=ssss1.replace(/HTML/g, 'Javascript');
console.log(ssss2);


// trimming whitespaces from string 
let ssss3='     learn javascript     ';
console.log(ssss3);
let ssss4=ssss3.trim();
console.log(ssss4);



// access characters from string 
// access individual char in a string using bracket notation and charAt method
let ssss5='Learn javscript';
let ss6=ssss5[6];
console.log(ss6);
let sss7=ssss5.charAt(6);
console.log(sss7);


// string comparasion in javascript 
let ss8='vaibhav';
let ss9=new String('vaibhav');

console.log(ss8==ss9);
console.log(ss8===ss9);
console.log(ss8.localeCompare(ss9))
// 0 means they are equal lexicographically 



// passign javscript string as objects
const str=new String("GeeksForGeeks");
console.log(str);

// the string created by the new keyword is an object and is not same as normal string 
const str2=new String('vaibhav');
const strr2='vaibhav';
console.log(str2==strr2);
console.log(str2===strr2);



// javascript string methods are of two types 
// static methods :- if the method is called using the string class itself then it is called a static method 
// example :- fromCharCode(), fromCodePoint()


// instance method:-if the method is called on an instance of a string then it is called an instance method 



// add more content from javascript string reference and intersting facts aboou string  
 


