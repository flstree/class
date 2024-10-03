const input = document.getElementById("inputValue");
const userInput = input.value;

const tailsOutput = document.querySelector("#tails");
const headsOutput = document.querySelector("#heads");
const button = document.querySelector("#runButton");

function flipCoin() {
  return Math.round(Math.random());
}

button.addEventListener("click", function (event) {
  event.preventDefault();
  const userInput = input.value; 
  console.log("user input", userInput);
  let flips = {
    heads: 0,
    tails: 0,
  };

  for (let i = 0; i < userInput; i++) {
    const flippedValue = flipCoin();
    if (flippedValue === 0) {
      flips.tails += 1;
    } else {
      flips.heads += 1;
    }
  }

  headsOutput.innerHTML = flips.heads;
  tailsOutput.innerHTML = flips.tails;
});
