// is the another type of loop in javascript that is similar to the while loop , but with one key difference : the do-while loop guarantees that the block of code inside the loop will executed at least once , regardless of whether the condition is initially true or false .
let count = 1;
do {
  console.log(count);
  count++;
} while (count <= 5);
