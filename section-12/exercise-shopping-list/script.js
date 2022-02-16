// selectors
const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

// function that creates elements
function createListElement() {
  // creating elements
  const div = document.createElement("div");
  const li = document.createElement("li");
  const delButton = document.createElement("button");
  div.classList.add("wrapper");
  ul.appendChild(div);
  div.append(li, delButton);
  li.classList.add("taskClass");
  li.appendChild(document.createTextNode(input.value));
  input.value = "";
  delButton.classList.add("delClass");
  delButton.innerHTML = "Del";
}

function inputLength() {
  return input.value.length;
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
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

// Event handlers
ul.addEventListener("click", handleUlClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
