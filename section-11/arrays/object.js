"use strict";
// objects collection of properties
// function inside object is a method
// let user = {
//   name: "John",
//   age: 34,
//   hobby: "Soccer",
//   isMarried: false,
//   spells: ["abrakadabra", "shazam", "boo"],
//   shout() {
//     console.log("AHHHHHH");
//   },
// };

// user.shout();

// let list = [
//   {
//     user: "andy",
//     password: "secret",
//   },
//   {
//     user: "jess",
//     password: 123,
//   },
// ];

// console.log(list[0].user);

// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let database = [
  {
    username: "Jake",
    password: "secret",
  },
  {
    username: "sally",
    password: "123",
  },
  {
    username: "ingrid",
    password: "000",
  },
];

let newsfeed = [
  {
    username: "Paul",
    timeline: "JS is awesome",
  },
  {
    username: "Andy",
    timeline: "Technology is cool",
  },
  {
    username: "Eric",
    timeline: "Programming is awesome",
  },
];

function isUserValid(username, password) {
  for (let i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Wrong user and password");
  }
}

let userNamePrompt = prompt("Wahts your username");
let passwordPrompt = prompt("Wahts your password");

signIn(userNamePrompt, passwordPrompt);
