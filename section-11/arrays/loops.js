let todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study JS",
  "eat healthy",
];

let numList = [1, 2, 3, 4, 5];
const total = numList.reduce((x, y) => x + y);
console.log(total);
// forEach
todos.forEach((list, i, arr) => console.log(list, i, arr));

todos.map((list) => console.log(`${list} ${"!"}`));

// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i]);
// }

// let counterOne = 10;
// while (counterOne > 0) {
//   console.log(counterOne--);
// }

// let counterTwo = 10;
// do {
//   console.log(counterTwo);
//   counterTwo--;
// } while (counterTwo > 0);
