const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
    apples: 5,
    oranges: 19,
    grapes: 1000
}
// 1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i], '"for loop"');
}

// 2
basket.forEach((item) => {
  console.log(item, '"forEach"');
});

// for of
// Iterating - arrays and strings
for (item of basket) {
  console.log(item, '"forOf"');
}
// for in-properties
// enumerating
for(item in detailedBasket) {
    console.log(item);
}