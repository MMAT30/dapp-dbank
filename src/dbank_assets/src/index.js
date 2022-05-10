import { dbank } from "../../declarations/dbank";

// current balance
window.addEventListener("load", async function () {
  update();
});

//
document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const button = event.target.querySelector("#submit-btn");

    const inputAmount = parseFloat(
      document.getElementById("input-amount").value
    );
    const outputAmount = parseFloat(
      document.getElementById("withdrawal-amount").value
    );

    button.setAttribute("disabled", true);

    if (document.getElementById("input-amount").value.length != 0) {
      await dbank.addAmount(inputAmount);
    }

    if (document.getElementById("withdrawal-amount").value.length != 0) {
      await dbank.withdrawlAmount(outputAmount);
    }

    await dbank.compound();

    update();
    document.getElementById("input-amount").value = "";
    document.getElementById("withdrawal-amount").value = "";
    button.removeAttribute("disabled");
  });

async function update() {
  const balance = await dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(balance * 100) / 100;
}
