document.addEventListener("DOMContentLoaded", function () {
  const entryPriceInput = document.getElementById("entry-price");
  const exitPriceInput = document.getElementById("exit-price");
  const quantityInput = document.getElementById("quantity");
  const leverageInput = document.getElementById("leverage");
  const liquidationPriceInput = document.getElementById("liquidation-price");
  const pnlInput = document.getElementById("pnl");
  const calculateButton = document.getElementById("calculate");

  calculateButton.addEventListener("click", function () {
    const entryPrice = parseFloat(entryPriceInput.value);
    const exitPrice = parseFloat(exitPriceInput.value);
    const quantity = parseFloat(quantityInput.value);
    const leverage = parseFloat(leverageInput.value);

    if (
      isNaN(entryPrice) ||
      isNaN(exitPrice) ||
      isNaN(quantity) ||
      isNaN(leverage)
    ) {
      alert("Please enter valid numbers.");
      return;
    }

    const liquidationPrice = entryPrice - entryPrice / leverage;
    const pnl = (exitPrice - entryPrice) * quantity;

    liquidationPriceInput.value = liquidationPrice.toFixed(2);
    pnlInput.value = pnl.toFixed(2);
  });
});
