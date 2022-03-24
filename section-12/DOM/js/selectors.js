// 1.ADD Button to delete Items on list


// getting id and elements
const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

// functions where I create li elements and append them to list
function inputLength() {
  return input.value.length;
}

function createListElement() {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(btn);
  ul.appendChild(li);
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

// events
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);



