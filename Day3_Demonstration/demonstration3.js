function handleInput(op) {
  let number1 = parseFloat(document.getElementById("num1").value);
  let number2 = parseFloat(document.getElementById("num2").value);
  let number3 = 0;
  switch (op) {
    case "sum":
      number3 = number1 + number2;
      break;
    case "diff":
      number3 = number1 - number2;
      break;
  }
  document.getElementById("result").textContent = number3.toString();
}
