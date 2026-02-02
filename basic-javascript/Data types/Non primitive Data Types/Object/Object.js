// non-Primitive data types are objects and they store collections of data and more complex entities

// object :-
// Represents key-value pairs and can store multiple values as properties
// an object is a dynamic data structure that stores related data as key-value pairs, where each key uniquely identifies its corresponding value
// the value of properties can be primitive , ojects or function (kown as methods when inside objects)
// object are mutable ,dyanmic properties can be added , modified or deleted at any time after creation
// objects allow data grouping and encapsulation , making it easier to manage related information and behavior together
let person = {
  name: "Vaibhav",
  age: 23,
  phoneNo: 1234567890,
};

// two ways to create objects :-
// 1) object literals :- using curly braces {} to define key-value pairs directly

let obj = {
  name: "vaibhav",
  age: 23,
  city: "pune",
};
console.log(obj);

// 2) using the Object() constructor :- using the built-in Object() function to create an empty object and then adding properties to it
let obj2 = new Object();
obj2.name = "vaibhav";
obj2.age = 23;
obj2.city = "pune";

console.log(obj2);

// accessing object properties :-
// 1) dot notation :- using the dot (.) operator followed by the property name
console.log(obj2.name);
console.log(obj2.age);

// 2) bracket notation :- using square brackets ([]) with the property name as a string(always put string in quotes inside the  brackets)
console.log(obj2["city"]);

// adding and modifying properties :-
obj2.color = "red";
console.log(obj2.color);

obj2.name = "vaibhav shinde";
console.log(obj2);

// removing properties :-
delete obj2.age;
console.log(obj2);

// checking property existence :-
console.log("name" in obj2);
console.log("hoobies" in obj2);

// iterating over properties :-
for (let key in obj2) {
  console.log(key + ":", obj2[key]);
}

// mearging objects :-
// objects can be merged using Object.assign() or the spread operator (...)
let obj3 = { city: "Pune" };
let obj4 = { country: "india" };
let mergedObj = { ...obj3, ...obj4 };
console.log(mergedObj);

// object length :-
// you can find the number of properties in an object by using Object.keys()
console.log(Object.keys(mergedObj).length);

// common Mistakes with javascript objects :-
// difference between {} and new Object()
// using Object Literal {} : this is the most common and simple way to create objects
// usign the Object() constructor : this uses javascript built-in Object constructor to create objects
// object literal :-
let obj5 = { key1: "value1", key2: "value2" };

// object constructor :-
let obj6 = new Object();
obj6.key1 = "value1";

console.log(obj5, obj6);

// difference bet {} and new Object():-
// Ease of Use:-
// {} More concise and easier to read and write
// new Object() More verbose and less commonly used
// Performance:-
// {} Generally faster due to its simplicity and more efficient memory usage.
// new Object() Slightly slower because it involves a function/constructor call.
// Prototypal inheritance:-
// directl inherits from Object.prototype
// new Object() also inherits from Object.prototype but involves an additional step of constructor invocation and adds extra level of abstraction
// constomization:-
// {} literal syntax is sufficient for most use cases and allows for quick creation of objects with predefined properties
// new Object() can be used in rare scenarios where you need to create objects with specific prototypes or when working with advanced object-oriented programming patterns

// key difference between map and Object :-

// javascript object constructor:-
// an object in javascript is a collection of related data and functionality stored as key-value  pairs , where value can be variables or function (methods)
// object group related properties and behavior into a single structore
// all javascript values are object except primitive types (string , number , boolean , null , undefined , symbol)

const gfg = {
  subject: "programming",
  language: "javascript",
};
// gfg is an object created using object literal syntax
// subject is a key with value programming
// language is a key with value 'javascript'
// each key-value pair represents a property of the gfg object

// object constructor:-
// a constructor function is javascript is a special function used with the new keyword to create and initialize objects of specific type , allowing multiple instances with similar structure but unique properties
// used with the new keyword to create object instances
// initializes object properties and methods
// helps create multiple objects of the same type effectively
// each instances has its own seperate data while sharing the same blueprint

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`My name is ${this.name} and i am ${this.age} years old`);
  };
}

// creating instances with a constructor
const person1 = new Person("akash", 30);
const person2 = new Person("vaibhav", 27);
console.log(person1);
person1.sayHello();
console.log(person2);
person2.sayHello();

// this keyword :-
// this keyword in javascript refers to the object associated with the current execution context , similar to OOP like c++ , c# and java.
// its value depends on how function is called

// adding Property to an object :-
// property can be added to the object by using dot(.)
person1.phoneNo = 987654321;
console.log(person1);

// using square bracket :-
person1["country"] = "india";
console.log(person1);

// adding properties in aconstructor funciton :-
// subject is the property and javascript is its value , and properties in  constructor must be defined inside the condtructor itself
// subject acts as the key , while 'javascript' is the assigned value
// new properties cannot be added like object properties and must be declared within the constructor .
// function gfg(a,b,c){
// 	this.A=a;
// 	this.B=b;
// 	this.C=c;
// this.n=function (){
// return this.A + this.B}
// }

// exapmples of object :-
// 1)
let object1 = new Object();
object1.subject = "javascript";
object1.course = "gfg.com";
console.log(object1);
console.log(object1.subject);
console.log(object1.course);

// 2)
let object2 = {};
object2["subject"] = "maths";
object2["course"] = "maths.com";
console.log(object2);
console.log(object2.subject);
console.log(object2.course);

// 3)
let object3 = new Object();
object3.subject = "history";
object3.course = "history.com";
console.log(object3);
console.log(object3.subject);
console.log(object3.course);

// 4)
let object4 = {};
object4.subjectA = "science 1";
object4.subjectB = "science 2";
object4.scienceSub = science;

function science() {
  return object4.subjectA + " " + object4.subjectB;
}

console.log(object4);
console.log(object4.scienceSub());
