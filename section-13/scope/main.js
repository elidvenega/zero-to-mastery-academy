"use strict";
// scope is variable access
var b = "can i access";

function bb() {
  var a = "hello";
  console.log(b);
}

// Root scope (window)
var fun = 5;
function funFunction() {
  // child scope
  var fun = "helloooo";
  console.log(1,fun);
}

function funerFunction() {
  // child scope
  var fun = "Byeee";
  console.log(2,fun);
}

function funestFunction() {
  // child scope
  fun = "AHHHHHH";
  console.log(3,fun);
}

console.log('window',fun);
funFunction();
funerFunction();
funestFunction();
console.log(fun);















