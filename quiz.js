const readline = require('readline-sync');

// Name and Welcome Screen
const userName = readline.question('What is your name? ');
console.log(`Hello, ${userName}! Welcome to the Lesson 4: Data Types and Operations Quiz.`);

// Questionaire
const question1 = readline.question('1. What is the data type that presents itself as true or false? ');
const question2 = readline.question('2. There are three keywoard variables. Which one is missing from the list: const, let, ??? ');
const question3 = readline.question('3. What does "11" + 8 evaluate to? ');
const question4 = readline.question('4. What are the two conversions when it comes to data types? ');
const question5 = parseInt(readline.question('5. What is 9 * 10? '));

// Answer Repo
const answers = {
  question1,
  question2,
  question3,
  question4,
  question5
};

// Print back after completing the quiz
console.log(`\nThe quiz is complete, ${userName}! Here are your answers:`);
console.log(`1. Data type that is true or flase: ${answers.question1}`);
console.log(`2. The missing keyword variable: ${answers.question2}`);
console.log(`3. "11" + 8: ${answers.question3}`);
console.log(`4. The two data type conversions: ${answers.question4}`);
console.log(`5. 9 * 10 = ${answers.question5}`);