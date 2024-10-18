const input = document.getElementById("todoListInput");
const button = document.getElementById("todoListButton");
const list = document.querySelector(".list");
let arrayOfItems = [];
let counter = 0;

//Light mode dark mode
const darkMode = document.getElementById("darkMode");
const lightMode = document.getElementById("lightMode");
const body = document.querySelector("body");

button.addEventListener("click", function (event) {
  event.preventDefault();
  const inputBox = input.value?.toLowerCase();
  arrayOfItems.push(inputBox);

  buildlist();
});

darkMode.addEventListener("click", function (event) {
  event.preventDefault();

  body.style.backgroundColor = "#0c0c0c";
  list.style.color = "#ffffff";
});

lightMode.addEventListener("click", function (event) {
  event.preventDefault();

  body.style.backgroundColor = "#ffffff";
});

function deleteList(index) {
  arrayOfItems.splice(index, 1);
  buildlist();

  //list.removeChild(listitem);
}

function buildlist() {
  let buildList = "";
  for (let i = 0; i < arrayOfItems.length; i++) {
    buildList += `<li id='listItem${i}'>
            <input type="checkbox" name="listItem" value="${arrayOfItems[i]}">
            <label for="listItem">${arrayOfItems[i]}</label>
            <span onclick='deleteList(${i})'>X</span>
        </li>`;
  }
  list.innerHTML = buildList;
}
