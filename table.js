const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayMultiplicationTable(number) {
  console.log(`Multiplication table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
}

function getInput() {
  rl.question('Enter a number: ', (input) => {
    const number = parseInt(input);

    if (isNaN(number)) {
      console.log('Invalid input. Please enter a valid number.');
      getInput(); // Ask for input again
    } else {
      displayMultiplicationTable(number);
      rl.close();
    }
  });
}

getInput();
