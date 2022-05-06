const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const valueToCalc = document.getElementById("value_to_calc");

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    valueToCalc.innerHTML += num.innerHTML;
  });
});

operators.forEach((op) => {
  op.addEventListener("click", () => {
    if (op.innerHTML === "C") {
      valueToCalc.innerHTML = valueToCalc.innerHTML.slice(0, -1);
      return;
    }
    if (op.innerHTML === "CE") {
      valueToCalc.innerHTML = "";
      return;
    }

    if (op.innerHTML === "=") {
      valueToCalc.innerHTML = Function(`return ${valueToCalc.innerHTML}`)();
      return;
    }

    valueToCalc.innerHTML += op.innerHTML;
  });
});

document.addEventListener("keydown", (e) => {
  const operators = ["*", "+", "-", "/"];
  //add to screen
  if (Number.isInteger(Number.parseInt(e.key)) || operators.includes(e.key)) {
    valueToCalc.innerHTML += e.key;
  }
  // Delete chars
  if (e.key === "Backspace") {
    valueToCalc.innerHTML = valueToCalc.innerHTML.slice(0, -1);
  }
  if (e.key === "Escape") {
    valueToCalc.innerHTML = "";
  }

  // get result
  if (valueToCalc.innerHTML && (e.key === "=" || e.key === "Enter")) {
    valueToCalc.innerHTML = Function(`return ${valueToCalc.innerHTML}`)();
  }
});
