const resultDisplay = document.getElementById("result");
const historyDisplay = document.getElementById("history");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let history = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "AC") {
      currentInput = "";
      resultDisplay.textContent = "0";
      historyDisplay.textContent = "0";
    } else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
      resultDisplay.textContent = currentInput || "0";
    } else if (value === "=") {
      try {
        history = currentInput;
        let result = eval(currentInput);
        currentInput = result.toString();
        resultDisplay.textContent = currentInput;
        historyDisplay.textContent = history;
      } catch {
        resultDisplay.textContent = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      resultDisplay.textContent = currentInput;
    }
  });
});
