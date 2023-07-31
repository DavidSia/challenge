const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error("Error: Division by zero is not allowed.");
  }
  return num1 / num2;
}

function calculate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      throw new Error("Error: Invalid operator.");
  }
}

function startCalculator() {
  readline.question("Enter the first number: ", (num1) => {
    if (isNaN(num1)) {
      console.log("Error: Invalid input for the first number.");
      readline.close();
      return;
    }
    num1 = parseFloat(num1);

    readline.question("Enter the operator (+, -, *, /): ", (operator) => {
      if (!['+', '-', '*', '/'].includes(operator)) {
        console.log("Error: Invalid operator.");
        readline.close();
        return;
      }

      readline.question("Enter the second number: ", (num2) => {
        if (isNaN(num2)) {
          console.log("Error: Invalid input for the second number.");
          readline.close();
          return;
        }
        num2 = parseFloat(num2);

        try {
          const result = calculate(operator, num1, num2);
          console.log(`Result: ${result}`);
        } catch (error) {
          console.log(error.message);
        } finally {
          readline.close();
        }
      });
    });
  });
}

startCalculator();
