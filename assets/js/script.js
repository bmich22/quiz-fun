// Wait for the DOM to finish loading before beginning the quiz
// Listen for click on start button

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("start").addEventListener("click", function() {
        alert("You clicked the start button!");
      })
    })      

// function runQuiz() {
  const questionContent = [
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
    
// }

// function displayQuestion() {

// }

// function checkAnswer() {

// }

// function showResult() {

// }

// function incrementCorrect() {

// }

// function incrementWrong() {

// }

// function showFinalScore() {

// }

// function nextQuestion() {

// }

// function startAgain() {

// }
