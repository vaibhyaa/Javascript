// null indicates the deliberate absence of any object value
// its primitive value that denotes the absence of a value or servers as a placeholder for an object that isnt present
// null differs from undefined which signifies a variable that has been declared but hasn't been assigned a value

let number = null;
console.log("Type of number is : ", typeof number);

// null in javascript :-
class Square {
  constructor(length) {
    this.length = length;
  }
  get area_of_square() {
    return Math.pow(this.length, 2);
  }

  static create_function(length) {
    return length > 0 ? new Square(length) : null;
  }
}


let variableOne=Square.create_function(10);
console.log(variableOne);

let variableTwo=Square.create_function();
console.log(variableTwo);





// exmaple that will illustrate Null in javascript 
// null is falsy value 
const var1=null;
if (var1) {
	console.log('Var1 is not null');
} else {
	console.log('var1 is null');
}


// key Takeover :-
// null is falsy value 
// it represent the intentional absence of an object value 
// Use it wisely in your code to convey specific menaings 