const readline = require('readline');

function calculateFinalValue(initialCapital, interestRate, investmentTimeMonths) {
  const monthlyInterestRate = interestRate / 100 / 12;
  const finalValue = initialCapital * Math.pow(1 + monthlyInterestRate, investmentTimeMonths);
  return finalValue.toFixed(2);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptInput(promptText) {
  return new Promise((resolve) => {
    rl.question(promptText, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  console.log("Welcome to the Investment Calculator!");

  try {
    const initialCapital = parseFloat(await promptInput('Enter initial capital (e.g., 10000.50): '));
    if (isNaN(initialCapital) || initialCapital <= 0) {
      throw new Error("Please enter a valid positive number for initial capital.");
    }

    const interestRate = parseFloat(await promptInput('Enter interest rate (annual, e.g., 5.5): '));
    if (isNaN(interestRate) || interestRate <= 0) {
      throw new Error("Please enter a valid positive number for interest rate.");
    }

    const investmentTimeMonths = parseInt(await promptInput('Enter investment time (months, e.g., 36): '));
    if (isNaN(investmentTimeMonths) || investmentTimeMonths < 0) {
      throw new Error("Please enter a valid non-negative integer for investment time.");
    }

    const finalValue = calculateFinalValue(initialCapital, interestRate, investmentTimeMonths);

    console.log(`The final value of your investment is: $${finalValue}`);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    rl.close();
  }
}

main();
