// thie for .. in loop in javascript is used to iterate over the enumerable properties of an object.
// it provides an easy access eack key (property name ) one by one 
// iterates over object property name(keys) rather than values 
// commonly used for looping throught objects , not array 
// can access property values using bracket notation inside the loop 

const car={
	make:'toyota',
	model:'corolla',
	year:2020
}

for (const key in car) {
	console.log(`${key} : ${car[key]}`);
}

// important facts about for....in
// the for..in loop is not recommanded for use with array if maintaining index orfer in important 
// the order of iteration in for..in loop is implementation-dependent , means the array ele may not be accessed in the execepted sequence .
// the order in which properties are iterated may not match the properties that are defined in the object 
