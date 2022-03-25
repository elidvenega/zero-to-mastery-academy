'use strict';
// 1.Make sure you 100% understand the problem. ask the right questions
// to get a clear picture of the problem.
// 2.Divide and conquer: Break a big problem into smaller sub-problems
// 3.Don't be afraid to do as much research as you have to
// 4.For bigger problems, write pseudo-code
// before writing the actual code.

// 1.ADD Button to delete Items on list
// 2.Make sure btn is inserted into code
// 3.Google and stack overflow



// getting id and elements
const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

// functions where I create li elements and append them to list
function inputLength() {
  return input.value.length;
}

function createListElement() {
  const div = document.createElement('div');
  const li = document.createElement("li");
  const btn = document.createElement("button");
  div.classList.add('wrapper');
  ul.appendChild(div)
  div.append(li,btn)
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(btn);
  ul.appendChild(li);
  btn.innerHTML = "delete"
  btn.style.margin = '5px';
  btn.classList.add("delClass");
  input.value = "";
}


function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(e) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

// functions that were created to delete button and things on list
function doneTask(task) {
  if (task.target.tagName === "LI") {
    task.target.classList.toggle("done");
  }
}

function deleteListElement(element) {
  if (element.target.className === "delClass") {
    element.target.parentElement.remove();
  }
}

function handleUlClick(element) {
  doneTask(element);
  deleteListElement(element);
}
// events
ul.addEventListener("click", handleUlClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
