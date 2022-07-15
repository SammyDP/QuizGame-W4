// -create timer, to countdown
// -when clicked right answers ding and go to next question
// -wrong answers ding/deduct time and go to next question
// -once timer ends, then game ends with sound
// -final score and intials input, creates list to be saved
// -reset btn to clear cache

// ------------
// get elements
// ------------

// buttons
const start = document.getElementById(`start-btn`);
const answer1 = document.getElementById(`ansr_btn1`);
const answer2 = document.getElementById(`ansr_btn2`);
const answer3 = document.getElementById(`ansr_btn3`);
const answer4 = document.getElementById(`ansr_btn4`);
const submit = document.getElementById(`submit_btn`);
const back = document.getElementById(`back_btn`);
const clear = document.getElementById(`clear_btn`);
const viewHs = document.getElementById(`view-hs`);

// class phases
const quizIntro = document.querySelector(`.quiz_intro`);
const questScrn = document.querySelector(`.question_screen`);
const fnshScrn = document.querySelector(`.finish_screen`);
const hghScrs = document.querySelector(`.highscores_screen`);

// section elements
const score = document.querySelector(`.score`);
const time = document.getElementById(`time`);

// view high scores
viewHs.addEventListener("click", () => {
  quizIntro.style.display = "none";
  score.style.display = "none";
  viewHs.style.display = "none";
  fnshScrn.style.display = "none";
  hghScrs.style.display = "block";
});

// start quiz
start.addEventListener("click", () => {
  quizIntro.style.display = "none";
  questScrn.style.display = "block";
  viewHs.style.display = "none";
});

// timer

// game begins

// finish game
submit.addEventListener("click", () => {
  fnshScrn.style.display = "none";
  score.style.display = "none";
  viewHs.style.display = "none";
  hghScrs.style.display = "block";
});

// highscore/game reset
back.addEventListener("click", () => {
  hghScrs.style.display = "none";
  quizIntro.style.display = "block";
  score.style.display = "flex";
  viewHs.style.display = "flex";
});

clear.addEventListener("click", () => {});
