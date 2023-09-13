document.addEventListener("DOMContentLoaded", function () {
  const entryPriceInput = document.getElementById("entry-price");
  const exitPriceInput = document.getElementById("exit-price");
  const quantityInput = document.getElementById("quantity");
  const leverageInput = document.getElementById("leverage");
  const stopLossInput = document.getElementById("stop-loss");
  const takeProfitInput = document.getElementById("take-profit");
  const liquidationPriceInput = document.getElementById("liquidation-price");
  const pnlInput = document.getElementById("pnl");
  const calculateButton = document.getElementById("calculate");

  calculateButton.addEventListener("click", function () {
    const entryPrice = parseFloat(entryPriceInput.value);
    const exitPrice = parseFloat(exitPriceInput.value);
    const quantity = parseFloat(quantityInput.value);
    const leverage = parseFloat(leverageInput.value);
    const stopLoss = parseFloat(stopLossInput.value);
    const takeProfit = parseFloat(takeProfitInput.value);

    if (
      isNaN(entryPrice) ||
      isNaN(exitPrice) ||
      isNaN(quantity) ||
      isNaN(leverage) ||
      isNaN(stopLoss) ||
      isNaN(takeProfit)
    ) {
      alert("Please enter valid numbers.");
      return;
    }

    const liquidationPrice = entryPrice - entryPrice / leverage;
    const pnl = (exitPrice - entryPrice) * quantity;
    const stopLossPnl = (stopLoss - entryPrice) * quantity;
    const takeProfitPnl = (takeProfit - entryPrice) * quantity;

    liquidationPriceInput.value = liquidationPrice.toFixed(2);
    pnlInput.value = pnl.toFixed(2);

    // Display Stop Loss and Take Profit PNL
    document.getElementById("stop-loss-pnl").textContent =
      stopLossPnl.toFixed(2);
    document.getElementById("take-profit-pnl").textContent =
      takeProfitPnl.toFixed(2);
  });
});
