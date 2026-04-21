// in javascript, classes and object are basic concept of opps that are used to represent real-world concepts and entities
// a class is a template to create objects having similar properties and behavior, or in other words, we can say that a class is blueprint for objects
// an object is an instance of class

// class :-
// a class in javascript is a blueprint used to create objects that share similar properties and methods

// constructor method :-
// the constructor is a special method inside a javascript class that executes automatically when new object is created using the new keyword.
// it is primarly used to initialize the objects initial state.
// assign and initializes instance properties using this.
// Runs automatically once during object creation.

// Creating a javascript class:-
// a javascript class is created using the class keyword to define a blue print for objects

// example:-
// class Dog {
//   // class property
//   static sound = "bark";
//   constructor(name, breed) {
//     // instance property
//     this.ObjName = name;
//     this.ObjBreed = breed;
//   }
//   //defining method
//   bark() {
//     return `${this.ObjName} says ${Dog.sound}`;
//   }
// }
// // static sound :- belongs to class itself
// // this.name: belongs to each individualy object (instance).

// // creating object (instance):-
// const myDog = new Dog("Rayne", "husky");
// console.log(myDog);
// console.log(myDog.bark());

// | Type              | Syntax                  | Belongs to            |
// | ----------------- | ----------------------- | --------------------- |
// | Instance property | `this.ObjName = name`   | Each object           |
// | Static property   | `static sound = "bark"` | Class itself          |
// | Access instance   | `this.ObjName`          | Inside object methods |
// | Access static     | `Dog.sound`             | Through class name    |

// Class Getters and Setters
// we can use getter and setter methods to get the value of an object and set value of an object
// we can use the get keyword for getter method and the set keyword for the setter methods

class Dog {
  constructor(name) {
    this.name = name;
  }
  // getter methods
  get dogName() {
    return this.name;
  }

  // setter method
  set dogName(newName) {
    this.name = newName;
  }

  // regular method
  bark() {
    return `${this.name} says woof..!`;
  }
}

let myDog = new Dog("Rayne");
console.log(myDog.name);

myDog.dogName = "buddy";
console.log(myDog.name);
console.log(myDog.bark());

// object :-
// an object in javascript is an instance of a class that represents a real-world entity
// it holds its own data and can access methods defined within its class

//each object contains unique values for its instance properties
// multiple objects can be created from the same class blueprint

// Access Modifiers in javascript :-
// the main purpose of access modifiers is to control and restrict access to members of a class.
// this encapsulation ensures data integrity, security and helps adhere the principles of least privilage
// access modifiers also improve code maintainanility and collabaration between team members. By explicitly definning who can access and modify class members, you minimize unexpected side effect and improve code clarity

// Types of Access Modifiers :-
// Public
// Private
// Protected

// Public access modifier :-
// members marked as public can be access from anywhere
// public members are the default in javascript classes. They are accessible in and out of the classroom.

// class Person {
// 	constructor(name) {
// 		this.name=name
// 	}
// 	introduce(){
// 		return `Hello , my name is ${this.name}`
// 	}
// }
// const person1= new Person('vaibhav');
// console.log(person1);
// console.log(person1.name);
// console.log(person1.introduce());

// private access modifier :-
// marked as private are only accessible within the class itself.
// Private members are marked with the # symbol
// these members are only accessible from within the class itself. They are invisible to external code.
// Private members provide encapsulation and ensure that the internals of a class remain hidden

class Person {
  // private member
  #name;
  constructor(name) {
    this.#name = name;
  }
  #sayHello() {
    return `Hello , my name is ${this.#name}`;
  }
  introduce() {
    // accessing a private method
    return this.#sayHello();
  }
}
const person1 = new Person("vaibhav");
console.log(person1.introduce());
// console.log(person1);
// console.log(person1.#name);
