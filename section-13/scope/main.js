"use strict";

const output_scope = document.querySelector(".scope_output");

const functionScope = () => {
  let sentenceOne = "This lesson was on";
  let sentenceTwo = "Scope";

  return `${sentenceOne} ${sentenceTwo}`;
};

//output_scope.innerHTML = functionScope();
output_scope.textContent = functionScope();
// scope is letiable access
let b = "can i access";

const bb = () => {
  let a = "hello";
  console.log(b);
};

// Root scope (window)
let fun = 5;
const funFunction = () => {
  // child scope
  let fun = "helloooo";
  console.log(1, fun);
};

const funerFunction = () => {
  // child scope
  let fun = "Byeee";
  console.log(2, fun);
};

const funestFunction = () => {
  // child scope
  fun = "AHHHHHH";
  console.log(3, fun);
};

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();
console.log(fun);
