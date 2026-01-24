// Comparasion Operators in JavaScript are used to compare two values and return a boolean result (true or false) based on the comparison. Here are the most commonly used comparison operators:

// Equality Operators:-
// == (loose equality) :- compares two values for equality after converting both values to a common type
console.log(5 == '5'); // true
// === (strict equality) :- compares two values for equality without converting their types
console.log(5 === '5'); // false
// check against null and undefined
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(NaN==NaN); // false
console.log(NaN===NaN); // false
console.log(0==false);
console.log(0===null);



// Inequality Operators:-
// != (loose inequality) :- checks if two values are not equal after type conversion
console.log(5 != '6'); // true
// !== (strict inequality) :- checks if two values are not equal without type conversion
console.log(5 !== '5'); // true
console.log(NaN!=NaN); // true
console.log(NaN!==NaN); // true
console.log(0!=false);
console.log(0!==false);
console.log(0!=null);
console.log(0!==null);


// greater than and less than Operators:-
// > (greater than)
console.log(10 > 5); // true
console.log(5>'5'); // false
 
// < (less than)
console.log(5 < 10); // true
console.log('3'<5); // true

// >= (greater than or equal to)
console.log(10 >= 10); // true
console.log(7>='7'); // true

// <= (less than or equal to)
console.log(5 <= 10); // true
console.log('8'<=8); // true




