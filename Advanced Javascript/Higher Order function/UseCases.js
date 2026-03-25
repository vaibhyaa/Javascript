// use cases of highr order functions :-
// 1) passing functiosn as arguments :-
// we define a higher-order-function called greet that accepts a callback function as an argument and executes it
function greet(name, callback) {
  console.log("Hello, ", name);
  callback();
}

greet("vaibhav", function () {
  console.log("goodbye..!");
});
// function as arguments: greet accepts another function as a callback, demonstrating the ability to pass function as arguments
// sequence control : it first logs a greeting message and then executes the callback, showing how actions can be performed in specific order
//modularity and reusablity : by seperating the greeting and goodboy actions , the pattern allows fexibility and reusability , enabling different callbacks to be passed as needed






// returning function from functions :-
// higher order function can also return function. this enables the creation of more dynamic behavior
function mul(factor) {
  return function (num) {
    return num * factor;
  };
}
console.log(mul(5)(6));
// function factory: mul returns a new function based on the provided factor, demonstaring the ablity to create dynamic , parameterized function.
// the closure in action : the returned function used the captured factor to perform multiplication, showcasing the power of closures to retain acces to external varibales 
// reusability and customization : this pattern simplifies creating reusable multipliers , enabling efficient and customizable solutions with minimal effort 


