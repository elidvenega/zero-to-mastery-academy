const fs = require("fs");
/* 
1.Understand
// Santa's snow machine does not work so need to solve 1st puzzle
// Understand the puzzle been given to me
2.Plan
// Read on fs module
// Use a function to solve problem
// Watch Udemy video again for instructions
// Get data turn into a string then loop over it
// Research problem better to solve
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


function question1() {
  fs.readFile("./challenge.txt", (err, data) => {
   const directions = data.toString();
   const directionsArray = directions.split('');
   const answer = directionsArray.reduce((acc,cv) => {
     if(cv === '(') {
       return acc += 1
     } else if (cv ===  ')') {
      return acc -=1 
     }
   },0)
  console.log('floor:', answer);
  });
}

question1();






