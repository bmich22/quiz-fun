// Wait for the DOM to finish loading before beginning the quiz
// Listen for click on start button

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("start").addEventListener("click", function () {
    alert("You clicked the start button!");
    runQuiz();
  })
})

function runQuiz() {
  let questionContent = [
    {
      num: "1",
      question: "this is question 1",
      choice1: "1A",
      choice2: "1B",
      choice3: "1C",
      choice4: "1D",
      correctAnswer: "1D",
    }
  ]
  let correctAnswer = questionContent[0].correctAnswer;

  document.getElementById("start-page").setAttribute("hidden", "hidden");
  document.getElementById("quiz-page").removeAttribute("hidden");
  document.getElementById("question").textContent = questionContent[0].question;
  document.getElementById("choiceA").textContent = questionContent[0].choice1;
  document.getElementById("choiceB").textContent = questionContent[0].choice2;
  document.getElementById("choiceC").textContent = questionContent[0].choice3;
  document.getElementById("choiceD").textContent = questionContent[0].choice4;

  checkAnswer(correctAnswer);

}

function checkAnswer(correctAnswer) {
  let choices = document.getElementById("choices-area");
  choiceButtons = choices.getElementsByTagName("button");

  for (let button of choiceButtons) { 

    button.addEventListener("click", function(){
      if (this.textContent === correctAnswer) {
        alert("correct");
      } else {
        alert("incorrect");
      }
    })
  }
}

function showResult() {

}

function incrementCorrect() {

}

function incrementWrong() {

}

function showFinalScore() {

}

function nextQuestion() {

}

function startAgain() {

}
