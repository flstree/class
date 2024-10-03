const amountPaid = 2 * 100; //this is in dollars
const costOfItems = 1.3 * 100; //this is in dollars

const changeOutput = {
  quarters: { value: 25, amount: 0 },
  dimes: { value: 10, amount: 0 },
  nickels: { value: 5, amount: 0 },
  pennies: { value: 1, amount: 0 },
};

let change = amountPaid - costOfItems;
if (change < 0) {
  console.log("Hey, your money is not complete");
} else if (change === 0) {
  console.log("You do not have any change");
} else {
  console.log("-----------------------");
  console.log("Your change is (in cents): ", change);
  console.log("-----------------------");
  //Number of quarters
  changeOutput.quarters.amount = Math.floor(
    change / changeOutput.quarters.value
  ); //3
  change = change % changeOutput.quarters.value;
  console.log("The amount of quarters", changeOutput.quarters.amount);

  changeOutput.dimes.amount = Math.floor(change / changeOutput.dimes.value);
  change = change % changeOutput.dimes.value;
  console.log("The amount of dimes: ", changeOutput.dimes.amount);

  changeOutput.nickels.amount = Math.floor(change / changeOutput.nickels.value);
  change = change % changeOutput.nickels.value;
  console.log("The amount of nickels: ", changeOutput.nickels.amount);

  changeOutput.pennies.amount = change;
  console.log("The amount of pennies: ", changeOutput.pennies.amount);
}
