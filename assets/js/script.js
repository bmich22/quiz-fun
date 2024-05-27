const startPage = document.getElementById("start-page");
const quizPage= document.getElementById("quiz-page");
const questionText = document.getElementById("quizQuestion");
const choiceA =  document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const choiceD = document.getElementById("choiceD"); 

// Question Content
const questionContent = [
  {
    question: "This is question 1",
    choice1: "1A",
    choice2: "1B",
    choice3: "1C",
    choice4: "1D",
    correctAnswer: "1D",
  }
]

// Set current question variable to zero
let currentQuestion = 0;

// Wait for the DOM to finish loading before beginning the quiz
// Listen for click on start button

document.addEventListener("DOMContentLoaded", function () {
  // document.getElementById("start").addEventListener("click", function () {
  //   alert("You clicked the start button!");
  //   runQuiz();
  // })
})

function runQuiz() {
  // let questionContent = [
  //   {
  //     num: "1",
  //     question: "this is question 1",
  //     choice1: "1A",
  //     choice2: "1B",
  //     choice3: "1C",
  //     choice4: "1D",
  //     correctAnswer: "1D",
  //   }
  // ]
  // let quest = questionContent[0].questionText;
  // let ch1 = questionContent[0].choice1;
  // let ch2 = questionContent[0].choice2;
  // let ch3 = questionContent[0].choice3;
  // let ch4 = questionContent[0].choice4;
  // let correctAns = questionContent[0].correctAnswer;

  if (currentQuestion < questionContent.length) {
    displayQuestion();
  } else {
    alert("Game Over!");
  }
  // displayQuestion(quest, ch1, ch2, ch3, ch4, correctAns);
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

  // checkAnswer();
}

function checkAnswer(value) {
  alert(value);
  // let choices = document.getElementById("choices-area");
  // choiceButtons = choices.getElementsByTagName("button");

  // for (let button of choiceButtons) {

  //   button.addEventListener("click", function () {
  //     let result = "";
  //     alert(this.textContent);
      
  //     if (this.textContent === correctAns) {
  //       alert("correct");
  //       result = "Correct!"
  //       // showResult(result); incrementCorrect();
      
  //     } else {
  //       alert("incorrect");
  //       result = "Incorrect!"
  //       // showResult(result); incrementWrong();
  //     }

  //   })
  }

  function showResult(result) {
    document.getElementById("result-area").removeAttribute("hidden");
    document.getElementById("result-text").textContent = result;
    document.getElementById("choiceA").disabled= true;
    document.getElementById("choiceB").disabled= true;
    document.getElementById("choiceC").disabled= true;
    document.getElementById("choiceD").disabled= true;
    
  }

  function incrementCorrect() {
    let oldCorrectNum = parseInt(document.getElementById("correctNum").innerText);
    document.getElementById("correctNum").innerText = ++oldCorrectNum;
  }

  function incrementWrong() {
    let oldWrongNum = parseInt(document.getElementById("wrongNum").innerText);
    document.getElementById("wrongNum").innerText = ++oldWrongNum;
  }

  function showFinalScore() {
 }
  // function nextQuestion() {
 // }
// function startAgain() {
// }

