const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000,
};

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach((item) => {
  console.log(item);
});

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
const array2 = ["a", 3, 4, 2]; // should return 4
const array3 = []; // should return 0

const array = [-1, 0, 3, 100, 99, 2, 99];
function biggestNumberInArray(arr) {
  for (arr of array) {
    if (arr === 100) {
      console.log(arr);
    }
  }
}
biggestNumberInArray();

const array2 = ["a", 3, 4, 2];
function biggestNumberInArray2(arr) {
  arr.forEach((num) => {
    if (num === 4) {
      console.log(num);
    }
  });
}

biggestNumberInArray2(array2);

const array3 = [];
function biggestNumberInArray3(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      console.log(0);
    }
  }
}

biggestNumberInArray3(array3);

// array 3
function biggestNumberInArray3(arr) {
  let highest = 0;
  for (item of arr) {
    if (highest < item) {
      highest = item;
    }
  }
  return highest;
}

biggestNumberInArray3(array3);

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
const amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100,
};

function checkBasket(basket, lookingFor) {
  for (lookingFor in amazonBasket) {
    if (basket === amazonBasket) {
      console.log(lookingFor);
    }
  }
}

checkBasket(amazonBasket);
