// we are using the for loop in which the execution of a set of instructions repeatedly until some condition evalutes and becomes false
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let x = 2; x <= 4 ; x++) {
// 	console.log('value of x : ' , x);
// }

// for loop to print table of a number
// let number =5;
// for (let i = 1; i <= 10; i++) {
// 	console.log(number *i);
// }

// let arr=[10,20,30,40];
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }


// statement 1 is used to initialize the counter varible. A counter variable is used to keep track of the number of iterations in the loop 
// you can initialize mutiple counter variables in statement 1
// let x = 2;
// for (; x <= 4; x++) {
//   console.log(x);
// }



// statement 2:- testing condition 
// the statement checks the boolean value of the testing condition. if the testing condition is true , the for loop will execute further , otherwise loop will end an dthe code outside th eloop will be executed . it is executed every time the for loop runs before the loop enters its body.
// this is also an optional statement and javascript treats is as true if left blank.
// if this statement is omitted , the loop runs inddfinitely if the loop control isnt broken using the break statement . it is explained below in the example 


// let y=3;
// for (;  ;y++) {
// 	console.log(y);
// 	break ;
// }




// undating Counter Variable :-
// it is controlled statement that controls the 
const subjects=['Maths','Science','Polity','History'];
let i=0;
let len=subjects.length;
let gfg='';
for (; i < len;) {
	gfg+=subjects[i];
	i++;
}

console.log(gfg);
