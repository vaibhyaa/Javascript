// Bitwise AND Operator (&):-
// performs a bitwise AND operation on each pair of corresponding bits of two numbers
console.log(5 & 3); // 1 (binary: 101 & 011 = 001)
console.log(7 & 5); // 5 (binary: 111 & 101 = 101)

// Bitwise OR Operator (|):-
// performs a bitwise OR operation on each pair of corresponding bits of two numbers
console.log(5 | 3); // 7 (binary: 101 | 011 = 111)
console.log(4 | 1); // 5 (binary: 100 | 001 = 101)

// Bitwise XOR Operator (^):-
// performs a bitwise XOR operation on each pair of corresponding bits of two numbers
console.log(5 ^ 3); // 6 (binary: 101 ^ 011 = 110)
console.log(7 ^ 5); // 2 (binary: 111 ^ 101 = 010)

// Bitwise NOT Operator (~):-
// inverts the bits of a number (0s become 1s and 1s become 0s)
console.log(~5); // -6 (binary: ~0000...0101 = 1111...1010)
console.log(~0); // -1 (binary: ~0000...0000 = 1111...1111)


// Left Shift Operator (<<):-
// shifts the bits of a number to the left by a specified number of positions
console.log(5 << 1); // 10 (binary: 0000...0101 << 1 = 0000...1010)
console.log(3 << 2); // 12 (binary: 0000...0011 << 2 = 0000...1100)

// Right Shift Operator (>>):-
// shifts the bits of a number to the right by a specified number of positions
console.log(10 >> 1); // 5 (binary: 0000...1010 >> 1 = 0000...0101)
console.log(12 >> 2); // 3 (binary: 0000...1100 >> 2 = 0000...0011)


// Unsigned Right Shift Operator (>>>):-
// shifts the bits of a number to the right by a specified number of positions, filling the leftmost bits with zeros
console.log(-5 >>> 1); // 2147483645 (binary: 1111...1011 >>> 1 = 0111...1101)
console.log(-1 >>> 2); // 1073741823 (binary: 1111...1111 >>> 2 = 0011...1111)
console.log(5 & 3);
console.log(5 | 3);
console.log(5 ^ 3);
console.log(~5);
console.log(5 << 1);
console.log(10 >> 1);
console.log(-5 >>> 1);
console.log(-1 >>> 2);
console.log(7 & 5);
console.log(4 | 1);
console.log(7 ^ 5);


// practical use cases of bitwise operators :-
// 1) low-level programming :- bitwise operators are used in low-level programming tasks such as device drivers , embedded systems , and operating systems where direct manipulation of bits is required
// 2) performance optimization :- bitwise operations are generally faster than arithmetic operations , so they can be used to optimize performance-critical code
// 3) data compression :- bitwise operators are used in data compression algorithms to manipulate individual bits and reduce the size of data
// 4) cryptography :- bitwise operators are used in cryptographic algorithms to perform operations on binary data and enhance security
// 5) graphics programming :- bitwise operators are used in graphics programming to manipulate pixel data and perform operations such as masking , blending , and color manipulation
// 6) network programming :- bitwise operators are used in network programming to manipulate IP addresses , subnet masks , and perform bit-level operations on network packets
