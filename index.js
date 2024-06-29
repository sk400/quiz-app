import { scienceTechQuestions } from "./questions.js";

const form = document.querySelector(".quiz-form");
const scoreContainer = document.getElementById("score");
const resultBox = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let score = 0;

  const rightAnswers = [];
  const userAnswers = [];

  scienceTechQuestions.forEach((question) => {
    rightAnswers.push(question.solution);
  });

  for (let index = 1; index <= questions.length; index++) {
    const questionNo = `q${index}`;
    userAnswers.push(form[questionNo].value);
  }

  questions.forEach((element, index) => {
    if (String(rightAnswers[index]) === userAnswers[index]) {
      score++;

      element.classList.add("correct");
    } else {
      element.classList.add("wrong");
    }
  });

  scrollTo(0, 0);

  resultBox.classList.remove("hide");
  scoreContainer.innerHTML = `Your score is ${score}/${rightAnswers.length}`;
});
