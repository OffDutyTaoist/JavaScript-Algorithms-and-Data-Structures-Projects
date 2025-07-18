// 1. Create the questions array with 5 objects
const questions = [
  {
    category: 'Science',
    question: 'What planet is known as the Red Planet?',
    choices: ['Earth', 'Mars', 'Venus'],
    answer: 'Mars'
  },
  {
    category: 'History',
    question: 'Who was the first President of the United States?',
    choices: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson'],
    answer: 'George Washington'
  },
  {
    category: 'Geography',
    question: 'What is the largest ocean on Earth?',
    choices: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean'],
    answer: 'Pacific Ocean'
  },
  {
    category: 'Literature',
    question: 'Who wrote "Romeo and Juliet"?',
    choices: ['William Shakespeare', 'Mark Twain', 'Jane Austen'],
    answer: 'William Shakespeare'
  },
  {
    category: 'Movies',
    question: 'Which movie features the character Darth Vader?',
    choices: ['Star Wars', 'The Matrix', 'The Lord of the Rings'],
    answer: 'Star Wars'
  }
];

function getRandomQuestion(questionsArray) {
  const index = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[index];
}

function getRandomComputerChoice(choicesArray) {
  const index = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[index];
}

function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}

const randomQuestion = getRandomQuestion(questions);
console.log(`Category: ${randomQuestion.category}`);
console.log(`Question: ${randomQuestion.question}`);
console.log(`Choices: ${randomQuestion.choices.join(', ')}`);

const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log(`Computer's Choice: ${computerChoice}`);

const result = getResults(randomQuestion, computerChoice);
console.log(result);
