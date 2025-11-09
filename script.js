const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let expression = "";

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const value = button.dataset.value;
    const action = button.dataset.action;

    if (action === "clear") {
      expression = "";
      display.value = "";
    } 
    else if (action === "back") {
      expression = expression.slice(0, -1);
      display.value = expression;
    } 
    else if (action === "equals") {
      try {
        const result = eval(expression);
        display.value = result;
        expression = result.toString();
      } catch (error) {
        display.value = "Error";
        expression = "";
      }
    } 
    else if (value) {
      expression += value;
      display.value = expression;
    }
  });
});
