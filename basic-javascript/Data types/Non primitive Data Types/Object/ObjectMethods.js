// object methods in javascript can be accessed by using functions .
// functions in javascript are stored as property values
// this object can also be called without using brackets ().

// in a method , this refers to the owner object
// additional information can also be added along with the object method

// objectName.methodName().
// properties:- a function may be divided into different property values , which are then combined and returned together
// examaple :- the student function contains the properties (name , class , section )

// return value :-
let student = {
  name: "vaibhav",
  company: "infosys",
  job: "developer",
  studentDetails: function () {
    return `I am ${this.name} working in ${this.company} as a software ${this.job}`;
  },
};

console.log(student);
console.log(student.studentDetails);
console.log(student.studentDetails());
