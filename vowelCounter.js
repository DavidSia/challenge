const readline = require('readline');

function countVowels(sentence) {
  // Use a regular expression to match all vowels (case-insensitive)
  const vowelRegex = /[aeiou]/gi;
  const vowelCount = (sentence.match(vowelRegex) || []).length;

  return vowelCount;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a sentence: ', (sentence) => {
  // Trim leading and trailing whitespace from the sentence
  sentence = sentence.trim();

  if (sentence.length === 0) {
    console.log('Please enter a non-empty sentence.');
  } else {
    const vowelCount = countVowels(sentence);
    console.log(`The sentence has ${vowelCount} vowel(s).`);
  }

  rl.close();
});
