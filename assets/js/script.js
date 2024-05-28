const startPage = document.getElementById("start-page");
const quizPage = document.getElementById("quiz-page");
const questionText = document.getElementById("quizQuestion");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const choiceD = document.getElementById("choiceD");
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
let result = "";
let total = questionContent.length;

// Wait for the DOM to finish loading before beginning the quiz
// Listen for click on start button

document.addEventListener("DOMContentLoaded", function () {
  // document.getElementById("start").addEventListener("click", function () {
  //   alert("You clicked the start button!");
  //   runQuiz();
  // })
})

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
  choiceA.disabled = false;
  choiceB.disabled = false;
  choiceC.disabled = false;
  choiceD.disabled = false;
  // alert("array number is " + currentQuestion);
  questionText.textContent = questionContent[currentQuestion].question;
  choiceA.textContent = questionContent[currentQuestion].choice1;
  choiceB.textContent = questionContent[currentQuestion].choice2;
  choiceC.textContent = questionContent[currentQuestion].choice3;
  choiceD.textContent = questionContent[currentQuestion].choice4;
}

function checkAnswer(value) {
  // alert(value);
  let inputAnswer = document.getElementById(value).textContent;
  if (inputAnswer === questionContent[currentQuestion].correct) {
    // alert("CORRECT!");
    incrementCorrect()

  } else {
    // alert("not correct!");
    incrementWrong();
  }
}

function showResult() {
  resultArea.removeAttribute("hidden");
  resultText.textContent = result;
  correctNum.textContent = correctScore;
  wrongNum.textContent = wrongScore;
  choiceA.disabled = true;
  choiceB.disabled = true;
  choiceC.disabled = true;
  choiceD.disabled = true;
  nextBtn.disabled = false;
}

function incrementCorrect() {
  correctScore += 1;
  result = "that is indeed correct!";
  showResult();
}

function incrementWrong() {
  wrongScore += 1;
  result = "No, that is not correct!";
  showResult();
}

function nextQuestion() {
  currentQuestion += 1;
  nextBtn.disabled = true;
  runQuiz();
}

// show final score and start again button
function showFinalScore() {
  alert(correctScore);
  quizArea.setAttribute("hidden", "hidden");
  gameOver.removeAttribute("hidden");
  totalCorrect.textContent = correctScore;
  totalQuestions.textContent= total;
}

function startAgain() {
  location.reload();
}




