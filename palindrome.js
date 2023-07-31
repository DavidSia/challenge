const readline = require('readline');

function isPalindrome(word) {
  // Convert the word to lowercase and remove non-letter characters
  const cleanWord = word.toLowerCase().replace(/[^a-z]/gi, '');
  
  // Use a loop to check if the word is a palindrome
  for (let i = 0; i < Math.floor(cleanWord.length / 2); i++) {
    if (cleanWord[i] !== cleanWord[cleanWord.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a word: ', (word) => {
  const result = isPalindrome(word);
  if (result) {
    console.log(`"${word}" is a palindrome.`);
  } else {
    console.log(`"${word}" is not a palindrome.`);
  }
  rl.close();
});
