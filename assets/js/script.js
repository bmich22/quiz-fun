const startPage = document.getElementById("start-page");
const quizPage= document.getElementById("quiz-page");
const questionText = document.getElementById("quizQuestion");
const choiceA =  document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const choiceD = document.getElementById("choiceD"); 
const resultArea = document.getElementById("result-area");
const resultText = document.getElementById("result-text");
const correctNum = document.getElementById("correctNum");
const wrongNum = document.getElementById("wrongNum");

// Question Content
const questionContent = [
  {
    question: "This is question 1",
    choice1: "1A",
    choice2: "1B",
    choice3: "1C",
    choice4: "1D",
    correct: "1D",
  }
]

// Set current question, correctScore and wrongScore variables to zero
let currentQuestion = 0;
let correctScore = 0;
let wrongScore = 0;
let result = "";

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
    alert("Game Over!");
  }

}

function displayQuestion() {
  startPage.setAttribute("hidden", "hidden");
  quizPage.removeAttribute("hidden");
  alert(currentQuestion);
  questionText.textContent = questionContent[currentQuestion].question;
  choiceA.textContent = questionContent[currentQuestion].choice1;
  choiceB.textContent = questionContent[currentQuestion].choice2;
  choiceC.textContent = questionContent[currentQuestion].choice3;
  choiceD.textContent = questionContent[currentQuestion].choice4;

}

function checkAnswer(value) {
  // alert(value);
  let inputAnswer = document.getElementById(value).textContent;
  alert(inputAnswer);
  alert(questionContent[currentQuestion].correct);
  if (inputAnswer === questionContent[currentQuestion].correct) {
    alert("CORRECT!");
    incrementCorrect()
    
  } else {
    alert("not correct!");
    incrementWrong();
  }
  }

  function showResult() {
    resultArea.removeAttribute("hidden");
    resultText.textContent = result;
    correctNum.textContent = correctScore;
    wrongNum.textContent = wrongScore;
    choiceA.disabled= true;
    choiceB.disabled= true;
    choiceC.disabled= true;
    choiceD.disabled= true;
    
  }

  function incrementCorrect() {
    correctScore += 1;
    result = "that is indeed correct!";
    alert(correctScore);
    showResult();
  }

  function incrementWrong() {
    wrongScore += 1;
    alert(wrongScore);
    result = "No, that is not correct!";
    showResult();
  }

  function nextQuestion() {
    currentQuestion +=1;
    runQuiz();
  }


  
  // show final score and start again button
  function showFinalScore() {
 }




