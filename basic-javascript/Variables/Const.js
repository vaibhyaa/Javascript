

// const keyword
// modern way to declare variables , introduced in ES6 
// it is used to declare varibles whose values need to remain constant throughtout the lifetime of application 
// const is block-scoped , sismilar to let and is useful for ensuring immutability in your code.
// unlike let the primary feature of const i sthat it cannot be reassigned once it has been initialized 
// const is used to declare a variable and assign a value to it.
// after initialization , the value of const variable cannot be reassigned 

// const keyword is javascript used to declare variables and it is lock-scoped, immutable binding that cant be reassigned / changed through object can still mutated (important)

// key feature of const :-
// block scope :-
// variables declared woth const are block-scoped, which means they are accessible only within the block , statement , or expression in which they are defined 
// the variable x is declared with const inside a block and its value 10 is logged within the block 
// const x;
// console.log(x);
// trying to access x outside the block caues an error because const varibles are block-scoped 


// no reassignment :-
// variables declared with const cannot be reassigned after their declaration. 
// attempting to do so results in a typeError 
// the variable y is declared with const assigned a value of 20.
// attempting to reassign y to 30 results in a type errror const varaibles cannot be reassiged 


// must be initialized :-
// ulike let a const variable must be initialized at the time of declaration .
// declaring a const varible without assigning a value will throw a syntaxerror 
// this variable z is declared with const but it is missing an initial value
// causes a syntax erro because const requires as initializer a value at the time of declaration 


// immutable binding , not value :-
// const makes the variable binding immutable , but most important is if the value is an object or array , you can still modify its properties or contents 

// const obj ={name:'Vaibhav'}
// console.log(obj);
// obj.name="Vaibhav shinde"
// console.log(obj);
// const arr=[1,2,34];
// console.log(arr);
// arr.push(44);
// console.log(arr);

// this above code shows that although obj and arr are declared with const , their properties and elements can still be modified 
// this object property name and array ele are successfully changed ,imp is that  demonstrating that const applies only to binding , not the contents  


// no redeclaration :-
// varibles declared with const cannot be redeclared within the same scope , similar to let 
// declaring a with const causes a syntaxerror because it is already defined.
// const prevents redeclaring variable in the same scope


// suitable for const :-
// the const keyword in ideal for defining constants or variables whose values should not change during the programs execution 
// const PI= 3.14159;
// CONST variables cant be changed 


// safer with function :-
// using const with funcitons ensures that the function reference cannot be reassigned ,
// thought the function itself can still be executed normally ,
// const greet=()=>console.log('Helloo javascript...!');
// greet();
// greet=()=>console.log('Hello vaibhav...!');
// greet();


// integration with modern javascript :-
// const aligns with modern javascript practices , supportig features like destructuring and modules for cleaner , maintainable code 



// intresting facts about const :-
// block scoped 
// immutabel binding 
// objects and array 
// hoising 
// used with destructuring 


// const ac='5'
// const bc="Vaibhav"
// console.log(ac, bc);
