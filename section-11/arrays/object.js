"use strict";
// objects collection of properties
// function inside object is a method
let user = {
  name: "John",
  age: 34,
  hobby: "Soccer",
  isMarried: false,
  spells: ["abrakadabra", "shazam", "boo"],
  shout() {
    console.log("AHHHHHH");
  },
};

user.shout();

let list = [
  {
    user: "andy",
    password: "secret",
  },
  {
    user: "jess",
    password: 123,
  },
];

console.log(list[0].user);

// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

let database = [
  {
    username: "Jake",
    password: "secret",
  },
];

let newsfeed = [
  {
    username: "Paul",
    timeline: "2:00 PM",
  },
  {
    username: "Andy",
    timeline: "4:00 PM",
  },
  {
    username: "Eric",
    timeline: "2:00 PM",
  },
];

let userNamePrompt = prompt("Wahts your username");
let passwordPrompt = prompt("Wahts your password");

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsfeed);
  } else {
    alert("Wrong user and password");
  }
}

signIn(userNamePrompt, passwordPrompt);
