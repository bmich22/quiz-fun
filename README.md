# Quiz - Fun 
Quiz - Fun is a website that utilizes JavaScript to host short quizzes on a variety of subjects. Currently it has one quiz about the American NFL football team, the Pittsburgh Steelers. The goal of Quiz - Fun is to provide users with fun, short quizzes on a variety of subjects.  The look is simple, and it easy to navigate.  It is easy to add new subjects, the script-data.js page can be copied and edited with a new subject and questions, and linked to index.html.

## Mockups

![screenshot](readme-images/Quiz%20Fun%20README%20Img.png) 

## Color Scheme
The color scheme for Quiz - Fun is clean and simple, a light gray background on the opening page and buttons and messages are in primary colors.  The logo is a red question mark on a black background.
* rgb(235, 233, 233) is the background color for the opening page
* #000000 (black) is used for the opening page and question text
* #ffffff (white) is used for the navigation and links on the header and footer
* #008000 (green)is used for the background color of the start button, the answer choice buttons and the start-again buttons.
* #373636 (dark gray) is used for the next button to differntiate it with green answer choice buttons
* #ff0000 (red) is used to show the INCORRECT! message and the incorrect score number
* #ffff00 (blue) is used to show the CORRECT! message and the correct score number

## Typography
Quiz-Fun uses one font, Poppins, utilizing Poppins at a different weights for the title, button text, questions and scores. Poppins italic at a smaller size was used for the source text that displays at the bottom of the page for each question. 

## Wireframe
The original design of Quiz - Fun was going to utilize an image to display the question next to the buttons for answer choices. The final design did not use images so that it would be easier to add more subjects.  Also the centered design makes the site easily responsive, with only a few size changes in media queries for smaller screens.

![screenshot](readme-images/Wireframe%20img.png) 

## Features
### Existing

| Feature | Description | Screenshot  | Screenshot  |
|-------- | ----------- | ---------- | ---------- |
| Favicon | Quiz - Fun has a custom favicon that featuers of bold red question mark on a blackground. It displays next to the page title in the browser tab. | ![screenshot](assets/images/favicon%2040x40.png) |
|Landing Page | The landing page is very straightforward, it shows the subject of the quiz with a green start button to start. As quiz subjects are added, the landing page will display button choices of subjects first, that on click, will take the user to the landing page for that quiz.| ![screenshot](readme-images/Landing%20page%20mobile%20Quiz%20-%20Fun.png) | ![screenshot](readme-images/Landing%20page%20Quiz%20-%20Fun.png)
|Quiz Subject | The subject of the quiz is displayed in italics and as quiz subjects are added, the subject will be displayed when the correcsponding button is clicked| ![screenshot](readme-images/subject%20Quiz%20-%20Fun%20img.png | 
| Start Button | On click of the this button starts the quiz | ![screenshot](readme-images/start%20button%20Quiz%20-%20Fun%20img.png) |  |
| Quiz question | On click of the start button takes the user to the first question of the quiz.  The quiz question is black bold text at the top and the answer choices are in green stacked vertically. There is one sentence, on this page only, that instructs the user how to play. | ![screenshot](readme-images/quiz%20page%20Quiz%20-%20Fun.png) | ![screenshot](readme-images/quiz%20page_mobile%20Quiz%20-%20Fun.jpg) |
| Green Choice Buttons | The user must click on one of the green answer choice buttons. On click of the button, a result will show either CORRECT! in red, or INCORRECT! in blue.  The button that was chosen will change color to red or blue, whether it was the correct choice or not. Also, the coice button will be disabled after the choice is made so the user cannot keep clicking on them.| ![screenshot](readme-images/onclick%20green%20answer%20button%20Quiz%20-%20Fun%20img.png) | ![screenshot](readme-images/onclick%20green%20answer%20button_incorrect_mobile%20Quiz%20-%20Fun%20img.png.jpg) |
| Next Button | The user clicks next to display the next question. The choice buttons all turn back to green and become active again.  The next button is disabled until an answer is clicked.| ![screenshot](readme-images/next%20button%20Quiz%20-%20Fun%20img.png) 
| Score area | The correct and incorrect scores are incremented with each question and are displayed underneath the next button. Correct scores are displayed in blue, incorrect scores are displayed in red. | ![screenshot](readme-images/score%20area%20Quiz%20-%20Fun%20img.png) 
| Source | The source for each question is displayed at the bottom of the page in italic, smaller size text. |![screenshot](readme-images/source%20Quiz%20-%20Fun%20img.png) |
|Final Score | Once the array of questions is finished, the click on the next button will take the user to the Final Score page that displays the total correct answers out of the total number of questions.| ![screenshot](readme-images/final%20score%20Quiz%20-%20Fun%20img.png) |
|Play Again Button | On click of the play again button, the page will be refreshed and the user can start the quiz again. The button is green with white text. | ![screenshot](readme-images/play%20again%20button%20Quiz%20-%20Fun%20img.png)







