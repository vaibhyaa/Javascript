// it is a built-in object that returns while numbers larger than (2^{53}-1)
// it is created by appending n to an integer literal or by calling the BigInt() function with an integer or string value .
// it allows precise arithmetic with integers beyond the safe integer limit of regular numbers 


// creating BigInt using BigInt() function:-
let bigNum=BigInt('1234222222222222222222222222222222222222222222222222222222222')
console.log(bigNum);

let bigHex=BigInt("0x1ffffffeeeeeeeeef");
console.log(bigHex);


let bigBin=BigInt("0b101010100010101010100011111111111111");
console.log(bigBin);

// sorting 
// an array can hold both primitive data type and bigint 
// this allows the sort() method to work when both normal Number and BigInt values are present in the array 


// usage recommendation 
// coercion:- coercing between Number ad BigInt can lead to loss of precision, it is recommended to only use BigInt when values greater that 253 are reasonably expected and not to coercr between the two types 

// cryptograpthy:-
// the operation supported on bigInt are not constant time. BigInt is therefore unsuitable for use in cryptography  
