// function overloading is a feature found in many object-oriented programming languages
// where mutiple functions can have the same name but different parameters (number, type, or both).
// in javascript , if two or more function share the same name, the last defined function will overwrite the previous ones, and only the last function will be executed when called.
// this is because javascript treats functions as first-class objects  and subsequent function with the same name simply reassigns the function reference.

// example
// function foo(par1) {
// 	console.log(par1);
// }

// function foo (par1, par2) {
// 	console.log(par1, par2);
// }

// foo('Hello');
// javascript does not natively support function overloading

class foo {
  overloadableFunction() {
    // define 3 overloaded funciton
    let funciton1 = function (args1) {
      console.log("funciton called with args :" + args1);
    };

    let funciton2 = function (args1, args2) {
      console.log("funciton called with args :" + args1 + " and " + args2);
    };

    let funciton3 = function (args1) {
      let concatenated_argu = "";
      for (let i = 0; i < args1.length; i++) {
        concatenated_argu = concatenated_argu + args1[i];
      }
      console.log("funciton called with args :" + concatenated_argu);
    };

    if (arguments.length === 1 && Array.isArray(arguments[0])) {
      return funciton3(arguments[0]);
    } else if (arguments.length == 2) {
      return funciton2(arguments[0], arguments[1]);
    } else if (arguments.length === 1 && !Array.isArray(arguments[0])) {
      return funciton1(arguments[0]);
    }
  }
}

let obj = new foo();
obj.overloadableFunction("geeks");
// console.log(obj.overloadableFunction('geeks'));
obj.overloadableFunction("geeks", "for");
// console.log(obj.overloadableFunction('geeks','for'));
obj.overloadableFunction(["geeks", "for", "geeks"]);
// console.log(obj.overloadableFunction(['geeks','for','geeks']));


// javascript does not support function overloading in the traditional sense, but we can achieve similar functionality by using techniques such as checking the number and type of arguments passed to a function and executing different code based on that.