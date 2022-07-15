// create timer, to countdown

// start button initiates game and changes html screen
// questions pop up, with answer buttons, when clicked right answers ding and go to next question
// wrong answers ding/deduct time and go to next question

// once timer ends, then game ends with sound

// change to end screen with high score and intials input
// need to log game score and initials

// HS link to view high scores
// create list of ranking high scores saved locally, if not reset
// create go back btn to return home, reset btn to clear cache

// get elements
const start_btn = document.getElementById(`start_btn`);
const ansr_btn1 = document.getElementById(`ansr_btn1`);
const ansr_btn2 = document.getElementById(`ansr_btn2`);
const ansr_btn3 = document.getElementById(`ansr_btn3`);
const ansr_btn4 = document.getElementById(`ansr_btn4`);
const submit_btn = document.getElementById(`submit_btn`);
const back_btn = document.getElementById(`back_btn`);
const clear_btn = document.getElementById(`clear_btn`);

// start quiz
document.getElementById(`start_btn`).addEventListener(`click`, () => {
  document.style.setProperty(`--display`, `none`);
});
