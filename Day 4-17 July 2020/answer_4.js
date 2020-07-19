let operation = prompt(
  "Choose an operation. Operations: +, -, *, /, %,  sqrt."
);

var res = null;

if (operation == "+") {
  firstNumber = parseInt(prompt("Enter first number"));
  secondNumber = parseInt(prompt("Enter second number"));
  res = firstNumber + secondNumber;
  alert("Result is: " + res);
} else if (operation == "-") {
  firstNumber = parseInt(prompt("Enter first number"));
  secondNumber = parseInt(prompt("Enter second number"));
  res = firstNumber - secondNumber;
  alert("Result is: " + res);
} else if (operation == "*") {
  firstNumber = parseInt(prompt("Enter first number"));
  secondNumber = parseInt(prompt("Enter second number"));
  res = firstNumber * secondNumber;
  alert("Result is: " + res);
} else if (operation == "/") {
  firstNumber = parseInt(prompt("Enter first number"));
  secondNumber = parseInt(prompt("Enter second number"));
  res = firstNumber / secondNumber;
  alert("Result is: " + res);
} else if (operation == "%") {
  firstNumber = parseInt(prompt("Enter first number"));
  secondNumber = parseInt(prompt("Enter second number"));
  res = (firstNumber * secondNumber) / 100;
} else if (operation == "sqrt") {
  firstNumber = parseInt(prompt("Enter a number"));
  res = Math.sqrt(firstNumber);
  alert("Result is: " + res);   
}
