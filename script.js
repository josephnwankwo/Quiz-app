"use strict";
const currentNumberOfQuestion = document.querySelector(".number-of-questions");
const questionOutput = document.querySelector(".question-box");

// Buttons
const firstAnswerButton = document.querySelector(".answerbtn-1");
const secondAnswerButton = document.querySelector(".answerbtn-2");
const thirdAnswerButton = document.querySelector(".answerbtn-3");
const fourthAnswerButton = document.querySelector(".answerbtn-4");
const fifthAnswerButton = document.querySelector(".answerbtn-5");

/**
 * User clicks a btn
 * check if the btn click answers the question
 * check if it is correct
 * if it correct, user should be given the next question while the btn turns white
 * if the btn the user clicked is wrong, add an alert 'You are wrong', and make the btn turn red
 * so the user, goes to the next question only when he is correct
 * the next, question, you change the question, and the number of question, i.e. Question 2 out of 5
 * continue the process
 * if user picks the right question, switch to the next and also the button value and the current number of question
 */

// check if the btn click answers the question
function main() {
  firstAnswerButton.addEventListener("click", checkAnswer1);
  secondAnswerButton.addEventListener("click", checkAnswer2);
  thirdAnswerButton.addEventListener("click", checkAnswer3);
  fourthAnswerButton.addEventListener("click", checkAnswer4);
  fifthAnswerButton.addEventListener("click", checkAnswer5);
}
main();

function checkAnswer1() {
  firstAnswerButton.style.backgroundColor = "green";
  currentNumberOfQuestion.textContent = "Question 2 out 5";
  questionOutput.textContent =
    'How many time was "DO NOT BE AFRAID" mentioned in the bible';
}

function checkAnswer2() {
  secondAnswerButton.style.backgroundColor = "red";
}

function checkAnswer3() {
  thirdAnswerButton.style.backgroundColor = "red";
}

function checkAnswer4() {
  fourthAnswerButton.style.backgroundColor = "red";
}

function checkAnswer5() {
  fifthAnswerButton.style.backgroundColor = "red";
}
