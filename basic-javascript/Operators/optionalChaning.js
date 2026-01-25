// optional chaining (ES 2020) simplifies safe access to deeply nedted onject properties by preventing errors when values are null or defined
// optional chaining (2020) safely accesss properties or calls funciton on null or defined properties
// safely access nested properties without runtime errors
// eliminates the need for explicit null or undefined checks
// improve code readability and cleanliness

// accessing neted properties with optional chaining
// when working with deeply nested , tree-like object structure , developers must ensure intermediate properties exist to prevent runtime errors.
// missing properties can cause typeerror
// optional chaining helps safely access nested values

// simplified nested access with optional chaining
// the optional chaining operator allows a developer to handle many of those cases without repeating themselves by assigning intermediate reults in temporary variables

// let value =user.dog?.name;

// obj?.prop
// obj?.[expr]
// arr?.[index]
// func?.(args)
// const user={
// 	dog:{
// 		name:'alex',
// 	}
// }
// console.log(user?.dog?.name);

// demonstrate the optional chaining with funciton call in javascript
let user1 = () => console.log("alex");

let user2 = {
  dog() {
    console.log("i am alex");
  },
};

let user3 = {};

user1?.();
user2?.dog?.();
// user3.dog()
// this will causes a typeerror because dog does not exist on user3, so javascript cannot call it as a funciton
// user3?.dog?.()
// using optional chaining with function call (user3.dog?.()) safely skips the call when the funciton is undefined , preventing the error

const obj = { name: "vaibhav", address: { city: "pune" } };
console.log(obj.name);
console.log(obj.address.city);

console.log(obj?.address?.city?.pincode);
