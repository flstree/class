const input = document.getElementById("todoListInput");
const button = document.getElementById("todoListButton");
const list = document.querySelector(".list");

button.addEventListener("click", function (event) {
  event.preventDefault();
  const inputBox = input.value;
  list.innerHTML += `<li>
            <input type="checkbox" name="listItem" value="${inputBox}">
            <label for="listItem">${inputBox}</label>
        </li>`;
});
