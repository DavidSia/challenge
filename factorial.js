const readline = require('readline');

function factorial(number) {
  if (number < 0) {
    throw new Error("Factorial is defined only for non-negative numbers.");
  }

  let result = 1n;
  for (let i = 2n; i <= number; i++) {
    result *= i;
  }
  return result;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(input) {
  try {
    const number = BigInt(input);
    if (number < 0n) {
      console.log("Invalid input. Please enter a non-negative number.");
    } else {
      const result = factorial(number);
      console.log(`The factorial of ${number} is: ${result}`);
    }
  } catch (error) {
    console.log("Invalid input. Please enter a valid non-negative integer.");
  }

  rl.close();
});
