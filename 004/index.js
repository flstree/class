const marksHeight = document.getElementById("marksHeight");
const marksWeight = document.getElementById("marksWeight");

const johnsHeight = document.getElementById("johnsHeight");
const johnsWeight = document.getElementById("johnsWeight");

function calculateBMI(user) {
  return user.weight / (user.height * user.height);
}

document.getElementById("computeButton").addEventListener("click", function () {
  const user1 = {
    firstName: "mark",
    weight: marksWeight.value,
    height: marksHeight.value,
  };

  const user2 = {
    firstName: "john",
    weight: johnsWeight.value,
    height: johnsHeight.value,
  };

  const calculateMarksBMI = calculateBMI(user1);
  const calculateJohnsBMI = calculateBMI(user2);
  const bmiDifference =
    Math.round(calculateMarksBMI, 2) - Math.round(calculateJohnsBMI, 2);

  let compute = document.querySelector("#compute p");
  if (bmiDifference > 0) {
    compute.innerHTML = "Mark has a higher BMI";
  } else if (bmiDifference == 0) {
    compute.innerHTML = "They have equal BMIS";
  } else {
    compute.innerHTML = "John's BMI is higher";
  }
});
