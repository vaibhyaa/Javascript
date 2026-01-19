// symbols are new primitive buit-in object types introduced as art of ES6 
// symbol return unique identifiers that can be used to add unique property keys to an object that wont collide with keys of any other code that moght add the object 
// they are used as object properties that cannot be recreated 
// it basically helps us to enable encapsulation or information hiding 
// Symbol( optional_string)

// parameter :- the optional_string is an optional pamarameter that acts as description of Symbol();
let symbol1=Symbol("Geeks");
let symbol2=Symbol("Geeks");
// returns a new Symbol object 
console.log(symbol1==symbol2);
