// ifelse 
// javascrript conditional statements allows programs to make decisions based on specific conditions.
// they control the flow of execution , enabling different actions for different scenarious 

// javscript if statement 
// it is conditional statement that determines wheather a specific actio or block of code will run based on condition.
// if the condition is true , the code executes . if false it does not 
let age=19;
if (age>18) {
	console.log("Congratulations, You are eligible to drive ...!");
}



// javascript if-else statement 
// allows you to execute one block of code if the condition is true and another block if the condition is false 
// its way to handle two possible outcomes based on a condition 

let i=10;
if (i<15) {
	console.log('i is less than 15 ');
} else {
	console.log('i am not in if block ');
}


// javascript nested if-else statemant 
// javascript lets you put an if statement inside another if statement 
// this is called nested if , where one if or else is inside another 

let j=10;
if (j==10) {
	if (j<15) {
		console.log('j is less than 15');
		if (i<12) {
			console.log('j is smaller than 12 also ');
		} else {
			console.log('j is greater than 15 ');			
		}
	}
} 


// javascript if-else-if statement 
// the if-else-if ladder is used to check multiple conditions in sequence. Once a true condition is found , its block is executed , and the rest are skipped 

let a=20;
if (a==10) {
	console.log('a is 10 ');
} else if(a==15){
	console.log('a if 15');
} else if(a==20){
	console.log('a is 20');
} else {
	console.log('a is not present ');	
}