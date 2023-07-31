const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
}

function validateGrade(grade) {
  const numericGrade = parseFloat(grade);
  return !isNaN(numericGrade) && numericGrade >= 0 && numericGrade <= 100;
}

function getGrades() {
  const grades = [];

  function promptForGrade(subjectNumber) {
    rl.question(`Enter the grade for subject ${subjectNumber}: `, (grade) => {
      if (validateGrade(grade)) {
        grades.push(parseFloat(grade));
        if (grades.length < 3) {
          promptForGrade(grades.length + 1);
        } else {
          const average = calculateAverage(grades);
          console.log(`The average grade is: ${average.toFixed(2)}`);
          rl.close();
        }
      } else {
        console.log('Invalid input. Please enter a valid numeric grade (0 to 100).');
        promptForGrade(subjectNumber);
      }
    });
  }

  promptForGrade(1);
}

getGrades();
