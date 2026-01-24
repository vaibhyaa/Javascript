// Assignment Operator:-
// used to assign values to variables
let a = 10; // assigns the value 10 to variable a
console.log(a); //10


console.log(a==10);


// Addition Assignment Operator (+=):-
// adds the right operand to the left operand and assigns the result to the left operand
a += 5; // equivalent to a = a + 5
console.log(a); //15

// Subtraction Assignment Operator (-=):-
// subtracts the right operand from the left operand and assigns the result to the left operand
// equivalent to a = a - 3
a -= 3;
console.log(a); //12


// Multiplication Assignment Operator (*=):-
// multiplies the left operand by the right operand and assigns the result to the left operand
// equivalent to a = a * 2
a *= 2; 
console.log(a); //24

// Division Assignment Operator (/=):-
// divides the left operand by the right operand and assigns the result to the left operand
// equivalent to a = a / 4
a /= 4;
console.log(a); //6



// Remainder Assignment Operator (%=):-
// calculates the remainder of the division of the left operand by the right operand and assigns the result to the left operand
// equivalent to a = a % 4
a %= 4;
console.log(a); //2


// Exponentiation Assignment Operator (**=):-
// raises the left operand to the power of the right operand and assigns the result to the left operand
// equivalent to a = a ** 3
a **= 3;
console.log(a); //8



// left shift Assignment Operator (<<=):-
// shifts the bits of the left operand to the left by the number of positions specified by the right operand and assigns the result to the left operand
// equivalent to a = a << 1
a <<= 1;
console.log(a); //16


// right shift Assignment Operator (>>=):-
// shifts the bits of the left operand to the right by the number of positions specified by the right operand and assigns the result to the left operand
// equivalent to a = a >> 2
a >>= 2;
console.log(a); //4

// Bitwise AND Assignment Operator (&=):-
// performs a bitwise AND operation on the left and right operands and assigns the result to the left operand
// equivalent to a = a & 3
a &= 3;
console.log(a); //0



// Bitwise OR Assignment Operator (|=):-
// performs a bitwise OR operation on the left and right operands and assigns the result to the left operand
// equivalent to a = a | 2
a |= 2;
console.log(a); //2


// Logical AND Assignment Operator (&&=):-
// performs a logical AND operation on the left and right operands and assigns the result to the left operand
// equivalent to a = a && 5
a &&= 5;
console.log(a); //5

// Logical OR Assignment Operator (||=):-
// performs a logical OR operation on the left and right operands and assigns the result to the left operand
// equivalent to a = a || 10
a ||= 10;
console.log(a); //5

// Nullish Coalescing Assignment Operator (??=):-
// assigns the right operand to the left operand only if the left operand is null or undefined
// equivalent to a = a ?? 20
a ??= 20;
console.log(a); //5