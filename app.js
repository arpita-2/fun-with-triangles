const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answers-btn");
const outputEl = document.querySelector(".output");

submitBtn.addEventListener("click", calculateScore);

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "45°",
];

function calculateScore() {
  const formResults = new FormData(quizform);
  let score = 0,
    index = 0;
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  
  outputEl.innerText = "The score is " + score;
}
