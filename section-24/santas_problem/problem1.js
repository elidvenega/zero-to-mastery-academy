// going to use fs module
// framework
/* 
1.Understand
// Santa's snow machine does not work so need to solve 1st puzzle
// Understand the puzzle been given to me
2.Plan
// Read on fs module
// Use a function to solve problem
// Watch Udemy video agin for instructions
3.Divide
// Break code into smaller parts
4.Stuck start over again
*/

/* Solution
final Santa floor = (all the time Santa goes up) -
 (all the time Santa goes down)
*/

// santa's snow machine does not work need to solve 1'st puzzle
// too collect stars need to solve 2 puzzles
// Understand how fs module works
// Read documentation

const fs = require("fs");

fs.readFile("./challenge.txt", "utf-8", (err, data) => {
  console.log(data);
});
