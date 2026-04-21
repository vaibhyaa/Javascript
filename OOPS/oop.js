// object-oriented programming is javascript is a programming based on objects that contain data (properties) and behavior (methods)
// it helps organize code in a reusable and modular way
// used objects and prototye/classes to structure code logically
// supports key concepts like encapsulation , inheritance, and polymorphism
// improves code reusability, scalibility , maintainability

// need of OOP:-
// changing in one teams's code causing other codes to break. Hence difficult to maintain
// large number of parameters during function calls
// difficult to divide and maintain code across teams
// limited code reusability
// object oriented programming solves these problems by combaining data and the function that operate on it into single unit called an object.

// encapsulation :-
// ensures that one team can change data repreentation and algorithms without causing other teams code change
// inheritance :-
// ensures code reuse
// polymorphism:-
// allows object to behave differently using the same interface
//Abstraction :-
// Hide the internal implementation details and show only the essential features to the user.

// OBJECTS :-
// AN OBJECT IS a collection of data (properties) and action (methods) stored as key value pair.
// properties :- holds values like string , number , or even other object
// methods:- are function inside the object that define what it can do

// CLASSES :-
// a class is a blueprint for creating object with specific properties and methods.
// a class itself doesnot hold values, it describes what an object shoud have and do
// you create actual object from a class using new keyword.

class Car {
  constructor(brand, model) {
    // properties
    this.Objbrand = brand;
    this.Objmodel = model;
  }

  // method
  // not alloewd object literal syntax
  showDetails() {
    return `This car brand is a ${this.Objbrand} and model is ${this.Objmodel}`;
  }
}

const c1 = new Car("skoda", "slavia");
const c2 = new Car("Hinda", "civic");

console.log(c1);
console.log(c1.showDetails());





// abstraction:- 
// it is one of the key features of object-oriented-programming in javascript
// it means showing only the essential information and hiding unncessary details from the user.
// data absraction refers to exposing only what is necessary to interact with the object while keeping the background details or logic hidden 

// encapsulation :-
// it is defined as wrapping up data and information under a single unit.
// in OOP, encapsulation is defined as binding together the data and the functions that manipulate them together in class 

// inheritance :-
// the capability of a class to derive properties and characterstics from another class is call inheritance 
// Sub-class :- the class that inherit properties from another class is called the sub class or derived class 
// super-class :- the class properties are inherited by sub-class is called base-class or super-class 

// polymorphism:-
// the word polymorphism means many forms.
// we can define polymorphism as the ability of an entity to behave different in different scenarios 
// person at same time can have different characteristics 