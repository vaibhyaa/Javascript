// javascript relational operator are used to compare its operands and determine the relationship between them . they return a boolean value (true or false ) based on the comparasion result 

const obj={length:10};
// in checks if the property exists in an object 
console.log("length" in obj);
// instanceof checks if an object is an instance of a constructor 
console.log([] instanceof Array);


// in-operator
const language=['html','css','javascript'];
console.log(1 in language);  //true



// using in with objects 
let myString =new String();
let myDate=new Date();
console.log(myString instanceof Object);
console.log(myString instanceof Date);
console.log(myString instanceof String);

console.log(myDate instanceof Object);
console.log(myDate instanceof Date);
console.log(myDate instanceof String);






