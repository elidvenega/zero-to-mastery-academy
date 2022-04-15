/* 
1.Understand
// Santa's snow machine does not work so need to solve 1st puzzle
// Understand the puzzle been given to me
2.Plan
// Read on fs module
// Use a function to solve problem
// Watch Udemy video again for instructions
// Get data turn into a string then loop over it
// Return the floor santa is on
3.Divide
// Break code into smaller parts
4.Stuck start over again
*/

/* Solution
final Santa floor = (all the time Santa goes up) -
 (all the time Santa goes down);
 (--going up the floor )-- going down
*/

const fs = require("fs");

// fs.readFile("./challenge.txt", "utf-8", (err, data) => {
//   const allData = JSON.stringify(data);
//   console.log(allData);
// });


fs.readFile('challenge.txt', function(err, data) {
  if(err) throw err;

  const arr = data.toString().replace(/\r\n/g,'\n').split('\n');

  for(let i of arr) {
      console.log(i);
  }
});