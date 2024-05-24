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
  let quest = questionContent[0].question;
  let ch1 = questionContent[0].choice1;
  let ch2 = questionContent[0].choice2;
  let ch3 = questionContent[0].choice3;
  let ch4 = questionContent[0].choice4;
  let correctAns = questionContent[0].correctAnswer;

  displayQuestion(quest, ch1, ch2, ch3, ch4, correctAns);

}

function displayQuestion(quest, ch1, ch2, ch3, ch4, correctAns) {
  document.getElementById("start-page").setAttribute("hidden", "hidden");
  document.getElementById("quiz-page").removeAttribute("hidden");
  document.getElementById("question").textContent = quest;
  document.getElementById("choiceA").textContent = ch1;
  document.getElementById("choiceB").textContent = ch2;
  document.getElementById("choiceC").textContent = ch3;
  document.getElementById("choiceD").textContent = ch4;

  checkAnswer(correctAns);

}

function checkAnswer(correctAns) {
  let choices = document.getElementById("choices-area");
  choiceButtons = choices.getElementsByTagName("button");

  for (let button of choiceButtons) {

    button.addEventListener("click", function () {
      let result = "";
      if (this.textContent === correctAns) {
        alert("correct");
          result = "Correct!"
          showResult(result); incrementCorrect();
      } else {
        alert("incorrect");
          result = "Incorrect!"
          showResult(result); incrementWrong();
    }
    
  })
}

function showResult(result) {
  document.getElementById("result-area").removeAttribute("hidden");
  document.getElementById("result-text").textContent = result;

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

}

