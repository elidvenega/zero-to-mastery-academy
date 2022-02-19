// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const username = [];
const foreachArr = array.forEach((user) => {
  username.push(`${user.username}!`);
});
console.log(username);

// ['john!', 'becky!', 'susy!', 'tyson!']

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArr = array.map((user) => `${user.username}?`);
console.log(mapArr);

//  ['john?', 'becky?', 'susy?', 'tyson?']

//Filter the array to only include users who are on team: red
const filterArr = array.filter((teams) => {
  return teams.team === "red";
});
console.log(filterArr);

//Find out the total score of all users using reduce
const reduceArr = array.reduce((acc, total) => {
  return acc + total.score;
}, 0);

console.log(reduceArr);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  // console.log(num, i);
  // alert(num);
  return num * 2;
});

// correct answer to question
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
  return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
