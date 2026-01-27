// the switch statement evaluates an expression and executes code based on matching cases, It an afficient alternative to multiple if-else statement , improving readability when handling many conditions
// how the switch statement works :-
// evaluation :- the expression is evaluated once.
// comparison :- the value of the expression is compared against each case.
// execution :- the block under the matching case runs, if no match , the default block executes (if present )
// break: stops further execution eithin the switch block .
// default :- runs if no cases match . its optional but provides a fallback option.

let day = 13;
let dayname;

switch (day) {
  case 1:
    dayname = "monday";
    break;
  case 2:
    dayname = "tuesday";
    break;
  case 3:
    dayname = "wednesday";
  // break;
  case 4:
    dayname = "thursday";
    break;
  case 5:
    dayname = "friday";
    break;
  case 6:
    dayname = "saturaday";
    break;
  default:
    dayname = "invalid day";
    break;
  case 7:
    dayname = "sunday";
    break;
}

console.log(dayname);
// day is set to 3
// the switch statement evaluates day.
// since day is 3 , the case 3 the block is executed , assigngin 'wednesday' to dayname.
// the break, statement ends the switch statement , preventing execution from continuing into other cases

// break keyword:-
// the break keyword is used to terminate the execution of a loop or a switch statement .
// once break us encountered, the programm will exit the current block  and no further code within the block will be executed
let grade = "b";
let result;

switch (grade) {
  case "a":
  case "b":
  case "c":
    result = "grade is good";
    break;
  case "d":
    result = "grade is poor";
    break;
  default:
    result = "no grade achieved";
    break;
}
console.log(result);
