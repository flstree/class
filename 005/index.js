const container = document.getElementById("container");

const colors = ["blue", "red", "green", "yellow"];
let selectedPage = 0;
let totalPages = 4;
let pageContainer = "";

container.innerHTML = `<div class='fullpage' style="background-color: ${colors[selectedPage]}">${selectedPage}</div>`;

window.onscroll = function (ev) {
  if (
    window.innerHeight + Math.round(window.scrollY) >=
    document.body.offsetHeight
  ) {
    if (selectedPage > 4) {
      selectedPage = 3;
    }

    container.innerHTML = `<div class='fullpage' style="background-color: ${colors[selectedPage]}">${selectedPage}</div>`;
    selectedPage++;
  }
};
// for (let i = 0; i < totalPages; i++) {
//   pageContainer += ;
// }

// container.innerHTML = `<div class='fullpage' style="background-color: ${colors[selectedPage]}">${selectedPage}</div>`;

//onscrolldown, when at the bottom of the page
