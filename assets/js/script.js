// Create variables for elements on index.html
const startPage = document.getElementById("start-page");
const quizPage = document.getElementById("quiz-page");
const questionText = document.getElementById("quizQuestion");
const btnA = document.getElementById("choiceA");
const btnB = document.getElementById("choiceB");
const btnC = document.getElementById("choiceC");
const btnD = document.getElementById("choiceD");
const resultArea = document.getElementById("result-area");
const resultText = document.getElementById("result-text");
const correctNum = document.getElementById("correctNum");
const wrongNum = document.getElementById("wrongNum");
const gameOver = document.getElementById("final-score");
const quizArea = document.getElementById("quiz-area");
const totalQuestions = document.getElementById("number-of-questions");
const nextBtn = document.getElementById("next-button");
const totalCorrect = document.getElementById("total-correct");
const source = document.getElementById("source");
const theme = document.getElementById("subject");

// Set current question, correctScore and wrongScore variables to zero
let currentQuestion = 0;
let correctScore = 0;
let wrongScore = 0;

//Set result string to an empty string, to be filled with either correct or incorrect
let result = "";
let total = questionContent.length;

// Create arrays for randomly displaying answer choices
let activeChoices = [
  questionContent[currentQuestion].choice1,
  questionContent[currentQuestion].choice2,
  questionContent[currentQuestion].choice3,
  questionContent[currentQuestion].choice4
];
let newChoices = [];

// Display subject of quiz on opening page
theme.textContent = subject;

// Wait for the DOM to finish loading before beginning the quiz
// Listen for click on start button

document.addEventListener("DOMContentLoaded", function () {
});

/**
 * Entry to the quiz, called by user on click of the 'start quiz' button, 
 * tests that the current question number is less than the length of the question array,
 */
function runQuiz() {
  if (currentQuestion < questionContent.length) {
    displayQuestion();
  } else {
    showFinalScore();
  }
}

/**
 * Hides the opening page content and displays the question and choices
 */
function displayQuestion() {
  startPage.setAttribute("hidden", "hidden");
  quizPage.removeAttribute("hidden");
  btnA.disabled = false;
  btnB.disabled = false;
  btnC.disabled = false;
  btnD.disabled = false;
  // display current question
  questionText.textContent = questionContent[currentQuestion].question;
  source.removeAttribute("hidden");
  source.textContent = questionContent[currentQuestion].source;

  // Assigns the activeChoices array with the answer choices for the current question
  activeChoices = [
    questionContent[currentQuestion].choice1,
    questionContent[currentQuestion].choice2,
    questionContent[currentQuestion].choice3,
    questionContent[currentQuestion].choice4,
  ];
  // Sets newChoices array to empty
  newChoices = [];

  //Fills newChoices array randomly and displays questions
  for (let i = 0; i < 4; i++) {
    let randomIndex = Math.floor(Math.random() * activeChoices.length);
    newChoices.push(activeChoices[randomIndex]);
    activeChoices.splice(randomIndex, 1);
  }
  // Displays answer choices for current question randomly
  btnA.textContent = newChoices[0];
  btnB.textContent = newChoices[1];
  btnC.textContent = newChoices[2];
  btnD.textContent = newChoices[3];
}

/**
 * Gets user input from onclick event and checks for correct answer
 */
function checkAnswer(value) {

  let inputAnswer = document.getElementById(value);
  inputAnswer.style.backgroundColor = "blue";
  if (inputAnswer.textContent === questionContent[currentQuestion].correct) {
    incrementCorrect();

  } else {
    inputAnswer.style.backgroundColor = "red";
    incrementWrong();
  }
}

/**
 * Increments correct score and assigns "correct" value to result variable
 */
function incrementCorrect() {
  correctScore += 1;
  resultText.style.color = "blue";
  result = "CORRECT!";
  showResult();
}

/**
 * Increment wrong score and assigns "incorrect" value to result variable
 */
function incrementWrong() {
  wrongScore += 1;
  resultText.style.color = "red";
  result = "NOT CORRECT!";
  showResult();
}

/**
 * Unhides result area and displays either CORRECT! or INCORRECT! message, 
 * disables choice buttons so user cannot choose again, displays update scores
 */
function showResult() {
  resultArea.removeAttribute("hidden");
  resultText.textContent = result;
  correctNum.textContent = correctScore;
  wrongNum.textContent = wrongScore;
  btnA.disabled = true;
  btnB.disabled = true;
  btnC.disabled = true;
  btnD.disabled = true;
  nextBtn.disabled = false;
}

/**
 * Increments currentQuestion variable, disables next button so user cannot click to advance scores, 
 * sets buttons back to all green, calls runQuiz function to go to the next question in the array
 */
function nextQuestion() {
  currentQuestion += 1;
  nextBtn.disabled = true;
  btnA.style.backgroundColor = "green";
  btnB.style.backgroundColor = "green";
  btnC.style.backgroundColor = "green";
  btnD.style.backgroundColor = "green";
  runQuiz();
}

// Show final score and display start again button
function showFinalScore() {
  quizArea.setAttribute("hidden", "hidden");
  gameOver.removeAttribute("hidden");
  totalCorrect.textContent = correctScore;
  totalQuestions.textContent = total;
}

/**
 * Onclick of the "start again" button, the page refreshes and the opening page is displayed
 */
function startAgain() {
  location.reload();
}

