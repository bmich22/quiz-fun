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
const scoreArea = document.getElementById("score-area");
const gameOver = document.getElementById("final-score");
const quizArea = document.getElementById("quiz-area");
const totalQuestions = document.getElementById("number-of-questions");
const nextBtn = document.getElementById("next-button");
const totalCorrect = document.getElementById("total-correct");


// Set current question, correctScore and wrongScore variables to zero
let currentQuestion = 0;
let correctScore = 0;
let wrongScore = 0;

//Set result string to an empty string, to be filled with either correct or incorrect
let result = "";
let total = questionContent.length;

// Create arrays for random choosing of answer choices
let activeChoices = [
  questionContent[currentQuestion].choice1,
  questionContent[currentQuestion].choice2,
  questionContent[currentQuestion].choice3,
  questionContent[currentQuestion].choice4
];

let newChoices = [];


// Wait for the DOM to finish loading before beginning the quiz
// Listen for click on start button

document.addEventListener("DOMContentLoaded", function () {
});

function runQuiz() {
  if (currentQuestion < questionContent.length) {
    displayQuestion();
  } else {
    showFinalScore();
  }
}

function displayQuestion() {
  startPage.setAttribute("hidden", "hidden");
  quizPage.removeAttribute("hidden");
  btnA.disabled = false;
  btnB.disabled = false;
  btnC.disabled = false;
  btnD.disabled = false;
  // display current question
  questionText.textContent = questionContent[currentQuestion].question;

  activeChoices = [
    questionContent[currentQuestion].choice1,
    questionContent[currentQuestion].choice2,
    questionContent[currentQuestion].choice3,
    questionContent[currentQuestion].choice4,
  ];
  newChoices = [];

  //display choices randomly
  for (let i = 0; i < 4; i++) {
    let randomIndex = Math.floor(Math.random() * activeChoices.length);
    newChoices.push(activeChoices[randomIndex]);
    activeChoices.splice(randomIndex, 1);
  }
  btnA.textContent = newChoices[0];
  btnB.textContent = newChoices[1];
  btnC.textContent = newChoices[2];
  btnD.textContent = newChoices[3];

  //display current choices
  // btnA.textContent = questionContent[currentQuestion].choice1;
  // btnB.textContent = questionContent[currentQuestion].choice2;
  // btnC.textContent = questionContent[currentQuestion].choice3;
  // btnD.textContent = questionContent[currentQuestion].choice4;
}

function checkAnswer(value) {
  // alert(value);
  let inputAnswer = document.getElementById(value);
  inputAnswer.style.backgroundColor = "blue";
  if (inputAnswer.textContent === questionContent[currentQuestion].correct) {
    incrementCorrect()

  } else {
    inputAnswer.style.backgroundColor = "red";
    incrementWrong();
  }
}

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

function incrementCorrect() {
  correctScore += 1;
  resultText.style.color = "blue";
  result = "CORRECT!";
  showResult();
}

function incrementWrong() {
  wrongScore += 1;
  resultText.style.color = "red";
  result = "NOT CORRECT!";
  showResult();
}

function nextQuestion() {
  currentQuestion += 1;
  nextBtn.disabled = true;
  btnA.style.backgroundColor = "green";
  btnB.style.backgroundColor = "green";
  btnC.style.backgroundColor = "green";
  btnD.style.backgroundColor = "green";
  runQuiz();
}

// show final score and start again button
function showFinalScore() {
  quizArea.setAttribute("hidden", "hidden");
  gameOver.removeAttribute("hidden");
  totalCorrect.textContent = correctScore;
  totalQuestions.textContent = total;
}

function startAgain() {
  location.reload();
}

